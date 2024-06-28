export const COLLECTIONS = {
    teachers: 'teachers',
    students: 'students',
    classrooms: 'classrooms'
} as const;

export type Collections = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];
