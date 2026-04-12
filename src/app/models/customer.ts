export class Customer{

    constructor(
        public id: number | null,
        public name: string,
        public cpf: number | null,
        public genero?: string
    ) {

    }
}