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
          <Poem poem={wandering} />
          <Poem poem={borrowed} />
        </div>
      </div>

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

      <h1 className="text-2xl font-bold mb-4 mt-10">Featured Films</h1>

      <h2 className="text-xl font-bold mb-4 my-4">Caroling</h2>
      <p className="mb-2">A holiday tradition among some friends to gather in person or from afar to sing some carols :)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
        <CinemaScreen src="https://www.youtube.com/embed/b823mYrSwTU?si=0e8zBuU5ZtnP-5sb" />
        <CinemaScreen src="https://www.youtube.com/embed/rCVE0-4LGB8?si=bYwyHrKNRj3dmQyZ" />
      </div>

      <h2 className="text-xl font-bold my-4">i48 Film Festival</h2>
      <p className="mb-2">Highlights from participation in an annual challenge to create a short film from scratch in 48 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
        <CinemaScreen src="https://www.youtube.com/embed/SvhSJEC2AmE?si=jZKF-qQ6A50qUq-0" />
        <CinemaScreen src="https://www.youtube.com/embed/cMz4P2z9npE?si=l6eNio7EUWSBAh4G" />
      </div>

      <h2 className="text-xl font-bold my-4">NASA SUITS Highlights</h2>
      <p className="mb-2">
        Information and visual aids of the system known as A.R.S.I.S. (Augmented Reality Space Informatics System).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
        <CinemaScreen src="https://www.youtube.com/embed/uBQcOnx4BX0?si=np_agmY7HTCzaGM6" />
        <CinemaScreen src="https://www.youtube.com/embed/2SpvelKB3VM?si=EKfe85y_wcovBZjb" />
      </div>

    </PageLayout>
  );
}

export default Page;