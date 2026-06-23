/*-------------- Constants --------------*/

/*-------------- Variables --------------*/
let userChoice = ''

/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')
console.log(choices)

const rock= document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissors= document.querySelector('#scissors')
const reset = document.querySelector('#reset')
/*----------- Event Listeners -----------*/
//
choices.addEventListener('click', function(event){
    userChoice = event.target.id

// we wamt to hide buttons that not user choice
if (userChoice === 'rock'){
// add hidden class to paper and scissor
paper.classList.add('hidden')
scissors.classList.add('hidden')
} else if (userChoice === 'paper')
    {rock.classList.add('hidden')
scissors.classList.add('hidden')
}else if (userChoice === 'scissors'){
paper.classList.add('hidden')
rock.classList.add('hidden')
}

    console.log('userChoice: ', userChoice)
})
// how to reset when after hidden
reset.addEventListener('click', function (){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
    rock.classList.remove('hidden')
    
})

/*-------------- Functions --------------*/