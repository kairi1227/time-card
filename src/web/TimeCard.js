import React, {Component} from 'react';
import 'babel-polyfill';
import './TimeCard.css';
import moment from '../util/moment';
import Calendar from './Calendar';

class App extends Component {
	constructor() {
		super(...arguments);
		const year = Number(moment().format('YYYY'));
		this.state = {years: this.getYears(year), year, month: moment().getMonth()};
	}

	getYears(year) {
		return Array.from({length: 20}, (v, k) => k).map(y => year - 10 + y);
	}

	render() {
		const {years = [], year, month} = this.state;

		return (
			<div className="main">
				{/* 左边选择 */}
				<div className={'card-menu'}>
					<select value={year} onChange={v => {
						this.setState({year: v.target.value, years: this.getYears(v.target.value)});
					}}>
						{
							years.map(y => <option key={y} value={y}>{`${y} 年`}</option>)
						}
					</select>
					<div className={'months'}>
						{
							moment().month.map(m => {
								return (
									<div key={m} className={`${month === m ? 'selected' : undefined}`}
									     onClick={() => this.setState({month: m})}>{m}</div>
								)
							})
						}
					</div>
				</div>
				{/* 右边日历 */}
				{/*<Calendar year={year} month={month} item={(cur) => <div>{moment(cur).format('YYYY-MM-DD')}</div>}/>*/}
				<Calendar year={year} month={moment().month.indexOf(month)}/>
			</div>
		);
	}
}

export default App;
