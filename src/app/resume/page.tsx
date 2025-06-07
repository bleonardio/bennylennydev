import {Island} from "@/components/Island";

function Page() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 bg-blue-900 p-4">
        Resume
      </h1>

      <div className="grid grid-cols-2 gap-4">

        <div data-testid="primary">
          <Island title="Work Experience">
            <p>yoyoyo</p>
          </Island>
          <Island title="Education">
            <p>yoyoyo</p>
          </Island>
        </div>

        <div data-testid="sidebar">
          <Island title="Technical Skills">
            <p>yoyoyo</p>
          </Island>
          <Island title="Projects">
            <p>yoyoyo</p>
          </Island>
        </div>
      </div>
    </section>
  );
}

export default Page;