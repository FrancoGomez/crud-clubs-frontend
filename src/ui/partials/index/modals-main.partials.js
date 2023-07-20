import { resetClubs } from '../../../api/api.js';
import { redirect } from '../../../handlers/handlers.js';
import createModal from '../../components/modal.components.js';

const createModalsMain = () => {
  const $fragment = document.createDocumentFragment();

  $fragment.appendChild(createModal('reset', 'clubs', false, resetClubs));
  $fragment.appendChild(createModal('reset', 'clubs', true, redirect, '/index.html'));

  $fragment.appendChild(createModal('delete', 'club', false));
  $fragment.appendChild(createModal('delete', 'club', true, redirect, '/index.html'));

  return $fragment;
};

export default createModalsMain;
