/**
 * date: 2018-05-25 16:36
 * auth: XuQiang
 **/
import React from 'react';
import PropTypes from 'prop-types';
import moment from "../util/moment";

const Calendar = ({year, month, item}) => {
	const cm = moment().getCurrentMonth(Number(year), month);
	const firstDay = moment(cm).getFirstDay();

	const isCM = moment(cm).format('MM');
	const lastDay = moment(moment(firstDay).addDay(35)).format('MM') === isCM;
	const row = lastDay ? 6 :5;

	return (
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
										if(item) {
											return item(cur);
										}
										return (
											<Item cur={cur} i={i} isCM={isCM} key={d}/>
										)
									})
								}
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

const Item = ({i, isCM, cur}) => {
	return (
		<div
			className={`day ${i % 6 === 0 ? 'holiday' : ''} ${isCM !== moment(cur).format('MM') ? 'opacity' : ''}`}>
			<div className={'event-title'}><span>{moment(cur).format('MM-DD')}</span><span>{i % 6 === 0 ? '' : '辛苦了'}</span></div>
			<div className={'event-list'}>
				<li>Time Card Example</li>
				<li>Time Card Example</li>
			</div>
			<div className={`event-day ${i % 6 === 0 ? 'event-day-holiday' : ''}`}>{i % 6 === 0 ? '休息日' : '工作日'}</div>
		</div>
	);
};

Calendar.propTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	item: PropTypes.func
};

Calendar.defaultProps = {
	year: 2018,
	month: 1,
	item: null
};

export default Calendar;