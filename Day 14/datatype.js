// ------------------- * primitive and non-primitive * -------------------

// primitive : primitive ko  non refrence or  immutable  data bhi kaha jata hai

//             java script ke sare  data type  primitive hote hai jaise = number , string , boolean , null ,
//             undefined

//             primitive me original data change karege to copy data bhi change hoga par yadi copy data
//            change karege to original data change nahi hoga that means original data par koi effect nhi aata .

// for example =  x=5     [X] --->[5]
//                y=5     [Y]---->[5]
//                y=10    ----> yaha y  ki val change ho rahi hai but x par koi effect nhi aaya

// non-primitive : non-primitive ko refrence and mutable bhi kaha jata hai
//                 refrence me data mutable hota hai

//                 refrence data type = Array [] , object {}
//                 refrence data type apni hi copy bna lete hai

// for example =
//                [A] = [5]
//                [B] = [A] = [5]

//                A ko change karenge to B apne aap change hoga
//    B ko change karenge to A  apne aap change hoga   yaha original data safe nhi raheta
