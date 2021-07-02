export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: any;

    constructor(id = 0, first_name = '', last_name = '', email = '', role = null) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
    }
}