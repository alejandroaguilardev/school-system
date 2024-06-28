
export const paths = {
  root: '/',
  teachers: {
    root: `/profesores`,
    new: `/profesores/crear`,
    edit: (id: number) => `/profesores/${id}`,
  },
  students: {
    root: `/estudiantes`,
    new: `/estudiantes/crear`,
    edit: (id: number) => `/estudiantes/${id}`,
  },
  classrooms: {
    root: `/clases`,
    new: `/clases/crear`,
    students: (id: number) => `/clases/students/${id}`,
    teacher: (id: number) => `/clases/teacher/${id}`,
    edit: (id: number) => `/clases/${id}`,
  }
};
