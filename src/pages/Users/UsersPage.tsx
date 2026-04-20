import { Card } from '../../components/ui/Card'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function UsersPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Users"
        description="Browse and monitor user records."
      />

      <Card>
        <p>This is the users page.</p>
      </Card>
    </section>
  )
}