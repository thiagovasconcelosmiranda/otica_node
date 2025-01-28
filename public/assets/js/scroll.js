const menuItems = document.querySelectorAll('nav .ul-links a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnclick)
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnclick(event) {
    //bloqueia o #href na url
    event.preventDefault();
    //verifica a posição
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to) - 110;
}

function scrollToPosition(to) {
    smoothScrollTo(0, to-110)
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageXOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    const esseIntOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = esseIntOutQuart(time, startX, distanceX, duration);
        const newY = esseIntOutQuart(time, startY, distanceY, duration);

        if (time >= duration) {
            clearInterval(timer)
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}