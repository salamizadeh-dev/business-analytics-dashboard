export type UserStatus = 'Active' | 'Inactive' | 'Pending'
export type UserRole = 'Admin' | 'Manager' | 'Customer'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinedAt: string
}