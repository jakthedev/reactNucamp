class Bootcamp {
    constructor(name, level, students = []){
    this.name = name; 
    this.level = level; 
    this.students = students;
}

  registerStudent(student) {
    if (this.students.filter( s => s.email === students.email).length){
        console.log("Student is already resgistered!"); 
    } else { 
        console.log(" Registering to the bootcamp Web Dev Fundamentals!"); 
        this.students.push(student);
    }
    return this.students;
 }
}


class Student {
    constructor(name, email, community){
        this.name = name; 
        this.email = email; 
        this.community = community;
    }
}

