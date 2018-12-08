import axios from 'axios';

const KEY = 'AIzaSyBS-47lNAhPkm-MFwS9b5txQDa9Guaqvzw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
