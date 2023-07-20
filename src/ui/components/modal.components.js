const createModal = (
  action,
  subject,
  isNotification = false,
  callbackFunction = () => {},
  param = '',
) => {
  const $modal = document.createElement('div');
  $modal.className = 'modal fade';
  $modal.id = `${action}-${subject}-${isNotification ? 'notification' : 'confirmation'}-modal`;
  $modal.tabIndex = '-1';

  const $modalDialog = document.createElement('div');
  $modalDialog.className = 'modal-dialog';

  const $modalContent = document.createElement('div');
  $modalContent.className = 'modal-content border-light';

  const $modalHeader = document.createElement('div');
  $modalHeader.className = 'modal-header darker-blue-bg text-light border-0';

  const $modalTitle = document.createElement('h5');
  $modalTitle.className = 'modal-title fw-bolder boder-0 text-capitalize';

  if (isNotification) {
    const actionLastLetter = action.charAt(action.length - 1);
    $modalTitle.textContent = `${subject} ${action}${actionLastLetter === 'e' ? 'd' : 'ed'}`;
  } else {
    $modalTitle.textContent = `${action} ${subject}`;
  }

  $modalHeader.appendChild($modalTitle);

  const $modalBody = document.createElement('div');
  $modalBody.className = 'modal-body dark-blue-bg text-light';

  const $modalParagraph = document.createElement('p');

  if (isNotification) {
    const subjectLastLetter = subject.charAt(subject.length - 1);
    const actionLastLetter = action.charAt(action.length - 1);
    $modalParagraph.textContent = `The ${subject} ${subjectLastLetter === 's' ? 'have' : 'has'} been successfully ${action}${actionLastLetter === 'e' ? 'd' : 'ed'}`;
  } else {
    $modalParagraph.textContent = `Are you sure you want to ${action} this ${subject}?`;
  }

  $modalBody.appendChild($modalParagraph);

  const $modalFooter = document.createElement('div');
  $modalFooter.className = 'modal-footer darker-blue-bg text-light border-0';

  if (!isNotification) {
    const $modalSecondaryButton = document.createElement('button');
    $modalSecondaryButton.id = `${action}-${subject}-${isNotification ? 'notification' : 'confirmation'}-secondary-button-modal`;
    $modalSecondaryButton.type = 'button';
    $modalSecondaryButton.className = 'btn fw-bolder text-light secondary-button border-3 paragraph';
    $modalSecondaryButton.setAttribute('data-bs-dismiss', 'modal');
    $modalSecondaryButton.textContent = 'Cancel';

    $modalFooter.appendChild($modalSecondaryButton);
  }

  const $modalMainButton = document.createElement('button');
  $modalMainButton.id = `${action}-${subject}-${isNotification ? 'notification' : 'confirmation'}-main-button-modal`;
  $modalMainButton.type = 'button';
  $modalMainButton.className = 'btn fw-bolder text-light main-button border-3 paragraph text-capitalize';
  $modalMainButton.setAttribute('data-bs-dismiss', 'modal');

  if (isNotification) {
    $modalMainButton.textContent = 'Ok';
  } else {
    $modalMainButton.setAttribute('data-bs-target', `#${action}-${subject}-notification-modal`);
    $modalMainButton.setAttribute('data-bs-toggle', 'modal');
    $modalMainButton.textContent = action;
  }

  $modalMainButton.addEventListener('click', () => { callbackFunction(param); });

  $modalFooter.appendChild($modalMainButton);

  $modalContent.appendChild($modalHeader);
  $modalContent.appendChild($modalBody);
  $modalContent.appendChild($modalFooter);

  $modalDialog.appendChild($modalContent);

  $modal.appendChild($modalDialog);

  return $modal;
};

export default createModal;
