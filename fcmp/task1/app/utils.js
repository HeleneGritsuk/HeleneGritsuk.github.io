const formatDate = (date) => {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',

  };

  return new Date(date).toLocaleString('en', dateOptions);
};
export default formatDate;
