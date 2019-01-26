import React from 'react';

const Numbers = ({ onClick }) =>
	<section className='col-9 px-0'>
		<button onClick={ onClick } value='7' className='btn btn-danger col-4 py-4'>7</button>
		<button onClick={ onClick } value='8' className='btn btn-danger col-4 py-4'>8</button>
		<button onClick={ onClick } value='9' className='btn btn-danger col-4 py-4'>9</button>

		<button onClick={ onClick } value='4' className='btn btn-danger col-4 py-4'>4</button>
		<button onClick={ onClick } value='5' className='btn btn-danger col-4 py-4'>5</button>
		<button onClick={ onClick } value='6' className='btn btn-danger col-4 py-4'>6</button>

		<button onClick={ onClick } value='1' className='btn btn-danger col-4 py-4'>1</button>
		<button onClick={ onClick } value='2' className='btn btn-danger col-4 py-4'>2</button>
		<button onClick={ onClick } value='3' className='btn btn-danger col-4 py-4'>3</button>

		<button onClick={ onClick } value='0' className='btn btn-danger col-4 py-4'>0</button>
		<button onClick={ onClick } value='.' className='btn btn-danger col-4 py-4'>.</button>
		<button onClick={ onClick } value='e' className='btn btn-dark col-4 py-4'>EXP</button>
	</section>

export { Numbers };