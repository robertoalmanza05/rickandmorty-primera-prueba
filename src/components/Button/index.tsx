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
        fontSize: '20px',
        width: '200px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
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
