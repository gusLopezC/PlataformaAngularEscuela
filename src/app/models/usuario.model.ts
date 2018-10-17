export class  Usuario {

    constructor(
        public usuario: string,
        public name: string,
        public email: string,
        public password: string,
        public imagen?: string,
        public escuela?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string,

    ) { }

}
