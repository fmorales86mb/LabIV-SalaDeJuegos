import { Credential } from './credential';

export class RegisterCredential extends Credential{
    private name: string

    constructor (email:string, pass:string, name:string){
        super(email, pass);
        this.name = name;
    }
}