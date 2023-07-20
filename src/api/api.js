import { BACKEND_PORT } from '../../env.js';

export const returnAllClubs = async () => {
  const clubsData = await fetch(`http://localhost:${BACKEND_PORT}/clubs`);

  if (clubsData.status === 200) {
    return clubsData.json();
  }

  return null;
};

export const returnClub = async (tla) => {
  const clubData = await fetch(`http://localhost:${BACKEND_PORT}/clubs/${tla}`);

  if (clubData.status === 200) {
    return clubData.json();
  }

  return null;
};

export const sendForm = (route, formId) => {
  const $form = document.querySelector(`#${formId}`);

  fetch(`http://localhost:${BACKEND_PORT}/clubs/${route}`, {
    method: 'post',
    body: new FormData($form),
  });
};

export const resetClubs = () => {
  fetch(`http://localhost:${BACKEND_PORT}/clubs/backup`);
};
