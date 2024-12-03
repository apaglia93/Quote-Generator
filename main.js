//Variables and objects go here
import quotes from "./quotes.js"
let movieQuotes = quotes

let generateBtn = document.getElementById('generator-btn')
let quoteInput = document.getElementById('quote')
let titleInput = document.getElementById('movie')
let yearInput = document.getElementById('year')
let referenceContainer = document.getElementById('reference-container')

//Event handle functions go here
function quoteGenerator() {
    //randomly select a quote from our movie array by generating a random index between 0 and moviesQuotes length
    let index = getIndex()
    
    //assign the quote, title, and year from that index to variables
    let quote = movieQuotes[index].quote
    let title = movieQuotes[index].title
    let year = movieQuotes[index].year

    //update html according to variables and make title/year visibile
    referenceContainer.style.display = 'flex'

    quoteInput.innerHTML = `"${quote}"`
    titleInput.innerHTML = `${title}`
    yearInput.innerHTML = `${year}`
}

function getIndex() {
    return Math.floor(Math.random() * movieQuotes.length)
}

function generateBtnDown() {
  generateBtn.style.backgroundColor = 'white'
    generateBtn.style.color = 'darkblue'
}

function generateBtnUp() {
  generateBtn.style.backgroundColor = ''
  generateBtn.style.color = ''
}

//Event handlers go here
generateBtn.addEventListener('mousedown', generateBtnDown)
generateBtn.addEventListener('mouseup', generateBtnUp)
generateBtn.addEventListener('click', quoteGenerator)