import { FaSquarePlus } from "react-icons/fa6";
import Link from "next/link";

interface CardDashboardProps {
  title: string;
  value: string;
  miniDescription: string;
  link: string;
  color: "purple" | "green" | "blue" | "rose";
}

export function CardDashboard(props: CardDashboardProps) {
  const { title, value, miniDescription, color, link } = props;

  return (
    <div className="rounded-lg text-card-foreground border bg-white dark:bg-background shadow-sm hover:shadow-md transition">
      <div className="space-y-1.5 p-3 md:p-4 xxl:p-6 flex flex-col items-start gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-calendar h-6 w-6 text-blue-500"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <h2 className="xl:text-2xl mb-2 tracking-tight text-base font-semibold text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm">
          <span className="text-blue-600">+10.1%</span> {miniDescription}
        </p>
      </div>
      <div className="p-3 md:p-4 xxl:p-6 flex flex-col gap-2 mt-2 !pt-0">
        <h3 className="text-4xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
