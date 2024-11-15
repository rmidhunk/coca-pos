import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Home", variant: "default", className: "bg-background-black" },
    { name: "Features", variant: "ghost" },
    { name: "Pricing", variant: "ghost" },
    { name: "Blog", variant: "ghost" },
    { name: "Resource", variant: "ghost" },
  ];

  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="shrink-0">
        <img src="/coca-logo.svg" alt="Coca Logo" />
      </h1>

      <nav>
        <ul className="hidden md:flex space-x-4 bg-background-blue rounded-full p-1">
          {navItems.map((item) => (
            <li key={item?.name}>
              <Button
                variant={item?.variant}
                className={cn("px-6 py-2.5", item?.className)}
              >
                {item?.name}
              </Button>
            </li>
          ))}
        </ul>

        <ul
          className={cn(
            `md:hidden absolute top-16 left-0 right-0 bg-background-blue rounded-lg p-4 space-y-4`,
            isMobileMenuOpen ? "block" : "hidden",
          )}
        >
          {navItems.map((item) => (
            <li key={item?.name}>
              <Button
                variant={item?.variant}
                className={cn("w-full text-left", item?.className)}
              >
                {item?.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="justify-end">
          <Button
            variant="outline"
            className="border-primary-orange text-primary-orange hover:text-primary-orange"
          >
            Sign In
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            <span
              className={cn(
                "block w-6 h-1 rounded-full bg-black mb-1 transition-all",
                isMobileMenuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "block w-6 h-1 rounded-full bg-black mb-1 transition-all",
                isMobileMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block w-6 h-1 rounded-full bg-black transition-all",
                isMobileMenuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
