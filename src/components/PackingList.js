import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, setItems }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input')
        sortedItems = items;
    if (sortBy === 'description')
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'items')
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    function handleClear() {
        const confrimed = window.confirm('are you sure to delete all items?');
        if (confrimed)
            setItems([]);
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        itemObj={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id} />
                ))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">sort by input</option>
                    <option value="description">sort by description</option>
                    <option value="items">sort by items</option>
                </select>
                <button onClick={handleClear}>Clear Items</button>
            </div>

        </div>
    );
}
