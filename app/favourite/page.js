import React from "react";
import Menu from "../../components/menu";
import Header from "../../components/Header";
import Favori from "../../components/favori";
import Siparis from "../../components/siparis";
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
export default function Favourite() {
  return (
    <>
      <div>
        <Header />
        <Favori products={products} />
      </div>
    </>
  );
}
