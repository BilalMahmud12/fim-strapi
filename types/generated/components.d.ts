import type { Struct, Schema } from '@strapi/strapi';

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    URL: Schema.Attribute.String;
    Source: Schema.Attribute.Media<'files' | 'videos'>;
    Cover: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLinks';
    icon: 'link';
  };
  attributes: {
    Facebook: Schema.Attribute.String;
    Instagram: Schema.Attribute.String;
    LinkedIn: Schema.Attribute.String;
    Twitter: Schema.Attribute.String;
    YouTube: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    Slides: Schema.Attribute.Component<'shared.single-slide', true>;
  };
}

export interface SharedSingleSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_slides';
  info: {
    displayName: 'SingleSlide';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
    Link_External: Schema.Attribute.String;
    Cover: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSimpleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_texts';
  info: {
    displayName: 'SimpleText';
  };
  attributes: {
    Content: Schema.Attribute.String;
  };
}

export interface SharedSimpleCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_cards';
  info: {
    displayName: 'SimpleCard';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Cover: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    MetaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    MetaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ShareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRichTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_text_editors';
  info: {
    displayName: 'Rich Text Editor';
    icon: 'bulletList';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'layer';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Paragraph: Schema.Attribute.Text;
    ShowTitle: Schema.Attribute.Boolean;
    FontSize: Schema.Attribute.Integer;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'bulletList';
  };
  attributes: {
    Links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
    External: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedContentWithMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_with_medias';
  info: {
    displayName: 'Content with media';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Content: Schema.Attribute.Text;
    Cover: Schema.Attribute.Media<'images'>;
    SecionID: Schema.Attribute.String;
  };
}

export interface SharedContacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    Address: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
  };
}

export interface SectionsWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_sections_who_we_ares';
  info: {
    displayName: 'WhoWeAre';
    description: '';
  };
  attributes: {
    SectionContent: Schema.Attribute.RichText;
    Tiles: Schema.Attribute.Component<'shared.simple-text', true>;
    Cover: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'archive';
    description: '';
  };
  attributes: {
    TabsContent: Schema.Attribute.Component<'sections.tab-content', true>;
  };
}

export interface SectionsTabContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_tab_contents';
  info: {
    displayName: 'Tab Content';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Header: Schema.Attribute.String;
    SubHeader: Schema.Attribute.String;
    Cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    TextContent: Schema.Attribute.Component<'shared.paragraph', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_grids';
  info: {
    displayName: 'ServicesGrid';
    description: '';
  };
  attributes: {
    GridItems: Schema.Attribute.Component<'sections.service-card', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'file';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    LinkLabel: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    Cover: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsOurOfferings extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_offerings';
  info: {
    displayName: 'OurOfferings';
  };
  attributes: {
    CardsGrid: Schema.Attribute.Component<'shared.simple-card', true>;
  };
}

export interface SectionsHowWeDoBusiness extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_we_do_businesses';
  info: {
    displayName: 'HowWeDoBusiness';
    icon: 'attachment';
  };
  attributes: {
    Video: Schema.Attribute.Component<'shared.video', false>;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
  };
  attributes: {
    Copyright: Schema.Attribute.String;
    Newsletter_Label: Schema.Attribute.String;
    Newsletter_message: Schema.Attribute.String;
    Navigation: Schema.Attribute.Component<'shared.navigation', false>;
    Contacts: Schema.Attribute.Component<'shared.contacts', false>;
  };
}

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'phone';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Message: Schema.Attribute.Text;
    WebsiteURL: Schema.Attribute.String;
    WebsiteLabel: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Slogan: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.video': SharedVideo;
      'shared.social-links': SharedSocialLinks;
      'shared.slider': SharedSlider;
      'shared.single-slide': SharedSingleSlide;
      'shared.simple-text': SharedSimpleText;
      'shared.simple-card': SharedSimpleCard;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.rich-text-editor': SharedRichTextEditor;
      'shared.quote': SharedQuote;
      'shared.paragraph': SharedParagraph;
      'shared.navigation': SharedNavigation;
      'shared.media': SharedMedia;
      'shared.link': SharedLink;
      'shared.content-with-media': SharedContentWithMedia;
      'shared.contacts': SharedContacts;
      'sections.who-we-are': SectionsWhoWeAre;
      'sections.tabs': SectionsTabs;
      'sections.tab-content': SectionsTabContent;
      'sections.services-grid': SectionsServicesGrid;
      'sections.service-card': SectionsServiceCard;
      'sections.our-offerings': SectionsOurOfferings;
      'sections.how-we-do-business': SectionsHowWeDoBusiness;
      'sections.footer': SectionsFooter;
      'sections.call-to-action': SectionsCallToAction;
    }
  }
}
