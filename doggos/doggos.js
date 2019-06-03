// FrontEndMasters
// Complete Intro to Web Development, v2
// by Brian Holt


//  https://btholt.github.io/intro-to-web-dev-v2/ajax
// Using AJAX, fetch() and doggos.ceo API to get random pictures of doggos.

const doggos = document.querySelector(".doggos");
const loadingImg = document.querySelector(".loading-icon");
let breedURL = "";

function getBreed() {
    const b = document.querySelector(".breeds");
    let selectedBreed = b.options[b.selectedIndex].value;  
    if (b.selectedIndex == 0) {
        return "";
    } else if ( selectedBreed == "random") {
        return "https://dog.ceo/api/breeds/image/random";
    } else
    return "https://dog.ceo/api/breed/" + selectedBreed + "/images/random";    
}

function addNewDoggo(){
    breedURL = getBreed();

    if (breedURL === "") {
        alert('Please select breed');
        return;
    }

    const promise = fetch(breedURL);
    
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute Doggo!";
            doggos.appendChild(img);
        });   
}

function clearAll() {
    doggos.innerHTML = "";
}

document.querySelector(".add-doggo").addEventListener('click', addNewDoggo);
document.querySelector(".clear-all").addEventListener('click', clearAll);



// Things to do:
// 1. Load JSON with breeds into select field
// https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json


//loadingImg.style.display = "block";
//loadingImg.style.display = "none";


// insert in front of gallery
//const div = document.createElement("div");
// const img = document.createElement("img");
// img.src = processedResponse.message;
// img.alt = "Cute Doggo!";
// div.appendChild(img);
// doggos.insertBefore(div, doggos.childNodes[0]);
//doggos.insertBefore(img, doggos.childNodes[0]);


// console.log(processedResponse);
// console.log(processedResponse.status);