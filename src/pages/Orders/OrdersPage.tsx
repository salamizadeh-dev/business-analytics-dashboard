import { Card } from '../../components/ui/Card'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function OrdersPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Orders"
        description="Review and track recent order activity."
      />

      <Card>
        <p>This is the orders page.</p>
      </Card>
    </section>
  )
}