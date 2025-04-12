const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX

interface StorageData<T> {
  value: T
  expire: number | null
}

class CreateLocalStorage<T extends Storage.Local> {
  setItem(key: keyof T, value: T[keyof T], expire: number = 60 * 60 * 24 * 7) {
    const storageData: StorageData<T[keyof T]> = {
      value,
      expire: new Date().getTime() + expire * 1000,
    }
    const json = JSON.stringify(storageData)
    window.localStorage.setItem(`${STORAGE_PREFIX}_${String(key)}`, json)
  }

  getItem(key: keyof T) {
    const json = window.localStorage.getItem(`${STORAGE_PREFIX}_${String(key)}`)
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
    window.localStorage.removeItem(`${STORAGE_PREFIX}_${String(key)}`)
  }

  clear() {
    window.localStorage.clear()
  }
}

class CreateSessionStorage<T extends Storage.Session> {
  setItem(key: keyof T, value: T[keyof T]) {
    const json = JSON.stringify(value)
    window.sessionStorage.setItem(`${STORAGE_PREFIX}_${String(key)}`, json)
  }

  getItem(key: keyof T) {
    const json = window.sessionStorage.getItem(`${STORAGE_PREFIX}_${String(key)}`)
    if (!json) {
      return null
    }

    const storageData: T[keyof T] | null = JSON.parse(json)

    if (storageData) {
      return storageData
    }

    return null
  }

  remove(key: keyof T) {
    window.sessionStorage.removeItem(`${STORAGE_PREFIX}_${String(key)}`)
  }

  clear() {
    window.sessionStorage.clear()
  }
}

export const local = new CreateLocalStorage<Storage.Local>()

export const session = new CreateSessionStorage<Storage.Session>()
