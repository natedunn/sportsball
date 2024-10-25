import { isAuthed } from "./middleware/is-authed";
import { t } from "./trpc";

export const noAuthProcedure = t.procedure;
export const authProcedure = t.procedure.use(isAuthed);
