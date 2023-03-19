import Keys from '../assets/keys.json';
import { useAppDispatch } from '../hooks';
import { useEffect, ReactNode } from 'react';
import { setKeys } from '../store/slices/keysSlice';

export const DataFetcher = (props: { children: ReactNode }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setKeys(Keys.keys));
	});

	return <>{ props.children }</>
};