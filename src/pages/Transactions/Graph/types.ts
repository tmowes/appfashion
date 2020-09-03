export interface GraphProps {
  data: SpendData[]
}

export interface SpendData {
  id: number
  date: number
  value: number
  color: string
}
