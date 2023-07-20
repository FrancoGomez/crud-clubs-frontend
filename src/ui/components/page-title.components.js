const createPageTitle = (title) => {
  const $title = document.createElement('h1');
  $title.className = 'text-white fw-bold text-center title padding-4 m-0';
  $title.textContent = title;

  return $title;
};

export default createPageTitle;
