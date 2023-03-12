import { getLyric } from '../../components/Lyric.vue'
import { storeToRefs } from '../store/pinia'

const { currentMusic } = storeToRefs(playerStore)

function sendNotification() {
    new Notification('${currentMusic}', {
        body: '${getLyric}',
        icon: '../../logo/logo16x16.png'
    })
}
if (window.Notification.permission == "granted") { // 判断是否有权限
    sendNotification();
} else if (window.Notification.permission != "denied") {
    window.Notification.requestPermission(function (permission) { // 没有权限发起请求
        sendNotification();
    });
}
