export default function shuffle(arr) {
  const array = [...arr]; // copy (optional if you don't want mutation)

  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // swap
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
