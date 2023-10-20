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

function resetCounter(){
  const textAuf0Stellen= document.querySelector("#counter")
  let num = parseInt(textAuf0Stellen.textContent)
  num = 0
  textAuf0Stellen.textContent = num 
}

function writeText(){
  const TextSchreiben= document.querySelector("#input")
  const inputText= TextSchreiben.value 
  const outputElement= document.querySelector("#output")
  const outputText= outputElement.textContent

  outputElement.textContent= outputText + "\n" + inputText 
}

function addImage(){
  const BildEinfügen= document.querySelector("#Image")
}