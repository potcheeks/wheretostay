import {
  fireEvent,
  getByRole as globalGetByRole,
  getByText as globalGetByText,
  render,
} from "@testing-library/react";

import Dropdown from "./Dropdown";
import * as React from 'react'

test("that autocomplete works", async () => {
  const queryClient = new QueryClient();

  const { getByTestId  } = render(
    <QueryClientProvider client={queryClient}>
      <Dropdown />
    </QueryClientProvider>,
    
  );

  const autocomplete = getByTestId("Property Name");
  const input = within(autocomplete).querySelector("input");

  autocomplete.focus();
  // assign value to input field
  fireEvent.change(input, { target: { value: value } });
  await wait();
  // navigate to the first item in the autocomplete box
  fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
  await wait();
  // select the first item
  fireEvent.keyDown(autocomplete, { key: "Enter" });
  await wait();
  // check the new value of the input field
  expect(input.value).toEqual("Hawaii Towers");
});
