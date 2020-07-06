import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const { asPath } = router;
  const setActiveClass = path => asPath === path ? 'nav__link--active' : '';

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="fs fs--small">
          <Link href="/">
            <a className={`nav__link ${setActiveClass('/')}`}>Products</a>
          </Link>
        </li>
        <li className="fs fs--small">
          <Link href="/sale">
            <a className={`nav__link ${setActiveClass('/sale')}`}>Sale Products</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;