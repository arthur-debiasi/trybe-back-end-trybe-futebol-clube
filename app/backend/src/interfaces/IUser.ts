export default interface IUser {
  id: number;
  teamName: string;
  username: string;
  role: string;
  email: string;
  password?: string;
}
