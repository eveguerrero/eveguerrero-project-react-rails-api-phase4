import React, {useState} from 'react'

function Auth({setUser, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [seller, setSeller] = useState(false)
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            seller,
            password
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
              setIsAuthenticated(true)
            })
            
          } else {
            res.json()
            .then(json => {
              console.log(json.errors)
              setErrors(json.errors)
            })
          }
        })
    }
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={onSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         seller
    
        <input type="text" value={seller} onChange={(e) => setSeller(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Sign up!" />
      </form>
      {errors.length > 0
        ? errors.map(e => (
          <div key={e} style = {{ color: "red" }}> {e}
          </div>))
          : null}
        </>
    )
}

export default Auth;
