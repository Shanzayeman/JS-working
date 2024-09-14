const x="Johny";
document.getElementById('demo1').innerHTML=
("\ Johny ");

function Singer (name, sex , last){
    this.singerName=name;
    this.singerSex=sex;
    this.lastName=last;
}


const  asimAzhr=new Singer("Asim" , "Male" , "Ahr");
asimAzhr.lastName=function(name){
    this.lastName=name;
}
asimAzhr.lastName="Azhr";
console.log(asimAzhr.singerName + asimAzhr.lastName);

function Buds(color, battery ,name){
    this.budsColor=color;
    this.budsBattery=battery;
    this.budsName=name;
}
const Saad=new Buds( "Pink" ,"two days");
Saad.budsName=function (own){
    this.budsName=own;
}
Saad.budsName="Shanzay";
document.getElementById('ten').innerHTML=
("So now these earbuds are " + Saad.budsName + " property .");

Buds.prototype.type="high quality";
console.log(Saad.type);
Buds.prototype.lovers="We all own that";
const kikiBoo=new Buds("Pink" , "100%" ,"shanzay");
document.getElementById('thirteen').innerHTML=
(" so now apny apny dill ki bat hoti ha " + kikiBoo.type + ".");