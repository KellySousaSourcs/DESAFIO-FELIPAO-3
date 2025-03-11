class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        switch(this.tipo){
            case "Mago":
                ataque = "magia"
                break
            case "Guerreiro":
                ataque =  "espada"
                break
            case "Monge":
                ataque = "Artes Marciais"
                break
            case "Ninja":
                ataque = "shuriken"
                break
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} atacou usando ${ataque}`)
    }

}

let heroi1 = new heroi("Spadachin", 70, "Guerreiro")
heroi1.atacar()

let heroi2 = new heroi("Penelope", 100, "Ninja")
heroi2.atacar()

let heroi3 = new heroi("Naruto", 500, "Monge")
heroi3.atacar()

let heroi4 = new heroi("Tarzan", 40, "Mago")
heroi4.atacar()
