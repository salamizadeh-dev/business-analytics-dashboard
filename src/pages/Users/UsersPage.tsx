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

  const hasQuery = query.trim().length > 0

  return (
    <section className="page">
      <PageSectionHeader
        title="Users"
        description="Browse customer and team records, monitor account status, and quickly find people by name or email."
      />

      <div className="page-toolbar page-toolbar--between">
        <SearchInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search users by name or email"
        />

        {hasQuery ? (
          <button
            type="button"
            className="toolbar-clear-button"
            onClick={() => setQuery('')}
          >
            Clear search
          </button>
        ) : null}
      </div>

      {filteredUsers.length > 0 ? (
        <UsersTable users={filteredUsers} />
      ) : (
        <EmptyState
          title="No users match this search"
          description="Try a different name or email to find the record you need."
        />
      )}
    </section>
  )
}