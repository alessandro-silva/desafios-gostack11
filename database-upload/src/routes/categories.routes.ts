import { Router } from 'express';

import CreateCategoryService from '../services/CreateCategoryService';
// import TransactionsRepository from '../repositories/TransactionsRepository';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const categoriesRoutes = Router();

categoriesRoutes.get('/', async (request, response) => {
  // TODO
});

categoriesRoutes.post('/', async (request, response) => {
  const { title } = request.body;

  const createCategory = new CreateCategoryService();

  const category = await createCategory.execute({ title });

  return response.json(category);
});

categoriesRoutes.delete('/:id', async (request, response) => {
  // TODO
});

categoriesRoutes.post('/import', async (request, response) => {
  // TODO
});

export default categoriesRoutes;
