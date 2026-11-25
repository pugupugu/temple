// 사찰별 대표 사진 — Wikimedia Commons 자유 라이선스 이미지 (작가·라이선스 표기 필수)
// 키는 사찰 번호(temples.js 배열 순서, 1~127). tools/fetch_images.py 로 생성됨 — 오매칭은 직접 지워 주세요.
const TEMPLE_IMAGES = {
 "1": [
  {
   "title": "Bongeunsa Seoul 8.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Bongeunsa_Seoul_8.jpg/960px-Bongeunsa_Seoul_8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bongeunsa_Seoul_8.jpg",
   "author": "kallerna",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Interior view of the main hall of Bongeunsa temple in Seoul South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Interior_view_of_the_main_hall_of_Bongeunsa_temple_in_Seoul_South_Korea.jpg/960px-Interior_view_of_the_main_hall_of_Bongeunsa_temple_in_Seoul_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Interior_view_of_the_main_hall_of_Bongeunsa_temple_in_Seoul_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Bongeunsa Seoul 9.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Bongeunsa_Seoul_9.jpg/960px-Bongeunsa_Seoul_9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bongeunsa_Seoul_9.jpg",
   "author": "kallerna",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Bongeunsa-0984.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Bongeunsa-0984.jpg/960px-Bongeunsa-0984.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bongeunsa-0984.jpg",
   "author": "Immanuelle",
   "license": "CC BY-SA 4.0"
  }
 ],
 "2": [
  {
   "title": "Jogyesa Temple (1509839597).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Jogyesa_Temple_%281509839597%29.jpg/960px-Jogyesa_Temple_%281509839597%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jogyesa_Temple_(1509839597).jpg",
   "author": "Francisco Anzola",
   "license": "CC BY 2.0"
  },
  {
   "title": "BLUE BAR PIGEON - Jogyesa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/BLUE_BAR_PIGEON_-_Jogyesa.jpg/960px-BLUE_BAR_PIGEON_-_Jogyesa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:BLUE_BAR_PIGEON_-_Jogyesa.jpg",
   "author": "Drcbrothephotographer",
   "license": "CC0"
  },
  {
   "title": "A pied pigeon in Jogyesa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/A_pied_pigeon_in_Jogyesa.jpg/960px-A_pied_pigeon_in_Jogyesa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:A_pied_pigeon_in_Jogyesa.jpg",
   "author": "Drcbrothephotographer",
   "license": "CC0"
  },
  {
   "title": "Lotus Lantern Festival at Jogyesa, Seoul.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Lotus_Lantern_Festival_at_Jogyesa%2C_Seoul.jpg/960px-Lotus_Lantern_Festival_at_Jogyesa%2C_Seoul.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Lotus_Lantern_Festival_at_Jogyesa,_Seoul.jpg",
   "author": "Ken Eckert",
   "license": "CC BY-SA 4.0"
  }
 ],
 "3": [
  {
   "title": "Jingwansa Taegukgi.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Jingwansa_Taegukgi.jpg/960px-Jingwansa_Taegukgi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jingwansa_Taegukgi.jpg",
   "author": "Trainholic",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "나한도1.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/3/36/%EB%82%98%ED%95%9C%EB%8F%841.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%82%98%ED%95%9C%EB%8F%841.jpg",
   "author": "진철, 축연",
   "license": "Public domain"
  },
  {
   "title": "나한도2.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/2/24/%EB%82%98%ED%95%9C%EB%8F%842.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%82%98%ED%95%9C%EB%8F%842.jpg",
   "author": "진철, 축연",
   "license": "Public domain"
  }
 ],
 "4": [
  {
   "title": "Monk Beopjeong Jinyeong-gak.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/7/74/Monk_Beopjeong_Jinyeong-gak.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Monk_Beopjeong_Jinyeong-gak.jpg",
   "author": "Sim1992",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "길상사(吉祥寺, Gilsangsa Temple) 091122 7.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_7.jpg/960px-%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%B8%EC%83%81%EC%82%AC(%E5%90%89%E7%A5%A5%E5%AF%BA,_Gilsangsa_Temple)_091122_7.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "길상사(吉祥寺, Gilsangsa Temple) 091122 9.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_9.jpg/960px-%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%B8%EC%83%81%EC%82%AC(%E5%90%89%E7%A5%A5%E5%AF%BA,_Gilsangsa_Temple)_091122_9.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "길상사(吉祥寺, Gilsangsa Temple) 091122 8.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_8.jpg/960px-%EA%B8%B8%EC%83%81%EC%82%AC%28%E5%90%89%E7%A5%A5%E5%AF%BA%2C_Gilsangsa_Temple%29_091122_8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%B8%EC%83%81%EC%82%AC(%E5%90%89%E7%A5%A5%E5%AF%BA,_Gilsangsa_Temple)_091122_8.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  }
 ],
 "5": [
  {
   "title": "Hwa Gye Sa 2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Hwa_Gye_Sa_2.jpg/960px-Hwa_Gye_Sa_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hwa_Gye_Sa_2.jpg",
   "author": "작자 미상",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Hwa Gye Sa 3.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Hwa_Gye_Sa_3.jpg/960px-Hwa_Gye_Sa_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hwa_Gye_Sa_3.jpg",
   "author": "작자 미상",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Hwa Gye Sa 4.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Hwa_Gye_Sa_4.jpg/960px-Hwa_Gye_Sa_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hwa_Gye_Sa_4.jpg",
   "author": "작자 미상",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Hwa Gye Sa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Hwa_Gye_Sa.jpg/960px-Hwa_Gye_Sa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hwa_Gye_Sa.jpg",
   "author": "작자 미상",
   "license": "CC BY-SA 2.0"
  }
 ],
 "6": [
  {
   "title": "Interior view of Beomeosa temple with two Buddhist monks in Busan South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Interior_view_of_Beomeosa_temple_with_two_Buddhist_monks_in_Busan_South_Korea.jpg/960px-Interior_view_of_Beomeosa_temple_with_two_Buddhist_monks_in_Busan_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Interior_view_of_Beomeosa_temple_with_two_Buddhist_monks_in_Busan_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Front exterior view of Beomeosa temple with three stairs and blue sky in Busan South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Front_exterior_view_of_Beomeosa_temple_with_three_stairs_and_blue_sky_in_Busan_South_Korea.jpg/960px-Front_exterior_view_of_Beomeosa_temple_with_three_stairs_and_blue_sky_in_Busan_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Front_exterior_view_of_Beomeosa_temple_with_three_stairs_and_blue_sky_in_Busan_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Burimun gate and pine under blue sky at Beomeosa temple in Busan, South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Burimun_gate_and_pine_under_blue_sky_at_Beomeosa_temple_in_Busan%2C_South_Korea.jpg/960px-Burimun_gate_and_pine_under_blue_sky_at_Beomeosa_temple_in_Busan%2C_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Burimun_gate_and_pine_under_blue_sky_at_Beomeosa_temple_in_Busan,_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Front exterior view of Beomeosa temple with stairs and blue sky in Busan South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Front_exterior_view_of_Beomeosa_temple_with_stairs_and_blue_sky_in_Busan_South_Korea.jpg/960px-Front_exterior_view_of_Beomeosa_temple_with_stairs_and_blue_sky_in_Busan_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Front_exterior_view_of_Beomeosa_temple_with_stairs_and_blue_sky_in_Busan_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  }
 ],
 "7": [
  {
   "title": "Haedong Yonggungsa Temple near Busan.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Haedong_Yonggungsa_Temple_near_Busan.jpg/960px-Haedong_Yonggungsa_Temple_near_Busan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple_near_Busan.jpg",
   "author": "Christian Bolz",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Haedong Yonggungsa Temple view on sea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Haedong_Yonggungsa_Temple_view_on_sea.JPG/960px-Haedong_Yonggungsa_Temple_view_on_sea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple_view_on_sea.JPG",
   "author": "Londenp",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Haedong Yonggungsa Temple, Busan, South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg/960px-Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple,_Busan,_South_Korea.jpg",
   "author": "Anna L Martin",
   "license": "CC BY 2.0"
  },
  {
   "title": "Haedong Yonggungsa Temple 20200522 044.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Haedong_Yonggungsa_Temple_20200522_044.jpg/960px-Haedong_Yonggungsa_Temple_20200522_044.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple_20200522_044.jpg",
   "author": "Mobius6",
   "license": "CC BY-SA 4.0"
  }
 ],
 "8": [
  {
   "title": "Jangansa Temple 1932.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Jangansa_Temple_1932.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Jangansa_Temple_1932.jpg",
   "author": "朝鮮總督府",
   "license": "Public domain"
  },
  {
   "title": "금강산 장안사 대웅보전.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/a/a2/%EA%B8%88%EA%B0%95%EC%82%B0_%EC%9E%A5%EC%95%88%EC%82%AC_%EB%8C%80%EC%9B%85%EB%B3%B4%EC%A0%84.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%88%EA%B0%95%EC%82%B0_%EC%9E%A5%EC%95%88%EC%82%AC_%EB%8C%80%EC%9B%85%EB%B3%B4%EC%A0%84.jpg",
   "author": "朝鮮總督府",
   "license": "Public domain"
  },
  {
   "title": "금강산 장안사 사성지전 내부 모습.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/c/c5/%EA%B8%88%EA%B0%95%EC%82%B0_%EC%9E%A5%EC%95%88%EC%82%AC_%EC%82%AC%EC%84%B1%EC%A7%80%EC%A0%84_%EB%82%B4%EB%B6%80_%EB%AA%A8%EC%8A%B5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%88%EA%B0%95%EC%82%B0_%EC%9E%A5%EC%95%88%EC%82%AC_%EC%82%AC%EC%84%B1%EC%A7%80%EC%A0%84_%EB%82%B4%EB%B6%80_%EB%AA%A8%EC%8A%B5.jpg",
   "author": "朝鮮總督府",
   "license": "Public domain"
  },
  {
   "title": "Cheokpanam Budai 16-11035.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Cheokpanam_Budai_16-11035.jpg/960px-Cheokpanam_Budai_16-11035.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Cheokpanam_Budai_16-11035.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "9": [
  {
   "title": "Korea-Daegu-Donghwasa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Korea-Daegu-Donghwasa-01.jpg/960px-Korea-Daegu-Donghwasa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Daegu-Donghwasa-01.jpg",
   "author": "by martinroell",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Donghwasa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Donghwasa_Temple.jpg/960px-Donghwasa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Donghwasa_Temple.jpg",
   "author": "adamgn",
   "license": "CC BY 2.0"
  },
  {
   "title": "Donghwasa-Korea-Info-Board.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Donghwasa-Korea-Info-Board.jpg/960px-Donghwasa-Korea-Info-Board.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Donghwasa-Korea-Info-Board.jpg",
   "author": "WolfgangMichel",
   "license": "CC0"
  },
  {
   "title": "Donghwasa lanterns.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Donghwasa_lanterns.jpg/960px-Donghwasa_lanterns.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Donghwasa_lanterns.jpg",
   "author": "Ricksinkorea",
   "license": "CC BY-SA 3.0"
  }
 ],
 "10": [
  {
   "title": "Pagyesa Temple, Palgongsan, Daegu.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Pagyesa_Temple%2C_Palgongsan%2C_Daegu.jpg/960px-Pagyesa_Temple%2C_Palgongsan%2C_Daegu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Pagyesa_Temple,_Palgongsan,_Daegu.jpg",
   "author": "Ken Eckert",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Pagyesa Roof Edge Long.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Pagyesa_Roof_Edge_Long.jpg/960px-Pagyesa_Roof_Edge_Long.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Pagyesa_Roof_Edge_Long.jpg",
   "author": "Ken Eckert",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Hall Ceiling at Pagyesa, near Daegu.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Hall_Ceiling_at_Pagyesa%2C_near_Daegu.jpg/960px-Hall_Ceiling_at_Pagyesa%2C_near_Daegu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hall_Ceiling_at_Pagyesa,_near_Daegu.jpg",
   "author": "Ken Eckert",
   "license": "CC BY-SA 4.0"
  }
 ],
 "11": [
  {
   "title": "Gyeongsan Gatbawi Buddha.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Gyeongsan_Gatbawi_Buddha.jpg/960px-Gyeongsan_Gatbawi_Buddha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gyeongsan_Gatbawi_Buddha.jpg",
   "author": "Barnkim",
   "license": "Public domain"
  },
  {
   "title": "Korea-Mokpo Gatbawi 11-01716.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Korea-Mokpo_Gatbawi_11-01716.JPG/960px-Korea-Mokpo_Gatbawi_11-01716.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Mokpo_Gatbawi_11-01716.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Mokpo Gatbawi 11-01717.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Korea-Mokpo_Gatbawi_11-01717.JPG/960px-Korea-Mokpo_Gatbawi_11-01717.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Mokpo_Gatbawi_11-01717.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Mokpo Gatbawi 11-01734.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Korea-Mokpo_Gatbawi_11-01734.JPG/960px-Korea-Mokpo_Gatbawi_11-01734.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Mokpo_Gatbawi_11-01734.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "12": [
  {
   "title": "Jeondeungsa 02.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Jeondeungsa_02.JPG/960px-Jeondeungsa_02.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeondeungsa_02.JPG",
   "author": "Dalgial",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Ganghwado Jeondeungsa Temple 20200718 039.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Ganghwado_Jeondeungsa_Temple_20200718_039.jpg/960px-Ganghwado_Jeondeungsa_Temple_20200718_039.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ganghwado_Jeondeungsa_Temple_20200718_039.jpg",
   "author": "Mobius6",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Ganghwado Jeondeungsa Temple 20200718 008.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Ganghwado_Jeondeungsa_Temple_20200718_008.jpg/960px-Ganghwado_Jeondeungsa_Temple_20200718_008.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ganghwado_Jeondeungsa_Temple_20200718_008.jpg",
   "author": "Mobius6",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Ganghwado Jeondeungsa Temple 20200718 007.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Ganghwado_Jeondeungsa_Temple_20200718_007.jpg/960px-Ganghwado_Jeondeungsa_Temple_20200718_007.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ganghwado_Jeondeungsa_Temple_20200718_007.jpg",
   "author": "Mobius6",
   "license": "CC BY-SA 4.0"
  }
 ],
 "13": [
  {
   "title": "Bomunsa Temple 04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Bomunsa_Temple_04.jpg/960px-Bomunsa_Temple_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bomunsa_Temple_04.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Bomunsa Temple 16.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Bomunsa_Temple_16.jpg/960px-Bomunsa_Temple_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bomunsa_Temple_16.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Bomunsa Temple 05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Bomunsa_Temple_05.jpg/960px-Bomunsa_Temple_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bomunsa_Temple_05.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Bomunsa Temple 08.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Bomunsa_Temple_08.jpg/960px-Bomunsa_Temple_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bomunsa_Temple_08.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "14": [
  {
   "title": "강화 정수사 법당 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/%EA%B0%95%ED%99%94_%EC%A0%95%EC%88%98%EC%82%AC_%EB%B2%95%EB%8B%B9_03.jpg/960px-%EA%B0%95%ED%99%94_%EC%A0%95%EC%88%98%EC%82%AC_%EB%B2%95%EB%8B%B9_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B0%95%ED%99%94_%EC%A0%95%EC%88%98%EC%82%AC_%EB%B2%95%EB%8B%B9_03.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Jeonsusa (Ganghwa) 13-01448.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Jeonsusa_%28Ganghwa%29_13-01448.JPG/960px-Jeonsusa_%28Ganghwa%29_13-01448.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeonsusa_(Ganghwa)_13-01448.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeonsusa Beopdang (Ganghwa) 13-01428.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Jeonsusa_Beopdang_%28Ganghwa%29_13-01428.JPG/960px-Jeonsusa_Beopdang_%28Ganghwa%29_13-01428.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeonsusa_Beopdang_(Ganghwa)_13-01428.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeonsusa Beopdang (Ganghwa) 13-01439.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Jeonsusa_Beopdang_%28Ganghwa%29_13-01439.JPG/960px-Jeonsusa_Beopdang_%28Ganghwa%29_13-01439.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeonsusa_Beopdang_(Ganghwa)_13-01439.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "15": [
  {
   "title": "증심사 전경.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%A0%84%EA%B2%BD.JPG/960px-%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%A0%84%EA%B2%BD.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%A0%84%EA%B2%BD.JPG",
   "author": "Dalgial",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Main hall interior of Jeungsimsa Temple Mudeungsan National Park.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Main_hall_interior_of_Jeungsimsa_Temple_Mudeungsan_National_Park.jpg/960px-Main_hall_interior_of_Jeungsimsa_Temple_Mudeungsan_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Main_hall_interior_of_Jeungsimsa_Temple_Mudeungsan_National_Park.jpg",
   "author": "Neelzuhbub47",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "증심사 철조비로자나불좌상 2.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%B2%A0%EC%A1%B0%EB%B9%84%EB%A1%9C%EC%9E%90%EB%82%98%EB%B6%88%EC%A2%8C%EC%83%81_2.JPG/960px-%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%B2%A0%EC%A1%B0%EB%B9%84%EB%A1%9C%EC%9E%90%EB%82%98%EB%B6%88%EC%A2%8C%EC%83%81_2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%B2%A0%EC%A1%B0%EB%B9%84%EB%A1%9C%EC%9E%90%EB%82%98%EB%B6%88%EC%A2%8C%EC%83%81_2.JPG",
   "author": "Dalgial",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "증심사 삼층석탑.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91.JPG/960px-%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%A6%9D%EC%8B%AC%EC%82%AC_%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91.JPG",
   "author": "Dalgial",
   "license": "CC BY-SA 3.0"
  }
 ],
 "16": [],
 "17": [
  {
   "title": "화성 용주사 동종 09.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_09.jpg/960px-%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_09.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "화성 용주사 동종 05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_05.jpg/960px-%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_05.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "화성 용주사 동종 04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_04.jpg/960px-%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_04.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "화성 용주사 동종 06.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_06.jpg/960px-%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%99%94%EC%84%B1_%EC%9A%A9%EC%A3%BC%EC%82%AC_%EB%8F%99%EC%A2%85_06.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  }
 ],
 "18": [
  {
   "title": "Josadang at Silleuksa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Josadang_at_Silleuksa_Temple.jpg/960px-Josadang_at_Silleuksa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Josadang_at_Silleuksa_Temple.jpg",
   "author": "Twotwo2019",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Geungnakbojeon Hall desk of Silleuksa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Geungnakbojeon_Hall_desk_of_Silleuksa_Temple.jpg/960px-Geungnakbojeon_Hall_desk_of_Silleuksa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Geungnakbojeon_Hall_desk_of_Silleuksa_Temple.jpg",
   "author": "Twotwo2019",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Silleuksa Temple - Geungnakbojeon IMG 2188.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Silleuksa_Temple_-_Geungnakbojeon_IMG_2188.jpg/960px-Silleuksa_Temple_-_Geungnakbojeon_IMG_2188.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Silleuksa_Temple_-_Geungnakbojeon_IMG_2188.jpg",
   "author": "G41rn8",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Josadang of Silleuksa-temple.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Josadang_of_Silleuksa-temple.JPG/960px-Josadang_of_Silleuksa-temple.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Josadang_of_Silleuksa-temple.JPG",
   "author": "Jjw",
   "license": "CC BY-SA 3.0"
  }
 ],
 "19": [],
 "20": [
  {
   "title": "Sujongsa in 2026 (1).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Sujongsa_in_2026_%281%29.jpg/960px-Sujongsa_in_2026_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sujongsa_in_2026_(1).jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Sujongsa in 2026 (2).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Sujongsa_in_2026_%282%29.jpg/960px-Sujongsa_in_2026_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sujongsa_in_2026_(2).jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Seonbuljang of Sujongsa in 2026.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Seonbuljang_of_Sujongsa_in_2026.jpg/960px-Seonbuljang_of_Sujongsa_in_2026.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonbuljang_of_Sujongsa_in_2026.jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Samjeongheon of Sujongsa in 2026.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Samjeongheon_of_Sujongsa_in_2026.jpg/960px-Samjeongheon_of_Sujongsa_in_2026.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Samjeongheon_of_Sujongsa_in_2026.jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  }
 ],
 "21": [
  {
   "title": "Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Birosanabul.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Birosanabul.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Birosanabul.jpg",
   "author": "Painted by Beopgyeong 법경(法烱)이 그린 그림",
   "license": "Public domain"
  },
  {
   "title": "Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Dosolcheongung.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/0/01/Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Dosolcheongung.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Dosolcheongung.jpg",
   "author": "Painted by Beopgyeong 법경(法烱)이 그린 그림",
   "license": "Public domain"
  },
  {
   "title": "Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Gwaneum.and.Jijang.Bosal.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/3/35/Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Gwaneum.and.Jijang.Bosal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-detail-Gwaneum.and.Jijang.Bosal.jpg",
   "author": "Painted by Beopgyeong 법경(法烱)이 그린 그림",
   "license": "Public domain"
  },
  {
   "title": "Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-Joseon.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-Joseon.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-NT-296-Chiljangsa.Obulhoe.Gwaebul.taeng-Joseon.jpg",
   "author": "Painted by Beopgyeong 법경(法烱)이 그린 그림",
   "license": "Public domain"
  }
 ],
 "22": [
  {
   "title": "Namhae Yongmunsa Budaigak 19-5062.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Namhae_Yongmunsa_Budaigak_19-5062.jpg/960px-Namhae_Yongmunsa_Budaigak_19-5062.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Namhae_Yongmunsa_Budaigak_19-5062.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Namhae Yongmunsa Budaigak 19-5061.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Namhae_Yongmunsa_Budaigak_19-5061.jpg/960px-Namhae_Yongmunsa_Budaigak_19-5061.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Namhae_Yongmunsa_Budaigak_19-5061.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "23": [
  {
   "title": "Mangwolsa Station.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Mangwolsa_Station.jpg/960px-Mangwolsa_Station.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mangwolsa_Station.jpg",
   "author": "인생살이",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Mangwolsa Stn. platform.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Mangwolsa_Stn._platform.jpg/960px-Mangwolsa_Stn._platform.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mangwolsa_Stn._platform.jpg",
   "author": "인생살이",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Mangwolsa Stn. waiting room.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Mangwolsa_Stn._waiting_room.jpg/960px-Mangwolsa_Stn._waiting_room.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mangwolsa_Stn._waiting_room.jpg",
   "author": "인생살이",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Mangwolsa Stn. nameplate.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Mangwolsa_Stn._nameplate.jpg/960px-Mangwolsa_Stn._nameplate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mangwolsa_Stn._nameplate.jpg",
   "author": "인생살이",
   "license": "CC BY-SA 4.0"
  }
 ],
 "24": [
  {
   "title": "Yeonjuam hermitage.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Yeonjuam_hermitage.jpg/960px-Yeonjuam_hermitage.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yeonjuam_hermitage.jpg",
   "author": "Guillaume 1995",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "20221022 관악산 연주암(Yeonjuam Hermitage, Mt. Gwanak) 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_03.jpg/960px-20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94(Yeonjuam_Hermitage,_Mt._Gwanak)_03.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "20221022 관악산 연주암(Yeonjuam Hermitage, Mt. Gwanak) 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_02.jpg/960px-20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94(Yeonjuam_Hermitage,_Mt._Gwanak)_02.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "20221022 관악산 연주암(Yeonjuam Hermitage, Mt. Gwanak) 04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_04.jpg/960px-20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94%28Yeonjuam_Hermitage%2C_Mt._Gwanak%29_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:20221022_%EA%B4%80%EC%95%85%EC%82%B0_%EC%97%B0%EC%A3%BC%EC%95%94(Yeonjuam_Hermitage,_Mt._Gwanak)_04.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0"
  }
 ],
 "25": [],
 "26": [
  {
   "title": "Bogwangsa, Paju.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Bogwangsa%2C_Paju.jpg/960px-Bogwangsa%2C_Paju.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bogwangsa,_Paju.jpg",
   "author": "Jjw",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "파주 보광사 숭정칠년명 동종.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/d/d6/%ED%8C%8C%EC%A3%BC_%EB%B3%B4%EA%B4%91%EC%82%AC_%EC%88%AD%EC%A0%95%EC%B9%A0%EB%85%84%EB%AA%85_%EB%8F%99%EC%A2%85.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%8C%8C%EC%A3%BC_%EB%B3%B4%EA%B4%91%EC%82%AC_%EC%88%AD%EC%A0%95%EC%B9%A0%EB%85%84%EB%AA%85_%EB%8F%99%EC%A2%85.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "27": [
  {
   "title": "Sammaksa Samcheungseoktap2691.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Sammaksa_Samcheungseoktap2691.jpg/960px-Sammaksa_Samcheungseoktap2691.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sammaksa_Samcheungseoktap2691.jpg",
   "author": "파란느낌",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Sammaksa Samcheungseoktap plaque.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Sammaksa_Samcheungseoktap_plaque.jpg/960px-Sammaksa_Samcheungseoktap_plaque.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sammaksa_Samcheungseoktap_plaque.jpg",
   "author": "파란느낌",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Sammaksa Samcheungseoktap 2690.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Sammaksa_Samcheungseoktap_2690.jpg/960px-Sammaksa_Samcheungseoktap_2690.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sammaksa_Samcheungseoktap_2690.jpg",
   "author": "파란느낌",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Anyang City-Designated Folklore Herltage No.4 sign (Three Gui Characters at Sammaksa Temple).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Anyang_City-Designated_Folklore_Herltage_No.4_sign_%28Three_Gui_Characters_at_Sammaksa_Temple%29.jpg/960px-Anyang_City-Designated_Folklore_Herltage_No.4_sign_%28Three_Gui_Characters_at_Sammaksa_Temple%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Anyang_City-Designated_Folklore_Herltage_No.4_sign_(Three_Gui_Characters_at_Sammaksa_Temple).jpg",
   "author": "고려",
   "license": "CC BY 4.0"
  }
 ],
 "28": [
  {
   "title": "Korea-Gangwon-Woljeongsa Nine Story Pagoda 1724-07.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/5/51/Korea-Gangwon-Woljeongsa_Nine_Story_Pagoda_1724-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gangwon-Woljeongsa_Nine_Story_Pagoda_1724-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gangwon-Woljeongsa 1700-07.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Korea-Gangwon-Woljeongsa_1700-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gangwon-Woljeongsa_1700-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gangwon-Woljeongsa 1717-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Korea-Gangwon-Woljeongsa_1717-07.JPG/960px-Korea-Gangwon-Woljeongsa_1717-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gangwon-Woljeongsa_1717-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gangwon-Woljeongsa Stone Lantern 1734-07.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/1/18/Korea-Gangwon-Woljeongsa_Stone_Lantern_1734-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gangwon-Woljeongsa_Stone_Lantern_1734-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "29": [
  {
   "title": "상원사동종 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_01.jpg/960px-%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "상원사동종 05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_05.jpg/960px-%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_05.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "상원사동종 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_03.jpg/960px-%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_03.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "상원사동종 04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_04.jpg/960px-%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%83%81%EC%9B%90%EC%82%AC%EB%8F%99%EC%A2%85_04.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "30": [
  {
   "title": "Sinheungsa Temple 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Sinheungsa_Temple_02.jpg/960px-Sinheungsa_Temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sinheungsa_Temple_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Sinheungsa Temple 06.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Sinheungsa_Temple_06.jpg/960px-Sinheungsa_Temple_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sinheungsa_Temple_06.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Sinheungsa Temple 05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinheungsa_Temple_05.jpg/960px-Sinheungsa_Temple_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sinheungsa_Temple_05.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Incense burner at Sinheungsa 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Incense_burner_at_Sinheungsa_01.jpg/960px-Incense_burner_at_Sinheungsa_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Incense_burner_at_Sinheungsa_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "31": [
  {
   "title": "Statue of bodhisattva at Naksansa 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Statue_of_bodhisattva_at_Naksansa_03.jpg/960px-Statue_of_bodhisattva_at_Naksansa_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Statue_of_bodhisattva_at_Naksansa_03.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Buddha Statue at Naksansa 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Buddha_Statue_at_Naksansa_02.jpg/960px-Buddha_Statue_at_Naksansa_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Buddha_Statue_at_Naksansa_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Bell Pavilion at Naksansa 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Bell_Pavilion_at_Naksansa_01.jpg/960px-Bell_Pavilion_at_Naksansa_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bell_Pavilion_at_Naksansa_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Statue of bodhisattva at Naksansa 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Statue_of_bodhisattva_at_Naksansa_02.jpg/960px-Statue_of_bodhisattva_at_Naksansa_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Statue_of_bodhisattva_at_Naksansa_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "32": [
  {
   "title": "Geonbongsa Neungpagyo 071104 by Mansegmj 0034.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Geonbongsa_Neungpagyo_071104_by_Mansegmj_0034.jpg/960px-Geonbongsa_Neungpagyo_071104_by_Mansegmj_0034.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Geonbongsa_Neungpagyo_071104_by_Mansegmj_0034.jpg",
   "author": "Mansegmj",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Geonbongsa Neungpagyo 071104 by Mansegmj 0032.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Geonbongsa_Neungpagyo_071104_by_Mansegmj_0032.jpg/960px-Geonbongsa_Neungpagyo_071104_by_Mansegmj_0032.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Geonbongsa_Neungpagyo_071104_by_Mansegmj_0032.jpg",
   "author": "Mansegmj",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Geonbongsa Neungpagyo 071104 by Mansegmj 0033.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Geonbongsa_Neungpagyo_071104_by_Mansegmj_0033.jpg/960px-Geonbongsa_Neungpagyo_071104_by_Mansegmj_0033.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Geonbongsa_Neungpagyo_071104_by_Mansegmj_0033.jpg",
   "author": "Mansegmj",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Geonbongsa Neungpagyo 071104 by Mansegmj 0031.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Geonbongsa_Neungpagyo_071104_by_Mansegmj_0031.jpg/960px-Geonbongsa_Neungpagyo_071104_by_Mansegmj_0031.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Geonbongsa_Neungpagyo_071104_by_Mansegmj_0031.jpg",
   "author": "Mansegmj",
   "license": "CC BY-SA 4.0"
  }
 ],
 "33": [
  {
   "title": "Manhae Museum.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Manhae_Museum.jpg/960px-Manhae_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Manhae_Museum.jpg",
   "author": "Jjw",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Celebrating Buddha s birthday at Baekdamsa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Celebrating_Buddha_s_birthday_at_Baekdamsa.jpg/960px-Celebrating_Buddha_s_birthday_at_Baekdamsa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Celebrating_Buddha_s_birthday_at_Baekdamsa.jpg",
   "author": "Mereytan",
   "license": "CC0"
  },
  {
   "title": "Monastery6.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Monastery6.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Monastery6.jpg",
   "author": "Choohhyun",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Monastery5.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/2/25/Monastery5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Monastery5.jpg",
   "author": "Choohhyun",
   "license": "CC BY-SA 3.0"
  }
 ],
 "34": [],
 "35": [
  {
   "title": "Jeongamsa Budai 16-02728.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Jeongamsa_Budai_16-02728.jpg/960px-Jeongamsa_Budai_16-02728.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeongamsa_Budai_16-02728.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeongamsa Budai 16-02859.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Jeongamsa_Budai_16-02859.jpg/960px-Jeongamsa_Budai_16-02859.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeongamsa_Budai_16-02859.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeongamsa Budai 16-02729.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Jeongamsa_Budai_16-02729.jpg/960px-Jeongamsa_Budai_16-02729.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeongamsa_Budai_16-02729.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeongamsa Budai 16-02861.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Jeongamsa_Budai_16-02861.jpg/960px-Jeongamsa_Budai_16-02861.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeongamsa_Budai_16-02861.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "36": [
  {
   "title": "Hoejeonmun door of Cheongpyeongsa temple in Chuncheon, Korea 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Hoejeonmun_door_of_Cheongpyeongsa_temple_in_Chuncheon%2C_Korea_01.jpg/960px-Hoejeonmun_door_of_Cheongpyeongsa_temple_in_Chuncheon%2C_Korea_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hoejeonmun_door_of_Cheongpyeongsa_temple_in_Chuncheon,_Korea_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "37": [
  {
   "title": "수타사(홍천군 동면)IMG 3767.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/%EC%88%98%ED%83%80%EC%82%AC%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3767.jpg/960px-%EC%88%98%ED%83%80%EC%82%AC%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3767.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%88%98%ED%83%80%EC%82%AC(%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4)IMG_3767.jpg",
   "author": "최광모 (Choe Kwangmo)",
   "license": "CC0"
  },
  {
   "title": "수타사 대적광전(홍천군 동면)IMG 3769.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/%EC%88%98%ED%83%80%EC%82%AC_%EB%8C%80%EC%A0%81%EA%B4%91%EC%A0%84%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3769.jpg/960px-%EC%88%98%ED%83%80%EC%82%AC_%EB%8C%80%EC%A0%81%EA%B4%91%EC%A0%84%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3769.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%88%98%ED%83%80%EC%82%AC_%EB%8C%80%EC%A0%81%EA%B4%91%EC%A0%84(%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4)IMG_3769.jpg",
   "author": "최광모 (Choe Kwangmo)",
   "license": "CC0"
  },
  {
   "title": "수타사(홍천군 동면)IMG 3768.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/%EC%88%98%ED%83%80%EC%82%AC%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3768.jpg/960px-%EC%88%98%ED%83%80%EC%82%AC%28%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4%29IMG_3768.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%88%98%ED%83%80%EC%82%AC(%ED%99%8D%EC%B2%9C%EA%B5%B0_%EB%8F%99%EB%A9%B4)IMG_3768.jpg",
   "author": "최광모 (Choe Kwangmo)",
   "license": "CC0"
  }
 ],
 "38": [
  {
   "title": "Korea-Boeun-Beopjusa Palsangjeon and Bell Pavilion 1765-06.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Korea-Boeun-Beopjusa_Palsangjeon_and_Bell_Pavilion_1765-06.JPG/960px-Korea-Boeun-Beopjusa_Palsangjeon_and_Bell_Pavilion_1765-06.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Boeun-Beopjusa_Palsangjeon_and_Bell_Pavilion_1765-06.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Beoun-Beopjusa Iron Flagpole 1763-06.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Korea-Beoun-Beopjusa_Iron_Flagpole_1763-06.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Beoun-Beopjusa_Iron_Flagpole_1763-06.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Beopjusa temple grounds.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Beopjusa_temple_grounds.jpg/960px-Beopjusa_temple_grounds.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Beopjusa_temple_grounds.jpg",
   "author": "Yoo Chung",
   "license": "CC BY-SA 2.5"
  },
  {
   "title": "Korea-Beoun-Beopjusa 1757-06.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Korea-Beoun-Beopjusa_1757-06.JPG/960px-Korea-Beoun-Beopjusa_1757-06.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Beoun-Beopjusa_1757-06.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "39": [
  {
   "title": "Korea-Danyang-Guinsa Nestled in the Valley 3027-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Korea-Danyang-Guinsa_Nestled_in_the_Valley_3027-07.JPG/960px-Korea-Danyang-Guinsa_Nestled_in_the_Valley_3027-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Danyang-Guinsa_Nestled_in_the_Valley_3027-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Danyang-Guinsa 3007-07.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/5/51/Korea-Danyang-Guinsa_3007-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Danyang-Guinsa_3007-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Danyang-Guinsa 2989-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Korea-Danyang-Guinsa_2989-07.JPG/960px-Korea-Danyang-Guinsa_2989-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Danyang-Guinsa_2989-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Danyang-Guinsa 3059-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Korea-Danyang-Guinsa_3059-07.JPG/960px-Korea-Danyang-Guinsa_3059-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Danyang-Guinsa_3059-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "40": [],
 "41": [],
 "42": [],
 "43": [
  {
   "title": "Magoksa Pagoda.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Magoksa_Pagoda.JPG/960px-Magoksa_Pagoda.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Magoksa_Pagoda.JPG",
   "author": "Jjw",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "덤벙주초.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/%EB%8D%A4%EB%B2%99%EC%A3%BC%EC%B4%88.jpg/960px-%EB%8D%A4%EB%B2%99%EC%A3%BC%EC%B4%88.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%8D%A4%EB%B2%99%EC%A3%BC%EC%B4%88.jpg",
   "author": "저작자표시라이센스입니다",
   "license": "CC BY 2.0"
  },
  {
   "title": "Magoksa Panorama.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Magoksa_Panorama.jpg/960px-Magoksa_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Magoksa_Panorama.jpg",
   "author": "https://commons.wikimedia.org/wiki/User:Jpbarrass",
   "license": "CC0"
  },
  {
   "title": "2009-10-11 - Magoksa Panorama.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/2009-10-11_-_Magoksa_Panorama.jpg/960px-2009-10-11_-_Magoksa_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:2009-10-11_-_Magoksa_Panorama.jpg",
   "author": "Jpbarrass",
   "license": "Public domain"
  }
 ],
 "44": [
  {
   "title": "공주 갑사 승탑 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_01.jpg/960px-%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "공주 갑사 승탑 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_02.jpg/960px-%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B3%B5%EC%A3%BC_%EA%B0%91%EC%82%AC_%EC%8A%B9%ED%83%91_02.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "45": [
  {
   "title": "Korea-Daejeon-Donghaksa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Korea-Daejeon-Donghaksa-01.jpg/960px-Korea-Daejeon-Donghaksa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Daejeon-Donghaksa-01.jpg",
   "author": "Timber Tank",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Korea-Daejeon-Donghaksa-02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Korea-Daejeon-Donghaksa-02.jpg/960px-Korea-Daejeon-Donghaksa-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Daejeon-Donghaksa-02.jpg",
   "author": "Timber Tank",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Donghaksa, Korea, 2010-11-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Donghaksa%2C_Korea%2C_2010-11-01.jpg/960px-Donghaksa%2C_Korea%2C_2010-11-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Donghaksa,_Korea,_2010-11-01.jpg",
   "author": "Alankang",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Gongju Donghaksa.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Gongju_Donghaksa.JPG/960px-Gongju_Donghaksa.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gongju_Donghaksa.JPG",
   "author": "Paul Evans - User: (WT-shared) Snave at  wts wikivoyage",
   "license": "Public domain"
  }
 ],
 "46": [
  {
   "title": "Sudeoksa Pagoda.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Sudeoksa_Pagoda.jpg/960px-Sudeoksa_Pagoda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sudeoksa_Pagoda.jpg",
   "author": "Halifax Nomad",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Sudeoksa Elephants.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Sudeoksa_Elephants.jpg/960px-Sudeoksa_Elephants.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sudeoksa_Elephants.jpg",
   "author": "Halifax Nomad",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Sudeoksa 01.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Sudeoksa_01.JPG/960px-Sudeoksa_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sudeoksa_01.JPG",
   "author": "Lawinc82",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Sudeoksa Temple - Monk's Houses - panoramio.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Sudeoksa_Temple_-_Monk%27s_Houses_-_panoramio.jpg/960px-Sudeoksa_Temple_-_Monk%27s_Houses_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sudeoksa_Temple_-_Monk%27s_Houses_-_panoramio.jpg",
   "author": "dokaspar",
   "license": "CC BY-SA 3.0"
  }
 ],
 "47": [
  {
   "title": "서산 개심사 대웅전 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/%EC%84%9C%EC%82%B0_%EA%B0%9C%EC%8B%AC%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_01.jpg/960px-%EC%84%9C%EC%82%B0_%EA%B0%9C%EC%8B%AC%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%84%9C%EC%82%B0_%EA%B0%9C%EC%8B%AC%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "제4경 개심사.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/%EC%A0%9C4%EA%B2%BD_%EA%B0%9C%EC%8B%AC%EC%82%AC.jpg/960px-%EC%A0%9C4%EA%B2%BD_%EA%B0%9C%EC%8B%AC%EC%82%AC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%A0%9C4%EA%B2%BD_%EA%B0%9C%EC%8B%AC%EC%82%AC.jpg",
   "author": "Seosan City Government",
   "license": "CC BY-SA 4.0"
  }
 ],
 "48": [
  {
   "title": "Janggoksa Temple Main Hall Front.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Janggoksa_Temple_Main_Hall_Front.jpg/960px-Janggoksa_Temple_Main_Hall_Front.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Janggoksa_Temple_Main_Hall_Front.jpg",
   "author": "Tungdangthanh",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "청양 장곡사 상 대웅전 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%83%81_%EB%8C%80%EC%9B%85%EC%A0%84_02.jpg/960px-%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%83%81_%EB%8C%80%EC%9B%85%EC%A0%84_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%83%81_%EB%8C%80%EC%9B%85%EC%A0%84_02.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "청양 장곡사 금동약사여래좌상.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EA%B8%88%EB%8F%99%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg/960px-%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EA%B8%88%EB%8F%99%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EA%B8%88%EB%8F%99%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "청양 장곡사 철조약사여래좌상 및 석조대좌.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%B2%A0%EC%A1%B0%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81_%EB%B0%8F_%EC%84%9D%EC%A1%B0%EB%8C%80%EC%A2%8C.jpg/960px-%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%B2%A0%EC%A1%B0%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81_%EB%B0%8F_%EC%84%9D%EC%A1%B0%EB%8C%80%EC%A2%8C.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B2%AD%EC%96%91_%EC%9E%A5%EA%B3%A1%EC%82%AC_%EC%B2%A0%EC%A1%B0%EC%95%BD%EC%82%AC%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81_%EB%B0%8F_%EC%84%9D%EC%A1%B0%EB%8C%80%EC%A2%8C.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "49": [
  {
   "title": "부여 무량사 오층석탑.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%98%A4%EC%B8%B5%EC%84%9D%ED%83%91.jpg/960px-%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%98%A4%EC%B8%B5%EC%84%9D%ED%83%91.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%98%A4%EC%B8%B5%EC%84%9D%ED%83%91.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "부여 무량사 석등.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%84%9D%EB%93%B1.jpg/960px-%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%84%9D%EB%93%B1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%B6%80%EC%97%AC_%EB%AC%B4%EB%9F%89%EC%82%AC_%EC%84%9D%EB%93%B1.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "Muryangsa in Gyeongju 3.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Muryangsa_in_Gyeongju_3.jpg/960px-Muryangsa_in_Gyeongju_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Muryangsa_in_Gyeongju_3.jpg",
   "author": "Christophe95",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Muryangsa in Gyeongju 2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Muryangsa_in_Gyeongju_2.jpg/960px-Muryangsa_in_Gyeongju_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Muryangsa_in_Gyeongju_2.jpg",
   "author": "Christophe95",
   "license": "CC BY-SA 4.0"
  }
 ],
 "50": [
  {
   "title": "Gwanchoksa - Courtyard IMG 20160928 035626.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Gwanchoksa_-_Courtyard_IMG_20160928_035626.jpg/960px-Gwanchoksa_-_Courtyard_IMG_20160928_035626.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gwanchoksa_-_Courtyard_IMG_20160928_035626.jpg",
   "author": "G41rn8",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Gwanchoksa-Jpgdi.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Gwanchoksa-Jpgdi.jpg/960px-Gwanchoksa-Jpgdi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gwanchoksa-Jpgdi.jpg",
   "author": "Dittwjfsdgkvkdjg",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Gwanchoksa - Gates IMG 20160928 032924.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Gwanchoksa_-_Gates_IMG_20160928_032924.jpg/960px-Gwanchoksa_-_Gates_IMG_20160928_032924.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gwanchoksa_-_Gates_IMG_20160928_032924.jpg",
   "author": "G41rn8",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Gwanchoksa - Maitreya Hall IMG 20160928 034349.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Gwanchoksa_-_Maitreya_Hall_IMG_20160928_034349.jpg/960px-Gwanchoksa_-_Maitreya_Hall_IMG_20160928_034349.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gwanchoksa_-_Maitreya_Hall_IMG_20160928_034349.jpg",
   "author": "G41rn8",
   "license": "CC BY-SA 4.0"
  }
 ],
 "51": [],
 "52": [
  {
   "title": "Korea-Gimje-Geumsansa Temple Grounds 4160&1&2-07.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Korea-Gimje-Geumsansa_Temple_Grounds_4160%261%262-07.jpg/960px-Korea-Gimje-Geumsansa_Temple_Grounds_4160%261%262-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gimje-Geumsansa_Temple_Grounds_4160%261%262-07.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gimje-Geumsansa-05.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/8/80/Korea-Gimje-Geumsansa-05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gimje-Geumsansa-05.jpg",
   "author": "Steve46814 (talk)",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gimje-Geumsansa-06.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Korea-Gimje-Geumsansa-06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gimje-Geumsansa-06.jpg",
   "author": "Steve46814 (talk)",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gimje-Geumsansa-03.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/9/97/Korea-Gimje-Geumsansa-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gimje-Geumsansa-03.jpg",
   "author": "Steve46814 (talk)",
   "license": "CC BY-SA 3.0"
  }
 ],
 "53": [
  {
   "title": "Seonunsa Temple, South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Seonunsa_Temple%2C_South_Korea.jpg/960px-Seonunsa_Temple%2C_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonunsa_Temple,_South_Korea.jpg",
   "author": "Lance Vanlewen",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Seonunsa Temple Guardian, South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Seonunsa_Temple_Guardian%2C_South_Korea.jpg/960px-Seonunsa_Temple_Guardian%2C_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonunsa_Temple_Guardian,_South_Korea.jpg",
   "author": "Lance Vanlewen",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Seonunsa Temple Guardian, South Korea (2).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Seonunsa_Temple_Guardian%2C_South_Korea_%282%29.jpg/960px-Seonunsa_Temple_Guardian%2C_South_Korea_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonunsa_Temple_Guardian,_South_Korea_(2).jpg",
   "author": "Lance Vanlewen",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Seonunsa Temple Monument, South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Seonunsa_Temple_Monument%2C_South_Korea.jpg/960px-Seonunsa_Temple_Monument%2C_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonunsa_Temple_Monument,_South_Korea.jpg",
   "author": "Lance Vanlewen",
   "license": "CC BY-SA 4.0"
  }
 ],
 "54": [
  {
   "title": "Naesosa Daeungbojeon 13-04562 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Naesosa_Daeungbojeon_13-04562_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Naesosa_Daeungbojeon_13-04562_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Naesosa_Daeungbojeon_13-04562_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Naesosa temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Naesosa_temple.jpg/960px-Naesosa_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Naesosa_temple.jpg",
   "author": "Jo",
   "license": "CC BY 2.0"
  },
  {
   "title": "Naesosa Sansingak 13-04512 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Naesosa_Sansingak_13-04512_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Naesosa_Sansingak_13-04512_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Naesosa_Sansingak_13-04512_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Naesosa Seolseondang 13-04461 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Naesosa_Seolseondang_13-04461_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Naesosa_Seolseondang_13-04461_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Naesosa_Seolseondang_13-04461_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "55": [
  {
   "title": "Gaeamsa Iljumun 13-05565 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Gaeamsa_Iljumun_13-05565_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Gaeamsa_Iljumun_13-05565_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gaeamsa_Iljumun_13-05565_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Gaeamsa Iljumun 13-05562 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Gaeamsa_Iljumun_13-05562_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Gaeamsa_Iljumun_13-05562_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gaeamsa_Iljumun_13-05562_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Gaeamsa Iljumun 13-05568 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Gaeamsa_Iljumun_13-05568_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Gaeamsa_Iljumun_13-05568_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gaeamsa_Iljumun_13-05568_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Gaeamsa Iljumun 13-05559 - Buan-gun, Jeollabuk-do, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Gaeamsa_Iljumun_13-05559_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG/960px-Gaeamsa_Iljumun_13-05559_-_Buan-gun%2C_Jeollabuk-do%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Gaeamsa_Iljumun_13-05559_-_Buan-gun,_Jeollabuk-do,_South_Korea.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "56": [
  {
   "title": "Silsangsa temple outside.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Silsangsa_temple_outside.JPG/960px-Silsangsa_temple_outside.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Silsangsa_temple_outside.JPG",
   "author": "Namwon030",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Three-story Stone Pagodas of Silsangsa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Three-story_Stone_Pagodas_of_Silsangsa_Temple.jpg/960px-Three-story_Stone_Pagodas_of_Silsangsa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Three-story_Stone_Pagodas_of_Silsangsa_Temple.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "Seated Iron Buddha statue at Silsangsa temple in Namwon, Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Seated_Iron_Buddha_statue_at_Silsangsa_temple_in_Namwon%2C_Korea.jpg/960px-Seated_Iron_Buddha_statue_at_Silsangsa_temple_in_Namwon%2C_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seated_Iron_Buddha_statue_at_Silsangsa_temple_in_Namwon,_Korea.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "Three-story Stone Pagoda at Baekjangam of Silsangsa Temple in Namwon, Korea 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Three-story_Stone_Pagoda_at_Baekjangam_of_Silsangsa_Temple_in_Namwon%2C_Korea_01.jpg/960px-Three-story_Stone_Pagoda_at_Baekjangam_of_Silsangsa_Temple_in_Namwon%2C_Korea_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Three-story_Stone_Pagoda_at_Baekjangam_of_Silsangsa_Temple_in_Namwon,_Korea_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "57": [],
 "58": [],
 "59": [
  {
   "title": "Korea-Jinan-Tapsa and Stone Pagodas 3732-07.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/3/33/Korea-Jinan-Tapsa_and_Stone_Pagodas_3732-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Jinan-Tapsa_and_Stone_Pagodas_3732-07.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Tapsa and Stone Pagodas 3719-07 Yi Gap Yong.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tapsa_and_Stone_Pagodas_3719-07_Yi_Gap_Yong.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Tapsa_and_Stone_Pagodas_3719-07_Yi_Gap_Yong.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Jinan-Tapsa and Stone Pagodas 3703-07.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Korea-Jinan-Tapsa_and_Stone_Pagodas_3703-07.jpg/960px-Korea-Jinan-Tapsa_and_Stone_Pagodas_3703-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Jinan-Tapsa_and_Stone_Pagodas_3703-07.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Jinan-Tapsa and Stone Pagodas 3704-07.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Korea-Jinan-Tapsa_and_Stone_Pagodas_3704-07.jpg/960px-Korea-Jinan-Tapsa_and_Stone_Pagodas_3704-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Jinan-Tapsa_and_Stone_Pagodas_3704-07.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "60": [
  {
   "title": "Korea-Songgwangsa-01.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/5/51/Korea-Songgwangsa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Songgwangsa-01.jpg",
   "author": "by The Chosun Bimbo",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Songgwangsa-06.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Korea-Songgwangsa-06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Songgwangsa-06.jpg",
   "author": "by The Chosun Bimbo",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Songgwangsa-02.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/6/69/Korea-Songgwangsa-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Songgwangsa-02.jpg",
   "author": "by The Chosun Bimbo",
   "license": "CC BY 2.0"
  },
  {
   "title": "Songgwangsa main building (Daiyuden).jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/0/08/Songgwangsa_main_building_%28Daiyuden%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Songgwangsa_main_building_(Daiyuden).jpg",
   "author": "朝鮮総督府",
   "license": "Public domain"
  }
 ],
 "61": [
  {
   "title": "Seonamsa Eungjindang 11-06859.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Seonamsa_Eungjindang_11-06859.JPG/960px-Seonamsa_Eungjindang_11-06859.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonamsa_Eungjindang_11-06859.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Seonamsa 11-06830.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Seonamsa_11-06830.JPG/960px-Seonamsa_11-06830.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonamsa_11-06830.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Seonamsa Monument to the Restoration of Seonamsa 11-06888.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Seonamsa_Monument_to_the_Restoration_of_Seonamsa_11-06888.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Seonamsa_Monument_to_the_Restoration_of_Seonamsa_11-06888.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Seonamsa Monument to the Restoration of Seonamsa 11-06892.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Seonamsa_Monument_to_the_Restoration_of_Seonamsa_11-06892.JPG/960px-Seonamsa_Monument_to_the_Restoration_of_Seonamsa_11-06892.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seonamsa_Monument_to_the_Restoration_of_Seonamsa_11-06892.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "62": [
  {
   "title": "Daeheungsa 11-03878.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Daeheungsa_11-03878.JPG/960px-Daeheungsa_11-03878.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Daeheungsa_11-03878.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Daeheungsa 11-03864.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Daeheungsa_11-03864.JPG/960px-Daeheungsa_11-03864.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Daeheungsa_11-03864.JPG",
   "author": "steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Daeheungsa 11-03857.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Daeheungsa_11-03857.JPG/960px-Daeheungsa_11-03857.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Daeheungsa_11-03857.JPG",
   "author": "steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Daeheungsa 11-03858.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Daeheungsa_11-03858.JPG/960px-Daeheungsa_11-03858.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Daeheungsa_11-03858.JPG",
   "author": "steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "63": [
  {
   "title": "Mihwangsa 11-03733.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Mihwangsa_11-03733.JPG/960px-Mihwangsa_11-03733.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mihwangsa_11-03733.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Mihwangsa 11-03726.JPG",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mihwangsa_11-03726.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Mihwangsa_11-03726.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Mihwangsa 11-03721.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Mihwangsa_11-03721.JPG/960px-Mihwangsa_11-03721.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mihwangsa_11-03721.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Mihwangsa 11-03772.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Mihwangsa_11-03772.JPG/960px-Mihwangsa_11-03772.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Mihwangsa_11-03772.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "64": [
  {
   "title": "Korea-Mountain-Jirisan-Hwaeomsa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Korea-Mountain-Jirisan-Hwaeomsa-01.jpg/960px-Korea-Mountain-Jirisan-Hwaeomsa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Mountain-Jirisan-Hwaeomsa-01.jpg",
   "author": "by eimoberg",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Gurye-Hwaeomsa 5036-06.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Korea-Gurye-Hwaeomsa_5036-06.JPG/960px-Korea-Gurye-Hwaeomsa_5036-06.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gurye-Hwaeomsa_5036-06.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Mountain-Jirisan-Hwaeomsa-08.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Korea-Mountain-Jirisan-Hwaeomsa-08.jpg/960px-Korea-Mountain-Jirisan-Hwaeomsa-08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Mountain-Jirisan-Hwaeomsa-08.jpg",
   "author": "by eimoberg",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Gurye-Hwaeomsa 5046-06.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Korea-Gurye-Hwaeomsa_5046-06.JPG/960px-Korea-Gurye-Hwaeomsa_5046-06.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gurye-Hwaeomsa_5046-06.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "65": [],
 "66": [],
 "67": [],
 "68": [
  {
   "title": "강진무위사극락전.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84.jpg/960px-%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "강진무위사극락전측면2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%B8%A1%EB%A9%B42.jpg/960px-%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%B8%A1%EB%A9%B42.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%B8%A1%EB%A9%B42.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "무위사-백의관음(無爲寺-白衣觀音).jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/a/a8/%EB%AC%B4%EC%9C%84%EC%82%AC-%EB%B0%B1%EC%9D%98%EA%B4%80%EC%9D%8C%28%E7%84%A1%E7%88%B2%E5%AF%BA-%E7%99%BD%E8%A1%A3%E8%A7%80%E9%9F%B3%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%AC%B4%EC%9C%84%EC%82%AC-%EB%B0%B1%EC%9D%98%EA%B4%80%EC%9D%8C(%E7%84%A1%E7%88%B2%E5%AF%BA-%E7%99%BD%E8%A1%A3%E8%A7%80%E9%9F%B3).jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "강진무위사극락전의분합문.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%9D%98%EB%B6%84%ED%95%A9%EB%AC%B8.jpg/960px-%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%9D%98%EB%B6%84%ED%95%A9%EB%AC%B8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B0%95%EC%A7%84%EB%AC%B4%EC%9C%84%EC%82%AC%EA%B7%B9%EB%9D%BD%EC%A0%84%EC%9D%98%EB%B6%84%ED%95%A9%EB%AC%B8.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "69": [
  {
   "title": "Jeokseoksa Daeungjeon (Ganghwa) 13-01596.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01596.JPG/960px-Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01596.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeokseoksa_Daeungjeon_(Ganghwa)_13-01596.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeokseoksa Daeungjeon (Ganghwa) 13-01592.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01592.JPG/960px-Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01592.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeokseoksa_Daeungjeon_(Ganghwa)_13-01592.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeokseoksa Nokjodae (Gwanghwa) 13-01670.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Jeokseoksa_Nokjodae_%28Gwanghwa%29_13-01670.JPG/960px-Jeokseoksa_Nokjodae_%28Gwanghwa%29_13-01670.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeokseoksa_Nokjodae_(Gwanghwa)_13-01670.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeokseoksa Daeungjeon (Ganghwa) 13-01590.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01590.JPG/960px-Jeokseoksa_Daeungjeon_%28Ganghwa%29_13-01590.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeokseoksa_Daeungjeon_(Ganghwa)_13-01590.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "70": [
  {
   "title": "Korea-Unjusa 4507-07 Cilcheung Seoktap facing Unjusa Seokjo Bulgam.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Korea-Unjusa_4507-07_Cilcheung_Seoktap_facing_Unjusa_Seokjo_Bulgam.JPG/960px-Korea-Unjusa_4507-07_Cilcheung_Seoktap_facing_Unjusa_Seokjo_Bulgam.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Unjusa_4507-07_Cilcheung_Seoktap_facing_Unjusa_Seokjo_Bulgam.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Unjusa 4556-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Korea-Unjusa_4556-07.JPG/960px-Korea-Unjusa_4556-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Unjusa_4556-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Unjusa 4534-07 Buddha.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Korea-Unjusa_4534-07_Buddha.JPG/960px-Korea-Unjusa_4534-07_Buddha.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Unjusa_4534-07_Buddha.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Unjusa 4518-07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Korea-Unjusa_4518-07.JPG/960px-Korea-Unjusa_4518-07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Unjusa_4518-07.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "71": [
  {
   "title": "Dragon in Hyangiram.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Dragon_in_Hyangiram.jpg/960px-Dragon_in_Hyangiram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Dragon_in_Hyangiram.jpg",
   "author": "Smiley.toerist",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "The Namhae sea through the Temple of Hyangiram 20091205.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/The_Namhae_sea_through_the_Temple_of_Hyangiram_20091205.JPG/960px-The_Namhae_sea_through_the_Temple_of_Hyangiram_20091205.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:The_Namhae_sea_through_the_Temple_of_Hyangiram_20091205.JPG",
   "author": "날개",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "The Buddhist Goddess of Mercy at Temple of Hyangiram 20091205.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/The_Buddhist_Goddess_of_Mercy_at_Temple_of_Hyangiram_20091205.JPG/960px-The_Buddhist_Goddess_of_Mercy_at_Temple_of_Hyangiram_20091205.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:The_Buddhist_Goddess_of_Mercy_at_Temple_of_Hyangiram_20091205.JPG",
   "author": "날개",
   "license": "CC BY-SA 3.0"
  }
 ],
 "72": [
  {
   "title": "Bronze Cymbal at Taeansa temple in Gokseong, Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Bronze_Cymbal_at_Taeansa_temple_in_Gokseong%2C_Korea.jpg/960px-Bronze_Cymbal_at_Taeansa_temple_in_Gokseong%2C_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bronze_Cymbal_at_Taeansa_temple_in_Gokseong,_Korea.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "73": [
  {
   "title": "Many colorful flowerpots in front of Bulguksa temple in Gyeongju South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Many_colorful_flowerpots_in_front_of_Bulguksa_temple_in_Gyeongju_South_Korea.jpg/960px-Many_colorful_flowerpots_in_front_of_Bulguksa_temple_in_Gyeongju_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Many_colorful_flowerpots_in_front_of_Bulguksa_temple_in_Gyeongju_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Bulguksa temple entrance gate stairs flower bed and blue sky in Gyeongju South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Bulguksa_temple_entrance_gate_stairs_flower_bed_and_blue_sky_in_Gyeongju_South_Korea.jpg/960px-Bulguksa_temple_entrance_gate_stairs_flower_bed_and_blue_sky_in_Gyeongju_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bulguksa_temple_entrance_gate_stairs_flower_bed_and_blue_sky_in_Gyeongju_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Courtyard of colorful paper lanterns and shadow patterns at Bulguksa temple Gyeongju South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Courtyard_of_colorful_paper_lanterns_and_shadow_patterns_at_Bulguksa_temple_Gyeongju_South_Korea.jpg/960px-Courtyard_of_colorful_paper_lanterns_and_shadow_patterns_at_Bulguksa_temple_Gyeongju_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Courtyard_of_colorful_paper_lanterns_and_shadow_patterns_at_Bulguksa_temple_Gyeongju_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Open gate leaning to a courtyard of colorful paper lanterns at Bulguksa temple in Gyeongju South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Open_gate_leaning_to_a_courtyard_of_colorful_paper_lanterns_at_Bulguksa_temple_in_Gyeongju_South_Korea.jpg/960px-Open_gate_leaning_to_a_courtyard_of_colorful_paper_lanterns_at_Bulguksa_temple_in_Gyeongju_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Open_gate_leaning_to_a_courtyard_of_colorful_paper_lanterns_at_Bulguksa_temple_in_Gyeongju_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  }
 ],
 "74": [
  {
   "title": "Interior view of the Buddhist temple near Seokguram Grotto in Gyeongju South Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Interior_view_of_the_Buddhist_temple_near_Seokguram_Grotto_in_Gyeongju_South_Korea.jpg/960px-Interior_view_of_the_Buddhist_temple_near_Seokguram_Grotto_in_Gyeongju_South_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Interior_view_of_the_Buddhist_temple_near_Seokguram_Grotto_in_Gyeongju_South_Korea.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Seokguram Grotto 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Seokguram_Grotto_03.jpg/960px-Seokguram_Grotto_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seokguram_Grotto_03.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Seokguram Grotto 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Seokguram_Grotto_01.jpg/960px-Seokguram_Grotto_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seokguram_Grotto_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Seokguram Grotto 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Seokguram_Grotto_02.jpg/960px-Seokguram_Grotto_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seokguram_Grotto_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "75": [
  {
   "title": "Korea-Gyeongju-Bunhwangsa-Three story pagoda-02.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Korea-Gyeongju-Bunhwangsa-Three_story_pagoda-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gyeongju-Bunhwangsa-Three_story_pagoda-02.jpg",
   "author": "by Junho Jung at Flickr from South Korea",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Gyeongju-Bunhwangsa seoktap-04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Korea-Gyeongju-Bunhwangsa_seoktap-04.jpg/960px-Korea-Gyeongju-Bunhwangsa_seoktap-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Gyeongju-Bunhwangsa_seoktap-04.jpg",
   "author": "bifyu (a flickr user)",
   "license": "CC BY-SA 2.0"
  },
  {
   "title": "Bunhwangsa 04.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Bunhwangsa_04.JPG/960px-Bunhwangsa_04.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bunhwangsa_04.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Bunhwangsa 02.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Bunhwangsa_02.JPG/960px-Bunhwangsa_02.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bunhwangsa_02.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 3.0"
  }
 ],
 "76": [
  {
   "title": "Daejeokgwangjeon at Girimsa-Gyeongju-Korea-03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Daejeokgwangjeon_at_Girimsa-Gyeongju-Korea-03.jpg/960px-Daejeokgwangjeon_at_Girimsa-Gyeongju-Korea-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Daejeokgwangjeon_at_Girimsa-Gyeongju-Korea-03.jpg",
   "author": "nzj© at w:Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Girimsa-Gyeongju-Korea-04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Girimsa-Gyeongju-Korea-04.jpg/960px-Girimsa-Gyeongju-Korea-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Girimsa-Gyeongju-Korea-04.jpg",
   "author": "nzj© at w:Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Girimsa-Gyeongju-Korea-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Girimsa-Gyeongju-Korea-01.jpg/960px-Girimsa-Gyeongju-Korea-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Girimsa-Gyeongju-Korea-01.jpg",
   "author": "nzj© at w:Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Girimsa-Gyeongju-Korea-05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Girimsa-Gyeongju-Korea-05.jpg/960px-Girimsa-Gyeongju-Korea-05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Girimsa-Gyeongju-Korea-05.jpg",
   "author": "nzj© at w:Picasa",
   "license": "CC BY 3.0"
  }
 ],
 "77": [
  {
   "title": "Buseoksa Temple 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Buseoksa_Temple_03.jpg/960px-Buseoksa_Temple_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Buseoksa_Temple_03.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Buseoksa Temple 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Buseoksa_Temple_02.jpg/960px-Buseoksa_Temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Buseoksa_Temple_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Bell Pavilion at Buseoksa 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Bell_Pavilion_at_Buseoksa_01.jpg/960px-Bell_Pavilion_at_Buseoksa_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bell_Pavilion_at_Buseoksa_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Korea-Seosan-Buseoksa-Building-02.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Korea-Seosan-Buseoksa-Building-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Seosan-Buseoksa-Building-02.jpg",
   "author": "pcamp",
   "license": "CC BY 2.0"
  }
 ],
 "78": [
  {
   "title": "Korea-Andong-Bongjeongsa 3040-06 Geungnakjeon.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Korea-Andong-Bongjeongsa_3040-06_Geungnakjeon.JPG/960px-Korea-Andong-Bongjeongsa_3040-06_Geungnakjeon.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Bongjeongsa_3040-06_Geungnakjeon.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Andong-Bongjeongsa 3037-06 Daeungjeon.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Korea-Andong-Bongjeongsa_3037-06_Daeungjeon.JPG/960px-Korea-Andong-Bongjeongsa_3037-06_Daeungjeon.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Bongjeongsa_3037-06_Daeungjeon.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Andong-Bongjeongsa 3035-06 Maseru.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Korea-Andong-Bongjeongsa_3035-06_Maseru.JPG/960px-Korea-Andong-Bongjeongsa_3035-06_Maseru.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Bongjeongsa_3035-06_Maseru.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Korea-Andong-Bongjeongsa 3046-06 Bell Pavilion.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Korea-Andong-Bongjeongsa_3046-06_Bell_Pavilion.JPG/960px-Korea-Andong-Bongjeongsa_3046-06_Bell_Pavilion.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Bongjeongsa_3046-06_Bell_Pavilion.JPG",
   "author": "Steve46814",
   "license": "CC BY-SA 3.0"
  }
 ],
 "79": [
  {
   "title": "Korea-Andong-Gounsa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Korea-Andong-Gounsa-01.jpg/960px-Korea-Andong-Gounsa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Gounsa-01.jpg",
   "author": "Robert at Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Korea-Andong-Gounsa-02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Korea-Andong-Gounsa-02.jpg/960px-Korea-Andong-Gounsa-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Andong-Gounsa-02.jpg",
   "author": "Robert at Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "의성 고운사 석조여래좌상.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/%EC%9D%98%EC%84%B1_%EA%B3%A0%EC%9A%B4%EC%82%AC_%EC%84%9D%EC%A1%B0%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg/960px-%EC%9D%98%EC%84%B1_%EA%B3%A0%EC%9A%B4%EC%82%AC_%EC%84%9D%EC%A1%B0%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%9D%98%EC%84%B1_%EA%B3%A0%EC%9A%B4%EC%82%AC_%EC%84%9D%EC%A1%B0%EC%97%AC%EB%9E%98%EC%A2%8C%EC%83%81.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "80": [
  {
   "title": "Jikjisa 01.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Jikjisa_01.JPG/960px-Jikjisa_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jikjisa_01.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jikjisa 12.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Jikjisa_12.JPG/960px-Jikjisa_12.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jikjisa_12.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jikjisa 04.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Jikjisa_04.JPG/960px-Jikjisa_04.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jikjisa_04.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jikjisa 07.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Jikjisa_07.JPG/960px-Jikjisa_07.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jikjisa_07.JPG",
   "author": "hyolee2",
   "license": "CC BY-SA 4.0"
  }
 ],
 "81": [
  {
   "title": "Eunhaesa Baekheungam Geukrakjeon shot by Meet411 for WLM 2016.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Eunhaesa_Baekheungam_Geukrakjeon_shot_by_Meet411_for_WLM_2016.jpg/960px-Eunhaesa_Baekheungam_Geukrakjeon_shot_by_Meet411_for_WLM_2016.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Eunhaesa_Baekheungam_Geukrakjeon_shot_by_Meet411_for_WLM_2016.jpg",
   "author": "Meet411",
   "license": "CC BY-SA 4.0"
  }
 ],
 "82": [
  {
   "title": "Unmun-Tempel-Korea-Layout.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Unmun-Tempel-Korea-Layout.jpg/960px-Unmun-Tempel-Korea-Layout.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Unmun-Tempel-Korea-Layout.jpg",
   "author": "WolfgangMichel",
   "license": "CC0"
  },
  {
   "title": "Unmunsa 2006.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Unmunsa_2006.jpg/960px-Unmunsa_2006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Unmunsa_2006.jpg",
   "author": "Bill Marmie",
   "license": "CC BY 2.0"
  },
  {
   "title": "Unmunsa temple drum.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Unmunsa_temple_drum.jpg/960px-Unmunsa_temple_drum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Unmunsa_temple_drum.jpg",
   "author": "Bill Marmie",
   "license": "CC BY 2.0"
  }
 ],
 "83": [
  {
   "title": "포항 보경사 승탑.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/%ED%8F%AC%ED%95%AD_%EB%B3%B4%EA%B2%BD%EC%82%AC_%EC%8A%B9%ED%83%91.jpg/960px-%ED%8F%AC%ED%95%AD_%EB%B3%B4%EA%B2%BD%EC%82%AC_%EC%8A%B9%ED%83%91.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%ED%8F%AC%ED%95%AD_%EB%B3%B4%EA%B2%BD%EC%82%AC_%EC%8A%B9%ED%83%91.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "84": [],
 "85": [
  {
   "title": "불영사 영산회상도.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/9/9e/%EB%B6%88%EC%98%81%EC%82%AC_%EC%98%81%EC%82%B0%ED%9A%8C%EC%83%81%EB%8F%84.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%B6%88%EC%98%81%EC%82%AC_%EC%98%81%EC%82%B0%ED%9A%8C%EC%83%81%EB%8F%84.jpg",
   "author": "Korean Cultural heritage Administration",
   "license": "Public domain"
  }
 ],
 "86": [
  {
   "title": "Yeoju Daeseungsa 1.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Yeoju_Daeseungsa_1.jpg/960px-Yeoju_Daeseungsa_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yeoju_Daeseungsa_1.jpg",
   "author": "Altostratus",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Yeoju Daeseungsa 8.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Yeoju_Daeseungsa_8.jpg/960px-Yeoju_Daeseungsa_8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yeoju_Daeseungsa_8.jpg",
   "author": "Altostratus",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Yeoju Daeseungsa 4.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Yeoju_Daeseungsa_4.jpg/960px-Yeoju_Daeseungsa_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yeoju_Daeseungsa_4.jpg",
   "author": "Altostratus",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Yeoju Daeseungsa 5.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Yeoju_Daeseungsa_5.jpg/960px-Yeoju_Daeseungsa_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yeoju_Daeseungsa_5.jpg",
   "author": "Altostratus",
   "license": "CC BY-SA 4.0"
  }
 ],
 "87": [
  {
   "title": "봉암사 이여재.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/e/e3/%EB%B4%89%EC%95%94%EC%82%AC_%EC%9D%B4%EC%97%AC%EC%9E%AC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%B4%89%EC%95%94%EC%82%AC_%EC%9D%B4%EC%97%AC%EC%9E%AC.jpg",
   "author": "고흥군",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Buddha engraving near Bongamsa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Buddha_engraving_near_Bongamsa.jpg/960px-Buddha_engraving_near_Bongamsa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Buddha_engraving_near_Bongamsa.jpg",
   "author": "Yoo Chung",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Stele accompanying stupa of buddhist priest Jijeungdaesa.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/9/92/Stele_accompanying_stupa_of_buddhist_priest_Jijeungdaesa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Stele_accompanying_stupa_of_buddhist_priest_Jijeungdaesa.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "문경 봉암사 지증대사탑 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/%EB%AC%B8%EA%B2%BD_%EB%B4%89%EC%95%94%EC%82%AC_%EC%A7%80%EC%A6%9D%EB%8C%80%EC%82%AC%ED%83%91_01.jpg/960px-%EB%AC%B8%EA%B2%BD_%EB%B4%89%EC%95%94%EC%82%AC_%EC%A7%80%EC%A6%9D%EB%8C%80%EC%82%AC%ED%83%91_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%AC%B8%EA%B2%BD_%EB%B4%89%EC%95%94%EC%82%AC_%EC%A7%80%EC%A6%9D%EB%8C%80%EC%82%AC%ED%83%91_01.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "88": [
  {
   "title": "Korea-Bonghwa County-Cheongnyangsa-04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Korea-Bonghwa_County-Cheongnyangsa-04.jpg/960px-Korea-Bonghwa_County-Cheongnyangsa-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Bonghwa_County-Cheongnyangsa-04.jpg",
   "author": "Robert at Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Korea-Bonghwa County-Cheongnyangsa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Korea-Bonghwa_County-Cheongnyangsa-01.jpg/960px-Korea-Bonghwa_County-Cheongnyangsa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Bonghwa_County-Cheongnyangsa-01.jpg",
   "author": "Robert at w:Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Korea-Bonghwa County-Cheongnyangsa-03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Korea-Bonghwa_County-Cheongnyangsa-03.jpg/960px-Korea-Bonghwa_County-Cheongnyangsa-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Bonghwa_County-Cheongnyangsa-03.jpg",
   "author": "Robert at w:Picasa",
   "license": "CC BY 3.0"
  },
  {
   "title": "Korea-Bonghwa County-Cheongnyangsa-02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Korea-Bonghwa_County-Cheongnyangsa-02.jpg/960px-Korea-Bonghwa_County-Cheongnyangsa-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Bonghwa_County-Cheongnyangsa-02.jpg",
   "author": "Robert at w:Picasa",
   "license": "CC BY 3.0"
  }
 ],
 "89": [
  {
   "title": "Namhae Yongmunsa Budaigak 19-5062.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Namhae_Yongmunsa_Budaigak_19-5062.jpg/960px-Namhae_Yongmunsa_Budaigak_19-5062.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Namhae_Yongmunsa_Budaigak_19-5062.jpg",
   "author": "Steve46814",
   "license": "CC BY-SA 4.0"
  }
 ],
 "90": [
  {
   "title": "Haeinsa Temple 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Haeinsa_Temple_01.jpg/960px-Haeinsa_Temple_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Haeinsa Temple 15.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Haeinsa_Temple_15.jpg/960px-Haeinsa_Temple_15.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_15.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Haeinsa Temple 08.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Haeinsa_Temple_08.jpg/960px-Haeinsa_Temple_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_08.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Haeinsa Temple 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Haeinsa_Temple_03.jpg/960px-Haeinsa_Temple_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haeinsa_Temple_03.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "91": [
  {
   "title": "Jangdokdae at Tongdosa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Jangdokdae_at_Tongdosa_Temple.jpg/960px-Jangdokdae_at_Tongdosa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jangdokdae_at_Tongdosa_Temple.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Paper lanterns at Tongdosa Temple 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Paper_lanterns_at_Tongdosa_Temple_01.jpg/960px-Paper_lanterns_at_Tongdosa_Temple_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Paper_lanterns_at_Tongdosa_Temple_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Tongdosa Temple 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Tongdosa_Temple_02.jpg/960px-Tongdosa_Temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Tongdosa_Temple_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Korea-Tongdosa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Korea-Tongdosa-01.jpg/960px-Korea-Tongdosa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Tongdosa-01.jpg",
   "author": "Steve46814 (talk)",
   "license": "CC BY-SA 3.0"
  }
 ],
 "92": [
  {
   "title": "Ssanggyesa 032.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Ssanggyesa_032.JPG/960px-Ssanggyesa_032.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ssanggyesa_032.JPG",
   "author": "myself (User:Piotrus)",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Ssanggyesa 003.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Ssanggyesa_003.JPG/960px-Ssanggyesa_003.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ssanggyesa_003.JPG",
   "author": "myself (User:Piotrus)",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Ssanggyesa 005.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Ssanggyesa_005.JPG/960px-Ssanggyesa_005.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ssanggyesa_005.JPG",
   "author": "myself (User:Piotrus)",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Ssanggyesa 025.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Ssanggyesa_025.JPG/960px-Ssanggyesa_025.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ssanggyesa_025.JPG",
   "author": "myself (User:Piotrus)",
   "license": "CC BY-SA 3.0"
  }
 ],
 "93": [
  {
   "title": "Namhae boriam 5.png",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Namhae_boriam_5.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Namhae_boriam_5.png",
   "author": "Roadgo",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Boriam.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/3/33/Boriam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Boriam.jpg",
   "author": "Pediagaller",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Manbul-jeon Hall (Hall of 10,000 Buddhas) at Boriam Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Manbul-jeon_Hall_%28Hall_of_10%2C000_Buddhas%29_at_Boriam_Temple.jpg/960px-Manbul-jeon_Hall_%28Hall_of_10%2C000_Buddhas%29_at_Boriam_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Manbul-jeon_Hall_(Hall_of_10,000_Buddhas)_at_Boriam_Temple.jpg",
   "author": "Pranay chakraborty 2004",
   "license": "CC BY 4.0"
  },
  {
   "title": "대한불교조계종 관음성지 보리암.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/f/fb/%EB%8C%80%ED%95%9C%EB%B6%88%EA%B5%90%EC%A1%B0%EA%B3%84%EC%A2%85_%EA%B4%80%EC%9D%8C%EC%84%B1%EC%A7%80_%EB%B3%B4%EB%A6%AC%EC%95%94.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:%EB%8C%80%ED%95%9C%EB%B6%88%EA%B5%90%EC%A1%B0%EA%B3%84%EC%A2%85_%EA%B4%80%EC%9D%8C%EC%84%B1%EC%A7%80_%EB%B3%B4%EB%A6%AC%EC%95%94.jpg",
   "author": "대한불교조계종 관음성지 보리암",
   "license": "CC BY-SA 4.0"
  }
 ],
 "94": [
  {
   "title": "Miryang Pyochungsa.png",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Miryang_Pyochungsa.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Miryang_Pyochungsa.png",
   "author": "Roadgo",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Pyochungsa in Fall.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Pyochungsa_in_Fall.jpg/960px-Pyochungsa_in_Fall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Pyochungsa_in_Fall.jpg",
   "author": "Lcarrion88",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Pyochungsa Temple in Autumn.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Pyochungsa_Temple_in_Autumn.jpg/960px-Pyochungsa_Temple_in_Autumn.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Pyochungsa_Temple_in_Autumn.jpg",
   "author": "Lcarrion88",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Pyochungsa Samcheung SeokTap.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Pyochungsa_Samcheung_SeokTap.jpg/960px-Pyochungsa_Samcheung_SeokTap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Pyochungsa_Samcheung_SeokTap.jpg",
   "author": "HappyMidnight",
   "license": "CC BY-SA 3.0"
  }
 ],
 "95": [
  {
   "title": "Grand Bell of Okcheonsa 01.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Grand_Bell_of_Okcheonsa_01.JPG/960px-Grand_Bell_of_Okcheonsa_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Grand_Bell_of_Okcheonsa_01.JPG",
   "author": "Grampus",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Grand Bell of Okcheonsa 03.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Grand_Bell_of_Okcheonsa_03.JPG/960px-Grand_Bell_of_Okcheonsa_03.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Grand_Bell_of_Okcheonsa_03.JPG",
   "author": "Grampus",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Grand Bell of Okcheonsa 02.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Grand_Bell_of_Okcheonsa_02.JPG/960px-Grand_Bell_of_Okcheonsa_02.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Grand_Bell_of_Okcheonsa_02.JPG",
   "author": "Grampus",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "옥천사2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/%EC%98%A5%EC%B2%9C%EC%82%AC2.jpg/960px-%EC%98%A5%EC%B2%9C%EC%82%AC2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%98%A5%EC%B2%9C%EC%82%AC2.jpg",
   "author": "Dittwjfsdgkvkdjg",
   "license": "CC BY-SA 3.0"
  }
 ],
 "96": [
  {
   "title": "창녕 관룡사 약사전 내부 벽화.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84_%EB%82%B4%EB%B6%80_%EB%B2%BD%ED%99%94.jpg/960px-%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84_%EB%82%B4%EB%B6%80_%EB%B2%BD%ED%99%94.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84_%EB%82%B4%EB%B6%80_%EB%B2%BD%ED%99%94.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "창녕 관룡사 대웅전.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84.jpg/960px-%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "창녕 관룡사 대웅전 내부.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_%EB%82%B4%EB%B6%80.jpg/960px-%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_%EB%82%B4%EB%B6%80.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EB%8C%80%EC%9B%85%EC%A0%84_%EB%82%B4%EB%B6%80.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  },
  {
   "title": "창녕 관룡사 약사전.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84.jpg/960px-%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%B0%BD%EB%85%95_%EA%B4%80%EB%A3%A1%EC%82%AC_%EC%95%BD%EC%82%AC%EC%A0%84.jpg",
   "author": "Unknown authorUnknown author",
   "license": "Public domain"
  }
 ],
 "97": [],
 "98": [],
 "99": [
  {
   "title": "Jeju Gwaneumsa 07.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Jeju_Gwaneumsa_07.jpg/960px-Jeju_Gwaneumsa_07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_07.jpg",
   "author": "Grapesurgeon",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeju Gwaneumsa 04.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Jeju_Gwaneumsa_04.jpg/960px-Jeju_Gwaneumsa_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_04.jpg",
   "author": "Grapesurgeon",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeju Gwaneumsa 05.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Jeju_Gwaneumsa_05.jpg/960px-Jeju_Gwaneumsa_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_05.jpg",
   "author": "Grapesurgeon",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Jeju Gwaneumsa 09.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Jeju_Gwaneumsa_09.jpg/960px-Jeju_Gwaneumsa_09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_09.jpg",
   "author": "Grapesurgeon",
   "license": "CC BY-SA 4.0"
  }
 ],
 "100": [
  {
   "title": "Yakcheonsa 1.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Yakcheonsa_1.jpg/960px-Yakcheonsa_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yakcheonsa_1.jpg",
   "author": "ChunjaeGirl (a flickr user)",
   "license": "CC BY 2.0"
  },
  {
   "title": "Yakcheonsa drum tower.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Yakcheonsa_drum_tower.jpg/960px-Yakcheonsa_drum_tower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Yakcheonsa_drum_tower.jpg",
   "author": "ChunjaeGirl (a flickr user)",
   "license": "CC BY 2.0"
  },
  {
   "title": "Yakcheonsa.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Yakcheonsa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Yakcheonsa.jpg",
   "author": "Thddbwnd",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "약천사 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/%EC%95%BD%EC%B2%9C%EC%82%AC_02.jpg/960px-%EC%95%BD%EC%B2%9C%EC%82%AC_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%95%BD%EC%B2%9C%EC%82%AC_02.jpg",
   "author": "Toobigtokale",
   "license": "CC BY-SA 4.0"
  }
 ],
 "101": [],
 "102": [],
 "103": [],
 "104": [
  {
   "title": "Ruin of Hoeam-sa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Ruin_of_Hoeam-sa.jpg/960px-Ruin_of_Hoeam-sa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Ruin_of_Hoeam-sa.jpg",
   "author": "Jjw",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Dhyānabhadra.png",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Dhy%C4%81nabhadra.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Dhy%C4%81nabhadra.png",
   "author": "KashKarti",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Stupa for Great Master Muhak 2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Stupa_for_Great_Master_Muhak_2.jpg/960px-Stupa_for_Great_Master_Muhak_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Stupa_for_Great_Master_Muhak_2.jpg",
   "author": "Lawinc82",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Stupa for Great Master Muhak.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Stupa_for_Great_Master_Muhak.jpg/960px-Stupa_for_Great_Master_Muhak.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Stupa_for_Great_Master_Muhak.jpg",
   "author": "Lawinc82",
   "license": "CC BY-SA 4.0"
  }
 ],
 "105": [],
 "106": [],
 "107": [],
 "108": [
  {
   "title": "금산 보석사 은행나무.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/%EA%B8%88%EC%82%B0_%EB%B3%B4%EC%84%9D%EC%82%AC_%EC%9D%80%ED%96%89%EB%82%98%EB%AC%B4.jpg/960px-%EA%B8%88%EC%82%B0_%EB%B3%B4%EC%84%9D%EC%82%AC_%EC%9D%80%ED%96%89%EB%82%98%EB%AC%B4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:%EA%B8%88%EC%82%B0_%EB%B3%B4%EC%84%9D%EC%82%AC_%EC%9D%80%ED%96%89%EB%82%98%EB%AC%B4.jpg",
   "author": "Korea Heritage Service",
   "license": "CC BY-SA 4.0"
  }
 ],
 "109": [
  {
   "title": "Korea-Buyeo-Goransa-01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Korea-Buyeo-Goransa-01.jpg/960px-Korea-Buyeo-Goransa-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Buyeo-Goransa-01.jpg",
   "author": "Matt and Nayoung Wilson from Atlanta and surrounding, US",
   "license": "CC BY 2.0"
  },
  {
   "title": "Goransa Temple 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Goransa_Temple_03.jpg/960px-Goransa_Temple_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goransa_Temple_03.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Goransa Temple 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Goransa_Temple_02.jpg/960px-Goransa_Temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goransa_Temple_02.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  },
  {
   "title": "Goransa Temple 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Goransa_Temple_01.jpg/960px-Goransa_Temple_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goransa_Temple_01.jpg",
   "author": "Bernard Gagnon",
   "license": "CC0"
  }
 ],
 "110": [
  {
   "title": "Gwangdeoksa Mountain.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gwangdeoksa_Mountain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Gwangdeoksa_Mountain.jpg",
   "author": "Kapil Arjun",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Goryeo-Illustrated manuscript of the Lotus Sutra from Gwangdeoksa temple in Chenan, Korea 03.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_03.jpg/960px-Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan,_Korea_03.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Goryeo-Illustrated manuscript of the Lotus Sutra from Gwangdeoksa temple in Chenan, Korea 02.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_02.jpg/960px-Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan,_Korea_02.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Goryeo-Illustrated manuscript of the Lotus Sutra from Gwangdeoksa temple in Chenan, Korea 01.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_01.jpg/960px-Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan%2C_Korea_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_from_Gwangdeoksa_temple_in_Chenan,_Korea_01.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  }
 ],
 "111": [
  {
   "title": "Korea-Seosan-Buseoksa-Building-02.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Korea-Seosan-Buseoksa-Building-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Seosan-Buseoksa-Building-02.jpg",
   "author": "pcamp",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Seosan-Buseoksa-Building-03.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Korea-Seosan-Buseoksa-Building-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Seosan-Buseoksa-Building-03.jpg",
   "author": "pcamp",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Seosan-Buseoksa-Building-01.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/0/09/Korea-Seosan-Buseoksa-Building-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Seosan-Buseoksa-Building-01.jpg",
   "author": "pcamp",
   "license": "CC BY 2.0"
  },
  {
   "title": "Korea-Seosan-Buseoksa-Near forest-03.jpg",
   "thumb": "https://upload.wikimedia.org/wikipedia/commons/1/15/Korea-Seosan-Buseoksa-Near_forest-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Seosan-Buseoksa-Near_forest-03.jpg",
   "author": "pcamp",
   "license": "CC BY 2.0"
  }
 ],
 "112": [
  {
   "title": "Hanging Painting (for Outdoor Rite) of Nosana Buddha at Sinwonsa temple in Gongju, Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Hanging_Painting_%28for_Outdoor_Rite%29_of_Nosana_Buddha_at_Sinwonsa_temple_in_Gongju%2C_Korea.jpg/960px-Hanging_Painting_%28for_Outdoor_Rite%29_of_Nosana_Buddha_at_Sinwonsa_temple_in_Gongju%2C_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Hanging_Painting_(for_Outdoor_Rite)_of_Nosana_Buddha_at_Sinwonsa_temple_in_Gongju,_Korea.jpg",
   "author": "Eung'yeol(응열; 應悅), Hakjeon(학전; 學全), Ilcheuk(일측; 一測), Seokneung(석능; 釋能); Photo taken by Korean Cultural heritage Administration",
   "license": "Public domain"
  },
  {
   "title": "Jungakdan of Sinwonsa, South Korea.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Jungakdan_of_Sinwonsa%2C_South_Korea.JPG/960px-Jungakdan_of_Sinwonsa%2C_South_Korea.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Jungakdan_of_Sinwonsa,_South_Korea.JPG",
   "author": "Ryuch at English Wikipedia",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Sinwonsa Saritab.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Sinwonsa_Saritab.JPG/960px-Sinwonsa_Saritab.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sinwonsa_Saritab.JPG",
   "author": "Ryuch at English Wikipedia",
   "license": "CC BY-SA 3.0"
  }
 ],
 "113": [],
 "114": [
  {
   "title": "Heungdeoksa 01.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Heungdeoksa_01.JPG/960px-Heungdeoksa_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Heungdeoksa_01.JPG",
   "author": "Lawinc82",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Heungdeoksa 02.JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Heungdeoksa_02.JPG/960px-Heungdeoksa_02.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Heungdeoksa_02.JPG",
   "author": "Lawinc82",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Heundeoksa1.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Heundeoksa1.jpg/960px-Heundeoksa1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Heundeoksa1.jpg",
   "author": "Forcoolife",
   "license": "CC BY-SA 3.0"
  },
  {
   "title": "Heundeoksa2.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Heundeoksa2.jpg/960px-Heundeoksa2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Heundeoksa2.jpg",
   "author": "Forcoolife",
   "license": "CC BY-SA 3.0"
  }
 ],
 "115": [],
 "116": [],
 "117": [
  {
   "title": "Guryongsa.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Guryongsa.jpg/960px-Guryongsa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Guryongsa.jpg",
   "author": "Ashy Minivet",
   "license": "CC0"
  },
  {
   "title": "Bogwangru Pavilion in Guryongsa Temple, Wonju.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Bogwangru_Pavilion_in_Guryongsa_Temple%2C_Wonju.jpg/960px-Bogwangru_Pavilion_in_Guryongsa_Temple%2C_Wonju.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bogwangru_Pavilion_in_Guryongsa_Temple,_Wonju.jpg",
   "author": "Trainholic",
   "license": "CC BY 4.0"
  },
  {
   "title": "Bogwangru Pavilion in Guryongsa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Bogwangru_Pavilion_in_Guryongsa_Temple.jpg/960px-Bogwangru_Pavilion_in_Guryongsa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Bogwangru_Pavilion_in_Guryongsa_Temple.jpg",
   "author": "Trainholic",
   "license": "CC BY 4.0"
  },
  {
   "title": "Guryongsa (2).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Guryongsa_%282%29.jpg/960px-Guryongsa_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Guryongsa_(2).jpg",
   "author": "Ashy Minivet",
   "license": "CC0"
  }
 ],
 "118": [
  {
   "title": "Samhwasa (1).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Samhwasa_%281%29.jpg/960px-Samhwasa_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Samhwasa_(1).jpg",
   "author": "콩가루",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Samhwasa daeung-jun.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Samhwasa_daeung-jun.jpg/960px-Samhwasa_daeung-jun.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Samhwasa_daeung-jun.jpg",
   "author": "Ground",
   "license": "CC BY 2.0"
  },
  {
   "title": "Samhwasa (9).JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Samhwasa_%289%29.JPG/960px-Samhwasa_%289%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Samhwasa_(9).JPG",
   "author": "콩가루",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Samhwasa (11).JPG",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Samhwasa_%2811%29.JPG/960px-Samhwasa_%2811%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Samhwasa_(11).JPG",
   "author": "콩가루",
   "license": "CC BY-SA 4.0"
  }
 ],
 "119": [
  {
   "title": "Haetalmun Gate of Dopiansa Temple.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Haetalmun_Gate_of_Dopiansa_Temple.jpg/960px-Haetalmun_Gate_of_Dopiansa_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Haetalmun_Gate_of_Dopiansa_Temple.jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Dopiansa (2026-05) (13).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Dopiansa_%282026-05%29_%2813%29.jpg/960px-Dopiansa_%282026-05%29_%2813%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Dopiansa_(2026-05)_(13).jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Dopiansa (2026-05) (11).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Dopiansa_%282026-05%29_%2811%29.jpg/960px-Dopiansa_%282026-05%29_%2811%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Dopiansa_(2026-05)_(11).jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  },
  {
   "title": "Dopiansa (2026-05) (1).jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Dopiansa_%282026-05%29_%281%29.jpg/960px-Dopiansa_%282026-05%29_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Dopiansa_(2026-05)_(1).jpg",
   "author": "Sadopaul",
   "license": "CC BY-SA 4.0"
  }
 ],
 "120": [],
 "121": [],
 "122": [
  {
   "title": "Sariam from Sansingak.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Sariam_from_Sansingak.jpg/960px-Sariam_from_Sansingak.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Sariam_from_Sansingak.jpg",
   "author": "HwangHuang",
   "license": "CC BY-SA 4.0"
  }
 ],
 "123": [],
 "124": [
  {
   "title": "Seated Gilt-bronze Ksitigarbha Bodhisattva at Dosolam Hermitage, Seonunsa Temple in Gochang, Korea.jpg",
   "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Seated_Gilt-bronze_Ksitigarbha_Bodhisattva_at_Dosolam_Hermitage%2C_Seonunsa_Temple_in_Gochang%2C_Korea.jpg/960px-Seated_Gilt-bronze_Ksitigarbha_Bodhisattva_at_Dosolam_Hermitage%2C_Seonunsa_Temple_in_Gochang%2C_Korea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "page": "https://commons.wikimedia.org/wiki/File:Seated_Gilt-bronze_Ksitigarbha_Bodhisattva_at_Dosolam_Hermitage,_Seonunsa_Temple_in_Gochang,_Korea.jpg",
   "author": "Eggmoon",
   "license": "CC BY-SA 3.0"
  }
 ],
 "125": [],
 "126": [],
 "127": []
};
