console.log('Add validation!');

const form = document.querySelector('#parking-form')

// let startdate = document.querySelector('#start-date').value
// const d = startdate
// const date = startdate.getDate()
// console.log("d: ", d , ". date:", date, ".")

let numdays = document.querySelector('#days-field').value
console.log("Number of days: ", numdays)

window.addEventListener('submit', event => {
    event.preventDefault()
})

let validcheck
function validate(){
    console.log('Validate check');
    validcheck = true;
    confirmValid();
}

function confirmValid(){
    console.log('confirmValid check')
    if(validcheck && form.checkValidity()){
        const validinput1 = document.querySelector('#total')
        validinput1.innerText = totalExpense()
    }
    else{
        console.log("Debug loc 1")
    }
}

let price = 5

function totalExpense() {
    console.log('totalExpense check')
    const numdays = document.querySelector('#days').value
    console.log('total days: ', numdays)
 
    // let startdate = document.querySelector('#start-date').value
    // console.log("Start Date:  ", startdate)

    let fullPrice = numdays * price;
    return "Total cost: $",fullPrice;
}

