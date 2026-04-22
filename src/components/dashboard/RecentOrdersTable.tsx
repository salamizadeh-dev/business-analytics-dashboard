import type { Order } from '../../types/order'
import { Card } from '../ui/Card'

interface RecentOrdersTableProps {
  orders: Order[]
}

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <Card>
      <div className="dashboard-section">
        <div className="dashboard-section__header">
          <h3>Recent Orders</h3>
          <p>Latest transaction activity</p>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span
                      className={`status-badge status-badge--${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}