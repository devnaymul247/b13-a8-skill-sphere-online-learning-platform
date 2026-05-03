"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const handleSignOut = async () => {
    await authClient.signOut({ callbackURL: "/signin" });
  };

  const UserData = authClient.useSession();
  const user = UserData.data?.user;
  // console.log(user);
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          {/* <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          /> */}
          <FaGraduationCap size={30} />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center justify-between gap-4">
              <p>{user?.name}</p>
              <Avatar className="cursor-pointer">
              <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button onClick={handleSignOut} variant="danger-soft">Sign Out</Button>
            </div>
          ) : (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
              <li>
                <Link href={"/signup"}><Button className="bg-linear-to-r from-pink-500 bg-red-500">SignUp</Button></Link>
              </li>
            </ul>)}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;