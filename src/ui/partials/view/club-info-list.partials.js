import createListItemTitle from '../../components/view/list-item-title.components.js';
import createListItemData from '../../components/view/list-item-data.components.js';
import createGoogleMaps from '../../components/view/google-maps.components.js';

const createClubInfoList = (club) => {
  const $list = document.createElement('ul');
  $list.className = 'p-0';

  const $listItemMap = document.createElement('li');
  $listItemMap.className = 'list-group-item border-0 padding-2 dark-blue-bg text-white';
  $listItemMap.appendChild(createGoogleMaps(club));
  $list.appendChild($listItemMap);

  const $listItemAKA = document.createElement('li');
  $listItemAKA.className = 'list-group-item border-0 padding-2 blue-bg text-white';
  $listItemAKA.appendChild(createListItemTitle('Also known as'));
  $listItemAKA.appendChild(createListItemData(`${club.shortName} (${club.tla})`));
  $list.appendChild($listItemAKA);

  const $listItemLocation = document.createElement('li');
  $listItemLocation.className = 'list-group-item border-0 padding-2 dark-blue-bg text-white';
  $listItemLocation.appendChild(createListItemTitle('Location'));
  $listItemLocation.appendChild(createListItemData(`${club.address}, ${club.area}`));
  $list.appendChild($listItemLocation);

  const $listItemVenue = document.createElement('li');
  $listItemVenue.className = 'list-group-item border-0 padding-2 blue-bg text-white';
  $listItemVenue.appendChild(createListItemTitle('Venue'));
  $listItemVenue.appendChild(createListItemData(club.venue || 'Not available'));
  $list.appendChild($listItemVenue);

  const $listItemFoundation = document.createElement('li');
  $listItemFoundation.className = 'list-group-item border-0 padding-2 dark-blue-bg text-white';
  $listItemFoundation.appendChild(createListItemTitle('Fundation'));
  $listItemFoundation.appendChild(createListItemData(club.founded));
  $list.appendChild($listItemFoundation);

  const $listItemClubColors = document.createElement('li');
  $listItemClubColors.className = 'list-group-item border-0 padding-2 blue-bg text-white';
  $listItemClubColors.appendChild(createListItemTitle('Club colors'));
  $listItemClubColors.appendChild(createListItemData(club.clubColors));
  $list.appendChild($listItemClubColors);

  const $listItemContactInfo = document.createElement('li');
  $listItemContactInfo.className = 'list-group-item border-0 padding-2 dark-blue-bg text-white';
  $listItemContactInfo.appendChild(createListItemTitle('Contact info'));
  if (club.website) $listItemContactInfo.appendChild(createListItemData(club.website, 'bi bi-globe2'));
  if (club.phone) $listItemContactInfo.appendChild(createListItemData(club.phone, 'bi bi-telephone'));
  $listItemContactInfo.appendChild(createListItemData(club.email, 'bi bi-envelope'));
  $list.appendChild($listItemContactInfo);

  return $list;
};

export default createClubInfoList;
