import { redirect, showModal } from '../../../handlers/handlers.js';
import createButton from '../../components/button.components.js';

const createButtonsMain = () => {
  const $container = document.createElement('div');
  $container.className = 'd-flex justify-content-center align-content-center padding-4 pt-0 gap-3 m-3 mb-2';

  $container.appendChild(createButton('create', 'club', true, redirect, '/pages/create.html'));
  $container.appendChild(createButton('reset', 'clubs', false, showModal, 'reset-clubs-confirmation-modal'));

  return $container;
};

export default createButtonsMain;
