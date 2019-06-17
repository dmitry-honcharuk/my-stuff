const toNumber = (data, defaultValue) => {
  const asNumber = Number(data);

  if (!Number.isNaN(asNumber)) {
    return asNumber;
  }

  return defaultValue || asNumber;
};

export default toNumber;
