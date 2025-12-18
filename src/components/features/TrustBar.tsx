import Container from '@/components/layout/Container'

interface TrustBarProps {
  items: Array<{ icon: string; text: string }>
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="bg-background-alt py-8">
      <Container>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-semibold text-dark">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

