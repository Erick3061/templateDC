export interface PropsModal {
    openModal: {
        search: boolean;
        profile: boolean;
    },
    setopenModal: React.Dispatch<React.SetStateAction<{
        search: boolean;
        profile: boolean;
    }>>
}
