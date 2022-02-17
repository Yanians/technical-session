import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import withWidth,{ isWidthUp } from '@material-ui/core/withWidth';

import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import Search from '@material-ui/icons/Search';

import MoreVert from '@material-ui/icons/MoreVert';

import Favorite from '@material-ui/icons/Favorite';

import Phone from '@material-ui/icons/Phone';

import Camera from '@material-ui/icons/Camera';

import *as W from '../lib';

const HeaderT = (props) => {

const classes  = W.responsiveDrawer();

  return(

  <>
    <Typography noWrap color={'textSecondary'} className={classes.header}>
      Layout v3.1 Another Dte..
    </Typography>
    <div className={classes.root} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
            </div>

    {isWidthUp('xs',props.width) && (
      <IconButton>
        <MoreVert />
      </IconButton>
    )}
    {isWidthUp('sm',props.width) && (
      <>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </>
    )}
    {isWidthUp('md', props.width) && (
      <>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <Camera />
        </IconButton>
   
      </>
    )}
  </>
)

}

HeaderT.propTypes = {
  screen: PropTypes.oneOf(['xs','sm','md']).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

// HeaderT.defaultProps = {
  // screen: null,
// };

export default withWidth()(HeaderT);
