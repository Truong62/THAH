import React from 'react';
import ConsultingIcon from '../../components/SvgIcon/ConsultingIcon';
import StrategyIcon from '../../components/SvgIcon/StrategyIcon';
import TechnologyIcon from '../../components/SvgIcon/TechnologyIcon';

export const STATS = [
  { title: '10+', description: 'years of service', direction: 'left' },
  { title: '20K', description: 'happy customers', direction: 'none' },
  { title: '94%', description: 'customer satisfaction', direction: 'right' },
];

export const CARDS = [
  {
    icon: <StrategyIcon />,
    title: 'Strategy',
    description:
      'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
    linkText: 'Learn More',
    linkHref: '#',
    bgColor: 'bg-white',
    textColor: 'text-blue-400',
  },
  {
    icon: <TechnologyIcon />,
    title: 'Technology',
    description:
      'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
    linkText: 'Learn More',
    linkHref: '#',
    bgColor: 'bg-blue-400',
    textColor: 'text-white',
  },
  {
    icon: <ConsultingIcon />,
    title: 'Consulting',
    description:
      'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
    linkText: 'Learn More',
    linkHref: '#',
    bgColor: 'bg-white',
    textColor: 'text-blue-400',
  },
];
