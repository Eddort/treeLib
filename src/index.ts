class User {
	private _name: string = "ssss";

	public get name(): string {
		return this._name;
	}

	public set name(n: string) {
		this._name = n;
	}
}
let tom: User = new User();
console.log(tom._name, tom.name);
