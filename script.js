
function switchLanguage(lang) {
document.body.className = lang;
if (lang === 'cn') {
    document.querySelectorAll('.cn').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.en').forEach(el => el.classList.add('hidden'));
} else if (lang === 'en') {
    document.querySelectorAll('.en').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.cn').forEach(el => el.classList.add('hidden'));
}
}

function navigateTo(page) {
    window.location.href = page;
}
function checkPassword() {
    // 设置密码
    const correctPassword = "xigou1834";  // 替换成你想要的密码
    const enteredPassword = document.getElementById("passwordInput").value;
    const hiddenText = document.getElementById("hiddenText");

    // 验证密码
    if (enteredPassword === correctPassword) {
        hiddenText.style.display = "block";  // 显示隐藏文本
    } else {
        alert("密码错误，请重试！");  // 密码错误提示
    }
}