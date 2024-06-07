const count = 20
let itemIndex = 0

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const list = document.querySelector('.list')

        if (entry.isIntersecting) {
            for (let i = itemIndex; i < itemIndex + count; i++) {
                let item = document.createElement('p')

                item.textContent = i
                item.className += 'item'
                list.appendChild(item)
            }

            itemIndex = itemIndex + count
        }
    })
}, { root: null, threshold: 0.1 });

observer.observe(document.querySelector('.end'))