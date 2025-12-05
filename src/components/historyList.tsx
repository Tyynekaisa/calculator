type HistoryListProps = {
  history: string[]
}

export default function HistoryList({ history }: HistoryListProps) {
  return (
    <ul id='history'>
      {history.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
