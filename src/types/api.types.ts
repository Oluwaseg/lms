// Pagination metadata
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Generic API response wrapper
export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
  meta?: PaginationMeta;
  errors?: {
    field?: string;
    message: string;
  }[];
  timestamp: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  code?: string;
  isVerified?: boolean;
  lastLogin?: string;
}
