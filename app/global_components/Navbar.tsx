import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <ul className="flex gap-5 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/catalog">Catalog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
