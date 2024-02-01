import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Subscription } from "@/components/common/subscription/subscription";
import { SidebarCatalog } from "@/components/common/sidebar-catalog/sidebar-catalog";
import { CatalogContent } from "@/components/catalog/catalog-content/catalog-content";

const Catalog = () => {
  return (
    <section>
      <div className="container pb-16 pt-4">
        <Breadcrumbs className="mb-9" />
        <div className="grid gap-16 md:grid-cols-[170px_1fr]">
          <SidebarCatalog />
          <CatalogContent />
        </div>
      </div>
      <Subscription />
    </section>
  );
};

export { Catalog };
