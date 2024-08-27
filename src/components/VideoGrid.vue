<template>
    <el-card shadow="hover" class="video-card" @click="openVideo">
        <canvas ref="canvas" class="video-cover"></canvas>
        <div class="video-info">
            <h3>{{ video.title }}</h3>
            <p>{{ video.author }} · {{ video.date }}</p>
        </div>
    </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
});




const router = useRouter();
const canvas = ref(null);

onMounted(() => {
  // 调用捕获第一帧的函数
  captureFirstFrame(props.video.src);
});

function captureFirstFrame(videoSrc) {
  const video = document.createElement('video');
  const canvasElement = canvas.value;
  const context = canvasElement.getContext('2d');

  video.src = videoSrc;
  video.crossOrigin = "anonymous"; // 如果跨域需要添加此行
  video.load();

  video.addEventListener('loadeddata', () => {
    // 设置 Canvas 的宽高与视频一致
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;

    // 在视频的第一帧时绘制视频到 Canvas 上
    video.currentTime = 0;
    video.addEventListener('seeked', () => {
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    });
  });
}


function openVideo() {
  const videoUrl = `/video/${props.video.id}`;
  window.open(videoUrl, '_blank'); // 打开新标签页
}



</script>

<style scoped>
.video-card {
  width: 300px;
  cursor: pointer;
}
.video-cover {
  width: 100%;
  height: 180px;
  background-color: #f0f0f0;
}
.video-info {
  padding: 10px;
}
</style>