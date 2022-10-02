arr1 = ["About Us", "UC Impact", "Terms & Condition", "Privacy Policy",
 "Intrest-Based Advertising","Anti Discrimination Policy","Blog","Review",
 "Near Me","Careers","Gift Cards","Contact US","Quick Links"]

 usa=["Austin","Dallas","New York City"]

 ind= ["Agar","Ahemedabad","Alwar","Amritsar","Aurangabad","Banglore",
"Bhopal","Bhubaneswar","Chandigarh tricity","Chenaai","Coimbatore","Cuttack",
"Dehradun"]
function foot (arr1) {
let f=document.getElementById("sufoot")

let cont =document.createElement("div")
arr1.forEach(element => {
    let p= document.createElement("p")
    p.innerText=element
    cont.append(p)
    f.append(cont)

});
}

foot (arr1)

foot (usa)

