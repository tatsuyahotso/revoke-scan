import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { RxExternalLink } from "react-icons/rx";

interface FooterProps {
  toggleRevoke: () => void;
}

const Footer: React.FC<FooterProps> = ({ toggleRevoke }) => {
  return (
    <footer className="lg:px-8 xl:px-64 p-4  bg-gray-100 py-6 text-sm  relative ">
      <div className="flex items-center justify-between pb-6">
        <Link
          href="https://www.scansignature.com/tokenapprovalchecker"
          className="flex items-center gap-1 hover:text-[#0784C3] cursor-pointer"
        >
          <FaXTwitter />
          <h1>(Twitter)</h1>
        </Link>

        <Link
          href="https://www.scansignature.com/tokenapprovalchecker"
          className="flex items-center gap-1 hover:text-[#0784C3] cursor-pointer"
        >
          <LuArrowUpToLine />
          <h1>Back to Top</h1>
        </Link>
      </div>

      <div className="mx-auto flex lg:flex-row flex-col basis-full   gap-6 py-8 border-t border-gray-200 ">
        <div className="basis-[40%]">
          <p className="flex items-center gap-2">
            <Image src="/eth.svg" width={25} height={25} alt="ethereum" />
            <span className="text-lg hover:text-[#538096] cursor-pointer group relative flex items-center gap-1">
              Powered by Ethereum
              <RxExternalLink
                className="text-gray-500 hidden group-hover:inline-block ml-1"
                size={13}
              />
            </span>
          </p>

          <p className="mt-4 text-sm">
            Scan Signature is a Block Explorer and Analytics Platform for
            Ethereum 2.0.
          </p>
          <button className="mt-4 cursor-pointer bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md flex items-center text-xs duration-300 ease-in-out">
            <span className="mr-2">
              <Image
                src="/metamask.svg"
                width={20}
                height={20}
                alt="metamask"
              />
            </span>{" "}
            Add Ethereum Mainnet Network
          </button>
        </div>

        <div className="md:flex-row flex-col gap-8 flex md:basis-full ">
          <div className="basis-[20%] md:basis-full ">
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <button
                  className="hover:text-[#0784C3] cursor-pointer duration-100 ease-in-out text-[#081D35] "
                  onClick={toggleRevoke}
                >
                  Delegate to Scan Signature{" "}
                  <span className="bg-[#0784C3] ml-1 text-white text-[11px] px-2 py-1 font-medium rounded-full">
                    Staking
                  </span>
                </button>
              </li>
              <li>
                <a
                  href="https://etherscan.io/brandassets"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Brand Assets
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/contactus"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/terms"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Terms & Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/bugbounty"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] flex items-center gap-1"
                >
                  Bug Bounty <RxExternalLink className="text-gray-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="basis-[20%]  md:basis-full ">
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://docs.etherscan.io/etherscan-v2"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://info.etherscan.com/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.freshstatus.io/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Network Status
                </a>
              </li>
              <li>
                <a
                  href="https://www.scansignature.com/tokenapprovalchecker"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Scan Signature <RxExternalLink className="text-gray-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="basis-[20%]  md:basis-full">
            <h3 className="font-semibold">Products & Services</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://etherscan.io/contactusadvertise"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Advertise <RxExternalLink className="text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/eaas"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Explorer as a Service (EaaS){" "}
                  <RxExternalLink className="text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/apis"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  API Plans <RxExternalLink className="text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/priority-support"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Priority Support
                </a>
              </li>
              <li>
                <a
                  href="https://blockscan.com/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Blockscan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex lg:items-center items-start md:flex-row flex-col justify-between border-t pt-4 lg:text-sm text-xs gap-1 ">
        <p>
          Scan Signature © 2025 | ⛏️ Built by Team{" "}
          <span className="text-[#0784C3] font-semibold">Etherscan</span>
        </p>
        <p>
          Donations:{" "}
          <span className="text-[#0784C3] lg:text-sm text-xs">
            0x71c765...d8976f
          </span>{" "}
          ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
