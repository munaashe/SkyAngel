import React from 'react';
import { Typography, Divider, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import {Link as LinkMUI} from '@mui/material';

import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';


import logo from '../../assets/images/logowhite.png'


const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
    [breakpoints.up('sm')]: {
      '&:not(:first-of-type)': {
        '&:before': {
          content: '"|"',
          display: 'block',
          position: 'absolute',
          left: 0,
        },
      },
    },
  },
  newsletter: {
    fontSize: typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: 'wrap',
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box bgcolor={' #726e69'} width={'100%'}>
      <Container>
        <Box pt={8} pb={2}>
          <Row wrap>
            <Item grow={2}>
              <Row alignItems={'center'}>
                <Item>
                  <Link to='/' >
                    <img src={logo} height='40px' alt='SkyAngel Private Jet Charters' />
                  </Link>
                </Item>
              </Row>
              <NavMenu className={classes.navMenu} >
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <NavItem style={{ color: '#fff' }}>Home</NavItem>
                </Link>
                <Link to='/fleet' style={{ textDecoration: 'none' }}>
                  <NavItem style={{ color: '#fff' }}>Our Fleet</NavItem>
                </Link>
                <Link to='/team' style={{ textDecoration: 'none' }}>
                  <NavItem style={{ color: '#fff' }}>Management</NavItem>
                </Link>
                <Link to='/booking' style={{ textDecoration: 'none' }}>
                  <NavItem style={{ color: '#fff' }}>Reservations</NavItem>
                </Link>
                <Link to='/cargo' style={{ textDecoration: 'none' }}>
                  <NavItem style={{ color: '#fff' }}>Cargo</NavItem>
                </Link>
              </NavMenu>
            </Item>
            <Item grow maxWidth={500} mx={'auto'}>
              <Box textAlign={'center'} mt={{ xs: 2, md: 0 }} my={2}>
                <SocialProvider useStyles={useMoonSocialLinkStyles}>
                  <SocialLink
                    style={{ color: '#e1e1e1' }}
                    brand={'FacebookCircle'}
                    href={'https://www.facebook.com/skyangel_afrika-103336232314323'}
                  />
                  <SocialLink
                    style={{ color: '#e1e1e1' }}
                    brand={'Twitter'}
                    href={'https://www.twitter.com/skyangel_afrika/'}
                  />
                  <SocialLink
                    brand={'Instagram'}
                    href={'https://www.instagram.com/skyangel_afrika/'}
                    style={{ color: '#e1e1e1' }}
                  />
                </SocialProvider>
              </Box>
            </Item>
          </Row>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at={'md'}
            columnStyle={{ alignItems: 'center' }}
            rowStyle={{ alignItems: 'unset' }}
          >
            <Item grow ml={-2} shrink={0}>
              <NavMenu useStyles={usePlainNavigationMenuStyles}>
                <ColumnToRow at={'sm'}>
                  <Link to='/terms-and-conditions' target='_blank'  rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <NavItem className={cx(classes.legalLink)} style={{ color: '#fff' }}>
                      Terms & Conditions
                    </NavItem>
                  </Link>
                  <Link to='/privacy-policy' target='_blank'  rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <NavItem className={cx(classes.legalLink)} style={{ color: '#fff' }}>
                      Privacy Policy
                    </NavItem>
                  </Link>
                </ColumnToRow>
              </NavMenu>
            </Item>
            <Item>
              <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                <Typography
                  component={'p'}
                  variant={'caption'}
                  color={'#fff'}
                >
                  <LinkMUI style={{color: '#fff'}} target='_blank'  rel='noreferrer' href='https://munashe.co.zw'>SiDesigned</LinkMUI> © SkyAngel Private Jet Charters {new Date().getFullYear()}. All right reserved
                </Typography>
              </Box>
            </Item>
          </ColumnToRow>
        </Box>
      </Container>
    </Box>
  );
};