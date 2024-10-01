import React from "react";
import Link from "next/link";
import { LuInbox } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TfiComment } from "react-icons/tfi";
import { LuTag } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { BiDiamond } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { CiGift } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
ü;

const Menu = () => {
  return (
    <>
      <div className="flex flex-col basis-1/6 gap-3">
        <section className="border border-gray-200 rounded-lg text-sm font-medium px-2 py-2  flex pl-4">
          {" "}
          <p>Esengül çelik </p>
        </section>
        <section className="flex flex-col border border-gray-200 rounded-lg  py-4 gap-3  ">
          <h5 className="font-medium pl-4 text-sm">Siparişlerim</h5>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex flex-col text-xs">
            <Link href="/account" className="account-class">
              <LuInbox className="text-base" /> <span>Tüm Siparişlerim</span>
            </Link>
            <Link href="/comment" className="account-class">
              <MdForwardToInbox className="text-base" />
              <span>Değerlendirmelerim</span>
            </Link>
            <Link href="/" className="account-class">
              <GoCommentDiscussion className="text-base" />
              <span>Satıcı Mesajlarım</span>
            </Link>
            <Link href="/" className="account-class">
              <RiShoppingBag3Line className="text-base" />
              <span>Tekrar Satın Al</span>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-2 border border-gray-200 rounded-lg py-4 pl-4 ">
          <p className="font-semibold flex items-center">
            trendyol <span className="text-gray-600">pass</span>{" "}
            <CiCircleInfo className="text-xs" />
          </p>
          <div className="gap-0.5 text-giant">
            {" "}
            <p>Paketin süresi doldu.</p>
            <p>Bitiş Tarihi: 10.07.2024 17:30</p>
          </div>
        </section>
        <section className="flex flex-col border border-gray-200 rounded-lg py-4 gap-3  ">
          <h5 className="font-medium pl-4 text-sm">Sana Özel</h5>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex flex-col text-xs">
            <Link href="/" className="account-class">
              <LuTag className="text-base" /> <span>İndirim Kuponlarım</span>
            </Link>
            <Link href="/" className="account-class">
              <IoTimeOutline className="text-base" />{" "}
              <span>Önceden Gezdiklerim</span>
            </Link>
            <Link href="/" className="account-class">
              <AiOutlineShop className="text-base" />{" "}
              <span>Takip ettiğim Mağazalar</span>
            </Link>
            <Link href="/" className="account-class">
              <BiDiamond className="text-base" />
              <span>Trendyol Elite</span>
            </Link>
          </div>
        </section>
        <section className="flex flex-col border border-gray-200 rounded-lg  py-4 gap-3  ">
          <h5 className="font-medium pl-4 text-sm">Hizmetlerim</h5>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex flex-col text-xs">
            <Link href="/" className="account-class">
              <TbLayoutGridAdd className="text-base" /> <span>Krediler</span>
            </Link>
            <Link href="/" className="account-class">
              <CiGift className="text-base" />
              <span>
                Şanslı Çekiliş{" "}
                <span className="bg-red-700 rounded-md px-0.5 py-0.5 text-white">
                  Yeni
                </span>
              </span>
            </Link>
            <Link href="/" className="account-class">
              <CiCreditCard1 className="text-base" />
              <span>
                CardFinans Trendyol{" "}
                <span className="bg-red-700 rounded-md px-0.5 py-0.5 text-white">
                  Yeni
                </span>
              </span>
            </Link>
          </div>
        </section>
        <section className="flex flex-col border border-gray-200 rounded-lg py-4 gap-3  ">
          <h5 className="font-medium pl-4 text-sm">Hesabım & Yardım</h5>
          <div className="border-b border-gray-300 w-full"></div>
          <div className="flex flex-col text-xs">
            <Link href="/" className="account-class">
              <CiUser className="text-base" /> <span>Kullanıcı Bilgilerim</span>
            </Link>
            <Link href="/" className="account-class">
              <CiLocationOn className="text-base" />{" "}
              <span>Adres Bilgilerim</span>
            </Link>
            <Link href="/" className="account-class">
              <CiCreditCard1 className="text-base" />{" "}
              <span>Kayıtlı Kartlarım</span>
            </Link>
            <Link href="/" className="account-class">
              <CiBellOn className="text-base" /> <span>Duyuru Tercihlerim</span>
            </Link>
            <Link href="/" className="account-class">
              <CiCircleQuestion className="text-base" /> <span>Yardım</span>
            </Link>
          </div>
        </section>
        <section className="bg-orange-100 gap-2 hover:bg-orange-600 rounded-lg py-4 text-sm flex items-center justify-center">
          <button>
            <div className="flex justify-center">
              <TfiComment className="text-xl text-orange-500" />
            </div>
            <p className="text-orange-600 hover:text-white">
              Trendyol Asistan'a Sor
            </p>
            <p className="text-black hover:text-white">
              7/24 Sorularınızı Cevaplar
            </p>
          </button>
        </section>
      </div>
    </>
  );
};
export default Menu;
