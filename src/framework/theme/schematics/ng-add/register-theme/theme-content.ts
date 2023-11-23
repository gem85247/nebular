export function createThemeContent(themeName: string): string {
  return `@forward '@nebular/theme/styles/theming';
@use '@nebular/theme/styles/theming' as *;
@use '@nebular/theme/styles/themes/${themeName}';

$nb-themes: nb-register-theme((

  // add your variables here like:

  // color-primary-100: #f2f6ff,
  // color-primary-200: #d9e4ff,
  // color-primary-300: #a6c1ff,
  // color-primary-400: #598bff,
  // color-primary-500: #3366ff,
  // color-primary-600: #274bdb,
  // color-primary-700: #1a34b8,
  // color-primary-800: #102694,
  // color-primary-900: #091c7a,

), ${themeName}, ${themeName});
`;
}

export const stylesContent = `@use 'themes' as *;

@use '@nebular/theme/styles/globals' as *;

@include nb-install() {
  @include nb-theme-global();
};
`;
