import { cn } from "@/lib/utils";

const OrederStatus = ({ className, status }) => {
  const isPending = status === "pending";
  const isDelivered = status === "delivered";
  const isRejected = status === "rejected";

  return (
    <span
      className={cn(
        "text-base_l font-bold ",
        isPending && "text-[--blue]",
        isDelivered && "text-[--green]",
        isRejected && "text-[--red]",
        className,
      )}
    >
      {isPending && "В очікуванні"}
      {isDelivered && "Доставлено"}
      {isRejected && "Скасовано"}
    </span>
  );
};

export { OrederStatus };
