import { useState, useEffect } from 'react';

type resultsCharacters = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name?: string;
    url?: string;
  };
  location?: { name?: string; url?: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
type Props = {
  id?: string;
};
const useFetchCharacter = (props = {} as Props) => {
  const { id } = props;
  const [result, setResult] = useState({} as resultsCharacters);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${id ?? 1}`
      );

      const jsonData = await data.json();

      setResult(jsonData);
    };

    api();
  }, [id]);
  return { result };
};
export default useFetchCharacter;
