// "use server";

// import { Button } from "../ui/button";
import { FiUser } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  FaBackward,
  FaLanguage,
  FaSignOutAlt,
  FaTeamspeak,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
// import { getMe } from "@app/client/data/users";
// import Username from "../user/Username";
import { getMe } from "@app/client/data/users";
import { useEffect, useState } from "react";
import { BsPerson, BsPersonBadge } from "react-icons/bs";
import Loader from "./Loader";
import Greeting from "../user/Greeting";

export default function ProfileMenu({ children }) {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function userName() {
      setIsLoading(true);
      try {
        const user = await getMe();
        console.log(user);
        if (!user.error) setUsername(user.firstName);
      } catch (error) {
        return { error: message };
      } finally {
        setIsLoading(false);
      }
    }
    userName();
  }, []);
  // const user = await getMe();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:border-0  active:border-0" asChild>
        <button>
          <FiUser size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-10">
        <DropdownMenuLabel className="text-center font-bold text-md flex gap-3 items-center ">
          <BsPerson
            className="text-color-white p-2 bg-color-secondary rounded-full"
            size={30}
          />

          <span className="text-sm text-[#777777]">{username}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/profile"}>My Account</Link>
            <DropdownMenuShortcut>
              <FaUser />
            </DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-color-body cursor-not-allowed hover:bg-white pointer-events-none">
            Intiate Return
            <DropdownMenuShortcut>
              <FaBackward />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/contact"}>Support</Link>
            <DropdownMenuShortcut>
              <FaTeamspeak />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {!username && (
          <DropdownMenuItem>
            <Link
              href={"/auth/login"}
              className="w-full bg-color-primary p-3 text-white text-base font-medium rounded-md hover:scale-105 transition-all ease-in-out duration-200"
            >
              Login
            </Link>
          </DropdownMenuItem>
        )}
        {username && (
          <DropdownMenuItem className="flex w-full  bg-color-lightest p-3 text-color-dark text-base font-medium rounded-md hover:scale-105 transition-all ease-in-out duration-200 items-center gap-2">
            <FaSignOutAlt />
            <Link href={"/auth/login"} className="">
              Logout
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        {!username && (
          <DropdownMenuItem className="flex  items-center justify-between text-xs">
            <small>No Account Yet?</small>
            <Link
              href={"/auth/register"}
              className="uppercase font-bold underline  "
            >
              register here
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
