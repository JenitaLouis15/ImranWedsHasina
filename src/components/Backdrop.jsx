    export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10"
      style={{
        background:
          'radial-gradient(circle at 20% 10%, #fff8e8 0%, transparent 50%), radial-gradient(circle at 80% 90%, #f5eddd 0%, transparent 50%), #fbf8f2',
      }}
    />
  )
}