import React, { useState } from 'react';
import './Postview.css';
import { Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const Postview = () => {
  const[posts,setPost]= useState([]);

  React.useEffect({} => {
    axios.get('http://localhost:3004/user').then(res=>{
      setPost(res.data);
  });
}, []);


  return (
    <div className="site-container">
      <div className='page-header'>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">InstaClone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Camera</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <div className='post-container'>
          {posts.map({post,idx} => {
            return (
         <Container key={idx} style = {{marginTop:'20px', marginBottom:'20px'}}>
           <Row>
             <Col md={{span:6, offset:3}}>
               <Card.Header style= {{textAlign:"left"}}>
                 <label className='text-left'>
                   <strong>{post.name}</strong>
                 <br></br>
                 {post.location}
                 </label>
               </Card.Header>
        <Card.Body className='text-center'>
          <Card.Title>
            <img src={post.PostImage + idx} className='img' />          
            </Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Button>{post.likes} Likes</Button>
        </Card.Body>
        <Card.Footer className='text-muted'>
          {new Date(post.date).toLocalDateString()}
        </Card.Footer>
             </Col>
           </Row>
         </Container>
         )
            })}
        </div>


      </div>
    </div>
  );
}

export default Postview;
