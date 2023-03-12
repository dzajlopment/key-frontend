import { KeyModel } from '../models/key';
import { Key } from './key';

export const Floor = (props: { keys: KeyModel[], name: string }) => {
	return (
		<div className="flex flex-col gap-12">
			<div className='flex flex-col justify-center items-center py-4 border-b-[1px] border-black'>
				<h2>{props.name}</h2>
			</div>
			<div className='grid md:grid-cols-8 justify-items-center gap-y-8'>
				{props.keys.map(key => (
					<Key name={key.name} takenBy={key.takenBy} />
				))}
			</div>
		</div>
	);
}