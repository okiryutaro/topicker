
// ページがリロードされたときに実行される関数
window.onload = function() {
    // 追加する li 要素の配列
    const savedArray = JSON.parse(localStorage.getItem('myArray'));
    console.log(savedArray)
    // 追加する li 要素を作成して、ul 要素に追加する
    const list = document.getElementById("list");
    for (let i = 0; i < savedArray.length; i++) {
      const li = document.createElement("li");
      li.textContent = savedArray[i];
      list.appendChild(li);
    }
  };
