document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Validasi nama tidak boleh kosong
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        isValid = false;
        alert("Nama tidak boleh kosong");
    }

    // Validasi email sederhana
    const email = document.getElementById("email");
    if (email.value.indexOf("@") === -1) {
        isValid = false;
        alert("Email harus mengandung @");
    }

    // Validasi tanggal lahir tidak boleh kosong
    const dob = document.getElementById("dob");
    if (dob.value.trim() === "") {
        isValid = false;
        alert("Tanggal lahir tidak boleh kosong");
    }

    // Validasi gender harus dipilih
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        isValid = false;
        alert("Jenis kelamin harus dipilih");
    }

    // Validasi terms and conditions harus disetujui
    const terms = document.getElementById("terms");
    if (!terms.checked) {
        isValid = false;
        alert("Anda harus menyetujui syarat dan ketentuan");
    }

    if (!isValid) {
        event.preventDefault();
    }
});
