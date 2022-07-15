const body = document.body
body.style.backgroundColor = "lightblue"

//Creates the main box in which the individual sketchboxes will be placed
const sketchBox = document.createElement("div")
sketchBox.className = "sketchBox"
sketchBox.style.background = "black"
sketchBox.style.padding = "2px"
sketchBox.style.height = "542px";
sketchBox.style.width = "542px";
sketchBox.style.gap = "2px";
sketchBox.style.display = "flex"
sketchBox.style.justifyContent = "center"
sketchBox.style.flexWrap = "wrap"
body.appendChild(sketchBox)

//creates the individual sketchboxes
const boxes = 256
for (let i = 0; i < boxes; i++) {
    const box = document.createElement("div")
    box.className = "box"
    box.id = "'" + i + "'"
    box.style.backgroundColor = "white"
    box.style.height = "32px"
    box.style.width = "32px"
    sketchBox.appendChild(box)
}

const hoover = document.addEventListener("mouseover", hooverEvent)
function hooverEvent(e) {
    if (e.target.id) {
        const box = document.getElementById(e.target.id)
        box.style.backgroundColor = "green"
    }
}

