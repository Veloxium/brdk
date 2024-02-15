import { Heart, Search, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-2 px-6 rounded-3xl border-2">
      <div>
        <p className="text-2xl font-pilowlava">BRDK</p>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="#">MENSWEAR</Link>
          </li>
          <li>
            <a href="#">WOMENSWEAR</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li>
            <a href="#">SALE</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex py-1 px-2 gap-2 rounded-full bg-slate-200">
          <Search />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="bg-slate-200 outline-none w-28"
          />
        </div>
        <Heart />
        <ShoppingBagIcon />
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center">
          <Image
            src="https://i.pinimg.com/originals/c8/61/db/c861db3727075c775f132fe1e59137f1.jpg"
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
}
