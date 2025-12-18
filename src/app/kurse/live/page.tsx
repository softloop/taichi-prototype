'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import CourseCard from '@/components/features/CourseCard'
import FilterTabs from '@/components/ui/FilterTabs'
import { liveCourses } from '@/data/courses'
import { useState } from 'react'

export default function LiveKursePage() {
  const [filter, setFilter] = useState<string>('all')

  const tabs = [
    { id: 'all', label: 'Alle' },
    { id: 'unterricht', label: 'Unterricht' },
    { id: 'meetings', label: 'Meetings' },
    { id: 'webinare', label: 'Webinare' },
  ]

  const filteredCourses =
    filter === 'all'
      ? liveCourses
      : liveCourses.filter((course) => course.type === filter)

  return (
    <>
      <PageHero
        title="Live & Zoom Kurse"
        desc="Lerne direkt mit dem Meister und anderen Schülern – in Gruppen, Einzelstunden oder Webinaren."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mb-12">
            <FilterTabs tabs={tabs} onChange={setFilter} />
          </div>
          <Grid cols={3} gap="lg">
            {filteredCourses.map((course, idx) => (
              <CourseCard
                key={idx}
                title={course.title}
                price={course.price}
                desc={course.desc}
                tag={course.tag}
                day={course.day}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}
