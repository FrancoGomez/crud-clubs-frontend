import { validateInput } from '../../handlers/handlers.js';

const createFormFile = (title, isRequired) => {
  const $container = document.createElement('div');
  $container.className = 'mb-3';

  const $title = document.createElement('label');
  $title.className = 'form-label text-white fw-semibold sub-subtitle text-capitalize';
  $title.setAttribute('for', title.replace(' ', '-'));
  $title.textContent = title;

  $container.appendChild($title);

  if (isRequired) {
    const $isRequired = document.createElement('span');
    $isRequired.className = 'paragraph fw-medium text-danger';
    $isRequired.textContent = ' *';

    $container.appendChild($isRequired);
  }

  const $input = document.createElement('input');
  $input.className = `form-control ${isRequired ? 'is-invalid' : ''}`;
  $input.id = title.replace(' ', '-');
  $input.name = title.replace(' ', '-');
  $input.setAttribute('type', 'file');
  $input.placeholder = 'hola.jpg';
  $input.setAttribute('accept', '.jpg,.png');
  $input.addEventListener('click', () => {
    validateInput($input);
  });
  if (isRequired) $input.required = 'true';

  $container.appendChild($input);

  return $container;
};

export default createFormFile;
