import {Island} from "@/components/Island";
import {Pill} from "@/components/Pill";
import {PillStyle} from "@/components/Pill/Pill";
import {ResumeItem} from "@/components/ResumeItem";

function Page() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 bg-blue-900 p-4">
        Resume
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div data-testid="primary">
          <Island title="Work Experience">
            <ResumeItem
              title="Lovevery - Senior Software Engineer"
              timeline="January 2020 - Present"
              listItems={
              ['Promoted to Senior Engineer in 2025 in recognition of technical leadership and cross-functional impact', 'Experience building high visibility customer-facing features (subscription management tools, cart and checkout) and internal tools (admin portal interfaces for the CX team)', 'Experience working closely with product managers, designers, and business stakeholders to scope and deliver intuitive, resilient user experiences', 'Led front-end development for an in-house web video player to support digital course products', 'Led front end development on project to rebuild customer subscription management page, migrating complex legacy functionality to a new application while preserving key business logic and user flows', 'Regularly led on call rotations, gained experience promptly handling user facing outages, root cause analysis and deploying hotfixes.']}
            />

            <ResumeItem
              title="HP Inc. — Data Science Intern"
              timeline="Spring 2016 – Fall 2019"
              listItems={['Data sourcing and tool development for tracking & reporting on product quality metrics']}
            />

            <ResumeItem
              title="Mary Ellen Ryder Linguistics Lab — Intern"
              timeline="Spring 2019 – Fall 2019"
              listItems={['Co-led full site overhaul for the {{boiseInterpretersLink}} website', 'Supported the launch of the Languages of Boise Project and assisted with lab maintenance']}
              embeddedLinks={[{
                id: '{{boiseInterpretersLink}}',
                href: 'https://www.boiseinterpreters.com',
                text: 'Boise Interpreters',
              }]}
            />

            <ResumeItem
              title="Department of English, Boise State University — Intern"
              timeline="Fall 2019"
              listItems={[
                'Contributed to linguistics research for a drag ethnography study'
              ]}
            />

            <ResumeItem
              title="NASA S.U.I.T.S. Challenge — Developer"
              timeline="Spring 2018 – Fall 2019"
              listItems={[
                'Collaborated with a team of students at Boise State to build an augmented reality informatics system for NASA astronauts on spacewalks'
              ]}
            />

          </Island>
        </div>

        <div data-testid="sidebar" className="flex flex-col gap-6">
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
              title="Experienced with"
              keyValueItems={[
                {
                  key: 'Languages',
                  value: 'Python, Ruby, Liquid, Java, SQL, C, Bash, Pug',
                },
                {
                  key: 'Libraries & Frameworks',
                  value: 'GraphQL, Kubernetes, Stripe, Google Analytics / Google Tag Manager, Rudderstack, Mux, Tableau',
                }
              ]}
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
    </section>
  );
}

export default Page;