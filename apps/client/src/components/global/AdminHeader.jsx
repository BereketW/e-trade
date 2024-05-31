import Link from "next/link";
import AddProduct from "./AddProduct";
import { getMe } from "@app/client/data/users";
import { FaUser } from "react-icons/fa";
import Greeting from "../user/Greeting";

export default function AdminHeader() {
  // const user = await getMe();
  return (
    <header className="w-full  mx-auto  duration-300 z-50 sticky  top-0">
      <nav className="w-full text-sm flex  items-center justify-between h-24  font-medium text-black gap-10  text-md">
        <ul className="flex gap-10 items-center justify-between w-full">
          <li>Admin</li>

          <div className="flex gap-4 items-center ">
            <FaUser size={30} className="rounded-full" />
            <div className="flex items-center justify-center flex-col">
              <Greeting fullName={true} />
              <span className="text-sm text-color-body">ADMIN</span>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

// export default Header;
