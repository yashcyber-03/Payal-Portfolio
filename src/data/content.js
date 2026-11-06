import { creator } from './creator'
import { social } from './social'
export const site = {
  name: creator.name.toUpperCase(),
  instagram: social[0].url || '/#social'
}
export const nav = [
  { id: 'about', label: 'About' }, { id: 'work', label: 'Work' }, { id: 'social', label: 'Social' },
  { id: 'collaborations', label: 'Collaborations' }, { id: 'services', label: 'Services' }, { id: 'contact', label: 'Contact' }
]
