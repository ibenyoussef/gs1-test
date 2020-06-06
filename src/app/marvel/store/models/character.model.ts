export interface Character {
    id: number;
    name: string;
    thumbnail: { path: string, extension: string };
}

export interface PaginedData<T> {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results: T[];
}