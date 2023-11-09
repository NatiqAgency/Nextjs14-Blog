'use client'

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="pl-3 text-secondary-600">
            {
                theme === 'light' ? (
                    <button
                        onClick={() => setTheme('dark')}
                        className={'p-2 text-title rounded-full'}
                    >
                        <FaMoon />
                    </button >
                ) : (
                    <button
                        onClick={() => setTheme('light')}
                        className={'p-2 text-title rounded-full'}
                    >
                        <FaSun />
                    </button>
                )
            }
        </div >
    );
};