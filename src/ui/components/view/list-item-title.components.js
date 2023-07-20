const createListItemTitle = (title) => {
  const $title = document.createElement('h2');
  $title.className = 'sub-subtitle';
  $title.textContent = title;

  return $title;
};

export default createListItemTitle;
