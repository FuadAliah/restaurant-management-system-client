import axiosInstance from './axiosInstance';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const get = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T>(url);
    return { data: response.data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};

const getById = async <T>(url: string, id: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get<T>(`${url}/${id}`);
    return { data: response.data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};

const post = async <T>(url: string, body: T): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.post<T>(url, body);
    return { data: response.data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};

const put = async <T>(url: string, id: string, body: Partial<T>): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.put<T>(`${url}/${id}`, body);
    return { data: response.data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};

const remove = async <T>(url: string, id: string): Promise<ApiResponse<T>> => {
  try {
    await axiosInstance.delete(`${url}/${id}`);
    return { data: null as any };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
};

export { get, getById, post, put, remove };
