import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { SalesPoint } from '../../types/sales'
import { Card } from '../ui/Card'

interface SalesChartProps {
  data: SalesPoint[]
}

export function SalesChart({ data }: SalesChartProps) {
  return (
    <Card>
      <div className="dashboard-section">
        <div className="dashboard-section__header dashboard-section__header--split">
          <div>
            <h3>Revenue This Week</h3>
            <p>Daily revenue trend over the last 7 days</p>
          </div>

          <span className="dashboard-section__meta">Updated today</span>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}