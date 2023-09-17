class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  getMarksSum() {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  }
}

class Group {
  students = [];

  addStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
    }
  }

  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    if (this.students.length === 0) {
      return 0;
    }

    const sum = this.students.reduce(
      (acc, student) => acc + student.getAverageMark(),
      0
    );
    return sum / this.students.length;
  }

  getAverageMarksSum() {
    if (this.students.length === 0) {
      return 0;
    }

    const sum = this.students.reduce(
      (acc, student) => acc + student.getMarksSum(),
      0
    );
    return sum / this.students.length;
  }
}

const group = new Group();

group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));

console.log(group.students.length === 3);
group.addStudent({}); // Игнорируем добавление невалидных данных
console.log(group.students.length === 3);

console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);
Object.defineProperty(group, "students", { writable: false }); // Сделать group.students - readonly
console.log(group.students.length === 3);
