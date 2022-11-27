export {};

declare global {
  namespace NodeJS {
    interface _IProcessEnv {
      PORT: number;
      DB_URL: string;
      DB_NAME: string;
      DB_COLLECTION_NAME: string;
      LOCAL_ADDRESS: string;
      API: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
