interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_STORAGE_PREFIX: string
  readonly VITE_APP_TITLE: string
}

