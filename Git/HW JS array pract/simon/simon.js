let name = prompt('Введи свое имя, юный падаван!'),
		letters = ["ш", "щ", "ч", "ж", "дур", "х"],
		nameLen = name.length;
		isBadName = false;
		prediction = ['Подозрительное у тебя имя, юноша... Дам-ка я тебе задание на убийство крыс в канализации.', 
		'Отличное имя, юный падаван! Вот тебе квест на убийство дракона. Зайди в канцелярию за лицензией на отлов.'];

for(let i = 0; i < nameLen; i++){
	if(letters.indexOf(name[i].toLowerCase()) > -1){
		isBadName = true;
		break;
	}
}

if(isBadName === true){
	alert(prediction[0]);
}else{
	alert(prediction[1]);
}