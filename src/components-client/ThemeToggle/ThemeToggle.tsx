import clsx from 'clsx'
import { type CSSProperties, Fragment, useCallback, useEffect, useState } from 'react'
import { getThemeMode, ThemeMode } from '../../utils/getThemeMode.ts'
import { Listbox } from '@headlessui/react'
import { MoonIcon, PcIcon, SunIcon } from './theme-toggle-icons.tsx'

const themeModes = [
  {
    id: ThemeMode.LIGHT,
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    id: ThemeMode.DARK,
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    id: ThemeMode.SYSTEM,
    value: 'system',
    label: 'System',
    icon: PcIcon,
  },
]

export interface ThemeButtonProps {
  selected?: boolean
  className?: string
  props?: CSSProperties
}

export function ThemeToggle({ panelClassName = 'mt-4' }: { panelClassName?: string }) {
  const [setting, setSetting] = useState<ThemeMode>(getThemeMode())

  const updateTheme = useCallback(() => {
    const newMode = getThemeMode()
    if (newMode === ThemeMode.LIGHT) {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
    setSetting(newMode)
  }, [])

  const onChange = (newMode: ThemeMode) => {
    localStorage.setItem('themeMode', newMode)
    updateTheme()
  }

  useEffect(() => {
    // Watch if user changes theme in OS settings
    const onMediaChange = () => {
      updateTheme()
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', onMediaChange)

    // Watch if user changes theme in another window context
    function onStorage() {
      updateTheme()
    }

    window.addEventListener('storage', onStorage)

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [updateTheme])

  return (
    <Listbox value={setting} onChange={onChange}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon className="h-6 w-6" selected={setting !== ThemeMode.SYSTEM} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="h-6 w-6" selected={setting !== ThemeMode.SYSTEM} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'highlight-white/5 absolute right-0 top-0.5 z-50 mx-2 w-36 overflow-hidden rounded-lg bg-jgsblue-600 py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-500/30 dark:bg-jgsblue-800',
          panelClassName,
        )}
      >
        {themeModes.map(({ id, label, icon: Icon }) => (
          <Listbox.Option key={id} value={id} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'flex cursor-pointer items-center px-2 py-1',
                  selected ? 'text-white/80' : 'text-jgsblue-200/80',
                  active && 'bg-slate-600/30',
                )}
              >
                <Icon selected={selected} className="mr-2 h-6 w-6" />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
