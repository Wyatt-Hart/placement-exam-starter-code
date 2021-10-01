let gbTotal = document.querySelector('#qty-gb');
let ccTotal = document.querySelector('#qty-cc');
let sugarTotal = document.querySelector('#qty-sugar')
let cookieTotal = document.querySelector('#qty-total')

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
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
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
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
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
})