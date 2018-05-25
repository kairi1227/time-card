/**
 * date: 2018-05-24 16:12
 * auth: XuQiang
 **/
import moment from './moment';

const date = 1527156389421;

it('test moment', () => {
	expect(typeof moment().date).toBe('number');
});

it('test moment week', () => {
	expect(moment().week[0]).toBe('Sun');
	expect(moment().week.length).toBe(7);
});

it('test moment month', () => {
	expect(moment().month[4]).toBe('May.');
	expect(moment().month.length).toBe(12);
});


it('test get first day of current month', () => {
	expect(moment(date).getFirstDay()).toBe(1524996389421);
});

it('test format function', () => {
	const day = moment(date).getFirstDay();
	expect(moment(day).format('MM-DD')).toBe('04-29');
});

it('test addDay function', () => {
	const d = moment(date).addDay(-2);
	expect(moment(d).format('MM-DD')).toBe('05-22');
});

it('test getMonth function', () => {
	const d = moment(date).getMonth();
	expect(d).toBe('May.');
});