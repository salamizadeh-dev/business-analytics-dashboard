import { Card } from '../../components/ui/Card'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function DashboardPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Overview"
        description="Monitor business performance and recent activity."
      />

      <Card>
        <p>This is the dashboard overview page.</p>
      </Card>
    </section>
  )
}