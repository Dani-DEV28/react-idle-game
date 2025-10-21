export default function Inventory({inventory}) {
    return (
        <div className="item">
            <h3>Inventory:</h3>
            {inventory && inventory.length > 0 ? (
            <p>{inventory.map((item) => item.emoji).join(" ")}</p>
            ) : ""}
        </div>
    )
}


