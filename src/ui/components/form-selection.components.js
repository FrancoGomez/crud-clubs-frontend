import { validateSelect } from '../../handlers/handlers.js';

const createFormSelection = (
  options,
  title,
  isRequired,
  defaultOption = '',
) => {
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

  const $select = document.createElement('select');
  $select.className = `form-select ${
    isRequired && !defaultOption ? 'is-invalid' : 'is-valid'
  }`;
  $select.id = title.replace(' ', '-');
  $select.name = title.replace(' ', '-');
  $select.setAttribute('type', 'file');
  $select.onchange = () => {
    validateSelect($select);
  };

  if (!defaultOption) {
    const $defaultOption = document.createElement('option');
    $defaultOption.selected = true;
    $defaultOption.disabled = true;
    $defaultOption.textContent = '--- Select country ---';

    $select.appendChild($defaultOption);
  }

  options.forEach((option) => {
    const $option = document.createElement('option');
    $option.value = option.toLowerCase();
    $option.textContent = option;

    if (defaultOption === option) {
      $option.selected = true;
    }

    $select.appendChild($option);
  });

  if (isRequired) $select.required = 'true';

  $container.appendChild($select);

  return $container;
};

export default createFormSelection;
