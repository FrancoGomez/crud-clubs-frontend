import createFormFile from '../components/form-file.components.js';
import createFormSection from '../components/form-section.components.js';
import createFormSelection from '../components/form-selection.components.js';

const createForm = (options, club) => {
  const $form = document.createElement('form');
  $form.id = club ? 'update-form' : 'create-form';
  $form.method = club ? 'put' : 'post';
  $form.setAttribute('enctype', 'multipart/form-data');
  $form.noValidate = true;

  $form.appendChild(createFormSection('name', true, club ? club.name : ''));

  $form.appendChild(createFormSelection(options, 'area', true, club ? club.area : ''));

  $form.appendChild(createFormSection('short Name', true, club ? club.shortName : ''));

  $form.appendChild(createFormSection('TLA', true, club ? club.tla : ''));

  $form.appendChild(createFormSection('address', true, club ? club.address : ''));

  $form.appendChild(createFormSection('venue', false, club ? club.venue : ''));

  $form.appendChild(createFormSection('club Colors', true, club ? club.clubColors : ''));

  $form.appendChild(createFormSection('founded', true, club ? club.founded : ''));

  $form.appendChild(createFormSection('website', false, club ? club.website : ''));

  $form.appendChild(createFormSection('phone', false, club ? club.phone : ''));

  $form.appendChild(createFormSection('email', true, club ? club.email : ''));

  $form.appendChild(createFormFile('crest', false, club ? club.crestUrls : ''));

  return $form;
};

export default createForm;
