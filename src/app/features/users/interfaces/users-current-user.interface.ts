export interface UsersCurrentUserInterface {
  fullName: string;
  photo: string;
  organization: UsersOrganizationInterface;
}

export interface UsersOrganizationInterface {
  name: string;
  logo: string;
}