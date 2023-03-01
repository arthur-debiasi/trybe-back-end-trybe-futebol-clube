interface ILoginService {
  // listAll(): Promise<ITeams[]>;
  auth(email: string, password: string): void;
}

export default ILoginService;
