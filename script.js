//todo: complete the word counter
//todo: update a class to show alert messages

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
    let count = 0;
    for (let index = 0; index < textareaElement.value.length; index++) {
        if (count === 0) {
            count++;
        }

        if (textareaElement.value[index] == ' ') {
            count++;
        }
        // if (textareaElement.value[textareaElement.value.length - 1] == ' ') {
        //     console.log(count);
        //     count--;
        // }
    }
    totalWordCounterElement.innerText = count;
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