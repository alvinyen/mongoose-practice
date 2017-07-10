# mongoose-practice

## 『 1. 建立連線 』
- 

<hr>
<hr>

## 『 2. basic read query 』
### [ 2.1. Entity ]
- 在save前entity都可透過json的方式操作

<hr>
<hr>

## 『 3. basic update (create、update、delete、[insert]) query 』
- 

<hr>
<hr>

## 『 4. nested document 』
- 
### [ 4.1. Sub Docs (Subdocuments) ]
- nest schemas in other schemas
- 共2種
    - 1. array of subdocuments
    - 2. single nested subdocuments
- 和一般的document相同，可以另外掛上validate、save或其他middleware
- !!important 和一般document不同，subdocuments不會自己save，必須top-level document完成save，之後才會執行subdocument的save。
#### { 4.1. subdocuments的schema 定義 }
- 

<hr>
<hr>

## 『 n. reference 』
### [ Mongoose ]
- [Sub Docs](http://mongoosejs.com/docs/subdocs.html)
- [Queries](http://mongoosejs.com/docs/queries.html)

