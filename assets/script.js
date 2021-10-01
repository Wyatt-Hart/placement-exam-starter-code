let gbTotal = document.querySelector('#qty-gb');
let ccTotal = document.querySelector('#qty-cc');
let sugarTotal = document.querySelector('#qty-sugar')
let cookieTotal = document.querySelector('#qty-total')
let divSummary = document.querySelector('.summary')

let submitChoices = document.createElement('button')
submitChoices.textContent = 'Submit'

// First, tell us your name
let yourName = "Wyatt Clay Hart"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let ct = 0      // Cookie Total

document.getElementById('minus-gb').style.backgroundColor = 'darkGrey'
document.getElementById('minus-cc').style.backgroundColor = 'darkGrey'
document.getElementById('minus-sugar').style.backgroundColor = 'darkGrey'

let serializedGb = parseInt(localStorage.getItem('gb'))
let serializedCc = parseInt(localStorage.getItem('cc'))
let serializedSugar = parseInt(localStorage.getItem('sugar'))
let serializedCt = parseInt(localStorage.getItem('ct'))

if( serializedGb > 0 || serializedCc > 0 || serializedSugar > 0){
    let resume = window.prompt('It looks like you still deciding on what cookies you wanted, would you like to pickup where you left off? \n\r [Y] - [N]');
    if(resume == 'Y'){
        window.alert("OK, please let us know what else you'd like!")
    }else if (resume == 'N'){
        localStorage.removeItem('gb')
        localStorage.removeItem('cc')
        localStorage.removeItem('sugar')
        localStorage.removeItem('ct')
        gb = 0
        cc = 0
        sugar = 0
        ct = 0
        serializedGb = 0
        serializedCc = 0
        serializedSugar = 0
        serializedCt = 0
        gbTotal.textContent = gb
        ccTotal.textContent = cc
        sugarTotal.textContent = sugar
        cookieTotal.textContent = ct
        window.alert('OK, your decisions from last time were cleared. If you would like us to make you some cookies, let us know!')
        }
}

if(serializedGb > 0){
    gb = serializedGb
    ct = serializedCt
    gbTotal.textContent = gb
    cookieTotal.textContent = ct
    document.getElementById('minus-gb').style.backgroundColor = 'burlywood'
}
if(serializedCc > 0){
    cc = serializedCc
    ct = serializedCt
    ccTotal.textContent = cc
    cookieTotal.textContent = ct
    document.getElementById('minus-cc').style.backgroundColor = 'burlywood'
}
if(serializedSugar > 0){
    sugar = serializedSugar
    ct = serializedCt
    sugarTotal.textContent = sugar
    cookieTotal.textContent = ct
    document.getElementById('minus-sugar').style.backgroundColor = 'burlywood'
}
if(serializedCt > 0){
    ct = serializedCt
    gbTotal.textContent = gb
    cookieTotal.textContent = ct
}




// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" buttons
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Ginger bread + button was clicked!')

    gb = gb + 1;
    ct = ct + 1;
    gbTotal.textContent = gb
    cookieTotal.textContent = ct
    if (gb > 0){
        document.getElementById('minus-gb').style.backgroundColor = 'burlywood'
    }
    localStorage.setItem('gb', gb)
    localStorage.setItem('ct', ct)
})
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')
    cc = cc + 1;
    ct = ct + 1;
    ccTotal.textContent = cc
    cookieTotal.textContent = ct
    if (cc > 0){
        document.getElementById('minus-cc').style.backgroundColor = 'burlywood'
    }
    localStorage.setItem('cc', cc)
    localStorage.setItem('ct', ct)
})
document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle + button was clicked!')
    sugar = sugar + 1;
    ct = ct + 1;
    sugarTotal.textContent = sugar
    cookieTotal.textContent = ct
    if (sugar > 0){
        document.getElementById('minus-sugar').style.backgroundColor = 'burlywood'
    }
    localStorage.setItem('sugar', sugar)
    localStorage.setItem('ct', ct)
})


// Event listener for clicks on the "-" buttons
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Ginger bread - button was clicked!')
    if(gb > 0){
        gb = gb - 1;
        ct = ct - 1;
        if(gb === 0){
            document.getElementById('minus-gb').style.backgroundColor = 'darkGrey'
        }
    }
    gbTotal.textContent = gb
    cookieTotal.textContent = ct
    localStorage.setItem('gb', gb)
    localStorage.setItem('ct', ct)
})
document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
    if(cc > 0){
        cc = cc - 1;
        ct = ct - 1;
        if(cc === 0){
            document.getElementById('minus-cc').style.backgroundColor = 'darkGrey'
        }
    }
    ccTotal.textContent = cc
    cookieTotal.textContent = ct
    localStorage.setItem('cc', cc)
    localStorage.setItem('ct', ct)
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle - button was clicked!')
    if(sugar > 0){
        sugar = sugar - 1;
        ct = ct - 1;
        if(sugar === 0){
            document.getElementById('minus-sugar').style.backgroundColor = 'darkGrey'
        }
    }
    sugarTotal.textContent = sugar
    cookieTotal.textContent = ct
    localStorage.setItem('sugar', sugar)
    localStorage.setItem('ct', ct)
})

divSummary.append(submitChoices)

submitChoices.addEventListener('click', function(){
    if(ct > 0){
        let verifySubmission = window.prompt('Are you sure you would like to submit your choices? \r\n[Y] - [N]')
        if(verifySubmission == 'Y'){
            localStorage.removeItem('gb')
            localStorage.removeItem('cc')
            localStorage.removeItem('sugar')
            localStorage.removeItem('ct')
            gb = 0
            cc = 0
            sugar = 0
            ct = 0
            serializedGb = 0
            serializedCc = 0
            serializedSugar = 0
            serializedCt = 0
            gbTotal.textContent = gb
            ccTotal.textContent = cc
            sugarTotal.textContent = sugar
            cookieTotal.textContent = ct
            document.getElementById('minus-gb').style.backgroundColor = 'darkGrey'
            document.getElementById('minus-cc').style.backgroundColor = 'darkGrey'
            document.getElementById('minus-sugar').style.backgroundColor = 'darkGrey'
            window.alert('OK, your decisions have been submitted. We will let you know when your cookies are ready!')
        }else if(verifySubmission == 'N'){
            window.alert("No worries, let us know when you're ready to finalize your order!")
        }
    }else if(ct == 0){
        window.alert('You need to have selected cookies in order to order them, silly!')
    }
})