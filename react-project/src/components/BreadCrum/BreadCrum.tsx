import { Link } from 'react-router-dom';
import "./BreadCrum.css"
interface BreadCrumParams {
  path: string;
  label: string;
  nested: {
    path: string;
    label: string;
  };
}

export type items = {
  items: BreadCrumParams[];
};

export default function BreadCrum({ items }: items) {
  return (
    <nav>
      <div className="breadcrumb-container">
        {items.map((i: BreadCrumParams) => (
          <div key={i.path} className="breadcrumb-item">
            <Link className="parent-link" to={i.path}>
              {i.label}
            </Link>
            <Link className="child-link" to={i.nested.path}>
              {i.nested.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
