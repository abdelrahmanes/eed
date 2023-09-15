import { Flex } from "@mantine/core";

function StepButtons({ active, setActive }) {
  return (
    <Flex className="justify-between w-full mt-6">
      {active !== 0 && (
        <button
          type="button"
          onClick={() => {
            setActive((prev) => prev - 1);
          }}
          className="px-4 py-2 text-white bg-blue-800 rounded-md w-fit"
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        className="px-4 py-2 ml-auto text-white rounded-md bg-primary w-fit"
      >
        Next
      </button>
    </Flex>
  );
}

export default StepButtons;
