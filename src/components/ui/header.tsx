import { Card } from "./card";
import Link from "next/link";
import NavSheet from "./nav-sheet";
import CartSheet from "./cart-sheet";

const Header = () => {
  return (
    <Card className="flex h-full items-center justify-between p-[1.875rem]">
      <NavSheet />

      <Link href="/">
        <h1 className="text-lg font-semibold">
          {/* <span className="inline-block bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text font-extrabold text-transparent"> */}
          <span className="font-extrabold text-primary">Tech</span> Store
        </h1>
      </Link>

      <CartSheet />
    </Card>
  );
};

export default Header;
