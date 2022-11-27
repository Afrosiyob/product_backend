import dayjs from "dayjs";
import pino from "pino";

const log = pino({
  base: {
    pid: false,
  },
  transport: {
    target: "pino-pretty",
  },
  timestamp: () => `, "time":"${dayjs().format()}"`,
});

export default log;
