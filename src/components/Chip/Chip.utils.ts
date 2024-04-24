export const formatChipName = (name: string) =>
  name
    .trim()
    .split(' ')
    .reduce((acc, item, index, arr) => {
      if (index > 1 || !item) {
        return acc;
      }

      if (arr.length === 1) {
        return (acc += `${item[0]}${item[1] || ''}`);
      }

      return (acc += item[0]);
    }, '');

const getHashOfString = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  return Math.abs(hash);
};

const normalizeHash = (hash: number, min: number, max: number) =>
  Math.floor((hash % (max - min)) + min);

export const generateHSLColor = (name: string) => {
  const hash = getHashOfString(name);

  const h = normalizeHash(hash, 0, 360);
  const s = normalizeHash(hash, 50, 75);
  const l = normalizeHash(hash, 25, 60);

  return `hsl(${h}, ${s}%, ${l}%)`;
};
