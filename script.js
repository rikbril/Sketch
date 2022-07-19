const body = document.body
const sketchGrid = document.getElementById("sketchGrid")
const colorBox = document.getElementById("colorBox")
const colorPicker = document.querySelector("#colorSelect")
const getColor = document.getElementById("getColor")
const ereaser = document.getElementById("ereaser")
const fillGrid = document.getElementById("fillGrid")
const clearGrid = document.getElementById("clearGrid")
const pixelsInGrid = document.getElementById("pixelsInGrid")

let inkt = "#000000"
let tempInkt = ""
let sampleColor = false
let pixelCount = 24
let pixelCountChecker = 24

const click = document.addEventListener("mousedown", clickEvent)

colorPicker.addEventListener("input", (e) => { inkt = e.target.value })
getColor.addEventListener("click", () => {sampleColor = true})
fillGrid.addEventListener("click", () => { fillGridWithColor(inkt) })
clearGrid.addEventListener("click", () => { tempInkt = inkt; inkt = "white"; console.log(inkt); fillGridWithColor(inkt);  inkt = tempInkt})


function clickEvent(e) {
    if (e.target.className == "gridBox") {
        if (!sampleColor) {
            changeColorOfBox(e.target.id)
        } else {
            console.log("sample color")
            sampleColor = false
            inkt = document.getElementById(e.target.id).style.backgroundColor
            colorPicker.style.background = inkt
            console.log(colorPicker)
        }
    }
}

function fillGridWithColor(inkt) {
    for (let i =0; i < (pixelCountChecker*pixelCountChecker); i++) {
        changeColorOfBox(i)
    }
}

function changeColorOfBox(targetId) {
    document.getElementById(targetId).style.background = inkt
}

function deleteChilds(parent) {
    const count = parent.childElementCount
    for (let i =0; i < count; i++) {
       sketchGrid.removeChild(sketchGrid.lastElementChild)
    }   
}
function populateGrid(pixelCount) {
    let pixelSize = Math.floor(900 / pixelCount)
    deleteChilds(sketchGrid)
    sketchGrid.style.height = (pixelCount * pixelSize) + "px"
    sketchGrid.style.width = (pixelCount * pixelSize) + "px"
    for (let i = 0; i < (pixelCount * pixelCount); i++) {
        const box = document.createElement("div")
        box.style.height = pixelSize + "px"
        box.style.width = pixelSize + "px"
        box.style.padding = "0px"
        box.style.margin = "0px"
        box.className = "gridBox"
        box.id = i
        box.style.backgroundColor = "white"
        sketchGrid.appendChild(box)
    }
    pixelCountChecker = pixelCount 
}
populateGrid(pixelCount)