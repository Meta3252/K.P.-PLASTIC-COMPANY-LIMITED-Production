'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// ใช้ styled(Link) โดยกรอง prop 'active'
const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  position: 'relative',
  padding: '0 12px',
  paddingBottom: 6,
  fontWeight: 500,
  fontSize: '1.125rem',
  cursor: 'pointer',
  color: active ? '#a37d58' : '#6a4d38',
  textDecoration: 'none',
  transition: 'color 0.3s ease',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 2,
    width: active ? '100%' : 0,
    backgroundColor: '#ffd28a',
    boxShadow: active ? '0 0 8px #ffd28a' : 'none',
    transition: 'width 0.3s ease',
  },

  '&:hover::after': {
    width: '100%',
    backgroundColor: '#ffd28a',
    boxShadow: '0 0 8px #ffd28a',
  },

  '&:hover': {
    color: '#a37d58',
  },
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/about', label: 'เกี่ยวกับเรา' },
    { href: '/services', label: 'บริการ' },
    { href: '/contact', label: 'ติดต่อเรา' },
    { href: '/policy', label: 'นโยบาย' },
  ];

  return (

    <AppBar
      position="sticky"
      color="transparent"
      elevation={1}
      sx={{
        backgroundColor: 'rgba(248, 245, 240, 0.95)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #f8ca91',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: 2 }}>
        {/* Logo & Title */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src="/LogoBesustain.png" alt="Logo" style={{ height: 100, objectFit: 'contain' }} />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  color: '#5c4433',
                  fontSize: { xs: 22, md: 26 },
                  lineHeight: 1,
                }}
              >
                Besustain
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 14 },
                  color: '#d4af7f',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Company Limited
              </Typography>
            </Box>
          </Box>
        </Link>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
          {menuItems.map(({ href, label }) => (
            <NavLink key={href} href={href} active={pathname === href}>
              {label}
            </NavLink>
          ))}
        </Box>

        {/* Mobile toggle */}
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{ display: { md: 'none' }, ml: 1 }}
          edge="end"
        >
          <MenuIcon fontSize="large" sx={{ color: '#5c4433' }} />
        </IconButton>
      </Toolbar>

      {/* Mobile menu */}
      {open && (
        <Box
          sx={{
            display: { md: 'none' },
            flexDirection: 'column',
            alignItems: 'flex-start',
            px: 3,
            pb: 2,
            gap: 1,
          }}
        >
          {menuItems.map(({ href, label }) => (
            <NavLink key={href} href={href} active={pathname === href} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </Box>
      )}
    </AppBar>
  );
}
