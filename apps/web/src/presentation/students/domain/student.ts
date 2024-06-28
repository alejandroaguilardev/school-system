export interface Student {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

export interface NewStudent extends Omit<Student, "id"> { }
