// let firstQuery = window.prompt("Search for...")
let secondQuery = "sea"
const container = document.querySelector("#container")


    


// const firstButton = function(){
//     fetch(`https://api.pexels.com/v1/search?query=${firstQuery}`, {
//         headers:
//             {Authorization: "563492ad6f91700001000001f6e3485e3a9c43ab921a7e172ac6a8d3"}
//     })
//     .then(response => response.json())
//     .then(data => {
        
//         let arrayOfResults = data.photos
//         console.log(data.per_page)
//         for(let i = 0; i < arrayOfResults.length; i++){
//             container.innerHTML += `<div class = "card col-md-3"> 
//             <img src =${arrayOfResults[i].src.medium}>
//             </div>`

//         }
        
//         console.log(arrayOfResults)
//     })
//     .catch(error => console.error(error))
// }



// firstButton()

const secondaryButton = document.querySelector("#secondaryButton")


const secondary = function(){
    fetch(`https://api.pexels.com/v1/search?query=${secondQuery}`, {
        headers:
            {Authorization: "563492ad6f91700001000001f6e3485e3a9c43ab921a7e172ac6a8d3"}
    })
    .then(response => response.json())
    .then(data => {
        let arrayOfResults = data.photos
        console.log(arrayOfResults)
        for(let i = 0; i < arrayOfResults.length; i++){
            container.innerHTML += `<div class = "card col-md-3"> 
            <img src =${arrayOfResults[i].src.medium}>
            </div>`
        }

    })


    .catch(error => console.error(error))
    
}
secondaryButton.addEventListener("click", secondary)





const userSubmit = document.querySelector("#userSubmit")
const userInput = document.querySelector("#userInput")

const userSearch = function(){
    fetch(`https://api.pexels.com/v1/search?query=${userInput.value}`, {
        headers:
            {Authorization: "563492ad6f91700001000001f6e3485e3a9c43ab921a7e172ac6a8d3"}
    })
    .then(response => response.json())
    .then(data => {
        let arrayOfResults = data.photos
        console.log(arrayOfResults)
        for(let i = 0; i < arrayOfResults.length; i++){
            container.innerHTML += `<div class = "card col-md-3"> 
            <img src =${arrayOfResults[i].src.medium}>
            </div>`
        }
        
    })


    .catch(error => console.error(error))
    
}
userSubmit.addEventListener("click", userSearch)

let clearBtn = document.querySelector("#clear")

let clear = () => {
    container.innerHTML = " "
    userInput.value = " "
    userInput.focus()
}

clearBtn.addEventListener("click", clear)
window.onload = clear()





// const randomId = function(){
//     let generatedId = 
//     return idIs = generatedId
// }

// console.log(randomId)

// const randomImages = function(){
//     fetch(`https://api.pexels.com/v1/photos/${Math.floor(Math.random()*188456)}`, {
//         headers:
//             {Authorization: "563492ad6f91700001000001f6e3485e3a9c43ab921a7e172ac6a8d3"}
//     })
//     .then(response => {
//         if(response.status === 200)
//             return response.json()
//         })
//     .then(data => {
//         let arrayOfResults = data
//         console.log(arrayOfResults)
        
//         for(let i = 0; i < 15; i++){
//             container.innerHTML += `<div class = "card col-md-3"> 
//             <img src =${arrayOfResults[i].src.medium}>
//             </div>`
//         }
        
//     })

// }
// secondaryButton.addEventListener("click", randomImages)










// const randomImages = function(){
//     fetch(`https://api.pexels.com/v1/photos/${Math.floor(Math.random()*188456)}`, {
//         headers:
//             {Authorization: "563492ad6f91700001000001f6e3485e3a9c43ab921a7e172ac6a8d3"}
//     })
//     .then(response => response.json())
//     .then(data => {
//         let arrayOfResults = data
//         console.log(arrayOfResults)
//         for(let i = 0; i < 15; i++){
//             container.innerHTML += `<div class = "card col-md-3"> 
//             <img src =${arrayOfResults[i].src.medium}>
//             </div>`
//         }
        
//     })

// }
// secondaryButton.addEventListener("click", randomImages)