function showMore(showItems, itemVisibleLength, showMore) {
    const items = document.querySelectorAll(showItems);
    const button = document.querySelector("[data-show-more]");
    const itemsLength = items.length;

    let currentItemsLength = showMore;

    button.addEventListener("click", () => {
        currentItemsLength += showMore;
        const itemsArray = Array.from(items);
        const showMoreItems = itemsArray.slice(0, currentItemsLength);

        showMoreItems.forEach(item => {
            item.style.display = 'block';
        });

        if (currentItemsLength >= itemsLength) {
            button.style.display = 'none';
        }
    });

    for (let i = 0; i < itemVisibleLength; i++) {
        items[i].style.display = 'block';
    }
};

showMore("[data-show-item]", 4, 4);