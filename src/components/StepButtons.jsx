import { Flex, UnstyledButton } from "@mantine/core";

function StepButtons({ active, setActive, last, loading }) {
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
      <UnstyledButton
        type="submit"
        loading={loading}
        disabled={loading}
        className="px-4 py-2 ml-auto text-white rounded-md bg-primary w-fit disabled:bg-primaryHover"
      >
        {loading ? (
          <span className="animate-bounce">loading...</span>
        ) : last ? (
          "Submit"
        ) : (
          "Next"
        )}
      </UnstyledButton>
    </Flex>
  );
}

export default StepButtons;
