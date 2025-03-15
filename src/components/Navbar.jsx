import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>📅 LIFELOG</div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/auth'>로그인</Link>
        </li>
        <li>
          <Link to='/todo'>할 일</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
