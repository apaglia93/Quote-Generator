//Variables and objects go here
let generateBtn = document.getElementById('generator-btn')
let quoteInput = document.getElementById('quote')
let titleInput = document.getElementById('movie')
let yearInput = document.getElementById('year')
let referenceContainer = document.getElementById('reference-container')

let movieQuotes = []

movieQuotes.push(["Frankly, my dear, I don't give a damn.", "Gone with the Wind", "1939"])
movieQuotes.push(["I'm gonna make him an offer he can't refuse.", "The Godfather", "1972"])
movieQuotes.push(["Toto, I've a feeling we're not in Kansas anymore.", "The Wizard of Oz", "1939"])
movieQuotes.push(["Here's looking at you, kid.", "Casablanca", "1942"])
movieQuotes.push(["Go ahead, make my day.", "Sudden Impact", "1983"])
movieQuotes.push(["All right, Mr. DeMille, I'm ready for my close-up.", "Sunset Boulevard", "1950"])
movieQuotes.push(["May the Force be with you.", "Star Wars", "1977"])
movieQuotes.push(["Fasten your seatbelts. It's going to be a bumpy night.", "All About Eve", "1950"])
movieQuotes.push(["You talkin' to me?", "Taxi Driver", "1976"])
movieQuotes.push(["What we've got here is failure to communicate.", "Cool Hand Luke", "1967"])
movieQuotes.push(["I love the smell of napalm in the morning.", "Apocalypse Now", "1979"])
movieQuotes.push(["Love means never having to say you're sorry.", "Love Story", "1970"])
movieQuotes.push(["The stuff that dreams are made of.", "The Maltese Falcon", "1941"])
movieQuotes.push(["E.T. phone home.", "E.T. the Extra-Terrestrial", "1982"])
movieQuotes.push(["They call me Mister Tibbs!", "In the Heat of the Night", "1967"])
movieQuotes.push(["Rosebud.", "Citizen Kane", "1941"])
movieQuotes.push(["Made it, Ma! Top of the world!", "White Heat", "1949"])
movieQuotes.push(["I'm as mad as hell, and I'm not going to take this anymore!", "Network", "1976"])
movieQuotes.push(["Louis, I think this is the beginning of a beautiful friendship.", "Casablanca", "1942"])
movieQuotes.push(["Bond. James Bond.", "Dr. No[h]", "1962"])
movieQuotes.push(["There's no place like home.", "The Wizard of Oz", "1939"])
movieQuotes.push(["I am big! It's the pictures that got small.", "Sunset Boulevard", "1950"])
movieQuotes.push(["Show me the money!", "Jerry Maguire", "1996"])
movieQuotes.push(["Why don't you come up sometime and see me?", "She Done Him Wrong", "1933"])
movieQuotes.push(["I'm walkin' here! I'm walkin' here!", "Midnight Cowboy", "1969"])
movieQuotes.push(["Play it, Sam. Play 'As Time Goes By.'", "Casablanca", "1942"])
movieQuotes.push(["You can't handle the truth!", "A Few Good Men", "1992"])
movieQuotes.push(["I want to be alone.", "Grand Hotel", "1932"])
movieQuotes.push(["After all, tomorrow is another day!", "Gone with the Wind", "1939"])
movieQuotes.push(["Round up the usual suspects.", "Casablanca", "1942"])
movieQuotes.push(["I'll have what she's having.", "When Harry Met Sally...", "1989"])
movieQuotes.push(["You're gonna need a bigger boat.", "Jaws", "1975"])
movieQuotes.push(["Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!", "The Treasure of the Sierra Madre", "1948"])
movieQuotes.push(["I'll be back.", "The Terminator", "1984"])
movieQuotes.push(["Today, I consider myself the luckiest man on the face of the Earth.", "The Pride of the Yankees", "1942"])
movieQuotes.push(["If you build it, he will come.", "Field of Dreams", "1989"])
movieQuotes.push(["My mama always said life was like a box of chocolates. You never know what you're gonna get.", "Forrest Gump", "1994"])
movieQuotes.push(["We rob banks.", "Bonnie and Clyde", "1967"])
movieQuotes.push(["Plastics.", "The Graduate", "1967"])
movieQuotes.push(["We'll always have Paris.", "Casablanca", "1942"])
movieQuotes.push(["I see dead people.", "The Sixth Sense", "1999"])
movieQuotes.push(["Stella! Hey, Stella!", "A Streetcar Named Desire", "1951"])
movieQuotes.push(["Oh, Jerry, don't let's ask for the moon. We have the stars.", "Now, Voyager", "1942"])
movieQuotes.push(["Shane. Shane. Come back!", "Shane", "1953"])
movieQuotes.push(["Well, nobody's perfect.", "Some Like It Hot", "1959"])
movieQuotes.push(["It's alive! It's alive!", "Frankenstein", "1931"])
movieQuotes.push(["Houston, we have a problem.", "Apollo 13", "1995"])
movieQuotes.push(["You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?", "Dirty Harry", "1971"])
movieQuotes.push(["You had me at 'hello.'", "Jerry Maguire", "1996"])
movieQuotes.push(["One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.", "Animal Crackers", "1930"])
movieQuotes.push(["There's no crying in baseball!", "A League of Their Own", "1992"])
movieQuotes.push(["La-dee-da, la-dee-da.", "Annie Hall", "1977"])
movieQuotes.push(["A boy's best friend is his mother.", "Psycho", "1960"])
movieQuotes.push(["Greed, for lack of a better word, is good.", "Wall Street", "1987"])
movieQuotes.push(["Keep your friends close, but your enemies closer.", "The Godfather Part II", "1974"])
movieQuotes.push(["As God is my witness, I'll never be hungry again.", "Gone with the Wind", "1939"])
movieQuotes.push(["Well, here's another nice mess you've gotten me into!", "Sons of the Desert", "1933"])
movieQuotes.push(["Say 'hello' to my little friend!", "Scarface", "1983"])
movieQuotes.push(["What a dump.", "Beyond the Forest", "1949"])
movieQuotes.push(["Mrs. Robinson, you're trying to seduce me. Aren't you?", "The Graduate", "1967"])
movieQuotes.push(["Gentlemen, you can't fight in here! This is the War Room!", "Dr. Strangelove", "1964"])
movieQuotes.push(["Elementary, my dear Watson.", "The Adventures of Sherlock Holmes", "1939"])
movieQuotes.push(["Take your stinking paws off me, you damned dirty ape.", "Planet of the Apes", "1968"])
movieQuotes.push(["Of all the gin joints in all the towns in all the world, she walks into mine.", "Casablanca", "1942"])
movieQuotes.push(["Here's Johnny!", "The Shining", "1980"])
movieQuotes.push(["They're here!", "Poltergeist", "1982"])
movieQuotes.push(["Is it safe?", "Marathon Man", "1976"])
movieQuotes.push(["Wait a minute, wait a minute. You ain't heard nothin' yet!", "The Jazz Singer", "1927"])
movieQuotes.push(["No wire hangers, ever!", "Mommie Dearest", "1981"])
movieQuotes.push(["Mother of mercy, is this the end of Rico?", "Little Caesar", "1931"])
movieQuotes.push(["Forget it, Jake, it's Chinatown.", "Chinatown", "1974"])
movieQuotes.push(["I have always depended on the kindness of strangers.", "A Streetcar Named Desire", "1951"])
movieQuotes.push(["Hasta la vista, baby.", "Terminator 2: Judgment Day", "1991"])
movieQuotes.push(["Soylent Green is people!", "Soylent Green", "1973"])
movieQuotes.push(["Open the pod bay doors, HAL.", "2001: A Space Odyssey", "1968"])
movieQuotes.push(["Surely you can't be serious.", "Airplane!", "1980"])
movieQuotes.push(["Yo, Adrian!", "Rocky", "1976"])
movieQuotes.push(["Hello, gorgeous.", "Funny Girl", "1968"])
movieQuotes.push(["Toga! Toga!", "National Lampoon's Animal House", "1978"])
movieQuotes.push(["Listen to them. Children of the night. What music they make.", "Dracula", "1931"])
movieQuotes.push(["Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.", "King Kong", "1933"])
movieQuotes.push(["My precious.", "The Lord of the Rings: The Two Towers", "2002"])
movieQuotes.push(["Attica! Attica!", "Dog Day Afternoon", "1975"])
movieQuotes.push(["Sawyer, you're going out a youngster, but you've got to come back a star!", "42nd Street", "1933"])
movieQuotes.push(["Tell 'em to go out there with all they got and win just one for the Gipper.", "Knute Rockne, All American", "1940"])
movieQuotes.push(["A martini. Shaken, not stirred.", "Goldfinger[aa]", "1964"])
movieQuotes.push(["Who's on first.", "The Naughty Nineties", "1945"])
movieQuotes.push(["Life is a banquet, and most poor suckers are starving to death!", "Auntie Mame", "1958"])
movieQuotes.push(["I feel the need—the need for speed!", "Top Gun", "1986"])
movieQuotes.push(["Carpe diem. Seize the day, boys. Make your lives extraordinary.", "Dead Poets Society", "1989"])
movieQuotes.push(["Snap out of it!", "Moonstruck", "1987"])
movieQuotes.push(["My mother thanks you. My father thanks you. My sister thanks you. And I thank you.", "Yankee Doodle Dandy", "1942"])
movieQuotes.push(["Nobody puts Baby in a corner.", "Dirty Dancing", "1987"])
movieQuotes.push(["I'll get you, my pretty, and your little dog too!", "The Wizard of Oz", "1939"])
movieQuotes.push(["I'm the king of the world!", "Titanic", "1997"])

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