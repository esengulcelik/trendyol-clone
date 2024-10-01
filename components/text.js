import Link from "next/link";
import React from "react";
const products = [
  "iPhone 15",
  "Flo",
  "Watsons",
  "GS Store",
  "Airfryer",
  "Dyson Süpürge",
  "Stanley Termos",
  "Koltuk Takımı",
  "Kurutma Makinesi",
  "Playstation 5",
  "Kuzine Soba",
  "Aura Cleanmax",
  "Arçelik Bulaşık Makinesi",
  "Pandora",
  "Zara",
  "Sweatshirt",
  "Philips Airfryer",
  "Decathlon",
  "IKEA",
  "Siemens Bulaşık Makinesi",
  "Gant",
  "Under Armour",
  "Bambi Yatak",
  "Baget Yüzük",
  "Adidas Samba",
  "Atasay",
  "Bargello",
  "Cep Telefonu",
  "UGG",
  "Nike Air Force",
];
const Text = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl mt-5">
        <div>
          <h1 className="text-lg font-semibold mb-5">
            Bunlar da İlginizi Çekebilir
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 mb-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="border-2 px-3 hover:border-orange-500 hover:text-orange-500 rounded-3xl text-xs  py-2  "
            >
              <Link href="/">
                <p className="flex justify-center">{product}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-300 pb-2"></div>
        <div className="p-5">
          <p className="font-semibold text-xl mb-3">
            Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!
          </p>
          <div className="text-xs leading-loose">
            <div>
              <h3> Tüm İhtiyaçlarınız İçin Tek İhtiyacınız Trendyol!</h3>
              <p>
                Türkiye’nin önemli online alışveriş adreslerinden biri olan
                Trendyol, 2010 yılında modayı herkes için ulaşılabilir kılmak
                amacıyla kuruldu. Giyimden aksesuara, ayakkabıdan kozmetiğe
                kadar pek çok ürünle beğeni kazanır. Firma, gelişen pazar
                hacminde büyük söz sahibi olur. Hem farklı zevklere hem de
                bütçelere hitap eder. Kolay ve güvenli bir deneyim sunar. Üst ve
                alt giyim kategorilerinde çeşitli modeller hazırlanır. Bu
                koleksiyonlar uygun fiyat avantajıyla sunulur. Her mevsime uygun
                ürün seçenekleri bulunur. Kışlık seçimlerde kazak, mont, hırka,
                ceket gibi ürünleri baskındır. Yaz kombinlerinde renkli ve sade
                tişört modelleri sıklıkla kullanılır. İnce kumaştan üretilen
                jeanlar ve kapriler de yine yaz ayları için ideal bir seçimler
                olarak değerlendirilir. Yaz tatili için de bikini takımlarından
                satın alabiliriz. Geniş beden aralığı sayesinde istediğimiz
                ürünü tercih edebiliriz.
              </p>
            </div>
            <div>
              <h3>Modern Tasarımlarıyla Dikkat Çeken Trendyol Markaları</h3>
              <p>
                {" "}
                Türkiye’nin önemli online alışveriş adreslerinden biri olan
                Trendyol, 2010 yılında modayı herkes için ulaşılabilir kılmak
                amacıyla kuruldu. Giyimden aksesuara, ayakkabıdan kozmetiğe
                kadar pek çok ürünle beğeni kazanır. Firma, gelişen pazar
                hacminde büyük söz sahibi olur. Hem farklı zevklere hem de
                bütçelere hitap eder. Kolay ve güvenli bir deneyim sunar. Üst ve
                alt giyim kategorilerinde çeşitli modeller hazırlanır. Bu
                koleksiyonlar uygun fiyat avantajıyla sunulur. Her mevsime uygun
                ürün seçenekleri bulunur. Kışlık seçimlerde kazak, mont, hırka,
                ceket gibi ürünleri baskındır. Yaz kombinlerinde renkli ve sade
                tişört modelleri sıklıkla kullanılır. İnce kumaştan üretilen
                jeanlar ve kapriler de yine yaz ayları için ideal bir seçimler
                olarak değerlendirilir. Yaz tatili için de bikini takımlarından
                satın alabiliriz. Geniş beden aralığı sayesinde istediğimiz
                ürünü tercih edebiliriz.
              </p>
            </div>
            <div>
              <h3>Trendyol Müşterilerine Özel Ayrıcalıklı Uygulamalar</h3>
              <p>
                {" "}
                Türkiye’nin önemli online alışveriş adreslerinden biri olan
                Trendyol, 2010 yılında modayı herkes için ulaşılabilir kılmak
                amacıyla kuruldu. Giyimden aksesuara, ayakkabıdan kozmetiğe
                kadar pek çok ürünle beğeni kazanır. Firma, gelişen pazar
                hacminde büyük söz sahibi olur. Hem farklı zevklere hem de
                bütçelere hitap eder. Kolay ve güvenli bir deneyim sunar. Üst ve
                alt giyim kategorilerinde çeşitli modeller hazırlanır. Bu
                koleksiyonlar uygun fiyat avantajıyla sunulur. Her mevsime uygun
                ürün seçenekleri bulunur. Kışlık seçimlerde kazak, mont, hırka,
                ceket gibi ürünleri baskındır. Yaz kombinlerinde renkli ve sade
                tişört modelleri sıklıkla kullanılır. İnce kumaştan üretilen
                jeanlar ve kapriler de yine yaz ayları için ideal bir seçimler
                olarak değerlendirilir. Yaz tatili için de bikini takımlarından
                satın alabiliriz. Geniş beden aralığı sayesinde istediğimiz
                ürünü tercih edebiliriz.
              </p>
            </div>
            <div>
              <h3>Modaya Uygun Trend Parçalar</h3>
              <p>
                {" "}
                Türkiye’nin önemli online alışveriş adreslerinden biri olan
                Trendyol, 2010 yılında modayı herkes için ulaşılabilir kılmak
                amacıyla kuruldu. Giyimden aksesuara, ayakkabıdan kozmetiğe
                kadar pek çok ürünle beğeni kazanır. Firma, gelişen pazar
                hacminde büyük söz sahibi olur. Hem farklı zevklere hem de
                bütçelere hitap eder. Kolay ve güvenli bir deneyim sunar. Üst ve
                alt giyim kategorilerinde çeşitli modeller hazırlanır. Bu
                koleksiyonlar uygun fiyat avantajıyla sunulur. Her mevsime uygun
                ürün seçenekleri bulunur. Kışlık seçimlerde kazak, mont, hırka,
                ceket gibi ürünleri baskındır. Yaz kombinlerinde renkli ve sade
                tişört modelleri sıklıkla kullanılır. İnce kumaştan üretilen
                jeanlar ve kapriler de yine yaz ayları için ideal bir seçimler
                olarak değerlendirilir. Yaz tatili için de bikini takımlarından
                satın alabiliriz. Geniş beden aralığı sayesinde istediğimiz
                ürünü tercih edebiliriz.
              </p>
            </div>
            <div>
              <h3>Elektronik Eşyalarda Uygun Fiyatlar</h3>
              <p>
                Ayakkabı & Çanta ürünleri ile günlük kombinlere şıklık katmak
                mümkündür. Sneaker, casual, topuklu ayakkabı, bot, çizme, kol ve
                sırt çantası modelleri başta olmak üzere geniş bir tasarım
                yelpazesi oluşturulur. Spor & Outdoor kategorisinde yer alan
                parçalar da aynı şekilde sahip oldukları çeşitlilikle dikkat
                çekerler. Giyim eşyaları ve ekipmanlar farklı başlıklar altında
                gruplandırılır. Yapılan gruplandırmada hedef kitlenin
                özellikleri belirleyici kriter olarak kabul edilir. İlgili
                kategoride farklı markaların ürünlerinin olması öncelikle seçim
                kolaylığı sağlar. Sonraki aşamada ise farklı bütçelere hitap
                edilmesini destekler. Karar aşamasında kişinin üründen ne
                beklediğini belirlemesi gerekir. Ayrıca kaliteli markaların
                tercih edilmesi, kullanım konforu açısından önemlidir. Üretim
                aşamasında seçilen malzemelerin, tasarım çizgilerinin ve
                işçiliğin göz önüne alınması tavsiye edilir. Nitelikli ürün
                seçimi sayesinde kullanım konforu yükselir. Hem kendiniz hem de
                sevdikleriniz için tercihinizi rahat, şık ve kaliteli
                modellerden yana kullanabilirsiniz.
              </p>
            </div>
            <div>
              <h3>En Yeni Ürünlerle İlginizi Çekebilecek Kategoriler</h3>
              <p>
                22 Ayar Bilezik | Akıllı Saat | Bluetooth Kulaklık | Telefon |
                Elektrikli Scooter | Laptop | Robot Süpürge | Bisiklet | Çamaşır
                Makinesi | Iphone Xr | Abiye Elbise | Tablet | Erkek Mont |
                Xiaomi Redmi Note 8 | Spor Ayakkabı | Çalışma Masası | Buzdolabı
                | Kulaklık | Protein Tozu | Blazer Ceket
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
