class student {
   constructor(id, name, grades, attendance) {
        this.id = id;
             this.name = name;
         this.grades = grades;
     this.attendance = attendance;
  }
calculateAverageGrade() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
           return total / this.grades.length;
  }
getLetterGrade(average) {
             if (average >= 90) {
                   return "A";
                        } else if (average >= 80) {
                  return "B";
             } else if (average >= 70) {
         return "C";
     }
  else if (average >= 60){
           return "D";
         }
                 else if (average >= 50) {
                    return "E";
  } 
                 else {
            return "F";
          }
        }
getFinalResult(average) {
     if (average >= 50 && this.attendance >= 75) {
         return "ناجح";
   } else {
         return "يحتاج الي مراجعة";
              }
           }
        }
const studentslist =[
        new student(1, "ahmed", [90, 85, 95], 95),
               new student(2, "mohamed", [45, 40, 50], 80),
             new student(3, "sara",[70, 75, 80], 90),
       new student(4, "Omar",[42, 48, 45], 70)
   ];
const strugglingStudents = studentslist.filter(student => {
                 const average = student.calculateAverageGrade();
              return average >= 40 && average <= 49;    
            });
    const mercyStudents = strugglingStudents.map(student =>{
             const oldAverage = student.calculateAverageGrade();
                 const newAverage = oldAverage + 5;
                      return {
                         name: student.name,
                 oldAverage: oldAverage,
            newAverage: newAverage,
            };
         });
  const totalAftermercy = mercyStudents.reduce((sum, student) => {
               return sum + student.newAverage;
        }, 0);
  let mercyAverage = 0;
            if (mercyStudents.length > 0) {
                mercyAverage = totalAftermercy / mercyStudents.length;
    }
             studentslist.forEach(student => {
                   const Average = student.calculateAverageGrade();
                       console.log("student name:", student.name);
                          console.log("Average:", Average);
                     console.log("Grade:", student.getLetterGrade(Average));
               console.log("Final Result:", student.getFinalResult(Average));
             });
          console.log("mercy student:", mercyStudents);
    console.log("Average After mercy:", mercyAverage);



    
   







