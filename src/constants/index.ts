/** @format */

import BookmarkFillIcon from '@/components/icons/heades/BookmarkFillIcon'
import BookmarkOutlineIcon from '@/components/icons/heades/BookmarkOutlineIcon'
import ExploreFillIcon from '@/components/icons/heades/ExploreFillIcon'
import ExploreOutlineIcon from '@/components/icons/heades/ExploreOutlineIcon'
import HomeFillIcon from '@/components/icons/heades/HomeFillIcon'
import HomeOutlineIcon from '@/components/icons/heades/HomeOutlineIcon'
import ListFillIcon from '@/components/icons/heades/ListFillIcon'
import ListOutlineIcon from '@/components/icons/heades/ListOutlineIcon'
import MessageFillIcon from '@/components/icons/heades/MessageFillIcon'
import MessageOutlineeIcon from '@/components/icons/heades/MessageOutlineIcon'
import NotificationFillIcon from '@/components/icons/heades/NotificationFillIcon'
import NotificationOutlineIcon from '@/components/icons/heades/NotificationOutlineIcon'
import ProfileFillIcon from '@/components/icons/heades/ProfileFillIcon'
import ProfileOutlineIcon from '@/components/icons/heades/ProfileOutlineIcon'
import SetingFillIcon from '@/components/icons/SetingFillIcon'
import SetingIcon from '@/components/icons/SetingOutlineIcon'

export const MENU_HEADER_LISTS = [
   { page: 'Home', path: '/home', icon: HomeOutlineIcon, activeIcon: HomeFillIcon },
   { page: 'Explore', path: '/explore', icon: ExploreOutlineIcon, activeIcon: ExploreFillIcon },
   { page: 'Notifications', path: '/notifications', icon: NotificationOutlineIcon, activeIcon: NotificationFillIcon },
   { page: 'Messages', path: '/messages', icon: MessageOutlineeIcon, activeIcon: MessageFillIcon },
   { page: 'Bookmarks', path: '/i/bookmarks', icon: BookmarkOutlineIcon, activeIcon: BookmarkFillIcon },
   { page: 'Lists', path: '/[username]/lists', icon: ListOutlineIcon, activeIcon: ListFillIcon },
   { page: 'Profile', path: '/[username]', icon: ProfileOutlineIcon, activeIcon: ProfileFillIcon },
]

export const MENU_HEADER_LISTS_AUTH = [
   { page: 'Explore', path: '/explore', icon: ExploreOutlineIcon, activeIcon: ExploreFillIcon },
   { page: 'Settings', path: '/settings/account/personalization', icon: SetingIcon, activeIcon: SetingFillIcon}
]

export const LIST_TRENDS_OTHER = [
   { content: 'Terms of Service', path: '/' },
   { content: 'Privacy Policy', path: '/' },
   { content: 'Cookie Policy', path: '/' },
   { content: 'Accessibility', path: '/' },
   { content: 'Ads info', path: '/' },
]