import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constant/categories';

const useTransactions = (title) => {
    
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
}