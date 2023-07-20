import createPageTitle from '../components/page-title.components.js';
import createForm from './form.partials.js';

const createFormContainer = (options, club) => {
  const $formContainer = document.createElement('div');
  $formContainer.className = 'card dark-blue-bg padding-3';

  const pageTitle = club ? `Update ${club.shortName}` : 'Create club';

  $formContainer.appendChild(createPageTitle(pageTitle));
  $formContainer.appendChild(createForm(options, club || ''));

  return $formContainer;
};

export default createFormContainer;
