import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeaderBlock, PostsList, AddForm, FullPost, NotFound } from 'components';
function App() {
  return (
    <div className="App"> 
      
      <HeaderBlock  
        title="Заголовок Сайта"
        description="Описание"
        imageUrl="https://images.unsplash.com/photo-1601753657684-cefd5aa6f284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
      
      <div className="container">

        <div className="content">
        </div>
       
         {/* <AddForm/> */}

        <Router>
          <div>
            <Switch>
              
              <Route path="/"  exact component={ () => (
              <PostsList 
                posts={[
                  {
                    _id:"1",
                    title:"Первая статья",
                    create_At:''+new Date()
                  },
                  {
                    _id:"2",
                    title:"Вторая статья",
                    create_At:''+new Date()
                  },
                  {
                    _id:"3",
                    title:"Третья статья",
                    create_At:''+new Date()
                  }
                ]}/>
              )}/> 
              
              
              <Route path="/post/:id" exact component={() => (
                <FullPost 
                  title="Это первая статья"
                  create_At={''+new Date()} 
                />
              )}/>
              <Route path="/post/:id/edit" exact component={AddForm}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>  
      {/* <button>Add post</button>  */}
    </div>    
  );
}


export default App;
 