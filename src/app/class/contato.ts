export class Contato {
    private _nome: string
    private _telefone: number
    private _dataNasc: string
    private _sexo: string

    constructor(nome: string, telefone: number, dataNasc: string, sexo: string){
        this._nome=nome
        this._telefone=telefone
        this._dataNasc = dataNasc.split('T')[0]
        this._sexo=sexo
    }

    public get nome(): string{
        return this._nome
    }

    public set nome(nome: string){
        this._nome=nome
    }

    public get telefone(): number{
        return this._telefone
    }

    public set telefone(telefone: number){
        this._telefone=telefone
    }

    public get dataNasc(): string{
        return this._dataNasc
    }

    public set dataNasc(dataNasc: string){
        this._dataNasc=dataNasc
    }

    public get sexo(): string{
        return this._sexo
    }

    public set sexo(sexo: string){
        this._sexo=sexo
    }
}
