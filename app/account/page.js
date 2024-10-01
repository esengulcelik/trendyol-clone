import React from "react";
import Menu from "../../components/menu";
import Header from "../../components/Header";
import Siparis from "../../components/siparis";
export default function Account() {
  return (
    <>
      <div>
        <Header />
        <div className="container flex mx-auto max-w-7xl mt-6 gap-6 mb-10">
          <Menu />
          <Siparis />
        </div>
      </div>
    </>
  );
}
