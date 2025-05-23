let preveiwContainer = document.querySelector('.product-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.card-container .card').forEach(card =>{
    card.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = card.getAttribute('data-name');
        previewBox.forEach(preview =>{       
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display ='none';
    };
});