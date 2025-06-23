import type { ComponentType } from "react";

export interface BlogMeta {
  title: string;
  date: string;
  slug: string;
}

export interface BlogModule {
  meta: BlogMeta;
  default: ComponentType;
}