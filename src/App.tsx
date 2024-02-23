import Container from "./components/Container";
import Button3 from "./components/ui/button3";
import Button1 from "./components/ui/button1";
import Button2 from "./components/ui/button2";
import Modal1 from "./components/ui/Modal1";
import { FormEvent, useState } from "react";
import NormalForm from "./components/NormalForm/NormalForm";
import NormalFormZod from "./components/NormalForm/NormalFormZod";
import { Form, FormSection, FormSubmit } from "./components/ReusableForm";
import { useForm } from "react-hook-form";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <Container className="bg-red-100">
      <h1>Main content</h1>
      <h1>Main content</h1>
      <Button1 className="bg-green-400" outline={true} />
      <Button1 className="btn" outline={true} />
      <Button1 className="btn-outline" />
      <Button1 className="btn-ghost" />
      <Button1 className="btn" />
      <Button1 className="w-[500px]" />
      <Button1 className="btn-solid" />
      <Button1 variant="ghost" className="w-[500px]" />
      <Button2>Click</Button2>
      <Button2 variant="outline">
        <span>আরও জানুন</span>
      </Button2>
      <Button2 onClick={() => setModal((prev) => !prev)}>Open Modal</Button2>
      <Modal1 isOpen={modal} onClose={handleModalClose}>
        <Modal1.Header>
          <h1>This is modal title</h1>
          <Modal1.CloseButton></Modal1.CloseButton>
        </Modal1.Header>

        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </Modal1>
      <h1>Main content</h1>
      <NormalForm />
      <NormalFormZod />

      <Form>
        <FormSection />
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
