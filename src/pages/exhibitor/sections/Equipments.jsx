import { Flex, ScrollArea, Text, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";

function Equipments({ active, setActive, data, getData }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      items: data.map((item, index) => {
        return {
          item_id: item.id,
          quantity: savedData?.items?.[index]?.quantity || item.min_quantity,
        };
      }),
    },
  });

  const itemsValues = getValues().items;
  const getItemPrice = (id) => {
    return data.find((item) => item.id === id)?.price;
  };
  const totalPrice = itemsValues.reduce((accumulator, object) => {
    return accumulator + +object.quantity * getItemPrice(object.item_id);
  }, 0);

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData({ ...submittedData, totalPrice: totalPrice });
  };

  return (
    <StepBoxWrapper className={"!w-[70%]"}>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col ">
        <ScrollArea h={400} className="flex flex-col px-4">
          <Flex className="flex-col gap-10">
            {data.map((item, index) => {
              return item.price === 0 ? null : (
                <Flex
                  key={item.id}
                  className={`relative flex-col pb-10 ${
                    index !== data.length - 1 && "border-b-2"
                  } border-neutral-500`}
                >
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <div
                    className="text-xs"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  <Flex className="items-center justify-between w-full">
                    <Text className="text-base font-semibold">
                      Total:{" "}
                      <span className="text-2xl font-bold text-primary">
                        {+item.price * +watch(`items.${index}.quantity`)} L.E
                      </span>
                    </Text>
                    <Flex className="flex-col gap-2">
                      <Flex className="items-center gap-2">
                        {item.id !== 1 && (
                          <p
                            className="px-2 py-1 text-2xl text-white rounded-md cursor-pointer bg-primary"
                            onClick={() => {
                              if (
                                +watch(`items.${index}.quantity`) >
                                item.min_quantity
                              ) {
                                setValue(
                                  `items.${index}.quantity`,
                                  +watch(`items.${index}.quantity`) - 1
                                );
                              } else if (item.min_quantity != 0) {
                                setError(`items.${index}.quantity`, {
                                  type: "custom",
                                  message: `you should at least choose ${item.min_quantity}`,
                                });
                              }
                            }}
                          >
                            -
                          </p>
                        )}
                        <TextInput
                          {...register(`items.${index}.quantity`)}
                          classNames={{
                            input:
                              "px-4 py-[22px] rtl:text-right border-none bg-white rounded-sm placeholder:text-neutral-400   text-center w-[100px] text-primary font-bold text-4xl placeholder:text-sm placeholder:font-normal disabled:text-primary disabled:bg-transparent",
                          }}
                          disabled
                          type={"text"}
                          className="w-full "
                        />
                        {item.id !== 1 && (
                          <p
                            className="px-2 py-1 text-2xl text-white rounded-md cursor-pointer bg-primary"
                            onClick={() => {
                              if (
                                +watch(`items.${index}.quantity`) <
                                item.max_quantity
                              ) {
                                setValue(
                                  `items.${index}.quantity`,
                                  +watch(`items.${index}.quantity`) + 1
                                );
                              } else {
                                setError(`items.${index}.quantity`, {
                                  type: "custom",
                                  message: `you can't choose more than ${item.max_quantity} ${item.name}s`,
                                });
                              }
                            }}
                          >
                            +
                          </p>
                        )}
                      </Flex>

                      <Text className="text-lg ">
                        Price:{" "}
                        <span className="font-bold">{item.price} L.E</span>
                      </Text>
                    </Flex>
                  </Flex>
                  <div className="h-2">
                    {errors?.items?.[index]?.quantity && (
                      <Text className="text-sm text-red-500 break-words ">
                        {errors?.items?.[index]?.quantity?.message}
                      </Text>
                    )}
                  </div>
                </Flex>
              );
            })}
          </Flex>
        </ScrollArea>
        <Text className="pt-4 text-4xl font-bold border-t border-neutral-400">
          Total:
          <span className="ml-3 text-primary">{totalPrice} L.E</span>
        </Text>
        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default Equipments;
