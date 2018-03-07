export function getColor(text, saturation = 60, lightness = 35) {
  const color =
    text.split('').reduce((count, char) => {
      return count + char.charCodeAt(0);
    }, 0) % 360;

  return `hsl(${color}, ${saturation}%, ${lightness}%)`;
}
