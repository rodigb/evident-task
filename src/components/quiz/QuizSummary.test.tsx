import { screen } from "@testing-library/react";
import { store } from "../../store";
import { nameChange } from "../register/asyncActions";
import { render } from "@testing-library/react";
import QuizSummary from "./QuizSummary";
import { Provider } from "react-redux";

describe("Quiz Summary Tests", () => {
  it("should update name in QuizSummary component when dispatching nameChange", async () => {
    store.dispatch(nameChange("Test"));

    //setting the name as "Test"
    render(
      <Provider store={store}>
        <QuizSummary />
      </Provider>
    );

    //Check to see if the name is displayed in the Quiz Summary Page
    const name = await screen.findByText(/Test/i);
    expect(name).toBeInTheDocument();
  });
});
