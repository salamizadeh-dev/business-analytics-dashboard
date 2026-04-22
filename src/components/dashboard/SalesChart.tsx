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
        <div className="dashboard-section__header">
          <h3>Revenue Overview</h3>
          <p>Weekly revenue performance</p>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
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