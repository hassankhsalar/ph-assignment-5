function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseInt(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue);
    return textNumber;
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}


function showSectionById(id){

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}