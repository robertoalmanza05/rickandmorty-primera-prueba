import styles from './index.module.css';
import { Children, useEffect, useState } from 'react';
import ButtonComponent from '../components/Button';
import useFetchData from '../hooks/useFetchData';
import Link from 'next/link';

const PagesIndex = () => {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const { info, results } = useFetchData({ page: page });

  console.log('results', results);
  console.log('info', info);
  return (
    <div className={styles.container}>
      <div>
        <h1>personajes:{info.count} </h1>
        <h1>pagina:{page} </h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'initial',
          flexWrap: 'wrap',
          height: '100%',
          overflow: 'auto',
          maxHeight: '100%'
        }}
      >
        {results.map((character) => {
          const { name, image, id } = character;
          return (
            <div>
              <img src={`${image}`} className={styles.img} />
              <h1 className={styles.h1}>
                <Link href={`/character/${name}`}>{name}</Link>
              </h1>
            </div>
          );
        })}
      </div>
      <ButtonComponent
        onClick={() => {
          setPage(Math.max(page - 1, 1));
        }}
      >
        atras
      </ButtonComponent>
      <ButtonComponent
        onClick={() => {
          setPage(Math.min(page + 1, info.pages));
        }}
      >
        siguiente
      </ButtonComponent>
    </div>
  );
};
export default PagesIndex;
