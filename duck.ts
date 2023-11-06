// Définition de l'interface <=> contrat
interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    private _name: string;
    constructor( name: string) {
        this._name = name
    }
    swim(): string {
        throw new Error("Method not implemented.");
    }

    set name(name: string){
        this._name =name;

    }

    get name():string {
        return this._name;
    }
    swin(): string{
        return "nage comme un canard";
    }

}

let Danilo: Thing  = new Thing ("Danilo");
console.log(Danilo.swin)