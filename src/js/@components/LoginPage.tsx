import { useAtom } from "jotai/react/useAtom";
import { Alert, alertAtom, pageAtom, User, userAtom } from "@util/store";
import { useEffect } from "react";

export const LoginPage = () => {
  const [user, setUser] = useAtom(userAtom);
  const [, setPage] = useAtom(pageAtom);
  const [, setAlert] = useAtom(alertAtom);

  useEffect(() => {
    if (user) {
      setPage("index");
    }
  }, [user]);

  return (
    <>
      <div className="page-header">
        <h1>Log in</h1>
      </div>

      <form
        action=""
        method="POST"
        className="form-horizontal"
        onSubmit={async (e) => {
          e.preventDefault();
          const body = new FormData(e.currentTarget);
          const data = await fetch("", {
            method: "post",
            body,
            credentials: "include",
          }).then((res) => res.json());

          if (data.alert) {
            setAlert(data.alert);
          }
          if (data.user) {
            setUser(data.user);
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="nocms-username" className="col-sm-2 control-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="nocms-username"
              defaultValue="admin"
              id="nocms-username"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="nocms-pwd" className="col-sm-2 control-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="nocms-pwd"
              id="nocms-pwd"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Log in
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
