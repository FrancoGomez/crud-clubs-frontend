import { redirect, showModal } from '../../../handlers/handlers.js';
import createButton from '../../components/button.components.js';

const createButtonsView = (club) => {
  const $container = document.createElement('div');
  $container.className = 'd-flex justify-content-center align-content-center padding-2 gap-3';

  $container.appendChild(createButton('edit', 'club', true, redirect, `/pages/update.html?tla=${club.tla}`));
  $container.appendChild(createButton('delete', 'club', false, showModal, 'delete-club-confirmation-modal'));

  return $container;
};

export default createButtonsView;
