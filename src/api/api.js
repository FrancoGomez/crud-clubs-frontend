import { BACKEND_URL } from '../../env.js';

export const returnAllClubs = async () => {
  const clubsData = await fetch(`${BACKEND_URL}/clubs`);

  if (clubsData.status === 200) {
    return clubsData.json();
  }

  return null;
};

export const returnClub = async (tla) => {
  const clubData = await fetch(`${BACKEND_URL}/clubs/${tla}`);

  if (clubData.status === 200) {
    return clubData.json();
  }

  return null;
};

export const sendForm = (route, formId) => {
  const $form = document.querySelector(`#${formId}`);

  fetch(`${BACKEND_URL}/clubs/${route}`, {
    method: 'post',
    body: new FormData($form),
  });
};

export const resetClubs = () => {
  fetch(`${BACKEND_URL}/clubs/backup`);
};
