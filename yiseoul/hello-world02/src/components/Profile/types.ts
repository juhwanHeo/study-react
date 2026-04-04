export type ProfileInfo = {
  id: String;
  name: string;
  age: number;
  birth: string;
  isCheck: boolean;
}

export type ProfileProps = Omit<ProfileInfo, 'id'>