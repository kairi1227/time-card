/**
 * date: 2018-05-24 16:12
 * auth: XuQiang
 **/
import moment from './moment';

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

