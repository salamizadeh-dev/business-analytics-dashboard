import type { Order } from '../types/order'

export const orders: Order[] = [
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
  {
    id: '#ORD-1029',
    customerName: 'Noah Bennett',
    date: '2026-04-20',
    total: '$420.10',
    status: 'Completed',
  },
  {
    id: '#ORD-1030',
    customerName: 'Olivia Reed',
    date: '2026-04-21',
    total: '$78.40',
    status: 'Cancelled',
  },
]

export const recentOrders = orders.slice(0, 5)