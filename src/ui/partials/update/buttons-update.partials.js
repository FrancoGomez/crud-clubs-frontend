import { showModal } from '../../../handlers/handlers.js';
import createButtonForm from '../../components/buttons-form.components.js';

const createButtonsUpdate = () => {
  const $container = document.createElement('div');
  $container.className = 'd-flex justify-content-center align-content-center padding-3 gap-3';

  $container.appendChild(createButtonForm('update', 'club', true, showModal, 'update-club-confirmation-modal'));
  $container.appendChild(createButtonForm('delete', 'club', false, showModal, 'delete-club-confirmation-modal'));

  return $container;
};

export default createButtonsUpdate;
