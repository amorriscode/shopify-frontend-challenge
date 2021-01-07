export default function Container({ children }) {
  return (
    <div className="rounded bg-white p-8" style={{ height: 'min-content' }}>
      {children}
    </div>
  )
}
