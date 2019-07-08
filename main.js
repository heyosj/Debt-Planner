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
// main functionality part working still needs work on other functionailty


// Navbar - On click, within or outside of navbar. Nav bar will hide.

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});