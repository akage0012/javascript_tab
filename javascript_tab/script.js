// JavaScript

console.log('読み込み完了');

const allTabButtons = document.querySelectorAll('.tab-button');
const allTabContents = document.querySelectorAll('.tab-content');

console.log('タブボタン数:', allTabButtons.length);
console.log('コンテンツ数:', allTabContents.length);

function resetAllTabs() {
    console.log('リセット開始');
    // 全てのタブから .active クラスを削除する
    for (let i = 0; i < allTabButtons.length; i++) {
        allTabButtons[i].classList.remove('active');
    }
    // 全てのコンテンツから .active クラスを削除する
    for (let i = 0; i < allTabContents.length; i++) {
        allTabContents[i].classList.remove('active');
    }
    console.log('リセット完了');
}

function activateTab(tabId) {
    console.log('アクティブ開始:', tabId);
    const content = document.getElementById(tabId);
    const button = document.querySelector(`.tab-button[data-id="${tabId}"]`);
    
    console.log('見つかったコンテンツ:', content);
    console.log('見つかったボタン:', button);
    
    if (content) content.classList.add('active');
    if (button) button.classList.add('active');
    console.log('アクティブ完了');
}

// キラキラエフェクトを表示する関数
function createSparkles(event) {
    const button = event.currentTarget;
    const symbols = ['✨', '⭐', '💖', '🌟'];
    const sparkleCount = 6; // 飛び散る個数

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle');
        sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        // ボタンの中心付近から発生させる
        const rect = button.getBoundingClientRect();
        const startX = rect.width / 2;
        const startY = rect.height / 2;

        sparkle.style.left = `${startX}px`;
        sparkle.style.top = `${startY}px`;

        // ランダムな方向に散らばるようにCSS変数に値を設定
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 40;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        sparkle.style.setProperty('--dx', `${dx}px`);
        sparkle.style.setProperty('--dy', `${dy}px`);

        button.appendChild(sparkle);

        // アニメーション終了後に要素を削除
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
}

for (let i = 0; i < allTabButtons.length; i++) {
    allTabButtons[i].addEventListener('click', (event) => {
        console.log('タブがクリックされました');

        const clickedTabId = event.currentTarget.dataset.id;
        console.log('クリックされたID:', clickedTabId);

        if (!clickedTabId) return;

        resetAllTabs();
        activateTab(clickedTabId);
        
        // キラキラエフェクトを実行
        createSparkles(event);
    });
}