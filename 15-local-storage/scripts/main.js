// Setup everything by getting the elements and storage space (array)
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

// Handle the addition of a new item
function addItem(e){
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;

    const item = {
        text, 
        done: false
    }

    this.reset();
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}/>
                <label for="item${i}">${plate.text}</label> 
            </li>
        `;
    }).join('');

}

function toggleDone(e){
    if(!e.target.matches('input')) return; // skip unless it's an input
    const el = e.target;

    // Get dataset index into variable and flip the done status of the item
    const index = el.dataset.index;
    items[index].done = !items[index].done;

    // Save changed list to local storage and rerender the list
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

// Attach the event listener for handling submission through function
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

// TODO: 
// Create buttons to uncheck all, check all, delete all
// Mirror changes in local storage
