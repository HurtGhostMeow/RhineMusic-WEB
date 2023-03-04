import { getLyric } from '../../components/Lyric.vue'
import { storeToRefs } from '../store/pinia'

const { currentMusic } = storeToRefs(playerStore)

function sendNotification() {
    new Notification("${currentMusic}", {
        body: '${getLyric}',
        icon: '../../logo/logo16x16.png'
    })
}
if (window.Notification.permission == "granted") { // �ж��Ƿ���Ȩ��
    sendNotification();
} else if (window.Notification.permission != "denied") {
    window.Notification.requestPermission(function (permission) { // û��Ȩ�޷�������
        sendNotification();
    });
}