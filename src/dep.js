export class Cl {
    field = 2 + this.#priv() ?? 3;
    #priv() {}
}
