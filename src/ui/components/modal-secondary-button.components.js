// It's made to cancel an action from a modal
const createSecondaryButton = (action, subject) => {
  const $modalSecondaryButton = document.createElement('button');
  $modalSecondaryButton.id = `${action}-${subject}-secondary-button-modal`;
  $modalSecondaryButton.type = 'button';
  $modalSecondaryButton.className = 'btn fw-bolder text-light secondary-button border-3 paragraph';
  $modalSecondaryButton.setAttribute('data-bs-dismiss', 'modal');
  $modalSecondaryButton.textContent = 'Cancel';

  return $modalSecondaryButton;
};

export default createSecondaryButton;
