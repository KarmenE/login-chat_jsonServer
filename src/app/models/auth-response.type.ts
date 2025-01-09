export interface AuthResponse {
    accessToken: string;
    user: {
      // username: string;
      email: string;
      id: number; 
    };
}
  