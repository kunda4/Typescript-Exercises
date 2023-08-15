var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
var screeni = document.querySelector('.screen');
function addNumbers(a, b) {
    screeni.innerHTML = (a + b).toString();
}
button.addEventListener("click", function () {
    return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
