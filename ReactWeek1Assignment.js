class Student {
    constructor(name, email, community){
        this.name = name;
        this.email=email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;

    }

    registerStudent(studentToRegister){
//        const matchedEmail = this.students.filter( registeredStudents => registeredStudents.email === studentToRegister.email);
        const matchedEmail = this.students.includes(studentToRegister)
        //console.log(matchedEmail);
        if (matchedEmail === false ) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        } else{
            console.log (`Student already registered.`);
        }
        return this.students;
    }

}

const neo = new Student("Neo", "neo@matrix.com", "Red");
const morpheous = new Student("Morpheous", "neo@matrix.com", "Blue");
const trinity = new Student("Trinity", "trinity@matrix.com", "Red");
const react = new Bootcamp("Nucamp", "Beginners");
react.registerStudent(trinity);
react.registerStudent(neo);
react.registerStudent(morpheous);
//console.log(react.students);