const trimDescription = (description) => {
  if (description) {
    let newDescription = description.slice(0, 2000);
    return `${newDescription}(...)`;
  }
};

module.exports = { trimDescription };
