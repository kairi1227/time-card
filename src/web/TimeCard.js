import React, {Component} from 'react';
import './TimeCard.css';
import moment from '../util/moment';

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

		const cm = moment().getCurrentMonth(Number(year), moment().month.indexOf(month));
		const firstDay = moment(cm).getFirstDay();

		const isCM = moment(cm).format('MM');
		const lastDay = moment(moment(firstDay).addDay(35)).format('MM') === isCM;
		const row = lastDay ? 6 :5;

		return (
			<div className="main">
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
				<div className={'time-card'}>
					<div className={'title'}>
						{
							moment().week.map(w => {
								return (
									<div key={w}>{w}</div>
								);
							})
						}
					</div>
					<div className={'calendar'}>
						{
							Array.from({length: row}).map((v, index) => {
								return (
									<div className={'week'} key={index}>
										{
											Array.from({length: 7}, (v, i) => i).map((d, i) => {
												const cur = moment(firstDay).addDay(index * 7 + d);
												return (
													<div
														className={`day ${i % 6 === 0 ? 'holiday' : ''} ${isCM !== moment(cur).format('MM') ? 'opacity' : ''}`}
														key={d}>
														<div className={'event-title'}><span>{moment(cur).format('MM-DD')}</span><span>{i % 6 === 0 ? '' : '辛苦了'}</span></div>
														<div className={'event-list'}>
															<li>Time Card Example</li>
															<li>Time Card Example</li>
														</div>
														<div className={`event-day ${i % 6 === 0 ? 'event-day-holiday' : ''}`}>{i % 6 === 0 ? '休息日' : '工作日'}</div>
													</div>
												)
											})
										}
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
