const getURLQuery = (queryName) => {
  const params = (new URL(document.location)).searchParams;
  const queryResult = params.get(queryName);

  return queryResult;
};

export default getURLQuery;
