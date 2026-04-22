import { useMemo, useState } from 'react'
import { UsersTable } from '../../components/dashboard/UsersTable'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { SearchInput } from '../../components/ui/SearchInput'
import { users } from '../../data/users'

export function UsersPage() {
  const [query, setQuery] = useState('')

  const filteredUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) return users

    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [query])

  return (
    <section className="page">
      <PageSectionHeader
        title="Users"
        description="Browse and monitor user records."
      />

      <div className="page-toolbar">
        <SearchInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search users by name or email"
        />
      </div>

      {filteredUsers.length > 0 ? (
        <UsersTable users={filteredUsers} />
      ) : (
        <EmptyState
          title="No users found"
          description="Try a different name or email search."
        />
      )}
    </section>
  )
}