import { Dispatch, SetStateAction } from 'react';
import { Users } from './usertypes';

export interface AppContext {
  users: Users[][];
  page: number;
  numPerPage: number;
  paginated: Users[];
  userInput: number;
  showSidebar: boolean;
  modalLocation: { left: number; top: number };
  setModalLocation: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setPage: Dispatch<SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
  updateNumPerPage: (inputValue: number) => void;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
