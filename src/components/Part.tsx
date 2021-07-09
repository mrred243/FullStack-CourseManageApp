import React from 'react';

import { CoursePart } from '../types';

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
	const assertNever = (value: never): never => {
		throw new Error(
			`Unhandled discriminated union member: ${JSON.stringify(value)}`,
		);
	};

	switch (part.type) {
		case 'normal':
			return (
				<div>
					<h3>
						{part.name}
						{part.exerciseCount}{' '}
					</h3>
					<p>
						<i>{part.description}</i>
					</p>
				</div>
			);
			break;
		case 'groupProject':
			return (
				<div>
					<h3>
						{part.name}
						{part.exerciseCount}{' '}
					</h3>
					<p>project exercises {part.groupProjectCount}</p>
				</div>
			);
			break;
		case 'submission':
			return (
				<div>
					<h3>
						{part.name} {part.exerciseCount}
					</h3>
					<p>
						<i>{part.description}</i>
					</p>
					<p>submit to {part.exerciseSubmissionLink}</p>
				</div>
			);
			break;
		case 'special':
			return (
				<div>
					<h3>
						{part.name} {part.exerciseCount}
					</h3>
					<p>
						<i>{part.description}</i>
					</p>
					<p>required skills: {part.requirements.join(', ')}</p>
				</div>
			);
		default:
			return assertNever(part);
	}
};

export default Part;
