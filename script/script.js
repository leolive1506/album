const h2 = document.querySelector('.show-filter')
const filters = document.querySelector('.filters')

const imgs = document.querySelectorAll('img')
const selectedAuto = document.querySelector('#selected-auto')



const itemsWrapper = document.querySelector('#items-wrapper ')
const items = document.querySelector("#items")
const item = document.querySelectorAll(".item")


function removeClassImgs () {
    imgs.forEach((img) => {
        img.classList.remove('auto')
        img.classList.remove('selected')
        img.classList.remove('scroll')
    })

    itemsWrapper.classList.remove("wrapper-selected")
    items.classList.remove("items-selected")
    item.forEach(item => {

        item.classList.remove("item-selected")
    })

    contentWidht.classList.remove("active")
   
}

function showFilters() {
    h2.classList.toggle('hover')
    filters.classList.toggle('display-block')
}

function album() {
    
    removeClassImgs()
}

// troca de img

function auto() {
    removeClassImgs()
    
    imgs.forEach((img) => { 
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

const content = document.querySelector('.content-filters')
const contentWidht = document.querySelector('.content-filters.width')

const SelectedScroll = document.querySelector('.selected-scroll')

function scroll() {
    
    document.querySelector("#items")
        .addEventListener("wheel", event => {
    
            // console.log(event)
            if(event.deltaY > 0) {
                event.target.scrollBy(350, 0)
            } else {
                
                event.target.scrollBy(0, 0)
            }
        })

        document.querySelector("body").style.overflow = "auto"
}


function scrollImgs() {
    clearInterval(auto)
    removeClassImgs()
    
    contentWidht.classList.toggle("active")


    itemsWrapper.classList.add("wrapper-selected")

    items.classList.add("items-selected")

    item.forEach(item => {
        item.classList.add("item-selected")
    })

    imgs.forEach(img => {
        img.classList.add("scroll")
    })
    

    scroll()
    
}



function imgs1() {
    document.querySelector("#items-wrapper.wrapper-selected").style.width = "50vw"
    item.forEach(it => {
        it.style.width = "100%"
    })
    
}
function imgs2() {
    document.querySelector("#items-wrapper.wrapper-selected").style.width = "70vw"
    item.forEach(it => {
        it.style.width = "50%"
    })

}
function imgs3() {
    document.querySelector("#items-wrapper.wrapper-selected").style.width = "80vw"
    item.forEach(it => {
        it.style.width = "34%"
    })

}

