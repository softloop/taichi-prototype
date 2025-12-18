interface ProblemSolutionCardProps {
  problem: string
  solution: string
}

export default function ProblemSolutionCard({ problem, solution }: ProblemSolutionCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-3">
        <p className="text-sm font-semibold text-dark/60">Problem:</p>
        <p className="font-semibold text-dark">{problem}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-primary">Lösung:</p>
        <p className="text-dark/80">{solution}</p>
      </div>
    </div>
  )
}

