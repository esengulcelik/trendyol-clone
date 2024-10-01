import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Populer from "../components/populer";
import Carousel from "../components/carousel";
import Card from "../components/card";
import Text from "../components/text";
import Flas from "../components/flas";
import Coksatan from "../components/coksatan";
import Avantaj from "../components/avantaj";

export default function Home() {
  const products = [
    {
      id: 1,
      image: "/images/hccare.PNG",
      name: "HC Care ",
      rating: 4.6,
      reviews: 44838,
      price: "609 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 2,
      image: "/images/bioxcin.PNG",
      name: "HC Care ",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 3,
      image: "/images/ceel.PNG",
      name: "HC Care ",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 4,
      image: "/images/elbise.PNG",
      name: "HC Care ",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 5,
      image: "/images/hccare.PNG",
      name: "HC Care",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 4,
      image: "/images/elbise.PNG",
      name: "HC Care",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
    {
      id: 5,
      image: "/images/hccare.PNG",
      name: "HC Care ",
      rating: 4.6,
      reviews: 44838,
      price: "599 TL",
      fastDelivery: true,
      free: true,
      best: true,
    },
  ];
  return (
    <div>
      <Header />
      <Carousel />
      <Populer products={products} />
      <Flas products={products} />
      <Coksatan products={products} />
      <Avantaj products={products} />
      <Card />
      <Text />
      <div className="border-b border-gray-300 pb-2"></div>
      <Footer />
    </div>
  );
}
