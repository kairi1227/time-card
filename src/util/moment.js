/**
 * date: 2018-05-24 16:11
 * auth: XuQiang
 **/

export default (date) => {
	if (date && typeof date !== 'number') {
		throw new Error('Syntax error, parameter types can only be number or null.');
	}
	date = date || Date.now();

	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	return {date, week, month};
};