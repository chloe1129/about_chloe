import { Link } from "react-router-dom";

interface NavProps {
  data: {
    name: string;
    address: string;
  };
}

export default function NavItem({ data }: NavProps): JSX.Element {
  const { name, address } = data;

  return (
    <button className="px-4 py-2 text-white">
      <Link to={`${address}`} className="menu__item">
        {name}
      </Link>
    </button>
  );
}
