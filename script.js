const body = document.body
const container = document.createElement("container")
body.appendChild(container)

body.style.display = "flex"
body.style.flex = "row"


//Creates the main box in which the individual sketchboxes will be placed
const sketchBox = document.createElement("div")
sketchBox.className = "sketchBox"
sketchBox.style.background = "black"
sketchBox.style.height = "1024px";
sketchBox.style.width = "1024px";
sketchBox.style.display = "flex"
sketchBox.style.justifyContent = "center"
sketchBox.style.flexWrap = "wrap"
container.appendChild(sketchBox)

//creates the individual sketchboxes
const boxes = 160
const boxSize = (1024 / boxes)
console.log(boxSize)
for (let i = 0; i < (boxes*boxes); i++) {
    const box = document.createElement("div")
    box.className = "box"
    box.id = "'" + i + "'"
    box.style.backgroundColor = "white"
    box.style.height = boxSize+"px"
    box.style.width = boxSize+"px"
    sketchBox.appendChild(box)
}

const hoover = document.addEventListener("mouseover", hooverEvent)
function hooverEvent(e) {
    if (e.target.id) {
        const box = document.getElementById(e.target.id)
        box.style.backgroundColor = "green"
    }
}

