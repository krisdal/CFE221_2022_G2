document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('create-campaign-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('/staff-create-campaign', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message); 
                window.location.href = '/staff-my-campaign'; 
            } else {
                alert('Campaign creation failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred');
        });
    });
});