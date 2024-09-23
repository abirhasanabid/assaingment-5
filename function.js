// get element by id
function gettingElementById(id) {
   const tags = document.getElementById(id);
   return tags
}


// class List
function getAtributeById(id) {
   const classList = document.getElementById(id).classList
   return classList;
}

// innerText
function getInnerTextById(id) {
   const tags = parseFloat(document.getElementById(id).innerText);
   return tags;
}

// input Value
function getInputValueById(id) {
   const value = parseFloat(document.getElementById(id).value);
   return value;
}