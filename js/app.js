(function (window, document) {
	
	var blogStart = "<div class='postEntry'></div>";
	var postTitle = "<div><h4>%data%</h4></div>";
	var postAuthor = "<div>by %data%</div>";
	var postDate = "<div class='date-text'>%data%</div>";
	var postContent = "<br><em>%data%</em>"
	
	var blog = {
		'post': [
		{
			'title': 'First Blog Post',
			'author': 'Jeffrey Barnes',
			'date': 'July 23, 2018',
			'content': "This is my first blog entry for this website. It is was designed to be powered by JavaScript, pulling an object and adding that to the HTML of the website. I am planning on adding a new post twice a week, covering things I've learned or discovered, or anything that I find curious related to web development and coding."
		},
		{
			'title': 'First Blog Post',
			'author': 'Jeffrey Barnes',
			'date': 'July 23, 2018',
			'content': "This is my first blog entry for this website. It is was designed to be powered by JavaScript, pulling an object and adding that to the HTML of the website. I am planning on adding a new post twice a week, covering things I've learned or discovered, or anything that I find curious related to web development and coding."
		}
	]
	};
	
	function displayBlog() {
		for (post in blog.post) {

			$("#post").append(blogStart);

			var formattedPostTitle = postTitle.replace("%data%", blog.post[post].title); 
			var formattedPostAuthor = postAuthor.replace("%data%", blog.post[post].author);
			var formattedPostDate = postDate.replace("%data%", blog.post[post].date);
			var formattedPostContent = postContent.replace("%data%", blog.post[post].content);
			
			$(".postEntry:last").prepend(formattedPostContent);
			$(".postEntry:last").prepend(formattedPostDate);
			$(".postEntry:last").prepend(formattedPostAuthor);
			$(".postEntry:last").prepend(formattedPostTitle);
		}
	};


displayBlog();
	
})(window, document);