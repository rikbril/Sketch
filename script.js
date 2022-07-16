const body = document.body
body.style.margin = "0px"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.backgroundColor = "darkgrey"

//Creates the main box in which the individual sketchboxes will be placed
function sketchBoxFunc(container, gridSize) {
    const sketchBox = document.createElement("div")
    sketchBox.className = "sketchBox"
    sketchBox.style.background = "black"
    sketchBox.style.height = gridSize+"px";
    sketchBox.style.width = gridSize + "px";
    sketchBox.style.margin = "50px"
    sketchBox.style.display = "flex"
    sketchBox.style.justifyContent = "center"
    sketchBox.style.flexWrap = "wrap"
    sketchBox.style.border = "5px solid darkslategrey"
    container.appendChild(sketchBox)
    return sketchBox
}
//creates the individual sketchboxes
function boxes(sketchBox, pixelCount, boxes) {
    for (let i = 0; i < (boxes * boxes); i++) {
        const box = document.createElement("div")
        box.className = "box"
        box.id = "'" + i + "'"
        box.style.height = pixelCount + "px"
        box.style.width = pixelCount + "px"
        sketchBox.appendChild(box)
    }    
}
//creates header
function headerFunc() {
    const header = document.createElement("header")
    header.style.margin = "15px"
    header.style.alignSelf = "center"
    header.style.fontSize = "40px"
    header.className = "header"
    header.textContent = "Pixelated E-sketch"
    header.style.backgroundColor = "grey"
    header.style.padding = "35px"
    header.style.paddingLeft = "900px"
    header.style.paddingRight = "900px"
    body.appendChild(header)
    console.log("appended header")
}
//creates container 
function containerFunc() {
    const container = document.createElement("div")
    container.className = "container"
    container.style.display = "flex"
    container.style.justifySelf = "center"
    container.style.alignSelf = "center"
    body.appendChild(container)
    console.log("appended container")
    return container
}
//creates ui --red
function uiFunc(container) {
    const ui = document.createElement("div")
    ui.className = "ui"
    ui.style.display = "flex"
    ui.style.flexDirection = "column"
    ui.style.backgroundColor = "red"
    ui.style.margin = "100px"
    container.appendChild(ui)
    return ui
}
//creates buttons --brown
function buttons(ui) {
    const array = ["color", "colour grabber", "erease field", "fill field","box size", "grid size"]
    for (let i = 0; i < array.length; i++) {
        const button = document.createElement("button")
        button.className = "option"
        button.style.width = "250px"
        button.style.margin = "10px"
        button.textContent = array[i]
        button.style.backgroundColor = "brown"
        ui.appendChild(button)
    }
}

function gridAndBoxSize(boxAmount, gridSize) {
    const pixelCount = (Math.floor((gridSize/boxAmount)))
    return pixelCount 
}


//keeps listening for hoover events in order to color the sketchbox
const hoover = document.addEventListener("mouseover", hooverEvent)
function hooverEvent(e) {
    if (e.target.id) {
        const box = document.getElementById(e.target.id)
        box.style.backgroundColor = "green"
        console.log(e.target.id + "pixelsize :" + box.getBoundingClientRect().width)
    }
}
//runs all the functions
function run() {

    const pixelCount = gridAndBoxSize(40, 1200)
    headerFunc()
    const container = containerFunc()
    const ui = uiFunc(container)
    buttons(ui)
    const sketchBox = sketchBoxFunc(container, 1200)
    boxes(sketchBox, pixelCount, 40)
    console.log(sketchBox.getBoundingClientRect().height, " ", sketchBox.getBoundingClientRect().width)

    console.log("ran all the functions")
} run()
