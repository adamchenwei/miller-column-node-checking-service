export default function converDictToArray(dict) {
  return Object.keys(dict)
    .filter(key => parseInt(dict[key], 10) === 1)
    .map(id => ({ key: id }));
}
