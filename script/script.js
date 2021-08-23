const h2 = document.querySelector('.show-filter')
const filters = document.querySelector('.filters')

const imgs = document.querySelectorAll('img')
const selectedAuto = document.querySelector('#selected-auto')


function showFilters() {
    h2.classList.toggle('hover')
    filters.classList.toggle('display-block')
}

function album() {
    
    window.location.reload(true)
}

// troca de img

function auto() {
    itemsWrapper.removeAttribute("id")
    
    imgs.forEach((img) => {
        img.classList.remove('auto')
        img.classList.add('auto')
    })

    function reload() {

        let time = 2000,
            currentImageIndex = 0,
            imagesAuto = document.querySelectorAll('img.auto')
        max = imagesAuto.length

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

const SelectedScroll = document.querySelector('.selected-scroll')

const itemsWrapper = document.createElement('div')
const items = document.createElement("div")



function addItens() {
    
    itemsWrapper.setAttribute("id", "items-wrapper")

    items.setAttribute("id", "items")

    

    itemsWrapper.appendChild(items)

    imgs.forEach(img => {
        img.classList.replace("album", "scroll")
        const item = document.createElement("div")
        item.classList.add("item")

        items.appendChild(item)
        item.appendChild(img)

        
    })
    
    document.querySelector(".content").appendChild(itemsWrapper)
    
    function scroll() {
    
        document.querySelector("#items")
            .addEventListener("wheel", event => {
        
                console.log(event)
                if(event.deltaY > 0) {
                    event.target.scrollBy(350,-5)
                } else {
                    event.target.scrollBy(-350, -6)
                }
            })
    }
    scroll()
    
}

