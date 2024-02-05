import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { XIcon } from "lucide-react";

import { Icon } from "@/components/common/icon/icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField } from "@/components/ui/form";

const formSchema = z.object({
  searchTerm: z.string().min(1),
});

const SearchModal = ({ className }) => {
  const navigate = useNavigate();
  const refCloseModal = useRef(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit = ({ searchTerm }) => {
    form.reset();
    navigate(`/catalog?q=${searchTerm}`);
    refCloseModal.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger className={className}>
        <Icon
          className="fill-transparent duration-200 hover:fill-[--green]"
          name="search"
        />
      </DialogTrigger>
      <DialogContent className="-mt-10 pb-8">
        <DialogClose
          ref={refCloseModal}
          className="ml-auto duration-200 hover:rotate-90 focus-visible:rotate-90"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogClose>
        <Form {...form}>
          <form
            className="flex items-center"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="searchTerm"
              render={({ field }) => (
                <FormControl>
                  <input
                    className="h-10 w-full border border-r-0 px-4"
                    type="search"
                    {...field}
                    placeholder="Я шукаю..."
                  />
                </FormControl>
              )}
            />
            <button
              className="h-10 rounded-r-md border px-4 pb-2 pt-1.5 font-semibold leading-none duration-200 hover:border-black hover:bg-black hover:text-white focus-visible:border-black focus-visible:bg-black focus-visible:text-white"
              type="submit"
            >
              Пошук
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { SearchModal };
