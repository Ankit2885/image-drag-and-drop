console.log('this is project 8 Drag and Drop');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// event listerner for draggable element imgbox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStarted has been Triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been Triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been Triggered');
    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been Triggered');
        e.target.className += ' dashed';
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been Triggered');
        e.target.className = 'whiteBox';

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been Triggered');
        e.target.append(imgBox);
    });
}




