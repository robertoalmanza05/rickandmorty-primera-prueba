import { useRouter } from 'next/router';
import { useState } from 'react';
import NavBar from '../../components/navBar';
import useFetchCharacter from '../../hooks/useFetchCharacter';
import styles from '../../pages/index.module.css';
type Props = {
  name?: string;
  id: number;
};

const Post = (props: Props) => {
  const router = useRouter();
  const { id } = props;
  const { result } = useFetchCharacter({ id: router.query?.id as string });

  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <h1>name: {result.name}</h1>
      </div>
      <div>
        <h1 className={styles.h11}> a {result?.species}</h1>
        <h1>{result.status}</h1>
        <h1>{result.location?.name}</h1>
      </div>
      <div>
        <img
          src={`${result.image}`}
          style={{
            width: '320px',
            height: '320px',
            display: 'flex',
            marginLeft: '30px'
          }}
        ></img>
      </div>
    </>
  );
};

export default Post;