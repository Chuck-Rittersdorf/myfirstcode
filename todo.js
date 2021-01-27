
//Make shure loop
// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

// var val = 5;

// while (val > 0) {
//     console.log(val);
//     val--
//--------------------------------

let myPlaceholder = input.placeholder = 'Voer hier je todo in!';
myPlaceholder;

//clear input
function clearInput() {
    input.value = '';
    myPlaceholder;
}

//buttons with ref. to functions
let addButton = document.getElementById('add');
addButton.addEventListener("click", function() {
    addItem();
    clearInput();
})


//use enter key to click 'voeg toe' button
input.addEventListener("keyup", enterPressed);

function enterPressed(event) {
        if (event.keyCode === 13) {
        addButton.click();
        //check welke toets ingedrukt werd
        console.log(`Clicked: ${event.code}`)
        }

    } 


let removeButton = document.getElementById('remove');
removeButton.addEventListener("click", removeItem)

let removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener("click", removeAll)

function addItem() {
    let ul = document.getElementById('list');
    let li = ul.children;
    let input = document.getElementById('input');
    let item = input.value;
    let textnode = document.createTextNode(item);

    if (item === '') {
        myPlaceholder;
          } else {
            //create list-item
            li = document.createElement('li');
            
            //create checkbox
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.setAttribute('id', 'check');
            
            //create label
            let label = document.createElement('label');
            //label.setAttribute('for', 'item') //Optional, good practice to give labes the attribute: for='item'

            //insert the new item before the first list-item in ul
            //ul.appendChild(label);//???
            li.appendChild(checkbox);
            label.appendChild(textnode);
            li.appendChild(label); 
            ul.insertBefore(li, ul.childNodes[0]);
            
            setTimeout(() => {
                li.className = 'visual';
            }, 2);

          }
}


//functions to update list
function removeItem() {
    let ul = document.getElementById('list');
    let li = ul.children;    
    for (let index = 0; index < li.length; index++) {
         while (li[index] && li[index].children[0].checked) {
         ul.removeChild(li[index]);
        }
    }
}

function removeAll() {
    let ul = document.getElementById('list');
    let li = ul.children;
       while (li.length > 0) {
       ul.removeChild(li[0]);
       console.log(li)
             }     
}