import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="p-5 lg:px-10">
      <div className="flex flex-col flex-wrap gap-4 justify-center items-center mb-4 mt-4">
        <h1 className="text-5xl font-bold">Gallery</h1>
        <div className="border-b-4 border-[#cf8989] w-20 inline-block rounded-3xl"></div>
        <p className="text-sm w-full max-w-[700px] text-center">
          At Coffee House in Berndorf, Germany, we pride ourselves on being a
          go-to destination for coffee lovers and conversation seekers alike,
          with food in the menu that delights the tastebuds. Pick your choice.
        </p>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 mt-10">
        <Image
          src="/images/spa.jpeg"
          width={500}
          height={500}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/bak.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/jui.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/smoot.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/bro.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/dou.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/brea.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/chi.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/rd.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/pizza.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/chiki.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
        <Image
          src="/images/sha.jpeg"
          width={350}
          height={350}
          alt="AI Icon"
          className="rounded-3xl w-full max-w-[300px] h-full max-h-[400px]"
        />
      </div>
    </section>
  );
};

export default Gallery;
