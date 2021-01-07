export default function EmptySearch({ light }) {
  const colorCSS = light ? 'text-white' : 'text-gray-800'

  return (
    <>
      <div className="text-6xl mt-12 mb-4 animate-bounce">☝️</div>

      <h2 className={`text-xl font-bold ${colorCSS}`}>
        Search for your favourite movies!
      </h2>
    </>
  )
}
