import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import VideoCard from '@/components/features/VideoCard'
import { videos } from '@/data/videos'

export default function FilmarchivPage() {
  return (
    <>
      <PageHero
        title="Filmarchiv"
        desc="Videos, Demonstrationen und Interviews rund um Tai Chi"
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            {videos.map((video, idx) => (
              <VideoCard key={idx} {...video} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}






