let newQueryPar = {
	search: 'Вася',
	take: 10,
}

function getStringForUrl(param) {
	let urlEnd = '';

	for (let key in param) {
		if (urlEnd) {
			urlEnd += `&${key}=${param[key]}`
		} else {
			urlEnd += `${key}=${param[key]}`
		}
	}
	return urlEnd
}

console.log(getStringForUrl(newQueryPar))