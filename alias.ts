// alias.ts
import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  "~~": r("."),
  "~~/": r("./"),
  "@@": r("."),
  "@@/": r("./"),
  assets: r("./assets"),
  public: r("./public"),
  "public/": r("./public/"),
};
