import { GOOGLE_KEY } from '../../../../env.js';

const createGoogleMaps = (club) => {
  const $map = document.createElement('iframe');
  $map.className = 'rounded w-100';
  $map.src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}
  &q=${club.venue || club.address},+${club.area}`;
  $map.setAttribute('loading', 'lazy');
  $map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  $map.style.height = '300px';

  return $map;
};

export default createGoogleMaps;
