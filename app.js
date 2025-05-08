const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const bord = document.getElementById('border');

fileInput.addEventListener('change', function (event) {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
})

function borderchange() {
    const bordvalue = bord.value;
    preview.style.borderRadius = bordvalue + '%';
    preview.style.objectFit = 'cover';
    preview.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

}

bord.addEventListener('input', () => {
    if (bord.value > 50) {
        alert('Please enter a value between 0 and 50');
        bord.value = 50;
    }
});

function downloadImage() {
    html2canvas(preview).then(canvas => {
        const link = document.createElement('a');
        link.download = 'gorsel.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

