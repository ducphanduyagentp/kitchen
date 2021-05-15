const items = [
    {id: 1,
    item_name: "bread",
    quantity: 10,
    unit: "loaves"}
];

export function fetchItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 300);
    });
}