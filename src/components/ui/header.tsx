import {
  MenuIcon,
  ShoppingCartIcon,
  ShoppingBag,
  HomeIcon,
  User,
  ListOrdered,
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

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className=" mb-2 text-left text-lg font-semibold">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SheetDescription>Site</SheetDescription>
          <div className="mt-2 flex flex-col gap-2">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* <Separator /> */}

            <SheetDescription>Conta e Ajuda</SheetDescription>
            <Button variant="outline" className=" w-full justify-start gap-2">
              <User size={16} />
              Minha Conta
            </Button>
            <Button variant="outline" className=" w-full justify-start gap-2">
              <ShoppingBag size={16} />
              Como comprar
            </Button>
            <Button variant="outline" className=" w-full justify-start gap-2">
              <Info size={16} />
              Developer
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Kayden</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
