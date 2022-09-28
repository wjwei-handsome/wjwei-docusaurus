// Frontend
const FRONTEND = "Frontend";
const MARKDOWN = "Markdown";
const HTML = "HTML";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";
const TYPESCRIPT = "TypeScript";
const REACT = "React";
const VUE = "Vue";
const DOCUSAURUS = "Docusaurus";
const TAILWIND = "Tailwind";
const SASS = "Sass";
const WEXIN_MINIPROGRAM = "微信小程序";
const NPM = "npm";
const YARN = "Yarn";
const VITE = "Vite";
const GRAPHQL = "GraphQL";

// Backend
const BACKEND = "Backend";
const CSHARP = "C#";
const GO = "Go";
const NODE_JS = "Node.js";
const POSTGRESQL = "PostgreSQL";
const MICROSOFT_SQLSERVER = "Microsoft SQL Server"; // Microsoft SQL Server
const MONGODB = "MongoDB";
const COSMOSDB = "CosmosDB";
const REDIS = "Redis";
const DOCKER = "Docker";
const VERCEL = "Vercel";
const MICROSOFT_AZURE = "Microsoft Azure"; // Microsoft Azure

const ALGORITHM = "算法";
const OPERATING_SYSTEM = "操作系统";
const COMPUTER_NETWORK = "计算机网络";

// 其他
const OTHERS = "Others";
const GIT = "Git";
const GITHUB = "GitHub";
const JSON = "JSON"; // Still not use
const YAML = "YAML";
const POWERSHELL = "PowerShell";
const VISUAL_STUDIO_CODE = "Visual Studio Code";
const VISUAL_STUDIO = "Visual Studio";
const RIDER = "Rider";
const WEBSTORM = "WebStorm";
const WECHAT_DEV_TOOLS = "微信开发者工具";

const SOFTWARE_TESTING = "软件测评";
const INTEGRATED_DEVELOPMENT_ENVIRONMENT = "IDE";

const COPYWRITING_GUIDE = "文案排版指南";
const BEST_WEBSITE_DESIGN = "优质网站设计";
const FIGMA = "Figma";

// Contact me
const TELEGRAM = "Telegram";
const GMAIL = "GMail";
const TWITTER = "Twitter";
const WECHAT = "微信";
const ZHIHU = "知乎";
const GITHUB_LINK = "https://github.com/recallwei/";
const TELEGRAM_LINK = "https://t.me/recallwei/";
const GMAIL_ADDRESS = "recall4056@gmail.com";
const WECHAT_ACCOUNT = "LastAdieus";

interface FrontendMenuData {
  readonly frontend: string;
  readonly markdown: string;
  readonly html: string;
  readonly css: string;
  readonly javascript: string;
  readonly typescript: string;
  readonly react: string;
  readonly vue: string;
  readonly docusaurus: string;
  readonly tailwind: string;
  readonly sass: string;
  readonly wexinMiniprogram: string;
  readonly npm: string;
  readonly yarn: string;
  readonly vite: string;
  readonly graphql: string;
}

interface BackendMenuData {
  readonly backend: string;
  readonly csharp: string;
  readonly go: string;
  readonly nodejs: string;
  readonly postgresql: string;
  readonly microsoft_sqlserver: string;
  readonly mongodb: string;
  readonly cosmosdb: string;
  readonly redis: string;
  readonly docker: string;
  readonly vercel: string;
  readonly azure: string;
}

interface OthersMenuData {
  readonly others: string;
  readonly git: string;
  readonly github: string;
  readonly yaml: string;
  readonly powershell: string;
  readonly visual_studio_code: string;
  readonly visual_studio: string;
  readonly rider: string;
  readonly webstorm: string;
  readonly wechat_dev_tools: string;
  readonly figma: string;
}

interface ContactMeData {
  readonly github: string;
  readonly telegram: string;
  readonly gmail: string;
  readonly twitter: string;
  readonly wechat: string;
  readonly zhihu: string;
  readonly githubLink: string;
  readonly telegramLink: string;
  readonly gmailAddress: string;
  readonly wechatAccount: string;
}

const frontendMenuData: FrontendMenuData = {
  frontend: FRONTEND,
  markdown: MARKDOWN,
  html: HTML,
  css: CSS,
  javascript: JAVASCRIPT,
  typescript: TYPESCRIPT,
  react: REACT,
  vue: VUE,
  docusaurus: DOCUSAURUS,
  tailwind: TAILWIND,
  sass: SASS,
  wexinMiniprogram: WEXIN_MINIPROGRAM,
  npm: NPM,
  yarn: YARN,
  vite: VITE,
  graphql: GRAPHQL,
};

const backendMenuData: BackendMenuData = {
  backend: BACKEND,
  csharp: CSHARP,
  go: GO,
  nodejs: NODE_JS,
  postgresql: POSTGRESQL,
  microsoft_sqlserver: MICROSOFT_SQLSERVER,
  mongodb: MONGODB,
  cosmosdb: COSMOSDB,
  redis: REDIS,
  docker: DOCKER,
  vercel: VERCEL,
  azure: MICROSOFT_AZURE,
};

const othersMenuData: OthersMenuData = {
  others: OTHERS,
  git: GIT,
  github: GITHUB,
  yaml: YAML,
  powershell: POWERSHELL,
  visual_studio_code: VISUAL_STUDIO_CODE,
  visual_studio: VISUAL_STUDIO,
  rider: RIDER,
  webstorm: WEBSTORM,
  wechat_dev_tools: WECHAT_DEV_TOOLS,
  figma: FIGMA,
};

const contactMeData: ContactMeData = {
  github: GITHUB,
  telegram: TELEGRAM,
  gmail: GMAIL,
  twitter: TWITTER,
  wechat: WECHAT,
  zhihu: ZHIHU,
  githubLink: GITHUB_LINK,
  telegramLink: TELEGRAM_LINK,
  gmailAddress: GMAIL_ADDRESS,
  wechatAccount: WECHAT_ACCOUNT,
};

export { frontendMenuData, backendMenuData, othersMenuData, contactMeData };
