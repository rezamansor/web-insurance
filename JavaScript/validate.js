document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const phonenum = document.getElementById('phonenum').value.trim();
    const emailadd = document.getElementById('emailadd').value.trim();
    const companyname = document.getElementById('companyname').value.trim();
    const reqtype = document.getElementById('reqtype').value;

    if (!fname || !lname || !phonenum || !emailadd || !companyname || !reqtype) {
        alert('لطفاً همه فیلدها را پر کنید.');
        return false;
    }

    if (fname.length < 3)
    {
        alert('نام حداقل باید ۳ حرف باشد')
        return false;
    }

    if (fname.length < 2)
    {
        alert('نام‌خانوادگی حداقل باید ۲ حرف باشد')
        return false;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phonenum)) {
        alert('شماره موبایل باید 11 رقم باشد.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailadd)) {
        alert('لطفاً یک آدرس ایمیل معتبر وارد کنید.');
        return;
    }

    alert('درخواست شما با موفقیت ثبت شد!');
});

function clearForm() {
    const form = document.getElementById('MyForm');
    form.reset();
}