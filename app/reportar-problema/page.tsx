import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reportar Problemas | MicroLoja',
  description: 'Report Page',
  robots: {
    index: false,
    follow: false,
  }
}

export default function ReportPage() {
  return (
    <div>
      <h1>Report Page</h1>
    </div>
  )
}