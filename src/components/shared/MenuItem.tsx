/** @format */

import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

interface NavItemProps extends LinkProps {
  children({ isActive }: any): React.ReactNode;
  className?: string;
  onClick?: () => void;
  username?: string
}

const NavItem: React.FC<NavItemProps> = ({ onClick, username, ...props }) => {
  const router = useRouter();
  
  const isActive = useMemo(() => {
    if(router.route === '/') {
      return props.href === '/explore'
    }
    if(props.href === `/${username}/lists`) {
      return router.route === '/[username]/lists'
    }
    if(router.asPath !== props.href) return false
    if(props.href === `/${username}`) {
      return router.route === '/[username]'
    }
    return router.route === props.href
  },[props.href, router.route]);
  
  return (
    <Link {...props}>
      <span className={props.className} onClick={onClick}>
        {props.children({ isActive })}
      </span>
    </Link>
  );
};

export default React.memo(NavItem);
