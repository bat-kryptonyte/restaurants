import { Request, Response, NextFunction } from 'express';

interface Item {
  name: string;
  price: number;
  description: string;
}

export const requestWrapper = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  console.log(`Received ${req.method} request for ${req.url}`);

  const minPrice = req.query.minPrice as string;
  const maxPrice = req.query.maxPrice as string;
  const descriptionContains = req.query.descriptionContains as string;

  const filterItems = <T extends Item>(items: T[]): T[] => {
    return items.filter(
      (item) =>
        (!minPrice || item.price >= parseFloat(minPrice)) &&
        (!maxPrice || item.price <= parseFloat(maxPrice)) &&
        (!descriptionContains ||
          item.description.toLowerCase().includes(descriptionContains) || item.name.toLowerCase().includes(descriptionContains)),
    );
  };

  req.filterItems = filterItems;

  next();
};
