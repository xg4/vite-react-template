/// <reference types="vite/client" />

declare const __BUILD_DATE__: string
declare const __APP_ENV__: string
declare const __APP_VERSION__: string
declare const __APP_BRANCH__: string

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
