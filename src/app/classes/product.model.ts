// product.model.ts
export class Product {
    private _name:string;
    private _price:number;

    public constructor(name:string, price:number){
        this._name=name;
        this._price=price;
    }

    // Getters
    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    // Setters
    public set name(name: string) {
        this._name = name;
    }

    public set price(price: number) {
        this._price = price;
    }
}
