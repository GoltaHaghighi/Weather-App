// 4a1115c7f871ab1e332fb8ee23b3009e

// api.openweathermap.org/data/2.5/weather?q=tehran&appid=4a1115c7f871ab1e332fb8ee23b3009e
const form = document.querySelector("form");
const input = document.querySelector(".input");
const msg = document.querySelector(".msg");
const ulList = document.querySelector(".cities");
const btn = document.querySelector(".btn");
const apiKey = "4a1115c7f871ab1e332fb8ee23b3009e";
const spanUl = document.querySelector(".span-ul")

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((json) => displayFunc(json))

    .catch(() => {
        alert("Search for a valid city" ) ;
        input.value = "";
    })
})
function displayFunc(json) {
    //  console.log(json)
    const {name , main , sys , weather} = json ;
    const temp = Math.floor(main.temp);
    // http://openweathermap.org/img/w/${weather[0].icon}.png
    const icon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    // console.log(weather[0].icon);
    const li = document.createElement("li");
    li.classList.add = "li";
    li.classList.add = "m-5";
    li.innerHTML = `
    <div class="wcard">
        <h2>${name}<span class="country-span">${sys.country}</span></h2>
        <h2>${temp}</span><span>&#176;</h2>
        <img src= ${icon}>
        <h6>${weather[0].description}</h6>
    </div>
    `;
    input.value = "";
    ulList.appendChild(li);
}