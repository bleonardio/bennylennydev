import { PageLayout, ResumeItem, Island } from "@/components";

function Page() {
  return (
    <PageLayout title="Resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div data-testid="primary">
          <Island title="Experience">
            <ResumeItem
              title="Lovevery - Senior Software Engineer"
              timeline="January 2020 - Present"
              listItems={[
                'Promoted to Senior Software Engineer Spring 2025',
                'Building and maintaining scalable account management, product discovery and checkout flows for a large, global customer base',
                'Replaced third-party dependencies with scalable in-house solutions to improve long-term maintainability and platform stability',
                'Modernized a legacy subscription page using Next.js, improving performance and UX while preserving complex business logic',
                'Led the development of a web based digital course player interface',
                'Led on-call rotations, triaged user-facing outages, performed root cause analysis, and deployed hotfixes to resolve issues quickly'
              ]}
            />

            <ResumeItem
              title="NASA S.U.I.T.S. Challenge — Developer"
              timeline="Summer 2018 - Fall 2019"
              listItems={[
                'Collaborated with a team of students at Boise State to build an augmented reality (AR) informatics system for NASA astronauts on spacewalks',
                'Built a web interface to support mission control communication with the AR system',
                '{{publication}}'
              ]}
              embeddedLink={{
                id: '{{publication}}',
                href: 'https://scholarworks.boisestate.edu/under_conf_2019/95/',
                text: 'ScholarWorks Publication',
              }}
            />

            <ResumeItem
              title="Mary Ellen Ryder Linguistics Lab — Intern"
              timeline="Spring – Fall 2019"
              listItems={['Co-led full site overhaul for the {{boiseInterpretersLink}} website', 'Supported the launch of the Languages of Boise Project and assisted with lab maintenance']}
              embeddedLink={{
                id: '{{boiseInterpretersLink}}',
                href: 'https://www.boiseinterpreters.com',
                text: 'Boise Interpreters',
              }}
            />

            <ResumeItem
              title="Department of English, Boise State University — Intern"
              timeline="Fall 2019"
              listItems={[
                'Transcribed and analyzed video footage using critical discourse analysis for an ethnographic study on drag performance'
              ]}
            />

            <ResumeItem
              title="HP Inc. — Data Science Intern"
              timeline="Spring 2016 – Fall 2019"
              listItems={['Developed tools for tracking and reporting on product quality metrics\n']}
            />

          </Island>
        </div>

        <div data-testid="sidebar" className="flex flex-col gap-6">
          <Island title="Technical Skills">

            <ResumeItem
              title="Core Stack"
              keyValueItems={[
                {
                  key: 'Languages',
                  value: 'React, HTML, CSS, SCSS, TypeScript, JavaScript',
                },
                {
                  key: 'Libraries & Frameworks',
                  value: 'Next.js, Node.js, Tailwind CSS, Storybook, Jest, React Testing Library, Playwright, LaunchDarkly, Contentful, Shopify, Stripe, New Relic',
                }
              ]}
            />


            <ResumeItem
              title="Additional Experience"
              keyValueItems={[
                {
                  key: 'Languages',
                  value: 'Python, Ruby, Liquid, Java, SQL, C, Pug',
                },
                {
                  key: 'Libraries & Frameworks',
                  value: 'GraphQL, Kubernetes, Google Analytics / Tag Manager, Rudderstack, Mux, Tableau',
                }
              ]}
            />
          </Island>

          <Island title="Education">

            <ResumeItem
              title="B.S. Computer Science, Minor: Linguistics"
              subtitle="Boise State University — Boise, ID"
              timeline="Fall 2015 - Fall 2019"
            />

            <ResumeItem
              title="Semester Exchange"
              subtitle="Linnaeus University — Vaxjö, Sweden"
              timeline="Spring 2017"
            />

            <ResumeItem
              title="Summer Exchange"
              subtitle="Polytech Montpellier — Montpellier, France"
              timeline="Summer 2019"
            />
          </Island>

          <Island title="Leadership">

            <ResumeItem
              title="Linguistic Society of Boise State — President"
              timeline="Spring - Fall 2019"
            />

            <ResumeItem
              title="Blue Thunder Marching Band"
              listItems={[
                'Visual Section Leader, Fall 2019',
                'Trumpeter, Fall 2015 – Fall 2019'
              ]}
            />

            <ResumeItem
              title="Living Learning Program — Peer Mentor"
              timeline="Fall 2016"
            />

          </Island>
        </div>
      </div>
    </PageLayout>
  );
}

export default Page;