export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  SYSTEM = 'SYSTEM',
}

export function getThemeMode(): ThemeMode {
  const themeMode = localStorage.getItem('themeMode')
  return themeMode ? (themeMode as ThemeMode) : ThemeMode.SYSTEM
}

export default function getThemeClass(): string {
  const themeMode = getThemeMode()
  if (themeMode === ThemeMode.SYSTEM) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } else return themeMode.toLowerCase()
}
