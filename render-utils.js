export function renderItem(item) {
    const itemEl = document.createElement('div');
    itemEl.textContent = `${item.quantity} ${item.item}`;
    return itemEl;
}
