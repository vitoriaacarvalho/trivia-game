export function Input({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 my-3 rounded-lg bg-input-bg text-text border
        border-purple-900 transition-all duration-200 
        placeholder:text-placeholder focus:border-purple-500 focus:shadow-[0_0_0_2px_theme(colors.accent)] focus:outline-none"
    />
  );
}
