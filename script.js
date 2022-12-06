let form = document.getElementById("form");
let thankYou = document.getElementById("thank-you-div");
let cardNumber = document.getElementById("card-number");
let cardholderName = document.getElementById("cardholder-name");
let expDate = document.getElementById("exp-date");
let cvcNumber = document.getElementById("cvc-number");

// FOR THE FORM INPUTS

let cardName = document.getElementById("card-name");
let cardNumber2 = document.getElementById("card-number-2");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvc2 = document.getElementById("cvc-2");
let submitBtn = document.getElementById("submit-btn");

//OTHERS

let errorText = document.querySelectorAll(".error-text");
let nameError = document.getElementById("name-error");
let numberError = document.getElementById("number-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");
let cvc2Error = document.getElementById("cvc-2-error");
let myMonth = month.value;

cardName.addEventListener("input", function() {
    if (cardName.validity.valid) {
        nameError.textContent = "";
        nameError.className = "error-text"
        cardName.style.border = "1px solid var(--Light-grayish-violet--)";
        let myCardName = cardName.value;
        cardholderName.innerHTML = myCardName;
    } else {
        showError();
    }
})

cardNumber2.addEventListener("input", function() {
    if (cardNumber2.validity.valid) {
        numberError.textContent = "";
        numberError.className = "error-text"
        cardNumber2.style.border = "1px solid var(--Light-grayish-violet--)";
        let myCardNumber = cardNumber2.value;
        cardNumber.innerHTML = myCardNumber;
    } else {
        showError();
    }
})

month.addEventListener("input", function() {
    if (month.validity.valid) {
        monthError.textContent = "";
        monthError.className = "error-text"
        month.style.border = "1px solid var(--Light-grayish-violet--)";
        
            if (month.value.length < 2) {
                myMonth = "0"+month.value;
            } else {
                myMonth = month.value
            }
            
    } else {
        showError();
    }
})

year.addEventListener("input", function() {
    if (year.validity.valid) {
        yearError.textContent = "";
        yearError.className = "error-text"
        year.style.border = "1px solid var(--Light-grayish-violet--)";
        
        
    } else {
        showError();
    }
})

cvc2.addEventListener("input", function() {
    if (cvc2.validity.valid) {
        cvc2Error.textContent = "";
        cvc2Error.className = "error-text"
        cvc2.style.border = "1px solid var(--Light-grayish-violet--)";
        let myCVC = cvc2.value;
        cvcNumber.innerHTML = myCVC;
        expDate.innerHTML = `${myMonth}/${year.value}`;
    } else {
        showError();
    }
})


form.addEventListener("submit", function (event) {

    if (!cardName.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (!cardNumber2.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (!month.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (!year.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (!cvc2.validity.valid) {
        showError();
        event.preventDefault();
    }
})


function showError() {
    if (cardName.validity.valueMissing) {
        nameError.textContent = "Can't be blank";
        nameError.style.display = "block";
        cardName.style.border = "1px solid var(--Red--)";
    }

    if (cardNumber2.validity.valueMissing) {
        numberError.textContent = "Can't be blank";
        numberError.style.display = "block";
        cardNumber2.style.border = "1px solid var(--Red--)";
    } else if (cardNumber2.validity.patternMismatch) {
        numberError.textContent = "Wrong format, numbers only";
        numberError.style.display = "block";
        cardNumber2.style.border = "1px solid var(--Red--)";
    }

    if (month.validity.valueMissing) {
        monthError.textContent = "Can't be blank";
        monthError.style.display = "block";
        monthError.style.fontSize = "0.75rem";
        month.style.border = "1px solid var(--Red--)";
    } else if (month.validity.rangeOverflow) {
        monthError.textContent = "Month cannot be > 12";
        monthError.style.display = "block";
        monthError.style.fontSize = "0.5rem";
        month.style.border = "1px solid var(--Red--)";
    }

    if (year.validity.valueMissing) {
        yearError.textContent = "Can't be blank";
        yearError.style.display = "block";
        year.style.border = "1px solid var(--Red--)";
    }

    if (cvc2.validity.valueMissing) {
        cvc2Error.textContent = "Can't be blank";
        cvc2Error.style.display = "block";
        cvc2.style.border = "1px solid var(--Red--)";
    } else if (cvc2.validity.patternMismatch) {
        cvc2Error.textContent = "numbers only";
        cvc2Error.style.display = "block";
        cvc2.style.border = "1px solid var(--Red--)";
    }
}


form.addEventListener("submit", function () {
    form.style.display = "none";
    thankYou.style.display = "flex";
})