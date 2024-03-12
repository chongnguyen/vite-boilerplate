export class LocalStorage {
  private storage: Storage
  private tokenKey = 'tb_token'

  constructor() {
    this.storage = localStorage
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key)
  }

  setItem(key: string, value: unknown) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  getToken() {
    return this.getItem(this.tokenKey)
  }

  setToken(token: string): void {
    this.setItem(this.tokenKey, token)
  }

  removeToken() {
    this.removeItem(this.tokenKey)
  }
}

export const storage: Readonly<LocalStorage> = Object.freeze(new LocalStorage())
