import requests
import execjs
import hashlib


s3 = '101_3_3.0+/api/v4/comment_v5/answers/371937534/root_comment?order_by=score&limit=20&offset=+AMAYTzODaRaPThnQrdB1r4Ny0gmKMWor2uY=|1677817946'
def md5(text):
    return hashlib.md5(text.encode("utf-8")).hexdigest()

t = md5(s3)
print(t)
with open( "x-96.js", "r", encoding='utf-8') as f:
    code = f.read()

context = execjs.compile(code)
result = context.call("run", t)
print(result)
headers = {
    "authority": "www.zhihu.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.zhihu.com/question/29583943/answer/2437590567",
    "sec-ch-ua": "^\\^",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36",
    "x-requested-with": "fetch",
    "x-zse-93": "101_3_3.0",
    "x-zse-96": "2.0_T/eliDA4/KWM3FisPml4qUp8WIlOuTvjBMgLhZWjvJgsO8+WfFbPCZ=e7CdpoQ4A"
}
cookies = {
    "_zap": "9031f7ea-da0a-4314-a02e-679848eaa794",
    "d_c0": "AMAYTzODaRaPThnQrdB1r4Ny0gmKMWor2uY=^|1677817946",
    "YD00517437729195^%^3AWM_TID": "LC4FAyKa2y1AAQFVRAfAQ9hweE8k4OER",
    "__snaker__id": "qzAuJ3ZJg6YdUbYC",
    "l_n_c": "1",
    "q_c1": "18bfe50dddd14b0e86c65252821c6a58^|1679280711000^|1679280711000",
    "_xsrf": "c0fcb120d8e7f75d872a0554fab4c71f",
    "r_cap_id": "^\\^MDQ2YjUwOTZmOGUzNDM1ZTk1YWM4YjU2YmNiZTk0NWM=^|1679280711^|69a35b908afd858cf7838215d089945b82e88f19^^",
    "cap_id": "^\\^MDRlZGFmODdjMzFlNGZjMTkyYzc5MmQ5MTM0MTA1NTM=^|1679280711^|74f14611bd2efcd2e0ecb770e19ac1537d435196^^",
    "l_cap_id": "^\\^YjM3ZTBiZWMyNzFhNDliNDhjMDg5N2RhNjk4Yzc1Yjg=^|1679280711^|45a921e1402229b01b89f0771f385d78b26e4e59^^",
    "n_c": "1",
    "__utmc": "51854390",
    "__utmz": "51854390.1679280713.1.1.utmcsr=(direct)^|utmccn=(direct)^|utmcmd=(none)",
    "__utmv": "51854390.000--^|3=entry_date=20230320=1",
    "Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49": "1677327813,1677817947,1679058327,1679280723",
    "YD00517437729195^%^3AWM_NI": "ZlHSxFP4Yv4gdpnLhhTNSPFnMgSeuUl029w0^%^2BP7nAIFU6ZzDuwOvHzFDkHuq8NqQHutV0T^%^2BMRdJ29K0Qm9JsT6Dhl3iQdBWK7HMhxY1CH6fzeV0LfSrZdolsN0LIEcr0U0k^%^3D",
    "YD00517437729195^%^3AWM_NIKE": "9ca17ae2e6ffcda170e2e6ee92d241b3ab9dccc53fb3868eb7c55e878b9f87d15c90eaffd0ca3cb8be9cb7f42af0fea7c3b92a9ab488b4fb4e94ec9797b76da8b0a2adeb6498929db1c5668fb99d86f85fb0f0fedaf63ce990f98fc443868bfabbf950b7a98197cb72869ca5a9f87bfc92bfb2cb7fb88a00b5aa4792bc86d3bc41f48fa3dac97998ea8c89ef39ab8faca3d641f5988389fb53f39d88d7e572a78a00ade559b286ac90ef798ef084aac869b2f09bd1ea37e2a3",
    "__utma": "51854390.1962125188.1679280713.1679280713.1679280713.2",
    "__utmb": "51854390.0.10.1679280713",
    "gdxidpyhxdE": "nbB^%^5CsAnyLgeftwG642scHpwErKu7KrQtuZEwCA^%^5C^%^2BcWHiUC^%^5CU8fcjHJMmw8p7mz76z7cqoV^%^2B5OY52VGXY^%^2FNCKcYw5QmJWBDE3^%^5CIWGNX4e2tQyHajT4XETObMWkJNAqRxKkrmsET3eGtBtt^%^2BXJNf^%^2FDw^%^2FdK^%^2FY^%^2Bkeaz71Rs^%^5CUVwurxhfe9Tw^%^3A1679292135036",
    "Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49": "1679291265",
    "captcha_session_v2": "2^|1:0^|10:1679291265^|18:captcha_session_v2^|88:OG1sV0NtVXV1TnlNb0Nsd3lnQnpKMVA3dFExd20yWWRndjVVK1UxOW5MS24ybmh2VWl6ektMYmdwNitVaUZiNA==^|24ab2356fa4c49a0f4262d8fd291572b5923e0fe19bddaf5fd8a219b1622c8a2",
    "KLBRSID": "37f2e85292ebb2c2ef70f1d8e39c2b34^|1679291283^|1679290307"
}
url = "https://www.zhihu.com/api/v4/comment_v5/answers/371937534/root_comment"
params = {
    "order_by": "score",
    "limit": "20",
    "offset": ""
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)