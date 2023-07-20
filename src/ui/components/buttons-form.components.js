import { isFormValid } from '../../handlers/handlers.js';
import createButton from './button.components.js';

const createButtonForm = (
  action,
  subject,
  isSuggested = false,
  callbackFunction = () => {},
  params = '',
) => {
  const $button = createButton(action, subject, isSuggested);

  $button.onclick = () => {
    if (isFormValid()) callbackFunction(params);
  };

  return $button;
};
export default createButtonForm;
