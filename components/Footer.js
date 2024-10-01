import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const brands = [
  "Penti",
  "Mango",
  "Vivense",
  "Watsons",
  "English Home",
  "Bershka",
  "Stradivarius",
  "The North Face",
  "Beymen",
  "Columbia",
  "Samsung",
  "Lumberjack",
  "Puma",
  "Mudo",
  "Derimod",
  "Apple",
  "New Balance",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "Monster Notebook",
  "Birkenstock",
  "Arçelik",
  "DYSON",
  "Adidas",
  "Nike",
  "Skechers",
  "Lacoste",
  "Avva",
  "Under Armour",
  "Madame Coco",
  "Pull & Bear",
  "Koton",
  "Defacto",
  "Mavi",
  "Pierre Cardin",
  "Tchibo",
  "Farmasi",
  "Helly Hansen",
  "Network",
  "Bosch",
  "Karaca",
  "Kiğılı",
  "Migros",
  "CAT",
];
const populer = [
  "Bluetooth Kulaklık",
  "iPhone",
  "Samsung Cep Telefonu",
  "Azerbaycan'dan Alışveriş",
  "Nike Air Max",
  "Robot Süpürge",
  "Laptop",
  "iPhone 15",
  "Soba & Isıtıcı",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "Apple Watch",
  "Çamaşır Makinesi",
  "Bulaşık Makinesi",
  "Buzdolabı",
  "Öğrencilere Vergisiz Telefon",
  "Öğrencilere Vergisiz Laptop",
  "E-İhracat",
  "Sırt Çantası",
  "Apple Watch Series 9",
  "Termos",
  "Kadın Mont",
  "Erkek Mont",
  "Sınav Hazırlık ve Test Kitapları",
  "Televizyon",
  "Kahve Makinesi",
  "Kitap",
  "Sneaker",
  "Oyuncu Koltuğu",
  "Elbise",
  "Popüler Aramalar",
  "Popüler Kategoriler",
  "Dyson Airwrap",
  "Apple Airpods",
  "Roman, Hikaye ve Edebiyat Kitapları",
  "Trendyol Blog",
  "Markalar",
  "Macbook",
  "Trendyol Romanian",
  "Trendyol Czech",
  "Trendyol English",
  "Trendyol Slovak",
  "Trendyol Arabic",
  "Trendyol Deutsch",
];
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const chunkArraytwo = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Footer = () => {
  const columns = chunkArray(brands, 15);
  const columnspopuler = chunkArraytwo(populer, 15);
  return (
    <footer className="min-h-screen">
      <div className="flex container mx-auto max-w-7xl justify-center gap-10 text-xs whitespace-nowrap mb-10 mt-10">
        <div>
          <p className="text-2xl font-normal mb-4">
            Popüler Marka ve Mağazalar
          </p>
          <div className="flex flex-wrap gap-20">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col space-y-2 w-1/5">
                {column.map((brand, brandIndex) => (
                  <Link key={brandIndex} href="/">
                    <p className="text-black hover:text-orange-600">{brand}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className="text-2xl font-normal mb-4">Popüler Sayfalar</p>
          </div>
          <div className="flex flex-wrap gap-20">
            {columnspopuler.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col space-y-2 w-1/5">
                {column.map((populer, populerIndex) => (
                  <Link key={populerIndex} href="/">
                    <p className="text-black hover:text-orange-600">
                      {populer}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <div className="flex justify-center gap-28 text-white container py-16 mx-auto max-w-7xl">
          <div>
            <div className="space-y-6">
              <div>
                <Link href="/">Trendyol</Link>
              </div>
              <ul className="space-y-4 text-xs">
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Biz Kimiz
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Kariyer
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      İletişim
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Trendyol'da Satış Yap
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className=" space-y-4">
                <li>
                  <p className="font-bold">Güvenli Alışveriş</p>
                </li>
                <li>
                  <div className="flex gap-4">
                    <Image src="/images/troy.png" width={50} height={50} />
                    <Image
                      src="/images/mastercard.png"
                      width={50}
                      height={50}
                    />
                    <Image src="/images/visa.png" width={50} height={50} />
                    <Image src="/images/american.png" width={50} height={50} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <Link href="/">About us</Link>
              </div>
              <ul className="space-y-4 text-xs">
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Who we are
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Careers
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Contact us
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Sustainability
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className="space-y-4">
                <li>
                  <p className="font-bold">Mobil Uygulamalar</p>
                </li>
                <li>
                  <div className="flex flex-col gap-4">
                    <Image
                      src="/images/appstore.png"
                      width={100}
                      height={100}
                    />
                    <Image src="/images/Google.png" width={100} height={100} />
                    <Image
                      src="/images/appgallery.png"
                      width={100}
                      height={100}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <Link href="/">Kampanyalar</Link>
              </div>
              <ul className="space-y-4 text-xs">
                <li>
                  <Link href="/">
                    <p className="hover:underline  hover:text-orange-600 font-medium">
                      Aktif Kampanyalar
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline  hover:text-orange-600 font-medium">
                      Elite Üyelik
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline  hover:text-orange-600 font-medium">
                      Hediye Fikirleri
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline  hover:text-orange-600 font-medium">
                      Trendyol Fırsatları
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className="space-y-4">
                <li>
                  <p className="font-bold">Sosyal Medya</p>
                </li>
                <li>
                  <div className="flex gap-2">
                    <Link
                      href="/"
                      className="bg-white hover:bg-blue-600 text-black rounded-full px-2 py-2"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/"
                      className="bg-white hover:bg-red-600 text-black rounded-full px-2 py-2"
                    >
                      <AiFillInstagram />
                    </Link>
                    <Link
                      href="/"
                      className="bg-white hover:bg-blue-600 text-black rounded-full px-2 py-2"
                    >
                      <FaXTwitter />
                    </Link>
                    <Link
                      href="/"
                      className="bg-white hover:bg-red-600 text-black rounded-full px-2 py-2"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <Link href="/">Yardım</Link>
              </div>
              <ul className="space-y-4 text-xs">
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Sıkça Sorulan Sorular
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Canlı Yardım
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline  hover:text-orange-600 font-medium">
                      İşlem Rehberi
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:underline hover:text-orange-600 font-medium">
                      Nasıl İade Edebilirim?
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <ul className="space-y-4">
                <li>
                  <button className="border-2 font-bold rounded-md text-xs px-1 py-1">
                    Ülke Değiştir
                  </button>
                </li>
                <li>
                  <div className="flex gap-4">
                    <Image src="/images/troy.png" width={50} height={50} />
                    <Image
                      src="/images/mastercard.png"
                      width={50}
                      height={50}
                    />
                    <Image src="/images/visa.png" width={50} height={50} />
                    <Image src="/images/american.png" width={50} height={50} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 py-2 text-white text-xs mt-10 ">
          <div className="container mx-auto max-w-7xl flex justify-between gap-16">
            <div>
              {" "}
              <p>
                ©2024 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı
                Saklıdır.
              </p>
            </div>
            <div className="flex gap-10 font-medium">
              <Link href="/">Çerez Tercihleri</Link>
              <Link href="/">KVK ve Gizlilik Politikası</Link>
              <Link href="/">DSM Grup</Link>
              <Link href="/">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
