# dx
이거슨 이상한생활사이트 커뮤니티 댓글들 입니다
--------------------------------------
var base64img = 'base이미지'
var opt = {
    method: "POST",
    headers: {
        Content-Type: "application/json, text/plain, */*"
    },
    body: JSON.stringify({
        thumbnail: base64img
    })
};
fetch("https://playentry.org/rest/picture/project/thumbnail/6548c68566717b00b0b4dd47", opt).then(res=>res.JSON()).then(resp=>{console.log(resp})
