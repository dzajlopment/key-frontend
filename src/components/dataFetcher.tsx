import Data from '../assets/data.json';
import { useAppDispatch } from '../hooks';
import { useEffect, ReactNode } from 'react';
import { setKeys } from '../store/slices/keysSlice';
import { setTeachers } from '../store/slices/teachersSlice';

export const DataFetcher = (props: { children: ReactNode }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setKeys(Data.keys));
		dispatch(setTeachers(Data.teachers));
	});

	return <>{ props.children }</>
};