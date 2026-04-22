export interface Stat {
  id: string
  label: string
  value: string
  trend: string
  trendType: 'positive' | 'negative' | 'neutral'
}