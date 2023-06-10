import { atom } from "jotai";

const el = document.querySelector<HTMLScriptElement>(".nocms-data");
const data = JSON.parse(el!.text);
const params = new URLSearchParams(location.search);
const page = params.get("page") || "index";

export interface Settings {
  siteName: string;
}

export const settingsAtom = atom<Settings>(data.settings);

export interface User {
  username: string;
  csrf: string;
}

export const userAtom = atom<User | null>(data.user as User);

const knownPages = ["index", "edit"] as const;
export type PageName = (typeof knownPages)[number];

const isPage = (str: string): str is PageName =>
  knownPages.includes(str as PageName);

export const pageAtom = atom<PageName>(isPage(page) ? page : "index");

export interface Alert {
  text: string;
  type: string;
}

export const alertAtom = atom<Alert | null>((data.alert as Alert) || null);

export interface Asset {
  basename: string;
  title: string;
  type: string;
}

export const assetsAtom = atom<Asset[]>((data.assets as Asset[]) || []);
