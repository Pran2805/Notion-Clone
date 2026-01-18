import { Button, Typography } from '@mui/material'

function Heading() {
    const projectName = import.meta.env.VITE_PROJECT_NAME

    return (
        <main className="mx-auto max-w-3xl text-center space-y-6 py-16">
            <Typography
                variant="h3"
                className="font-bold leading-tight text-gray-900"
            >
                Your ideas, documents & plans.
                <br />
                Unified. Welcome to
                <span className="ml-2 text-blue-600">
                    {projectName}
                </span>
            </Typography>

            <Typography
                variant="h6"
                className="text-gray-600 font-normal"
            >
                {projectName} is the connected workspace where
                <br className="hidden sm:block" />
                better, faster work happens.
            </Typography>

            <div className="pt-4">
                <Button
                    variant="contained"
                    disableElevation
                    className="rounded-xl! px-8! py-3! text-base! font-semibold!"
                >
                    Enter {projectName}
                </Button>
            </div>
        </main>
    )
}

export default Heading
