import type { User } from '../../types/user'
import { Card } from '../ui/Card'

interface UsersTableProps {
  users: User[]
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <Card>
      <div className="dashboard-section">
        <div className="dashboard-section__header dashboard-section__header--split">
          <div>
            <h3>User Directory</h3>
            <p>Monitor account roles, activity status, and onboarding timeline</p>
          </div>

          <span className="dashboard-section__meta">
            {users.length} {users.length === 1 ? 'record' : 'records'}
          </span>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="table-primary-cell">
                      <span className="table-primary-cell__title">{user.name}</span>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="role-badge">{user.role}</span>
                  </td>

                  <td>
                    <span
                      className={`status-badge status-badge--${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>{user.joinedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}