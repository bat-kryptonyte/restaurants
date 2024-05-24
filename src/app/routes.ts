import { Router } from 'express';
import { menuData } from '../utils/menuData';
import { requestWrapper } from '../utils/middleware';
import { Request, Response } from 'express';

const router = Router();

router.use(requestWrapper);

export enum MenuCategory {
  Appetizers = 'appetizers',
  Entrees = 'entrees',
  Sandwiches = 'sandwiches',
  SoupSaladCombos = 'soup-salad-combos',
  Fajitas = 'fajitas',
  Tacos = 'tacos',
  Enchiladas = 'enchiladas',
  Quiche = 'quiche',
  GreenSalads = 'green-salads',
}

const genericMenuHandler = (req: Request, res: Response, category: string) => {
  const categoryData = menuData[category];
  if (!categoryData) {
    return res.status(404).send(`${category} not found`);
  }
  const filteredItems = req.filterItems(categoryData);
  res.json(filteredItems);
};

Object.values(MenuCategory).forEach((category) => {
  router.get(`/${category}`, (req, res) =>
    genericMenuHandler(req, res, category),
  );
});

export default router;
