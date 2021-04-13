export default {
    loadingBar: {
        start() {
            let loadingBar = document.getElementById('loadingbar');
            if (!loadingBar) {
                loadingBar = document.createElement('div');
                loadingBar.id = 'loadingbar';
                document.body.append(loadingBar);
            } else {
                loadingBar.style.display = 'block'
            }
        },
        finish() {
            let loadingBar = document.getElementById('loadingbar');
            if (loadingBar) {
                loadingBar.style.display = 'none'
            }
        }
    }

}