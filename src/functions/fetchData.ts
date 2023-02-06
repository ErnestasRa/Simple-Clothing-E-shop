import { get } from './http';

const getData = async (url: string, setData: React.Dispatch<React.SetStateAction<ItemType[]>>) => {
    const res = await get(`${url}`);
    if (!res.error) setData(res);
    else throw new Error('Error');
};

export default getData;
