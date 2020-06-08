module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../src/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
  ],
};
