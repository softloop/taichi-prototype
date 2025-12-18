import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import CourseCard from '@/components/features/CourseCard'
import { praesenzCourses } from '@/data/courses'

export default function PraesenzKursePage() {
  return (
    <>
      <PageHero
        title="Präsenz Kurse"
        desc="Intensive Seminare, Retreats und Ausbildungen in besonderer Atmosphäre."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            {praesenzCourses.map((course, idx) => (
              <CourseCard
                key={idx}
                title={course.title}
                price={course.price}
                desc={course.desc}
                date={course.date}
                duration={course.duration}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}






