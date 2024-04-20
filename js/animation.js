const animObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-anim_active")
        } else {
            if (!entry.target.classList.contains("scroll-anim_once")) {
                entry.target.classList.remove("scroll-anim_active")
            }
        }
    });
});
const scrollAnim = document.querySelectorAll(".scroll-anim");
if (scrollAnim.length > 0) {
    scrollAnim.forEach(animItem => {
        animObserver.observe(animItem)
    });
};