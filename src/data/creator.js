// Edit your personal details here.
export const creator = {
  name: 'Payal Biswas',
  title: 'Content Creator',
  location: 'Kolkata, India',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'biswaspayal06@gmail.com',
  headline: 'Making things people stop scrolling for.',
  intro: 'I create visual stories and short-form content that feel honest, polished, and worth pausing for — from brand moments to everyday life in motion.',
  aboutLead: 'I started creating to turn everyday details into memorable stories, and I care about work that feels personal, intentional, and beautifully human.',
  aboutBody: 'From concept to final edit, I collaborate with brands and creatives who want content with substance, atmosphere, and a strong point of view.',
  skills: ['Photography', 'Video editing', 'Storytelling', 'Short-form video', 'Styling'],
  images: { hero: '/images/hero.png', about: '/images/about.png' }
}
export const hasEmail = /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(creator.email)
