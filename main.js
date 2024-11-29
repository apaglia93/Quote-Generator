//Variables and objects go here
let generateBtn = document.getElementById('generator-btn')
let quoteInput = document.getElementById('quote')
let titleInput = document.getElementById('movie')
let yearInput = document.getElementById('year')
let referenceContainer = document.getElementById('reference-container')

let movieQuotes = [["May the force be with you.", "Star Wars", "1977"]]

//Functions go here
function quoteGenerator() {
    //randomly select a quote from our movie array by generating a random index between 0 and moviesQuotes length
    let index = getIndex()
    
    //assign the quote, title, and year from that index to variables
    let quote = movieQuotes[index][0]
    let title = movieQuotes[index][1]
    let year = movieQuotes[index][2]

    //update html according to variables and make title/year visibile
    referenceContainer.style.display = 'flex'

    quoteInput.innerHTML = `"${quote}"`
    titleInput.innerHTML = `${title}`
    yearInput.innerHTML = `${year}`
}

function getIndex() {
    return Math.floor(Math.random() * movieQuotes.length)
}

//Event handlers go here
generateBtn.onmousedown = function() {
    generateBtn.style.backgroundColor = 'white'
    generateBtn.style.color = 'darkblue'
}

generateBtn.onmouseup = function() {
    generateBtn.style.backgroundColor = ''
    generateBtn.style.color = ''
}

generateBtn.onclick = quoteGenerator