(function () {
    emailjs.init("MGicr2zHH2j4c7uq_");
})();

document.getElementById('servicesForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = 'الاسم يجب أن يكون على الأقل 3 حروف';
        isValid = false;
    }

    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'يرجى إدخال بريد إلكتروني صحيح';
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = 'الرسالة يجب أن تكون على الأقل 10 حروف';
        isValid = false;
    }

    if (!isValid) return;

    const params = {
        user_name: name,
        user_phone: phone,
        user_email: email,
        message: message,
        reply_to: email
    };

    emailjs.send("service_2f98j8v", "template_lcrh6k3", params)
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: 'تم الإرسال بنجاح ✅',
                text: 'شكراً لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت.',
                confirmButtonText: 'حسنًا'
            });
            document.getElementById("servicesForm").reset();
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'حدث خطأ أثناء الإرسال ❌',
                text: 'يرجى المحاولة مرة أخرى لاحقًا.',
                confirmButtonText: 'موافق'
            });
            console.error('EmailJS Error:', error);
        });
});
