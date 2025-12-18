import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        desc="Artikel rund um Tai Chi, innere Kraft und Atemtyp"
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={2} gap="lg">
            {blogPosts.map((post, idx) => (
              <Card key={idx} variant="hover" href={`/wissen/blog/${post.slug}`}>
                <div className="mb-2 text-sm text-dark/60">{post.date}</div>
                <h3 className="font-display text-xl font-normal text-dark">
                  {post.title}
                </h3>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

