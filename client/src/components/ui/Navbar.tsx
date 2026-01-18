
import { Button } from '@mui/material';

export default function Navbar() {
    const projectName = import.meta.env.VITE_PROJECT_NAME;
    return (
        <nav className="sticky top-0 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <span className="hidden md:inline text-xl font-semibold text-gray-900">
                                {projectName}
                            </span>
                        </div>
                    </div>



                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3">
                            <Button
                                variant="outlined"
                                className="border-gray-300 text-gray-700 hover:border-gray-400 rounded-lg px-4 py-2 text-sm font-medium"
                            >
                                Log in
                            </Button>
                            <Button
                                variant="contained"
                                disableElevation
                                className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium"
                            >
                                Get {projectName} free
                            </Button>
                        </div>


                    </div>
                </div>


            </div>
        </nav>
    );
}