const hours = new Date().getHours() // get the current hour
const key = "It's a secret to everybody."
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const welcome = document.querySelector("#welcome");
const p = document.querySelector("p");

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