'use client';

import {Card} from "@/components/Card";

function Page() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 bg-red-500">
        About
      </h1>
      <p className="font-bold mb-4">
        Hello! I’m Bennett and you’re probably wondering whats going on here - me too. ¯\_(ツ)_/¯
      </p>
      <p className="mb-4">
        Lets start from the beginning: 13.8 billion years ag--
      </p>
      <p className="mb-4">
        Lets cut to the chase: I grew up in Idaho, followed some summoning for adventures abroad, and am currently based in Amsterdam where I have lived for the past couple years but what has felt already like a lifetimes worth of lessons - and expected no less living on a saturn line.
      </p>
      <p className="mb-4">
        I’ve watched friends come and go, interests come and go, identities come and go and as the years go by, I am gaining more confidence in my ability to “handle the seasons of my life” (Landslide, Fleetwood mac)
      </p>
      <p className="mb-4">
        I am working as a software engineer at Lovevery but when I'm not working I can be found gardening, sleeping, sketching, making cocktails or doing nothing which is becoming a favorite pastime of mine
      </p>§§

      <div className="flex gap-2">
        <Card front="Studying" back="Herbalism, Palmistry, Mixology, Astrology" />

        <Card front="Watching" back="White Lotus, Taskmaster, One Piece" />

        <Card front="Playing" back="Disney Dreamlight Valley" />

        <Card front="Reading" back="Be Here Now, Surviving Saturn Return, American Fascism" />

        <Card front="Wearing" back="Bombas Slippers || Docs" />
      </div>

    </section>
  );
}

export default Page;