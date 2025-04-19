
interface LoginModel {
  username: string
  password: string
  isRemember?: boolean
}

interface DictMap {
  [key: string]: any
}

declare namespace Storage {
  interface Session {
    dict: DictMap
  }

  interface Local {
    loginAccount: LoginModel
    lang: string
  }
}


type LayoutType = 'left' | 'top' | 'mix'
type LangType = LangType
