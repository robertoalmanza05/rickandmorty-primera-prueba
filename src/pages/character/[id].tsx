import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { resourceLimits } from 'worker_threads';
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
  

  useEffect(() => {
  setPalabra("")

  
  
    
  }, [router.asPath])
  

  const [palabra, setPalabra] = useState("");
  
  const onChangeEvent = function (evento) {
    setPalabra(evento.target.value);
    console.log(evento.target.value);
  };

  return (
    <>
      <div>
        <NavBar />
        <br />
        <input value={palabra} onChange={onChangeEvent} className={styles.h11} />
        
        <h1 className={styles.h11}>{palabra}</h1>

        <h1 className={styles.h11}>{result.name} </h1>
        <h1 className={styles.h11}>{result.species} </h1>
        <h1 className={styles.h11}>{result.type}</h1>

        <h1 className={styles.h11}>{result.location?.name}</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img src={`${result.image}`}></img>
      </div>
    </>
  );
};

export default Post;
