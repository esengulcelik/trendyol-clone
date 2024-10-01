import React from "react";
import Menu from "../../components/menu";
import Header from "../../components/Header";
import Comment from "../../components/comment";
export default function Account() {
  return (
    <>
      <div>
        <Header />
        <div className="container flex mx-auto max-w-7xl mt-6 gap-6 mb-10">
          <Menu />
          <Comment />
        </div>
      </div>
    </>
  );
}
