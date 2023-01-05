import RenderResult from 'next/dist/server/render-result';
import Link from 'next/link';
import { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import styles from './index.module.css';

type Props = {
  children?: React.ReactNode;
  tittle?: string;
  onClick?: () => void;
};


const NavBar = (props: Props) => {
  const { children, onClick } = props;
  const { info } = useFetchData({});


  let randomCaracter = Math.floor(Math.random() * info.count)


  

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img
          src="https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg"
          className={styles.img}
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <Link className={styles.nav__linkslink} href={`/`}>
              INICIO
            </Link>
          </li>

          <li>
            <Link
              className={styles.nav__linkslink}
              href={`/character/${randomCaracter}`}
            
            >
              Personaje random 2
            </Link>
          </li>
          <li>
            <Link
              className={styles.nav__linkslink}
              href={`/character/${randomCaracter}`}
            >
              Personaje random 3
            </Link>
          </li>
          <li>
            <Link
              className={styles.nav__linkslink}
              href={`/character/${randomCaracter}`}
            >
              Personaje random 4
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
