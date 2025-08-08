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
          backgroundColor: 'rgba(248, 245, 240, 0.95)',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid #f8ca91',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: 2 }}>
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
                bgcolor: '#d4af7f',
                color: '#5c4433',
                fontWeight: 'bold',
                borderRadius: '20px',
                px: 3,
                py: 1,
                textTransform: 'none',
                boxShadow: '0 0 10px #d4af7f',
                '&:hover': {
                  bgcolor: '#b89558',
                  boxShadow: '0 0 15px #b89558',
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
            <MenuIcon fontSize="large" sx={{ color: '#5c4433' }} />
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
            borderRight: '1px solid #f8ca91',
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
              bgcolor: '#d4af7f',
              color: '#5c4433',
              fontWeight: 'bold',
              borderRadius: '20px',
              mt: 1,
              py: 1.5,
              textTransform: 'none',
              boxShadow: '0 0 10px #d4af7f',
              '&:hover': {
                bgcolor: '#b89558',
                boxShadow: '0 0 15px #b89558',
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
