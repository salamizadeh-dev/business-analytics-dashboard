import type { Order } from '../../types/order'
import { Card } from '../ui/Card'

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <Card>
      <div className="dashboard-section">
        <div className="dashboard-section__header dashboard-section__header--split">
          <div>
            <h3>Order Activity</h3>
            <p>Review status, customer activity, and transaction value</p>
          </div>

          <span className="dashboard-section__meta">
            {orders.length} {orders.length === 1 ? 'record' : 'records'}
          </span>
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
                  <td>
                    <div className="table-primary-cell">
                      <span className="table-primary-cell__title">{order.id}</span>
                    </div>
                  </td>

                  <td>{order.customerName}</td>

                  <td>{order.date}</td>

                  <td className="table-value-cell">{order.total}</td>

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