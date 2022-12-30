
const loginbutton = document.getElementById("loginbtn")
loginbutton.addEventListener("click", function () {
    const remove = document.getElementById("first-login")
    remove.style.display = "none"
    const show= document.getElementById("second")
     show.style.display="block"
   
})
//////////////////////////Deposit Button///////////////////////////////////////
const addBtn= document.getElementById("addBtn")
addBtn.addEventListener("click", function(){
 const deposet= document.getElementById("addValue").value|0
 const pasrs= parseFloat(deposet)
 const depose= document.getElementById("depotext").innerText
 const parsiner= parseFloat(depose)
   const total= pasrs+parsiner
  const settext= document.getElementById("depotext").innerText=total
  document.getElementById("addValue").value= " "
  ///////////////////////total add /////////////////////////
  const sob = document.getElementById("totalba").innerText
      const par = parseFloat(sob)
      const thotal = pasrs +par
      document.getElementById("totalba").innerText=thotal

})
///////////////////withrow button///////////////////////////////////
 const withrowbtn = document.getElementById("withrowBtn")
    withrowbtn.addEventListener("click",function(){
      const withval= document.getElementById("withvale").value|0
        const pack = parseFloat(withval)
        const seti= document.getElementById("setwith").innerText
        const pa = parseFloat(seti)
        const tital= pack + pa
        document.getElementById("setwith").innerText=tital
        document.getElementById("withvale").value= " "
        ///////////////////////withrow -///////////////////////////////
        const sob = document.getElementById("totalba").innerText
      const par = parseFloat(sob)
      const minas= par-pack
      document.getElementById("totalba").innerText=minas


    })
