import { useEffect, useState } from 'react';
import Keys from '../assets/keys.json';
import { KeyModel } from '../models/key';
import { Floor } from './floor';

export const Keybox = () => {
	const [keys, setKeys] = useState([] as KeyModel[]);

	useEffect(() => {
		setKeys(Keys.keys);
	}, []);

	const firstFloorKeys = keys.filter(key => key.floor === 0);
	const secondFloorKeys = keys.filter(key => key.floor === 1);

	return (
		<div className='flex flex-col gap-12 px-12'>
			<Floor name='Parter' keys={firstFloorKeys} />
			<Floor name='Drugie piętro' keys={secondFloorKeys} />
		</div>
	)
}