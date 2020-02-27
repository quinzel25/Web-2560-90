
// grabs all the elements from the id tags
let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let clearButton = document.querySelector('#clear')


console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available

// initializes global variable and calls the function
let countryListGlobal = countryFunction();

// creates function that grabs a random country code, that country codes name
function countryFunction () {
    let rando = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
    let countryName = rando.name
    let countryCode = rando['alpha-2']
    // displays country name on the page
    randomCountryElement.innerHTML = countryName
    console.log(countryCode)
    // adds the name and country code to the list
    let countryList = [countryName,countryCode]
    return countryList
}


// creates the game function
function game (doneCallback) {

    let countryCode = countryListGlobal[1]
    // country code variable in the API url changes the information on the server
    fetch(`https://api.worldbank.org/v2/country/${countryCode}?format=json`)
        // promise whether its going to pass or fail
        .then(res => res.json())
        // creates variable so you can grab data from the API
        .then(worldData => {
        console.log(worldData)

            // grabs the country cap from the apia
            let countryCap = worldData[1][0]['capitalCity']
            console.log(countryCap)
            // returns this when the function is called
            doneCallback(null, countryCap)


        })
        // error handling
        .catch(err => {
            console.log(err)
            doneCallback(err)
        })
}

// when submit button is pressed it will call the game function which grabs the country capital
// from the API and tests to see if it matches (ignoring case) the user input
submitButton.addEventListener('click', function () {
    let countryName = countryListGlobal[0]

    let input = userAnswerElement.value
    // calls the game fuction
    game(function (err, countryCap) {
        console.log(input)
        console.log(countryCap)
        // if there is an error displays an alert
        if (err){
            alert("Uh oh")
        }
        // if correct, displays this message
        if (input.toLowerCase() === countryCap.toLowerCase()) {

            resultTextElement.innerHTML = `Correct! ${input} is the capital of ${countryName}`

        }
        // if incorrect, displays this message and the correct capital
        else {
            resultTextElement.innerHTML = `Incorrect :( The capital of ${countryName} is ${countryCap}.`
        }

    })
    // calls the country function once again and sets all text to nothing
    clearButton.addEventListener('click', function () {
        countryFunction()
        resultTextElement.innerHTML = ''
        userAnswerElement.value = ''
    })

})



