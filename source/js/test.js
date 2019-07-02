// /*
//  ************************** first steps *********************************
//     1. amount, years - DONE
//     2. convert years into months '(100, 2) - second argument should convert to '24' - DONE
//     3. divide the amount by the converted months - DONE
//     4. output the amount due per month - DONE
// */

// function debtPayoff(amount, years) {
//     var months = years * 12; // converts years into months
//     var totalPayoff = (amount / months).toFixed(2); // toFixed will round up or down for you depeneding on the values beyond 2 decimals
//     console.log(`Your monthly payments will be $${totalPayoff}`);
// };



// /*
//  ************************ second steps **********************************
//     1. accept value entered for years (class=debt)
//         a. start by console.logging the value - DONE
//         b. then inner HTML to make sure
//     2. repeat step 1 but with years (class=years)
//     3. ouput the result onto the screen instead of the console
// */

// let debt = document.querySelector('.debt');
// let time = document.querySelector('.years');
// const output = document.getElementById('output');

// var total = debt.addEventListener('click', function() {
//     var total = parseInt(debt.value);
//     console.log(total);
// });


// var time2 = time.addEventListener('click', function() {
//     var months = parseInt(time.value) * 12; // converts string into integer then multiplies by 12 to convert years into months
//     console.log(months);
// });

// const submit = document.querySelector('.submit');
// submit.addEventListener('click', debtPayoff);


// /* 
//  *********************** third steps ***********************************
//     Putting it all together

//  */

// Clear button

// var clearButton = clear.addEventListener('click', function() {
//     amount = '';
//     months = '' + year;
//     console.log(amount, months);
// });


//  debtPayoff(total, time2);
const debt = document.querySelector('.debt');
const time = document.querySelector('.years');
const output = document.getElementById('output');
const clear = document.querySelector('.clear');

var amount = debt.addEventListener('click', function() {
    amount = parseInt(debt.value);
    console.log(amount);
});

var months = time.addEventListener('click', function() {
    months = parseInt(time.value) * 12; // converts string into integer then multiplies by 12 to convert years into months
    console.log(months);
});

function calc() {
    if (!amount || !months) { // error handler for no input selected
        output.innerHTML = `You either have not selected an amount or a year, please do so.`;
    } else {
        var total = parseInt((amount / months));
        console.log(total);
        output.innerHTML = total;
        output.innerHTML = `You will be able to pay off $${amount} in 
                        ${time.value} years by making $${total} payments a month`;
    }
};

function clearButton() {
    debt.selectedIndex = 0;
    amount = '';

    time.selectedIndex = 0;
    months = '';

    output.innerHTML = '';

    // Find a better way to do this, selectedIndex is not declared
    debt.innerHTML = selectedIndex;
    time.innerHTML = selectedIndex;
}