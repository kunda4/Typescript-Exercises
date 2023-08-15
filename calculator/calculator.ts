const button:any = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
const screeni:any = document.querySelector('.screen');

function addNumbers(a: number, b: number) {
    screeni.innerHTML = (a + b).toString();
}

button.addEventListener("click", () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
