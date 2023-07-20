import { returnClub } from '../../api/api.js';
import countries from '../../data/countries.data.js';
import getURLQuery from '../../helpers/helpers.js';
import mapClubData from '../../mappers/club.mappers.js';
import createFormContainer from '../partials/form-container.partials.js';
import createButtonsUpdate from '../partials/update/buttons-update.partials.js';
import createModalsUpdate from '../partials/update/modals-update.partials.js';

const showUpdateClubPage = async ($parent) => {
  const tla = getURLQuery('tla');
  const club = mapClubData(await returnClub(tla));

  $parent.appendChild(createModalsUpdate(club));
  $parent.appendChild(createFormContainer(countries, club));
  $parent.appendChild(createButtonsUpdate());
};

export default showUpdateClubPage;
