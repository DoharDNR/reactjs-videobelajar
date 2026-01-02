export default function SlideButton({ label }) {
  return (
    <button
      className="
        relative w-full overflow-hidden rounded-lg border
        border-gray-300 dark:border-gray-700
        px-4 py-3 text-left
        text-gray-800 dark:text-gray-200
        transition-colors
        before:absolute before:inset-0
        before:-translate-x-full before:bg-gray-900 dark:before:bg-white
        before:transition-transform before:duration-300
        hover:before:translate-x-0
        hover:text-white dark:hover:text-gray-900
      "
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
}
