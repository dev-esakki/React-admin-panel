import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import ImageUploader from 'react-images-upload';

class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = {
       activeIndex: 0,
       items : [
        {
          src: 'http://www.bhasinassociates.org/images/PFconsultantdelhi.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1',
        },
        {
          src: 'https://mipstech.files.wordpress.com/2018/02/homepage-banner-06-01_2356x0.png',
          altText: 'Slide 2',
          caption: 'Slide 2',
        },
        {
          src: 'https://everydaygrimeuk.com/wp-content/uploads/2014/08/banner-1.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3',
        },
      ],
      pictures: [],
      fileUpload : false
     };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onDrop = (picture) => {
      this.setState({
          pictures: this.state.pictures.concat(picture),
          fileUpload : true
      });
      
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

/*   componentDidUpdate(prevProps, prevState) {
    if(this.state.fileUpload) {
      this.setState({
        items : [
          {
            src: 'http://sonyphotog.com/photos/globalmedicalco/25/124181.jpg',
            altText: 'Slide 1',
            caption: 'Slide 1',
          },
          {
            src: 'https://images3.alphacoders.com/823/82317.jpg',
            altText: 'Slide 2',
            caption: 'Slide 2',
          },
          {
            src: 'http://images.animalpicturesociety.com/images/om/3_2_493_1024x768-wallpaper-cb1267710746.jpg',
            altText: 'Slide 3',
            caption: 'Slide 3',
          },
        ],
      })
    }
  } */

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <img className="d-block w-100" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    const slides2 = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Preview</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/carousel/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride="carousel">
                  {slides}
                </Carousel>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Banners</strong>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </CardBody>
            </Card>
          </Col>          
        </Row>
        <Row>
          <Col xs="9" xl="9">
            <FormGroup>                
              <ImageUploader
              withIcon={true}
              buttonText='Banner1'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
              maxFileSize={5242880}
              withPreview={true}
              />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup> 
          </Col> 
        </Row>
      </div>
    );
  }
}

export default Carousels;