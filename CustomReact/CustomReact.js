function renderElement(reactElement, rootContainer){
    const domElement = document.createElement(reactElement.type)
    for(const key in reactElement.props){
        domElement.setAttribute(key, reactElement.props[key])
    } 
    domElement.innerHTML = reactElement.children
    rootContainer.appendChild(domElement)
}

const root = document.getElementById("root")
const reactElement = {
    type: "h1",
    props: {
        editable: true,
    },
    children: "Editable Text"
}

renderElement(reactElement, root)