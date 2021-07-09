import React, { FC } from 'react';

import Part from './Part';
import { CoursePart } from '../types';

interface ContentProps {
	courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps): JSX.Element => {
	return (
		<div>
			{courseParts.map((part, index) => (
				<Part key={index} part={part} />
			))}
		</div>
	);
};

export default Content;
