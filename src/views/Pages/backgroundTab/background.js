export const appendScript = scriptToAppend => {
    var header = document.getElementById('headingList')
    var button = header.getElementsByClassName('btn')
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            var current = document.getElementsByClassName('active')
            current[0].className = current[0].className.replace(' active', '')
            this.className += ' active'
        })
    }
}