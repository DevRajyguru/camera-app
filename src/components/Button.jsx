const Button = ({ className = '', children, ...props }) => (
  <button
    className={`inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
