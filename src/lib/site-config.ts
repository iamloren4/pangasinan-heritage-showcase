const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";
