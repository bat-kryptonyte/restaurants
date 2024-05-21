import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    filterItems: <T extends { price: number; description: string }>(
      items: T[],
    ) => T[];
  }
}
