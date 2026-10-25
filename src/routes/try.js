import bcrypt from 'bcrypt'
const password='astitvath9'
async function pass(){
const saltrounds=11
const new_password=await bcrypt.hash('astitvath9',saltrounds)
console.log(new_password)
return new_password
 }
pass()
async function check(userpassword,new_password){
const result=await bcrypt.compare(
    userpassword,
    new_password
)
console.log(result)

}
const token=await pass()
const userpassword='falak2008'
check(userpassword,token)