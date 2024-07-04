export interface AppState {
  showMsg: boolean;
  userLoggedIn: boolean;
  productsAmount: number;
  changesInCart: number;
  user: IUser | null;
  history: string[];
  oauth: OAuthObject | null;
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

export interface IUser {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
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

export interface OAuthObject {
  google_public_api_key: string;
  google_api_key: string;
  google_api_client_id: string;
  google_api_client_secret: string;
}
