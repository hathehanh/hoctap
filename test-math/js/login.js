const login_email = document.getElementById('email');
const login_sandi = document.getElementById('sandi');
const login_button = document.getElementById('login-btn');

const cek_reg_name = localStorage.getItem('register_name')
const cek_reg_email = localStorage.getItem('register_email')
const cek_reg_sandi = localStorage.getItem('register_sandi')
const cek_log_email = localStorage.getItem('login_email')
const cek_log_sandi = localStorage.getItem('login_sandi')

if (cek_reg_name, cek_reg_email, cek_reg_sandi, cek_log_email, cek_log_sandi != null) {
    window.location = './test-math/home.html'
}

login_email.value = localStorage.getItem('register_email')
login_sandi.value = localStorage.getItem('register_sandi')

login_button.addEventListener('click', function() {

    const valid_email = localStorage.getItem('register_email')
    const valid_sandi = localStorage.getItem('register_sandi')

    if (login_email.value, login_sandi.value === '') {
        alert('Tài Khoản Hoặc Mật Khẩu Không Đúng ❌')
        return false
    }

    if (login_email.value != valid_email || login_sandi.value != valid_sandi) {
        alert('Tài Khoản Của Bạn Không Tìm Thấy. Vui Lòng Đăng Kí!')
        return false
    } else {
        localStorage.setItem('login_email', login_email.value)
        localStorage.setItem('login_sandi', login_sandi.value)
        alert('Đăng Nhập Thành Công ✅')
        window.location = './test-math/home.html'
    }

})