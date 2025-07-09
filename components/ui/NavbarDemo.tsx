"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/ResizableNavbar";
import { useState, useEffect } from "react";
import LoginComponent from "./LoginComponent";
import { UserSchema, User } from "@/app/types/user";
import { authClient } from "@/app/lib/auth-client";
import ProfileDropdown from "./ProfileDropdown";


export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      try {
        const session = await authClient.getSession();

        if (session && session.data && session.data.user) {
          const validatedUser = UserSchema.safeParse(session.data.user);
              if (validatedUser.success) {
          setIsLoggedIn(true);
          console.log(validatedUser.data, "validated user");
          setUserData(validatedUser.data);
              }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
    checkAuth();
  }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {isLoggedIn ? (
              <ProfileDropdown userData={userData} />
            ) : (
              <NavbarButton onClick={() => setIsOpen(true)} variant="primary">
                Login
              </NavbarButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {isLoggedIn ? (
                <ProfileDropdown userData={userData} />
              ) : (
                <NavbarButton
                  onClick={() => setIsOpen(true)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
              )}
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
          <LoginComponent setIsOpen={setIsOpen} />
        </div>
      )}
      {/* Navbar */}
    </div>
  );
}
