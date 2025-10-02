import DropdownMenu from "../components/DropdownMenu";
import { LuCircleUser } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineMenu } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface NavMenuProps {
  toggleRevoke: () => void;
}
const navItems = [
  {
    title: "Blockchain",
    submenus: [
      { name: "Transactions", href: "https://etherscan.io/txs" },
      { name: "Pending Transactions", href: "https://etherscan.io/txsPending" },
      {
        name: "Contract Internal Transactions",
        href: "https://etherscan.io/txsInternal",
      },
      { name: "View Blobs", href: "https://etherscan.io/txsBlobs" },
      { name: "AA Transactions", href: "https://etherscan.io/txsAA" },
      { name: "View Blocks", href: "https://etherscan.io/txsAA" },
      {
        name: "Forked Blocks (Reorgs)",
        href: "https://etherscan.io/blocks_forked",
      },
      { name: "Top Accounts", href: "https://etherscan.io/accounts" },
      {
        name: "Verified Contracts",
        href: "https://etherscan.io/contractsVerified",
      },
    ],
  },
  {
    title: "Tokens",
    submenus: [
      { name: "Top Tokens (BEP-20)", href: "https://etherscan.io/tokens" },
      {
        name: "Token Transfers (BEP-20)",
        href: "https://etherscan.io/tokentxns",
      },
    ],
  },
  {
    title: "NFTs",
    submenus: [
      { name: "Top NFTs", href: "https://etherscan.io/nft-top-contracts" },
      { name: "Top Mints", href: "https://etherscan.io/nft-top-mints" },
      { name: "Latest Trades", href: "https://etherscan.io/nft-trades" },
      { name: "Latest Transfers", href: "https://etherscan.io/nft-transfers" },
      { name: "Latest Mints", href: "https://etherscan.io/nft-latest-mints" },
    ],
  },
  {
    title: "Resources",
    submenus: [
      { name: "Charts & Stats", href: "https://etherscan.io/charts" },
      { name: "Top Statistics", href: "https://etherscan.io/topstat" },
    ],
  },
  {
    title: "Developers",
    submenus: [
      { name: "API Plans", href: "https://etherscan.io/apis" },
      {
        name: "API Documentation",
        href: "https://docs.etherscan.io/etherscan-v2",
      },
      { name: "Code Reader (Beta)", href: "https://etherscan.io/code-reader" },
      { name: "Verify Contract", href: "https://etherscan.io/verifyContract" },
      {
        name: "Similar Contract Search",
        href: "https://etherscan.io/find-similar-contracts",
      },
      {
        name: "Contract Diff Checker",
        href: "https://etherscan.io/contractdiffchecker",
      },
      { name: "Vyper Online Compiler", href: "https://etherscan.io/vyper" },
      { name: "Bytecode to Opcode", href: "https://etherscan.io/opcode-tool" },
      { name: "Broadcast Transaction", href: "https://etherscan.io/pushTx" },
    ],
  },
  {
    title: "More",
    submenus: [
      {
        name: "Token Approvals",
        href: "https://www.scansignature.com/tokenapprovalchecker",
      },
      {
        name: "Input Data Decoder",
        href: "https://etherscan.io/inputdatadecoder",
      },

      { name: "Unit Converter", href: "https://etherscan.io/unitconverter" },
      { name: "CSV Export", href: "https://etherscan.io/exportData" },
      {
        name: "Account Balance Checker",
        href: "https://etherscan.io/balancecheck-tool",
      },
      { name: "Gas Tracker", href: "https://etherscan.io/gastracker" },
      { name: "Node Tracker", href: "https://etherscan.io/nodetracker" },
      { name: "Label Cloud", href: "https://etherscan.io/labelcloud" },
      {
        name: "Domain Name Lookup",
        href: "https://etherscan.io/name-lookup",
      },

      {
        name: "Verified Signature",
        href: "https://etherscan.io/verifiedSignatures",
      },
      {
        name: "Advanced Filter",
        href: "https://etherscan.io/advanced-filter",
      },
    ],
  },
];

const NavMenu: React.FC<NavMenuProps> = ({ toggleRevoke }) => {
  const [activeItem, setActiveItem] = useState<string | null>("More");

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between xl:px-64 shadow-2xl border-b lg:px-8">
        <Link href="https://bscscan.com/">
          <Image src="/logo4.png" width={200} height={200} alt="Logo" />
        </Link>
        <ul className="flex items-center text-sm">
          <Link
            href="/"
            className={`px-3 py-4 mr-2 ${
              activeItem === "Home" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveItem("Home")}
          >
            Home
          </Link>
          <DropdownMenu />
          <li className="mx-3 text-blue-100">|</li>
          <button
            onClick={toggleRevoke}
            className="pr-3 lg:pr-0 py-4 flex items-center gap-1 hover:text-[#0784C3] cursor-pointer"
          >
            <LuCircleUser /> Sign in
          </button>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 ">
        <Link href="https://bscscan.com/">
          <Image src="/logo4.png" width={180} height={180} alt="Logo" />
        </Link>
        <div className="flex items-center gap-3 ">
          <Sheet>
            <Link
              href="https://www.scansignature.com/tokenapprovalchecker"
              className="flex items-center gap-1 text-sm hover:text-[#0784C3] cursor-pointer"
            >
              <LuCircleUser /> Sign in
            </Link>
            <SheetTrigger>
              <div className="border p-1 rounded-md">
                <MdOutlineMenu size={28} className="text-gray-400" />
              </div>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll">
              <SheetHeader>
                <SheetTitle className="mt-8 font-light text-sm">
                  Home
                </SheetTitle>
                <Accordion type="single" collapsible>
                  {navItems.map((item, index) => (
                    <AccordionItem key={index} value={item.title}>
                      <AccordionTrigger
                        className={`font-light ${
                          activeItem === item.title ? "text-[#0784C3]" : ""
                        }`}
                        onClick={() => setActiveItem(item.title)}
                      >
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {item.submenus.map((submenu, subIndex) => (
                            <li key={subIndex} className="py-2">
                              <Link
                                href={submenu.href}
                                className={`hover:text-[#0784C3] font-light ${
                                  activeItem === submenu.name ||
                                  submenu.name === "Token Approvals"
                                    ? "text-[#0784C3]"
                                    : ""
                                }`}
                                onClick={() => setActiveItem(submenu.name)}
                              >
                                {submenu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
