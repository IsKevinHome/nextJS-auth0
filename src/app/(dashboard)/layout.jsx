
"use client";

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../../theme';
import MainAppShell from '../../components/AppShell';
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";


export default function RootLayout({ children }) {
const { user, isLoading } = useUser();
if(user)
    return <MainAppShell>{children}</MainAppShell>;
  return <div>{children}</div>
}
