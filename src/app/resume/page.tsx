import {Island} from "@/components/Island";
import {Pill} from "@/components/Pill";
import {PillStyle} from "@/components/Pill/Pill";

function Page() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 bg-blue-900 p-4">
        Resume
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div data-testid="primary">
          <Island title="Work Experience">
            <Pill text="Lovevery - Senior Software Engineer" style={PillStyle.Blue} classes="mt-4" />
            <p className="italic my-2 ml-2">January 2020 - Present</p>

            <ul className="list-disc ml-6">
              <li className="mb-2">
                Promoted to Senior Engineer in 2025 in recognition of technical leadership and cross-functional impact
              </li>
              <li className="mb-2">
                Experience building high visibility customer-facing features (subscription management tools, cart and checkout) and internal tools (admin portal interfaces for the CX team)
              </li>
              <li className="mb-2">
                Experience working closely with product managers, designers, and business stakeholders to scope and deliver intuitive, resilient user experiences
              </li>
              <li className="mb-2">
                Led front-end development for an in-house web video player to support digital course products
              </li>
              <li className="mb-2">
                Led front end development on project to rebuild customer subscription management page, migrating complex legacy functionality to a new application while preserving key business logic and user flows
              </li>
              <li className="mb-2">
                Regularly led on call rotations, gained experience promptly handling user facing outages, root cause analysis and deploying hotfixes.
              </li>
            </ul>

            <Pill text="HP Inc. — Data Science Intern" style={PillStyle.Blue} classes="mt-4" />
            <p className="italic my-2 ml-2">Spring 2016 – Fall 2019</p>

            <ul className="list-disc ml-6">
              <li className="mb-2">
                Data sourcing and tool development for tracking & reporting on product quality metrics
              </li>
            </ul>

            <Pill text="Mary Ellen Ryder Linguistics Lab — Intern" style={PillStyle.Blue}  classes="mt-4" />
            <p className="italic my-2">Spring 2019 – Fall 2019</p>

            <ul className="list-disc ml-6">
              <li className="mb-2">
                Co-led full site overhaul for the <a className="cursor-pointer text-blue-500 hover:text-blue-600 underline" href="https://www.boiseinterpreters.com" target="_blank">Boise Interpreters</a> website
              </li>
              <li className="mb-2">
                Supported the launch of the Languages of Boise Project and assisted with lab maintenance
              </li>
            </ul>

            <Pill text="Department of English, Boise State University — Intern" style={PillStyle.Blue} classes="mt-4" />
            <p className="italic my-2">Fall 2019</p>

            <ul className="list-disc ml-6">
              <li className="mb-2">
                Contributed to linguistics research for a drag ethnography study
              </li>
            </ul>

            <Pill text="NASA S.U.I.T.S. Challenge — Developer" style={PillStyle.Blue} classes="mt-4" />
            <p className="italic my-2">Spring 2018 – Fall 2019</p>

            <ul className="list-disc ml-6">
              <li className="mb-2">
                Collaborated with a team of students at Boise State to build an augmented reality informatics system for NASA astronauts on spacewalks
              </li>
            </ul>
          </Island>
        </div>

        <div data-testid="sidebar">
          <Island title="Education">

            <Pill text="B.S. in Computer Science, Minor in Linguistics" style={PillStyle.Blue} classes="my-2" />
            <p className="ml-2">Boise State University — Boise, ID</p>
            <p className="italic ml-2">Fall 2015 - Fall 2019</p>

            <Pill text="Semester Exchange"  style={PillStyle.Blue} classes="mt-4 mb-2" />
            <p className="ml-2">Linnaeus University — Vaxjö, Sweden </p>
            <p className="italic ml-2">Spring 2017</p>

            <Pill text="Summer Exchange"  style={PillStyle.Blue} classes="mt-4 mb-2" />
            <p className="ml-2">Polytech Montpellier — Montpellier, France</p>
            <p className="italic ml-2">Summer 2019</p>
          </Island>

          <Island title="Technical Skills">
            <Pill text="Daily Toolkit" style={PillStyle.Blue} />
            <p className="my-2 ml-2">
              <span className="font-bold">Languages:</span> React, HTML, CSS, TypeScript, JavaScript
            </p>

            <p className="ml-2">
              <span className="font-bold">Libraries & Frameworks:</span> Next.js, Storybook, Shopify, Tailwind, Jest, Playwright, Launchdarkly, Contentful, New Relic
            </p>

            <Pill text="Experienced with" style={PillStyle.Blue} classes="mt-4 mb-2" />
            <p className="ml-2">
              <span className="font-bold">Languages:</span> Python, Ruby, Liquid, Java, SQL, C, Bash, Pug
            </p>
            <p className="mt-2 ml-2">
              <span className="font-bold">Libraries & Frameworks:</span> GraphQL, Kubernetes, Stripe, Google Analytics / Google Tag Manager, Rudderstack, Mux, Tableau
            </p>

          </Island>
          <Island title="Leadership">
            <Pill text="Linguistic Society of Boise State — President" style={PillStyle.Blue} classes="mt-4 mb-2" />
            <p className="italic ml-2">Spring 2019 - Fall 2019</p>

            <Pill text="Blue Thunder Marching Band" style={PillStyle.Blue} classes="mt-4 mb-2" />

            <p className="italic ml-2">Visual Section Leader, Fall 2019</p>
            <p className="italic ml-2">Trumpeter, Fall 2015 – Fall 2019</p>

            <Pill text="Living Learning Program — Peer Mentor" style={PillStyle.Blue} classes="mt-4 mb-2" />
            <p className="italic ml-2">Fall 2016</p>

          </Island>
        </div>
      </div>
    </section>
  );
}

export default Page;