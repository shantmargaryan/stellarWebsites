let numberValue = document.querySelector(".benefits__number");

let startValue = 0
let endValue = parseInt(numberValue.getAttribute("data-count"))
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counter = setInterval(function () {
                startValue += 400
                numberValue.textContent = startValue
                if (startValue == endValue) {
                    clearInterval(counter)
                    numberValue.textContent = "100.000"
                }
                counterObserver.unobserve(numberValue)
            }, 0)
        }
    })
})
counterObserver.observe(numberValue)