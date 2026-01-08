import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const UpIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 48 48"
            aria-hidden='true'
            className={className}
        >
            <defs></defs>
            <path
                style={{ fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}
                d="M20.0429,22.0392v6.91M12,18.3551v6.6513a4.0444,4.0444,0,0,0,4.0327,4.0328h0a4.0417,4.0417,0,0,0,4.03-4.0328V18.3551"
            />
            <path
                style={{ fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}
                d="M22.6324,18.339s2.2214,10.655,8.54,10.4741c2.5088-.071,4.8658-1.7112,4.827-5.4049-.0323-3.4355-2.3182-5.0337-5.0207-4.7657-7.268.7232-6.7482,19.4954-6.7482,19.4954"
            />
            <rect
                style={{ fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }}
                x="5.5"
                y="5.5"
                width="37"
                height="37"
                rx="2"
            />
        </svg>
    )

}
