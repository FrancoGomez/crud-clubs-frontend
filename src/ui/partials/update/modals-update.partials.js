import { deleteClub, redirect, sendForm } from '../../../handlers/handlers.js';
import createModal from '../../components/modal.components.js';

const createModalsUpdate = (club) => {
  const $fragment = document.createDocumentFragment();

  $fragment.appendChild(createModal('update', 'club', false, sendForm, club.tla));
  $fragment.appendChild(createModal('update', 'club', true, redirect, '/index.html'));

  $fragment.appendChild(createModal('delete', 'club', false, deleteClub, club.tla));
  $fragment.appendChild(createModal('delete', 'club', true, redirect, '/index.html'));

  return $fragment;
};

export default createModalsUpdate;
