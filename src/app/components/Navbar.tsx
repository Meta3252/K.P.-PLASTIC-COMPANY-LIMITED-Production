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
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  position: 'relative',
  padding: '0 12px',
  paddingBottom: 6,
  fontWeight: 500,
  fontSize: '1.125rem',
  cursor: 'pointer',
  color: active ? '#149144' : '#149144',
  textDecoration: 'none',
  transition: 'color 0.3s ease',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 2,
    width: active ? '100%' : 0,
    backgroundColor: '#149144',
    boxShadow: active ? '0 0 8px #149144' : 'none',
    transition: 'width 0.3s ease',
  },

  '&:hover::after': {
    width: '100%',
    backgroundColor: '#149144',
    boxShadow: '0 0 8px #149144',
  },

  '&:hover': {
    color: '#149144a6',
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

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  // ปิด Drawer เมื่อกดลิงก์ในมือถือ
  const handleLinkClick = () => {
    setOpen(false);
  };

  // รองรับกดปุ่ม Escape ปิด Drawer
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={1}
        sx={{
          backgroundColor: 'rgba(240, 248, 242, 0.95)',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid #149144',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: 2 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src="/KpLogo.png" alt="Logo" style={{ height: 100, objectFit: 'contain' }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'serif',
                    fontWeight: 'bold',
                    color: '#2a6441',
                    fontSize: { xs: 22, md: 26 },
                    lineHeight: 1,
                  }}
                >
                  K.P.PLASTIC
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 12, md: 14 },
                    color: '#149144',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Company Limited
                </Typography>
              </Box>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {menuItems.map(({ href, label }) => (
              <NavLink key={href} href={href} active={pathname === href}>
                {label}
              </NavLink>
            ))}

            <Button
              variant="contained"
              href="/contact"
              sx={{
                bgcolor: '#16b352',
                color: '#fff8f0',
                fontWeight: 'bold',
                borderRadius: '20px',
                px: 3,
                py: 1,
                textTransform: 'none',
                boxShadow: '0 0 10px #149144  ',
                '&:hover': {
                  bgcolor: '#1a8b45',
                  boxShadow: '0 0 15px #149144',
                },
              }}
            >
              ขอใบเสนอราคา
            </Button>
          </Box>
          <IconButton
            onClick={() => setOpen(!open)} // toggle ได้
            sx={{ display: { md: 'none' }, ml: 1 }}
            edge="end"
            aria-label="open menu"
          >
            <MenuIcon fontSize="large" sx={{ color: '#149144' }} />
          </IconButton>

        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={false}
        disableDiscovery={false}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: 'rgba(248, 245, 240, 0.95)',
            backdropFilter: 'blur(6px)',
            borderRight: '1px solid #149144',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            mt: '120px', // ขยับลงไม่ให้โดน AppBar
            px: 3,
            pb: 3,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          role="presentation"
        >
          {menuItems.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              active={pathname === href}
              style={{ fontSize: 18, padding: '8px 12px' }}
              onClick={handleLinkClick}
            >
              {label}
            </NavLink>
          ))}

          <Button
            variant="contained"
            href="/contact"
            fullWidth
            sx={{
              bgcolor: '#16b352',
              color: '#fff8f0',
              fontWeight: 'bold',
              borderRadius: '20px',
              px: 3,
              py: 1,
              textTransform: 'none',
              boxShadow: '0 0 10px #149144  ',
              '&:hover': {
                bgcolor: '#1a8b45',
                boxShadow: '0 0 15px #149144',
              },
            }}
            onClick={handleLinkClick}
          >
            ขอใบเสนอราคา
          </Button>
        </Box>
      </SwipeableDrawer>


    </>
  );
}
