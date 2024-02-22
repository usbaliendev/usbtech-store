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
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Separator } from "./separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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
            <Button variant="outline" className=" w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>
            <Button variant="outline" className=" w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <Button variant="outline" className=" w-full justify-start">
                  <AccordionTrigger className=" gap-52">
                    <div className=" flex gap-2">
                      <ListOrdered size={16} />
                      Catálogo
                    </div>
                  </AccordionTrigger>
                </Button>
                <AccordionContent>
                  <div>
                    <Button
                      variant="outline"
                      className=" mb-1 w-full justify-start"
                    >
                      Hardware
                    </Button>
                    <Button
                      variant="outline"
                      className=" mb-1 w-full justify-start"
                    >
                      Periféricos
                    </Button>
                    <Button variant="outline" className=" w-full justify-start">
                      Monitores
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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

      <h1 className="text-lg font-semibold">
        <span className="font-extrabold text-primary">Tech</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
