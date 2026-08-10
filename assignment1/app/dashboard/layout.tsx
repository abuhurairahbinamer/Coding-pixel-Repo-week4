export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-4 m-4 border border-gray-200 rounded-md bg-gray-50">
      <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
        Dashboard Layout (Nested Chrome)
      </div>
      {children}
    </div>
  )
}
