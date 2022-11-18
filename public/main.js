
/**四个步骤：
 * 1、创建 HttpRequest（XMLHttpRequest） 对象;
 * 2、调用对象的 open 方法；
 * 3、监听对象的 onload & onerror 事件；
 * ——专业应监听 onreadystatechange 事件；
 * ——在事件处理函数里操作 css/js 文件内容
 * 4、调用对象的 send 方法（发送请求）
 */
let n = 1;
getNextPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    page1.appendChild(li);//document.getElementById('page1')
                });
            };
            n = n + 1;
        };
    };
    request.send();
};
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建 style 标签
                const style = document.createElement('style');
                //填写 style 内容
                style.innerHTML = request.response;
                //插入 head 里面
                document.head.appendChild(style);
            } else {
                alert('加载 CSS 失败')
            }
        };
    };
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/1.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建 script 标签
                const script = document.createElement('script');
                //填写 script 内容
                script.innerHTML = request.response;
                //插入 body 里面
                document.body.appendChild(script);
            } else {
                alert('加载 JS 失败')
            }
        };
    };
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建 div 标签
                const div = document.createElement('div');
                //填写 div 内容
                div.innerHTML = request.response;
                //插入 body 里面
                document.body.appendChild(div);
            } else {
                alert('加载 html 失败')
            }
        };
    };
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                /* console.log(request.responseXML);//说明request.responseXML 是一个 dom 对象 */
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text.trim());
            } else {
                alert('加载 html 失败')
            };
        };
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                console.log(typeof request.response);
                console.log(request.response);
                const bool = JSON.parse(request.response);
                console.log(typeof bool);
                console.log(bool);
            }
        };
    };
    request.send();
};
