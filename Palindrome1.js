function Palindrom(text){
	if(text == text.split('').reverse().join('')){
		console.log('TRUE  ===> '+text+' is parindrom!!!')
	}
	else{
		console.log('False  ===> '+text+' is not parindrom!!!')
	}
}

let MyText = process.openStdin()

console.log('Enter text')
MyText.addListener('data', data => {
	Palindrom(data.toString().trim())
	MyText.destroy()
})