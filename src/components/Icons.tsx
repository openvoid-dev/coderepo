import { type LucideProps } from "lucide-react";
import { twMerge } from "tailwind-merge";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  playground: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M.5 23.5c3-5 3-14.5 3-20.578V.5h17v2.422c0 6.078 0 15.578 3 20.578M9.5.5v15m5-15v15m-8 0v3h11v-3z"
      />
    </svg>
  ),
  svelte: ({ className, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 64 64"
      className={twMerge("h-12 w-12 fill-current", className)}
      {...props}
    >
      <path d="M 38.572266 3.0019531 C 35.218023 2.9100811 31.843235 3.75505 28.890625 5.6289062 A 1.0001 1.0001 0 0 0 28.886719 5.6308594 L 15.847656 13.976562 C 15.845656 13.977863 15.843797 13.979269 15.841797 13.980469 L 15.839844 13.982422 C 12.046259 16.363367 9.4156472 20.257026 8.65625 24.666016 C 8.0389206 28.138775 8.5873686 31.684234 10.134766 34.841797 C 9.0758759 36.54779 8.3201839 38.405185 7.9921875 40.369141 C 7.9918471 40.371141 7.9905744 40.3729 7.9902344 40.375 C 7.1876056 44.859089 8.2441528 49.485733 10.861328 53.164062 C 10.862728 53.165962 10.863834 53.167922 10.865234 53.169922 C 10.865234 53.169922 10.867188 53.171875 10.867188 53.171875 C 16.388291 61.043031 27.216645 63.364402 35.085938 58.369141 L 48.128906 50.070312 C 51.928094 47.689816 54.560385 43.79293 55.320312 39.380859 C 55.93763 35.908167 55.389122 32.362597 53.841797 29.205078 C 54.899923 27.500314 55.654104 25.642103 55.982422 23.679688 C 56.836219 19.145716 55.776026 14.505985 53.105469 10.824219 C 49.683164 5.9058329 44.156976 3.1549172 38.572266 3.0019531 z M 21.746094 3.0292969 C 21.616953 3.0526094 21.488344 3.1017344 21.371094 3.1777344 C 20.901094 3.4817344 20.764453 4.1043594 21.064453 4.5683594 L 22.152344 6.2460938 C 22.452344 6.7100938 23.075922 6.8411094 23.544922 6.5371094 C 24.014922 6.2331094 24.151563 5.6104844 23.851562 5.1464844 L 22.765625 3.46875 C 22.540625 3.12075 22.133516 2.9593594 21.746094 3.0292969 z M 38.529297 5.0097656 C 43.494615 5.1516847 48.429152 7.5950924 51.472656 11.978516 A 1.0001 1.0001 0 0 0 51.486328 11.996094 C 53.839589 15.238614 54.771593 19.321269 54.015625 23.320312 A 1.0001 1.0001 0 0 0 54.011719 23.341797 C 53.703402 25.192629 53.000547 26.956677 51.9375 28.550781 A 1.0001 1.0001 0 0 0 51.888672 29.580078 C 53.438887 32.458383 53.928804 35.783405 53.349609 39.035156 A 1.0001 1.0001 0 0 0 53.349609 39.041016 C 52.687537 42.884945 50.385219 46.295497 47.066406 48.375 A 1.0001 1.0001 0 0 0 47.060547 48.378906 L 34.013672 56.681641 C 27.083671 61.08066 17.41865 59.037894 12.5 52.017578 A 1.0001 1.0001 0 0 0 12.496094 52.011719 C 10.185693 48.768591 9.250104 44.671803 9.9609375 40.716797 A 1.0001 1.0001 0 0 0 9.9628906 40.705078 C 10.271208 38.854246 10.976016 37.090198 12.039062 35.496094 A 1.0001 1.0001 0 0 0 12.087891 34.466797 C 10.537677 31.588493 10.045805 28.261517 10.625 25.009766 A 1.0001 1.0001 0 0 0 10.626953 25.003906 C 11.288999 21.160131 13.59028 17.751405 16.908203 15.671875 A 1.0001 1.0001 0 0 0 16.917969 15.666016 L 29.960938 7.3164062 L 29.964844 7.3144531 C 32.562112 5.6672207 35.551536 4.9246551 38.529297 5.0097656 z M 17.496094 5.7792969 C 17.366953 5.8026094 17.238344 5.8517344 17.121094 5.9277344 C 16.651094 6.2317344 16.514453 6.8543594 16.814453 7.3183594 L 17.902344 8.9960938 C 18.202344 9.4600938 18.825922 9.5911094 19.294922 9.2871094 C 19.764922 8.9831094 19.901563 8.3604844 19.601562 7.8964844 L 18.515625 6.21875 C 18.290625 5.87075 17.883516 5.7093594 17.496094 5.7792969 z M 13.246094 8.5292969 C 13.116953 8.5526094 12.988344 8.6017344 12.871094 8.6777344 C 12.401094 8.9817344 12.264453 9.6043594 12.564453 10.068359 L 13.652344 11.746094 C 13.952344 12.210094 14.575922 12.341109 15.044922 12.037109 C 15.514922 11.733109 15.651563 11.110484 15.351562 10.646484 L 14.265625 8.96875 C 14.040625 8.62075 13.633516 8.4593594 13.246094 8.5292969 z M 38.441406 8.9453125 C 37.567545 8.9640095 36.686318 9.0846548 35.8125 9.3105469 A 1.0001 1.0001 0 0 0 35.775391 9.3203125 C 34.753768 9.6266925 33.756551 10.042795 32.845703 10.630859 L 32.84375 10.632812 C 32.84205 10.633912 32.839691 10.633592 32.837891 10.634766 L 19.695312 18.998047 C 17.298489 20.489799 15.608116 22.969973 15.125 25.748047 C 14.597979 28.600228 15.285005 31.500911 16.914062 33.816406 C 16.914062 33.816406 16.916016 33.818359 16.916016 33.818359 C 16.916863 33.819559 16.917069 33.821066 16.917969 33.822266 C 19.641087 37.74527 24.520846 39.5791 29.177734 38.376953 L 29.181641 38.376953 C 30.233494 38.113427 31.240731 37.691435 32.150391 37.103516 L 37.152344 33.912109 C 37.246314 33.855489 37.460035 33.774335 37.714844 33.6875 C 38.614038 33.460863 39.494956 33.7756 40.023438 34.533203 C 40.300584 34.933169 40.431703 35.499502 40.341797 35.980469 C 40.247497 36.484966 40.005009 36.842842 39.539062 37.142578 L 26.453125 45.5 C 26.359155 45.55662 26.145434 45.637775 25.890625 45.724609 C 25.016676 45.944266 24.126481 45.598384 23.589844 44.835938 C 23.339159 44.454734 23.200407 43.93793 23.230469 43.511719 C 23.230469 43.511719 23.230469 43.509766 23.230469 43.509766 L 23.275391 43.058594 A 1.0001 1.0001 0 0 0 22.568359 42.001953 L 22.089844 41.857422 C 20.329708 41.315287 18.7127 40.5052 17.222656 39.421875 A 1.0001 1.0001 0 0 0 17.214844 39.417969 L 16.544922 38.939453 A 1.0001 1.0001 0 0 0 15.009766 39.455078 L 14.769531 40.220703 A 1.0001 1.0001 0 0 0 14.748047 40.300781 C 14.655227 40.71752 14.562067 41.099661 14.462891 41.544922 A 1.0001 1.0001 0 0 0 14.451172 41.597656 C 13.978884 44.429191 14.611357 47.334217 16.300781 49.662109 C 19.025433 53.582225 23.90478 55.418412 28.560547 54.214844 A 1.0001 1.0001 0 0 0 28.597656 54.203125 C 29.622057 53.895912 30.620344 53.479279 31.533203 52.888672 L 31.527344 52.894531 L 44.677734 44.523438 C 47.076357 43.030536 48.768317 40.548152 49.25 37.767578 A 1.0001 1.0001 0 0 0 49.251953 37.761719 C 49.723023 34.930678 49.091886 32.025325 47.402344 29.697266 C 44.677693 25.777147 39.798347 23.940962 35.142578 25.144531 A 1.0001 1.0001 0 0 0 35.105469 25.154297 C 34.083026 25.460923 33.087223 25.877982 32.175781 26.466797 L 27.167969 29.660156 C 27.072899 29.716606 26.861688 29.796833 26.609375 29.882812 C 25.710283 30.109416 24.829036 29.794372 24.300781 29.037109 C 24.023634 28.637143 23.892516 28.068857 23.982422 27.587891 C 24.076732 27.083393 24.317256 26.72747 24.783203 26.427734 L 37.869141 18.070312 L 37.875 18.068359 C 37.97007 18.011909 38.181281 17.931683 38.433594 17.845703 C 39.329281 17.619959 40.205466 17.934463 40.734375 18.685547 C 40.985059 19.06675 41.123812 19.583555 41.09375 20.009766 C 41.09375 20.009766 41.09375 20.011719 41.09375 20.011719 L 41.048828 20.462891 A 1.0001 1.0001 0 0 0 41.755859 21.521484 L 42.228516 21.662109 C 42.228516 21.662109 42.230469 21.662109 42.230469 21.662109 L 42.234375 21.664062 C 43.99451 22.206198 45.611519 23.016284 47.101562 24.099609 A 1.0001 1.0001 0 0 0 47.109375 24.103516 L 47.779297 24.583984 A 1.0001 1.0001 0 0 0 49.314453 24.068359 L 49.546875 23.320312 L 49.552734 23.302734 C 49.707626 22.836269 49.812298 22.415906 49.910156 21.976562 A 1.0001 1.0001 0 0 0 49.919922 21.923828 C 50.392168 19.092541 49.761369 16.187748 48.070312 13.861328 C 46.027351 10.922133 42.775773 9.1535232 39.3125 8.9609375 C 39.023514 8.9448675 38.732693 8.9390802 38.441406 8.9453125 z M 38.490234 10.945312 C 38.729155 10.940012 38.968182 10.944049 39.205078 10.957031 C 42.067152 11.11388 44.747809 12.572345 46.4375 15.009766 A 1.0001 1.0001 0 0 0 46.451172 15.029297 C 47.816263 16.903179 48.331459 19.252075 47.947266 21.580078 C 47.898546 21.797307 47.838143 21.988554 47.785156 22.183594 C 46.338127 21.197902 44.784453 20.417687 43.117188 19.873047 L 43.087891 20.15625 C 43.096191 20.040138 43.00173 19.942017 43 19.826172 C 42.93662 19.805942 42.880084 19.771543 42.816406 19.751953 L 42.994141 19.804688 C 42.978051 19.020059 42.838692 18.229894 42.398438 17.568359 A 1.0001 1.0001 0 0 0 42.386719 17.550781 C 41.385965 16.112361 39.594336 15.474988 37.916016 15.910156 A 1.0001 1.0001 0 0 0 37.849609 15.929688 C 37.564591 16.025028 37.213478 16.131127 36.837891 16.357422 A 1.0001 1.0001 0 0 0 36.816406 16.371094 L 23.705078 24.744141 A 1.0001 1.0001 0 0 0 23.701172 24.746094 C 22.827119 25.308358 22.20732 26.1952 22.015625 27.220703 C 21.819531 28.269736 22.071395 29.331748 22.65625 30.175781 A 1.0001 1.0001 0 0 0 22.65625 30.177734 C 23.657004 31.616155 25.448633 32.253528 27.126953 31.818359 A 1.0001 1.0001 0 0 0 27.193359 31.798828 C 27.478378 31.703488 27.829491 31.597389 28.205078 31.371094 A 1.0001 1.0001 0 0 0 28.226562 31.357422 L 33.25 28.152344 A 1.0001 1.0001 0 0 0 33.255859 28.148438 C 33.962176 27.69146 34.776461 27.345884 35.65625 27.080078 C 39.50968 26.089965 43.51733 27.599666 45.767578 30.845703 A 1.0001 1.0001 0 0 0 45.78125 30.863281 C 47.147409 32.741639 47.665109 35.094979 47.279297 37.425781 C 46.89898 39.621207 45.528496 41.637076 43.621094 42.824219 A 1.0001 1.0001 0 0 0 43.613281 42.830078 L 30.453125 51.207031 A 1.0001 1.0001 0 0 0 30.447266 51.210938 C 29.740949 51.667915 28.926664 52.013491 28.046875 52.279297 C 24.193445 53.26941 20.185795 51.759709 17.935547 48.513672 A 1.0001 1.0001 0 0 0 17.921875 48.494141 C 16.55598 46.616147 16.037814 44.265251 16.423828 41.935547 C 16.467538 41.740716 16.513688 41.542717 16.558594 41.351562 C 18.000103 42.330813 19.547326 43.108227 21.207031 43.650391 L 21.236328 43.367188 C 21.228028 43.483381 21.322479 43.581339 21.324219 43.697266 C 21.387579 43.717496 21.444151 43.751894 21.507812 43.771484 L 21.330078 43.71875 C 21.346218 44.503287 21.485576 45.291664 21.925781 45.953125 A 1.0001 1.0001 0 0 0 21.9375 45.970703 C 22.930472 47.397939 24.707418 48.101149 26.408203 47.660156 A 1.0001 1.0001 0 0 0 26.474609 47.640625 C 26.759628 47.545285 27.110741 47.439186 27.486328 47.212891 A 1.0001 1.0001 0 0 0 27.507812 47.199219 L 40.619141 38.826172 A 1.0001 1.0001 0 0 0 40.621094 38.824219 C 41.495147 38.261955 42.116898 37.375112 42.308594 36.349609 C 42.504688 35.300576 42.252824 34.238565 41.667969 33.394531 A 1.0001 1.0001 0 0 0 41.666016 33.392578 C 40.665495 31.954492 38.875465 31.316816 37.197266 31.751953 A 1.0001 1.0001 0 0 0 37.130859 31.771484 C 36.845841 31.866824 36.494728 31.972924 36.119141 32.199219 A 1.0001 1.0001 0 0 0 36.097656 32.212891 L 31.074219 35.417969 A 1.0001 1.0001 0 0 0 31.068359 35.421875 C 30.355219 35.883267 29.547375 36.225197 28.689453 36.439453 A 1.0001 1.0001 0 0 0 28.681641 36.441406 C 24.824002 37.43865 20.809562 35.925675 18.556641 32.675781 A 1.0001 1.0001 0 0 0 18.552734 32.669922 C 17.219826 30.777965 16.663301 28.418975 17.091797 26.107422 A 1.0001 1.0001 0 0 0 17.09375 26.095703 C 17.474067 23.900277 18.844551 21.884408 20.751953 20.697266 A 1.0001 1.0001 0 0 0 20.759766 20.691406 L 33.917969 12.318359 A 1.0001 1.0001 0 0 0 33.925781 12.314453 C 34.633751 11.856406 35.449868 11.510186 36.332031 11.244141 C 37.050552 11.059997 37.773474 10.961215 38.490234 10.945312 z M 8.9960938 11.279297 C 8.8669531 11.302609 8.7383438 11.351734 8.6210938 11.427734 C 8.1510938 11.731734 8.0144531 12.354359 8.3144531 12.818359 L 9.4023438 14.496094 C 9.7023438 14.960094 10.325922 15.091109 10.794922 14.787109 C 11.264922 14.483109 11.401563 13.860484 11.101562 13.396484 L 10.015625 11.71875 C 9.790625 11.37075 9.3835156 11.209359 8.9960938 11.279297 z M 53.589844 49.078125 C 53.460703 49.101438 53.334047 49.150562 53.216797 49.226562 C 52.746797 49.530563 52.608203 50.153188 52.908203 50.617188 L 53.996094 52.296875 C 54.296094 52.760875 54.919672 52.889938 55.388672 52.585938 C 55.857672 52.281938 55.994312 51.659312 55.695312 51.195312 L 54.609375 49.517578 C 54.384375 49.169578 53.977266 49.008187 53.589844 49.078125 z M 49.339844 51.828125 C 49.210703 51.851438 49.084047 51.900562 48.966797 51.976562 C 48.496797 52.280563 48.358203 52.903188 48.658203 53.367188 L 49.746094 55.046875 C 50.046094 55.510875 50.669672 55.639938 51.138672 55.335938 C 51.607672 55.031938 51.744312 54.409312 51.445312 53.945312 L 50.359375 52.267578 C 50.134375 51.919578 49.727266 51.758187 49.339844 51.828125 z M 45.089844 54.578125 C 44.960703 54.601438 44.834047 54.650562 44.716797 54.726562 C 44.246797 55.030563 44.108203 55.653188 44.408203 56.117188 L 45.496094 57.796875 C 45.796094 58.260875 46.419672 58.389938 46.888672 58.085938 C 47.357672 57.781938 47.494312 57.159312 47.195312 56.695312 L 46.109375 55.017578 C 45.884375 54.669578 45.477266 54.508187 45.089844 54.578125 z M 40.839844 57.328125 C 40.710703 57.351438 40.584047 57.400562 40.466797 57.476562 C 39.996797 57.780563 39.858203 58.403188 40.158203 58.867188 L 41.246094 60.546875 C 41.546094 61.010875 42.169672 61.139938 42.638672 60.835938 C 43.107672 60.531938 43.244312 59.909312 42.945312 59.445312 L 41.859375 57.767578 C 41.634375 57.419578 41.227266 57.258187 40.839844 57.328125 z"></path>
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
  php: ({ className, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className={twMerge("h-12 w-12 fill-current", className)}
      {...props}
    >
      <path d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"></path>
    </svg>
  ),
};
