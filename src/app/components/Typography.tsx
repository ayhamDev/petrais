interface ITypography {
  children: React.ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3" | "body1" | "body2";
}
export default function Typography(props: ITypography): JSX.Element {
  switch (props.type) {
    case "h1":
      return (
        <h1 className={`text-xl font-medium capitalize ${props.className}`}>
          {props.children}
        </h1>
      );
      break;
    case "h2":
      return (
        <h2 className={`text-lg font-medium capitalize ${props.className}`}>
          {props.children}
        </h2>
      );
      break;
    case "h3":
      return (
        <h3 className={`text-md font-normal capitalize ${props.className}`}>
          {props.children}
        </h3>
      );
      break;
    case "body1":
      return (
        <p className={`text-base font-normal capitalize ${props.className}`}>
          {props.children}
        </p>
      );
      break;
    case "body2":
      return (
        <p className={`text-sm font-light capitalize ${props.className}`}>
          {props.children}
        </p>
      );
      break;
    default:
      return (
        <p className={`text-base font-normal capitalize ${props.className}`}>
          {props.children}
        </p>
      );
      break;
  }
}
