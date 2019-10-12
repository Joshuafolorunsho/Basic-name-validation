const input = document.querySelector('input');
const err = document.querySelector('.error');

const regEx = /^[a-z]+ [a-z]+$/i;

document.querySelector('form').addEventListener('submit', validate);

function validate(e) {
	if (input.value.match(regEx)) {
		alert('success');
	} else {
		err.innerHTML = `
			<p>Name must only contain alphabet characters</p>
		`;
		err.style.color = 'red';
		input.style.borderColor = 'red';
		input.focus();
	}
	e.preventDefault();
}
