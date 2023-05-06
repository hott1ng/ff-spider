import requests
import execjs
import re
from lxml import etree

url = 'http://www.fangdi.com.cn/old_house/new_house_detail.html'
jsurl = 'http://www.fangdi.com.cn/4QbVtADbnLVIc/c.FxJzG50F.dfe1675.js'

headers = {
    'referer':'http://www.fangdi.com.cn/old_house/old_house.html',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
}
cookies = {}
# 第一次获取80S
response = requests.get(url=url, headers=headers)
tree = etree.HTML(response.content.decode())
content = tree.xpath('//meta/@content')[-1]
func = tree.xpath('//script/text()')[-3]
# print(func)
_80s = response.cookies['FSSBBIl1UgzbN7N80S']
cookies.update(response.cookies.get_dict())
# print(cookies)
# 作为请求cookie，获取js
response2 = requests.get(url=jsurl, headers=headers, cookies=cookies)
with open('11675ss.js', 'w', encoding='utf-8')as f:
    f.write(response2.text)

# 编译 JavaScript 代码
with open('rs.js','r', encoding='iso-8859-1')as f:
    js_code = f.read().replace('arg1', content).replace('"arg2"', func)

context = execjs.compile(js_code)
ans = context.call('get_cookie')
rs_cookie = re.findall(r'FSSBBIl1UgzbN7N80T=(.*); path=/;',context.call('get_cookie'))[0]
# print(ans)
cookies.update({'FSSBBIl1UgzbN7N80T': rs_cookie})
print(cookies)
real_url = 'http://www.fangdi.com.cn/old_house/old_house.html'
response3 = requests.get(url=real_url, headers=headers, cookies=cookies)
response3.encoding='utf-8'
print(response3.text)
