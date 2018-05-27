declare namespace L04_Interfaces {
    interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        course: string;
    }
    interface Studis {
        [matrikel: string]: Studi;
    }
    let studiHomoAssoc: Studis;
}
