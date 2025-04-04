export class Id {
  private value: string

  constructor(value?: string) {
    this.value = value ?? Id.generate()
  }

  public toString() {
    return this.value
  }

  public equals(id: Id) {
    return this.value === id.toString()
  }

  static generate() {
    const p1 = Math.random().toString(36).substring(2, 9)
    const p2 = Math.random().toString(36).substring(2, 9)
    const p3 = Math.random().toString(36).substring(2, 9)
    return `${p1}-${p2}-${p3}`
  }
}
