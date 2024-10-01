import Image from "next/image";
import Link from "next/link";
const cards = [
  { image: "/images/card1.webp" },
  { image: "/images/card2.webp" },
  { image: "/images/card3.webp" },
  { image: "/images/card4.webp" },
  { image: "/images/card5.webp" },
  { image: "/images/card6.webp" },
  { image: "/images/card7.webp" },
  { image: "/images/card8.webp" },
  { image: "/images/card9.webp" },
  { image: "/images/card10.webp" },
  { image: "/images/card1.webp" },
  { image: "/images/card2.webp" },
  { image: "/images/card3.webp" },
  { image: "/images/card7.webp" },
  { image: "/images/card8.webp" },
  { image: "/images/card9.webp" },
  { image: "/images/card10.webp" },
  { image: "/images/card1.webp" },
  { image: "/images/card2.webp" },
  { image: "/images/card3.webp" },
  { image: "/images/card9.webp" },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const Card = () => {
  const rows = chunkArray(cards, 3);
  return (
    <>
      <div className="container mx-auto max-w-7xl mt-10">
        <div className="flex flex-col gap-6 items-center">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-10">
              {row.map((cards, cardsIndex) => (
                <Link key={cardsIndex} href="/">
                  <Image
                    src={cards.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
