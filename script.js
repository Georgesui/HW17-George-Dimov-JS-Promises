// # 4 
function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

delay(1000).then(() => console.log('Hello'));

// # 5
function getUserInfo() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 1000);
	});
}

function getUserAvatar(userInfo) {
	return new Promise(function (resolve, reject) {
		userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
		setTimeout(() => resolve(userInfo), 1000);
	});
}

function getUserAdditionalInfo(userInfo) {
	return new Promise(function (resolve, reject) {
		userInfo.interests = ['sport', 'books'];
		setTimeout(() => resolve(userInfo), 1000);
	});
}

getUserInfo()
	.then(getUserAvatar)
	.then(getUserAdditionalInfo)
	.then(userInfo => console.log(userInfo))

//  # 6
new Promise(function (resolve, reject) {
	setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 1000);
})
	.then(function (userInfo) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => reject(new Error('wrong data')), 1000);
		});
	})
	.catch(erorr => console.log(erorr))
