export default function Button({
  onClick,
  children,
  primary,
  disabled = false,
}) {
  const primaryCSS = primary
    ? 'bg-brand-red hover:bg-brand-red-dark text-white'
    : 'text-brand-red hover:text-brand-red-dark'

  const disabledCSS = disabled
    ? 'hover:cursor-not-allowed opacity-50 bg-brand-red-dark border-brand-red-dark'
    : ''

  return (
    <button
      className={`border-2 border-brand-red hover:border-brand-red-dark py-1 px-2 rounded ${primaryCSS} ${disabledCSS}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
