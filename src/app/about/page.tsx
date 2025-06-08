'use client';

import { Card, Link, Pill, PageLayout } from "@/components";

function Page() {
  return (
    <PageLayout title="About">
      <p className="mb-4">
        Hello! I’m Bennett and you’re probably wondering whats going on here - me too.
      </p>
      <p className="mb-4">
        Let's start from the beginning: 13.8 billion years ag—
      </p>
      <p className="mb-4">
        Let's cut to the chase: I grew up in Idaho and spent most of my life in a classroom, with the band or on a
        soccer field. I followed some calls for adventure abroad, and am currently based in Amsterdam where I have lived
        for the past couple years but what has felt already like a lifetimes worth of lessons - and expected no less
        living on a saturn line. ¯\_(ツ)_/¯
      </p>
      <p className="mb-4">
        I’ve watched friends come and go, interests come and go, identities come and go and as the years go by, I am
        gaining more confidence in my ability to “handle the seasons of my life” (Landslide, Fleetwood mac).
      </p>
      <p className="mb-4">
        I am working as a software engineer at <Link text="Lovevery" href="https://www.lovevery.com" isExternal={true}/> but when I'm not working I can be found
        gardening, sleeping, sketching, gaming, making cocktails or doing nothing (underrated).
      </p>

      <p className="mb-4">Currently I am:</p>

      <div className="flex gap-2">
        <Card front="Studying" back="Herbalism, Palmistry, Mixology, Astrology"/>

        <Card front="Watching" back="White Lotus, Taskmaster, One Piece"/>

        <Card front="Playing" back="Disney Dreamlight Valley"/>

        <Card front="Reading" back="Be Here Now, Surviving Saturn Return, American Fascism"/>

        <Card front="Wearing" back="Bombas Slippers || Docs"/>
      </div>

      <p className="my-4">Labels I vibe with:</p>
      <div className="flex gap-2 max-w-md flex-wrap">

        <Pill text="Goofy little guy"/>
        <Pill text="Guitar Hero enthusiast"/>
        <Pill text="Writer of poems and code"/>
        <Pill text="Trans masc"/>
        <Pill text="Expat"/>
        <Pill text="Musician"/>
        <Pill text="Beach boy"/>
        <Pill text="Scorpio sun"/>
        <Pill text="Sag rising"/>
        <Pill text="Leo moon"/>

      </div>
    </PageLayout>
  );
}

export default Page;