import React, { useState, useEffect } from 'react'
import './layout.scss'
import { ALL_YEARS, YEARS_DATA } from '../constants/years'
import { Divider, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { AlbumsPage } from '../pages/AlbumsPage'
import { chosenAlbum } from '../Recoil/Atoms/chosenAlbum'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { isAlbumVisible } from '../Recoil/Atoms/isAlbumVisible'

const currentAlbum = localStorage.getItem('albums')
export const Header = () => {
  const [current, setCurrent] = useState(currentAlbum ?? '1989-1994')
  const setAlbum = useSetRecoilState(chosenAlbum)
  const [hasAlbum, setHasAlbum] = useRecoilState(isAlbumVisible)

  useEffect(() => {
    if (!ALL_YEARS.find(year => year.year === currentAlbum)) {
      setCurrent('1989-1994')
      localStorage.setItem('albums', '1989-1994')
    }
  }, [currentAlbum])

  const chooseAlbum: MenuProps['onClick'] = (e) => {
    setAlbum(null)
    setHasAlbum(true)
    localStorage.setItem('albums', e.key)
    setCurrent(e.key)
  }

  const currentTitle = YEARS_DATA?.find((year: any) => year?.key === current).label
  const AlbumsListToggle = () => {
    setHasAlbum(!hasAlbum)
  }

  return (
    <div className="header">
      <div className="header__title">
        <p>Galina Malareva</p>
        <p className="header__sub-title">Photo gallery: 1970 - 1994</p>
      </div>
      <Menu onClick={chooseAlbum}
        selectedKeys={[current]} mode="horizontal"
        items={YEARS_DATA} className="header__albums"
      />
      <Divider/>
      <div className="albums-page__title">{ currentTitle }</div>
      { current && hasAlbum && <AlbumsPage albums={current}/> }
      <div className="header__albums-toggle">
        <Divider/>
        <div className="header__arrow">
          { !hasAlbum ? <FaAngleDown onClick={() =>AlbumsListToggle()}/>
            : <FaAngleUp onClick={() => AlbumsListToggle()}/> }
        </div>
      </div>
    </div>
  )
}