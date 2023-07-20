import { validateInput } from '../../handlers/handlers.js';

const createFormSection = (title, isRequired, defaultValue = '') => {
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
  $input.className = `form-control ${
    isRequired && !defaultValue ? 'is-invalid' : 'is-valid'
  }`;
  $input.id = title.replace(' ', '-');
  $input.name = title.replace(' ', '');
  if (title === 'TLA') {
    $input.name = $input.name.toLowerCase();
    $input.maxLength = '3';
  }
  $input.setAttribute(
    'type',
    title.replace(' ', '-') === 'email' ? 'email' : 'text',
  );

  $input.onchange = () => {
    validateInput($input);
  };
  if (defaultValue) $input.value = defaultValue;
  if (isRequired) $input.required = 'true';

  $container.appendChild($input);

  return $container;
};

export default createFormSection;
