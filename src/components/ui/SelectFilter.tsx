import type { ChangeEvent } from 'react'

interface SelectFilterOption {
  label: string
  value: string
}

interface SelectFilterProps {
  value: string
  options: SelectFilterOption[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SelectFilter({
  value,
  options,
  onChange,
}: SelectFilterProps) {
  return (
    <select
      className="select-filter"
      value={value}
      onChange={onChange}
      aria-label="Filter"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}