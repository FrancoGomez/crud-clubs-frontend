import createClubActions from '../../components/index/club-actions.components.js';
import createClubCountry from '../../components/index/club-country.components.js';
import createClubLogo from '../../components/index/club-logo.components.js';

const createClubsTable = (clubData) => {
  const columns = ['Club', 'Country', 'Actions'];

  const $table = document.createElement('table');
  $table.className = 'w-100 rounded';
  $table.style.overflow = 'hidden';

  const $headRow = document.createElement('tr');
  $headRow.className = 'dark-blue-bg';

  columns.forEach((column) => {
    const $headData = document.createElement('th');
    $headData.className = 'text-light padding-2 paragraph text-center';
    $headData.textContent = column;

    $headRow.appendChild($headData);

    $table.appendChild($headRow);
  });

  clubData.forEach((club, index) => {
    const $row = document.createElement('tr');
    const isEven = index % 2;
    $row.className = `${isEven ? 'dark-blue-bg' : 'blue-bg'} w-100`;

    const $dataClubLogo = document.createElement('td');
    $dataClubLogo.className = 'padding-2';
    $dataClubLogo.style.maxWidth = '200px';
    $dataClubLogo.appendChild(createClubLogo(club));

    const $dataClubCountry = document.createElement('td');
    $dataClubCountry.className = 'padding-2 w-100';
    $dataClubCountry.style.maxWidth = '33%';
    $dataClubCountry.appendChild(createClubCountry(club));

    const $dataClubActions = document.createElement('td');
    $dataClubActions.className = 'padding-2 w-100';
    $dataClubActions.style.maxWidth = '33%';
    $dataClubActions.appendChild(createClubActions(club));

    $row.appendChild($dataClubLogo);
    $row.appendChild($dataClubCountry);
    $row.appendChild($dataClubActions);

    $table.appendChild($row);
  });

  return $table;
};

export default createClubsTable;
