const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h3>I am still very hungry</h3>}</>;
};
export default ErrorMessage;
