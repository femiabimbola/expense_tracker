import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constant/categories';

const useTransactions = (title) => {
    
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title)
    const total = transactionsPerType.reduce((accumulator, currentVal) => accumulator += currentVal.amount );

    const categories = title === 'income' ? incomeCategories:expenseCategories;
    console.log({total, categories, transactionsPerType})

    transactionsPerType.forEach( t => {
        const category = categories.find(c => c.type === t.category)
    });
}