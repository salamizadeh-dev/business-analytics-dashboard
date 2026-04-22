interface PageSectionHeaderProps {
  title: string
  description?: string
}

export function PageSectionHeader({
  title,
  description,
}: PageSectionHeaderProps) {
  return (
    <div className="page-section-header">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}