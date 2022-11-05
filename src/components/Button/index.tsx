type Props = {
  children?: React.ReactNode;
  tittle?: string;
  onClick?: () => void;
};

const ButtonComponent = (props: Props) => {
  const { children, tittle, onClick } = props;
  return (
    <button
      style={{
        fontSize: '15px',
        borderRadius: '5px',
        cursor: 'pointer',

        padding: '10px 3px',
        textAlign: 'center'
      }}
      onClick={onClick}
    >
      {children} {tittle}{' '}
    </button>
  );
};

export default ButtonComponent;
