import { Flex, Link, useDisclosure } from "@chakra-ui/core";
import NextLink from "next/link";
import { withRouter } from "next/router";
import React from "react";
import ToUrl from "src/helpers/ToUrl";
import { Bounds } from "../layout/Bounds";
import { DarkModeSwitch } from "./DarkModeSwitch";
import UserModal from "../layout/UserModal";
import UserNav from "./UserNav";

interface INavItem {
  name: string;
  route?: string;
}

interface INavBar {
  navItems: INavItem[];
}

const NavBar: React.FC<INavBar | any> = ({ navItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg="_green"
      height={50}
      py={0}
      px={5}
      alignItems="center"
      width="100%"
    >
      <Bounds>
        {navItems.map((item, key) => {
          return (
            <NextLink key={key} href={item.route ?? ToUrl(item.name)}>
              <Link
                lineHeight={2}
                fontSize={[14, 16, 18]}
                mr={4}
                fontWeight="medium"
                color="white"
              >
                {item.name}
              </Link>
            </NextLink>
          );
        })}
        <UserNav onRegister={onOpen} />
        <DarkModeSwitch />
        <UserModal isOpen={isOpen} onClose={onClose} />
      </Bounds>
    </Flex>
  );
};

export default withRouter(NavBar);
