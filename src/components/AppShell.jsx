'use client';
import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  NavLink,
  Divider,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHome,
  IconCash,
  IconSwitchHorizontal,
} from '@tabler/icons-react';

const navData = [
  { icon: IconHome, label: 'Home', page: 'home' },
  { icon: IconCash, label: 'Billing', page: 'billing' },
];

const footerData = [
  { icon: IconSwitchHorizontal, label: 'Switch account', page: 'accounts' },

  { icon: IconLogout, label: 'Logout' },
];

function MainAppShell({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const navItems = navData.map((item, index) => (
    <NavLink
      href={`/${item.page}`}
      key={item.label}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size='1rem' stroke={1.5} />}
    />
  ));

  const footerItems = footerData.map((item, index) => (
    <NavLink
      href={`/${item.page}`}
      key={item.label}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size='1rem' stroke={1.5} />}
    />
  ));

  return (
    <AppShell
      header={{ height: 48 }}
      navbar={{
        width: 220,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom='sm'
            size='sm'
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom='sm'
            size='sm'
          />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md'>
        <AppShell.Section grow my='md' component={ScrollArea}>
          {navItems}
        </AppShell.Section>

        <Divider my='md' />

        <AppShell.Section>{footerItems}</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MainAppShell;
