
const getData = () => {
  const data = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      first_name: `Jhon${i}`,
      last_name: 'Doe',
      email: `random${i}@email.com`
    });
  }

  return data;
}

export const getDataApi = (from, perPage, response) => {
  setTimeout(() => {
    const data = getData();
    response({
      data: data.splice(from, perPage),
      totalRow: data.length
    });
  }, 1000);
}
