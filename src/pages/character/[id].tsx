import html2canvas from 'html2canvas';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { resourceLimits } from 'worker_threads';
import NavBar from '../../components/navBar';
import useFetchCharacter from '../../hooks/useFetchCharacter';
import styles from '../../pages/index.module.css';
import imagenxd from '/img/1.png';
import Image from 'next/image'
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
  
  const onclickFuncion= function(evento){
    html2canvas(document.querySelector("#aaaaa")).then(canvas => {
 var img= canvas.toDataURL("image/png");
 
 var link= document.createElement('a');
 
 link.download= 'meme.png'
 link.href= img;
link.click();
console.log(link);

    });
  }

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
        <input value= {palabra} onChange={onChangeEvent} className={styles.h11} />
        
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
        <img  id="x" src={`${result.image}`}></img>
      </div>
      
      
      
      
      
      
      <div>
    
      <img
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '300px',
        height:'300px'

      }} 
      id= "aaaaa"src ="/img/1.png"/>  
      
         
      </div>
      <button onClick={onclickFuncion}>xadAADSAD</button>
      <div>
      </div>
    </>
  );
};

export default Post;
