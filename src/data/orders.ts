import type { Order } from '../types/order'

export const recentOrders: Order[] = [
  {
    id: '#ORD-1024',
    customerName: 'Sophia Turner',
    date: '2026-04-18',
    total: '$240.00',
    status: 'Completed',
  },
  {
    id: '#ORD-1025',
    customerName: 'Daniel Carter',
    date: '2026-04-18',
    total: '$125.50',
    status: 'Pending',
  },
  {
    id: '#ORD-1026',
    customerName: 'Ava Mitchell',
    date: '2026-04-19',
    total: '$89.99',
    status: 'Completed',
  },
  {
    id: '#ORD-1027',
    customerName: 'Ethan Brooks',
    date: '2026-04-19',
    total: '$310.20',
    status: 'Cancelled',
  },
  {
    id: '#ORD-1028',
    customerName: 'Mia Foster',
    date: '2026-04-20',
    total: '$156.75',
    status: 'Pending',
  },
]