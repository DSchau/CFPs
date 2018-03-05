export function getColor(text, saturation = 75, lightness = 25) {
  const color =
    text.split('').reduce((count, char) => {
      return count + char.charCodeAt(0);
    }, 0) % 255;

  return `hsl(${color}, ${saturation}%, ${lightness}%)`;
}
