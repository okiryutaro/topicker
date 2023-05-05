const questions = [
    "あなたの好きな芸能人は誰ですか？",
    "今一番注目しているスポーツは何ですか？",
    "最近恋愛で悩んでいることはありますか？",
    "何か趣味を持っていますか？",
    "あなたのお仕事は何ですか？",
    "最近読んだ面白い本はありますか？",
    "おすすめの旅行先を教えてください。",
    "好きな映画は何ですか？",
    "あなたの人生で一番印象に残っている出来事は何ですか？",
    "もしも時間旅行ができるとしたら、どこへ行きたいですか？",
    "あなたが好きな映画は何ですか？その理由を教えてください。",
    "一番感動した本は何ですか？その理由は何ですか？",
    "好きな食べ物は何ですか？その味や香りについて教えてください。",
    "好きな音楽ジャンルは何ですか？また、おすすめの曲やアーティストがあれば教えてください。",
    "最近、何か新しいことを始めたいと思っていますか？それは何ですか？",
    "あなたにとって、ストレス解消法は何ですか？その効果について教えてください。",
    "誰かに影響を与えたいと思うことはありますか？それは何ですか？",
];

const questionDiv = document.getElementById("question");

let History = []

function getQuestion() {
    if (questions.length === 0) {
        const Finish = document.getElementById('finish');
        const new_element = document.createElement('p');
        new_element.textContent = '話題が尽きました!!!!!!';
        Finish.appendChild(new_element)
        const top = document.getElementById('myButton_top');
        top.classList.add("close")
        const bottom = document.getElementById('myButton_bottom');
        bottom.classList.add("close")

        questionDiv.classList.add("close")
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    questions.splice(randomIndex,1)
    questionDiv.innerText = randomQuestion;
    History.push(randomQuestion)
    // 配列をJSON形式に変換して、ローカルストレージに保存する
    localStorage.setItem('myArray', JSON.stringify(History));
    // ローカルストレージから配列を読み込む
    const savedArray = JSON.parse(localStorage.getItem('myArray'));
    console.log(savedArray);
}










// ハンバーガーメニューの表示・非表示を切り替える
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const menuOverlay = document.getElementById("menu-overlay");
const menuDelete = document.getElementById("menu-delete");
const menuItems = document.querySelectorAll(".menu-item");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("close")
  menuOverlay.classList.toggle("open");
  menuDelete.classList.toggle("open");
});

menuOverlay.addEventListener("click", () => {
    menuOverlay.classList.remove("open");
    menuDelete.classList.remove("open");
    menuIcon.classList.remove("close")
  });
