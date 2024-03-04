import { createContext } from 'react';

export const UserContext = createContext({
  user: {
    name: 'NAME_PLACEHOLDER',
    surname: 'SURNAME_PLACEHOLDER',

    faculty: 'FACULTY_PLACEHOLDER',
    department: 'DEPARTMENT_PLACEHOLDER',

    title: 'TITLE_PLACEHOLDER',

    semester: 'SEMESTER_PLACEHOLDER',
    date: 'DATE_PLACEHOLDER',
  },
  setUser: () => { },
});

export const defaultUser = {
  name: '',
  surname: '',

  faculty: '',
  department: '',

  title: '',

  semester: '',
  date: '',
};
