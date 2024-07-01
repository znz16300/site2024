export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  authuser?: string;
  prompt?: string;
  id_token?: string;
}
