"use client"

import Dialog from "@mui/material/Dialog/Dialog"
import { PropsWithChildren, ReactNode, createContext, useState } from "react"

interface Store {
    openDialog(content: ReactNode): void
    closeDialog(): void
}

const DialogContext = createContext<Store>({} as Store)

const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [content, setContent] = useState<ReactNode>('')

    const openDialog = (content: ReactNode) => {
        setIsDialogOpen(true)
        setContent(content)
    }

    const closeDialog = () => {
        setIsDialogOpen(false)
    }

    const dialogContext: Store = {
        openDialog: openDialog,
        closeDialog: closeDialog
    }

    return (
        <DialogContext.Provider value={dialogContext}>
            <Dialog open={isDialogOpen} onClose={closeDialog} fullScreen>
                {content}
            </Dialog>
            {children}
        </DialogContext.Provider >
    )
}

export { DialogContext, DialogProvider };

