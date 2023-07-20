import { showModal, setDeleteButton } from '../../../handlers/handlers.js';

const createClubActions = (club) => {
  const $container = document.createElement('div');
  $container.className = 'd-flex justify-content-evenly align-content-center';

  const $viewClub = document.createElement('a');
  $viewClub.id = `view-${club.tla}`;
  $viewClub.className = 'bi bi-eye  text-light';
  $viewClub.href = `/pages/view.html?tla=${club.tla}`;

  const $updateClub = document.createElement('a');
  $updateClub.id = `update-${club.tla}`;
  $updateClub.className = 'bi bi-pencil-square  text-light';
  $updateClub.href = `/pages/update.html?tla=${club.tla}`;

  const $deleteClub = document.createElement('i');
  $deleteClub.id = `delete-${club.tla}`;
  $deleteClub.className = 'bi bi-trash  text-light';
  $deleteClub.setAttribute('role', 'button');
  $deleteClub.addEventListener('click', () => {
    showModal('delete-club-confirmation-modal');
    setDeleteButton('delete-club-confirmation-modal .main-button', club.tla);
  });

  $container.appendChild($viewClub);
  $container.appendChild($updateClub);
  $container.appendChild($deleteClub);

  return $container;
};

export default createClubActions;
