import { redirect, sendForm } from '../../../handlers/handlers.js';
import createModal from '../../components/modal.components.js';

const createModalsCreate = () => {
  const $fragment = document.createDocumentFragment();

  $fragment.appendChild(createModal('create', 'club', false, sendForm));
  $fragment.appendChild(createModal('create', 'club', true, redirect, '/index.html'));

  return $fragment;
};

export default createModalsCreate;
