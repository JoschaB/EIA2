namespace L04_Interfaces {
  // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
  export interface Studi {
    name: string;
    firstname: string;
    matrikel: number;
    age: number;
    gender: boolean;
    course: string;
  }

  // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
  export interface Studis {
    [matrikel: string]: Studi;
  }

  // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
  export let studiHomoAssoc: Studis = {};
  
  /*// Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
  export let studiSimpleArray: Studi[] = [];*/

}