describe("<LoginPage />", () => {
    it("renders text input correctly", () => {
      const tree = renderer.create(<ThemeProvider theme={themes.default}><Login /></ThemeProvider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it("calls onLogin when button clicked", () => {
      const onSubmitMock = jest.fn();
  
      const component = Enzyme.mount(
        <ThemeProvider theme={themes.default}><Login onSubmit={onSubmitMock} /></ThemeProvider>
      );
  
      component.find("input.username").simulate('change', { target: { value: 'myUser' } })
      component.find("input.password").simulate('change', { target: { value: 'myPassword' } })
      component.find("form").simulate("submit");
  
      console.log("onClickMock.mock", onSubmitMock.mock)
      expect(onSubmitMock).toBeCalled()
    });
  });
  