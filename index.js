const createModal = (message) => {
    let modalContainer = document.getElementById("modalContainer")
    modalContainer.removeChild(modalContainer.firstChild)
    modalContainer.classList.toggle("hide")
    const modal = createElement("div", "modal")
    const modalHeader = createElement("div", "modal_header", message)
    const modalBody = createElement("div", "modal_body")
    const confirmationButton = createElement("button", " ",  "Yes")
    const cancelButton = createElement("button", "", "Cancel")
    modalBody.append(confirmationButton, cancelButton)
    modal.append(modalHeader, modalBody)
    modalContainer.appendChild(modal)
}

const createElement = (element, className="", textContent="") => {
   let node = document.createElement(element)
   node.className = className
   node.textContent = textContent
   if(element==="button"){
       createButtonFunctionality(node)
   }
   return node
}

const createButtonFunctionality = (node) => {
    node.onclick = () => {
        displayText(node.textContent)
        document.getElementById('modalContainer').classList.toggle("hide")
    }
    
}

const displayText = (text) => {
    document.getElementById('display').textContent = `You just clicked ${text}`
}

