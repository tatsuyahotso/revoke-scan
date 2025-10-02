"use client";
import React, { useState, useEffect } from "react";
import SearchComponent from "./Search";
import { ButtonIcon } from "./ButtonIcon";
import { FaGasPump } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  const [ethPrice, setEthPrice] = useState<{
    price: string;
    change: string;
    color: string;
  } | null>(null);
  const [gasPrice, setGasPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchEthPriceAndGas = async () => {
      try {
        const response = await axios.get("https://api.etherscan.io/api", {
          params: {
            module: "stats",
            action: "ethprice",
            apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
          },
        });

        if (response.data.status === "1") {
          const ethPriceNow = parseFloat(response.data.result.ethusd);
          const ethPrice24hAgo =
            ethPriceNow / (1 + parseFloat(response.data.result.ethbtc));

          if (
            !isNaN(ethPriceNow) &&
            !isNaN(ethPrice24hAgo) &&
            ethPrice24hAgo !== 0
          ) {
            const change = (
              ((ethPriceNow - ethPrice24hAgo) / ethPrice24hAgo) *
              100
            ).toFixed(2);
            const sign = parseFloat(change) >= 0 ? "+" : "";
            const color = parseFloat(change) >= 0 ? "#00A186" : "#F44336";

            setEthPrice({
              price: `$${ethPriceNow.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`,
              change: `(${sign}${change}%)`,
              color,
            });
          }
        }

        const gasResponse = await axios.get("https://api.etherscan.io/api", {
          params: {
            module: "gastracker",
            action: "gasoracle",
            apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
          },
        });

        if (gasResponse.data.status === "1") {
          const gasPriceGwei = parseFloat(
            gasResponse.data.result.ProposeGasPrice
          ).toFixed(3);
          setGasPrice(`${gasPriceGwei} Gwei`);
        }
      } catch (error) {
        console.error("Error fetching Ethereum price or gas price:", error);
      }
    };

    fetchEthPriceAndGas();
    const interval = setInterval(fetchEthPriceAndGas, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky py-2 p-4 lg:px-8 xl:px-64 border-b flex items-center justify-between">
      <div className="md:flex items-center gap-4 text-sm hidden ">
        {ethPrice && (
          <p className="text-gray-600 text-xs">
            ETH Price:{" "}
            <span className="text-blue-600">
              {ethPrice.price}{" "}
              <span style={{ color: ethPrice.color }}>{ethPrice.change}</span>
            </span>
          </p>
        )}

        {gasPrice && (
          <div className="flex items-center gap-2 text-xs">
            <FaGasPump className="text-gray-400" size={13} />
            <p className="text-gray-600 text-xs">
              Gas:{" "}
              <Link
                href="https://etherscan.io/gastracker"
                className="text-blue-600"
              >
                {gasPrice}
              </Link>
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 w-full md:w-fit">
        <SearchComponent placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" />
        <ButtonIcon />
      </div>
    </div>
  );
};

export default Header;
