"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const Product = [
  {
    id: 1,
    image: "/images/elbise.png",
    marka: "Defacto",
    model: "Baskılı Üçgen Bikini Üstü",
    point: "5",
    comment: "7",
    date: "19.07.2024",
    status: 0, //0 hepsi 1 onaylanan 2 red 3 silinen
  },
  {
    id: 2,
    image: "/images/bioxcin.png",
    marka: "Defacto",
    model: "Baskılı Üçgen Bikini Üstü",
    point: "5",
    comment: "7",
    date: "19.07.2024",
    status: 1,
  },
  {
    id: 3,
    image: "/images/krem.png",
    marka: "Defacto",
    model: "Baskılı Üçgen Bikini Üstü",
    point: "5",
    comment: "7",
    date: "19.07.2024",
    status: 1,
  },
  {
    id: 4,
    image: "/images/hccare.png",
    marka: "Defacto",
    model: "Baskılı Üçgen Bikini Üstü",
    point: "5",
    comment: "7",
    date: "19.07.2024",
    status: 2,
  },
  {
    id: 5,
    image: "/images/visa.png",
    marka: "Defacto",
    model: "Baskılı Üçgen Bikini Üstü",
    point: "5",
    comment: "7",
    date: "19.07.2024",
    status: 2,
  },
];
const comment = () => {
  const [list, setList] = useState(Product);
  const rows = chunkArray(list, 2);

  const handleClick = (siparis) => {
    if (siparis === "Değerlendir") {
      setList(Product);
    } else {
      setList(Product.filter((item) => item.status === siparis));
      console.log(siparis);
    }
  };
  return (
    <>
      <div className="border border-gray-200 w-full rounded-md">
        <div className="flex justify-start gap-7 px-5 py-5">
          <button className="hover:text-orange-400 ">
            Ürün Değerlendirmelerim
          </button>
          <p className="hover:text-orange-400">
            Satıcı Değerlendirmelerim
            <span className="bg-red-500 left-2 text-white text-xs px-1 py-1">
              Yeni
            </span>
          </p>
        </div>
        <div className="border border-e-gray-200 w-full"></div>
        <div className="flex gap-4 px-4 py-4 text-xs font-semibold">
          <button
            onClick={() => handleClick("Değerlendir")}
            className="border-2 rounded-md px-2 py-2 focus:text-orange-400"
          >
            Değerlendir
          </button>
          <button
            onClick={() => handleClick(0)}
            className="border-2 rounded-md px-2 py-2 focus:text-orange-400"
          >
            Onaylanan
          </button>
          <button
            onClick={() => handleClick(1)}
            className="border-2 rounded-md px-2 py-2 focus:text-orange-400"
          >
            Reddedilen
          </button>
          <button
            onClick={() => handleClick(2)}
            className="border-2 rounded-md px-2 py-2 focus:text-orange-400"
          >
            Silinen
          </button>
        </div>
        <div className="gap-3 space-y-5 ">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-6 items-center px-6 justify-center"
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className="border gap-2 w-full border-gray-200 rounded-md flex px-6 py-6"
                >
                  <div className="basis-1/4">
                    <Image src={item.image} width={70} height={70} />
                  </div>
                  <div className="basis-3/4">
                    <div className="flex gap-2 text-xs">
                      <p>{item.marka}</p>
                      <p> {item.model}</p>
                    </div>
                    <div className="flex gap-3 items-center text-xs">
                      <div className="flex items-center">
                        <p>{item.point}</p>
                        <div className="text-yellow-500 flex gap-1">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <p>({item.comment})</p>
                      <p>|</p>
                      <p>
                        <strong>Teslim Tarihi:</strong> {item.date}
                      </p>
                      <p></p>
                    </div>
                    <div className="border bottom-2 border-orange-400 flex justify-center items-center rounded-md font-semibold text-orange-500">
                      <button>Ürünü Değerlendir</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default comment;
