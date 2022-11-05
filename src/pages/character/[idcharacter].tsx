import { useRouter } from 'next/router';

type Props = {
  name: string;
  id: number;
};

const Post = (props: Props) => {
  const { name, id } = props;

  const router = useRouter();

  const { idcharacter } = router.query;

  return (
    <div>
      <h1>name: {idcharacter}</h1>
      <h2>sdsad</h2>
    </div>
  );
};

export default Post;
