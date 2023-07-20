import { deleteClub, redirect } from '../../../handlers/handlers.js';
import createModal from '../../components/modal.components.js';

const createModalsView = (club) => {
  const $fragment = document.createDocumentFragment();

  $fragment.appendChild(createModal('delete', 'club', false, deleteClub, club.tla));
  $fragment.appendChild(createModal('delete', 'club', true, redirect, '/index.html'));

  return $fragment;
};

export default createModalsView;
