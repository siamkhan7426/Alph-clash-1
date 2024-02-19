
function hideElementById(elementById){
    const element = document.getElementById(elementById);
    element.classList.add('hidden');
    
}

function showElementById (elementById){
    const showElement = document.getElementById(elementById)
     showElement.classList.remove('hidden')
}


// game star function 
function getAlphaRandom (){
    // get create an alphabets array
    const alphabetString = "abcdefghijklmnppqrstuvwxyz"
    const alphabets = alphabetString.split("")
    // console.log(alphabets);
    // get random index 0-25

    const randomNumber = Math.random () * 25;
    const index = Math.round(randomNumber) // vognan onso bad dey mul number daw
    
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet
}