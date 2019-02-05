export const addPin = (x, y) => {
  return $.ajax({
    url: `/api/users/pin`,
    method: 'POST',
    data: [x, y]
  })
};

