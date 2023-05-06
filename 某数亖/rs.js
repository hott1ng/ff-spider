delete global.__filename;
delete global.__dirname;



window = global;
window.top = window
setInterval = function(){}
window.attachEvent = function (){}
window.addEventListener = function (){}

Object.prototype.getAttribute = function(val){
    if(val==='r'){
        return 'm'
    }
}



div = {
    getElementsByTagName:function (val){
        if(val==='i'){return {length: 0}}
    }
}
document = {
    characterSet: 'UTF-8',
    charset: 'UTF-8',
    // scripts:['script','script'],
    createElement: function (val) {
        if (val === 'div') {
            return div
        }
        if (val === 'form') {
            return {}
        }
        if (val === 'a') {
            return {}
        }
    },
    getElementsByTagName: function () {
        return [{
            content: content, parentNode: {
                removeChild: function () {
                }
            }, parentElement: {
                removeChild: function () {
                }
            }
        },
            {
                content: content, parentNode: {
                    removeChild: function () {
                    }
                }, parentElement: {
                    removeChild: function () {
                    }
                }
            }
        ]
    },
    attachEvent: function () {
    },
    addEventListener: function () {
    },


}


location = {
    "ancestorOrigins": {},
    "href": "http://www.fangdi.com.cn/new_house/new_house.html",
    "origin": "http://www.fangdi.com.cn",
    "protocol": "http:",
    "host": "www.fangdi.com.cn",
    "hostname": "www.fangdi.com.cn",
    "port": "",
    "pathname": "/new_house/new_house.html",
    "search": "",
    "hash": ""
}

navigator = {

    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
}
require('./11675ss')


var content = "arg1"

!"arg2";

function get_cookie(){
    return document.cookie
}

console.log(get_cookie())