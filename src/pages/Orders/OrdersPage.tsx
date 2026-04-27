import { useMemo, useState } from 'react'
import { OrdersTable } from '../../components/dashboard/OrdersTable'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { SelectFilter } from '../../components/ui/SelectFilter'
import { orders } from '../../data/orders'
import type { OrderStatus } from '../../types/order'

type OrderFilterValue = 'All' | OrderStatus

const filterOptions = [
  { label: 'All', value: 'All' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Cancelled', value: 'Cancelled' },
]

export function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState<OrderFilterValue>('All')

  const filteredOrders = useMemo(() => {
    if (selectedStatus === 'All') return orders

    return orders.filter((order) => order.status === selectedStatus)
  }, [selectedStatus])

  return (
    <section className="page">
      <PageSectionHeader
        title="Orders"
        description="Review and track recent order activity."
      />

      <div className="page-toolbar">
        <SelectFilter
          value={selectedStatus}
          options={filterOptions}
          onChange={(event) =>
            setSelectedStatus(event.target.value as OrderFilterValue)
          }
        />
      </div>

      {filteredOrders.length > 0 ? (
        <OrdersTable orders={filteredOrders} />
      ) : (
        <EmptyState
          title="No orders found"
          description="Try selecting a different order status."
        />
      )}
    </section>
  )
}