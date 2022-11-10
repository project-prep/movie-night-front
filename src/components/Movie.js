import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
class Movie extends Component {
 
 constructor(){
   super();
   this.state = {
     votes: 0,
   }
 }
 
 handleClick = (e) => {
   this.setState({votes: this.state.votes + 1});
 }
 
 render() {
   return(
     <Card style={{ width: '20rem'}}>
       <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} />
       <Card.Body>
         <Card.Title>{this.props.title}</Card.Title>
         <Card.Text>{this.props.streaming}</Card.Text>
         <Card.Text>Current Votes: {this.state.votes}</Card.Text>
         <Button variant="primary" onClick={this.handleClick}>&hearts; Vote Here</Button>
       </Card.Body>
     </Card>
   );
 }
}
 
export default Movie;