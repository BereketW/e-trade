// "use client";

import * as React from "react";
import { MdManageAccounts } from "react-icons/md";
import { GiFemaleVampire } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export default function CategiesMenu() {
  // const [position, setPosition] = React.useState("bottom");
  const categories = [
    {
      id: 12,

      slug: "Mens-Clothing",
      Icon: MdManageAccounts,
      name: "Male-Cloth",
    },
    {
      id: 11,
      slug: "Womens-Clothing",
      Icon: GiFemaleVampire,
      name: "Female Cloth",
    },
    {
      id: 10,
      slug: "Electronics",
      Icon: GiBigDiamondRing,
      name: "Electronics",
    },
    {
      id: 1,
      slug: "Jewelery",
      Icon: MdManageAccounts,
      name: "Jewelery",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-0 active:outline-0" asChild>
        <Button
          variant="outline"
          className="border-color-primary border active:outline-0 focus:outline-0 border-dashed outline-none"
        >
          Categories <span className="text-base -rotate-90 ml-2">{"<"}</span>{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-10">
        <DropdownMenuGroup>
          {categories.map(({ Icon, name, slug }, ind) => (
            <>
              <Link href={`/shop?category=${slug}`} key={ind}>
                <DropdownMenuItem>
                  {name}
                  <DropdownMenuShortcut>
                    <Icon />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
            </>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
