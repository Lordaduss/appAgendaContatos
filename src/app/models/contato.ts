export class Contato {
    private _id: any
    private _nome: string
    private _telefone: number
    private _dataNasc: string
    private _sexo: string
    

    constructor(nome: string, telefone: number, sexo: string, dataNasc: string){
        let chave = new Date
        this._id=chave.getTime()
        this._nome=nome
        this._telefone=telefone
        this._sexo=sexo
        this._dataNasc = dataNasc.split('T')[0]
    }

    public get id(): any{
        return this._id
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
