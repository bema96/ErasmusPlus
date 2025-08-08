import type { MultiActivityModalProps } from "../../types";
import { useTranslation } from "react-i18next";
import { 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalCloseButton,
    Grid,
    GridItem,
    Box,
    Image,
    Text,
    Button,
    Heading
} from "@chakra-ui/react";

// Modal component for displaying multiple activities at the same location
export function MultiActivityModal({ isOpen, onClose, activities, onActivitySelect }: MultiActivityModalProps) {
    const { t } = useTranslation();

    // Function to determine grid columns based on number of activities
    const getGridCols = () => {
        if (activities.length === 1) return "repeat(1, 1fr)"; 
        if (activities.length === 2) return "repeat(2, 1fr)";  
        return "repeat(3, 1fr)"; 
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            size="6xl"  
            isCentered  
        >
            {/* Modal background with blur effect */}
            <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
            
            <ModalContent 
                maxW="fit-content"  
                maxH="80vh"  
                mx={4}  
            >
                {/* Header with title and close button */}
                <ModalHeader>
                    {activities.length} {t('activitiesOnThisLocation')}
                </ModalHeader>
                
                <ModalCloseButton 
                    color="white" 
                    size="lg" 
                    bg="blackAlpha.600" 
                    _hover={{ bg: "blackAlpha.800" }}
                    borderRadius="full"
                    zIndex={10}
                />
                
                {/* Modal body with scrolling */}
                <ModalBody pb={6} overflowY="auto" maxH="60vh">
                    {/* Chakra Grid with dynamic columns */}
                    <Grid templateColumns={getGridCols()} gap={4}>
                        {/* Map through each activity and create JSX */}
                        {activities.map((activity) => (
                            <GridItem key={activity.id}> 
                                <Box 
                                    border="1px solid" 
                                    borderColor="gray.200"
                                    borderRadius="lg"
                                    p={4}
                                    cursor="pointer"
                                    transition="all 0.2s"
                                    _hover={{ shadow: "lg" }}  
                                    onClick={() => onActivitySelect(activity)}  
                                >
                                    {/* Show image if available */}
                                    {activity.image && (
                                        <Image 
                                            src={activity.image} 
                                            alt={activity.title}
                                            w="full"
                                            h="160px"
                                            objectFit="cover"
                                            borderRadius="md"
                                            mb={3}
                                        />
                                    )}
                                    
                                    {/* Activity title */}
                                    <Heading as="h3" size="md" mb={2}>
                                        {activity.title}
                                    </Heading>
                                    
                                    {/* Activity city */}
                                    <Text fontSize="sm" color="gray.600" mb={2}>
                                        {activity.city}
                                    </Text>
                                    
                                    {/* Who is participating */}
                                    <Text mb={2}>
                                        {activity.who}
                                    </Text>
                                    
                                    {/* Activity date period */}
                                    <Text fontSize="sm" color="gray.500" mb={3}>
                                        {new Date(activity.startDate).toLocaleDateString('da-DK')} {t('to')} {' '}
                                        {new Date(activity.endDate).toLocaleDateString('da-DK')}
                                    </Text>
                                    
                                    {/* See details button */}
                                    <Button 
                                        colorScheme="blue"
                                        size="sm"
                                        w="full"
                                        onClick={(e) => {
                                            e.stopPropagation();  // Prevent event bubbling
                                            onActivitySelect(activity);  // Call parent function
                                        }}
                                    >
                                        {t('seeDetails')}
                                    </Button>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
