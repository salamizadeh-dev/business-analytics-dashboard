export type OrderStatus = 'Completed' | 'Pending' | 'Cancelled'

export interface Order {
  id: string
  customerName: string
  date: string
  total: string
  status: OrderStatus
}