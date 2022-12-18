export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  MemoList: undefined;
  MemoDetail: { id: string };
  MemoEdit: { id: string; memoBody: string };
  MemoCreate: undefined;
};

export type MemoData = {
  id: string;
  memoBody: string;
  updatedAt?: Date;
};
