import { Data } from "../pages/Categories/DataTypes";

export interface ApiResponse {
  statusCode: number;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
    data: Data[];
  };
  message: string;
  success: boolean;
}