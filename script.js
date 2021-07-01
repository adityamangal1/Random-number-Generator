const body = document.querySelector('body'); 
const button = document.querySelector('button'); 
const randWord = document.querySelector('.printRand'); 
const word = document.createElement('h2'); 


const randomWord = () => {
    var rand = Math.ceil(Math.random() * 10000);

    word.textContent = rand;
    body.appendChild(word);
    // const printWord = document.createElement('h1');
    // printWord.textContent = rand;
    // printRand.appendChild(printWord);

}



button.addEventListener('click', function(){
    randomWord(); 
})

