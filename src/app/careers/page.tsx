import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote',
    department: 'Engineering',
    description: 'Lead the development of advanced AI and machine learning models.',
  },
  {
    title: 'Frontend Developer (React)',
    location: 'New York, NY',
    department: 'Engineering',
    description: 'Build and maintain our client-facing web applications.',
  },
  {
    title: 'Product Manager, AI Platforms',
    location: 'Remote',
    department: 'Product',
    description: 'Define and drive the product roadmap for our AI solutions.',
  },
    {
    title: 'UX/UI Designer',
    location: 'San Francisco, CA',
    department: 'Design',
    description: 'Design intuitive and engaging user experiences for our products.',
  },
];

export default function CareersPage() {
  return (
    <div className="container py-12 md:py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          Work With Us
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Join a team dedicated to helping Indian businesses thrive in the digital age. We're looking for passionate individuals who want to make a real impact.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Current Openings</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <Card key={job.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge variant="secondary">{job.department}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button>
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
