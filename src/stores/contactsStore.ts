import { create } from 'zustand';
import contacts from '../data/contacts';
import type IContact from '../types/contact';

type ContactsStore = {
  initialContacts: IContact[];
  setContacts: (contacts: IContact[]) => void;
};

export const useContactsStore = create<ContactsStore>((set) => ({
  initialContacts: contacts,
  setContacts: (contacts) => set({ initialContacts: contacts }),
}));
