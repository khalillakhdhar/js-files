var a=12;
var b=5;
while(a<b)
{
    b=b-a;
}
console.log("solution en utilisant while "+b)
do
{
    b=b-a
} while(a<b);
console.log("solution en utilisant do "+b);