/* Imports */
import { renderItem } from './render-utils.js';
import { createItem } from './fetch-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const sectionEl = document.querySelector('section');
const formEl = document.querySelector('form');

/* State */
let items = [];

/* Events */
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    await createItem(data.get('item'), data.get('quantity'));
});
/* Display Functions */
