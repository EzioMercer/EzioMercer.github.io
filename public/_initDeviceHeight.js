const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);

isMobile && document.documentElement.style.setProperty('--device-height',window.innerHeight + 'px');