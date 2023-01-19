const gorizontalScroll = () => {
    let mycustomscroll = document.querySelector('.box-user');
    mycustomscroll.addEventListener("wheel", function (e) {
        e.stopPropagation();
        let scroll = mycustomscroll.scrollLeft;
        console.log(scroll);
        mycustomscroll.scrollLeft = (scroll + e.deltaY);
    });
};

export {gorizontalScroll};