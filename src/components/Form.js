import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    // const [items, setItems] = useState([])
    // function handleAddItem(item){
    //   setItems(items=>[...items, item])
    // }
    function handleSubmit(e) {
        e.preventDefault();

        if (!description)
            return;

        const newItem = { description, quantity, packed: false, id: Date.now() };

        // handleAddItem(newItem)
        onAddItems(newItem);
        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>what do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((mapItem) => (
                    <option value={mapItem} key={mapItem}>
                        {mapItem}
                    </option>
                ))}
            </select>
            <input
                placeholder="item..."
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
}
