const VARIANTS = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-200/60 hover:shadow-indigo-300/70',
  ghost: 'bg-white/90 text-indigo-600 border border-indigo-100 shadow-sm shadow-slate-200 hover:shadow-lg',
}

const Button = ({ className = '', children, variant = 'primary', ...props }) => (
  <button
    className={`inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
