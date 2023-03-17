const cardCvc = document.querySelector(".output-cvc");
const cardNum = document.querySelector(".output-number");
const cardName = document.querySelector(".output-name");
const cardMth = document.querySelector(".output-month");
const cardYr = document.querySelector(".output-year");

const inputName = document.querySelector(".input-name");
const inputNum = document.querySelector(".input-number");
const inputMth = document.querySelector(".input-month");
const inputYr = document.querySelector(".input-year");
const inputCvc = document.querySelector(".input-cvc");

const form = document.querySelector("#form");

const smallName = document.querySelector(".name-sm");
const smallNum = document.querySelector(".number-sm");
const smallDate = document.querySelector(".date-sm");
const smallCvc = document.querySelector(".cvc-sm");

const thankMessage = document.querySelector(".thank-block");
const continueButton = document.querySelector("#continue-btn");

var inputNumMask = {
  mask: '**** **** **** ****'
};

var mask = IMask(inputNum, inputNumMask);

const nameRegEx = /^[a-zA-Z ]*$/;
const numRegEx = /^[0-9 ]+$/;

const nameError = [
  'Cannot be blank',
  'Wrong format, alphabet only'
];
const numError = [
  'Cannot be blank',
  'Wrong format, number only'
];

inputName.addEventListener("keyup", () => {
  cardName.innerText = inputName.value;
});

inputNum.addEventListener("keyup", () => {
  cardNum.innerText = mask.value ;
});

inputMth.addEventListener("keyup", () => {

  var mthValue = inputMth.value;

  if (numRegEx.test(mthValue) === true) {

    if (mthValue > 12) {

      inputMth.value = "12";
    }
  }
  cardMth.innerText = inputMth.value;
});

inputYr.addEventListener("keyup", () => {
  cardYr.innerText = inputYr.value;
});

inputCvc.addEventListener("keyup", () => {
  cardCvc.innerText = inputCvc.value;
});

form.addEventListener('submit', (e) => {

  var nameValue = inputName.value.trim();
  var numValue = inputNum.value.trim();
  var mthValue = inputMth.value.trim();
  var yrValue = inputYr.value.trim();
  var cvcValue = inputCvc.value.trim();

  if (nameValue === '') {
    smallName.innerText = nameError[0];
    inputName.classList.add('error');
    e.preventDefault();
  } else if (nameRegEx.test(nameValue) === true) {
    smallName.innerText = '';
    inputName.classList.remove('error');
    nameSuccess = "true";
  } else {
    smallName.innerText = nameError[1];
    inputName.classList.add('error');
    e.preventDefault();
  }

  if (numValue === '') {
    smallNum.innerText = numError[0];
    inputNum.classList.add('error');
    e.preventDefault();
  } else if (numRegEx.test(numValue) === true) {
    smallNum.innerText = '';
    inputNum.classList.remove('error');
    numSuccess = "true";
  } else {
    smallNum.innerText = numError[1];
    inputNum.classList.add('error');
    e.preventDefault();
  }

  if (mthValue === '') {
    smallDate.innerText = numError[0];
    inputMth.classList.add('error');
    e.preventDefault();
  } else if (numRegEx.test(mthValue) === true) {
    smallDate.innerText = '';
    inputMth.classList.remove('error');
    mthSuccess = "true";

    if (mthValue == 0) {

      mthValue = "01";
    }
    cardMth.innerText = mthValue;
    inputMth.value = mthValue;
  } else {
    smallDate.innerText = numError[1];
    inputMth.classList.add('error');
    e.preventDefault();
  }

  if (yrValue === '') {
    smallDate.innerText = numError[0];
    inputYr.classList.add('error');
    e.preventDefault();
  } else if (numRegEx.test(yrValue) === true) {
    smallDate.innerText = '';
    inputYr.classList.remove('error');
    yrSuccess = "true";
  } else {
    smallDate.innerText = numError[1];
    inputYr.classList.add('error');
    e.preventDefault();
  }

  if (cvcValue === '') {
    smallCvc.innerText = numError[0];
    inputCvc.classList.add('error');
    e.preventDefault();
  } else if (numRegEx.test(cvcValue) === true) {
    smallCvc.innerText = '';
    inputCvc.classList.remove('error');
    cvcSuccess = "true";
  } else {
    smallCvc.innerText = numError[1];
    inputCvc.classList.add('error');
    e.preventDefault();
  }

  if (nameSuccess === 'true' && numSuccess === 'true' && mthSuccess === 'true' && yrSuccess === 'true' && cvcSuccess === 'true') {

    e.preventDefault();
    thankMessage.classList.add('thank-block-show');
    form.classList.add('form-hide');

    continueButton.addEventListener('click', () => {

      if (thankMessage.classList.contains('thank-block-show')) {

        form.submit();
      }
    });
  }
});
