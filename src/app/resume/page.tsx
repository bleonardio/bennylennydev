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
                'Experience building high visibility customer-facing features in e-commerce and subscription domain (e.g. subscription management tools, product, cart and checkout pages) and internal tools (e.g. admin portal interfaces for internal use)',
                'Experience working closely with product managers, designers, and business stakeholders to scope and deliver intuitive, resilient user experiences',
                'Led front-end development for an in-house web video player to support digital course products',
                'Led front end development for a new customer subscription management page, migrating complex legacy functionality to a new application while preserving key business logic and user flows',
                'Regularly led on call rotations, gained experience promptly triaging user facing outages, root cause analysis and deploying hotfixes'
              ]}
            />

            <ResumeItem
              title="HP Inc. — Data Science Intern"
              timeline="Spring 2016 – Fall 2019"
              listItems={['Data sourcing and tool development for tracking & reporting on product quality metrics']}
            />

            <ResumeItem
              title="NASA S.U.I.T.S. Challenge — Developer"
              timeline="Spring 2018 – Fall 2019"
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
              timeline="Spring 2019 – Fall 2019"
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
                'Transcribed and analyzed video footage using critical discourse analysis notation for an ethnographic study on drag performance and identity'
              ]}
            />

          </Island>
        </div>

        <div data-testid="sidebar" className="flex flex-col gap-6">
          <Island title="Technical Skills">

            <ResumeItem
              title="Daily Toolkit"
              keyValueItems={[
                {
                  key: 'Languages',
                  value: 'React, HTML, CSS, TypeScript, JavaScript',
                },
                {
                  key: 'Libraries & Frameworks',
                  value: 'Next.js, Storybook, Shopify, Tailwind, Jest, Playwright, Launchdarkly, Contentful, New Relic',
                }
              ]}
            />


            <ResumeItem
              title="Experienced With"
              keyValueItems={[
                {
                  key: 'Languages',
                  value: 'Python, Ruby, Liquid, Java, SQL, C, Pug',
                },
                {
                  key: 'Libraries & Frameworks',
                  value: 'GraphQL, Kubernetes, Stripe, Google Analytics / Google Tag Manager, Rudderstack, Mux, Tableau',
                }
              ]}
            />
          </Island>

          <Island title="Education">

            <ResumeItem
              title="B.S. in Computer Science, Minor in Linguistics"
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
              timeline="Spring 2019 - Fall 2019"
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