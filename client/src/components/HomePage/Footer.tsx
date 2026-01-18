
import { Button } from '@mui/material'
export default function Footer() {
    const projectName = import.meta.env.VITE_PROJECT_NAME;
    return (
        <footer className="flex items-center w-full p-6 bg-gray-200 z-50 px-20 min-h-[15vh]">
            <span className="hidden md:inline text-xl font-semibold text-gray-900">
                {projectName}
            </span>
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-gray-200 ">
                <Button className="text-gray-400! text-xs!">Privacy Policy</Button>
                <Button className="text-gray-400! text-xs!">Terms & Condition</Button>
            </div>
        </footer>
    )
}