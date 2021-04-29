const onClickAdd = () => {
	const inputText = document.getElementById('addtext').value;
	document.getElementById("addtext").value = "";

	createIncompleteList(inputText);
}

const deleteFromIncomplete = target => {
	DocumentTimeline.getElementById('incomplete-list').removeChild(target);
}

const createIncompleteList = text => {
		//li生成
		const li = document.createElement('li');
		li.className = 'list-low';
	
		//テキスト生成
		const p = document.createElement('p');
		p.textContent = text;
	
		//ボタン生成
		const completeButton = document.createElement('button');
		completeButton.textContent = '完了';
		completeButton.addEventListener('click', () => {
			const parent = completeButton.parentNode;
			deleteFromIncompleteList(parent);
			addToCompleteList(parent.firstElementChild.textContent);
		});
		
		const deleteButton = document.createElement('button');
		deleteButton.textContent = '削除';
		deleteButton.addEventListener('click', () => {
			deleteFromIncompleteList(deleteButton.parentNode);
			// deleteTarget.remove();
		});
		
		li.appendChild(p);
		li.appendChild(completeButton);
		li.appendChild(deleteButton);
	
		//ulの中に入れる
		document.getElementById('incomplete-list').appendChild(li);
	
		//未完了リストから削除
		const deleteFromIncompleteList = target => {
			document.getElementById('incomplete-list').removeChild(target);
		}
	
		const addToCompleteList = targetText => {
			const compsLi = document.createElement('li');
			const compsP = document.createElement('p');
			compsP.textContent = targetText;
	
			const returnButton = document.createElement('button');
			returnButton.textContent = '戻す';
			returnButton.addEventListener('click', () => {
				const parent = returnButton.parentNode;
				document.getElementById('complete-list').removeChild(parent);
	
				const text = parent.firstElementChild.textContent;
				createIncompleteList(text);
	
			});
	
			compsLi.appendChild(compsP);
			compsLi.appendChild(returnButton);
	
			document.getElementById('complete-list').appendChild(compsLi);
		}
}

document.getElementById('add-button').addEventListener('click', () => {
	onClickAdd();
});