import { showErrorImage } from '../../../handlers/handlers.js';

const createClubLogo = (club) => {
  const $container = document.createElement('a');
  $container.id = `${club.tla}-logo`;
  $container.className = 'd-flex justify-content-start align-content-center w-100 text-decoration-none';
  $container.href = `/pages/view.html?tla=${club.tla}`;

  const $crestContainer = document.createElement('div');
  $crestContainer.className = 'mt-auto mb-auto m-1 me-2 container-image-small d-flex';

  const $crest = document.createElement('img');
  $crest.className = 'image-small m-auto';
  $crest.src = club.crestUrl;
  $crest.alt = `${club.name} crest`;
  $crest.onerror = () => {
    showErrorImage($crest);
  };

  $crestContainer.appendChild($crest);

  const $name = document.createElement('p');
  $name.className = 'text-light paragraph text-truncate mt-1';
  $name.textContent = club.name;
  $name.style.maxWidth = '100%';

  $container.appendChild($crestContainer);
  $container.appendChild($name);

  return $container;
};

export default createClubLogo;
