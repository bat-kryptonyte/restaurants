import { Router } from 'express';
import { menuData } from './menuData';
import { requestWrapper } from './middleware';

const router = Router();

router.use(requestWrapper);

router.get('/appetizers', (req, res) => {
  const filteredItems = req.filterItems(menuData.appetizers);
  res.json(filteredItems);
});

router.get('/sandwiches', (req, res) => {
  const filteredItems = req.filterItems(menuData.sandwiches);
  res.json(filteredItems);
});

router.get('/entrees', (req, res) => {
  const filteredItems = req.filterItems(menuData.entrees);
  res.json(filteredItems);
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
