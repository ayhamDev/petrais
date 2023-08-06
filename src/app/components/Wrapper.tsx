export default function Wrapper(props: React.PropsWithChildren): JSX.Element {
  return <div className="max-w-[1200px] mx-auto px-6">{props.children}</div>;
}
