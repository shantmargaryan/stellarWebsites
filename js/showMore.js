const items = document.querySelectorAll('[data-show-item]');
const showMoreBtn = document.querySelector('[data-show-more]');

let count = 3;

showMoreBtn.addEventListener('click', (e) => {
    for (let i = count; i < count + 3; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
            
        }
    }
    count += 3;
    if (count >= items.length) {
        e.target.style.display = 'none';
    }
});

