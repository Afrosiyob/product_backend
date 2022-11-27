import "dotenv/config";

export const appConfig = {
  port: process.env.PORT,
  localAddress: process.env.LOCAL_ADDRESS,
  api: process.env.API,
  app: process.env.ENV,
};
