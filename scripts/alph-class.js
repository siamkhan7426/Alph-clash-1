/**
 * Step 1: first amara function call korbo
 * Step 2: play button click korla home screen hide hoi jaba
 * Step 3: play Ground screen ta show korba
 */


// function paly (){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add ("hidden") // home screen hidden 
//     // console.log(homeScreen.classList);

//     // Show paly-ground 
//     const playGround = document.getElementById("play-ground");
//     // console.log(playGround.classList);
//     playGround.classList.remove("hidden") // hidden remove


// }

function continueGame (){
    // sep 1: generate a random alphabet 
    const alphabet = getAlphaRandom();
    console.log( alphabet);
}

function paly (){
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame ()

}
