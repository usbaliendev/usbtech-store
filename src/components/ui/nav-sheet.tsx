"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  ShoppingBag,
  HomeIcon,
  User,
  ListOrdered,
  LogIn,
  LogOut,
  PercentIcon,
  Info,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface NavSheetProps {
  data: object;
  status: string;
  handleLogin: Function;
  handleLogout: Function;
}

const NavSheet = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex h-full flex-col">
        <SheetHeader className=" mb-2 text-left text-lg font-semibold">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-2">
          <SheetDescription>Site</SheetDescription>
          <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className=" w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
          </SheetClose>

          <Button variant="outline" className="flex w-full justify-start">
            <SheetClose asChild>
              <Link href="/ofertas" className="w-full">
                <div className="flex gap-2">
                  <PercentIcon size={16} />
                  Ofertas
                </div>
              </Link>
            </SheetClose>
          </Button>

          <Button variant="outline" className="flex w-full justify-start">
            <SheetClose asChild>
                <Link href="/catalogo" className="w-full">
                  <div className="flex gap-2">
                    <ListOrdered size={16} />
                    Catálogo
                  </div>
                </Link>
            </SheetClose>
          </Button>

          <Separator />

          <SheetDescription>More</SheetDescription>
          <a
            target="_blank"
            href="https://usbaliendev.com"
            className="w-full"
            rel="noopener noreferrer"
          >
            {/*since is an external link we should use an a element // also use
            rel="noopener noreferrer" to prevent the newly opened tab from being
            able to modify the original tab maliciously */}
            <Button variant="outline" className=" w-full justify-start gap-2">
              <Info size={16} />
              Developer
            </Button>
          </a>
        </div>

        {status === "authenticated" && data?.user ? (
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium">{data.user.name}</p>
                <p className="text-sm opacity-75">Boas compras!</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className=" justify-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <Button onClick={handleLogin} variant="outline" className="gap-2">
              <LogIn size={16} />
              Login
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
