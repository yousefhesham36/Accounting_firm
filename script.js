(function () {
    emailjs.init("MGicr2zHH2j4c7uq_");
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
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
        phoneError.textContent = 'يرجى إدخال رقم هاتف مصري صحيح مثل 01012345678';
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
        user_email: email,
        user_phone: phone,
        message: message,
        reply_to: email
    };

    emailjs.send("service_2f98j8v", "template_lcrh6k3", params)
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: 'تم الإرسال بنجاح ✅',
                text: 'تم إرسال رسالتك وسنقوم بالرد عليك قريبًا.',
                confirmButtonText: 'حسنًا'
            });
            document.getElementById("contactForm").reset();
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'حدث خطأ ❌',
                text: 'لم يتم إرسال الرسالة. حاول مرة أخرى.',
                confirmButtonText: 'موافق'
            });
            console.error("EmailJS Error:", error);
        });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});