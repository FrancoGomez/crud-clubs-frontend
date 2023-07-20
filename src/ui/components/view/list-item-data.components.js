const createListItemData = (data, bootstrapIconClass) => {
  const $container = document.createElement('div');
  $container.className = 'mt-1';

  if (bootstrapIconClass) {
    const $icon = document.createElement('i');
    $icon.className = `${bootstrapIconClass} me-1`;

    $container.appendChild($icon);
  }

  const $data = document.createElement(bootstrapIconClass ? 'a' : 'p');
  $data.className = 'paragraph';
  $data.textContent = data || 'Not available';

  if (bootstrapIconClass) {
    $data.href = data;
    $data.classList.add('link-light');
    $data.classList.add('text-decoration-none');
  }

  $container.appendChild($data);

  return $container;
};

export default createListItemData;
