import { OrderCard } from "@/components/common/order-card/order-card";

const Orders = () => {
  return (
    <div>
      <h2 className="mb-6 text-title">Мої замовлення</h2>

      <OrderCard />
    </div>
  );
};

export { Orders };
