import React, {Component} from 'react';
import math from 'mathjs';
import * as icon from '../../assets';
import * as Display from '../Display';
import * as Key from '../Key';
import './index.css';

const DEFAULT_DISPLAY_INPUT = ''; // Default input value in display
const DEFAULT_DISPLAY_OUTPUT = 0; // Default ouput value in display

// Focus and place pointer at the end of display input
function inputFocus() {
	const ele = document.getElementById('display-input');
	if (ele) { // In case of errors while testing
		ele.focus();
		const val = ele.value;
		ele.value = '';
		ele.value = val;
	}
}

// Target back to input when key is pressed on window
window.onkeydown = function () {
	const ele = document.getElementById('display-input');
	if (document.activeElement !== ele) {
		inputFocus();
	}
}

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			displayInput: DEFAULT_DISPLAY_INPUT,
			displayOutput: DEFAULT_DISPLAY_OUTPUT
		}

		this.onDisplayChange = this.onDisplayChange.bind(this);
		this.onKeyPressHandle = this.onKeyPressHandle.bind(this);
		this.calculate = this.calculate.bind(this);
		this.deleteKeyHandle = this.deleteKeyHandle.bind(this);
		this.allClearKeyHandle = this.allClearKeyHandle.bind(this);
	}

	// Handles changes in the display input
	onDisplayChange(e) {
		const display = e.target.value.replace(/[\u002A]/g, '×').replace(/[\u002F]/g, '÷').replace(/[^\u0028\u0029\u002B\u002D\u002E\u0030-\u0039\u0065\u00D7\u00F7]/g, '');
		this.setState({displayInput: display});
	}

	// Handles key press
	onKeyPressHandle(e) {
		this.setState({displayInput: this.state.displayInput + e.target.value});
		inputFocus();
	}

	// Calculate data from the input and output in tht display input
	calculate(e) {
		try {
			const math_result = math.round(eval(this.state.displayInput.replace(/[\u00D7]/g, '*').replace(/[\u00F7]/, '/')), 10);
			if (math_result.toString().length <= 10) {
				this.setState({displayOutput: math_result});
			} else {
				this.setState({displayOutput: math_result.toExponential(10)});
			}
		} catch (e) {
			this.setState({displayOutput: 'Syntax error :-/'});
		}
		inputFocus();
		e.preventDefault();
	}

	// 'DEL' Delete key handler
	deleteKeyHandle() {
		this.setState({displayInput: this.state.displayInput.slice(0, -1)});
	}

	// 'AC' All Clear key handler
	allClearKeyHandle() {
		this.setState({displayInput: DEFAULT_DISPLAY_INPUT});
		this.setState({displayOutput: DEFAULT_DISPLAY_OUTPUT});
	}

	render() {
		const {displayInput, displayOutput} = this.state;
		return (
				<div className='container h-100'>
					<div className="d-flex justify-content-center align-items-center h-100">
							<div className='col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto text-light'>
								<header className='col-12 bg-danger'>
									<img className='d-inline-block mb-3' src={icon.logo} style={{height: '3rem'}} alt='React Logo'/>
									<h2 className='text-light text-center py-3 d-inline-block'>Reaculator</h2>
								</header>
								<section className='col-12 bg-light'>
									<Display.Input onSubmit={this.calculate} value={displayInput} onChange={this.onDisplayChange}/>
									<Display.Output solution={displayOutput}/>
								</section>
								<div className='col-12 bg-danger'>
									<div className='row'>
										<Key.Operations onClick={this.onKeyPressHandle}/>
										<Key.Numbers onClick={this.onKeyPressHandle}/>
										<section className='col-3 px-0'>
											<Key.Delete onClick={this.deleteKeyHandle}/>
											<Key.AllClear onClick={this.allClearKeyHandle}/>
											<Key.Solve onClick={this.calculate}/>
										</section>
									</div>
								</div>
								<div className='col-12 pt-3 pb-1 d-flex align-items-center justify-content-center'>
									<a href='https://instagram.com/tobiolalusi' target='_blank' rel='noopener noreferrer'
									   className='d-flex flex-column mx-2'>
										<img src={icon.instagram} style={{height: '2.5rem'}} alt='Instagram'/>
									</a>
									<a href='https://linkedin.com/in/tobiolalusi' target='_blank' rel='noopener noreferrer'
									   className='d-flex flex-column mx-1'>
										<img src={icon.linkedin} style={{height: '2.75rem'}} alt='LinkedIn'/>
									</a>
									<a href='https://github.com/tobiolalusi' target='_blank' rel='noopener noreferrer'
									   className='d-flex flex-column mx-2'>
										<img src={icon.github} style={{height: '2.5rem'}} alt='GitHub'/>
									</a>
									<a href='mailto:hello@tobiolalusi.com' target='_blank' rel='noopener noreferrer'
									   className='d-flex flex-column mx-2'>
										<img src={icon.email} style={{height: '2.5rem'}} alt='Email'/>
									</a>
								</div>
								<p className='text-center small'>&copy; 2018 Reaculator by Oluwatobiloba Olalusi.</p>
							</div>
						</div>
				</div>
		)
	}

	// Autofocus once component is mounted
	componentDidMount() {
		inputFocus();
	}
}

export default App;