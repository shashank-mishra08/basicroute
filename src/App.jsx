
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Support from './components/Support'
import Notfound from './components/Notfound'
import Labs from './components/Labs'
import Contact from './components/Contact'
import About from './components/About'
import { NavLink } from 'react-router-dom'
import Mainheader from './components/Mainheader'

function App() {


  return (  
   <div>
   {/* chalo tmhe ek baat bata ta hoon 
   you have these links but when a user clicks a link then he does not have the idea that particular linked is clicked or not
   for this we will use navlink, and jis v route pe aap hoge uspe ek active class laga dega  */}
    {/* <nav>
      <ul>
        <li >
        <Link to="/">Homepage</Link>
        </li>
        <li>
        <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/labs">labs</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        

      </ul>
    </nav> */}
    <nav>
      <ul>
        <li >
        <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
        <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/labs">labs</NavLink>
        </li>
        <li>
          <NavLink to="about">about</NavLink>
        </li>
        

      </ul>
    </nav>

    {/* therfore now samadhan ho chuka hai */}



    <p className='flex justify-center mt-10'>toh kaise hain aaplog</p>
    {/* here div ke andar koi component hoga like home page ka content hoga and baanki saari chij 
    it's just an example to show how route works     */}
    {/* in the next step we will create components for each */}
    {/* we will import all the components here that we have made  and niche wala jo h us sab ko uske component me likhenge*/}
     
    {/* <Routes>
    <Route path="/" element={<div>This is home page</div>} /> 
    <Route path="/support" element={<div>This is support page</div>} /> 
    <Route path="/contact" element={<div>This is contact page</div>} /> 
    <Route path="/labs" element={<div>This is labs page</div>} /> 
    <Route path="/about" element={<div>This is about page</div>} /> 
    <Route path="*" element={<div>no page found</div>} /> 
    </Routes> */}

    <Routes>
     <Route path="/" element={<div><Mainheader/></div>}>
     <Route index element={<Homepage/>}/>
      <Route path="/support" element={<div><Support/></div>} /> 
      <Route path="/contact" element={<div><Contact/></div>} /> 
      <Route path="/labs" element={<div><Labs/></div>} /> 
      <Route path="/about" element={<div><About/></div>} /> 
      <Route path="*" element={<div><Notfound/></div>} /> 
     </Route> 

    

    </Routes>
    {/* now itta karne ke baad when you hit your local host with path name to uske andar jo v hota wo visible hota */}

   {/* but the case is user ko to pata hi nhi hoga developer ne kya options daal rakha hai therfore
   for this case ham link ke throrgh show karenge matlab saare options ui pe visbible karayenge and us tak jaane ke liye link ka use karenge */}
   {/* nav bar and nav bar ke andar unordered list  */}
   {/* concept of nested routing, but when it is done then hota ye hai ki homepage ki hi content dikhti baanki sab ki nahi */}
    {/* nested routing me parent elemnt child element ko visible nahi hone de raha hai
    if you want parent element child element ko render hone de to for that we use <outlet/> */}
    {/* after defining outlet in the homepage component, things now works as usual but ho ye raha ki homepage ka v content baar baar 
    aa raha hai if other options pe click kar rahe, Therfore ek main header ka component banate hain */}
   </div>
        
  )
}

export default App
