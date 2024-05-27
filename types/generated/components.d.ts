import type { Schema, Attribute } from '@strapi/strapi';

export interface AutomationSectionAutomationSection extends Schema.Component {
  collectionName: 'components_automation_section_automation_sections';
  info: {
    displayName: 'AutomationSection';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'heading.heading'> & Attribute.Required;
    softwares: Attribute.Media & Attribute.Required;
  };
}

export interface CitiesCities extends Schema.Component {
  collectionName: 'components_cities_cities';
  info: {
    displayName: 'cities';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
  };
}

export interface FavIconsFavIcons extends Schema.Component {
  collectionName: 'components_fav_icons_fav_icons';
  info: {
    displayName: 'favIcons';
    description: '';
  };
  attributes: {
    icons: Attribute.Media;
  };
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    socials: Attribute.Component<'socials.socials', true> & Attribute.Required;
    cities: Attribute.Component<'cities.cities', true> & Attribute.Required;
  };
}

export interface HeadHead extends Schema.Component {
  collectionName: 'components_head_heads';
  info: {
    displayName: 'head';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    keywords: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    icons: Attribute.Media;
  };
}

export interface HeadingHeading extends Schema.Component {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    highlightedWord: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    features: Attribute.Component<'features.features', true> &
      Attribute.Required;
    heading: Attribute.Component<'heading.heading'> & Attribute.Required;
  };
}

export interface PaymentOptionsPaymentOptions extends Schema.Component {
  collectionName: 'components_payment_options_payment_options';
  info: {
    displayName: 'paymentOptions';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    gradientClass: Attribute.String & Attribute.Required;
  };
}

export interface PaymentSectionPaymentSection extends Schema.Component {
  collectionName: 'components_payment_section_payment_sections';
  info: {
    displayName: 'paymentSection';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'payment-options.payment-options', true> &
      Attribute.Required;
    heading: Attribute.Component<'heading.heading'> & Attribute.Required;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface StoriesComponentStoriesComponent extends Schema.Component {
  collectionName: 'components_stories_component_stories_components';
  info: {
    displayName: 'storiesComponent';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'story.stories', true> & Attribute.Required;
    heading: Attribute.Component<'heading.heading'>;
  };
}

export interface StoryStories extends Schema.Component {
  collectionName: 'components_story_stories';
  info: {
    displayName: 'stories';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'automation-section.automation-section': AutomationSectionAutomationSection;
      'cities.cities': CitiesCities;
      'fav-icons.fav-icons': FavIconsFavIcons;
      'features.features': FeaturesFeatures;
      'footer.footer': FooterFooter;
      'head.head': HeadHead;
      'heading.heading': HeadingHeading;
      'hero.hero': HeroHero;
      'payment-options.payment-options': PaymentOptionsPaymentOptions;
      'payment-section.payment-section': PaymentSectionPaymentSection;
      'socials.socials': SocialsSocials;
      'stories-component.stories-component': StoriesComponentStoriesComponent;
      'story.stories': StoryStories;
    }
  }
}
