"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "../../lib/itemMenu";
import { LogOut, Menu, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); 
      router.push('/'); 
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (isMobile) setIsMobileOpen(false);
  }, [pathname, isMobile]);


  const MobileToggleButton = () => (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#cc6237] text-white lg:hidden"
      aria-label="Toggle menu"
      style={{ marginTop: 'env(safe-area-inset-top)' }}
    >
      {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  const MobileCloseButton = () => (
    <button
      onClick={() => setIsMobileOpen(false)}
      className="absolute top-4 right-4 p-1 text-gray-600 hover:text-blue-600"
    >
      <X size={20} />
    </button>
  );

  const NavLinks = () => (
    <nav className="flex flex-col gap-2 bg-[#fff] ">
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider px-2">
       Menu
     </p> 
      {menuItems.map((item) => (
        <Link
          href={item.url ?? "/"}
          key={item.url ?? item.label}
          className={`
            flex items-center gap-2 p-2 rounded-lg transition-colors
            ${pathname === item.url 
              ? 'bg-[#cc6237] text-white font-medium' 
              : 'text-black hover:bg-[#cc6237] hover:text-white'
            }
          `}
          onClick={() => isMobile && setIsMobileOpen(false)}
        >
          <item.icon className="w-5 h-5 flex-shrink-0" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );

  const FooterSection = () => (
  <div className="mt-auto pt-4 ">
    <div className="flex items-center gap-3 px-4 py-2">
      <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#cc6237]">
        <Image
          src="/perfil.png"
          alt="Foto de perfil"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-black">Kaique Steck</p>
        <p className="text-gray-400 text-sm" >Admistrador</p>
      </div>
    </div>
    <div className="flex flex-col mt-2">
      <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#252525] hover:text-[#cc6237] transition-colors cursor-pointer ">
       <User size={16} />
        Alterar dados
      </button>
      <button 
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-sm text-[#252525] hover:text-[#cc6237] cursor-pointer transition-colors">
        <LogOut size={16} />
        Sair
      </button>
    </div>
  </div>
);

  return (
    <>
      {isMobile && <MobileToggleButton />}

      <aside
        className={`
          h-[calc(100vh-env(safe-area-inset-top))] left-0 top-0 sticky p-6 flex flex-col gap-8
          bg-white border-r border-gray-200 shadow-lg
          ${isMobile ? 
            "fixed z-40 w-64 transform transition-transform duration-300 pt-[calc(env(safe-area-inset-top)+16px)]" : 
            ""
          }
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {isMobile && <MobileCloseButton />}

        <Link href="/" onClick={() => isMobile && setIsMobileOpen(false)}>
          <div className="flex justify-center mb-6">
             <Image
              src="/logo.png"
              alt="Logo Tropa Digital"
              width={200}
              height={100}
              priority
              quality={100}
              className="object-contain"
              />
          </div>
        </Link>

        <NavLinks />
        <FooterSection />
      </aside>

      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default LeftSideBar;