'use client'

interface VideoFilterProps {
  kategorien: string[]
  themen: string[]
  atemtypen: string[]
  selectedKategorie: string
  selectedThema: string
  selectedAtemtyp: string
  onKategorieChange: (kategorie: string) => void
  onThemaChange: (thema: string) => void
  onAtemtypChange: (atemtyp: string) => void
}

export default function VideoFilter({
  kategorien,
  themen,
  atemtypen,
  selectedKategorie,
  selectedThema,
  selectedAtemtyp,
  onKategorieChange,
  onThemaChange,
  onAtemtypChange,
}: VideoFilterProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Kategorie */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">Kategorie</label>
          <select
            value={selectedKategorie}
            onChange={(e) => onKategorieChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-background-alt px-4 py-2 text-sm text-dark focus:border-primary focus:outline-none"
          >
            {kategorien.map((kat) => (
              <option key={kat} value={kat}>
                {kat}
              </option>
            ))}
          </select>
        </div>

        {/* Thema */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">Thema</label>
          <select
            value={selectedThema}
            onChange={(e) => onThemaChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-background-alt px-4 py-2 text-sm text-dark focus:border-primary focus:outline-none"
          >
            {themen.map((thema) => (
              <option key={thema} value={thema}>
                {thema}
              </option>
            ))}
          </select>
        </div>

        {/* Atemtyp */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">Atemtyp</label>
          <select
            value={selectedAtemtyp}
            onChange={(e) => onAtemtypChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-background-alt px-4 py-2 text-sm text-dark focus:border-primary focus:outline-none"
          >
            {atemtypen.map((typ) => (
              <option key={typ} value={typ}>
                {typ}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}


