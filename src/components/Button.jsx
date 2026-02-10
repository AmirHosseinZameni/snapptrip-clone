export default function Button({children,className}) {
    {console.log(className)}
  return <button className={className}>{children}</button>;
}
