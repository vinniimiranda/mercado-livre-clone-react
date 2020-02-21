import React from 'react';

import {
  FaSearch,
  FaMapMarkerAlt,
  FaBell,
  FaShoppingCart,
  FaChevronDown,
  FaUserCircle,
} from 'react-icons/fa';
import {
  Content,
  TopHeader,
  Logo,
  SearchInput,
  AppImage,
  BottomHeader,
  Location,
  AddressInfo,
  NavMenu,
  NavMenuItem,
  RightMenu,
  RightMenuItem,
  Container,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <TopHeader>
          <Logo />
          <SearchInput>
            <input placeholder="Buscar produtos, marcas e muito mais..." />
            <button>
              <FaSearch color="#aaa" size={18} />
            </button>
          </SearchInput>
          <AppImage src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlb-menu-desktop-notification-picture-f1b0f097-97a4-42af-94c0-c36c2b5db114.png" />
        </TopHeader>
        <BottomHeader>
          <Location>
            <FaMapMarkerAlt size={18} color="#333" />
            <AddressInfo>
              <small>Enviar para Flávio</small>
              <span>Rua Anália Franco, 208</span>
            </AddressInfo>
          </Location>

          <NavMenu>
            <NavMenuItem>
              <span>Categorias</span>
              <FaChevronDown size={10} color="#666" />
            </NavMenuItem>
            <NavMenuItem>
              <span>Ofertas</span>
            </NavMenuItem>
            <NavMenuItem>
              <span>Histórico</span>
            </NavMenuItem>
            <NavMenuItem>
              <span>Lojas oficiais</span>
            </NavMenuItem>
            <NavMenuItem>
              <span>Vender</span>
            </NavMenuItem>
            <NavMenuItem>
              <span>Contato</span>
            </NavMenuItem>
          </NavMenu>

          <RightMenu>
            <RightMenuItem>
              <FaUserCircle size={18} color="#333" style={{ marginRight: 3 }} />
              <span>Flavio</span>
              <FaChevronDown size={10} color="#666" />
            </RightMenuItem>
            <RightMenuItem>
              <span>Compras</span>
            </RightMenuItem>
            <RightMenuItem>
              <span>Favoritos</span>
              <FaChevronDown size={10} color="#666" />
            </RightMenuItem>
            <RightMenuItem>
              <FaBell size={18} color="#333" />
            </RightMenuItem>
            <RightMenuItem>
              <FaShoppingCart size={18} color="#333" />
            </RightMenuItem>
          </RightMenu>
        </BottomHeader>
      </Content>
    </Container>
  );
}
