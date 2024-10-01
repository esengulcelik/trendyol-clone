import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
const categories = [
  "Kadın",
  "Erkek",
  "Anne & Çocuk",
  "Ev & Yaşam",
  "Süpermarket",
  "Kozmetik",
  "Ayakkabı & Çanta",
  "Elektronik",
  "Spor & Outdoor",
  "Çok Satanlar",
  "Flaş Ürünler",
];
const Header = () => (
  <header>
    <div className="container mx-auto max-w-7xl">
      <div className="relative">
        <div className="fixed top-0 h-24 space-y-3 bg-white z-50 container mx-auto  max-w-7xl ">
          <div className="flex justify-end gap-5 font-normal mt-2 text-xs text-gray-400">
            <p>İndirim Kuponlarım </p>
            <p>Trendyol'da Satış Yap</p>
            <p>Hakkımızda </p>
            <p>Yardım&Destek</p>
          </div>
          <div className="flex justify-between items-center ">
            <Link href="/" className="font-medium text-4xl">
              trendyol
            </Link>
            <div className="relative flex items-center w-1/2">
              <input
                type="text"
                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                className="p-2 border text-sm rounded pl-5 bg-gray-100 placeholder-gray-500 w-full"
              />
              <IoSearchOutline className="absolute right-2 text-orange-600" />
            </div>
            <div className="flex gap-8 text-xs">
              <Link
                href="/account"
                className="flex gap-1 font-semibold items-center"
              >
                <CiUser className="flex text-xl" />
                <p className="hidden md:block">Giriş Yap</p>
              </Link>
              <Link
                href="/favourite"
                className="flex gap-1 font-semibold items-center"
              >
                <FaRegHeart className="font-bold text-xl" />
                <p className="hidden md:block">Favorilerim</p>
              </Link>
              <div className="flex gap-1 font-semibold items-center">
                <SlBasket className="font-bold text-xl" />
                <p className="hidden md:block">Sepetim</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="overflow-x-auto scrollbar-thin scrollbar-thumb">
          <ul className="flex gap-7 justify-center min-w-full mt-24">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center space-x-1">
                <Link href="/">
                  <p className="text-black hover:underline text-sm hover:text-orange-600 font-medium">
                    {category}
                  </p>
                </Link>
                {(category === "Çok Satanlar" ||
                  category === "Flaş Ürünler") && (
                  <span className=" font-bold bg-red-500 text-white text-xs rounded-full px-1 py-">
                    Yeni
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    <div className="border-b mt-2 w-full"></div>
  </header>
);

export default Header;
