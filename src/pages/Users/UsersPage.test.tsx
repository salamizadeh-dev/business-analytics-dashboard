import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { UsersPage } from './UsersPage'

function renderUsersPage() {
  return render(
    <MemoryRouter>
      <UsersPage />
    </MemoryRouter>,
  )
}

test('filters users by name', () => {
  renderUsersPage()

  const input = screen.getByPlaceholderText(/search users by name or email/i)

  fireEvent.change(input, { target: { value: 'Sophia' } })

  expect(screen.getByText(/Sophia Turner/i)).toBeInTheDocument()
  expect(screen.queryByText(/Daniel Carter/i)).not.toBeInTheDocument()
})

test('shows empty state when no users match search', () => {
  renderUsersPage()

  const input = screen.getByPlaceholderText(/search users by name or email/i)

  fireEvent.change(input, { target: { value: 'zzzz-not-found' } })

  expect(screen.getByText(/no users found/i)).toBeInTheDocument()
})