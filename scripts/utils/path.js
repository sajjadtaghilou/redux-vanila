export function getDirname(importMetaUrl) {
  return importMetaUrl.slice(0, importMetaUrl.lastIndexOf("/"));
}
