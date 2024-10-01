"use client";
import { useState } from "react";
import Image from "next/image";
ü;
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
const itemsPerPage = 5;
const Flas = ({ products = [] }) => {
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
      <div className="container flex flex-col mx-auto max-w-7xl mb-10">
        <div className="relative bg-orange-50 h-auto bg-gradient-to-b from-orange-600 to-white w-full rounded-lg py-3 px-4">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <BsLightningFill className="text-yellow-300 text-2xl" />
                <p className="text-white text-xl font-semibold">
                  Flaş Ürünler{" "}
                </p>
              </div>
              <div className="flex my-3 gap-1">
                <div className="bg-white rounded-md px-1 py-1">
                  {" "}
                  <p className="font-semibold">00</p>
                </div>{" "}
                <p className="text-white text-xl">:</p>
                <div className="bg-white rounded-md px-1 py-1">
                  {" "}
                  <p className="font-semibold">00</p>
                </div>
                <p className="text-white text-xl">:</p>
                <div className="bg-white rounded-md px-1 py-1">
                  {" "}
                  <p className="font-semibold">00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-white text-xl font-semibold">Tüm Ürünler</p>
              <FaChevronRight className="text-white" />
            </div>
          </div>
          <div className="flex items-center">
            {currentIndex > 0 && (
              <button
                className="absolute -left-4 border-2 shadow-lg shadow-black-500/50 bg-white rounded-full p-3 z-10"
                onClick={prevSlide}
              >
                <FiChevronLeft className="text-black" />
              </button>
            )}
            <div className="overflow-hidden flex w-full">
              <div className="flex gap-8 p-4">
                {products
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border-2 w-60 rounded-lg relative"
                    >
                      <div className="flex justify-center">
                        <div className="z-10 absolute">
                          <Image src={product.image} width={150} height={150} />
                        </div>
                      </div>
                      <div className="z-20 relative text-giant font-bold">
                        <div className="flex justify-between">
                          <div className="flex flex-col w-20 left-0 space-y-2 pl-2 pt-2 ">
                            {product.fastDelivery && (
                              <div className="px-1 flex items-center text-xs gap-1 rounded-lg text-white bg-green-600">
                                <TbTruckDelivery />
                                <p className="text-giant font-bold">
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
                        <div className="flex justify-center mt-20 bg-gradient-to-b from-orange-500 to-yellow-500">
                          <svg
                            width="18"
                            height="15"
                            viewBox="0 0 22 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="icon">
                              <path
                                id="Path Copy 2"
                                d="M11 3.76066e-07C4.939 1.68854e-07 -1.68854e-07 4.939 -3.76066e-07 11C-4.6933e-07 13.728 1.023 16.368 2.838 18.37C2.97 18.513 3.102 18.645 3.245 18.788C3.256 18.799 3.278 18.821 3.3 18.843L3.3 18.854C3.355 18.909 3.421 18.964 3.476 19.008C3.542 19.074 3.60811 19.129 3.663 19.184C4.158 19.635 4.708 20.042 5.28 20.383C5.357 20.427 5.423 20.482 5.5 20.526C5.544 20.548 5.588 20.581 5.632 20.603C5.797 20.691 5.962 20.779 6.138 20.867C6.138 20.867 6.138 20.867 6.149 20.867C6.413 20.999 6.666 21.109 6.93 21.208C6.941 21.219 6.963 21.23 6.974 21.23C7.073 21.274 7.172 21.307 7.271 21.34C7.348 21.384 7.425 21.406 7.502 21.428C7.513 21.428 7.524 21.439 7.535 21.439C8.646 21.813 9.812 22 11 22C12.188 22 13.354 21.813 14.465 21.439C14.4759 21.439 14.487 21.428 14.498 21.428C14.575 21.406 14.652 21.384 14.729 21.34C14.839 21.307 14.938 21.274 15.037 21.23C15.059 21.219 15.07 21.219 15.092 21.208C15.268 21.142 15.4331 21.076 15.598 20.988C15.763 20.9111 15.928 20.834 16.082 20.746C16.896 20.339 17.644 19.811 18.337 19.195C18.458 19.085 18.59 18.964 18.7 18.843C18.722 18.832 18.744 18.81 18.755 18.788C19.03 18.513 19.294 18.2271 19.536 17.93C21.109 15.994 22 13.541 22 11C22 4.939 17.061 5.83278e-07 11 3.76066e-07Z"
                                fill="#FFD75B"
                              />
                              <path
                                id="Path Copy 2_2"
                                d="M11 3.5C6.8675 3.5 3.5 6.8675 3.5 11C3.5 12.86 4.1975 14.66 5.435 16.025C5.525 16.1225 5.615 16.2125 5.7125 16.31C5.72 16.3175 5.735 16.3325 5.75 16.3475L5.75 16.355C5.7875 16.3925 5.8325 16.43 5.87 16.46C5.915 16.505 5.96007 16.5425 5.9975 16.58C6.335 16.8875 6.71 17.165 7.1 17.3975C7.1525 17.4275 7.1975 17.465 7.25 17.495C7.28 17.51 7.31 17.5325 7.34 17.5475C7.4525 17.6075 7.565 17.6675 7.685 17.7275C7.685 17.7275 7.685 17.7275 7.6925 17.7275C7.8725 17.8175 8.045 17.8925 8.225 17.96C8.2325 17.9675 8.2475 17.975 8.255 17.975C8.3225 18.005 8.39 18.0275 8.4575 18.05C8.51 18.08 8.5625 18.095 8.615 18.11C8.6225 18.11 8.63 18.1175 8.6375 18.1175C9.395 18.3725 10.19 18.5 11 18.5C11.81 18.5 12.605 18.3725 13.3625 18.1175C13.3699 18.1175 13.3775 18.11 13.385 18.11C13.4375 18.095 13.49 18.08 13.5425 18.05C13.6175 18.0275 13.685 18.005 13.7525 17.975C13.7675 17.9675 13.775 17.9675 13.79 17.96C13.91 17.915 14.0226 17.87 14.135 17.81C14.2475 17.7576 14.36 17.705 14.465 17.645C15.02 17.3675 15.53 17.0075 16.0025 16.5875C16.085 16.5125 16.175 16.43 16.25 16.3475C16.265 16.34 16.28 16.325 16.2875 16.31C16.475 16.1225 16.655 15.9276 16.82 15.725C17.8925 14.405 18.5 12.7325 18.5 11C18.5 6.8675 15.1325 3.5 11 3.5Z"
                                fill="#F27A1A"
                              />
                              <path
                                id="Path Copy 3"
                                d="M14.0302 14.5323C14.1277 14.8398 14.0152 15.1773 13.7452 15.3648C13.6177 15.4548 13.4677 15.4998 13.3177 15.4998C13.1602 15.4998 12.9951 15.4473 12.8602 15.3423L11 13.9248L9.13986 15.3423C8.87734 15.5448 8.52482 15.5523 8.2548 15.3648C7.98478 15.1773 7.87227 14.8398 7.96978 14.5323L8.69733 12.1624L6.79219 10.7074C6.53717 10.5124 6.43967 10.1824 6.53717 9.87492C6.64218 9.56743 6.9272 9.36493 7.24973 9.36493L9.55989 9.36493L10.2799 7.02499C10.3775 6.71749 10.67 6.5 11 6.5C11.33 6.5 11.6225 6.71749 11.7201 7.02499L12.4401 9.36493L14.7503 9.36493C15.0728 9.36493 15.3578 9.56743 15.4628 9.87492C15.5603 10.1824 15.4628 10.5124 15.2078 10.7074L13.3027 12.1624L14.0302 14.5323Z"
                                fill="#FFD75B"
                              />
                              <path
                                id="Path"
                                d="M11 23.6403C9.01143 23.6403 7.05714 23.2329 5.28571 22.461C4.48571 22.1286 3.72 21.6997 3 21.2173L3 31.1452C3 31.5204 3.20571 31.8635 3.53714 32.0565C3.88 32.2494 4.30286 32.2709 4.65714 32.0994L11 29.1296L17.3429 32.0994C17.5029 32.1744 17.6857 32.2173 17.8571 32.2173C18.0629 32.2173 18.28 32.1637 18.4629 32.0565C18.7943 31.8635 19 31.5204 19 31.1452L19 21.2173C18.28 21.7105 17.5143 22.1286 16.7143 22.461C14.9429 23.2329 12.9886 23.6403 11 23.6403Z"
                                fill="#4278EB"
                              />
                            </g>
                          </svg>
                          <p className="font-bold text-giant text-white">
                            En Çok Satan 1.Ürün
                          </p>
                        </div>
                      </div>
                      <div className="space-y-5 px-3 py-3">
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs">
                              {" "}
                              <strong>{product.name}</strong> Complex Bitkisel
                              Saç Bakım Kompleksi-100ml
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
            {currentIndex + itemsPerPage < products.length && (
              <button
                className="absolute -right-3 border-2 shadow-lg shadow-black-500/50 bg-white rounded-full p-3 z-10"
                onClick={nextSlide}
              >
                <FiChevronRight className="text-black" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flas;
