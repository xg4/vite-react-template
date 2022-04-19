export default function Home() {
  const keywords = [
    'react',
    'react-router v6',
    'react-query',
    'react-transition-group',
    'lodash',
    'dayjs',
    'axios',
    'tailwindcss',
    'typescript',
    'vite',
  ]
  return (
    <div className="text-center">
      <h1>React Starter Template</h1>
      <p className="text-sm">via Vite</p>
      <p className="text-xs">{keywords.join(', ')}</p>
    </div>
  )
}
