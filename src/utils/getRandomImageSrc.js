const getRandomImageSrc = () => {
  return `https://source.unsplash.com/collection/10636799/480x480/?sig=${parseInt(
    Math.random() * 1000
  )}`;
};

export default getRandomImageSrc;
