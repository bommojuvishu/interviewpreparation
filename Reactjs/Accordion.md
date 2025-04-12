# Accordion

```javascript
import { useState } from "react";

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div>
      <h3 onClick={onClick} style={{ cursor: "pointer" }}>
        {title}
      </h3>
      {isOpen && <p>{content}</p>}
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
```
