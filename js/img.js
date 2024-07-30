window.onload = function () {
    /**
     * 定义图片的 位置
     */
    let index = 0;
    /**
     * 获取下一张按钮
     */
    let right = document.querySelector(".right");

    /**
     * 获取上一张按钮
     */
    let left = document.querySelector(".left");

    /**
     * 获取全部图片
     */
    let images = document.querySelector(".img_list");

    /**
     * 获取轮播图的图片值
     */
    let images_all_index = images.querySelectorAll("div");

    let Curve = images.querySelector("div");

    console.log(images_all_index);

    /**
     * 定位图片位置
     */
    function position() {
        // images.style.left = (index * -100) + "%";
        for (let i = 0; i < images_all_index.length; i++) {
            images_all_index[i].style.opacity = 0;
        }
        console.log(index);
        images_all_index[index].style.opacity = 1;
    }

    /**
     * 按钮事件
     * 当按下 下一张 按钮时 图片切换为下一张
     */
    function add() {
        console.log("调用我了");
        if (index < images_all_index.length - 1) {
            index++;
        } else {
            index = 0;
        }
        set_circles(index);
    }

    /**
     * 下一张
     */
    function desc() {
        if (index > 0) {
            index--;
        } else {
            index = images_all_index.length - 1;
        }
        set_circles(index);
    }

    right.addEventListener("click", function () {
        add();
        position();
    });

    left.addEventListener("click", function () {
        desc();
        position();
    });

    // 为"下一个"按钮增加一个监听事件


    /**
     * 设置一个用于定时器的函数，用于切换轮播图
     */
    function timer() {
        setInterval(function () {
            add();
            position();
        }, 3500);
    }

    /**
     * 暂时清除定时器事件，以免冲突
     */
    function pause_timer() {
        clearInterval();
    }

    // 启动定时器
    timer();

    // 获取按钮
    let btn = document.querySelector(".btn").querySelectorAll("span");

    /**
     * 设置圆点的亮点
     * @param {传入当前图片} now_index 
     */
    function set_circles(now_index) {
        for (let i = 0; i < btn.length; i++) {
            if (now_index === i)
                btn[i].classList.add("btn_style");
            else {
                btn[i].className = "";
            }
        }
    }

    // 为按钮获取点击事件
    for (let i = 0; i < images_all_index.length; i++) {
        // 单个原点事件
        btn[i].addEventListener("click", function () {
            // 将点击的按钮序号给当前图片
            index = i;
            position();
            set_circles(index);
        })
    }

    function desc() {
        if (index > 0) {
            index--;
        } else {
            index = images_all_index.length - 1;
        }
        set_circles(index);
    }


}