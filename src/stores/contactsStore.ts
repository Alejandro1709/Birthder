import { create } from 'zustand';
import type IContact from '../types/contact';

type ContactsStore = {
  initialContacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
};

export const useContactsStore = create<ContactsStore>((set) => ({
  initialContacts: [],
  setContacts: (contacts) => set({ initialContacts: contacts }),
}));
