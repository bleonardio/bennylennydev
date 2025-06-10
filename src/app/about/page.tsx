'use client';

import {Card, Pill, Link, PageLayout, Polaroid} from "@/components";
import Placeholder from "../../../public/placeholder.webp";

function Page() {
  return (
    <PageLayout title="About">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-8">
        <Polaroid label="test" src={Placeholder} alt="placeholder" />
        <Polaroid label="test" src={Placeholder} alt="placeholder" />
        <Polaroid label="test" src={Placeholder} alt="placeholder" />
      </div>

      <p className="mb-4">
        Hello! I’m Bennett and you’re probably wondering whats going on here - me too.
      </p>
      <p className="mb-4">
        Let&apos;s start from the beginning: 13.8 billion years ag—
      </p>
      <p className="mb-4">
        Let&apos;s cut to the chase: I grew up in Idaho and spent most of my life in a classroom, with the band or on a
        soccer field. I followed some calls for adventure abroad, and am currently based in Amsterdam where I have lived
        for the past couple years but what has felt already like a lifetimes worth of lessons - and expected no less
        living on a Saturn line. ¯\_(ツ)_/¯
      </p>
      <p className="mb-4">
        I&apos;ve had friends come and go, interests come and go, identities come and go and as the years go by, I am
        gaining more confidence in my ability to “handle the seasons of my life” (Landslide, Fleetwood Mac).
      </p>
      <p className="mb-4">
        I am working as a software engineer at <Link text="Lovevery" href="https://www.lovevery.com" isExternal={true}/> but when I&apos;m not working I can be found
        gardening, sleeping, sketching, climbing, making cocktails or doing nothing (underrated).
      </p>

      <p className="mb-4">Currently I am:</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
        <Card front="Studying" back="Herbalism, Palmistry, Mixology, Astrology"/>
        <Card front="Watching" back="White Lotus, Taskmaster, One Piece"/>
        <Card front="Playing" back="Disney Dreamlight Valley"/>
        <Card front="Reading" back="Surviving Saturn Return by Caggie Dunlop, How to Read a Tree by Tristan Gooley" />
      </div>

      <p className="my-4">Labels I vibe with:</p>

      <div className="flex gap-6 flex-wrap">
        <Pill text="Goofy little guy" />
        <Pill text="Guitar Hero enthusiast" />
        <Pill text="Writer of poems and code" />
        <Pill text="Trans masc"/>
        <Pill text="Queer"/>
        <Pill text="Scorpio sun" />
        <Pill text="Sag rising" />
        <Pill text="Leo moon" />
        <Pill text="Developer" />
        <Pill text="Musician" />
        <Pill text="Beach boy" />
      </div>
    </PageLayout>
  );
}

export default Page;