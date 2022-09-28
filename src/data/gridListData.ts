/* eslint-disable @typescript-eslint/no-explicit-any */
import markdown from "@site/static/img/icon/markdown.png";
import html from "@site/static/img/icon/html.png";
import css from "@site/static/img/icon/css.png";
import javascript from "@site/static/img/icon/javascript.png";
import typescript from "@site/static/img/icon/typescript.png";
import react from "@site/static/img/icon/react.png";
import python from "@site/static/img/icon/python.png";
import linux from "@site/static/img/icon/linux.png";
import rlang from "@site/static/img/icon/r.png";
import bioinfo from "@site/static/img/icon/biology.png";
import django from "@site/static/img/icon/django.png";
import rust from "@site/static/img/icon/rust.png";
import algorithm from "@site/static/img/icon/algorithm2.png";
import vue from "@site/static/img/icon/vue.png";
import docusaurus from "@site/static/img/icon/docusaurus.png";
import tailwindcss from "@site/static/img/icon/tailwindcss.png";
import sass from "@site/static/img/icon/sass.png";
import wexin_mini_program from "@site/static/img/icon/wexin_mini_program.png";
import npm from "@site/static/img/icon/npm.png";
import yarn from "@site/static/img/icon/yarn.png";
import vite from "@site/static/img/icon/vite.png";
import graphql from "@site/static/img/icon/graphql.png";

import csharp from "@site/static/img/icon/csharp.png";
import go from "@site/static/img/icon/go.png";
import nodejs from "@site/static/img/icon/nodejs.png";
import postgresql from "@site/static/img/icon/postgresql.png";
import microsoft_sqlserver from "@site/static/img/icon/microsoft_sqlserver.png";
import mongodb from "@site/static/img/icon/mongodb.png";
import cosmosdb from "@site/static/img/icon/cosmosdb.png";
import redis from "@site/static/img/icon/redis.png";
import docker from "@site/static/img/icon/docker.png";
import vercel from "@site/static/img/icon/vercel.png";
import microsoft_azure from "@site/static/img/icon/microsoft_azure.png";

import git from "@site/static/img/icon/git.png";
import github from "@site/static/img/icon/github.png";
import yaml from "@site/static/img/icon/yaml.png";
import powershell from "@site/static/img/icon/powershell.png";
import visual_studio_code from "@site/static/img/icon/visual_studio_code.png";
import visual_studio from "@site/static/img/icon/visual_studio.png";
import rider from "@site/static/img/icon/rider.png";
import webstorm from "@site/static/img/icon/webstorm.png";
import wechat_dev_tools from "@site/static/img/icon/wechat_dev_tools.png";

import figma from "@site/static/img/icon/figma.png";

export interface GridItemType {
  readonly title: string;
  readonly link: string;
  readonly src: any;
  readonly fontSize: FontSize;
}

type FontSize = "sm" | "md" | "lg";

function gridItem(
  title: string,
  link: string,
  src: any,
  fontSize: FontSize = "lg"
): GridItemType {
  return {
    title: title,
    link: link,
    src: src,
    fontSize: fontSize,
  };
}

const DocGridList: Array<GridItemType> = [
  gridItem("Python", "/docs/category/python", python),
  gridItem("Linux", "/docs/html", linux),
  gridItem("R", "/docs/css", rlang),
  gridItem("Bio-Info", "/docs/javascript", bioinfo),
  gridItem("Rust", "/docs/typescript", rust),
  gridItem("Django", "/docs/react", django),
  gridItem("Algorithm", "/docs/vue", algorithm),
  // gridItem("docusaurus, "/docs/docusaurus", docusaurus),
  // gridItem("tailwind, "/docs/tailwind", tailwindcss),
  // gridItem("sass, "/docs/sass", sass),
  // gridItem(
  //   "wexinMiniprogram,
  //   "/docs/wexin-mini-program",
  //   wexin_mini_program
  // ),
  // gridItem("npm, "/docs/npm", npm),
  // gridItem("yarn, "/docs/yarn", yarn),
  // gridItem("vite, "/docs/vite", vite),
  // gridItem("graphql, "/docs/graphql", graphql),
];


export { DocGridList,  };
