/* eslint-disable no-restricted-globals */
import showCreateClubPage from './ui/pages/create-club-pages.js';
import showMainPage from './ui/pages/main.pages.js';
import showUpdateClubPage from './ui/pages/update-club.pages.js';
import showViewClubPage from './ui/pages/view-club.pages.js';

const init = () => {
  const $mainContainer = document.querySelector('#main-container');
  const path = location.pathname;

  if (path.includes('/view')) return showViewClubPage($mainContainer);

  if (path.includes('/update')) return showUpdateClubPage($mainContainer);

  if (path.includes('/create')) return showCreateClubPage($mainContainer);

  return showMainPage($mainContainer);
};

init();
