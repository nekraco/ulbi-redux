import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

	const dispatch = useDispatch();
	const myState = useSelector(function (s) {
		return s.ca.cash;        // !!! уточнили редуктор из root
	});


	function plus() {
		dispatch({type: 'PLUS-CASH', cash: 100,});
	}

	function minus() {
		dispatch({type: 'MINUS-CASH', cash: 90,});
	}


	return (
		<div className="App">
			<h2>This-App</h2>
			<hr/>
			<hr/>

			<div className={'myState'}>{myState}</div>
			<div>
				<button onClick={plus}>Пополнить счет</button>
				<button onClick={minus}>Снять со счета</button>

			</div>

		</div>

	);
}

export default App;
