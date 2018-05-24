/**
 * date: 2018-05-24 16:11
 * auth: XuQiang
 **/

export default (date) => {
	if (date && typeof date !== 'number') {
		throw new Error('Syntax error, parameter types can only be time stamp or null.');
	}
	date = date || Date.now();

	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

	//get first day of current month.
	const getFirstDay = () => {
		const month = new Date(date);
		month.setDate(1);
		const d = month.getDay();
		return month.getTime() - d * 24 * 3600 * 1000;
	};

	const format = (str) => {
		str = str || 'YYYY-MM-DD';
		const d = new Date(date);
		const result = str.split('-').map(f => {
			switch (f) {
				case 'MM':
					return (Array(2).join('0') + (d.getMonth() + 1)).slice(-2);
				case 'DD':
					return (Array(2).join('0') + d.getDate()).slice(-2);
				case 'YYYY':
					return (Array(4).join('0') + d.getFullYear()).slice(-4);
				case 'HH':
					return (Array(2).join('0') + d.getHours()).slice(-2);
				case 'mm':
					return (Array(2).join('0') + d.getMinutes()).slice(-2);
				case 'ss':
					return (Array(2).join('0') + d.getSeconds()).slice(-2);
			}
		});
		return result.join('-');
	};

	const addDay = (day) => {
		if (day && typeof day !== 'number') {
			throw new Error('Syntax error, day\'s types can only be number.');
		}
		day = day || 0;
		const d = new Date(date);
		d.setDate(d.getDate() + day);
		return d.valueOf();
	};

	return {date, week, month, getFirstDay, format, addDay};
};