import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import type { ModalProps } from "../../types";

export function PopUpModal({ isOpen, onClose, children }: ModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
            <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" /> 
            <ModalContent 
                maxWidth="1000px"
                maxHeight="80vh"
                height={"90%"}
                width="80%"
                margin="16px"
                borderRadius="16px"
                border="2px solid"
                borderColor="gray.200"
                overflow="hidden"
                overflowX="hidden"
                boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                display="flex"
                flexDirection="column"
            >
                <ModalCloseButton 
                    color="white" 
                    size="lg" 
                    bg="blackAlpha.600" 
                    _hover={{ bg: "blackAlpha.800" }}
                    borderRadius="full"
                    zIndex={10}
                />
                <ModalBody padding="0" flex="1" overflow="hidden">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}