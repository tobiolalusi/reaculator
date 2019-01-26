import React from 'react';

const Operations = ({ onClick }) =>
	<section className='col-12 px-0'>
		<button onClick={ onClick } value='+' className='btn btn-dark col-3 py-4'>+</button>
		<button onClick={ onClick } value='-' className='btn btn-dark col-3 py-4'>-</button>
		<button onClick={ onClick } value='×' className='btn btn-dark col-3 py-4'>×</button>
		<button onClick={ onClick } value='÷' className='btn btn-dark col-3 py-4'>÷</button>
	</section>

export { Operations };