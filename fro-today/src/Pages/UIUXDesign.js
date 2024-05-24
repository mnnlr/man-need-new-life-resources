import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UIUXDesign = () => {
  // Dummy data for the cards
  const cardsData = [
    {
      title: "Figma",
      description: "Figma is a collaborative interface design tool.",
      imageUrl:
        "data:image/png;base64,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",
      buttonUrl: "https://www.figma.com/",
      color: "#6A57FF",
    },
    {
      title: "MUI",
      description: "MUI is a popular React UI framework.",
      imageUrl: "https://via.placeholder.com/150",
      buttonUrl: "https://mui.com/",
      color: "#0080FF",
    },
    {
      title: "Chakra UI",
      description:
        "Chakra UI is a simple, modular and accessible component library.",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDxAPDQ0NDQ0SEg4PEQ0NDhANDRASFREXFhURFRUYHCghGBolGxUVLTEkMS4rLi4uFx8zODcsNygtLisBCgoKDg0NGBAQFy0dHh8tLS01LS0tNy0rNy0vKysuMDcrLS0vKy0rLS0vNi0xKzUwLSs3LSsrLSsrLy8rMTEtN//AABEIAK0BIwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAABAAIGBAUHAwj/xABDEAABBAECBAIFBQ4FBQAAAAABAAIDEQQFEgYTITFBUQcUImFxFjKBkaEjJEJSU1RikpOxssHR0hUzQ3PxFzRVwvD/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QALREBAAIBAwEFBgcAAAAAAAAAAAERAgMEIRITFDFRUgUyQWGx0SJicYGRocH/2gAMAwEAAhEDEQA/APcVKWE8ojY57rprXONd6AsoM1LT/ly381d9Mov+FPy4H5q79qP7V1dy1/RI29S1AccD81d+1H9qvly381P7Uf2p3LX9Ejb1LUPly381P7Uf2q4h4/x9P06PUJoJnNkm9XbCzaX8y331Jqqjcb+C16m31NOLzxobepeQj084hAI03NLSdoO6Oi78UG+/UfWh/p7xG/O03NHfu6MdjR8fNaR6+peQSenrEYS1+m5rXDoWudG1w+IJWP8A1+wv/H5f68X9UHsKlwtE1JmbjQZUQc2OeKOZrXgB4D2g0a8eq5qCUpSCUpSCUi1WgUWhVolpSLRaJZtVrG1WqG0Wi1IhtCLVaIUWuv1PVWY5aHNc5xF02hQ8za4PylZ+Sf8ArNWcaeU8xDk1N9t9PKccs6mHe2hzqXR/KRn5J/6zVg7iJh/0n/WFezy8mufaW29f1+zuh1K+trh6flNnZvbY6lpB7gjw+0LlLCYp14Z454xljNxJtSEIycxfDPYXwytaLc6ORoHmS0gBfdSxbnluI3JibI0YeUeYNpJxsoEey5vSh+me/kuV6xOWtadNnO1nLaTi5BIG0AHqw+O4+HVy9IUvSn2jMzc4R/Y83myZ3uDv8OyAbnJ+9Z/a5rXAgkMv8P7B2X0dly2HDS5r3WQcOWqDQAAdnWzvJ6dd1e9eiKWPf/yR/MjzLJdPJGYxgZMYJjcSzFn6uYHi62djvP1BdT6SNCzMnh7GigxMiWZmbznQsie6cRkTt3cut3d7fDxvsvY1LVr7udXDp6a5sfk//CdZ9TbiDRtUBbJuEow8mtgO9rQzZQeHlx5nzqO26FLZJ9T1aQSF3C2SZXB2yU4OQ/lPeHOdIGuiIvnSzvHlzXDqF+jFLkH5yfn6kW18ksjcRMHOdgzvLhLKx7h1i6Dazb8HHsuq4pxtV1JjWnh3UIpRNPO6cYc7nu5ri4s6RDoCe5s01ovov1EpB0XAuJJj6XgQzMdHKzGx2vjd0c1wYLaR4Fd6pFoFSLQiG0KtFoWUWi0WqlsrRaLQiG0WpFohQi1WgbRaFIhQi0KjWuKP85n+2P4nLQ9OzXety/f/ADseJs/PMnJjgZJvBYyKhfsM3BxJI7eN16RrumyTOa+OjTdpaSGnuSCL+JXRHhci/vTHtwcHezDbge4PmCunDKOmOXzG60NTvGpPZzMT5RbShqc/rO71p3/fnD9RqPl8gRE8z5u/dXt7rquix1bVpebPJFl7GwnT/V8dnKfHlNmcNziaLnB24tFEVstbz8nn7+Z6vFza2cz7nzNv4u7vXuQOGnWwjGh3RjbG6orjHamH8EfBW49TXGnncT2M+Fe78/0/bz5d7wz/AJT/APcd/C1duuv0bEdBFtfW4uLiB1A6AV9i51rnz5yl7+ywyw2+GOUVNMrQhSxdTnKUpYt6UpSCUpSCUpSCUi0WgytFoRaJZUi0Wqlm0Wi1WiG0WhSCtSLRaIVWi0IhtCrRaoUWhSIbQhSBQq0WiIml8ibU91rG0YzJWbF8wvqhCUhVopUsUoOwUpSxdCUpFoFFoUiWbQi1WhZRaLQqlm1WuJNqELOjpWA+QO4j6AsY9Ugd0EzPpJb+9XpnyYdpjdXDmWi0A/Sq1FsoRarQNotCLVQqRaEQ2pCECpCLRCq0WhA2i1IRCsHuS40vkSiTKUhSqM2LNYtUoptClIJSFIOytVoRaxdFlVrG1Wqlm0Wi0WiG1WhCDGaVrGlzztaBZJ8AtT1PWHzkhpLIvBo6F3vcf5dly+K8s+xCD0rmO9/Wmj7D9i17cujSw4uXlbzcz1dGPhD67lkxrnBxAsNALj4CzQ+1fTTMF+S/azoB1c8/NaP6+5crXJGRVjQ/Mj6vd4vkI7k+ND9/uWycuacsYz0TnPEfWXxwdRkgPsG2+LD80/0PvW2YWW2dgezt2IPdp8QVom5dpw7llkwZfsyeyR7+7T/L6VhqYXFt213M45RjPhLbl8HZkQfyzLEJfyZkaJP1btaZ6YuI5tM0tz8ZxZPPIzGZK006MOa5zng+B2sIB8C6/Ba5iehXEkwgZ8jIOpSRiR2RzA6Jszm3t2ke0zcepJs9TY7Dmeu7P09Z8+NpkD8eebHecyJpfDI+J5byJiWktINWB09y3vBymCOBjpWc10URDHPbzHWwdaJsrx70p6dmYnDmFBqOSzKyWZsY5rNx9j1efa0ud1eR1F0OlfE5cTei/Fi0d+c7IypNRjgZkyZEkm9sjtoLmFpF1RoG76Dv2ReKe2L4RZkUji1k0T3ju1kjXOHxAPReWvmyNU4VxXzapHp4cHR5OTkFx58ccskQjc67JdtaT3LqrxK0Tiw8P42PFJoGRmHUIZIz6y31hoI629xeGhpuq2gfBEiHofpe1CeDP0NsM80LJMh7ZGxSvjbIObjinAH2h1PfzK9Oe4DuQPiaXifpV1YP+TObP7Ic1uXJtF1fqsj6H1rHR3O401J8mXIItLw6czTw+ppA40Ca869p3h0aO9gVw9t5g6e0OvbqOvwQ14JIBBINEAgkHyPkvEvSfp8r+IdMxcB4w3uw4MeJ8QDBAwzZDCWAVW1l1VdulLYNT4DZpek5WPiascNk0kcmRlZhDWuaGlvKDmUWhxLfMnqOtqpT0iPMie4sZLE947sbI1zx8QDa+y/N/FTOHcfFadFyct+pwuicMlnrDA6iA57i4AN8wW11pe+cMZr8nAw55SDLLjY0ryBQL3xNc414dSUSYp2arRawe7wRiHG1ipCqFSLQiMt5VvKxUhbLeUbysVIMt5UsLUg7e0Wi1LF0G0IVaIUWi0IG1WhFqo07icn1l1/isr4V/wArrItpcA92xt9XAbiB514rvuL8U+xMB0rlu93W2n7T9i1rcurDnGHzm7vDXyvztumFrmDAwMjLw0dzsNk+LifErl5jcOOPnywRAO9oB0TeY4nrVHx/+K1PSmRxj1nI6saSIovwppB/6jxPn9S42o6jJkv3yH3NaPmtHkFh2fPDq7/OOl+KIv4RXh85/wAZZuUJXlzY2RN7BkYAAHvruferT3HnRV35kf8AGFw9y7fhnGMk4fXsR+0T4bj0aP5/Qtk1EOHSyy1NWI+My5npE4W/xnAkxWuayYObNA997BK0EAOrwLXOF+G6+tUtHxuJ+J8eBuAdDfLltZymZ3V8VAbWvcR7BdXjuAPcjuvXbWDXh10QaNGiDR8viuSn01vJeNeFdYyNBxcaZ8mpai3LZNIGlhMUfJlaGb+m+rbbjZJcepFLeeKsGafRsjHijc+d+Jy2xCtxfsA2rYlIlvFdV4J1KXh3TIGY5OViTZMsuC8jc9r55CDQNOIBHS7p5pfbi6TWdc0/1fG0GTTseN0b3xSODJZnNO0RxRljaaLu/wBEdfA+xB4sgEFwq22LF+YTaUvU8i404Ry82DhyIYckrMeGKLMYCGmIbMZr2uIN/gP7eS5fF3B2Vp+oY2q8PYwLhUWRgxFsUbmBoHRvQbHNFEeBDXDr1HqVoSk6nmuuaPmZfEOk6gzDmZisxoRM5+wOgfvnJjeAe43t7WOq5vpl4bytTwI24TebJDMJnQBwa6RuxzbbfQuG7t5E+PQ72Xjr1HTv17K3DzHl38fJDqeP8TT6xrOmuw8bh9+nQs5JkbI4RukLHgCKGMtb0Bp19qYeva/S+EcaSDTsGGVhjljxcaN7Hd2vbE1rgfpC7QSNJ2hzS7qdtjdQIB6e6x9YSiTKc6l8rU4oVY2rUpCIUKQgUKQgUKUglLMNCkKdlaLQpYtxtCLQqG1WhSIlIVaIwmibI1zHgOa4UQfELSdX0STHJc0GSHweBZaPJw/n2+C3i0Ws8c5xcu52uGvHPEx8Xmr5i6tziaAaL8GjsB7ljuXoE+l48ht8EZPiQ3aT8SFhHo+K02MeO/0hv/fa29rHk8ufZWrfvQ0/TdNlyT9zbTPGV3Rg/qfct20/DZjxiNnbuXHu53i4r7jp0HQeQ7KWrLOcno7XZ4aHPjPn9nE1qCWXFyI4H8ud8MzI32W7XuYQ02O3Ujr4LUtQY+ACfExJdNjDMLGexrYInyvfnQNDGhpIJazmt3Hoeb3PVbxaCAe4B+PVYOy2n5LNSI+5uy2RXl8klrJcgHczkmUb23/qVuNV87rS7TAiyhO18j5ix0uoNexzgYhGJbxyG+HTse9Gj4V3loQtprsDJiknOJjPbKRqDxNNHBzWPkcXNMU+77oHGqa4Hb7NkbaXLY/NY5zmR5kmPunbEyRzDkAHHj2F9u+bzRJRJsX5UtnUhbVIYc/buldlkc/HbIyN4Enq/qUe90YHXd6xdnvQdXv+kLc7nxEuymxfe1CRsUhLK+7CYseGB/frR/B231C2ZSFtYzsSYSZsbceR4yp8OWOVuzktaxkDH7yTbS3kuNV1sVfgSabkuxIoo7gmGdky8zY2QxMfkzuEu26PsvaR8QtoQiW0rL03JdBHFHjSwtZi5LZI43g7shuXjuDmyE7n7w2ZwJNm/a6rdGHoPndh8753bx96lITJRaFKoUWhSBRakEoMZCsFEoRCs2hYsCzQhJQpFc+0KQo2FCrRaIUWi1IG0IUiJSFWgUWi1WgbQhSIUKQgUKQqFSEIhVaEIFSEIFSFIJSFIJSkIFYPKSV8iUJKgLQvoBSIVKQilSFIOdaLUhRkUKQgVItCBtVoQiFClIJSFIJSFKhQhSIUIUgUIUgUKQgUKQgVIUglIUgUKQSgxeVgpZMCIyaEqUipSFKKUKQg5qrQpBKtCkEpCkChSFQqQhEKFIQKFIQKFIQKkKQSkKQKFIQKFKQSlIQKFKQSweVkSvl3QktFr6IApSEFSFKKlKUglISg5akKQSkKVRKQpBKQpBKQpBKUhAoUhAqQpBKQpBKUhAqQpBKUpFSkKUEpCiUGDylopDQs1USlIUZFClIJSlIJSlIP/9k=",
      buttonUrl: "https://chakra-ui.com/",
      color: "#38B2AC",
    },
    {
      title: "Express",
      description:
        "Express is a fast, unopinionated, minimalist web framework for Node.js.",
      imageUrl: "https://via.placeholder.com/150",
      buttonUrl: "https://expressjs.com/",
      color: "#4CAF50",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {cardsData.map((data, index) => (
        <Card
          key={index}
          style={{
            width: "18rem",
            height: "24rem",
            margin: "70px 0px 0px 0px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Card.Img
            variant="top"
            src={data.imageUrl}
            style={{ width: "16rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title style={{ color: "#333333" }}>{data.title}</Card.Title>
            <Card.Text style={{ color: "#666666" }}>
              {data.description}
            </Card.Text>
            <Button
              variant="primary"
              href={data.buttonUrl}
              target="_blank"
              style={{ backgroundColor: data.color, borderColor: data.color }}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UIUXDesign;
