export interface Teacher {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

export interface NewTeacher extends Omit<Teacher, "id"> { }
