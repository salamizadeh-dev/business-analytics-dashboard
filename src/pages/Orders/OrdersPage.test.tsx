import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { OrdersPage } from './OrdersPage'

function renderOrdersPage() {
  return render(
    <MemoryRouter>
      <OrdersPage />
    </MemoryRouter>,
  )
}

test('filters orders by selected status', () => {
  renderOrdersPage()

  const select = screen.getByLabelText(/filter/i)

  fireEvent.change(select, { target: { value: 'Cancelled' } })

  expect(screen.getByText(/#ORD-1027/i)).toBeInTheDocument()
  expect(screen.getByText(/#ORD-1030/i)).toBeInTheDocument()
  expect(screen.queryByText(/#ORD-1024/i)).not.toBeInTheDocument()
})

test('shows all orders when All statuses is selected', () => {
  renderOrdersPage()

  const select = screen.getByLabelText(/filter/i)

  fireEvent.change(select, { target: { value: 'All' } })

  expect(screen.getByText(/#ORD-1024/i)).toBeInTheDocument()
  expect(screen.getByText(/#ORD-1029/i)).toBeInTheDocument()
})