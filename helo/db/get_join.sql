select username, password, title, img, content
from users
join post
on users.id = post.author_id;

-- select * from post;