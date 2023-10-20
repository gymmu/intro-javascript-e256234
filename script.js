function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText(){
  const elemToDeleteText= document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter (){
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num 
}

function decrementCounter (){
  const textRunter= document.querySelector("#counter")
  let num = parseInt(textRunter.textContent)
  num = num - 1 
  textRunter.textContent = num 
}