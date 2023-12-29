let lang = prompt('Введите язык ru/en/fr/de/es')
switch(lang) {
	case 'ru':
		console.log('Доброе утро!')
		break
	case 'en':
		console.log('Good morning!')
		break
	case 'fr':
		console.log('Bon matin!')
		break
	case 'de':
		console.log('Gutten morgen!')
		break
	case 'es':
		console.log('Buenos días!')
		break
	default:
		console.log('Язык не распознан!')	
}
	