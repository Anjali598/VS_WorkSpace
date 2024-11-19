interface Props {
  children: String;
  color?: string; // ? meaning is optional values to be given in App component
  onClick: () => void;
}

function ButtonEx({ children, onClick, color = "primary" }: Props) {

    
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default ButtonEx;
