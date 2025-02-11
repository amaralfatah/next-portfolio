interface SectionHeaderProps {
  title: string
  description: string
}

export default function SectionHeader({title, description}: SectionHeaderProps) {
  return (
    <div className="pb-1">
      <h2 className="font-medium">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
