import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Login"
        desc="Melde dich an, um auf deine Kurse und Inhalte zuzugreifen."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-md">
            <Card>
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Anmelden
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-dark">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-border px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-semibold text-dark">
                    Passwort
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-lg border border-border px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="••••••••"
                  />
                </div>
                <div className="pt-4">
                  <Button variant="full" type="submit">
                    Anmelden
                  </Button>
                </div>
              </form>
              <p className="mt-6 text-center text-sm text-dark/70">
                Noch kein Konto?{' '}
                <a href="/register" className="text-primary hover:underline">
                  Jetzt registrieren
                </a>
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}

