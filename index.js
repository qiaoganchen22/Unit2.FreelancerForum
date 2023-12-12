const root=document.getElementById("root")

const name=['bob','carol','john','amy','alice','andrew','felix','cam','jack','sam','andy','jason','jake','evan','tony','peter','ivy','bruce','ava','eve','emily','angela','lily','clara']
const job=['swe professor','software engineer','analyst','ux-designer','pen tester','front-end dev','back-end dev','data scientist','full-stack dev','ios dev','android dev','information security analyst','systems architect','cloud engineer','ai engineer','video game dev']
const price=[30,32,31,34,35,36,40,43,42,41,45,50,56,57,54,53,58,59,55,60,61,62,63,66,68,69,65,70,73,78,75,79,72,80]
const max=100
let data=[
    {
        name: name[Math.floor(Math.random()* name.length)],
        job: job[Math.floor(Math.random()* job.length)],
        price: price[Math.floor(Math.random()* price.length)]

    },
    {
        name: name[Math.floor(Math.random()* name.length)],
        job: job[Math.floor(Math.random()* job.length)],
        price: price[Math.floor(Math.random()* price.length)]

    },
    {
        name: name[Math.floor(Math.random()* name.length)],
        job: job[Math.floor(Math.random()* job.length)],
        price: price[Math.floor(Math.random()* price.length)]

    }
]

let header=document.createElement("h1")
header.innerHTML="Freelancer Forums"
root.appendChild(header)
header.classList.add('header')

let avgPrice=document.createElement("p")
avgPrice.innerHTML="The average starting price is $"
let avg=document.createElement('span')
avg.classList.add('avgPrice')
avgPrice.appendChild(avg)
root.appendChild(avgPrice)

// const  addPeopleInteval= setInterval(addPeople, 2000);

let table=document.createElement("table")
table.classList.add("table")
let row=document.createElement('tr')
let colName=document.createElement('td')
colName.classList.add("name")
colName.innerHTML="Name"
let colJob=document.createElement('td')
colJob.classList.add("job")
colJob.innerHTML="Job"
let colPrice=document.createElement('td')
colPrice.classList.add('price')
colPrice.innerHTML="Price"

row.appendChild(colName)
row.appendChild(colJob)
row.appendChild(colPrice)

table.appendChild(row)
root.appendChild(table)
let sum=0
function render(start=0){
    for(let i=start;i<data.length;i++){
        let t1=document.querySelector('.table')
        let row=t1.insertRow(-1)

        let col1=row.insertCell(0)
        let text=document.createTextNode(data[i].name)
        col1.appendChild(text)

        let col2=row.insertCell(1)
        let text2=document.createTextNode(data[i].job)
        col2.appendChild(text2)

        let col3=row.insertCell(2)
        let text3=document.createTextNode(data[i].price)
        col3.appendChild(text3)
        sum+=data[i].price
    }
document.querySelector('.avgPrice').innerHTML=(Math.round(sum/data.length))

}
function addPeople(){
    let obj={}
    obj.name = name[Math.floor(Math.random() * name.length)]
    obj.job = job[Math.floor(Math.random()* job.length)]
    obj.price = price[Math.floor(Math.random()* price.length)]
    data.push(obj)
    render(data.length-1);
    }

render()
let counter=0
let count=setInterval(()=>{
    addPeople()
    counter++
    if(counter===max){
        clearInterval(count)
    }
},1000)
