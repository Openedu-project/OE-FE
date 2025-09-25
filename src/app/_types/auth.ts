// Login Part
export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    message: string
    token: string
}

export interface LoginError {
    status: number
    message: string
    timestamp: string
    path: string
}

// Signup Part
export interface SignupRequest {
    name: string
    email: string
    password: string
}

export interface UserResponse {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    name: string;
    email: string;
    role: string;
    Wallet: any | null;
}
  
export interface WalletResponse {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    UserID: number;
    AccountID: string;
    PublicKey: string;
    User: any | null;
}
  
export interface SignupResponse {
    message: string;
    user: UserResponse;
    wallet: WalletResponse;
}