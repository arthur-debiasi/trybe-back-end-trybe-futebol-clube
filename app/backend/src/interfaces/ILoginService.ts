interface ILoginService {
  // listAll(): Promise<ITeams[]>;
  auth(email: string, password: string): void;
  role(token: string): void;
}

export default ILoginService;
