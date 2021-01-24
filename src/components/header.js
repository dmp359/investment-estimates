import React from 'react';
import { TabNavigation, Tab } from 'evergreen-ui';
import { globalHistory as history } from '@reach/router';

/**
 * COLOR PALETTE
 * DEE5E5
 * 9DC5BB
 * 17B890
 * 5E807F
 * 082D0F
 * @param {} param0
 */
const Header = () => {
  return (
    <header
      style={{
        background: `#17B890`,
        marginBottom: `1rem`,
        padding: '10px',
      }}
    >
      <TabNavigation>
        {[
          { loc: '/', display: 'Home' },
          { loc: '/home-purchase', display: 'App' },
          { loc: '/404', display: 'Donate' },
        ].map(({ loc, display }) => (
          <Tab key={loc} is='a' href={loc} id={loc} isSelected={history.location.pathname === loc}>
            {display}
          </Tab>
        ))}
      </TabNavigation>
    </header>
  );
};

export default Header;
