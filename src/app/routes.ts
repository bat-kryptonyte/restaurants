import { Router } from 'express';
import { menuData } from '../utils/menuData';
import { requestWrapper } from '../utils/middleware';
import { Request, Response } from 'express';
import { BreadType, SandwichType } from '../utils/enum';

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


interface SandwichCategory {
  type: SandwichType;
  bread: BreadType[];
  halfPrice?: number;
  fullPrice?: number;
  items: any[];
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

router.get('/sandwiches/:type', (req, res) => {
  const { type } = req.params;
  const sandwichesByType = menuData.sandwiches.filter(s => s.type.toLowerCase() === type.toLowerCase()) as SandwichCategory[];
  if (sandwichesByType.length === 0) {
    return res.status(404).send('Sandwich type not found');
  }
  const allItems = sandwichesByType.flatMap(s => s.items); 
  const filteredItems = req.filterItems(allItems);
  res.json(filteredItems);
});

export default router;
