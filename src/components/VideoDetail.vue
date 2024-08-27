<template>
    <div class="video-detail">
      <video
        ref="videoPlayer"
        controls
        autoplay
        class="video-player"
        :src="videoSrc"
        @loadedmetadata="onLoadedMetadata"
      ></video>
  
      <div class="video-info">
        <h2>{{ video.title }}</h2>
        <p>{{ video.author }} · {{ video.date }}</p>
        <p>{{ video.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const videoPlayer = ref(null);
  
  // 假设从后台获取视频的详情
  const videoData = ref({
    id: route.params.id,
    title: '',
    author: '',
    date: '',
    description: '',
    src: '',
  });
  
  const videoSrc = ref('');
  
  onMounted(() => {
    // 模拟 API 请求获取视频详情
    fetchVideoDetail(route.params.id);
  });
  
  // 模拟 API 请求函数
  function fetchVideoDetail(videoId) {
    // 假设从后端接口获取视频详情
    // 替换为真实接口
    setTimeout(() => {
      const fetchedVideo = {
        id: videoId,
        title: '示例视频标题',
        author: '视频作者',
        date: '2023-08-25',
        description: '这是一个视频详情的描述。',
        src: 'https://example.com/videos/sample.mp4',  // 视频资源地址
      };
  
      videoData.value = fetchedVideo;
      videoSrc.value = fetchedVideo.src;
    }, 1000);
  }
  
  function onLoadedMetadata() {
    const player = videoPlayer.value;
    player.currentTime = 0;
  }
  </script>
  
  <style scoped>
  .video-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .video-player {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .video-info {
    width: 100%;
    max-width: 800px;
    text-align: left;
  }
  
  h2 {
    margin: 10px 0;
  }
  
  p {
    color: #555;
  }
  </style>
  