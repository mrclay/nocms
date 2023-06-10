import { useAtom } from "jotai/react/useAtom";
import { alertAtom, pageAtom, userAtom } from "@util/store";
import { IndexPage } from "@components/IndexPage";

export const App = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [user, setUser] = useAtom(userAtom);
  const [alert] = useAtom(alertAtom);

  return (
    <div className="page">
      {user && (
        <form method="POST" action="" className="logout-form">
          <input type="hidden" name="nocms-csrf" value={user.csrf} />
          <input type="hidden" name="nocms-logout" value="1" />
          <div>
            {user.username} <button className="btn btn-default">Log out</button>
          </div>
        </form>
      )}

      <ol className="breadcrumb">
        <li>
          <a href="/">
            <span aria-hidden="true" className="glyphicon glyphicon-home" />
            localhost{" "}
          </a>
        </li>
        <li>
          <a href="?page=index">Content</a>
        </li>
      </ol>

      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.text}
        </div>
      )}

      {user === null && 1}
      {user !== null && page === "index" && <IndexPage />}
    </div>
  );
};
