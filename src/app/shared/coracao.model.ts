export class Coracao {

    constructor(
        public cheio: boolean,
        public urlCoraraoCheio: string = '/assets/coracao_cheio.png', 
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): string {

        if(this.cheio){
            return this.urlCoraraoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}