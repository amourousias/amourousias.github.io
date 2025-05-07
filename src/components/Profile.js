import { Container, Row, Col, Image } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, mailOutline } from 'ionicons/icons';

export default function Profile() {
    return (
      // <Card style={{ width: "18rem" }}>
      //   <Card.Img variant="left" alt="Steve" src="https://i.imgur.com/enxFTWg.jpeg" />
      //   <Card.Body>
      //     <Card.Title>Alex Mourousias</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </Card.Text>
      //   </Card.Body>
      // </Card>
      <Container fluid>
        <Row>
          <Col xs={6}>
          <Image
            src="https://i.imgur.com/enxFTWg.jpeg"
            alt="Steve"
          />
          </Col>
          <Col>
            <h1 class="font-bold my-5">Alex Mourousias</h1>
            <h3>
              <IonIcon icon={mailOutline} size="large" class="mx-3 align-bottom" ></IonIcon>
              <a href="mailto:alex.mourousias@gmail.com">alex.mourousias@gmail.com</a>
            </h3>
            <h3 class="my-3">
              <IonIcon icon={logoGithub} size="large" class="mx-3 align-bottom" ></IonIcon>
              <a href="https://github.com/amourousias">@amourousias</a>
            </h3>
            <h3>
              <IonIcon icon={logoLinkedin} size="large" class="mx-3 align-bottom" ></IonIcon>
              <a href="https://www.linkedin.com/in/alexander-mourousias-07315463/">@alexander-mourousias</a>
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }