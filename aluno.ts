
class Aluno{

     nome: string;
     idade: number;
     curso: string;

     constructor(nome:string,idade:number,curso:string){
        this.nome= nome;
        this.idade= idade;
        this.curso= curso;
     }
    
 apresentar(){
        return(`Olá, eu me chamo ${this.nome}, tenho ${this.idade} anos e faço o curso de ${this.curso}.`)
     } 
     
}
const aluno = new Aluno("Livia", 19, "Front End BFD");
console.log(aluno.apresentar());
const aluno2 = new Aluno("João Santos", 20, "Engenharia de Software");
console.log(aluno2.apresentar());