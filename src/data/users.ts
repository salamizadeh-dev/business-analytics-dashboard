import type { User } from '../types/user'

export const users: User[] = [
  {
    id: 'USR-1001',
    name: 'Sophia Turner',
    email: 'sophia.turner@example.com',
    role: 'Admin',
    status: 'Active',
    joinedAt: '2026-01-14',
  },
  {
    id: 'USR-1002',
    name: 'Daniel Carter',
    email: 'daniel.carter@example.com',
    role: 'Manager',
    status: 'Active',
    joinedAt: '2026-02-03',
  },
  {
    id: 'USR-1003',
    name: 'Ava Mitchell',
    email: 'ava.mitchell@example.com',
    role: 'Customer',
    status: 'Pending',
    joinedAt: '2026-02-18',
  },
  {
    id: 'USR-1004',
    name: 'Ethan Brooks',
    email: 'ethan.brooks@example.com',
    role: 'Customer',
    status: 'Inactive',
    joinedAt: '2026-03-05',
  },
  {
    id: 'USR-1005',
    name: 'Mia Foster',
    email: 'mia.foster@example.com',
    role: 'Manager',
    status: 'Active',
    joinedAt: '2026-03-12',
  },
  {
    id: 'USR-1006',
    name: 'Noah Bennett',
    email: 'noah.bennett@example.com',
    role: 'Customer',
    status: 'Active',
    joinedAt: '2026-04-02',
  },
]