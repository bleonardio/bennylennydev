'use client';

import { Card, Link, PageLayout, Polaroid } from "@/components";
import ZaanseSchans from '@/../public/assets/zaanse-schans.jpg'
import EspressoMartini from '@/../public/assets/espresso-martini.jpg'
import Orchards from '@/../public/assets/orchards.jpg'

function Page() {
  return (
    <PageLayout title="About">

      <p className="mb-4">
        Hello! I’m Bennett and you’re probably wondering whats going on here - me too.
      </p>
      <p className="mb-4">
        Let&apos;s start from the beginning: 13.8 billion years ag-
      </p>
      <p className="mb-4">
        Let&apos;s cut to the chase: I grew up in Idaho and spent most of my life in a classroom, with the band or on a
        soccer field. I followed some calls for adventure abroad, and am currently based in Amsterdam where I have lived
        for the past few years.
      </p>

      <p className="mb-4">
        I am working as a software engineer at <Link text="Lovevery" href="https://www.lovevery.com" isExternal={true}/> but when I&apos;m not working I can be found
        gardening, sketching, tinkering, making cocktails or looking for sunglasses I have misplaced.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-8">
        <Polaroid
          label="Park Frankendael Orchards with Max, 2026"
          src={Orchards}
          alt="Park Frankendael Orchards, Netherlands"
        />
        <Polaroid
          label="Espresso martini experimentation, 2025"
          src={EspressoMartini}
          alt="selfie with an espresso martinin cocktail"
        />
        <Polaroid
          label="Chasing Windmills, Zaanse Schans, 2025"
          src={ZaanseSchans}
          alt="photo of me with my dog, Abba"
        />
      </div>

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