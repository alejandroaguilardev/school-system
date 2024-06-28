import { repositoryMock } from '../../common/domain/repository.mock';
export const classroomRepositoryMock = {
  ...repositoryMock,
  searchByIdStudents: jest.fn()
};
