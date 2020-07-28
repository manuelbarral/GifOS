const API_KEY = 'ytA60yuYg1eiO3dZpTTNf333HfbmSYUj';
const SUGGESTIONS_URL = 'http://api.giphy.com/v1/tags/related/';
const SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const CATEGORIES_URL = 'http://api.giphy.com/v1/gifs/categories?';
const TAGS_URL = 'http://api.giphy.com/v1/gifs/search/tags?q=';
const TRENDING_URL = 'http://api.giphy.com/v1/gifs/trending?';

const headers = new Headers();

let init = {
	method: 'GET',
	mode: 'cors',
	headers: headers,
	cache: 'default',
};

//----------------------------------------------------------------

//FUNCTIONS TO CHOOSE RANDOM WORDS AND FROM THESE SEARCH TAGS AND GIFS

function suggestionsTags() {
	let tagOne = findTag();
	let tagTwo = findTag();
	let tagThree = findTag();
	let tagFour = findTag();

	async function findTag() {
		tag = await getTag();

		let resp = await fetch(
			TAGS_URL + tag + '&api_key=' + API_KEY,
			init
		);
		data = await resp.json();

		if (data.data.length === 0) {
			findTag();
		} else {
			let lengthData = data.data.length;
			let num = Math.floor(Math.random() * lengthData + 0);
			let name = data.data[num].name;
			return name;
		}
	}

	async function getTag() {
		let number = selectNumber();

		function selectNumber() {
			let num = Math.floor(Math.random() * 28 + 0);
			return num;
		}

		let resp = await fetch(
			CATEGORIES_URL + '&api_key=' + API_KEY,
			init
		);
		let data = await resp.json();

		let numLength = data.data[number].gif.tags.length;

		let num = Math.floor(Math.random() * numLength + 0);

		let tag = data.data[number].gif.tags[num];

		return tag;
	}

	tagOne.then((resp) => {
		findGifOne(resp);

		async function findGifOne(tag) {
			const found = await fetch(
				SEARCH_URL + tag + '&api_key=' + API_KEY,
				init
			);
			data = await found.json();
			let tagOne = document.querySelector('#tagOne');
			let gifOneUrl = document.querySelector('#gifOne');
			lengthData = data.data.length;
			let num = Math.floor(Math.random() * lengthData + 0);
			tagOne.innerHTML = '#' + tag;
			gifOneUrl.src = data.data[num].images.fixed_height.url;

			buttonSeeOne(tag);

			function buttonSeeOne(tag) {
				let buttonOne = document.querySelector('#buttonSeeOne');
				buttonOne.addEventListener('click', () => {
					let containerImagesTrends = document.querySelector(
						'.container-images-trends'
					);
					let queryImages = document.querySelector('#images');
					containerImagesTrends.removeChild(queryImages);

					queryImages = sectionImages();

					getSearchResults(tag);

					queryImages.style.height = '1700';

					window.scrollBy(0, 120);
				});
			}
		}
	});

	tagTwo.then((resp) => {
		findGifTwo(resp);

		async function findGifTwo(tag) {
			const found = await fetch(
				SEARCH_URL + tag + '&api_key=' + API_KEY,
				init
			);
			data = await found.json();

			let tagTwo = document.querySelector('#tagTwo');
			let gifTwoUrl = document.querySelector('#gifTwo');
			lengthData = data.data.length;
			let num = Math.floor(Math.random() * lengthData + 0);
			tagTwo.innerHTML = '#' + tag;
			gifTwoUrl.src = data.data[num].images.fixed_height.url;

			buttonSeeTwo(tag);

			function buttonSeeTwo(tag) {
				let buttonTwo = document.querySelector('#buttonSeeTwo');
				buttonTwo.addEventListener('click', () => {
					let containerImagesTrends = document.querySelector(
						'.container-images-trends'
					);
					let queryImages = document.querySelector('#images');
					containerImagesTrends.removeChild(queryImages);

					queryImages = sectionImages();

					getSearchResults(tag);

					queryImages.style.height = '1700';

					window.scrollBy(0, 120);
				});
			}
		}
	});

	tagThree.then((resp) => {
		findGifThree(resp);

		async function findGifThree(tag) {
			const found = await fetch(
				SEARCH_URL + tag + '&api_key=' + API_KEY,
				init
			);
			data = await found.json();

			let tagThree = document.querySelector('#tagThree');
			let gifThreeUrl = document.querySelector('#gifThree');
			lengthData = data.data.length;
			let num = Math.floor(Math.random() * lengthData + 0);
			tagThree.innerHTML = '#' + tag;
			gifThreeUrl.src = data.data[num].images.fixed_height.url;

			buttonSeeThree(tag);

			function buttonSeeThree(tag) {
				let buttonThree = document.querySelector('#buttonSeeThree');
				buttonThree.addEventListener('click', () => {
					let containerImagesTrends = document.querySelector(
						'.container-images-trends'
					);
					let queryImages = document.querySelector('#images');
					containerImagesTrends.removeChild(queryImages);

					queryImages = sectionImages();

					getSearchResults(tag);

					queryImages.style.height = '1700';

					window.scrollBy(0, 120);
				});
			}
		}
	});

	tagFour.then((resp) => {
		findGifFour(resp);

		async function findGifFour(tag) {
			const found = await fetch(
				SEARCH_URL + tag + '&api_key=' + API_KEY,
				init
			);
			data = await found.json();

			let tagFour = document.querySelector('#tagFour');
			let gifFourUrl = document.querySelector('#gifFour');
			lengthData = data.data.length;
			let num = Math.floor(Math.random() * lengthData + 0);
			tagFour.innerHTML = '#' + tag;
			gifFourUrl.src = data.data[num].images.fixed_height.url;

			buttonSeeFour(tag);

			function buttonSeeFour(tag) {
				let buttonFour = document.querySelector('#buttonSeeFour');
				buttonFour.addEventListener('click', () => {
					let containerImagesTrends = document.querySelector(
						'.container-images-trends'
					);
					let queryImages = document.querySelector('#images');
					containerImagesTrends.removeChild(queryImages);

					queryImages = sectionImages();

					getSearchResults(tag);

					queryImages.style.height = '1700';

					window.scrollBy(0, 120);
				});
			}
		}
	});
}

window.onload = suggestionsTags();
setInterval(suggestionsTags, 8.64e7);

window.onload = searchImages();

let savedImage = [];

async function searchImages() {
	try {
		let response = await fetch(
			TRENDING_URL + '&api_key=' + API_KEY,
			init
		);
		let found = await response.json();
		let allImages = document.querySelector('#allImages');
		let foundMaxLength = found.data.length;

		for (let i = 0; i < foundMaxLength; i++) {
			let containerImg = document.createElement('div');
			containerImg.className = 'containerImg';
			allImages.appendChild(containerImg);
			let img = document.createElement('img');
			img.className = 'imgClass';
			img.src = found.data[i].images.fixed_height.url;
			img.alt = found.data[i].title;
			containerImg.appendChild(img);
			let title = document.createElement('p');
			title.innerHTML = found.data[i].title;
			containerImg.appendChild(title);

			img.addEventListener('click', () => {
				localStorage.setItem('image', JSON.stringify('true'));
				savedImage.push(img.src);
				localStorage.setItem(
					'savedImage',
					JSON.stringify(savedImage)
				);
			});
		}
	} catch (err) {
		console.log('Error: ' + err);
	}
}

let words = [];

//---------------------------------------------------------

let idBody = document.createAttribute('id'),
	classBody = document.createAttribute('class'),
	logo = document.querySelector('#logo'),
	glass = document.querySelector('#glass'),
	arrowDown = document.querySelector('#arrowDown');

idBody.value = 'theme';
classBody.value = 'themeOne';

document.body.setAttributeNode(idBody);
document.body.setAttributeNode(classBody);

let buttonArrow = document.querySelector('#arrow');

buttonArrow.addEventListener('click', menuOptionsThemes);

function menuOptionsThemes(e) {
	let optionsThemes = document.querySelector('#optionsThemes');

	e.preventDefault();
	e.stopPropagation();

	if (optionsThemes.style.display === 'none') {
		optionsThemes.style.display = 'block';
	} else {
		optionsThemes.style.display = 'none';
	}

	document.addEventListener('click', (e) => {
		let click = e.target;
		if (
			optionsThemes.style.display === 'block' &&
			click !== optionsThemes
		) {
			optionsThemes.style.display = 'none';
		}
	});
}

let sailorDay = document.querySelector('#sailorDay'),
	optionSailorDay = document.querySelector('#optionSailorDay'),
	sailorNight = document.querySelector('#sailorNight'),
	optionSailorNight = document.querySelector('#optionSailorNight'),
	theme = document.querySelector('#theme');

sailorDay.addEventListener('click', selectSailorDay);
optionSailorDay.addEventListener('click', selectSailorDay);
sailorNight.addEventListener('click', selectSailorNight);
optionSailorNight.addEventListener('click', selectSailorNight);

function selectSailorDay() {
	theme.setAttribute('class', 'themeOne');

	localStorage.setItem('themeIndex', 'true');
	localStorage.setItem('logo', 'true');
	localStorage.setItem('glass', 'true');
	localStorage.setItem('arrowDownOne', 'true');
	localStorage.setItem('windowCapture', 'true');
	localStorage.setItem('windowSuccessUpload', 'true');

	logo.src = './assets/img/gifOS_logo.png';
	glass.src = './assets/img/lupa_inactive.svg';
	arrowDown.src = './assets/img/dropdown.svg';
}

function selectSailorNight() {
	theme.setAttribute('class', 'themeTwo');

	localStorage.setItem('themeIndex', 'false');
	localStorage.setItem('logo', 'false');
	localStorage.setItem('glass', 'false');
	localStorage.setItem('arrowDownOne', 'false');
	localStorage.setItem('windowCapture', 'false');
	localStorage.setItem('windowSuccessUpload', 'false');

	logo.src = './assets/img/gifOS_logo_dark.png';
	glass.src = './assets/img/combinedShape.svg';
	arrowDown.src = './assets/img/dropdown_white.svg';
}

window.onload = callLocalStorage();

function callLocalStorage() {
	let logo = document.querySelector('#logo');
	let glass = document.querySelector('#glass');
	let themeIndex = localStorage.getItem('themeIndex');
	if (themeIndex === 'true') {
		document.body.classList.remove('themeTwo');
		document.body.classList.add('themeOne');
	} else {
		document.body.classList.remove('themeOne');
		document.body.classList.add('themeTwo');
	}

	let logoOne = localStorage.getItem('logo');
	if (logoOne === 'true') {
		logo.src = './assets/img/gifOS_logo.png';
	} else {
		logo.src = './assets/img/gifOS_logo_dark.png';
	}

	let glassOne = localStorage.getItem('glass');
	if (glassOne === 'true') {
		glass.src = './assets/img/lupa_inactive.svg';
	} else {
		glass.src = './assets/img/combinedShape.svg';
	}

	let arrowDownTwo = localStorage.getItem('arrowDownTwo');
	if (arrowDownTwo === 'true') {
		arrowDown.src = './assets/img/dropdown.svg';
		localStorage.setItem('arrowDownOne', 'true');
	} else {
		arrowDown.src = './assets/img/dropdown_white.svg';
		localStorage.setItem('arrowDownOne', 'fasle');
	}

	let savedLocalImage = JSON.parse(
		localStorage.getItem('savedImage')
	);
	if (savedLocalImage === null) {
		savedImage = [];
		localStorage.setItem('image', JSON.stringify('false'));
		let image = JSON.parse(localStorage.getItem('image'));
		if (image === 'false') {
			return;
		}
	} else {
		localStorage.setItem('image', JSON.stringify('true'));
		let image = JSON.parse(localStorage.getItem('image'));
		if (image === 'true') {
			savedImage = savedLocalImage;
		}
	}
}

//---------------------------------------------------

//THIS SECTION OF CODE IS TO DO A NEW GIF SEARCH

let search = document.querySelector('#search'),
	buttonSearch = document.querySelector('#buttonSearch');

let form = document.querySelector('#container-form');

let createHiddenForm = document.createElement('div');
createHiddenForm.className = 'hiddenContainerForm';

let hiddenFormOptionOne = document.createElement('button');
hiddenFormOptionOne.className = 'option';
createHiddenForm.appendChild(hiddenFormOptionOne);
let hiddenFormOptionTwo = document.createElement('button');
hiddenFormOptionTwo.className = 'option';
createHiddenForm.appendChild(hiddenFormOptionTwo);
let hiddenFormOptionThree = document.createElement('button');
hiddenFormOptionThree.className = 'option';
createHiddenForm.appendChild(hiddenFormOptionThree);

form.appendChild(createHiddenForm);

let stringSearch = '';

let hiddenContainerForm = document.querySelector(
	'.hiddenContainerForm'
);

hiddenContainerForm.style.display = 'none';

let optionsHiddenContainerForm = document.querySelectorAll('.option');

let containerHistoryButtons = document.createElement('div');
let containerHistoryButtonsClass = document.createAttribute('class');
let containerHistoryButtonsId = document.createAttribute('id');

containerHistoryButtonsClass.value = 'containerHistoryButtons';
containerHistoryButtonsId.value = 'containerHistoryButtons';

containerHistoryButtons.setAttributeNode(
	containerHistoryButtonsClass
);
containerHistoryButtons.setAttributeNode(containerHistoryButtonsId);

let containerForm = document.querySelector('.container-form');

containerForm.appendChild(containerHistoryButtons);

//---------------------------------------------------------------------

if (buttonSearch.disabled === true) {
	let glassAndSearch = document.querySelector('#glassAndSearch');
	glassAndSearch.classList.remove('glassAndSearch');
}

search.addEventListener('keydown', eventListenerKeyDown);

function eventListenerKeyDown(e) {
	let keyCode = e.keyCode,
		keyToString = String.fromCharCode(keyCode).toString(),
		letters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú';

	let specials = [8, 13, 32];

	let special_key = false;

	for (let i in specials) {
		if (keyCode == specials[i]) {
			special_key = true;
			break;
		}
	}

	if (letters.indexOf(keyToString) == -1 && !special_key) {
		e.preventDefault();
		return false;
	}

	let eventTarget = e.target,
		key = e.key;

	let buttonSearch = document.querySelector('#buttonSearch');

	let buttonSearchClassOne = document.querySelector(
		'.button-searchOne'
	);
	let buttonSearchClassTwo = document.querySelector(
		'.button-searchTwo'
	);
	let glassSearch = document.querySelector('#glass');
	let themeOne = document.querySelector('.themeOne');
	let themeTwo = document.querySelector('.themeTwo');

	if (eventTarget === search) {
		if (buttonSearch.disabled === true) {
			buttonSearch.removeAttribute('disabled');

			if (themeOne) {
				buttonSearchClassOne.style.cssText =
					'color: #110038; background-color: #F7C9F3;';
				glassSearch.src = './assets/img/lupa.svg';
			}
			if (themeTwo) {
				buttonSearchClassTwo.style.cssText =
					'color: #ffffff; background-color: #EE3EFE;';
				glassSearch.src = './assets/img/lupa_light.svg';
			}

			let glassAndSearch = document.querySelector('#glassAndSearch');
			glassAndSearch.classList.add('glassAndSearch');
		}

		if (key !== 'Backspace') {
			stringSearch = stringSearch + key;
			getSuggestionsResults(stringSearch);
		}

		if (key === 'Backspace') {
			buttonSearch.disabled = true;
			buttonSearch.style.backgroundColor = '#E6E6E6';
			stringSearch = stringSearch.slice(0, -1);
			buttonSearchClassOne.style.cssText = 'color: #b4b4b4;';
			buttonSearchClassTwo.style.cssText = 'color: #8f8f8f;';
			if (themeOne) {
				glassSearch.src = './assets/img/lupa_inactive.svg';
			}
			if (themeTwo) {
				glassSearch.src = './assets/img/combinedShape.svg';
			}
			let glassAndSearch = document.querySelector('#glassAndSearch');
			glassAndSearch.classList.remove('glassAndSearch');
		}
	}

	hiddenContainer();
}

function hiddenContainer() {
	let hiddenContainerForm = document.querySelector(
		'.hiddenContainerForm'
	);
	let optionsHiddenContainerForm = document.querySelectorAll(
		'.option'
	);

	if (stringSearch === '' || search.value === '') {
		hiddenContainerForm.style.cssText =
			'display: none; height: 0; padding-top: 0; transition: all 0.5s;';
		optionsHiddenContainerForm[0].style.cssText =
			'display: none; opacity: 0; transition: opacity 0.3s; cursor: default';
		optionsHiddenContainerForm[1].style.cssText =
			'display: none; opacity: 0; transition: opacity 0.3s; cursor: default';
		optionsHiddenContainerForm[2].style.cssText =
			'display: none; opacity: 0; transition: opacity 0.3s; cursor: default';
	} else {
		hiddenContainerForm.style.cssText =
			'display: block; height: 160px; padding-top: 17px; transition: all 0.3s;';
		optionsHiddenContainerForm[0].style.cssText =
			' display: block; opacity: 1; transition: opacity 0.3s; cursor: pointer';
		optionsHiddenContainerForm[1].style.cssText =
			'display: block; opacity: 1; transition: opacity 0.3s; cursor: pointer';
		optionsHiddenContainerForm[2].style.cssText =
			'display: block; opacity: 1; transition: opacity 0.3s; cursor: pointer';
	}
}

sectionImages();

function sectionImages() {
	let containerImagesTrends = document.querySelector(
		'.container-images-trends'
	);

	let images = document.createElement('div');

	images.id = 'images';
	images.className = 'images';

	containerImagesTrends.appendChild(images);

	let queryImages = document.querySelector('#images');

	let imagesDivChild = document.createElement('div'),
		imagesDivChildId = document.createAttribute('id'),
		imagesDivChildClass = document.createAttribute('class');

	imagesDivChildId.value = 'allImages';
	imagesDivChildClass.value = 'allImages';

	imagesDivChild.setAttributeNode(imagesDivChildId);
	imagesDivChild.setAttributeNode(imagesDivChildClass);

	queryImages.appendChild(imagesDivChild);

	return queryImages;
}

buttonSearch.addEventListener('click', (e) => {
	let buttonSearch = e.target;

	let containerImagesTrends = document.querySelector(
		'.container-images-trends'
	);

	let hiddenContainerForm = document.querySelector(
		'.hiddenContainerForm'
	);

	let optionsHiddenContainerForm = document.querySelectorAll(
		'.option'
	);

	let containerHistoryButtons = document.querySelector(
		'.containerHistoryButtons'
	);

	containerHistoryButtons.style.cssText = 'display: block;';

	let queryImages = document.querySelector('#images');

	hiddenContainerForm.style.cssText = 'display: none;';
	optionsHiddenContainerForm[0].style.cssText = 'display: none;';
	optionsHiddenContainerForm[1].style.cssText = 'display: none;';
	optionsHiddenContainerForm[2].style.cssText = 'display: none;';

	containerImagesTrends.removeChild(queryImages);

	queryImages = sectionImages();

	createHistoryButtons(stringSearch, buttonSearch);

	getSearchResults(stringSearch);

	queryImages.style.height = '1700';

	window.scrollBy(0, 580);
});

function createHistoryButtons(stringSearch, buttonSearch) {
	let historyButtons = document.createElement('button');
	let historyButtonsClass = document.createAttribute('class');
	let historyButtonsId = document.createAttribute('id');

	historyButtonsClass.value = 'historyButtons';

	historyButtons.setAttributeNode(historyButtonsClass);
	historyButtons.setAttributeNode(historyButtonsId);

	containerHistoryButtons.appendChild(historyButtons);

	let string = stringSearch;

	if (buttonSearch) {
		historyButtons.id = stringSearch;

		historyButtons.style.cssText =
			'display: inline-block; width: auto; border: 1px solid #110038; box-shadow: inset -1px -1px 0 0 #a72cb3, inset 1px 1px 0 0 #ffffff; color: #ffffff; margin: 10px 5px;  padding: 5px 10px; background-color: #5789F5;';

		words.push(string);

		localStorage.setItem('array', JSON.stringify('true'));

		historyButtons.innerHTML = stringSearch;

		containerHistoryButtons.appendChild(historyButtons);

		historyButtons.addEventListener('click', () => {
			let containerImagesTrends = document.querySelector(
				'.container-images-trends'
			);
			let queryImages = document.querySelector('#images');
			containerImagesTrends.removeChild(queryImages);
			queryImages = sectionImages();
			getSearchResults(string);
			queryImages.style.height = '1700';
			window.scrollBy(0, 580);
		});

		localStorage.setItem('words', JSON.stringify(words));
	}
}

window.onload = storageData();

function storageData() {
	words = JSON.parse(localStorage.getItem('words'));
	if (words === null) {
		words = [];
		localStorage.setItem('array', JSON.stringify('false'));
		let array = JSON.parse(localStorage.getItem('array'));
		if (array === 'false') {
			let containerHistoryButtons = document.querySelector(
				'.containerHistoryButtons'
			);
			containerHistoryButtons.style.display = 'none';
		}
	} else {
		localStorage.setItem('array', JSON.stringify('true'));
		let array = JSON.parse(localStorage.getItem('array'));
		if (array === 'true') {
			let containerHistoryButtons = document.querySelector(
				'.containerHistoryButtons'
			);
			containerHistoryButtons.style.display = 'block';

			for (let i = 0; i < words.length; i++) {
				let button = document.createElement('button');
				button.className = 'historyButtons';
				let string = words[i];
				button.innerHTML = string;

				button.style.cssText =
					'display: inline-block; width: auto; border: 1px solid #110038; box-shadow: inset -1px -1px 0 0 #a72cb3, inset 1px 1px 0 0 #ffffff; color: #ffffff; margin: 10px 5px;  padding: 5px 10px; background-color: #5789F5;';

				containerHistoryButtons.appendChild(button);

				button.addEventListener('click', buttonClick);

				function buttonClick() {
					let containerImagesTrends = document.querySelector(
						'.container-images-trends'
					);
					let queryImages = document.querySelector('#images');
					containerImagesTrends.removeChild(queryImages);
					queryImages = sectionImages();
					console.log(string);
					getSearchResults(string);
					queryImages.style.height = '1700';
					window.scrollBy(0, 580);
				}
			}
		}
	}
}

function getSuggestionsResults(stringSearch) {
	if (stringSearch === '') {
		return;
	}

	const found = fetch(
		SUGGESTIONS_URL +
			`{${stringSearch}}` +
			'?' +
			'&api_key=' +
			API_KEY,
		init
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			return error;
		});

	resultsFromInputText(found);
}

function resultsFromInputText(found) {
	let options = document.querySelectorAll('.option');
	found.then((results) => {
		var resultsData = results.data;
		let resultsMaxLength = 3;
		for (let i = 0; i < resultsMaxLength; i++) {
			options[i].innerHTML = resultsData[i].name;

			options[i].addEventListener('click', () => {
				let search = document.querySelector('#search');
				search.value = options[i].innerHTML;
				stringSearch = options[i].innerHTML;
			});
		}
	});
}

function getSearchResults(stringSearch) {
	const found = fetch(
		SEARCH_URL + stringSearch + '&api_key=' + API_KEY,
		init
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			return error;
		});

	resultsFromSearch(found, stringSearch);
}

function resultsFromSearch(found, stringSearch) {
	found.then((results) => {
		let allImages = document.querySelector('#allImages');
		let trendsText = document.querySelector('.trends-text');
		trendsText.innerHTML = stringSearch;
		let resultsMaxLength = results.data.length;

		for (let i = 0; i < resultsMaxLength; i++) {
			let containerImg = document.createElement('div');
			containerImg.className = 'containerImg';
			allImages.appendChild(containerImg);
			let img = document.createElement('img');
			img.className = 'imgClass';
			img.src = results.data[i].images.fixed_height.url;
			img.alt = results.data[i].title;

			img.addEventListener('click', () => {
				localStorage.setItem('image', JSON.stringify('true'));
				savedImage.push(img.src);
				localStorage.setItem(
					'savedImage',
					JSON.stringify(savedImage)
				);
			});

			containerImg.appendChild(img);
			let title = document.createElement('p');
			title.innerHTML = results.data[i].title;
			containerImg.appendChild(title);
		}
	});
}

//--------------------------------------------------------------

let buttonCreateGif = document.querySelector('#buttonBoxOne');

buttonCreateGif.addEventListener('click', () => {
	window.location.href = './createGif.html';
	localStorage.setItem('createGif', JSON.stringify('true'));
});

let buttonNonBox = document.querySelector('#buttonNonBox');

buttonNonBox.addEventListener('click', () => {
	window.location.href = './createGif.html';
	localStorage.setItem('createGif', JSON.stringify('false'));
});
