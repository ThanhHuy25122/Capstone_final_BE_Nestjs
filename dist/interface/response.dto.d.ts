export interface Response<C> {
    statusCode: number;
    message: string;
    content: C | null;
}
