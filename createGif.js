const UPLOAD_URL = 'http://upload.giphy.com/v1/gifs';
const GIFBYID_URL = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'ytA60yuYg1eiO3dZpTTNf333HfbmSYUj';
const USERNAME = 'manuelb2020';

const headers = new Headers();

let init = {
	method: 'GET',
	mode: 'cors',
	headers: headers,
	cache: 'default',
};

//-------------------------------------------------------

let idBody = document.createAttribute('id'),
	classBody = document.createAttribute('class'),
	logo = document.querySelector('#logo'),
	arrowDown = document.querySelector('#arrowDown');

idBody.value = 'theme';
classBody.value = 'themeCreateOne';

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

localStorage.setItem('windowSuccess', 'false');

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
	theme.setAttribute('class', 'themeCreateOne');

	localStorage.setItem('themeIndex', 'true');
	localStorage.setItem('logo', 'true');
	localStorage.setItem('arrowDownTwo', 'true');
	localStorage.setItem('windowCapture', 'true');
	localStorage.setItem('windowSuccessUpload', 'true');

	logo.src = './assets/img/gifOS_logo.png';
	arrowDown.src = './assets/img/dropdown.svg';
}

function selectSailorNight() {
	theme.setAttribute('class', 'themeCreateTwo');

	localStorage.setItem('themeIndex', 'false');
	localStorage.setItem('logo', 'false');
	localStorage.setItem('arrowDownTwo', 'false');
	localStorage.setItem('windowCapture', 'false');
	localStorage.setItem('windowSuccessUpload', 'false');

	logo.src = './assets/img/gifOS_logo_dark.png';
	arrowDown.src = './assets/img/dropdown_white.svg';
}

let buttonBoxOne = document.querySelector('.buttonBoxOne');
buttonBoxOne.addEventListener('click', openCreateWindow);

function openCreateWindow() {
	let containerCreateGifos = document.querySelector(
		'.containerCreateGifos'
	);
	containerCreateGifos.style.display = 'block';

	let menu = document.querySelector('.menu');
	menu.style.display = 'none';

	let arrowLeft = document.querySelector('.arrowLeft');
	arrowLeft.style.display = 'block';
}

window.onload = callLocalStorage();

function callLocalStorage() {
	let themeIndex = localStorage.getItem('themeIndex');
	if (themeIndex === 'true') {
		document.body.classList.remove('themeCreateTwo');
		document.body.classList.add('themeCreateOne');
	} else {
		document.body.classList.remove('themeCreateOne');
		document.body.classList.add('themeCreateTwo');
	}

	let logoOne = localStorage.getItem('logo');
	if (logoOne === 'true') {
		logo.src = './assets/img/gifOS_logo.png';
	} else {
		logo.src = './assets/img/gifOS_logo_dark.png';
	}

	let arrowDownOne = localStorage.getItem('arrowDownOne');
	if (arrowDownOne === 'true') {
		arrowDown.src = './assets/img/dropdown.svg';
		localStorage.setItem('arrowDownTwo', 'true');
	} else {
		arrowDown.src = './assets/img/dropdown_white.svg';
		localStorage.setItem('arrowDownTwo', 'false');
	}

	let createGif = JSON.parse(localStorage.getItem('createGif'));
	if (createGif === 'true') {
		let containerCreateGifos = document.querySelector(
			'.containerCreateGifos'
		);
		containerCreateGifos.style.display = 'block';
		let menu = document.querySelector('.menu');
		menu.style.display = 'none';
		let arrowLeft = document.querySelector('.arrowLeft');
		arrowLeft.style.display = 'block';
	} else {
		let containerCreateGifos = document.querySelector(
			'.containerCreateGifos'
		);
		containerCreateGifos.style.display = 'none';
		let menu = document.querySelector('.menu');
		menu.style.cssText =
			'display: flex; flex-direction: row; justify-content: center; align-items: center';
		let arrowLeft = document.querySelector('.arrowLeft');
		arrowLeft.style.display = 'none';

		let logo = document.querySelector('.logo');
		logo.addEventListener('click', back);

		function back() {
			window.location.href = './ìndex.html';
		}
	}
}

//-----------------------------------------------------

let controller = new AbortController();
let signal = controller.signal;

function createRecordVideoWindow() {
	let windowCaptureVideo = document.createElement('div'),
		windowCaptureVideoClass = document.createAttribute('class');

	windowCaptureVideoClass.value = 'windowCaptureVideo';

	windowCaptureVideo.setAttributeNode(windowCaptureVideoClass);

	windowCaptureVideo.style.cssText = 'display: none';

	let containerMyGifs = document.querySelector('.container-myGifs');

	document
		.querySelector('.section')
		.insertBefore(windowCaptureVideo, containerMyGifs);

	let windowCaptureVideoContainerTitle = document.createElement(
			'div'
		),
		windowCaptureVideoContainerTitleClass = document.createAttribute(
			'class'
		);

	windowCaptureVideoContainerTitleClass.value =
		'windowCaptureVideoContainerTitle';

	windowCaptureVideoContainerTitle.setAttributeNode(
		windowCaptureVideoContainerTitleClass
	);

	windowCaptureVideo.appendChild(windowCaptureVideoContainerTitle);

	let windowCaptureVideoTitle = document.createElement('p'),
		windowCaptureVideoTitleClass = document.createAttribute('class');

	windowCaptureVideoTitleClass.value = 'windowCaptureVideoTitle';

	windowCaptureVideoTitle.setAttributeNode(
		windowCaptureVideoTitleClass
	);

	windowCaptureVideoTitle.innerHTML = 'Un chequeo antes de empezar';

	windowCaptureVideoContainerTitle.appendChild(
		windowCaptureVideoTitle
	);

	let windowCaptureVideoClose = document.createElement('img'),
		windowCaptureVideoCloseClass = document.createAttribute('class');

	windowCaptureVideoClose.src = './assets/img/button3.svg';
	windowCaptureVideoCloseClass.value = 'imgClose';

	windowCaptureVideoClose.setAttributeNode(
		windowCaptureVideoCloseClass
	);

	windowCaptureVideoContainerTitle.appendChild(
		windowCaptureVideoClose
	);

	windowCaptureVideoClose.addEventListener('click', close);

	function close() {
		let containerCreateGifos = document.querySelector(
			'.containerCreateGifos'
		);
		let windowCaptureVideo = document.querySelector(
			'.windowCaptureVideo'
		);
		let containerCamera = document.querySelector('.containerCamera');
		let camera = document.querySelector('.camera');
		let buttonCapture = document.querySelector('.buttonCapture');
		let buttonDone = document.querySelector('.buttonDone');
		let windowLiveVideo = document.querySelector('.liveVideo');
		let windowRecordedVideo = document.querySelector(
			'.recordedVideo'
		);
		let buttonUpload = document.querySelector('.buttonUpload');
		let repeatCapture = document.querySelector('.repeatCapture');

		windowCaptureVideo.style.cssText = 'display: none';

		containerCreateGifos.style.cssText = 'display: block';

		containerCamera.style.cssText =
			'display: block; background-color: #f7c9f3;';
		buttonCapture.style.cssText = 'display: block';
		buttonDone.style.cssText = 'display: none';
		camera.style.cssText = 'display: block; margin-left: 10px';
		camera.src = './assets/img/camera.svg';

		windowLiveVideo.style.display = 'block';
		windowRecordedVideo.style.display = 'none';

		buttonUpload.style.cssText = 'display: none';
		repeatCapture.style.cssText = 'display: none';
	}

	let windowLiveVideo = document.createElement('video'),
		windowLiveVideoClass = document.createAttribute('class'),
		windowLiveVideoId = document.createAttribute('id'),
		windowLiveVideoSrc = document.createAttribute('src'),
		windowLiveVideoAutoplay = document.createAttribute('autoplay');

	windowLiveVideoClass.value = 'liveVideo';
	windowLiveVideoId.value = 'liveVideo';
	windowLiveVideoSrc.value = '';

	windowLiveVideo.setAttributeNode(windowLiveVideoClass);
	windowLiveVideo.setAttributeNode(windowLiveVideoId);
	windowLiveVideo.setAttributeNode(windowLiveVideoAutoplay);

	windowLiveVideo.style.cssText = 'display: block';

	windowCaptureVideo.appendChild(windowLiveVideo);

	let windowRecordedVideo = document.createElement('img'),
		windowRecordedVideoClass = document.createAttribute('class'),
		windowRecordedVideoId = document.createAttribute('id'),
		windowRecordedVideoSrc = document.createAttribute('src');

	windowRecordedVideoClass.value = 'recordedVideo';
	windowRecordedVideoId.value = 'recordedVideo';
	windowRecordedVideoSrc.value = '';

	windowRecordedVideo.setAttributeNode(windowRecordedVideoClass);
	windowRecordedVideo.setAttributeNode(windowRecordedVideoId);

	windowRecordedVideo.style.display = 'none';

	windowCaptureVideo.appendChild(windowRecordedVideo);

	let containerCamera = document.createElement('div'),
		containerCameraClass = document.createAttribute('class');

	containerCameraClass.value = 'containerCamera';

	containerCamera.setAttributeNode(containerCameraClass);

	containerCamera.style.cssText = 'background-color: #f7c9f3;';

	windowCaptureVideo.appendChild(containerCamera);

	let camera = document.createElement('img'),
		cameraClass = document.createAttribute('class');

	cameraClass.value = 'camera';

	camera.setAttributeNode(cameraClass);

	camera.src = './assets/img/camera.svg';

	containerCamera.appendChild(camera);

	let buttonCapture = document.createElement('button'),
		buttonCaptureClass = document.createAttribute('class');

	buttonCaptureClass.value = 'buttonCapture';

	buttonCapture.setAttributeNode(buttonCaptureClass);

	buttonCapture.innerHTML = 'Capturar';

	buttonCapture.addEventListener('click', recordVideo);

	function recordVideo() {
		let containerCamera = document.querySelector('.containerCamera');
		let camera = document.querySelector('.camera');
		let buttonDone = document.querySelector('.buttonDone');
		let windowLiveVideo = document.querySelector('.liveVideo');
		let windowRecordedVideo = document.querySelector(
			'.recordedVideo'
		);
		let windowCaptureVideoTitle = document.querySelector(
			'.windowCaptureVideoTitle'
		);
		windowCaptureVideoTitle.innerHTML = 'Capturando Tu Guifo';

		buttonCapture.style.cssText = 'display: none';

		containerCamera.style.cssText = 'background-color: #FF6161';
		buttonDone.style.cssText = 'display: block';
		camera.src = './assets/img/recording.svg';

		windowLiveVideo.style.display = 'block';
		windowRecordedVideo.style.display = 'none';

		startRecordVideo();
	}

	windowCaptureVideo.appendChild(buttonCapture);

	let buttonDone = document.createElement('button'),
		buttonDoneClass = document.createAttribute('class');

	buttonDoneClass.value = 'buttonDone';

	buttonDone.setAttributeNode(buttonDoneClass);

	buttonDone.innerHTML = 'Listo';

	buttonDone.style.cssText = 'display: none';

	windowCaptureVideo.appendChild(buttonDone);

	buttonDone.addEventListener('click', stopRecord);

	let buttonUpload = document.createElement('button'),
		buttonUploadClass = document.createAttribute('class');

	buttonUploadClass.value = 'buttonUpload';

	buttonUpload.setAttributeNode(buttonUploadClass);

	buttonUpload.innerHTML = 'Subir Guifo';

	buttonUpload.style.cssText = 'display: none';

	windowCaptureVideo.appendChild(buttonUpload);

	buttonUpload.addEventListener('click', upLoadGif);

	let windowUploading = document.createElement('div'),
		windowUploadingClass = document.createAttribute('class');

	windowUploadingClass.value = 'windowUploading';

	windowUploading.setAttributeNode(windowUploadingClass);

	windowUploading.style.cssText = 'display: none';

	windowUploadingParentNode = document.querySelector(
		'.containerCamera'
	).parentNode;

	containerCamera = document.querySelector('.containerCamera');
	windowUploadingParentNode.insertBefore(
		windowUploading,
		containerCamera
	);

	let containerWindowUploading = document.createElement('div');
	containerWindowUploadingClass = document.createAttribute('class');

	containerWindowUploadingClass.value = 'containerWindowUploading';

	containerWindowUploading.setAttributeNode(
		containerWindowUploadingClass
	);

	windowUploading.appendChild(containerWindowUploading);

	let imgWorld = document.createElement('img');

	imgWorld.src = './assets/img/globe_img.png';

	containerWindowUploading.appendChild(imgWorld);

	let titleUploading = document.createElement('p');
	titleUploading.className = 'titleUploading';
	titleUploading.innerHTML = 'Estamos subiendo tu guifo...';

	containerWindowUploading.appendChild(titleUploading);

	let progressBar = document.createElement('div');
	progressBar.className = 'progressBar';

	containerWindowUploading.appendChild(progressBar);

	let progress = document.createElement('span');
	progress.className = 'progress';

	progressBar.appendChild(progress);

	let buttonCancel = document.createElement('button');
	buttonCancel.className = 'buttonCancel';

	buttonCancel.innerHTML = 'Cancelar';

	windowUploading.appendChild(buttonCancel);

	buttonCancel.addEventListener('click', abortUploading);

	function abortUploading() {
		controller.abort();
		alert('Se ha cancelado la subida del gif!! 😢');
	}

	let repeatCapture = document.createElement('button'),
		repeatCaptureClass = document.createAttribute('class');

	repeatCaptureClass.value = 'repeatCapture';

	repeatCapture.setAttributeNode(repeatCaptureClass);

	repeatCapture.innerHTML = 'Repetir captura';

	repeatCapture.style.cssText = 'display: none;';

	windowCaptureVideo.appendChild(repeatCapture);

	repeatCapture.addEventListener('click', repeat);

	function repeat() {
		repeatCapture.style.cssText = 'display: none';

		let windowRecordedVideo = document.querySelector(
			'#recordedVideo'
		);
		windowRecordedVideo.src = '';
		windowRecordedVideo.style.cssText = 'display: none';

		let containerCamera = document.querySelector('.containerCamera');
		containerCamera.style.cssText =
			'display: block; background-color: #f7c9f3;';

		let camera = document.querySelector('.camera');
		camera.style.cssText = 'display: block; margin-left: 10px';
		camera.src = './assets/img/camera.svg';

		let buttonCapture = document.querySelector('.buttonCapture');
		buttonCapture.style.cssText = 'display: block';

		let liveVideo = document.querySelector('.liveVideo');
		liveVideo.style.cssText = 'display: block';

		let buttonUpload = document.querySelector('.buttonUpload');
		buttonUpload.style.cssText = 'display: none';

		let windowUploading = document.querySelector('.windowUploading');
		windowUploading.style.display = 'none';

		let windowCaptureVideoTitle = document.querySelector(
			'.windowCaptureVideoTitle'
		);

		windowCaptureVideoTitle.innerHTML = 'Un Chequeo Antes de Empezar';

		showVideo();
	}
}

createRecordVideoWindow();

//-------------------------------------------------------------------

window.onload = windowStorage();

function windowStorage() {
	let windowCaptureLocal = localStorage.getItem('windowCapture');
	if (windowCaptureLocal === 'true') {
		let windowCaptureVideoContainerTitle = document.querySelector(
			'.windowCaptureVideoContainerTitle'
		);
		windowCaptureVideoContainerTitle.style.cssText =
			'background-image: linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%);';
	} else {
		let windowCaptureVideoContainerTitle = document.querySelector(
			'.windowCaptureVideoContainerTitle'
		);
		windowCaptureVideoContainerTitle.style.cssText =
			'background-image: linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%);';
	}
}

let firstButtonCancel = document.querySelector('.buttonOne');

firstButtonCancel.addEventListener('click', closeWindowCreate);

function closeWindowCreate() {
	let containerCreateGifos = document.querySelector(
		'.containerCreateGifos'
	);

	containerCreateGifos.style.display = 'none';

	let menu = document.querySelector('.menu');
	menu.style.cssText =
		'display: flex; flex-direction: row; justify-content: center; align-items: center';

	let arrowLeft = document.querySelector('.arrowLeft');
	arrowLeft.style.display = 'none';

	let logo = document.querySelector('.logo');
	logo.addEventListener('click', back);

	function back() {
		window.location.href = './ìndex.html';
	}
}

let buttonStart = document.querySelector('.buttonTwo');

buttonStart.addEventListener('click', openWindowCaptureVideo);

function openWindowCaptureVideo() {
	let containerCreateGifos = document.querySelector(
		'.containerCreateGifos'
	);

	let windowCaptureVideo = document.querySelector(
		'.windowCaptureVideo'
	);

	let windowCaptureVideoTitle = document.querySelector(
		'.windowCaptureVideoTitle'
	);

	let windowUploading = document.querySelector('.windowUploading');

	let windowCaptureLocal = localStorage.getItem('windowCapture');

	if (windowCaptureLocal === 'true') {
		let windowCaptureVideoContainerTitle = document.querySelector(
			'.windowCaptureVideoContainerTitle'
		);
		windowCaptureVideoContainerTitle.style.cssText =
			'background-image: linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%);';
	} else {
		let windowCaptureVideoContainerTitle = document.querySelector(
			'.windowCaptureVideoContainerTitle'
		);
		windowCaptureVideoContainerTitle.style.cssText =
			'background-image: linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%);';
	}

	containerCreateGifos.style.display = 'none';
	windowUploading.style.display = 'none';

	windowCaptureVideo.style.display = 'block';

	windowCaptureVideoTitle.innerHTML = 'Un Chequeo Antes de Empezar';

	showVideo();
}

// Elementos necesarios

let stream;
let recorderGif;
let blobGif;
let recording = false;
let uploadedGifs = [];

async function showVideo() {
	let liveVideo = document.querySelector('#liveVideo');
	stream = await navigator.mediaDevices.getUserMedia({
		video: {width: 750},
		audio: false,
	});
	liveVideo.srcObject = stream;
	liveVideo.play();

	let windowCaptureVideoClose = document.querySelector('.imgClose');

	windowCaptureVideoClose.addEventListener('click', () => {
		stream.getTracks().forEach(function (track) {
			if (track.readyState == 'live' && track.kind === 'video') {
				track.stop();
			}
		});
	});
}

async function startRecordVideo() {
	recorderGif = new RecordRTCPromisesHandler(stream, {
		type: 'gif',
		frameRate: 1,
		quality: 10,
		width: 450,
		hidden: 240,
	});
	recorderGif.startRecording();
	const sleep = (m) => new Promise((r) => setTimeout(r, m));
	await sleep(10000);
	stopRecord();
}

async function stopRecord() {
	let buttonDone = document.querySelector('.buttonDone');
	if ((await recorderGif.getState()) === 'recording') {
		await recorderGif.stopRecording();
		blobGif = await recorderGif.getBlob();
		showRecorded(blobGif);
	}

	buttonDone.addEventListener('click', () => {
		let buttonUpload = document.querySelector('.buttonUpload');
		let repeatCapture = document.querySelector('.repeatCapture');
		let containerCamera = document.querySelector('.containerCamera');
		let camera = document.querySelector('.camera');

		buttonUpload.style.cssText = 'display: block';

		repeatCapture.style.cssText =
			'display: block; background-color: #FFF4FD;';

		buttonDone.style.cssText = 'display: none';
		containerCamera.style.cssText = 'display: none';
		camera.style.cssText = 'display: none';

		let windowCaptureVideoTitle = document.querySelector(
			'.windowCaptureVideoTitle'
		);
		windowCaptureVideoTitle.innerHTML = 'Vista Previa';

		stream.getTracks().forEach(function (track) {
			if (track.readyState == 'live' && track.kind === 'video') {
				track.stop();
			}
		});
	});
}

function showRecorded(blobGif) {
	let buttonDone = document.querySelector('.buttonDone');
	let windowRecordedVideo = document.querySelector('#recordedVideo');
	let windowLiveVideo = document.querySelector('#liveVideo');
	let gif = URL.createObjectURL(blobGif);
	windowRecordedVideo.src = gif;
	localStorage.setItem('urlGif', JSON.stringify(gif));

	buttonDone.addEventListener('click', () => {
		windowLiveVideo.style.display = 'none';
		windowRecordedVideo.style.display = 'block';
	});
}

async function upLoadGif() {
	if (blobGif) {
		let windowUploading = document.querySelector('.windowUploading');
		windowUploading.style.display = 'block';
		let liveVideo = document.querySelector('.liveVideo');
		liveVideo.style.display = 'none';
		let recordedVideo = document.querySelector('.recordedVideo');
		recordedVideo.style.display = 'none';
		let buttonUpload = document.querySelector('.buttonUpload');
		let repeatCapture = document.querySelector('.repeatCapture');

		let windowCaptureVideoTitle = document.querySelector(
			'.windowCaptureVideoTitle'
		);
		windowCaptureVideoTitle.innerHTML = 'Subiendo Guifo';

		buttonUpload.style.display = 'none';
		repeatCapture.style.display = 'none';

		let form = new FormData();
		let gifName = prompt('Nombre de Gif: ') || 'mygif';
		form.append('file', blobGif, gifName + '.gif');
		try {
			const resp = await fetch(
				UPLOAD_URL + '?api_key=' + API_KEY + '&username=' + USERNAME,
				{
					mode: 'cors',
					method: 'POST',
					body: form,
					signal,
				}
			);
			const parsedResponse = await resp.json();
			uploadedGifs.push(parsedResponse.data);
			localStorage.setItem('gifs', JSON.stringify('true'));
			localStorage.setItem('myGifs', JSON.stringify(uploadedGifs));

			successUpload(uploadedGifs, gifName);
		} catch (e) {
			console.log('Error: ' + e);
		}
	} else {
		alert('POR EL MOMENTO NO HAS CARGADO NADA!! 😥');
	}
}

function successUpload(uploadedGifs, gifName) {
	localStorage.setItem('windowSuccess', 'true');
	let containerCreateGifos = document.querySelector(
		'.containerCreateGifos'
	);
	containerCreateGifos.style.display = 'none';

	let windowCaptureVideo = document.querySelector(
		'.windowCaptureVideo'
	);
	windowCaptureVideo.style.display = 'none';

	let windowSuccessUpload = document.createElement('div');
	windowSuccessUpload.className = 'windowSuccessUpload';

	let windowSuccessUploadParent = document.querySelector(
		'.container-myGifs'
	).parentNode;
	let containerGifs = document.querySelector('.container-myGifs');

	windowSuccessUploadParent.insertBefore(
		windowSuccessUpload,
		containerGifs
	);

	let windowSuccessUploadContainerTitle = document.createElement(
		'div'
	);

	windowSuccessUploadContainerTitle.className =
		'windowSuccessUploadContainerTitle';

	windowSuccessUpload.appendChild(windowSuccessUploadContainerTitle);

	let windowSuccessTitle = document.createElement('p');
	windowSuccessTitle.className = 'windowSuccessTitle';

	windowSuccessTitle.innerHTML = 'Guifo subido con éxito';

	windowSuccessUploadContainerTitle.appendChild(windowSuccessTitle);

	let windowSuccessClose = document.createElement('img');
	windowSuccessClose.className = 'windowSuccessClose';

	windowSuccessClose.src = './assets/img/button3.svg';

	windowSuccessUploadContainerTitle.appendChild(windowSuccessClose);

	windowSuccessClose.addEventListener('click', () => {
		let containerCreateGifos = document.querySelector(
			'.containerCreateGifos'
		);
		let windowSuccessUpload = document.querySelector(
			'.windowSuccessUpload'
		);
		foundLastID.then((results) => {
			let containerGifs = document.querySelector('.containerGifs');
			let url = results.data.images.fixed_height.url;
			let urlToBlob = fetch(url)
				.then(function (response) {
					let urlToBlob = response.blob();
					return urlToBlob;
				})
				.then(function (myJson) {
					let blobUrl = URL.createObjectURL(myJson);
					return blobUrl;
				});
			urlToBlob.then((res) => {
				let a = document.createElement('a');
				a.href = res;
				let aAttribute = document.createAttribute('download');
				a.setAttributeNode(aAttribute);
				aAttribute.value = 'Gif';
				containerGifs.appendChild(a);
				let myGif = document.createElement('img');
				myGif.src = results.data.images.fixed_height.url;
				a.appendChild(myGif);
			});
		});
		windowSuccessUpload.style.display = 'none';
		containerCreateGifos.style.display = 'block';
	});

	let checkGifAndButtonsContainer = document.createElement('div');
	checkGifAndButtonsContainer.className =
		'checkGifAndButtonsContainer';

	windowSuccessUpload.appendChild(checkGifAndButtonsContainer);

	let checkGif = document.createElement('div');
	checkGif.className = 'checkGif';

	checkGifAndButtonsContainer.appendChild(checkGif);

	let imgGif = document.createElement('img');
	imgGif.className = 'imgGif';

	uploadedGifsLength = uploadedGifs.length;

	let string = uploadedGifs[uploadedGifsLength - 1].id;
	const foundLastID = fetch(
		GIFBYID_URL + `${string}` + '?api_key=' + API_KEY,
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
	myGifUploaded(foundLastID);

	function myGifUploaded(foundLastID) {
		foundLastID.then((results) => {
			imgGif.src = results.data.images.fixed_height.url;
			checkGif.appendChild(imgGif);
		});
	}

	let containerButtons = document.createElement('div');
	containerButtons.className = 'containerButtons';

	checkGifAndButtonsContainer.appendChild(containerButtons);

	let titleContainerButtons = document.createElement('p');
	titleContainerButtons.className = 'titleContainerButtons';
	titleContainerButtons.innerHTML = 'Guifo creado con éxito';

	containerButtons.appendChild(titleContainerButtons);

	let buttons = document.createElement('div');
	buttons.className = 'buttons';

	containerButtons.appendChild(buttons);

	let buttonCopyLink = document.createElement('button');
	buttonCopyLink.className = 'buttonCopyLink';
	buttonCopyLink.id = 'buttonCopyLink';

	buttonCopyLink.innerHTML = 'Copiar Enlace Guifo';

	buttonCopyLink.addEventListener('click', () => {
		foundLastID.then((results) => {
			let aux = document.createElement('input');
			aux.setAttribute('value', results.data.url);
			document.body.appendChild(aux);
			aux.select();
			document.execCommand('copy');
			document.body.removeChild(aux);
		});
		alert('URL Copiada con éxito!!');
	});

	buttons.appendChild(buttonCopyLink);

	let downloadGif = document.createElement('a');
	downloadGif.className = 'downloadGif';
	downloadGif.id = 'downloadGif';

	downloadGif.innerHTML = 'Descargar Guifo';

	buttons.appendChild(downloadGif);

	let urlGifLocal = JSON.parse(localStorage.getItem('urlGif'));

	downloadGif.href = urlGifLocal;
	let downloadAttribute = document.createAttribute('download');
	downloadGif.setAttributeNode(downloadAttribute);
	downloadAttribute.value = gifName;

	let containerButtonOk = document.createElement('div');
	containerButtonOk.className = 'containerButtonOk';

	windowSuccessUpload.appendChild(containerButtonOk);

	let buttonOK = document.createElement('button');
	buttonOK.className = 'buttonOK';

	buttonOK.innerHTML = 'Listo';

	containerButtonOk.appendChild(buttonOK);

	buttonOK.addEventListener('click', () => {
		let containerCreateGifos = document.querySelector(
			'.containerCreateGifos'
		);
		let windowSuccessUpload = document.querySelector(
			'.windowSuccessUpload'
		);
		foundLastID.then((results) => {
			let containerGifs = document.querySelector('.containerGifs');
			let url = results.data.images.fixed_height.url;
			let urlToBlob = fetch(url)
				.then(function (response) {
					let urlToBlob = response.blob();
					return urlToBlob;
				})
				.then(function (myJson) {
					let blobUrl = URL.createObjectURL(myJson);
					return blobUrl;
				});
			urlToBlob.then((res) => {
				let a = document.createElement('a');
				a.href = res;
				let aAttribute = document.createAttribute('download');
				a.setAttributeNode(aAttribute);
				aAttribute.value = 'Gif';
				containerGifs.appendChild(a);
				let myGif = document.createElement('img');
				myGif.src = results.data.images.fixed_height.url;
				a.appendChild(myGif);
			});
		});

		windowSuccessUpload.style.display = 'none';
		containerCreateGifos.style.display = 'block';
	});
}

let containerMyGifs = document.querySelector('#container-myGifs');

let containerGifs = document.createElement('div');
containerGifs.className = 'containerGifs';

containerMyGifs.appendChild(containerGifs);

window.onload = storageData();

function storageData() {
	uploadedGifs = JSON.parse(localStorage.getItem('myGifs'));
	if (uploadedGifs === null) {
		uploadedGifs = [];
		localStorage.setItem('gifs', JSON.stringify('false'));
		let gifs = JSON.parse(localStorage.getItem('gifs'));
		if (gifs === 'false') {
			let savedImage = JSON.parse(localStorage.getItem('savedImage'));
			if (savedImage === null) {
				return;
			} else {
				for (let i = 0; i < savedImage.length; i++) {
					let url = savedImage[i];
					let urlToBlob = fetch(url)
						.then(function (response) {
							let urlToBlob = response.blob();
							return urlToBlob;
						})
						.then(function (myJson) {
							let blobUrl = URL.createObjectURL(myJson);
							return blobUrl;
						});
					urlToBlob.then((res) => {
						let a = document.createElement('a');
						a.href = res;
						let aAttribute = document.createAttribute('download');
						a.setAttributeNode(aAttribute);
						aAttribute.value = 'Gif';
						containerGifs.appendChild(a);
						let indexImg = document.createElement('img');
						indexImg.src = savedImage[i];
						a.appendChild(indexImg);
					});
				}
			}
		}
	} else {
		localStorage.setItem('gifs', JSON.stringify('true'));
		let gifs = JSON.parse(localStorage.getItem('gifs'));
		if (gifs === 'true') {
			let containerGifs = document.querySelector('.containerGifs');
			let uploadedGifsLength = uploadedGifs.length;
			for (let i = 0; i < uploadedGifsLength; i++) {
				let string = uploadedGifs[i].id;
				const found = fetch(
					GIFBYID_URL + `${string}` + '?api_key=' + API_KEY,
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
				myGifData(found);

				function myGifData(found) {
					found.then((results) => {
						let url = results.data.images.fixed_height.url;
						let urlToBlob = fetch(url)
							.then(function (response) {
								let urlToBlob = response.blob();
								return urlToBlob;
							})
							.then(function (myJson) {
								let blobUrl = URL.createObjectURL(myJson);
								return blobUrl;
							});
						urlToBlob.then((res) => {
							let a = document.createElement('a');
							a.href = res;
							let aAttribute = document.createAttribute('download');
							a.setAttributeNode(aAttribute);
							aAttribute.value = 'Gif';
							containerGifs.appendChild(a);
							let myGif = document.createElement('img');
							myGif.src = results.data.images.fixed_height.url;
							a.appendChild(myGif);
						});
					});
				}
			}
			let savedImage = JSON.parse(localStorage.getItem('savedImage'));
			for (let i = 0; i < savedImage.length; i++) {
				let url = savedImage[i];
				let urlToBlob = fetch(url)
					.then(function (response) {
						let urlToBlob = response.blob();
						return urlToBlob;
					})
					.then(function (myJson) {
						let blobUrl = URL.createObjectURL(myJson);
						return blobUrl;
					});
				urlToBlob.then((res) => {
					let a = document.createElement('a');
					a.href = res;
					let aAttribute = document.createAttribute('download');
					a.setAttributeNode(aAttribute);
					aAttribute.value = 'Gif';
					containerGifs.appendChild(a);
					let indexImg = document.createElement('img');
					indexImg.src = savedImage[i];
					a.appendChild(indexImg);
				});
			}
		} else {
			let savedImage = JSON.parse(localStorage.getItem('savedImage'));
			for (let i = 0; i < savedImage.length; i++) {
				let url = savedImage[i];
				let urlToBlob = fetch(url)
					.then(function (response) {
						let urlToBlob = response.blob();
						return urlToBlob;
					})
					.then(function (myJson) {
						let blobUrl = URL.createObjectURL(myJson);
						return blobUrl;
					});
				urlToBlob.then((res) => {
					let a = document.createElement('a');
					a.href = res;
					let aAttribute = document.createAttribute('download');
					a.setAttributeNode(aAttribute);
					aAttribute.value = 'Gif';
					containerGifs.appendChild(a);
					let indexImg = document.createElement('img');
					indexImg.src = savedImage[i];
					a.appendChild(indexImg);
				});
			}
		}
	}

	let windowSuccess = localStorage.getItem('windowSuccess');
	if (windowSuccess === 'true') {
		let windowSuccessUploadStorage = localStorage.getItem(
			'windowSuccessUpload'
		);
		if (windowSuccessUploadStorage === 'true') {
			let windowSuccessUploadContainerTitle = document.querySelector(
				'.windowSuccessUploadContainerTitle'
			);
			windowSuccessUploadContainerTitle.style.cssText =
				'background-image: linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%);';
		} else {
			let windowSuccessUploadContainerTitle = document.querySelector(
				'.windowSuccessUploadContainerTitle'
			);
			windowSuccessUploadContainerTitle.style.cssText =
				'background-image: linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%);';
		}
	} else {
		return;
	}
}

//-----------------------------------------------------

let arrowLeft = document.querySelector('#arrowLeft');

arrowLeft.addEventListener('click', () => {
	window.location.href = './ìndex.html';
});
