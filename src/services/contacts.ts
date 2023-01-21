import { BASE_URL } from '../config';

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/contacts`);
  return response.json();
};
