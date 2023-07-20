// It's made to realize an action
const createButton = (
  action,
  subject,
  isSuggested = false,
  callbackFunction = () => {},
  params = '',
) => {
  const $button = document.createElement('button');
  $button.id = `${action}-${subject}-main-button`;
  $button.type = 'button';
  $button.className = 'btn fw-bolder text-light text-capitalize border-3 paragraph main-button';
  $button.classList.add(isSuggested ? 'suggested-button' : 'unsuggested-button');
  $button.textContent = `${action} ${subject}`;
  $button.onclick = () => { callbackFunction(params); };

  return $button;
};

export default createButton;
