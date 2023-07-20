// It's made to realize an action
const createModalMainButton = (
  action,
  subject,
  isSuggested = false,
  modalId = '',
  isNotification = false,
) => {
  const $modalMainButton = document.createElement('button');
  $modalMainButton.id = `${action}-${subject}-main-button-modal`;
  $modalMainButton.type = 'button';
  $modalMainButton.className = `btn fw-bolder text-light text-capitalize ${isSuggested ? 'suggested-button' : 'unsuggested-button'} border-3 paragraph main-button`;
  $modalMainButton.setAttribute('data-bs-dismiss', 'modal');

  if (!isNotification) {
    $modalMainButton.setAttribute('data-bs-target', `#${modalId}`);
    $modalMainButton.setAttribute('data-bs-toggle', 'modal');
  }

  if (isNotification) {
    $modalMainButton.textContent = 'Ok';
  } else {
    $modalMainButton.textContent = action;
  }

  return $modalMainButton;
};

export default createModalMainButton;
