// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { LOGO_URL, NAV_ITEMS } from "@/data/constants";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-3">
//           <Image
//             src={LOGO_URL}
//             alt="Logo"
//             width={32}
//             height={32}
//             className="h-8"
//             priority
//           />
//           <span className="text-2xl font-sans dark:text-white">NIXENSOFT</span>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
//         >
//           {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </button>

//         {/* Navigation Items */}
//         <div
//           className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border md:border-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
//             {NAV_ITEMS.map((item, index) =>
//               item.subItems ? (
//                 <li key={index} className="relative">
//                   <button
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     className="flex items-center py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:dark:hover:text-blue-500"
//                   >
//                     {item.label} <ChevronDown className="w-4 h-4 ml-2" />
//                   </button>
//                   {dropdownOpen && (
//                     <div className="absolute z-10 mt-2 w-44 bg-white rounded-lg shadow-md dark:bg-gray-700">
//                       <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
//                         {item.subItems.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               href={subItem.href}
//                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
//                             >
//                               {subItem.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               ) : (
//                 <li key={index}>
//                   <Link
//                     href={item.href}
//                     className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { LOGO_URL, NAV_ITEMS } from "@/data/constants";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={LOGO_URL}
            alt="Logo"
            width={32}
            height={32}
            className="h-8"
            priority
          />
          <span className="text-2xl font-sans dark:text-white">NIXENSOFT</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}
        >
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_ITEMS.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                          {item.subItems.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              href={subItem.href}
                              title={subItem.label}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <ul className="md:hidden flex flex-col space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="w-full">
                {item.subItems ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <ul className="pl-4 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
