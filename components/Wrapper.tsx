export default function Wrapper(props) {
  const { children, className } = props;
  return (
    <div className={`block w-full h-full ${className}`}>
      {children}
    </div>
  );
}