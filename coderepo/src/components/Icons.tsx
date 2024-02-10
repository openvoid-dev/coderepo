import {
    ArrowRight,
    Code2,
    ExternalLink,
    FileText,
    User,
    LayoutTemplate,
    Newspaper,
    Code2Icon,
    LogOut,
    FlipHorizontal2,
    AppleIcon,
    PaletteIcon,
    Component,
    Move3d,
    BookOpen,
    Users,
    // Framer,
    Puzzle,
    Layout,
    WholeWord,
    Mail,
    Bitcoin,
    MonitorStop,
    Image,
    Apple,
    type LucideProps,
    Pencil,
    Eraser,
    Undo2,
    Plus,
    Star,
    Copy
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Icons = {
    arrowRight: ArrowRight,
    code: Code2,
    externalLink: ExternalLink,
    docs: FileText,
    profile: User,
    template: LayoutTemplate,
    guide: Newspaper,
    resource: Code2Icon,
    logout: LogOut,
    usefulBlogs: Newspaper,
    icons: FlipHorizontal2,
    apple: AppleIcon,
    uiComponents: LayoutTemplate,
    colors: PaletteIcon,
    dev: Code2,
    design: Component,
    threeDDesign: Move3d,
    blog: BookOpen,
    community: Users,
    // animation: Framer,
    ui: Puzzle,
    inspiration: Layout,
    fonts: WholeWord,
    email: Mail,
    web3: Bitcoin,
    mockups: MonitorStop,
    image: Image,
    courses: Apple,
    update: Pencil,
    delete: Eraser,
    back: Undo2,
    create: Plus,
    star: Star,
    copy: Copy,
    gitHub: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
            className={twMerge("h-12 w-12 fill-current", className)}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
        </svg>
    ),
    nextjs: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
        </svg>
    ),
    react: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
    ),
    database: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
        </svg>
    ),
    tailwind: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
    ),
    auth: ({ className, ...props }: LucideProps) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    subscription: ({ className, ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
        </svg>
    ),
    typescript: ({ className, ...props }: LucideProps) => (
        <svg
            viewBox="0 0 50 50"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z" />
        </svg>
    ),
    golang: ({ className, ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="150"
            height="150"
            viewBox="0 0 50 50"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="golang"
            className={twMerge("h-12 w-12 fill-current", className)}
            {...props}
        >
            <path d="M 25 2 A 1.0001 1.0001 0 0 0 24.900391 2.0039062 C 21.285234 2.0210475 18.620219 2.9370882 16.859375 3.8769531 C 15.43929 4.6349349 14.995596 5.1633388 14.701172 5.4589844 C 14.160143 5.2444598 13.626863 5 13 5 C 10.250484 5 8 7.2504839 8 10 C 8 12.027769 9.2527379 13.718387 11 14.498047 L 11 23.878906 L 8.4394531 26.439453 C 7.8534531 27.025453 7.8534531 27.974547 8.4394531 28.560547 C 8.7324531 28.853547 9.116 29 9.5 29 C 9.884 29 10.267547 28.853547 10.560547 28.560547 L 10.734375 28.386719 C 10.66368 28.840843 10.598077 29.291565 10.515625 29.765625 C 10.263111 31.217455 10 32.944444 10 36 C 10 38.837522 11.348366 41.780513 13.835938 44.042969 L 12.439453 45.439453 C 11.853453 46.025453 11.853453 46.974547 12.439453 47.560547 C 12.732453 47.853547 13.116 48 13.5 48 C 13.884 48 14.268547 47.853547 14.560547 47.560547 L 16.298828 45.822266 C 18.610492 47.147193 21.502855 47.981731 24.912109 47.996094 A 1.0001 1.0001 0 0 0 24.929688 47.998047 C 24.953693 47.998128 24.975945 48 25 48 A 1.0001 1.0001 0 0 0 25.101562 47.996094 C 28.504777 47.979528 31.392614 47.145398 33.701172 45.822266 L 35.439453 47.560547 C 35.731453 47.853547 36.116 48 36.5 48 C 36.884 48 37.267547 47.853547 37.560547 47.560547 C 38.146547 46.974547 38.146547 46.025453 37.560547 45.439453 L 36.162109 44.041016 C 38.64872 41.778739 40 38.836906 40 36 C 40 32.944444 39.736889 31.217455 39.484375 29.765625 C 39.401923 29.291565 39.33632 28.840843 39.265625 28.386719 L 39.439453 28.560547 C 39.732453 28.853547 40.116 29 40.5 29 C 40.884 29 41.267547 28.853547 41.560547 28.560547 C 42.146547 27.974547 42.146547 27.025453 41.560547 26.439453 L 39 23.878906 L 39 14.498047 C 40.747262 13.718387 42 12.027769 42 10 C 42 7.2504839 39.749516 5 37 5 C 36.373137 5 35.839857 5.2444598 35.298828 5.4589844 C 35.004404 5.1633388 34.56071 4.6349349 33.140625 3.8769531 C 31.374881 2.9344731 28.700848 2.0140986 25.070312 2.0019531 A 1.0001 1.0001 0 0 0 25 2 z M 25 4 C 28.332476 4 30.681207 4.8303737 32.199219 5.640625 C 33.717231 6.4508763 34.339844 7.1777344 34.339844 7.1777344 A 1.0001 1.0001 0 0 0 35.585938 7.3867188 C 36.018157 7.1403918 36.487934 7 37 7 C 38.668484 7 40 8.3315161 40 10 C 40 11.405144 39.043053 12.562721 37.75 12.896484 A 1.0001 1.0001 0 0 0 37 13.863281 L 37 25 C 37 27.324558 37.268139 28.686455 37.515625 30.109375 C 37.763111 31.532295 38 33.055556 38 36 C 38 40.47234 33.564667 46 25 46 C 16.435333 46 12 40.47234 12 36 C 12 33.055556 12.236889 31.532295 12.484375 30.109375 C 12.731861 28.686455 13 27.324558 13 25 L 13 13.863281 A 1.0001 1.0001 0 0 0 12.25 12.896484 C 10.956947 12.562721 10 11.405144 10 10 C 10 8.3315161 11.331516 7 13 7 C 13.512066 7 13.981845 7.1403919 14.414062 7.3867188 A 1.0001 1.0001 0 0 0 15.660156 7.1777344 C 15.660156 7.1777344 16.282769 6.4508763 17.800781 5.640625 C 19.318793 4.8303737 21.667524 4 25 4 z M 19.5 8 C 17.026563 8 15 10.026563 15 12.5 C 15 14.973437 17.026563 17 19.5 17 C 21.973437 17 24 14.973437 24 12.5 C 24 10.026563 21.973437 8 19.5 8 z M 30.498047 8.0019531 C 28.025162 8.0019525 26 10.027115 26 12.5 C 26 14.972885 28.025162 16.998048 30.498047 16.998047 C 32.970931 16.998047 34.998047 14.972884 34.998047 12.5 C 34.998047 10.027116 32.970931 8.0019532 30.498047 8.0019531 z M 13 9 C 12.448 9 12 9.448 12 10 C 12 10.552 12.448 11 13 11 C 13.068 11 13.127406 10.973937 13.191406 10.960938 C 13.325406 10.413937 13.522156 9.89025 13.785156 9.40625 C 13.602156 9.16525 13.326 9 13 9 z M 37 9 C 36.674 9 36.397844 9.16525 36.214844 9.40625 C 36.477844 9.89025 36.674594 10.413937 36.808594 10.960938 C 36.872594 10.973937 36.932 11 37 11 C 37.552 11 38 10.552 38 10 C 38 9.448 37.552 9 37 9 z M 19.5 10 C 20.892557 10 22 11.107443 22 12.5 C 22 13.892557 20.892557 15 19.5 15 C 18.67558 15 17.95784 14.605658 17.503906 14 A 1.5 1.5 0 0 0 19 12.5 A 1.5 1.5 0 0 0 17.503906 11 C 17.95784 10.394342 18.67558 10 19.5 10 z M 30.498047 10.001953 C 31.890051 10.001953 32.998047 11.107996 32.998047 12.5 C 32.998047 13.892004 31.890051 14.998047 30.498047 14.998047 C 29.674073 14.998047 28.957398 14.604992 28.503906 14 A 1.5 1.5 0 0 0 30 12.5 A 1.5 1.5 0 0 0 28.503906 11 C 28.957398 10.395008 29.674073 10.001953 30.498047 10.001953 z M 25 16 A 3 2 0 0 0 22.066406 17.585938 C 21.764683 17.772108 21.478752 17.982186 21.230469 18.230469 C 20.510834 18.950104 20 19.916667 20 21 C 20 21.25 20.05764 22.253314 20.841797 22.939453 C 21.333381 23.36959 22.041745 23.660401 23 23.830078 L 23 25 A 1.0001 1.0001 0 1 0 25 25 A 1.0001 1.0001 0 1 0 27 25 L 27 23.830078 C 27.958255 23.660401 28.666619 23.36959 29.158203 22.939453 C 29.942362 22.253314 30 21.25 30 21 C 30 19.916667 29.489166 18.950104 28.769531 18.230469 C 28.520854 17.981792 28.233919 17.772285 27.931641 17.585938 A 3 2 0 0 0 25 16 z M 22.904297 19.427734 A 3 2 0 0 0 25 20 A 3 2 0 0 0 27.097656 19.429688 C 27.186252 19.496459 27.275043 19.564106 27.355469 19.644531 C 27.760834 20.049896 28 20.583333 28 21 C 28 21.25 28.05764 21.246686 27.841797 21.435547 C 27.625956 21.624408 26.875 22 25 22 C 23.125 22 22.374044 21.624408 22.158203 21.435547 C 21.942362 21.246686 22 21.25 22 21 C 22 20.583333 22.239166 20.049896 22.644531 19.644531 C 22.725616 19.563447 22.814923 19.494935 22.904297 19.427734 z"></path>
        </svg>
    ),
    google: ({ className, ...props }: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className={twMerge("h-12 w-12 fill-current", className)}
            {...props}>
            <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
        </svg>
    ),
};
