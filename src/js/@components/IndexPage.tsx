import { Asset } from "@util/store";

interface IndexPageProps {
  assets: Asset[];
}

export const IndexPage = ({ assets }: IndexPageProps) => {
  return (
    <>
      <div className="page-header">
        <h1>Content</h1>
      </div>

      <ul className="list-group">
        {assets.map(({ basename, title, type }) => (
          <li className="list-group-item" key={basename}>
            <a href={`?${new URLSearchParams({ page: "edit", basename })}`}>
              {title}
            </a>{" "}
            <span>
              <span className="label label-info">{type}</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
