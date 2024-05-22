import { Router } from 'express';
import { menuData } from './menuData';
import { requestWrapper } from './middleware';
import { SandwichType } from './utils/enum';

const router = Router();

router.use(requestWrapper);

router.get('/appetizers', (req, res) => {
  const filteredItems = req.filterItems(menuData.appetizers);
  res.json(filteredItems);
});

router.get('/entrees', (req, res) => {
  const filteredItems = req.filterItems(menuData.entrees);
  res.json(filteredItems);
});

router.get('/sandwiches', (req, res) => {
  const allSandwiches = menuData.sandwiches.flatMap((sandwichType) => ({
    ...sandwichType,
    items: req.filterItems(
      sandwichType.items.map((item) => ({
        price: 'price' in item ? item.price : 0,
        ...item,
      })),
    ),
  }));
  res.json(allSandwiches);
});

router.get('/sandwiches/cold', (req, res) => {
  const coldSandwiches = menuData.sandwiches.find(
    (s) => s.type === SandwichType.Cold,
  );
  if (coldSandwiches) {
    coldSandwiches.items = req.filterItems(
      coldSandwiches.items.map((item) => ({
        price: 'price' in item ? item.price : 0,
        ...item,
      })),
    );
    res.json(coldSandwiches);
  } else {
    res.status(404).send('Cold sandwiches not found');
  }
});

router.get('/sandwiches/hot', (req, res) => {
  const hotSandwiches = menuData.sandwiches.find(
    (s) => s.type === SandwichType.Hot,
  );
  if (hotSandwiches) {
    hotSandwiches.items = req.filterItems(
      hotSandwiches.items.map((item) => ({
        price: 'price' in item ? item.price : 0,
        ...item,
      })),
    );
    res.json(hotSandwiches);
  } else {
    res.status(404).send('Hot sandwiches not found');
  }
});

router.get('/soup-salad-combos', (req, res) => {
  const filteredItems = req.filterItems(menuData.soupSaladCombos);
  res.json(filteredItems);
});

router.get('/fajitas', (req, res) => {
  const filteredItems = req.filterItems(menuData.fajitas);
  res.json(filteredItems);
});

router.get('/tacos', (req, res) => {
  const filteredItems = req.filterItems(menuData.tacos);
  res.json(filteredItems);
});

router.get('/enchiladas', (req, res) => {
  const filteredItems = req.filterItems(menuData.enchiladas);
  res.json(filteredItems);
});

router.get('/quiche', (req, res) => {
  const filteredItems = req.filterItems(menuData.quiche);
  res.json(filteredItems);
});

router.get('/green-salads', (req, res) => {
  const filteredItems = req.filterItems(menuData.greenSalads);
  res.json(filteredItems);
});

export default router;
