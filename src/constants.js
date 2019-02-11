import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faMobileAlt);

export const mediaLinks = [
  {
    href: 'https://www.linkedin.com/in/nathanavilez/',
    icon: ['fab', 'linkedin'],
  },
  {
    href: 'https://github.com/tungsteno22',
    icon: ['fab', 'github'],
  },
  {
    href: 'https://medium.com/@tungsteno22',
    icon: ['fab', 'medium'],
  },
  {
    href: 'https://stackoverflow.com/story/nathanavilez',
    icon: ['fab', 'stack-overflow'],
  },
  {
    href: 'https://angel.co/nathan-avilez',
    icon: ['fab', 'angellist'],
  },
  {
    href: 'mailto:tungsteno22@gmail.com',
    icon: faEnvelope,
  },
];
