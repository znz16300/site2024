export interface AppState {
  showMsg: boolean;
  userLoggedIn: boolean;
  productsAmount: number;
  changesInCart: number;
  user: OAuthResp | null;
  history: string[];
  // here we can add new parameters
}

export interface OAuthResp {
  clientId: string;
  credential: string;
  access_token: string;
  authuser: string;
  expires_in: string;
  prompt: string;
  scope: string;
  select_by: string;
  token_type: string;
}

export interface MainProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

export interface GoogleUser {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
}
