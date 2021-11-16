'use strict';

/* Add animation when images have finally loaded (one of the last DOM elements to load 100%) |
  Agrega la animación cuando las imágenes finalmente han cargado (de los últimos elementos del DOM en cargar al 100%) */
window.addEventListener('load', () => document.querySelector('article').classList.add('article'));

/* Add a URL from the 'profiles' array randomly to the footer link |
 Agrega una dirección URL de la matriz 'profiles' aleatoriamente al enlace del footer */
const profiles = [
    'https://codepen.io/javiervaleriano',
    'https://github.com/javiervaleriano',
    'https://www.linkedin.com/in/javier-valeriano1508/',
    'https://twitter.com/javaleriano2',
    'https://devchallenges.io/portfolio/javiervaleriano'
];

document.querySelector('.footer__link').href = profiles[Math.floor(Math.random() * profiles.length)];

/* Does the process constantly every 5 seconds |
  Hace el proceso constantemente cada 5 segundos */
setInterval(() => {
    document.querySelector('.footer__link').href = profiles[Math.floor(Math.random() * profiles.length)];
}, 5000);