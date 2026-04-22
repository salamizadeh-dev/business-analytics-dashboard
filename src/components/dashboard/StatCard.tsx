import type { Stat } from '../../types/stat'
import { Card } from '../ui/Card'

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <Card>
      <div className="stat-card">
        <div>
          <p className="stat-card__label">{stat.label}</p>
          <h3 className="stat-card__value">{stat.value}</h3>
        </div>

        <span
          className={`stat-card__trend stat-card__trend--${stat.trendType}`}
        >
          {stat.trend}
        </span>
      </div>
    </Card>
  )
}