var iconShareBlock = document.querySelector('.icons-share'),
iShare = document.querySelector('.i-share'),
networks = document.querySelector('.network');


iconShareBlock.addEventListener('click',function() {


if (networks.style.visibility === '' || networks.style.visibility === 'hidden') {
    networks.style.visibility = 'visible';
    this.style.background = 'var(--desaturated-dark-blue)';
    iShare.style.fill = 'var(--light-grayish-blue)';
    return
}
networks.style.visibility = 'hidden'
this.style.background=''
iShare.style.visibility = '';

})