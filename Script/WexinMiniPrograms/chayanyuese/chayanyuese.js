let obj = JSON.parse($response.body);
delete obj.data.INDEX_SLOT_01;
delete obj.data.INDEX_SLOT_02;
obj.data?.INDEX_TOP_BANNER?.contents?.forEach(item => {
    delete item.bubble;
    delete item.figure;
    item.value = "https://raw.githubusercontent.com/S12day00/Loon/main/Script/WexinMiniPrograms/chayanyuese/cyys.png";
});
$done({body: JSON.stringify(obj)});