// Sample projects. Replace images in public/images and set `link` to the real post/video URL.
export const categories = ['All', 'Instagram Reels', 'YouTube Videos', 'Photography', 'Brand Campaigns', 'Lifestyle', 'Travel & Food']
const p = (id, title, category, platform, desc, ar, link = '', img = `/images/work-${id}.svg`, video = '') => ({ id, title, category, platform, desc, ar, img, link, video })
export const projects = [
  p(1, 'Agar Surat Gaye', 'Instagram Reels', 'Instagram', 'A playful Surat getaway, captured aboard a bright red boat on the pool.', 'aspect-[4/5]', 'https://www.instagram.com/reel/DPwYP3xDOWo/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==', '/images/work-1.png', '/images/work1.MP4'),
  p(2, 'Tales of Spirits, Nagpur', 'Instagram Reels', 'Instagram', 'A visit to the newly reopened Tales of Spirits in Nagpur.', 'aspect-[4/5]', 'https://www.instagram.com/reel/DfHY9QYRsSO/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==', '/images/work-2.png', '/images/work2.MP4'),
  p(3, 'A Quiet Moment', 'Photography', 'Instagram', 'A peaceful cat resting beneath the garden greenery.', 'aspect-[4/3]', '', '/images/work-3.png'),
  p(4, '📍Mia by Tanishq – Nagpur', 'Instagram Reels', 'Instagram', 'A special moment while exploring a beautiful jewelry collection.', 'aspect-[4/5]', 'https://www.instagram.com/reel/DfRz_SDhgrc/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==', '/images/work-4.png', '/images/work4.MP4'),
  p(5, 'A Night Out', 'Lifestyle', 'Instagram', 'A candid evening portrait beneath the city lights.', 'aspect-[4/5]', '', '/images/work-5.png'),
  p(6, 'A Hands-on Pottery Moment', 'Travel & Food', 'YouTube', 'A creative moment shaping clay in a peaceful outdoor setting.', 'aspect-[4/5]', '', '/images/work-6.png'),
  p(7, 'Golden Hour Frame', 'Instagram Reels', 'Instagram', 'A warm, cinematic reel blending motion, texture, and a soft evening glow.', 'aspect-[4/5]', '', '/images/work-7.png', '/images/work7.MP4'),
  p(8, 'Bangles & Bloom', 'Lifestyle', 'Instagram', 'A colorful market walk filled with texture, light, and the charm of everyday detail.', 'aspect-[4/5]', '', '/images/work-8.png', '/images/work8.MP4')
]
