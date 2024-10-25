import type { AppRouter } from '@/lib/trpc/routers/_app';

import { createTRPCReact } from '@trpc/react-query';

export const api = createTRPCReact<AppRouter>();
