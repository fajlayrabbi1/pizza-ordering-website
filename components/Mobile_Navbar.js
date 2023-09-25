"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Cart_Item from "./Cart_Item";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (showCart || showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart, showNav]);

  return (
    <div>
      <div className={showCart ? "" : "hidden"}>
        <div
          onClick={() => {
            setShowCart(false);
          }}
          className="fixed inset-0 bg-black opacity-40 h-screen w-screen z-10  top-0 right-0"
        ></div>

        <div className="fixed inset-y-0 bg-tertiary z-20 h-screen animate-righttoLeft w-11/12 right-0 top-0">
          <div className="mt-20 w-full">
            <Cart_Item />
          </div>
        </div>
      </div>

      <div className={showNav ? "" : "hidden"}>
        <div
          onClick={() => {
            setShowNav(false);
          }}
          className="fixed inset-0 bg-black opacity-40 h-screen w-screen z-10    top-0"
        ></div>

        <div className="fixed inset-y-0 bg-tertiary z-20 h-screen animate-lefttoRight w-3/4 left-0 top-0">
          <div className="mt-20 p-4 w-full ">
            <div className="w-full h-10">
              <p className="font-bold text-lg">Home</p>
              <hr />
            </div>

            <div className="w-full h-10">
              <p className="font-bold text-lg">Menu</p>
              <hr />
            </div>

            <div className="w-full h-10">
              <p className="font-bold text-lg">About us</p>
              <hr />
            </div>

            <div className="flex mt-14">
              <Image src="/call.png" alt="logo" width={17} height={12} />
              <p className="font-bold ml-2">+997 509 153 849</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-primary fixed shadow-md z-50 sm:hidden">
        <div className="h-full w-full pl-2 pr-5 flex justify-between items-center ">
          {showNav ? (
            <div
              className=""
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffff"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => {
                setShowNav(!showNav);
                setShowCart(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffff"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          <div>
            <Image src="/logo.png" alt="logo" width={190} height={200} />
          </div>

          <div
            className="relative"
            onClick={() => {
              setShowNav(false);
              setShowCart(!showCart);
            }}
          >
            {showCart ? (
              <div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffff"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div>
    
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffff"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            )}
            <div className="h-6 w-6 absolute top-[-7px] right-[-10px] flex justify-center items-center font-bold p-1 bg-secondary rounded-full">
              20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
