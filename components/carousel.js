"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Sen De Al", image: "/images/En_Cok_Satanlar_202302142041.webp" },
  { name: "Sana Özel", image: "/images/Senin_Icin.png" },
  { name: "Dijital Destek Kartları", image: "/images/gazze.webp" },
  { name: "Dijital Destek Kartları", image: "/images/destek.webp" },
  { name: "Kurumsal", image: "/images/kurumsal.png" },
  { name: "Kredi Kartı", image: "/images/kredi.webp" },
  { name: "Apple", image: "/images/apple.webp" },
  { name: "Samsung", image: "/images/samsung.webp" },
  { name: "Pull&Bear", image: "/images/pull.webp" },
  { name: "Philips", image: "/images/philips.webp" },
  { name: "Karaca", image: "/images/karaca.webp" },
  { name: "Vestel", image: "/images/vestel.webp" },
  { name: "Stradivarius", image: "/images/stradivarius.webp" },
  { name: "Adidas", image: "/images/adidas.webp" },
  { name: "Arçelik", image: "/images/arCelik.webp" },
  { name: "Xiaomi", image: "/images/xiaomi.webp" },
  { name: "Defacto", image: "/images/defacto.webp" },
];
const itemsPerPage = 9;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= brands.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? brands.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };
  return (
    <div className="container flex flex-col mx-auto max-w-7xl mt-8">
      <div className="relative flex items-center">
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-[-30px] p-4 text-gray-800"
          >
            <FaArrowLeft size={24} />
          </button>
        )}
        <div className="flex overflow-hidden w-full -space-x-20">
          {brands
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((brand, index) => (
              <div
                key={index}
                className={`w-1/6 hover:text-orange-400 transition-transform duration-300 transform 
                                }`}
              >
                <div className="flex flex-col items-center p-4">
                  <div className="rounded-full overflow-hidden border-2 w-16 h-16 hover:border-orange-400 border-gray-300">
                    <Link href="/">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        width={64}
                        height={64}
                      />
                    </Link>
                  </div>
                  <p className="w-2/3 mt-2 text-center font-bold">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {currentIndex + itemsPerPage < brands.length && (
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 text-gray-800"
          >
            <FaArrowRight size={24} />
          </button>
        )}
      </div>

      <div className="flex justify-between gap-5 mb-10">
        <div className="bg-green-100 text-green-900 flex justify-center w-1/3 rounded-lg font-bold text-xl items-center">
          <Link href="/">
            {" "}
            <p>Sepete En Çok Eklenenler</p>{" "}
          </Link>
        </div>
        <div className="bg-orange-100 flex justify-center text-orange-900 w-1/3 rounded-lg  font-bold text-xl py-4 px-10">
          <Link href="/">
            {" "}
            <p> En Çok Öne Çıkanlar </p>
          </Link>
        </div>
        <div className="bg-pink-100 flex justify-center text-xl text-pink-800 rounded-lg w-1/3 font-bold  py-4 px-10">
          <Link href="/">
            {" "}
            <p>Flaş Ürünler</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
