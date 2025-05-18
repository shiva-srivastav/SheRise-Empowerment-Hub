classDiagram
    class Person {
        -String name
        -int age
        +void introduce()
    }

    class Student {
        -int rollNumber
        +void attendClass()
    }

    class Teacher {
        -String subject
        +void takeClass()
    }

    Person <|-- Student
    Person <|-- Teacher
