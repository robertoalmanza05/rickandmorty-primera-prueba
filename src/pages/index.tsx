import styles from './index.module.css';
import { Children, useEffect, useState } from 'react';
import ButtonComponent from '../components/Button';
import NavBar from '../components/navBar';
import useFetchData from '../hooks/useFetchData';
import Link from 'next/link';

const PagesIndex = () => {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const { info, results } = useFetchData({ page: page });

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>personajes:{info.count} </h2>
        </div>

        <div className={styles.divimg}>
          {results.map((character) => {
            const { name, image, id } = character;
            return (
              <div>
                <img src={`${image}`} className={styles.img} />
                <h1 className={styles.h1}>
                  <Link href={`/character/${id}`}>{name}</Link>
                </h1>
              </div>
            );
          })}
        </div>
        <ButtonComponent
          onClick={() => {
            setPage(Math.max(page - 1, 1));
            window.scrollTo(0, 30);
          }}
        >
          atras
        </ButtonComponent>
        <div className={styles.div}>
          <span className={styles.h2}> pagina:{page}</span>
        </div>
        <ButtonComponent
          onClick={() => {
            setPage(Math.min(page + 1, info.pages));
            window.scrollTo(0, 30);
          }}
        >
          siguiente
        </ButtonComponent>
      </div>
    </div>
  );
};
export default PagesIndex;
