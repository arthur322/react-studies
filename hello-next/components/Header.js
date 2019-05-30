import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About us</a>
    </Link>
    <Link href="/about/our_company">
      <a style={linkStyle}>Our Company</a>
    </Link>
  </div>
);

export default Header;
