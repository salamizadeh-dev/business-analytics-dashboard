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

      <section className="insight-banner">
        <div>
          <p className="insight-banner__eyebrow">Weekly insight</p>
          <h3 className="insight-banner__title">
            Revenue is up 12.4% compared to last week
          </h3>
        </div>

        <p className="insight-banner__text">
          Growth is being driven by stronger order volume and a steady conversion
          rate across the last 7 days.
        </p>
      </section>

      <SalesChart data={salesData} />

      <RecentOrdersTable orders={recentOrders} />
    </section>
  )
}