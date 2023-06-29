# Programming Basics questions

## Computer science

### Data structures

#### What is the purpose of the array (list in some programming languages) data structure? Name some methods of it!
Több egymással kapcsolatos adat tárolása egy helyen és művletetek végrehajtása rajtuk. 
#### What are the differences between a list/array and a set?
Set-ben egy adat egyszer lehet jelen "Indexed collections are collections of data which are ordered by an index value Keyed collections are collections which use keys; these contain elements which are iterable in the order of insertion."
#### What are the purpose and some methods of a dictionary/map data structure (simple data objects in JavaScript)?
 Asszociáció a kulcs és érték között, nem index hanem kulcs alapján férünk hozzá. Listaként lehet lekérni a metódusokkal a kulcs és érték párok. Az object-ek tetszőleges  mértékben lehet mélyíteni. Egyszerűbb érték alapján kérni. Lehetne nested array-t használni i = [a,b,c] a = [1]
### Algorithms

#### Write a method (or pseudocode) that generates the Fibonacci sequence.
fib.js
#### How do you find a max value in a list/array if you can’t use any built-in functions or methods?
methods.js
#### How do you find the average of values in a list/array if you can’t use any built-in functions or methods?
 methods.js
#### What do we call an in-place sort?
 google
#### Explain an algorithm which sorts a list!
 methods.js
### Programming paradigms - procedural

#### Explain the characteristics of the procedural programming paradigm.
https://hu.wikipedia.org/wiki/Procedurális_programozás
https://isaaccomputerscience.org/concepts/prog_pas_paradigm?examBoard=all&stage=all
https://levelup.gitconnected.com/functional-object-oriented-procedural-programming-644feda5bcfc
https://www.geeksforgeeks.org/introduction-of-programming-paradigms/
https://medium.com/swlh/introduction-to-programming-paradigms-aafcd6b418d6
https://medium.com/analytics-vidhya/programming-paradigms-cb560f5125a1
#### What is the call stack?
https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
https://www.interviewcake.com/concept/java/call-stack
#### What is "stack overflow"?
https://www.techtarget.com/whatis/definition/stack-overflow
#### What are the main parts of a function?
keyword, paramaters, body, ....,definition, declaration 
#### What is the difference between parameters and arguments?
paraméter amikor define, argument amikor call
### Programming languages - JavaScript

#### What does it mean that a type is immutable? Tell examples.
https://blog.devgenius.io/mutable-and-immutable-in-javascript-78a3cbc6187c
#### What does it mean that an object is mutable? Tell examples.
https://blog.devgenius.io/mutable-and-immutable-in-javascript-78a3cbc6187c
#### What is a conditional expression?
aminek az értéke igaz vagy hamis lehet.
#### What are different types of arguments?
value & reference type
#### What is variable shadowing?
eggyel lentebb scope-ban újra definiálunk egy változót ugynazzal a névvel
#### What can happen if you try to delete/add an item from/to a list, while you are iterating over it?
add: infinite loop, remove: lerövidül a loop
#### If you need to access the iterator variable after a for loop, how would you do it?
let b
for (i = 0; i < 10; i++) {
  console.log(i)
  b = i
}
console.log(b)
#### What type of elements can a list contain?
mindent
#### What can the + operator be used for?
string concatenation, value növelés
#### What is string formatting?
string metódusok használata stringeken
#### Name 4 iterable types.
array, string , set , Map 
#### Does the order of the function definitions matter? Why?
defintion nem, hívás igen.
#### What is spread/rest syntax for?
spread:argumentum behelyettesítés, felsorolás kiterjesztés, mergelés, rest: összegyűjt több változót
#### What does a destructuring assignment mean?
listák vagy objectek kibontása és változókkal való társítása
#### What happens when you try to assign the result of a function which has no return statement to a variable?
undefined
## Software engineering

### Debugging

#### What techniques can you use while debugging a program?
console.log debugger breakpoints
#### What does step over, step into and step out mean when using the debugger?
https://developer.chrome.com/docs/devtools/javascript/reference/
#### How can you start to debug a program from a certain line using the debugger?

### Version control

#### What are the advantages of using a version control system?
biztonságos, tárhelykímélő, kisebb szellemi terhelés, csoportmunka
#### What is the difference between the working directory, the staging area and the repository in git?
WD: project könyvtár & a git control alatt tartott fájlok, staging area: ide kerülnek a committolandó cuccok, git által követett fájlok
#### What are remote repositories in git?
interneten tárolt verziók
#### Why does a merge conflict occur?
Ha eltérés van a két repository között
#### Through what series of commands could you put a new file into a remote repository connected to your existing local repository?
git add filname, git commit -m message, git push
#### What does it mean atomic commits and descriptive commit messages?
As it is a small, focused, documented change, a reviewer should easily be able to follow the code changes and keep their sanity.
f there is a commit that clearly indicates the point where a problem was introduced it’s less complicated to reverse and it’s not necessary to spend a lot of time digging through the code.
#### What’s the difference between Git and GitHub?
Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud-based hosting service that lets you manage Git repositories
## Software design

### Clean code

#### What does clean code mean?
nincs benne bug, naming conventions, áttekinthető, olvsaható, nem redundáns, best praticies, nem kell refaktorálni, rövid argument lista
#### What steps do we usually do during a clean code refactoring?

### Error handling

#### What is error/exception handling?
 exception handling is a process or method used for handling the abnormal statements in the code and executing them
#### What are the basics of exception handling in JavaScript?
try/ catch
#### In which case should we catch an exception? Why?
Runtime Error
#### What can/should we do with an exception in the `catch` block?
jelezni a felhasználónak
#### What does the `finally` statement do in a `try-catch` block in JavaScript?
lefut a try/catch eredményétől függetlenül
