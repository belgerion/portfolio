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
			'title': 'Imposter Syndrome',
			'author': 'Jeffrey Barnes',
			'date': 'July 24, 2018',
			'content': "<p>This topic is not completely related to web development, but tangentially, I thought it was appropriate. I really struggled with this when finishing up the nano-degree and starting to look at real world applications of my skills. Very quickly, I went from being excited about web development to lacking confidence in my ability to do it successfully. I had been able to complete the work for the degree, but without the goalposts, I felt lost. Especially when it came to JavaScript.</p><p>I read a lot of how-to books on web development and JavaScript, but I never felt I really grasped it. Even now, when I run into a bug or issue, that feeling starts to creep up. I have been able to overcome that to a good extent through the projects I have begun working on. However, one of the greatest resources I have found for overcoming the lack of confidence is from a talk Adam Savage gave at Maker Faire 2018, the clip of which can be viewed on YouTube <a href='https://www.youtube.com/watch?v=lgQ2N-dFgQc'>here.</a></p><p>In the talk he begins by describing how when we learn something new, we have no frame of reference to contextualize and internalize it. It's only through repeated exposure and doing, that we are able to develop the understanding to put the new skill into practice. From that, I came to the realization that feeling inadequate in any new area is a good thing, as it means you are still learning. So I am embracing the the feeling, rather than trying to overcome it.</p>"
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