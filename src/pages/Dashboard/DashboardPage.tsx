import { RecentOrdersTable } from '../../components/dashboard/RecentOrdersTable'
import { SalesChart } from '../../components/dashboard/SalesChart'
import { StatCard } from '../../components/dashboard/StatCard'
import { recentOrders } from '../../data/orders'
import { salesData } from '../../data/sales'
import { stats } from '../../data/stats'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function DashboardPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Overview"
        description="Monitor business performance and recent activity."
      />

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <SalesChart data={salesData} />

      <RecentOrdersTable orders={recentOrders} />
    </section>
  )
}