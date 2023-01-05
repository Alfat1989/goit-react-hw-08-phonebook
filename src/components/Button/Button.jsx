import Button from 'react-bootstrap/Button';

function VariantsExample({ btnName, bgColor }) {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: ${bgColor};
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        {btnName}
      </Button>
    </>
  );
}

export default VariantsExample;
