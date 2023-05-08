var md5 = require('md5')


const {JSDOM} = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = dom.window;
global.document = window.document;


var short_str = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";

// 加密用数组
_0x19ae48 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    10,
    11,
    12,
    13,
    14,
    15
]

// url
// originalString = "device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id=&ug_source=&creative_id=&count=10&refresh_index=1&video_type_select=1&aweme_pc_rec_raw_data=%7B%22seo_info%22:%22https://www.baidu.com/link?url=-skPo8ov_N78fhTJkNmQr-ivuCSDDgj2fYnm5IOPK2C5MOYanHxWFtC14f4TZIvj&wd=&eqid=8faf3a980006fc740000000664531a1e%22,%22ug_info%22:%22%22,%22is_client%22:false,%22ff_danmaku_status%22:1,%22danmaku_switch_status%22:0%7D&globalwid=&version_code=170400&version_name=17.4.0&pull_type=0&cookie_enabled=true&screen_width=2048&screen_height=1152&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=113.0.0.0&browser_online=true&engine_name=Blink&engine_version=113.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&pc_client_type=1&msToken=80uky20i3P6QNRBzl3qZQ-BxXJ8uRgNi16svlbR4ACA8J6CTVlMSaYBm8j4S6HYCzhYFweAJtI8APk1gtLAYexS15xYPwBWO3i5hyMP_bfw-av1Aec-UmqUyKXBe-w=="
// originalString = "trip_time=50&pc_client_type=1&msToken=80uky20i3P6QNRBzl3qZQ-BxXJ8uRgNi16svlbR4ACA8J6CTVlMSaYBm8j4S6HYCzhYFweAJtI8APk1gtLAYexS15xYPwBWO3i5hyMP_bfw-av1Aec-UmqUyKXBe-w=="
// originalString = "device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7227439289049615668&cursor=0&count=20&item_type=0&insert_ids=&rcFT=&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=2048&screen_height=1152&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=113.0.0.0&browser_online=true&engine_name=Blink&engine_version=113.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=&msToken="




originalString = "device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAtrWmceqyFvxWTEbV9V2t9DrW5jCKiA_quIXht8ccEwos7xnWwppAZErjNn4MUvFa&req_from=channel_pc_web&cursor=1657079744&count=6&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=2048&screen_height=1152&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=113.0.0.0&browser_online=true&engine_name=Blink&engine_version=113.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7229544788613318200&msToken=pAcmZ_srFfbfj8pLTGnxCZvIFFyzNHsab3Y3PgvPktXTLxnqVktglxCH3RMGqywGQYEmhEv7GBaeBmxHK_SHXHImNEKYrve1HVUAzoGIwiuRgiPLgRKD2FAcBrpLm_A="

// 字符串转换为 Uint8Array 对象

_0x1f3b8d = function (a) {
    for (var b = a.length >> 1, c = b << 1, e = new Uint8Array(b), d = 0, t = 0; t < c;) {
        e[d++] = _0x19ae48[a.charCodeAt(t++)] << 4 | _0x19ae48[a.charCodeAt(t++)];
    }
    return e;
}


// originalString: URL 后面的原始参数
var uint8Array = _0x1f3b8d(md5(_0x1f3b8d(md5(originalString))));
// console.log(uint8Array)


// 创建canvas
function _0x5bc542(a) {
    var b, c = document.createElement("canvas");
    c.width = 48, c.height = 16;
    var e = c.getContext("2d");
    e.font = "14px serif", e.fillText("龘ฑภ경", 2, 12), e.shadowBlur = 2, e.showOffsetX = 1,
        e.showColor = "lime", e.arc(8, 8, 8, 0, 2), e.stroke(), b = c.toDataURL();
    for (var d = 0; d < 32; d++) {
        a = 65599 * a + b.charCodeAt(a % b.length) >>> 0;
    }
    return a;
}

// 生成fixedString2
function _0x17dd8c() {

    return _0x5bc542(3735928559);

}

// 数组
function get_array1() {
    // const fixedString1 = Date.now() / 1000;
    const fixedString1 = 1683264193.623
    // console.log(fixedString1)
    ; // 输出当前时间戳（13位数字）1489154074浏览器的
    // fixedString2 = _0x17dd8c()
    fixedString2 = 1489154074
    // console.log(fixedString2);
    uint8Array = [
        59, 15, 104, 86, 124, 64,
        130, 199, 6, 92, 219, 48,
        202, 186, 184, 143
    ]
    myarray = [64, 0.00390625, 1, 14]
    myarray[4] = uint8Array[14]
    myarray[5] = uint8Array[15]
    myarray[6] = 69
    myarray[7] = 63
    myarray[8] = 107
    myarray[9] = 91
    myarray[10] = fixedString1 >> 24 & 255
    myarray[11] = fixedString1 >> 16 & 255
    myarray[12] = fixedString1 >> 8 & 255
    myarray[13] = fixedString1 >> 0 & 255
    myarray[14] = fixedString2 >> 24 & 255
    myarray[15] = fixedString2 >> 16 & 255
    myarray[16] = fixedString2 >> 8 & 255
    myarray[17] = fixedString2 >> 0 & 255
    myarray[18] = myarray.reduce(function (a, b) {
        return a ^ b;
    })
    // console.log(myarray)
    return myarray

}

function _0x2f2740(a, c, e, b, d, f, t, n, o, i, r, _, x, u, s, l, v, h, g) {
    let w = new Uint8Array(19);
    return w[0] = a,
        w[1] = r,
        w[2] = c,
        w[3] = _,
        w[4] = e,
        w[5] = x,
        w[6] = b,
        w[7] = u,
        w[8] = d,
        w[9] = s,
        w[10] = f,
        w[11] = l,
        w[12] = t,
        w[13] = v,
        w[14] = n,
        w[15] = h,
        w[16] = o,
        w[17] = g,
        w[18] = i,
        String.fromCharCode.apply(null, w);
}

function _0x46fa4c(a, c) {
    let e, b = [], d = 0, f = "";
    for (let a = 0; a < 256; a++) {
        b[a] = a;
    }
    for (let c = 0; c < 256; c++) {
        d = (d + b[c] + a.charCodeAt(c % a.length)) % 256,
            e = b[c],
            b[c] = b[d],
            b[d] = e;
    }
    let t = 0;
    d = 0;
    for (let a = 0; a < c.length; a++) {
        t = (t + 1) % 256,
            d = (d + b[t]) % 256,
            e = b[t],
            b[t] = b[d],
            b[d] = e,
            f += String.fromCharCode(c.charCodeAt(a) ^ b[(b[t] + b[d]) % 256]);
    }
    return f;
}

function _0x2b6720(a, c, e) {
    return String.fromCharCode(a) + String.fromCharCode(c) + e;
}

function U8ArrayToXBogus(array1) {
    // 打乱数组顺序
    array2 = [array1[0], array1[2], array1[4], array1[6], array1[8], array1[10], array1[12], array1[14], array1[16], array1[18], array1[1], array1[3], array1[5], array1[7], array1[9], array1[11], array1[13], array1[15], array1[17]];
    // 再一次打乱顺序，得到19位乱码字符串
    u1 = _0x2f2740.apply(null, array2);
    // 对乱码字符串重新编码(实际上是异或加密)
    u2 = _0x46fa4c.apply(null, [String.fromCharCode(255), u1]);
    // 在乱码字符串开头添加两个固定字符
    u = _0x2b6720.apply(null, [2, 255, u2]);
    var XBogus = "";
    // 每次循环生成4个字符，循环7次，每次使用乱码字符串的三个字符
    for (var i = 0; i <= 20; i += 3) {
        var charCodeAtNum0 = u.charCodeAt(i);
        var charCodeAtNum1 = u.charCodeAt(i + 1);
        var charCodeAtNum2 = u.charCodeAt(i + 2);
        var baseNum = charCodeAtNum2 | charCodeAtNum1 << 8 | charCodeAtNum0 << 16;
        var str1 = short_str[(baseNum & 0xfc0000) >> 18];
        var str2 = short_str[(baseNum & 0x3f000) >> 12];
        var str3 = short_str[(baseNum & 0xfc0) >> 6];
        var str4 = short_str[(baseNum & 0x3f) >> 0];
        XBogus += str1 + str2 + str3 + str4;
    }
    return XBogus;
}

function run() {
    return U8ArrayToXBogus(get_array1())
}
// ,1489154074,64,0.00390625,1,14,73,35,69,63,107,91,100,84,146,193,88,194,176,26,60
console.log(run())