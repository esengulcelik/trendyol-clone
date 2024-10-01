"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import moment from "moment";

const fakeData = [
  {
    id: 1,
    alici: "Esengül Çelik",
    özet: "1 teslimat, 2 ürün ",
    tutar: "300 tl",
    image: "/images/1_org_zoom.webp",
    tarih: "2024-05-24",
    siparis_durumu: 0, // 0 devam eden,1 iade,2 iptal
  },
  {
    id: 2,
    alici: "Esengül Çelik",
    özet: "1 teslimat, 5 ürün ",
    image: "/images/bioxcin.png",
    tutar: "250tl ",
    tarih: "2024-07-24",
    siparis_durumu: 0,
  },
  {
    id: 3,
    alici: "Esengül Çelik",
    özet: "1 teslimat, 5 ürün ",
    image: "/images/krem.png",
    tutar: "250tl ",
    tarih: "2024-06-24",
    siparis_durumu: 1,
  },
  {
    id: 4,
    alici: "Esengül Çelik",
    özet: "1 teslimat, 5 ürün ",
    image: "/images/terlik.png",
    tutar: "250tl ",
    tarih: "2023-04-24",
    siparis_durumu: 1,
  },
  {
    id: 5,
    alici: "Esengül Çelik",
    özet: "1 teslimat, 5 ürün ",
    image: "/images/elbise.png",
    tutar: "250tl ",
    tarih: "2023-04-24",
    siparis_durumu: 2,
  },
];

const siparis = () => {
  const [list, setList] = useState(fakeData);
  const now = moment();

  const handleFilterChange = (e) => {
    const isMonth = e.target.value.split("-")[0];
    const sayi = e.target.value.split("-")[1];

    if (isMonth == "month") {
      const momentString = moment()
        .subtract(sayi, "months")
        .format("YYYY-MM-DD HH:mm:ss");
      setList(
        fakeData.filter((item) => {
          const itemDate = moment(item.tarih).format("YYYY-MM-DD HH:mm:ss");
          return itemDate > momentString;
        })
      );
    } else {
      console.log(sayi, "sayi");
      setList(
        fakeData.filter((item) => {
          const itemDate = moment(item.tarih).format("YYYY");
          return itemDate == sayi;
        })
      );
    }
    if (e.target.value == 0) {
      setList(fakeData);
    }
  };

  const handleClick = (siparis) => {
    if (siparis === "Tümü") {
      setList(fakeData);
    } else {
      setList(fakeData.filter((x) => x.siparis_durumu === siparis));
      console.log(setList);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col basis-5/6 gap-5">
        <div className="bg-gradient-to-r from-bej to-white rounded-lg flex w-full py-3 justify-center  items-center">
          <div className="flex gap-10 ">
            <div>
              <Image src="/images/kart.webp" width={110} height={110}></Image>
            </div>
            <div className="space-y-2">
              <h1 className="font-semibold text-md">
                500 TL Trendyol ParaPuan hediye!*
              </h1>
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCircleQuestion className="text-orange-600" /> Trendyol
                  alışverişlerinde 1% kazan
                </span>
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCircleQuestion className="text-orange-600" /> Peşin
                  Fiyatına <span className="text-orange-500">6 Taksit!</span>
                </span>
                <span className="flex items-center gap-1">
                  {" "}
                  <CiCircleQuestion className="text-orange-600" /> 2 Kat Hızlı
                  Elite ol!
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs ">
                {" "}
                <CiCircleQuestion className="text-orange-600" />
                Ömür boyu kart ücreti yok!
              </span>
            </div>
            <div className="flex items-center">
              <button className="text-white bg-orange-500 flex py-4 text-xs  items-center justify-center h-5 px-16 rounded-md">
                Detaylı Bilgi
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-5 py-5 justify-between items-center border rounded-lg border-gray-300">
          <p>Siparişlerim</p>
          <div className="relative flex items-center w-1/3">
            <input
              type="text"
              placeholder="Ürün ismi veya Marka ara"
              className="p-2 border text-xs font-semibold rounded pl-5 bg-gray-50 placeholder-gray-500 w-full"
            />
            <IoSearchOutline className="absolute right-2 text-orange-600" />
          </div>
          <div>
            <div class="relative inline-block w-36">
              <select
                onChange={handleFilterChange}
                class="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded text-xs  focus:outline-none focus:shadow-outline"
              >
                <option value={0}>Tüm Siparişler</option>
                <option value={"month-1"}>Son 1 Ay</option>
                <option value={"month-3"}>Son 3 Ay</option>
                <option value={"year-2023"}>2023</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 font-semibold text-xs">
          <button
            onClick={() => handleClick("Tümü")}
            className="border border-gray-200 px-2 py-2 rounded-lg hover:text-orange-500 hover:border-orange-500"
          >
            Tümü
          </button>
          <button
            onClick={() => handleClick(0)}
            className="border border-gray-200 px-2 py-2 rounded-lg hover:text-orange-500 hover:border-orange-500"
          >
            Devam Eden Siparişler
          </button>
          <button
            onClick={() => handleClick(1)}
            className="border border-gray-200 px-2 py-2 rounded-lg hover:text-orange-500 hover:border-orange-500"
          >
            İadeler
          </button>
          <button
            onClick={() => handleClick(2)}
            className="border border-gray-200 px-2 py-2 rounded-lg hover:text-orange-500 hover:border-orange-500"
          >
            İptaller
          </button>
        </div>

        {list.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 gap-2 rounded-md"
          >
            <div className="flex gap-5 justify-between items-center px-5 py-5 text-xs bg-gray-50">
              <div>
                <p>Sipariş Tarihi</p>
                <p>{item.tarih}</p>
              </div>
              <div>
                <p>Sipariş Özeti</p>
                <p>{item.özet}</p>
              </div>
              <div>
                <p>Alıcı</p>
                <p>{item.alici}</p>
              </div>
              <div>
                <p>Tutar</p>
                <p>{item.tutar}</p>
              </div>
              <div className="flex items-center">
                <button className="text-white bg-orange-500 flex py-4 text-xs  items-center justify-center h-5 px-16 rounded-md">
                  Sipariş Detayı
                </button>
              </div>
            </div>
            <div className="border-b border-gray-200"></div>
            <div className="border mx-5 my-5 rounded-sm px-5 py-5 border-gray-400 flex justify-between">
              <div className="text-xs">
                <p className="text-green-600">Teslim Edildi</p>
                <p>1 ürün 19 Temmuz tarihinde teslim edilmiştir.</p>
              </div>
              <Image src={item.image} width={50} height={50}></Image>

              <div className="flex items-center">
                <button className="text-orange-600 border border-orange-600  flex py-4 text-xs  items-center justify-center h-5 px-16 rounded-sm">
                  İade Talebi
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default siparis;
