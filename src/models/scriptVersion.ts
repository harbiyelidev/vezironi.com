export interface News {
    [key: string]: string[];
}

export interface ScriptVersion {
    name: string;
    version: string;
    news: News;
}