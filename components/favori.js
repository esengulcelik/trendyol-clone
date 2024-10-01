"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
const favori = ({ products = [] }) => {
  const itemsPerPage = 5;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? products.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };
  return (
    <>
      <div>
        <div className="flex justify-between container mx-auto max-w-7xl mt-5">
          <div className="flex gap-5 text-lg">
            <p>Favorilerim</p>
            <p>Koleksiyonlarım</p>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Favorilerimde Ara"
              className="p-2 border flex items-center justify-center text-sm rounded pl-5 bg-gray-100 placeholder-gray-500 w-full"
            />
            <IoSearchOutline className="absolute right-2 text-orange-600" />
          </div>
        </div>
        <div className="border-b border-gray-300 drop-shadow-2xl shadow-black shadow-2xl"></div>
        <div className="flex gap-2 mt-5">
          <button className="border px-2 py-2 shadow-md">Tüm Favoriler</button>
          <button className="border px-2 py-2 shadow-md">
            Avantajlı Ürünler
          </button>
          <button className="border px-2 py- shadow-md">Kuponlu Ürünler</button>
        </div>
        <div>
          <div className="overflow-hidden flex w-full">
            <div className="flex gap-8 p-4 container mx-auto max-w-7xl mt-5">
              {products
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border-2 w-60 rounded-lg relative"
                  >
                    <div className="flex justify-center">
                      <div className="z-10 absolute">
                        <Image
                          src={product.image}
                          width={150}
                          height={150}
                          className=""
                        />
                      </div>
                    </div>
                    <div className="z-20 relative text-giant font-bold">
                      <div className="flex justify-between">
                        <div className="flex flex-col w-20 left-0 space-y-2 pl-2 pt-2 ">
                          {product.fastDelivery && (
                            <div className="px-1 flex items-center text-xs gap-1 rounded-lg text-white bg-green-600">
                              <TbTruckDelivery />
                              <p className="text-giant font-bold ">
                                <span className="block">HIZLI</span>
                                <span className="block">TESLİMAT</span>
                              </p>
                            </div>
                          )}
                          {product.free && (
                            <div className="flex px-1 items-center text-xs gap-1 rounded-lg text-white bg-gray-600">
                              <BsBoxFill />
                              <p className="text-giant font-bold">
                                <span className="block">KARGO</span>
                                <span className="block">BEDAVA</span>
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="text-black bg-white text-2xl h-8 z-10 relative border-2 rounded-full mx-3 my-3 px-1 py-1 ">
                          <CiHeart className="w-5 h-5" />
                        </div>
                      </div>
                      {product.best && (
                        <div className="mt-2 px-3">
                          <Image
                            src="/images/encoksatan.webp"
                            width={50}
                            height={50}
                          />
                        </div>
                      )}
                      <div className="flex justify-center mt-20 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
                    </div>
                    <div className="space-y-5 px-3 py-3">
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs">
                            {" "}
                            <strong>{product.name}</strong> Complex Bitkisel Saç
                            Bakım Kompleksi-100ml
                          </p>
                        </div>
                        <div className="flex items-center text-xs gap-1">
                          <p>{product.rating}</p>
                          <div className="text-yellow-500 flex gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <p className="text-gray-400">({product.reviews})</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="font-semibold text-orange-400">
                            {product.price}
                          </p>
                        </div>
                        <div className="gap-1 flex items-center text-xs font-semibold rounded-md bg-orange-100 px-1 py-1 w-28">
                          <IoTicket className="text-orange-500" />
                          <p>Çok Al Az Öde</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default favori;
