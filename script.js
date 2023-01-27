const textareaElement = document.getElementById('textarea');
const totalCounterElement = document.getElementById('total-counter');
const totalWordCounterElement = document.getElementById('word-counter');
const remainingCounterElement = document.getElementById('remaining-counter');
const clearElement = document.getElementById('clear');
const copyElement = document.getElementById('copy');

textareaElement.addEventListener('keyup', (event) => {
    // const text = event.target.value;
    // console.log(text);

    updateCounter();
});

updateCounter();

function updateCounter() {
    //* character counter
    // const text = textareaElement.value;
    // totalCounterElement.innerText = text.length;

    // above in 1 line
    totalCounterElement.innerText = textareaElement.value.length;
    //notes: "length" gives the length of the string

    // textareaElement.getAttribute("maxlength");
    // //notes: "getAttribute" gets the value of the attribute
    // remainingCounterElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length;

    //* word counter
    // console.log(textareaElement.value.length);
    // console.log(textareaElement.value[0]);
    let temp, len = 0;
    for (let index = 0; index < textareaElement.value.length; index++) {
        // remove extra spaces
        temp = textareaElement.value.split(/[ ]+/);
        temp.join(" ");
        len = temp.length;
        // console.log(temp, temp.length);

        // if last element is space then reduce the length by 1
        if (textareaElement.value[textareaElement.value.length - 1] === ' ') {
            len--;
        }
        console.log(textareaElement.value[textareaElement.value.length - 1])
    }
    totalWordCounterElement.innerText = len;
}

//* clear text
clearElement.addEventListener('click', () => {
    if (textareaElement.value === '') {
        //todo: check todo 2
        //  alert("Text is already empty!");
    }
    textareaElement.value = '';
    updateCounter();
});

//* copy to clipboard
copyElement.addEventListener('click', () => {
    if (textareaElement.value === '') {
        //todo: check todo 2
        //  alert("Please write something to copy!");
    }
    else {
        textareaElement.select();

        navigator.clipboard.writeText(textareaElement.value);
        //notes: above line will copy the text to the clipboard

        alert("Text copied to clipborad!");
    }
});
