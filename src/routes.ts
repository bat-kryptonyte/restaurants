import { Router } from 'express';
import { menuData } from './menuData';
import { requestWrapper } from './middleware';

const router = Router();

router.use(requestWrapper);

router.get('/appetizers', (req, res) => {
  res.json(menuData.appetizers);
});

router.get('/sandwiches', (req, res) => {
  res.json(menuData.sandwiches);
});

router.get('/entrees', (req, res) => {
  res.json(menuData.entrees);
});

router.get('/soup-salad-combos', (req, res) => {
  res.json(menuData.soupSaladCombos);
});

router.get('/fajitas', (req, res) => {
  res.json(menuData.fajitas);
});

router.get('/tacos', (req, res) => {
  res.json(menuData.tacos);
});

router.get('/enchiladas', (req, res) => {
  res.json(menuData.enchiladas);
});

router.get('/quiche', (req, res) => {
  res.json(menuData.quiche);
});

router.get('/green-salads', (req, res) => {
  res.send(JSON.stringify(menuData.greenSalads, null, 2));
});

export default router;
