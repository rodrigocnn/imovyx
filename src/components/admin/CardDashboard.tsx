import { FaSquarePlus } from "react-icons/fa6";

interface CardDashboardProps {
  title: string;
  value: string;
  miniDescription: string;
  link: string;
  color: "purple" | "green" | "blue" | "rose";
}

export function CardDashboard(props: CardDashboardProps) {
  const { title, value, miniDescription, color } = props;

  const colorMap = {
    purple: "bg-purple-700",
    green: "bg-green-700",
    blue: "bg-blue-700",
    rose: "bg-rose-700",
  };

  return (
    <div className={`${colorMap[color]}`}>
      <div className="px-4 pt-4 pb-2 h-fit">
        <div className="mb-3 text-base font-medium text-white ">{title}</div>
        <div className="flex flex-col justify-between gap-4 ">
          <div>
            <h4 className="font-bold text-2xl text-white">{value}</h4>
            <p className="mb-0 text-[.75rem] text-white opacity-[0.7]">
              {miniDescription}
            </p>
          </div>

          <a
            href="/dierenartsen"
            className="text-white font-medium text-base hover:text-white-800"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <FaSquarePlus /> Mais detalhes
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
