export interface MyResponse<C> {
  statusCode: number;
  message: string;
  content: C | null;
}
