import IExpenseItem, { IExpenseCreateItem } from "../models/expense";
import axios from 'axios';

const getAllExpenseItems = async() => {

    const getItemsUrl = "http://localhost:4000/items";

    console.log(getItemsUrl);

    const responseData = await axios.get<IExpenseItem[]>(getItemsUrl);
    return responseData.data;
    
}

const postExpenseItem = async(expenseCreateItem : IExpenseCreateItem) => {
    const postItemUrl = "http://localhost:4000/items";

    console.log(postItemUrl);

    const responseData = await axios.post<IExpenseItem>(
        postItemUrl, expenseCreateItem, 
        {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        );
    return responseData.data;
    
}

export {getAllExpenseItems, postExpenseItem};
    