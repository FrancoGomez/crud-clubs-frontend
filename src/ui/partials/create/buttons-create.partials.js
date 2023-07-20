import { redirect, showModal } from '../../../handlers/handlers.js';
import createButton from '../../components/button.components.js';
import createButtonForm from '../../components/buttons-form.components.js';

const createButtonsCreate = () => {
  const $container = document.createElement('div');
  $container.className = 'd-flex justify-content-center align-content-center padding-3 gap-3';

  $container.appendChild(createButtonForm('create', 'club', true, showModal, 'create-club-confirmation-modal'));
  $container.appendChild(createButton('discard', 'changes', false, redirect, '/'));

  return $container;
};

export default createButtonsCreate;
