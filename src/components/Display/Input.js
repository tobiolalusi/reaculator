import React from 'react';

const Input = ({ onSubmit, value, onChange }) =>
	<form className='col-12 px-0 pt-2 pb-0' onSubmit={ onSubmit }>
		<input id='display-input' maxLength='99' autoComplete="off" className='DisplayInput form-control col-12 pb-0 bg-light text-dark' value={ value } onChange={ onChange } />
	</form>

export { Input };
