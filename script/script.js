const h2 = document.querySelector('.show-filter')
const filters = document.querySelector('.filters')

const imgs = document.querySelectorAll('img')
const selectedAuto = document.querySelector('#selected-auto')
const SelectedScroll = document.querySelector('.selected-scroll')




function showFilters() {
    h2.classList.toggle('hover')
    filters.classList.toggle('display-block')
}

function album() {
    
    window.location.reload(true)
}

function auto() {
    imgs.forEach((img) => {
        img.classList.remove('auto')
        
        img.classList.toggle('auto')

    })

    function reload() {

        let time = 2000,
            currentImageIndex = 0,
            imagesAuto = document.querySelectorAll('img.auto')
        max = imagesAuto.length

        // troca de img
        function nextImage() {
            imagesAuto[currentImageIndex].classList.remove('selected')


            currentImageIndex++
            if (currentImageIndex >= max) {
                currentImageIndex = 0
            }
            imagesAuto[currentImageIndex].classList.add('selected')
        }

        // start o tempo
        function start() {
            setInterval(() => {
                nextImage()
            }, time)
        }
        start()
    }
    reload()
    
}

// scroll

function scroll() {
    
    document.querySelector("#items")
        .addEventListener("wheel", event => {
            if(event.deltaY > 0) {
                event.target.scrollBy(350,0)
            } else {
                event.target.scrollBy(-350, 0)
            }
        })
}
scroll()