const selected = el => document.querySelector(el)
const selectedAll = el => document.querySelectorAll(el)

const imgs = selectedAll('img')
const itemsWrapper = selected('#items-wrapper ')
const items = selected("#items")
const item = selectedAll(".item")


function removeClassImgs () {

    imgs.forEach((img) => {
        img.classList.remove('auto', 'selected', 'scroll', 'item')
    })
    
    itemsWrapper.classList.remove("wrapper-selected")
    itemsWrapper.style.width = ""
    items.classList.remove("items-selected")

    item.forEach(item => {
        
        item.classList.remove("item-selected")
        item.style.width = ""
    })

    selected('.content-filters.width')
        .classList.remove("active")
   
}

function showFilters() {
    selected('.show-filter')
        .classList.toggle('hover')
    selected('.filters')
        .classList.toggle('display-block')
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
            imagesAuto = selectedAll('img.auto')
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
const SelectedScroll = selected('.selected-scroll')

function scroll() {
    
    items.addEventListener("wheel", event => {
    
            // console.log(event)
            if(event.deltaY > 0) {
                event.target.scrollBy(350, 0)
            } else {                
                event.target.scrollBy(0, 0)
            }
        })
}


function scrollImgs() {

    clearInterval(auto())
    removeClassImgs()
    
    selected('.content-filters.width')
        .classList.toggle("active")


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

// width imgs 
function imgs1() {
    selected("#items-wrapper.wrapper-selected").style.width = "45vw"
    item.forEach(it => {
        it.style.width = "100%"
    })
    
}
function imgs2() {
    selected("#items-wrapper.wrapper-selected").style.width = "60vw"
    item.forEach(it => {
        it.style.width = "50%"
    })

}
function imgs3() {
    selected("#items-wrapper.wrapper-selected").style.width = "70vw"
    item.forEach(it => {
        it.style.width = "34%"
    })

}

