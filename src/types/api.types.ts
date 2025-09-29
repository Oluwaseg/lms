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
