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
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Separator } from "./separator";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Card className="flex h-full items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className=" mb-2 text-left text-lg font-semibold">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <SheetDescription>Site</SheetDescription>

          <div className="mt-2 flex h-[90%] flex-col gap-2">
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

            <Button variant="outline" className=" w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
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

            <SheetDescription>Conta e Ajuda</SheetDescription>

            <Button variant="outline" className=" w-full justify-start gap-2">
              <ShoppingBag size={16} />
              Como comprar
            </Button>
            <Button variant="outline" className=" w-full justify-start gap-2">
              <Info size={16} />
              Developer
            </Button>
          </div>

          {status === "authenticated" && data?.user ? (
            <div className="flex w-full flex-row items-center justify-between">
              <div className="mb-2 flex items-center gap-2">
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

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text font-extrabold text-transparent">
            USBK777
          </span>{" "}
          Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
