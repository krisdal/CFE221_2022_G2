document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(new FormData(document.querySelector('form')))
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Username or password is incorrect');
                }
                return response.json(); 
            })
            .then(data => {
                if (data.success) {
                    window.location.href = data.redirectTo; 
                } else {
                    throw new Error(data.message || 'Login failed');
                }
            })
            .catch(error => {
                alert(error.message); 
            });
        });
    }
});
