export class  Usuario {

    constructor(
        public name: string,
        public email: string,
        public password: string,
        public imagen?: string,
        public escuela?: string,
        public serial?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string,

    ) { }

}
