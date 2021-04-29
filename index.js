const onClickAdd = () => {
	const inputText = document.getElementById('addtext').value;
	document.getElementById("addtext").value = "";

	//li生成
	const li = document.createElement('li');
	li.className = 'list-low';

	//テキスト生成
	const p = document.createElement('p');
	p.textContent = inputText;

	//ボタン生成
	const completeButton = document.createElement('button');
	completeButton.textContent = '完了';
	completeButton.addEventListener('click', () => {
		alert('完了');
	});
	
	const deleteButton = document.createElement('button');
	deleteButton.textContent = '削除';
	deleteButton.addEventListener('click', () => {
		alert('削除');
	});
	
	li.appendChild(p);
	li.appendChild(completeButton);
	li.appendChild(deleteButton);

	//ulの中に入れる
	document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => {
	onClickAdd();
});