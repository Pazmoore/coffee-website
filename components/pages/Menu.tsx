import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="bg-[#373535] text-white p-5 lg:px-10">
      <div className="flex flex-col flex-wrap gap-4 justify-center items-center mb-4 mt-4">
        <h1 className="text-5xl font-bold">Our Menu</h1>
        <div className="border-b-4 border-[#cf8989] w-20 inline-block rounded-3xl"></div>
        <p className="text-sm w-full max-w-[700px] text-center">
          At Coffee House in Berndorf, Germany, we pride ourselves on being a
          go-to destination for coffee lovers and conversation seekers alike,
          with food in the menu that delights the tastebuds. Pick your choice.
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image src="/images/cup.png" width={300} height={300} alt="AI Icon" />
          <div className="text-center">
            <h2 className="italic">Hot Beverages</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image src="/images/tea.png" width={300} height={300} alt="AI Icon" />
          <div className="text-center">
            <h2 className="italic font-bold">Cold Beverages</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image
            src="/images/berry.png"
            width={190}
            height={190}
            alt="AI Icon"
          />
          <div className="text-center">
            <h2 className="italic font-bold">Refreshments</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image
            src="/images/buger.png"
            width={200}
            height={200}
            alt="AI Icon"
          />
          <div className="text-center">
            <h2 className="italic font-bold">Sepecial Combos</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image
            src="/images/cake.png"
            width={190}
            height={190}
            alt="AI Icon"
          />
          <div className="text-center">
            <h2 className="italic font-bold">Derset</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image
            src="/images/bread.png"
            width={200}
            height={200}
            alt="AI Icon"
          />
          <div className="text-center">
            <h2 className="italic font-bold">Burger & Fries</h2>
            <p className="text-sm w-full max-w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              atque et tempora nam iste ex nesciunt porro doloribus quaerat
              placeat?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
