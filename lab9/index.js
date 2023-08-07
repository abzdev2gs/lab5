$(document).ready(function() {
    String.prototype.filter = function(bannedWords) {
        if (!Array.isArray(bannedWords)) {
            bannedWords = [bannedWords];
        }
        let phrases = this.split(' ');
        const filtered= []
        $.each(phrases, (_, word) => {
            if(!bannedWords.includes(word)) {
                filtered.push(word)
            }
        });
        return filtered.join(' ');
    }

    console.log("\n------Testing fitler function--------------- ");
    console.log("'This house is not nice!.filter(not):'");
    console.log("This house is not nice!".filter('not'));
    console.log("------Done testing filter---------------\n ");



    Array.prototype.bubbleSort = function() {
        let len = this.length;
        for (let i = 0; i < len ; i++) {
            for(let j = 0 ; j < len - i - 1; j++) {
                if (this[j] > this[j + 1]) {
                    let temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
                }
            }
        }
        return this;
    };


    console.log("\n------Testing Array bublesort function--------------- ");
    console.log("'[6,4,0,3,-2,1].bubbleSort(): '");
    console.log([6,4,0,3,-2,1].bubbleSort());
    console.log("------Done testing Array buble sort---------------\n ");


    function Person1(name) {
        this.name = name;
    }
    function Teacher1(name) {
        Person1.call(this, name);
    }
    Teacher1.prototype = Object.create(Person1.prototype);
    Teacher1.prototype.constructor = Teacher1;
    Teacher1.prototype.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
    };

    console.log("--------Testing method 1 -------")
    var john = new Teacher1("John");
    john.teach("Math"); 
    console.log("--------Done Testing method 1 -------")

    const createPerson = (name) => {
        return {
            name: name
        };
    };

    const createTeacher = (name) => {
        let teacher = Object.create(createPerson(name));
        teacher.teach = (subject) => {
            console.log(teacher.name + " is now teaching " + subject);
        };
        return teacher;
    };

    console.log("--------Testing method 2 -------")

    let jane = createTeacher("Jane");
    jane.teach("English");

    console.log("--------Done Testing method 2 -------")


    //  #4 
    // # approach 1
    let Person = {
        name: 'John Doe',
        age: 35,
        greeting: function() {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute: function() {
            console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`);
        }
    };

    let Student = Object.create(Person);
    Student.major = 'Computer Science';
    Student.greeting = function() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };

    let Professor = Object.create(Person);
    Professor.department = 'Engineering';
    Professor.greeting = function() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    };

    let student = Object.create(Student);
    student.name = 'Jane Doe';
    student.age = 22;
    student.greeting();
    student.salute();

    let professor = Object.create(Professor);
    professor.name = 'Dr. Smith';
    professor.age = 45;
    professor.greeting();
    professor.salute();


    // #4 approach 2
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }

    Person2.prototype.greeting = function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    }

    Person2.prototype.salute = function() {
        console.log(`Good morning!, and in case I dont see you, good afternoon, good evening and good night!`);
    }

    function Student2(name, age, major) {
        Person2.call(this, name, age);
        this.major = major;
    }

    Student2.prototype = Object.create(Person2.prototype);
    Student2.prototype.constructor = Student2;

    Student2.prototype.greeting = function() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };

    function Professor2(name, age, department) {
        Person2.call(this, name, age);
        this.department = department;
    }

    Professor2.prototype = Object.create(Person2.prototype);
    Professor2.prototype.constructor = Professor2;

    Professor2.prototype.greeting = function() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    };

    let student2 = new Student2('Jane Doe', 22, 'Computer Science');
    student2.greeting();
    student2.salute();

    let professor2 = new Professor2('Dr. Smith', 45, 'Engineering');
    professor2.greeting();
    professor2.salute();

});
