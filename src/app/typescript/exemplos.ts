import { NgModel, UntypedFormBuilder } from "@angular/forms";
import { HelloWorld } from "../hello-world/hello-world";
import { RandomNumbers, pi, returnPI, phi } from "./math";

function calcularArea(){
    const obj = {width: 10, height: 30}

    const area = obj.width * obj.height;

    return area;
}
function usuario(){
    const usuario = {
        nome: "Nicolas",
        idade: 21
    }
}

function calculo(){
    return Math.random() < 5;
}

function Validacao(){
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if(valor === 'a'){
        ///...
    }
    else if(valor !== 'b'){
        ///...
    }
}

function exibirMensagem(pessoa: string, data: string): void{

        console.log('Ola' + pessoa + ', hoje é ' + data);
}
exibirMensagem('Nicolas', '06/02/2026');

///Tipos em variáveis
let mensagem: string = 'hello world';

let mensagem2 = 'hello world';

let number1: number = 3.3;

let number2 = 4;

let obj:any = {x: 0};//any sem erros de checagem

let isTrue: boolean = false;

//definição em tipos em funções
function olaMundo(mensagem:string): string{

    return `Ola mundo${mensagem}`;
}
//object types
function exibirCoorddenadas(pt: {x: number, y: number}): string{
    
    return `${pt.x} ${pt.y}`;
}

exibirCoorddenadas({x:4, y: 6});

//parametros opcinais 
function exibirNome(obj: {nome:string, sobrenome?:string}): string{

    let mensagem ='';

    if(obj.sobrenome === undefined){
        mensagem = `seu nome é${obj.nome}`;
    }
    else
    {
        mensagem = `Seu nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}`;
    }

    return mensagem;
}

exibirNome({nome: 'Nicolas'}); 

exibirNome({nome: 'Nicolas', sobrenome:'Henrique'});

//Union types
function exibirIds(id: number | string){

    let mensagem = '';

    if(typeof id === 'number'){
        mensagem = 'o seu id numérico é ' + id.toString();
    }
    else{
        mensagem = id.toUpperCase();
    }

    return mensagem;
}
exibirIds(3);

exibirIds('345');

//Type or Interface(POO herdadas)
type Ponto = {
    x: number,
    y: number
}

function imprimirPonto(p: Ponto){

    return ` O seu ponto é ${p.x} ${p.y}`;
}

imprimirPonto({x: 3, y: 5});

//Literal types
function imprimirTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){
    ///valores pre-definidos
} 
imprimirTexto('meu texto', 'left');

//null e underfined
var teste = null; 

console.log(teste); ///null

var teste2;

console.log(teste2);///undefined

///OPERADOR NÃO NULO
function vivendoPerigosamente(x?: number | null){

    console.log(x?.toFixed());
}
vivendoPerigosamente();

///arrays 
function fazerAlgo(lista: Array<string>){

}
function fazerAlgoTambém(lista: string[]){

}
fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambém(['hello', 'world']);

//classes
class Point{
    x: number = 0;
    y: number = 0;
}
let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x} ${p.y}`);

//construtor
class BoasVindas {
    mensagem: string;

    constructor(){
        this.mensagem = 'Bem-vindo';
    }
}
let m = new BoasVindas();

console.log(m.mensagem);

//Readonly e Metodos
class Saudacoes{
    readonly mensagem: string;

    constructor(){
        this.mensagem = 'muito bem vindo';
    }
   
    dizerOla(){
        console.log(this.mensagem)
    }
}

let s = new Saudacoes();

//Getters e Setters
class C{
    private _lenght = 0;

    get lenght(): number{

        if(this.lenght > 0)
            return 100;
        else
            return this._lenght;
    }

    set length(value: number){
        
        if(value > 10)
            this._lenght = value;
    }
}

let c = new C();

c.length = 100;

console.log(C.length);

//implements
interface Pingaval{
    ping(): void
}

class Sonar implements Pingaval{
    ping(): void {
        console.log('ping');
    }

}

class Ball implements Pingaval{
    ping(): void{

    }
}
let sonar = new Sonar();

sonar.ping();

//extends:Public,protected e private
class Animal{
    protected andar(){
        console.log('animal andando');
    }
    constructor(){
        this.andar();
    }
}
class cachorro extends Animal{
    private latir(){
        console.log('au au');
    }
    constructor(){
        super();
        this.latir();
    }
}

let viraLata = new cachorro();

//export e import
let g = new HelloWorld();

let r = new RandomNumbers();

console.log(pi);

