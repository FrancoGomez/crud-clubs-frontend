import { returnClub } from '../../api/api.js';
import getURLQuery from '../../helpers/helpers.js';
import mapClubData from '../../mappers/club.mappers.js';
import createViewHeader from '../components/view/view-header.components.js';
import createButtonsView from '../partials/view/buttons-view.partials.js';
import createClubInfoList from '../partials/view/club-info-list.partials.js';
import createModalsView from '../partials/view/modals-view.partials.js';

const showViewClubPage = async ($parent) => {
  const tla = getURLQuery('tla');
  const club = mapClubData(await returnClub(tla));

  $parent.appendChild(createModalsView(club));
  $parent.appendChild(createViewHeader(club));
  $parent.appendChild(createClubInfoList(club));
  $parent.appendChild(createButtonsView(club));
};

export default showViewClubPage;
