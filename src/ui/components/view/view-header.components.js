import { showErrorImage } from '../../../handlers/handlers.js';

const createViewHeader = (club) => {
  const $container = document.createElement('header');
  $container.className = 'd-flex justify-content-center align-content-center padding-4';

  const $crest = document.createElement('img');
  $crest.className = 'mt-auto mb-auto me-3 image-big';
  $crest.src = club.crestUrl;
  $crest.alt = `${club.name} crest`;
  $crest.onerror = () => {
    showErrorImage($crest);
  };

  const $infoContainer = document.createElement('div');

  const $name = document.createElement('h1');
  $name.textContent = club.name;
  $name.className = 'text-light title fw-bold m-0 mt-2';

  const $country = document.createElement('p');
  $country.textContent = club.area;
  $country.className = 'text-light paragraph';

  $infoContainer.appendChild($name);
  $infoContainer.appendChild($country);

  $container.appendChild($crest);
  $container.appendChild($infoContainer);

  return $container;
};

export default createViewHeader;
