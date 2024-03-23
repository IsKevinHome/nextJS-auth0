import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../../theme';
import MainAppShell from '../../components/AppShell';

export default function RootLayout({ children }) {
  return <MainAppShell>{children}</MainAppShell>;
}
