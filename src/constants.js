import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faMobileAlt);

export const mediaLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/nathanavilez/',
    icon: ['fab', 'linkedin'],
  },
  {
    id: 2,
    href: 'https://github.com/tungsteno22',
    icon: ['fab', 'github'],
  },
  {
    id: 3,
    href: 'https://medium.com/@tungsteno22',
    icon: ['fab', 'medium'],
  },
  {
    id: 4,
    href: 'https://stackoverflow.com/story/nathanavilez',
    icon: ['fab', 'stack-overflow'],
  },
  {
    id: 5,
    href: 'https://angel.co/nathan-avilez',
    icon: ['fab', 'angellist'],
  },
  {
    id: 6,
    href: 'mailto:tungsteno22@gmail.com',
    icon: faEnvelope,
  },
];
