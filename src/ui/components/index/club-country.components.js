const createClubCountry = (club) => {
  const $container = document.createElement('div');

  const $country = document.createElement('p');
  $country.className = 'text-light paragraph text-center';
  $country.textContent = club.area;

  $container.appendChild($country);

  return $container;
};

export default createClubCountry;
