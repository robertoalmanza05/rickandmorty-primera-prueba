import { useRouter } from 'next/router';
import { useState } from 'react';
import NavBar from '../../components/navBar';
import useFetchCharacter from '../../hooks/useFetchCharacter';

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
        <h1>name: {router.query?.id}</h1>
      </div>
      <div>
        <h1>{result?.species}</h1>
        <h1>{result.status}</h1>
        <h1>{result.location?.name}</h1>
      </div>
      <div>
        <img src={`${result.image}`}></img>
      </div>
    </>
  );
};

export default Post;
