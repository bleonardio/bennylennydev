'use client';

import { Card, Link, PageLayout, Polaroid } from "@/components";
import Abba from '@/../public/assets/abba.jpg'
import EspressoMartini from '@/../public/assets/espresso-martini.jpg'
import Keukenhof from '@/../public/assets/keukenhof.jpg'

function Page() {
  return (
    <PageLayout title="About">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-8">
        <Polaroid
          label="Keukenhof gardens, 2025"
          src={Keukenhof}
          alt="selfie in the keukenhof gardens, Netherlands"
        />
        <Polaroid
          label="Espresso martini experimentation, 2025"
          src={EspressoMartini}
          alt="selfie with an espresso martinin cocktail"
        />
        <Polaroid
          label="Summer visit home, 2024"
          src={Abba}
          alt="photo of me with my dog, Abba"
        />
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
        for the past couple years.
      </p>
      <p className="mb-4">
        I&apos;ve had friends come and go, interests come and go, identities come and go and as the years go by, I am
        gaining more confidence in my ability to “handle the seasons of my life” (Landslide, Fleetwood Mac).
      </p>
      <p className="mb-4">
        I am working as a software engineer at <Link text="Lovevery" href="https://www.lovevery.com" isExternal={true}/> but when I&apos;m not working I can be found
        gardening, sleeping, sketching, climbing, making cocktails or doing nothing (underrated).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
        <Card front="Pronouns" back="he / they" />
        <Card front="Studying" back="Herbalism, Palmistry, Mixology, Astrology"/>
        <Card front="Watching" back="White Lotus, Taskmaster"/>
        <Card front="Playing" back="Disney Dreamlight Valley"/>
        <Card front="Reading" back="How to Read a Tree by Tristan Gooley" />
        <Card front="Wearing" back="Slippers || Docs" />
        <Card front="Likes" back="The feeling of crawling into bed after a shower, discovering new music" />
        <Card front="Dislikes" back="People spitting in public places, European showers, heavy cologne / perfume" />
      </div>

    </PageLayout>
  );
}

export default Page;