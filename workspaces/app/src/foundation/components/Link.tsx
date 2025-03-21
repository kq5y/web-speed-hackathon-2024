import { Link as _Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  href: string;
};

export const Link: React.FC<Props> = ({ children, href, ...rest }) => {
  return (
    <_Link to={href} {...rest}>
      {children}
    </_Link>
  );
};
