import { Address } from "./address";


export class User {

    username: string;
    email: string;
    password: string;
    adress: Address;

    constructor(){
        this.username = "";
        this.email = "";
        this.password = "";
        this.adress = new Address();
    }
}