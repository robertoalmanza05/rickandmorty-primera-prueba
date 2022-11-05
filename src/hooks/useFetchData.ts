import { useEffect, useState } from 'react';

type IResult = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};

type IInfo = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};
type IData = {
  info: IInfo;
  results: IResult[];
};
type Props = {
  page?: number;
};

const useFetchData = (props = {} as Props) => {
  const { page } = props;
  const [results, setResults] = useState([] as IResult[]);
  const [info, setInfo] = useState({} as IInfo);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page ?? 1}`
      );
      const data = (await res.json()) as IData;

      const getInfo = data.info;
      const getResult = data.results;
      setResults(getResult);
      setInfo(getInfo);
    };

    try {
      getData();
    } catch (error) {
      return;
    }
  }, [page]);
  return { results, info };
};

export default useFetchData;
