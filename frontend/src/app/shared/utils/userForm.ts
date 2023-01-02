export interface UserFormLink {
  path: string;
  textInsideAnchor: string;
  textRightAnchor?: string;
  textLeftAnchor?: string;
};

export interface UserFormResult {
  email: string;
  password: string;
};