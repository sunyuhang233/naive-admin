const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX

interface StorageData<T> {
  value: T
  expire: number | null
}

class Storage<T> {
  private storage: globalThis.Storage

  constructor(storage: globalThis.Storage) {
    this.storage = storage
  }

  setItem(key: keyof T, value: T[keyof T], expire: number | null = null) {
    const storageData: StorageData<T[keyof T]> = {
      value,
      expire: expire ? new Date().getTime() + expire * 1000 : null,
    }
    const json = JSON.stringify(storageData)
    this.storage.setItem(`${STORAGE_PREFIX}_${String(key)}`, json)
  }

  getItem(key: keyof T) {
    const json = this.storage.getItem(`${STORAGE_PREFIX}_${String(key)}`)
    if (!json) {
      return null
    }

    const storageData: StorageData<T[keyof T]> | null = JSON.parse(json)

    if (storageData) {
      const { value, expire } = storageData
      if (expire === null || expire >= Date.now()) {
        return value
      }
    }
    this.remove(key)
    return null
  }

  remove(key: keyof T) {
    this.storage.removeItem(`${STORAGE_PREFIX}_${String(key)}`)
  }

  clear() {
    this.storage.clear()
  }
}

export const local = new Storage<Storage.Local>(localStorage)
export const session = new Storage<Storage.Session>(sessionStorage)
