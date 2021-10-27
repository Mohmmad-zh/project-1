const input = document.querySelector("#text")
const ul = document.querySelector(".list")
const button = document.querySelector("#btn")
const form = document.querySelector(".input")

button.addEventListener('click', function () {

    const text = input.value

    const li = document.createElement("li")

    li.innerHTML = text


    li.addEventListener("click", function (event) {

        const clickedElement = event.target

        clickedElement.classList.add("item-done")

        clickedElement.style.setProperty("color", "White")
        clickedElement.style.textDecoration = "line-through"
    })
    form.addEventListener("submit",(e) =>{
        e.preventDefault()
    })
    li.addEventListener("dblclick", () => {
        const e = document.createAttribute("contentEditable",true)
        li.setAttributeNode(e)
    })


    li.addEventListener("contextmenu", (remove)=> {
        remove.preventDefault()

        li.remove();
    })
    

    ul.append(li)

    input.value = ""
})