export default interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: 'male' | 'female' | '';
}
