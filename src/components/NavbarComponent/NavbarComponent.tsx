"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navbarData, navbarDataWithProfile } from "@/data/navbar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useGetUserDetailQuery } from "@/redux/service/user";
import { FaUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { SiMicrodotblog } from "react-icons/si";
import { TbScan } from "react-icons/tb";
import { IoLogOutSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IoSunny, IoMoon } from "react-icons/io5";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function NavbarComponent() {
  const router = useRouter();

  const [userUUID, setUserUUID] = useState("");

  useEffect(() => {
    setUserUUID(localStorage.getItem("userUUID") || "");
  });

  const { data: userData } = useGetUserDetailQuery({ uuid: userUUID });
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST + "/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(() => {
        localStorage.clear();
        setUserUUID("");
        router.push("/");
      })
      .catch((error) => {
        console.error("Refresh Token error:", error);
      });
  };

  const isRender =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forget-password" ||
    pathname === "/newpassword" ||
    pathname === "/newpassword" ||
    pathname === "/verify";

  return (
    <nav className="w-full mx-auto z-40 backdrop-blur-2xl sticky top-0">
      <div className="w-[90%] mx-auto ">
        {!isRender && (
          <section className="flex text-text_color_light dark:text-text_color_dark justify-between items-center p-4">
            {/* logo */}
            <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
            {/* content navbar */}
            <div className="hidden lg:block ">
              <ul className="flex w-[500px]  text-text_body_16  justify-between">
                {navbarData.map((item, index: number) => (
                  <Link key={index} href={item.link}>
                    {pathname === item.link ? (
                      <p className="text-secondary_color">{item?.name}</p>
                    ) : (
                      <p>{item.name}</p>
                    )}
                  </Link>
                ))}
              </ul>
            </div>
            {/* group icon and sign in */}
            <div className="flex justify-center h-full items-center">
              <div className="flex items-center space-x-4">
                {/* Icon to change theme */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center px-2 rounded-md transition-colors"
                >
                  {theme === "dark" ? (
                    <IoSunny className="h-5 w-5 text-text_color_dark" />
                  ) : (
                    <IoMoon className="h-5 w-5 " />
                  )}
                </button>
                {/* Sign in button */}
                {userUUID === "" ? (
                  <Link
                    href="/login"
                    className="text-text_color_dark bg-background_dark_mode dark:bg-background_light_mode dark:text-text_color_light rounded-tl-[20px] rounded-br-[20px] text-text_body_16  px-4 lg:px-5 py-2 lg:py-2.5 hidden lg:block"
                  >
                    Sign in
                  </Link>
                ) : (
                  <Menubar className="hidden md:block md:w-full md:h-full">
                    <MenubarMenu>
                      <MenubarTrigger>
                        <div className="  w-[40px] h-[40px] overflow-hidden rounded-full">
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}${userData?.data?.profile}`}
                            alt="Logo"
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                            onError={(e) => (e.currentTarget.src = '/images/default-profile.jpg')}
                          />
                        </div>
                      </MenubarTrigger>
                      <MenubarContent className="absolute -left-[295px]  w-[350px] p-5 rounded-[10px] border-none  bg-card_color_light dark:bg-background_dark_mode">
                        <p className="text-text_color_light text-text_body_16 dark:text-text_color_dark">
                          {userData?.data?.name}
                        </p>
                        <p className="text-text_color_desc_light text-[14px] dark:text-text_color_dark">
                          {userData?.data?.email}
                        </p>
                        <hr className="my-5" />
                        {/* Profile */}
                        <button onClick={()=> router.push("/myProfile")} className="p-3 my-3 flex w-full justify-between items-center text-center ">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-6 h-6">
                              <FaUser className="w-full h-full text-text_title_20" />
                            </div>
                            <p className="mx-5 text-text_body_16">My Profile</p>
                          </div>
                          <div>
                            <IoIosArrowUp className="rotate-90" />
                          </div>
                        </button>

                        {/* Blog History */}
                        <button onClick={()=> router.push("/blogHistory")} className="p-3 my-3    flex w-full justify-between items-center text-center">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-6 h-6">
                              <SiMicrodotblog className="w-full h-full text-text_title_20" />
                            </div>
                            <p className="mx-5 text-text_body_16">
                              Blog History
                            </p>
                          </div>
                          <div>
                            <IoIosArrowUp className="rotate-90" />
                          </div>
                        </button>

                        {/* Scan History */}
                        <button onClick={()=> router.push("/scanHistory")} className="p-3 my-3 flex w-full justify-between items-center text-center">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-6 h-6">
                              <TbScan className="w-full h-full text-text_title_20" />
                            </div>
                            <p className="mx-5 text-text_body_16">
                              Scan History
                            </p>
                          </div>
                          <div>
                            <IoIosArrowUp className="rotate-90" />
                          </div>
                        </button>

                        {/* Log Out */}
                        <button
                          onClick={() => handleSignOut()}
                          className="p-3 my-3    flex w-full justify-between items-center text-center"
                        >
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-6 h-6">
                              <IoLogOutSharp className="w-full h-full " />
                            </div>
                            <p className="mx-5 text-text_body_16">Log Out</p>
                          </div>
                        </button>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                )}
                {/* menu icon */}
                <div className=" text-[25px] block lg:hidden ">
                  {userUUID === "" ? (
                    <Sheet>
                      <SheetTrigger asChild>
                        <IoMenu />
                      </SheetTrigger>
                      <SheetContent className="bg-background_light_mode dark:bg-background_dark_mode border-hidden">
                        <ul className="  text-text_color_light dark:text-text_color_dark  text-text_body_16  justify-between space-y-4 flex flex-col">
                          {navbarData.map((item, index: number) => (
                            <Link key={index} href={item.link}>
                              {pathname === item.link ? (
                                <p className="text-secondary_color">
                                  {item?.name}
                                </p>
                              ) : (
                                <p>{item.name}</p>
                              )}
                            </Link>
                          ))}
                          <Link href="/login">
                            <p>Sign in</p>
                          </Link>
                        </ul>
                      </SheetContent>
                    </Sheet>
                  ) : (
                    <Sheet>
                      <SheetTrigger asChild>
                        <IoMenu />
                      </SheetTrigger>
                      <SheetContent className="bg-background_light_mode dark:bg-background_dark_mode border-hidden">
                        <ul className="  text-text_color_light dark:text-text_color_dark  text-text_body_16  justify-between space-y-4 flex flex-col">
                          <div className="flex">
                            <div className=" w-[40px] h-[40px] overflow-hidden rounded-full">
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}${userData?.data?.profile}`}
                                alt="Profile"
                                width={50}
                                height={50}
                                className="object-cover w-full h-full"
                                onError={(e) => (e.currentTarget.src = '/images/default-profile.jpg')}
                              />
                            </div>
                            <div className="px-5">
                              <p className="text-text_color_light text-text_body_16 dark:text-text_color_dark">
                                {userData?.data?.name}
                              </p>
                              <p className="text-text_color_desc_light text-[14px] dark:text-text_color_dark">
                                {userData?.data?.email}
                              </p>
                            </div>
                          </div>
                          <hr className="text-text_color_light" />
                          {navbarData.map((item, index: number) => (
                            <Link key={index} href={item.link}>
                              {pathname === item.link ? (
                                <p className="text-secondary_color">
                                  {item?.name}
                                </p>
                              ) : (
                                <p>{item.name}</p>
                              )}
                            </Link>
                          ))}
                          {navbarDataWithProfile.map((item, index: number) => (
                            <Link key={index} href={item.link}>
                              {pathname === item.link ? (
                                <p className="text-secondary_color">
                                  {item?.name}
                                </p>
                              ) : (
                                <p>{item.name}</p>
                              )}
                            </Link>
                          ))}
                          <button
                            onClick={() => handleSignOut()}
                            className="text-start"
                          >
                            Log Out
                          </button>
                        </ul>
                      </SheetContent>
                    </Sheet>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
}
