"use strict";

// 1
function addParamsToRequest(params) {
    let count = 0;

    return function(data) {
        count++;
        return {
            ...params,
            data,
            count
        };
    };
}

const sendData = addParamsToRequest({ "access-token": 'myToken' });

console.log(sendData({ key: 'value' }));
console.log(sendData({ anotherKey: 'anotherValue' }));

// 2

const obj = {
    getData: function() {
        console.log(`Person name is: ${this.name} and age ${this.age}`);
    }
};

function createGetDataFunction(name, age) {
    const context = { name, age };
    return obj.getData.bind(context);
}

const getDataForBob = createGetDataFunction('Bob', 30);
getDataForBob();

// 3
const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [
                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        {
                            name: 'file 3',
                            type: 'file',
                            size: 30
                        }
                    ]
                }
            ]
        },
        {
            name: 'file 1',
            type: 'file',
            size: 10
        },
        {
            name: 'file 2',
            type: 'file',
            size: 20
        }
    ]
};

function findFilesRecursively(obj) {
    let files = [];

    function recurse(node) {
        if (node.type === 'file') {
            files.push(node.name);
        } else if (node.children) {
            node.children.forEach(recurse);
        }
    }

    recurse(obj);
    return files;
}

console.log(findFilesRecursively(root)); // ['file 3', 'file 1', 'file 2']

// 4
class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    introduce() {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
    }
}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }

    study() {
        console.log(`Я навчаюся на ${this.course} курсі.`);
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }

    teach() {
        console.log(`Я викладаю ${this.subject}.`);
    }
}

const student = new Student('Дмитро Молодший', '+380990950995', 4);
student.introduce();
student.study();

const teacher = new Teacher('Дмитро Старший', '+380740740774', 'Право');
teacher.introduce();
teacher.teach();

// 5
function PersonES5(name, phone) {
    this.name = name;
    this.phone = phone;
}

PersonES5.prototype.introduce = function() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`);
};

function StudentES5(name, phone, course) {
    PersonES5.call(this, name, phone);
    this.course = course;
}

StudentES5.prototype = Object.create(PersonES5.prototype);
StudentES5.prototype.study = function() {
    console.log(`Я навчаюся на ${this.course} курсі.`);
};

function TeacherES5(name, phone, subject) {
    PersonES5.call(this, name, phone);
    this.subject = subject;
}

TeacherES5.prototype = Object.create(PersonES5.prototype);
TeacherES5.prototype.teach = function() {
    console.log(`Я викладаю ${this.subject}.`);
};

const studentES5 = new StudentES5('Олег Міні', '+380990990999', 2);
studentES5.introduce();
studentES5.study();

const teacherES5 = new TeacherES5('Олег Максі', '+380110110110', 'Математика');
teacherES5.introduce();
teacherES5.teach();
