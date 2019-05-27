import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="grid-x grid-margin-x">
    <ul className="menu">
      <li>
        {" "}
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </li>
      <li>
        <a href="#">Three</a>
      </li>
      <li>
        <a href="#">Four</a>
      </li>
    </ul>
  </div>
);

export default Header;
