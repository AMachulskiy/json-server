module.exports = () => {
  const data = {
    workers: [],
  };
  for (let i = 1; i <= 80; i++) {
    data.workers.push({
      id: i,
      npp: `№ ${i}`,
    });
  }
  return data;
};
