/*-------------- Constants --------------*/
const choiceArr = ['rock', 'paper','scissors']

/*-------------- Variables --------------*/
let userChoice = ''
let computerChoice = ''


/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')


const rock= document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissors= document.querySelector('#scissors')
const reset = document.querySelector('#reset')
const resultDisplay = document.querySelector('#result-display')


/*----------- Event Listeners -----------*/
//
choices.addEventListener('click', function(event){
    userChoice = event.target.id

// we wamt to hide buttons that not user choice======
// if (userChoice === 'rock'){
// add hidden class to paper and scissor=============
// paper.classList.add('hidden')
// scissors.classList.add('hidden')
// } else if (userChoice === 'paper')
//     {rock.classList.add('hidden')
// scissors.classList.add('hidden')
// }else if (userChoice === 'scissors'){
// paper.classList.add('hidden')
// rock.classList.add('hidden')

// make the button disable instead of hiden===========
if (userChoice === 'rock'){
paper.setAttribute('disabled', 'disabled')
scissors.setAttribute('disabled', 'disabled')
} else if (userChoice === 'paper')
    {rock.setAttribute('disabled', 'disabled')
scissors.setAttribute('disabled', 'disabled')
}else if (userChoice === 'scissors'){
paper.setAttribute('disabled', 'disabled')
rock.setAttribute('disabled', 'disabled')
}

// computer make choice===============================
let randomIndex = Math.floor(Math.random() *3) ;
computerChoice= choiceArr[randomIndex]

resultDisplay.textContent=`computer Chose ${computerChoice}`

    console.log('userChoice: ', userChoice)
    console.log('computerChoice' , computerChoice )
})
// how to reset when after hidden
reset.addEventListener('click', function (){
    // paper.classList.remove('hidden')
    // scissors.classList.remove('hidden')
    // rock.classList.remove('hidden')
    // Also to make reset butto work with disable=====
    paper.removeAttribute('disabled')
    scissors.removeAttribute('disabled')
    rock.removeAttribute('disabled')
})

/*-------------- Functions --------------*/