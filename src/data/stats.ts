import type { Stat } from '../types/stat'

export const stats: Stat[] = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$48,240',
    trend: '+12.4%',
    trendType: 'positive',
  },
  {
    id: 'orders',
    label: 'Total Orders',
    value: '1,284',
    trend: '+8.1%',
    trendType: 'positive',
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '3,892',
    trend: '+5.6%',
    trendType: 'positive',
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: '4.2%',
    trend: '-0.3%',
    trendType: 'negative',
  },
]