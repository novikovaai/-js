let newQueryPar = {
	search: 'Вася',
	take: 10,
}

function getStringForUrl(param) {
	let urlEnd = '';
	for (let key in param) {
		urlEnd += `&${key}=${param[key]}`
	}
	return urlEnd.slice(1)
}

console.log(getStringForUrl(newQueryPar))