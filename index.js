
// Buttons
const displayButton = document.querySelector('#display-name-button');
displayButton.addEventListener('click', ()=> {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove('invisible');
});
// Mouse Over
const bulb = document.querySelector('#light-bulb');
bulb.onmouseover = logMouseOver;
bulb.onmouseout = logMouseOut;

function logMouseOver() {
  bulb.src = 'images/light-bulb-on.png';
}

function logMouseOut() {
  bulb.src = 'images/light-bulb-off.png';
}
// Toggle
let isToggled = false;

const toggleButton = document.getElementById('toggle-button');
const toggleAlert = document.getElementById('toggle-alert');

toggleButton.addEventListener('click', () => {
    if (isToggled) {
        isToggled = false;
        toggleAlert.classList.add('invisible');
        toggleButton.innerHTML = 'On';
    } else {
        isToggled = true;
        toggleAlert.classList.remove('invisible');
        toggleButton.innerHTML = 'Off';
    }
});
// Validate
const formValidate = document.getElementById('form-validate');
const formValidateFirstName = document.getElementById('form-validate-first-name');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formValidateFirstName.value.length > 2) {
        formValidateFirstName.classList.add('is-valid');
        formValidateFirstName.classList.remove('is-invalid');
    } else {
        formValidateFirstName.classList.add('is-invalid');
        formValidateFirstName.classList.remove('is-valid');
    }
});

// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


const myhobby = document.getElementById('form-hobby');
const hobbytext = document.getElementById('form-hobby-text');
const hobbylist = document.getElementById('hobby-list');
myhobby.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newHobby = document.createElement('li');
    newHobby.innerHTML = hobbytext.value;
    newHobby.classList.add('list-group-item');
    hobbylist.appendChild(newHobby);
});
// Challenge: Lists (Part 2)
const hobbyList2 = document.querySelector('#hobby-list-2');

hobbyList2.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const parentLi = event.target.parentElement;
        hobbyList2.removeChild(parentLi);
    }
});