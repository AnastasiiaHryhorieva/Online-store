import { OrderCard } from "@/components/common/order-card/order-card";

const Orders = () => {
  return (
    <div>
      <h2 className="mb-4 max-lg:font-bold lg:mb-6 lg:text-title">
        Мої замовлення
      </h2>

      <ul className="grid gap-4">
        <li>
          <OrderCard status="pending" />
        </li>
        <li>
          <OrderCard status="delivered" />
        </li>
        <li>
          <OrderCard status="rejected" />
        </li>
      </ul>
    </div>
  );
};

export { Orders };
