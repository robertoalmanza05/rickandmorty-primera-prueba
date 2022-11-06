import Link from 'next/link';
type Props = {
  children?: React.ReactNode;
  tittle?: string;
  onClick?: () => void;
};

const NavBar = (props: Props) => {
  const { children, onClick } = props;
  return (
    <ul>
      <li>
        <Link href={'/character/morty'}>gome </Link>
      </li>
      <li>
        <Link href={'/'}>home </Link>
      </li>
    </ul>
  );
};

export default NavBar;
