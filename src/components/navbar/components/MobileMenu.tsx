import {
  Box,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../../assets/logo.svg";

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose} preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text textAlign="center">Logo Here</Text>
        </ModalHeader>
        <ModalBody paddingBottom="1rem">
          <VStack color="palette.primary" opacity=".8">
            <Link href="#hero" onClick={onClose}>
              Home
            </Link>
            <Link href="#about" onClick={onClose}>
              About
            </Link>
            <Link href="#portfolio" onClick={onClose}>
              Portfolio
            </Link>
            <Link href="#contact" onClick={onClose}>
              Contact Me
            </Link>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MobileMenu;
