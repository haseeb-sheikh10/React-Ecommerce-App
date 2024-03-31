import { FC } from "react";

interface NavabarProps {}

const Navabar: FC<NavabarProps> = () => {
  return (
    <div>
      <div className="grid grid-col-12">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navabar;
