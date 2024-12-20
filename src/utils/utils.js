export function classNames(...classes) {
  return classes.filter((c) => typeof c === "string").join(" ");
}

// Function to convert milliseconds to a human-readable duration format
export const formatDuration = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
