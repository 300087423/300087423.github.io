const hours = new Date().getHours() // get the current hour
const key = "It's a secret to everybody."
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const welcome = document.querySelector("#welcome");
const p = document.querySelector("p");
const todor = document.querySelector("#buttonToDo");
const todo = document.querySelector("#todoList")

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");


if(isMorning == true){
    p.TextContent = "good morning"
}
else if(isAfternoon == true){
    p.textContent = "good afternoon"
}
else if(isEvening == true){
    p.textContent = "good evening"
}
else{
    p.textContent = "something went wrong"
}

localStorage.setItem(key, "buy something will ya?")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
setInterval(() => {
    currentImage++;
    if (currentImage > urls.length){
        currentImage = 0;
    }
    showImages();
}, 5000)

nextButton.addEventListener("click", () => {
    currentImage++;
    if (currentImage > urls.length){
        currentImage = 0;
    }
    showImages();
})
prevButton.addEventListener("click", () => {
    currentImage--;
    if (currentImage > urls.length){
        currentImage = 0;
    }
    showImages();
})


todoList[
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]


// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Add a new item to the list
todor.addEventListener("click", () => {
todos.push({ text: newtodo.value, completed: false })

// Save the list to local storage

localStorage.setItem('todo-list', JSON.stringify(todos))
})
// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const renderTodos = (todo) => {
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)
}
const TheRandomNumber = Math.floor(Math.random() * 1024) + 1
const getRandomPokemon = async () => {
 
    const url = await fetch('https://pokeapi.co/api/v2/pokemon/' + TheRandomNumber)
    const pokemon = await url.json()
    return pokemon
   // return url, TheRandomNumber;
   //should be using fetch here, should be getting the pokemon data here, then passing the pokemin data into render pokemon

}
//console.log(getRandomPokemon());

const renderPokemon = pokemon => {
    const img = document.createElement('img')
    const theID = pokemon
    console.log(theID);
    
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${TheRandomNumber}.png` // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + TheRandomNumber + ".png" /// url of the image from the 'front_default' property
    img.alt = pokemon.name //"https://pokeapi.co/api/v2/pokemon/" + TheRandomNumber // name of the pokemon
    console.log(img.src)
    const parentElement = document.querySelector("#pokemon")
    parentElement.append(img)
    return parentElement;
}
renderPokemon(getRandomPokemon())
 

renderTodos(todos);