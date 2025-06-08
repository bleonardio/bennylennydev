import {PageLayout} from "@/components";

function Page() {
  return (
    <PageLayout title="Projects">
      <p>poems</p>
      {/*  todo: new component for image display, like film printed images, */}
      {/* pill comp: maybe support emoji, different colors */}
      {/* interactivity, semantic html, test coverage, footer build, responsive header, header closes on page nav, upload photos and poems and get short film links - maybe yt video embeds. */}

      <p>sketches</p>

      <p>short films</p>

      <p>caroling!</p>
      <div className="flex gap-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b823mYrSwTU?si=0e8zBuU5ZtnP-5sb"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/rCVE0-4LGB8?si=bYwyHrKNRj3dmQyZ"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
      </div>

      <p>i48 film festival</p>

      <div className="flex gap-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SvhSJEC2AmE?si=jZKF-qQ6A50qUq-0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/cMz4P2z9npE?si=l6eNio7EUWSBAh4G"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
      </div>

      <p>NASA SUITS</p>

      <div className="flex gap-4 mt-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uBQcOnx4BX0?si=np_agmY7HTCzaGM6"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/2SpvelKB3VM?si=EKfe85y_wcovBZjb"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        {/*  publication link: https://scholarworks.boisestate.edu/under_conf_2019/95/ */}
        {/*  bsu link: https://www.boisestate.edu/news/2020/06/11/suits-team-to-virtually-present-heads-up-display-technology-to-nasa-panel/*/}
      </div>
    </PageLayout>
  );
}

export default Page;