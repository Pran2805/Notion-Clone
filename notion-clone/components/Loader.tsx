import { cva, VariantProps } from "class-variance-authority"
import { LoaderCircle } from "lucide-react"
import { cn } from "@/lib/utils";

const loaderVariants = cva(
    "animate-spin text-muted-foreground",
    {
        variants:{
            size:{
                default: "size-4",
                sm: "size-2",
                lg: "size-6",
                icon: "size-10",
            }
        },
        defaultVariants:{
            size: 'default'
        }
    }
);

interface LoaderProps extends VariantProps<typeof loaderVariants>{}
    export const Loader = ({
size
    }: LoaderProps) =>{
        return(
            <LoaderCircle 
            className={cn(
                loaderVariants({size})
            )}
            />
        )
    }

// function Loader() {

//   return (
//    <LoaderCircle className="size-5 animate-spin text-muted-foreground" />
//   )
// }

// export default Loader
