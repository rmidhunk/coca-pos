import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "@/context";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(StateContext);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navItems = [
    {
      name: "Home",
      variant: "default",
      link: "/",
      className: "bg-background-black",
    },
    { name: "Features", variant: "ghost" },
    { name: "Pricing", variant: "ghost" },
    { name: "Blog", variant: "ghost" },
    { name: "Resource", variant: "ghost" },
  ];

  const getInitials = (displayName) => {
    if (!displayName) return "";
    const nameParts = displayName.trim().split(" ");

    if (nameParts.length === 0) return "";

    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    const firstInitial = nameParts[0].charAt(0);
    const lastInitial = nameParts[nameParts.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  const UserDisplay = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="h-8 w-8 hover:opacity-80 transition-opacity">
            <AvatarImage
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt={user?.displayName}
            />
            <AvatarFallback className="uppercase">
              {getInitials(user?.displayName)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56 mr-2 p-2"
          align="end"
          sideOffset={8}
        >
          <div className="flex flex-col px-2 py-1.5">
            <span className="text-sm font-medium">{user?.displayName}</span>
            <span className="text-xs text-gray-500">{user?.email}</span>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-2 text-red-600 focus:text-red-600 cursor-pointer"
            // onClick={onSignOut}
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="shrink-0 cursor-pointer" onClick={() => navigate("/")}>
        <img src="/coca-black-logo.svg" alt="Coca Logo" />
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
                onClick={() => navigate(item?.link)}
              >
                {item?.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="justify-end">
          {user?.displayName ? (
            <UserDisplay />
          ) : (
            <Button
              variant="outline"
              className="border-primary-orange text-primary-orange hover:text-primary-orange"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          )}
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