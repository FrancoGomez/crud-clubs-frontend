/* eslint-disable no-restricted-globals */
import { BACKEND_URL } from '../../env.js';

export const redirect = (path) => {
  location.href = path;
};

export const deleteClub = async (tla) => {
  await fetch(`${BACKEND_URL}/clubs/${tla}`, {
    method: 'delete',
  });
};

export const setDeleteButton = (id, tla) => {
  const $element = document.querySelector(`#${id}`);

  $element.onclick = () => {
    deleteClub(tla);
  };
};

export const showModal = (id) => {
  const $modal = document.querySelector(`#${id}`);

  // converts the modal into a bootstrap modal object
  // eslint-disable-next-line no-undef
  const $bootstrapModal = new bootstrap.Modal($modal);

  $bootstrapModal.show();
};

export const validateSelect = ($select) => {
  if (
    $select.required
    && $select.value
    && !$select.classList.contains('is-valid')
  ) {
    $select.classList.remove('is-invalid');
    $select.classList.add('is-valid');
  } else if (
    $select.required
    && !$select.value
    && !$select.classList.contains('is-invalid')
  ) {
    $select.classList.remove('is-valid');
    $select.classList.add('is-invalid');
  }
};

export const validateInput = ($input) => {
  if ($input.value && !$input.classList.contains('is-valid')) {
    $input.classList.remove('is-invalid');
    $input.classList.add('is-valid');
  } else if (
    $input.required
    && !$input.value
    && !$input.classList.contains('is-invalid')
  ) {
    $input.classList.remove('is-valid');
    $input.classList.add('is-invalid');
  }

  if (!$input.required && !$input.value) {
    $input.classList.remove('is-valid');
  }
};

export const sendForm = (clubTLA) => {
  fetch(`${BACKEND_URL}/clubs/${clubTLA || ''}`, {
    method: clubTLA ? 'put' : 'post',
    body: new FormData(document.querySelector('form')),
  });
};

export const showErrorImage = ($element) => {
  // eslint-disable-next-line no-param-reassign
  $element.src = '../img/defaultImage/default-image.svg';
};

export const isFormValid = ($element) => {
  const $form = $element || document.querySelector('form');

  for (let i = 0; i < $form.length; i += 1) {
    if ($form[i].className.includes('is-invalid')) return false;
  }

  return true;
};
