export default function Wrapper(props) {
  const { children, classNames } = props;
  return (
    <div className={`block w-full h-full ${classNames}`}>
      {children}
    </div>
  );
}