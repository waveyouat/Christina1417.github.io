var scriptURL = 'https://script.google.com/macros/s/AKfycbwI2JIG3hHFNuvKv0NRkNDKe_TC4DY2BiUOwewf/exec';

var pasteForm = function(){
	console.log('Form click');
	var siteVersion = 'F';
	var name = document.getElementById('form-name');
	var contact = document.getElementById('form-contact');
	var more = document.getElementById('form-more');

	var singleLine = siteVersion + " " + name.value + " " + contact.value + " " + more.value;
	var formBody = new FormData();
	formBody.set('version', 'F');
	formBody.set('name', name.value);
	formBody.set('contact', contact.value);
	formBody.set('more', more.value);
	console.log(singleLine);
	fetch(scriptURL, { method: 'POST', body: formBody})
		  .then(response => {
		  	console.log('Success!', response);
		  	return response;
		  })
		  .then(res => {
		  	name.value = '';
		  	contact.value = '';
		  	more.value = '';
		  	document.getElementById('notification').style.maxHeight = '200px';
		  })
		  .catch(error => console.error('Error!', error.message));
  
};

var pasteHeroForm = function(){
	console.log('Hero Form click');
	var siteVersion = 'M';
	var name = document.getElementById('hero-name');
	var contact = document.getElementById('hero-contact');
	var formBody = new FormData();
	formBody.set('version', 'F');
	formBody.set('name', name.value);
	formBody.set('contact', contact.value);
	formBody.set('more', "FROM HERO SECTION");
	fetch(scriptURL, { method: 'POST', body: formBody})
		  .then(response => {
		  	console.log('Success!', response);
			return response;
		  })
		  .then(res => {
			name.value = '';
		  	contact.value = '';
		  	document.getElementById('hero-notification').style.maxHeight = '200px';
		  })
		  .catch(error => console.error('Error!', error.message));
};

var init = function(e){
	var btn = document.getElementById('form-button');
	var heroBtn = document.getElementById('hero-button');
	btn.addEventListener('click', pasteForm);
	heroBtn.addEventListener('click', pasteHeroForm);
};

window.addEventListener('load', init);