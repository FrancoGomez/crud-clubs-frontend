import countries from '../../data/countries.data.js';
import createFormContainer from '../partials/form-container.partials.js';
import createModalsCreate from '../partials/create/modals-create.partials.js';
import createButtonsCreate from '../partials/create/buttons-create.partials.js';

const showCreateClubPage = async ($parent) => {
  $parent.appendChild(createModalsCreate());
  $parent.appendChild(createFormContainer(countries));
  $parent.appendChild(createButtonsCreate());
};

export default showCreateClubPage;
