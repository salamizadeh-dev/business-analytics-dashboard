import type { ChangeEvent } from 'react'

interface SearchInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchInputProps) {
  return (
    <input
      className="search-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Search"
    />
  )
}