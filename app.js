/*-------------- Constants --------------*/

/*-------------- Variables --------------*/
let userChoice = ''

/*------ Cached Element References ------*/
const choices = document.querySelector('#choices')
console.log(choices)

/*----------- Event Listeners -----------*/
choices.addEventListener('click', function(event){
    userChoice = event.target.id
    console.log('userChoice: ', userChoice)
})

/*-------------- Functions --------------*/