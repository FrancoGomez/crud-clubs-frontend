import { returnAllClubs } from '../../api/api.js';
import mapClubData from '../../mappers/club.mappers.js';
import createPageTitle from '../components/page-title.components.js';
import createButtonsMain from '../partials/index/buttons-main.partials.js';
import createClubsTable from '../partials/index/clubs-table.partials.js';
import createModalsMain from '../partials/index/modals-main.partials.js';

const showMainPage = async ($parent) => {
  const clubsData = await returnAllClubs();
  const mappedClubsData = clubsData.map((club) => mapClubData(club));

  $parent.appendChild(createModalsMain());
  $parent.appendChild(createPageTitle(`There are ${mappedClubsData.length} clubs`));
  $parent.appendChild(createButtonsMain());
  $parent.appendChild(createClubsTable(mappedClubsData));
};

export default showMainPage;
