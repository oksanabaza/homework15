var data = [{
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "avatar" : "https://placehold.it/100x100"
  },
  {
  
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  "avatar" : "https://placehold.it/100x100"
 },
  {
  
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  "avatar" : "https://placehold.it/100x100"
},
  {
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  "avatar" : "https://placehold.it/100x100"},
  {
   
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  "avatar" : "https://placehold.it/100x100"
},
  {
   
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  "avatar" : "https://placehold.it/100x100"},
  {
    
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  "avatar" : "https://placehold.it/100x100"
},
  {
    
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  "avatar" : "https://placehold.it/100x100"
}
  ];
  
for (var i = 0; i < data.length ; i++) {
   
   var comment = document.createElement('DIV');
   var commentInner = document.createElement('DIV');
   var commentTitle = document.createElement('H2');
   var commentMessage = document.createElement('P');


   var avatar = document.createElement('DIV');
   var avatarImage = document.createElement('IMG');

   avatar.appendChild(avatarImage);

   commentInner.appendChild(commentTitle);
   commentTitle.innerHTML = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';

   commentInner.appendChild(commentMessage);
   commentMessage.innerHTML = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';

   
   comment.appendChild(avatar);
   comment.appendChild(commentInner);

   comment.classList.add('Comment');
   commentInner.classList.add('Comment_inner');
   commentTitle.classList.add('Comment_title');
   commentMessage.classList.add('Comment_message');

   avatar.classList.add('Avatar');

   avatarImage.classList.add('Avatar_Image');
   avatarImage.src = 'https://placehold.it/100x100';
   avatarImage.alt = 'Name';

   document.body.appendChild(comment);



}














