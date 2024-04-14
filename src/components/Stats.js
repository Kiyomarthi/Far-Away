export default function Stats({ items }) {
    if (!items.length)
        return <p className="stats"><em>start your itmes</em></p>;
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const precentage = Math.round(numPacked / numItems * 100);
    return (
        <footer className="stats">
            <em>
                {precentage === 100 ? 'You got everything! ready to go.' : `👜 you have ${numItems} items on your list, and you already packed 
      ${numPacked} (${precentage}%)`}
            </em>
        </footer>
    );
}
