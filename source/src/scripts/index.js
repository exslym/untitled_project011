import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	// analog clock:
	let hr = document.querySelector('#hr');
	let mn = document.querySelector('#mn');
	let sc = document.querySelector('#sc');
	// digital clock:
	let hours = document.querySelector('#hours');
	let minutes = document.querySelector('#minutes');
	let seconds = document.querySelector('#seconds');

	setInterval(function () {
		let day = new Date();
		// analog clock:
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * 6;
		let ss = day.getSeconds() * 6;
		// digital clock:
		let h = day.getHours();
		let m = day.getMinutes();
		let s = day.getSeconds();

		// analog clock:
		hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;

		// digital clock (start with zero):
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;

		hours.innerHTML = h;
		minutes.innerHTML = m;
		seconds.innerHTML = s;
	}, 1000);
});
