import {CinemaScreen, PageLayout, Poem, Polaroid} from "@/components";
import { belatedBoyhood, borrowed, fragments, roots, wandering } from "@/components/Poem/data";
import Placeholder from '@/../public/placeholder.webp'

function Page() {
  return (
    <PageLayout title="Projects">
      <h1 className="text-2xl font-bold my-4">Poetry</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <Poem poem={belatedBoyhood} />
          <Poem poem={fragments} />
          <Poem poem={roots} />
        </div>
        <div className="flex flex-col gap-6">
          <Poem poem={borrowed} />
          <Poem poem={wandering} />
        </div>
      </div>

      {/* todo: color scheme & font choice */}
      {/* todo: transitions, content pass, semantic html check, responsiveness / mobile friendly, upload sketch photos  */}

      <h1 className="text-2xl font-bold mb-4 mt-10">Sketches</h1>

      <div className="grid grid-cols-2 gap-6 pt-4">
        <div className="flex flex-col gap-6">
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
        </div>

        <div className="flex flex-col gap-6">
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
          <Polaroid label="test" src={Placeholder} alt="placeholder" />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-10">Theater</h1>

      <h2 className="text-xl font-bold mb-4 my-4">Caroling</h2>

      <div className="flex gap-4 pb-6">
        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/b823mYrSwTU?si=0e8zBuU5ZtnP-5sb"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>

        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rCVE0-4LGB8?si=bYwyHrKNRj3dmQyZ"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>

      </div>

      <h2 className="text-xl font-bold my-4">i48 Film Festival</h2>

      <div className="flex gap-4 pb-6">
        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SvhSJEC2AmE?si=jZKF-qQ6A50qUq-0"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>

        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cMz4P2z9npE?si=l6eNio7EUWSBAh4G"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>
      </div>

      <h2 className="text-xl font-bold my-4">NASA SUITS Highlights</h2>

      <div className="flex gap-4 pb-6">
        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uBQcOnx4BX0?si=np_agmY7HTCzaGM6"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>


        <CinemaScreen>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2SpvelKB3VM?si=EKfe85y_wcovBZjb"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </CinemaScreen>

        {/*  publication link: https://scholarworks.boisestate.edu/under_conf_2019/95/ */}
        {/*  bsu link: https://www.boisestate.edu/news/2020/06/11/suits-team-to-virtually-present-heads-up-display-technology-to-nasa-panel/*/}
      </div>
    </PageLayout>
  );
}

export default Page;