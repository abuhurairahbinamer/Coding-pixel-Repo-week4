import ErrorButton from './ErrorButton'


async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // P4 Task deeper

  return 'Dashboard Data Loaded'
}

export default async function DashboardPage() {
  const data = await getData()

  return (
    <div>
      <h1>{data}</h1>
      <ErrorButton />
    </div>
  )
}