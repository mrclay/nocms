import { PageName, Settings, User } from "@util/store";

export interface NoCmsData {
  page: null | {
    name: PageName;
    props: any;
  };
  user?: User;
  settings: Settings;
}
