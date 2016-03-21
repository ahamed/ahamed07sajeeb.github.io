'use strict';
angular.module('ipAssignment')
.service('coverFactory',function(){
	
	

	var teacher = [
		{
			info: "Submitted to-",
			name: "MD. Manowarul Islam",
			designition: "Lecturer",
			dept : "Computer Science and Engineering",
			university: "Jagannath University, Dhaka-1100",
			image: "images/manwar.jpg"
		}
	];

	var student = [
		{
			info: "Submitted by-",
			name: "Sajeeb Ahamed",
			dept: "Computer Science and Engineering",
			batch: "Third",
			roll: "B-110305035",
			university: "Jagannath University, Dhaka-1100",
			image: "images/sajeeb.jpg"
		}
	];

	this.getTeacher = function(index){
		return teacher[index];
	}

	this.getStudent = function(index){
		return student[index];
	}
	
})
.service('assignmentFactory', function(){
	
	var contexts = [
	{
		introduction: "Database is very important for any type of application nowadays. In the internet programming it is more important than any other sides. At the current time the web applications are increasing rapidly. Online registration, signing up to any online account, various types of management system, buying and selling and so other things are done by internet platform now. And every type of sector needs database. So it is clear that database is an important part of any application. Database can be handled in various ways. Now I am going to describe the beginning of database with PHP.",
		
		content: [
			{
				token:"Connect with Database",
				caption:"First it is needed to connect server to <strong>MySQL</strong> server. Here I am using <strong>localhost</strong> as server and <strong>phpMyAdmin</strong> as <strong>MySQL</strong> server. Connect with <strong>MySQL</strong> by <strong>PHP</strong> is an easy task. We just need the <strong>MySQL</strong> user id, password and the server name.",
				example: "<?php\n$host = 'localhost';\n$user = 'root';\n$password = 'your_password';\n\n// Create connection\n$conn = new mysqli($host, $user, $password);\n\n// Check connection\nif ($conn->connect_error) {\n    die('Connection failed: ' . $conn->connect_error);\n}\n echo 'Connected successfully';\n\n$conn->close();\n?>",
				explanation:"Here I am using <strong>localhost</strong> as a server , it is a local server. Then the user id  and the password of MySql. Here I am using <strong>mysqli</strong> the improved version of <strong>mysql</strong>. Here I am creating a connection with database using <strong>PHP</strong> and check if the connection is created or not. If not then it provide a respective error message. Finally I close the database connection when my work is done. Note that full set of mysql code is done inside database connect and close section."
			},
			{
				token:"Database Creation",
				caption:"For creating databse just apply a simple code.",
				example:"<?php\n\n// Creation of database\n$sql = \"CREATE DATABASE dbName\";\nif ($conn->query($sql) === TRUE) {\n    echo 'Database created successfully';\n} else {\n    echo 'Error creating database: ' . $conn->error;\n}\n?>",
				explanation:"After connecting with mysql server I am creating a database. The query <strong>CREATE DATABASE dbName</strong> create a database named <strong>dbName</strong> and if it is not created then it returns a error message."

			},
			{
				token:"Database Selection",
				caption:"Select the databse where we shall be working. This can be done by using this code.",
				example:"<?php\n$mysqli->select_db('dbName');\n\n/* return name of current default database */\nif ($result = $mysqli->query('SELECT DATABASE()')) {\n    $row = $result->fetch_row();\n    printf('Default database is %s.\n', $row[0]);\n    $result->close();\n}\n?>",
				explanation:"Now it is needed to select the database in which we do our operations. <strong>$mysqli->select_db('dbName')</strong> this line of code select the database named <strong>dbName</strong>."

			},
			{
				token:"Table Creation",
				caption:"After Connecting with database, Creating databse and selecting database sussessfully we now create tabels. Table can be created simply-",
				example:"<?php\n$sql = \"CREATE TABLE tableName (\nfirst_field int,\nsecond_field varchar(100),\nthird_field varchar(100),\n......\nPRIMARY KEY (first_field)\";\nif ($conn->query($sql) === TRUE) {\n    echo 'Table tablename created successfully';\n} else {\n    echo 'Error creating table: ' . $conn->error;\n}\n?>",
				explanation:"Table creation is simple enough. The query <strong>CREATE TABLE tableName (....)</strong> this line creates a table and fields inside the <strong>()</strong> is the column names of the table."

			},
			{
				token:"Insert into table",
				caption:"After creating Table successfully we need to insert data into it.",
				example:"<?php\n$sql = \"INSERT INTO tableName (first_field, second_field, third_field,......)\nVALUES ('first_field_value', 'second_field_value', 'third_field_value',......)\";\n\nif ($conn->query($sql) === TRUE) {\n    echo 'New record created successfully';\n} else {\n    echo 'Error: ' . $sql . '\n' . $conn->error;\n}\n?>",
				explanation:"Values insert into table is a necessary operation. We need to assign values inside table. <strong>INSERT INTO tableName (fields or column names....) VALUES (values....)</strong> insert values inside table <strong>tableName</strong>."
			},
			{
				token:"Update a table",
				caption:"Update a table when it is needed is possible in mysql and PHP platform.",
				example:"<?php\n$sql = \"UPDATE tableName SET third_field='some_updated_value' WHERE first_field='some_specific_value'\n\";\n\nif ($conn->query($sql) === TRUE) {\n    echo 'Record updated successfully';\n} else {\n    echo 'Error updating record: '' . $conn->error;\n}\n?>",
				explanation:"Update a specific row is necessary when it is needed.  Update can be done by <strong>UPDATE tableName SET field_name = 'some_specific_value' WHERE unique_field_name='some_other_specific_value'</strong> this query."

			},
			{
				token:"Delete from a table",
				caption:"Delete a content from a table when it is necessary.",
				example:"<?php\n$sql = \"DELETE FROM tableName WHERE first_field='some_specific_value'\";\n\nif ($conn->query($sql) === TRUE) {\n    echo 'Record deleted successfully';\n} else {\n    echo 'Error deleting record: ' . $conn->error;\n}\n?>",
				explanation:"Delete a row is also be needed. A row can be deleted with help of primary key. A row is being unique by primary key. Delete can be done by this query- <strong>DELETE FROM tableName WHERE unique_field_name='some_specific_value'</strong>"

			}
		]
	}

	];

	this.getInfo = function(index){
		return contexts[index];
	};
	

})


.factory('ansFactory',function(){
	
	var ansFact = {};

	var queAndAns = [
		{
			index: 1,
			que: "What does HTML stand for? Explain precisely what the \"HT\" part means and how it is implemented in HTML.",
			ans: "The acronym HTML stands for Hyper Text Markup Language - the primary markup language used to write content on the Web. Every single Web page on the Internet has at least some HTML markup included in its source code.\"HT\" means Hyper Text. Hypertext is text which contains links to other texts. A link is a reference from one document to another, or from one location in the same document to another. It can be followed efficiently using a computer."
		},
		{
			index: 2,
			que: "Write down the HTML code for inserting an image (\"myimage.png\") on a webpage, along with an alternate text description (“This is an image”). Explain (with a realistic example) the purpose of such alternative text description.",
			ans: "Insert an image on a webpage can be done by this - <pre class=\'brush: js\'>&lt;img src=\"myimage.png\" alt=\"This is an image\"&gt;</pre>"
+"The 'alt' attribute means if the source image file not found on the location where it search for then the alt value is shown on the webpage. i.e. if the myimage.png not found then it is shown This is an image on the webpage."
		},
		{
			index: 3,
			que: "How would you hyperlink a page to an external website and a page within the same site? Answer your question in context of absolute path and relative path.",
			ans: "An absolute link defines the location of the document in total including the protocol required to get the document, the server to get it from, the directory it is located in and then the name of the document itself. We use absolute path to hyperlink a page to an external webpage.\n A relative link on the other hand takes advantage of the fact that the server knows where the current document is. Thus, if we want to link to another document in the same directory, we don't need to write out the full URL. All we need to use is the name of the file. We use relative path to hyperlink a page to another page within the same site."
		},
		{
			index:4,
			que: "Define a text field using the &lt;input&gt; tag that allows us to enter the name of a person. The size of the field is 20 characters.",
			ans: "<pre class=\'brush: js>\'>&lt;input type=\"text\" name=\"person\" maxlength=\"20\"&gt;</pre>"
		},
		{
			index: 5,
			que: "Define a button using the &lt;input&gt; tag that allows us to call a function named \"validate()\" when the button is clicked on.",
			ans: "<pre class=\'brush: js>\'>&lt;input type=\"button\" id=\"btn\" value=\"Click\" onclick=\"validate()\"&gt;</pre>\nThis validate() function is a javascript function."
		},
		{
			index: 6,
			que: "What is the purpose of the \"action\" attribute in the &lt;form&gt; tag?",
			ans: "The purpose of the 'action' attribute is to redirect a page to another page when the form is submitted. "
		},
		{
			index: 7,
			que: "What is CSS? Explain different parts of a CSS rule.",
			ans: "CSS stands for cascading style sheet. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.\n\nThere are three types of CSS rules.\n<b>i) HTML selector:</b> With CSS we can define any HTML tag to change this style.\n<b>ii) Class selector:</b> A class is a rule that can be used in any HTML tag. We can give a class any name excepts some reserved words. By class rule we can change styles.\n<b>iii) Id selector:</b> A Id is another CSS rule that also be used in any HTML tag. We also give any tag an ID attribute and a value which can change the style."
		},
		{
			index: 8,
			que: "Describe different values of Position property that are used CSS.",
			ans: "There are four type of position property that are used in CSS. They are-\n<br><b>i) absolute:</b> An element with <i>position: absolute;</i> is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).\n\n<br><br><b>ii) relative:</b> An element with <i>position: relative;</i> is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.\n\n<br><br><b>iii) fixed:</b> An element with <i>position: fixed;</i>  is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.\n\n<br><br><b>iv) static:</b> HTML elements set static by default. It don't affect on any top, left, right, bottom."
		},
		{
			index: 9,
			que: "Explain the BOX model of CSS.",
			ans: "Every HTML elements can be considered as a box. This is called box-model. The CSS box model is essentially a box that wraps around every HTML element. It consists of margin, border, padding, and the actual content.\n<b>Content:</b> The content of the box, where text and images appear.\n<b>Padding:</b> Clears an area around the content. The padding is transparent.\n<b>Border:</b> A border that goes around the padding and content.\n<b>Margin:</b> Clear an area outside the border. The margin is transparent."
		},
		{
			index: 10,
			que: "Name different selectors that are used in CSS. Explain the appropriate use of these selectors.  ",
			ans: "There are many selectors in CSS. The name and brief description of selectors are written bellow-\n<b>.class: </b> Select all elements with a class name.\n<b>#id: </b> Select the element with an id name.\n<b>* :</b> Select all elements.\n<b>element: </b> Selects all elements. i.e. if we use 'p' element then it selects all 'p' elements.\n<b>element, element, … : </b> Apply same style in every selector which we write at the left side with comma. \n<b>element element : </b> Selects all 2nd elements inside first element.\n<b>element &gt; element:</b> selects all 2nd elements where the parent is 1st element.\nFor more: <a href=\"http://www.w3schools.com/cssref/css_selectors.asp\" target='_blank'>http://www.w3schools.com/cssref/css_selectors.asp</a>"
		},
		{
			index: 11,
			que: "Write a script that asks the user to enter two numbers, obtains the two numbers from the user and outputs text that displays the sum, product, difference and quotient of the two numbers in a alert dialog.",
			ans: "<pre class=\'brush: js>\'>   &lt;script&gt;\n	var num1 = parseInt(prompt(\"Enter a number : \"));\n	var num2 = parseInt(prompt(\"Enete another Number:\"));\n	var sum,div,mul,sub;\n	sum = num1+num2;\n	sub = num1-num2;\n	mul = num1 * num2;\n	div = num1 / num2;\n	alert(\"The Summation is: \"+sum);\n	alert(\"The Subtraction is: \"+sub);\n	alert(\"The Multiplication is: \"+mul);\n	alert(\"The Divition is: \"+div);\n   &lt;/script&gt;\n</pre>"
		},
		{
			index: 12,
			que: "Write a script that inputs integers (one at a time) and passes them one at a time to function isEven, which uses the modulus operator to determine whether an integer is even. The function should take an integer argument and return true if the integer is even and false otherwise. Use sentinel-controlled looping and a prompt dialog.",
			ans: "<pre class=\'brush: js>\'>   &lt;script&gt;\n	while(true){\n\n		var number = parseInt(prompt(\"Enter an integer number\"));\n		if(number &lt; 0){\n			break;\n		}else{\n			if(isEven(number)){\n				alert(number+ \" is an even number\");\n			}else{\n				alert(number+ \" is an odd number\");\n			}\n		}\n	}\n\n	function isEven(number){\n		if(number %2 === 0)\n			return true;\n		else\n			return false;\n	}\n   &lt;/script&gt;<pre class=\'brush: js>\'>"
		},
		{
			index: 13,
			que: "What is the purpose of using Array in PHP? Give example of different types of Array that are used in PHP.",
			ans: "An array can hold more than one value at a time. A array can hold many values under a single name and one can access the values by referring to an index number. For this purpose the arrays are used in PHP. \nDifferent types of arrays: \nA PHP array can be declared by several ways. It can be declared by \n<pre class=\'brush: php>\'>$nums = array(3,5,2,6,4);\nor it can be declared by \n$nums[0] = 3;\n$nums[1] = 5;\n$nums[2] = 2;</pre> and so on... \n\nWe can use PHP array by a key value and a respective value of the key.\nFor example \n<pre class=\'brush: php>\'>$age = array(\"sohag\" =&gt; \"45\", \"sabbir\" =&gt; \"53\", \"sajeeb\"=&gt; \"22\");   /\*  :P :D ;)  \*/</pre>\nThis array must be associated with\n<pre class=\'brush: php>\'>$age['sohag'] = \"45\";\n$age['sabbir'] = \"53\";\n$age['sajeeb'] = \"22\";</pre>\nAnd the value can be retrieve by echo <pre class=\'brush: js>\'>$age['sabbir'];</pre>\n"
		},
		{
			index: 14,
			que: "You have an array that stores numeric values. Write a function in PHP to find the largest number in the array. The array will be passed as a parameter to the function.",
			ans: "<pre class=\'brush: php>\'>&lt;?php\n\n/\*  Here I am using bubbol sort to sort the numbers. \*/\n\n	$num = array(4,5,2,1,6,7);\n\nfunction sortThis($numbers){\n\n		$n = sizeof($numbers);\n		$temp = 0;\n	for( $i = 0; $i &lt; $n-1; $i++){\n		for($j = 0; $j &lt; $n-1 ; $j++){\n			if($numbers[$j] &gt; $numbers[$j+1]){\n				$temp = $numbers[$j];\n				$numbers[$j] = $numbers[$j+1];\n				$numbers[$j+1] = $temp;\n			}\n\n		}\n	}\n		for($i = 0; $i &lt; $n; $i++)\n		echo $numbers[$i]. \"  \";\n	}\n\nsortThis($num);\n\n?&gt;</pre>"
		},
		{
			index: 15,
			que: "What are the differences between require and include, include_once and require_once?",
			ans: "In PHP it is possible to insert the content of one PHP file to another PHP file. There is used 'include' and 'require' keyword to do this task. They are almost same excepts two things-\n*The 'require' will produce a fatal error and stop script when it's occur any error.\n* The 'include' only will produce a warning and continue the script at the same situation."
		},
		{
			index: 16,
			que: "What are the differences between inline element and block-level element?",
			ans: "There are two types of elements. They are inline and block level elements. The inline elements renders on the webpage in the same line where the last line is finished. \nBut the block level element is starting rendering after the next line of the last line and it hold a block of a page. <b>&lt;a&gt;, &lt;span&gt;, &lt;i&gt;</b> are some example of inline elements and <b>&lt;p&gt;, &lt;div&gt;, &lt;h2&gt;</b> is some example of block level elements."
		},
		{
			index: 17,
			que: "What is an attribute of a Tag? Give example of commonly used attributes of a Tag.",
			ans: "HTML tags contains attributes which provides extra bit of informations. The attributes appear inside the opening tag. An attribute has an attribute name and an attribute value."
		},
		{
			index: 18,
			que: "Describe the difference among HTML element,tags and attribute.",
		        ans: "<b>HTML elements: </b>\n An element in HTML represents some kind of structure or semantics and generally consists of a start tag, content, and an end tag. The following is a paragraph element: <pre class=\'brush: xml>\'>&lt;p&gt;</pre> This is the content of the paragraph element.<pre class=\'brush: xml>\'>&lt;p\/&gt;</pre> <b>HTML TAG:</b>\n Tags are used to mark up the start and end of an HTML element.A start tag consists of an opening angle bracket (&lt;) followed by the element name, zero or more space separated attribute\/value pairs, and a closing angle bracket (&gt;).A start tag with no attributes: <pre class=\'brush: xml>\'>&lt;h1&gt;</pre> A start tag with an attribute:<pre class=\'brush: js>\'>&lt;p class=\"info\"&gt;</pre> A end tag <pre class=\'brush: xml>\'>&lt;h2\/&gt;</pre> There are some void tags also . <pre class=\'brush: xml>\'>&lt;br&gt;</pre> <b>HTML ATTRIBUTES:</b> \n An attribute defines a property for an element, consists of an attribute\/value pair, and appears within the element's start tag. An element's start tag may contain any number of space separated attribute\/value pairs. The most popular misuse of the term <b>tag</b> is referring to alt attributes as <b>alt</b> tags. There is no such thing in HTML. Alt is an attribute, not a tag. Suppose \n <pre class=\'brush: xml>\'>&lt;img src=\"foobar.gif\" alt=\"A\" foo can be balanced on a bar by placing its fubar on the bar's foobar.&gt;</pre> here <b>alt</b> is an attribute. <pre class=\'brush: xml>\'>&copy;shibbir edited by sajeeb ahamed ;)</pre>"
		}


	];


	ansFact.getAnsOfQues = function(){
		return queAndAns;
	};

	return ansFact;


})
.factory('ansFactory2',function(){
	var ans2 = {};


	var ansOf2 = [
		{
			index:1,
			que:'What is the purpose of using Array in PHP? Give example of different types of Array that are used in PHP.',
			ans:'See question 13 at mid-1 part.'
		},
		{
			index:2,
			que:'You have an array that stores numeric values. Write a function in PHP to find the largest number in the array. The array will be passed as a parameter to the function.',
			ans:'See question 14 at mid-1 part.'
		},
		{
			index:3,
			que:'What are the differences between require and include, include_once and require_once?',
			ans:'See question 15 at mid-1 part.'
		},
		{
			index:4,
			que:'What are the differences between Get and Post methods in form submitting? Give the case where we can use get and we can use post methods?',
			ans:'Here distinguishing between GET and POST method in PHP form submitting.\n<strong>GET: </strong>\n<ul>\n<li>GET requests can be cached</li>\n<li>GET requests remain in the browser history</li>\n<li>GET requests can be bookmarked</li>\n<li>GET requests should never be used when dealing with sensitive data</li>\n<li>GET requests have length restrictions</li>\n<li>GET requests should be used only to retrieve data</li>\n</ul>\nOn the other hand,\n\n <strong>POST: </strong>\n<ul>\n<li>POST requests are never cached</li>\n<li>POST requests do not remain in the browser history</li>\n<li>POST requests cannot be bookmarked</li>\n<li>POST requests have no restrictions on data length</li>\n</ul>\n\nThe <strong>GET</strong> method is used in the case of insecure data. Otherwise the <strong>POST</strong> method used in secure data which should not be shown by the user.'
		},
		{
			index:5,
			que:'Assume that you are creating a new array called birds.\n<ol type=\'a\'>\n<li>How do you declare a new empty array?</li>\n<li>How do you declare a new array with space allotted for 4 elements?</li>\n<li>How do you declare a new array containing the names of 4 birds (note, some types of birds are robin, sparrow, hummingbird, eagle, crow)</li>\n<li>Assuming the array has already been created, how do you set the element at the initialposition of the array to the bird name \'robin\'?</li>\n<li>Write a loop that prints out all of the elements in birds.</li>\n<ol>',
			ans:'<ol type=\'a\'>\n<li> To declare a new empty array we can use this statement'+
			' <pre class=\'brush: php\'>$bird = array();  //this will create an empty array</pre></li>\n<li>'+
			' To allocate an array with 4 spaces we can use this portion of code <pre class=\'brush: php\'>$bird = array_fill(0,4,\' \');'+
			'  //This fill the array with space from index 0 to index 3 total 4 indexes.</pre></li>\n<li>'+
			' This task can be done by this-\n<pre class="brush: php">$bird= array(\'crow\',\'sparrow\',\'hummingbird\',\'eagle\');'+
			'</pre></li>\n<li> We can insert an element at the very beginning position by using array_unshift().\n'+
			'Say we want to insert a bird name \'robin\' at the first position then-\n<pre class=\'brush: php\'>$bird = '+
			'array(\'crow\',\'sparrow\',\'hummingbird\',\'eagle\');\narray_unshift($bird,\'robbin\');'+
			' // this insert \'robbin\' at index 0\n</pre>\nTo show the elements of the array can be done by this -\n'+
			'<pre class=\'brush: php\'>$length = sizeof($bird);\nfor($i = 0; $i<$length; $i++)\n'+
			'   echo $bird[$i].\', \'; // show birds comma separated \n</pre></li></ol>'
		},
		{
			index:6,
			que:'Write a function that reads a number and prints the even numbers between 1 and the value provided.',
			ans:'The code bellow shows the even numbers from 1 to a given number.\n<pre>&lt;?php\n	$n = 100;\n	function even($n){\n		for($i = 2; $i<=$n; $i+=2){\n			echo $i . \',\';\n		}\n	}\n	even($n);\n?&gt;</pre>'
			
		},
		{
			index:7,
			que:'Write the basic structure of PHP programming.',
			ans:'PHP is an embedded scripting language i.e. PHP code is embedded in HTML code. We use PHP code inside a HTML code between <pre><?php and ?></pre> . PHP could use short tag i.e. <pre><? and ?></pre> \nWe can express this by an example-\n<pre>&lt;html&gt;\n&lt;head&gt;&lt;/head&gt;\n&lt;body&gt;\n	<?php \n\t   echo \'&lt;p&gt;Hello world&lt;/p&gt;\';\n	?&gt;\n&lt;/html&gt;</pre>;'
		},
		{
			index:8,
			que:'What is the purpose of $_REQUEST variable in PHP?',
			ans:'PHP $_REQUEST variable is used to collect data after submitting a HTML form. It is an associative array which contains contents of $_GET, $_POST and $_COOKIE by default.'
		},
		{
			index:9,
			que:'Describe how input from an XHTML form is retrieved in a PHP program.',
			ans:'A user submits information to the server via a $_GET or $_POST command.The field key and values are carried into the supper global arrays for GET or POST.To use the data a function "expand" in the php script is called to create the variable/value pairs to use within the script.'
		},
		{
			index:10,
			que:'Write a PHP script that tests whether an e-mail address is input correctly. Verify that the input begins with series of characters, followed by the @ character, another series of characters, a period (.) and a final series of characters.',
			ans:'<pre><?php\n$email = "internet_programming@ip.com";\nif(!filter_var($email, FILTER_VALIDATE_EMAIL) === false){\n	echo "Valid email";\n}else{\n	echo "Invalid email";\n}\n?></pre>'
		},
		{
			index:11,
			que:'Write a PHP regular expression pattern that matches a string that satisfies the following description: The string must begin with the (uppercase) letter A. Any three alphanumeric characters must follow. After these, the letter B (uppercase or lowercase) must be repeated one or more times, and the string must end with two digits.',
			ans:'The PHP code that start with uppercase letter A and any three alphanumeric characters and then letter B or b repeated one or more times and the string ends with two digits is given bellow-\n<pre><?php\n$pattern = \'\/^\\A.[a-zA-Z0-9]{3}(b|B)+[0-9]{2}$\/\';\n$string = \'A3deBbBBbbbBBBbb32\';\nif(preg_match($pattern, $string)){\n	echo "Match";\n}else{\n	echo "Not match";\n}\n?></pre>\nFor more about regular expression visit - <a href="http://www.tutorialspoint.com/php/php_regular_expression.htm" target="_blank">http://www.tutorialspoint.com/php/php_regular_expression.htm</a>'
		},
		{
			index:12,
			que:'Describe how cookies can be used to store information on a computer and how the information can be retrieved by a PHP script. Assume that cookies are not disabled on the client.',
			ans:'Cookies cab be used to store information on a computer by sending HTTP header. In PHP it is set by a function <i>setcookie()</i>. This function has six arguments and looks like-\n<pre>setcookie(name, value, expire, path, domain, security);</pre>\n<ul style="list_style_type: square"><br>	<li><b>Name</b> − This sets the name of the cookie and is stored in an environment variable called HTTP_COOKIE_VARS. This variable is used while accessing cookies.</li><br><li><b>Value</b> − This sets the value of the named variable and is the content that you actually want to store.</li><br>	<li><b>Expiry</b> − This specify a future time in seconds</li><br><li><b>Path</b> − This specifies the directories for which the cookie is valid.</li><br><li><b>Domain</b> − This can be used to specify the domain name in very large domains and must contain at least two periods to be valid. It is optional.</li><br><li><b>Security</b> − This can be set to 1 to specify that the cookie should only be sent by secure transmission using HTTPS otherwise set to 0 which mean cookie can be sent by regular HTTP.</li><br></ul><br>we can retrive the cookies value in PHP by just using $_COOKIE superglobal variable. i.e. \n<pre><?php\n   echo $_COOKIE[name]; // this will print the value of the cookie \n?></pre>'
		},
		{
			index:13,
			que:'The server has a database named <strong>ADDRESSBOOK</strong>, with a single table named Contacts (as shown in Figure 1.2).The database is hosted remotely at <strong>example.com.</strong> The administrator username is <strong>admin</strong> and the password is <strong>abc123.</strong>\n<ol type=\'i\'>\n<li>Write code to connect to the database.</li>\n<li>Write code to store the details submitted from the form into the database.</li>\n<li>Write code to retrieve and display (in an appropriate format) all the mobile phone numbers listed in the database, along with the names of the corresponding contacts.</li>\n<ol>',
			ans:'See your assignment.'
		},
		{
			index:14,
			que:'State the purpose of the following SQL keywords:\n<ol type=\'a\'>\n<li> ASC</li>\n<li> FROM</li>\n<li> DESC</li>\n<li> INSERT</li>\n<li> LIKE</li>\n<li> UPDATE</li>\n<li> SET</li>\n<li> VALUES</li>\n<li> ON</li>\n</ol>',
			ans:'<ul><li><b>ASC: </b>This used for ordering data ascending order.</li><li><b>FROM:  </b>This keyword is used for perform various operations such as insert, delete, update and it specifies the table name. </li><li><b>DESC: </b>This used for ordering data descending order.</li> <li><b>INSERT: </b>This is used for inserting data or record into a table.</li><li><b>LIKE: </b>This keyword is used for searching some data into a table. </li><li><b>UPDATE: </b>This is used for edit or update any record. </li><li><b>SET: </b>SET is used for update a record and set the updated data.</li><li><b>VALUES: </b>This is used for inserting values inside a table.</li><li><b>ON: </b>The ON clause is used to join tables where the column names don’t match in both tables</li></ul>'
		}
		

	];



	ans2.getAnswersOfMid2 = function(){


		return ansOf2;

	};

	return ans2;
})

.factory('ansFactory3',function(){
	var ans3 = {};


	var ansOf2014 = [

		{
			index:1,
			que:'a)What is semantic HTML? What is the difference between linking to and image, a websites and an email address? How can you eliminate the blue border around linked images on web page?<br>b) With the help of HTML canvas element, write a code segment to draw a triangle.',
			ans:'a) Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. CSS is used to suggest its presentation to human users.\n\nLinking to an image we use &lt;img&gt; tag and use src attribute to the locate the location of the image. On the other hand we use hyperlink tag i.e. &lt;a&gt; tag to link an email. Here we use hyperlink reference (href) attribute to link the email. It is essential to ensure that in the href attribute we use "mailto".\nExample: \n<pre>&lt;img src="path/to/my/image.png"&gt;\n&lt;a href="mailto:abc@example.com"&gt;Send Mail&lt;/a&gt;\n&lt;style&gt;\n    img{\n        border: 0px solid;\n    }\n&lt;/style&gt;</pre>\nb) To do this task we need to make a canvas element in HTML and handle it via JavaScript.\n<pre>&lt;canvas id="myCanvas"&gt;&lt;/canvas&gt;\n&lt;script&gt;\n    var c=document.getElementById("myCanvas");\n    var context=c.getContext("2d");\n    context.beginPath();\n    context.moveTo(0, 0);\n    context.lineTo(0, 200);\n    context.lineTo(200, 200);\n    context.closePath();\n    context.stroke();\n&lt;/script&gt;</pre>\n\nThis script will draw a triangle inside the canvas.\n\n<br><br>C) The new HTML5 APIs are: <br><ul><br><li>HTML Geolocation</li><br><li>HTML Grag and Drop</li><br><li>HTML Local Storage</li><br><li>HTML Application Cache</li><br><li>HTML Web Workers</li><br><li>HTML SSE</li><br></ul>'
		},
		{
			index:2,
			que:'<h2>Consider the following form</h2>    <form action="#" method="POST">        <table>            <tr>                <td>Name</td>                <td><input type="text" name="name"></td>            </tr>            <tr>                <td>Roll</td>                <td><input type="text" name="roll"></td>            </tr>            <tr>                <td>Age</td>                <td><input type="text" name="age"></td>            </tr>            <tr>                <td>Comments</td>                <td><textarea cols="30" rows="5"></textarea></td>            </tr>            <tr>                <td></td>                <td><input type="button" name="name" value="Submit"><td>            </tr>        </table></form>',
			ans:'Say the HTML form looks like-<br><pre>&lt;form action="#" method="POST"&gt; \n   Name: &lt;input type="text" name="name" &gt;\n    Roll: &lt;input type="text" name="roll"&gt;\n    Age: &lt;input type="text" name="age"&gt;\n    Comments: &lt;textarea name="comments"cols="20"rows="20"&gt;&lt;textarea&gt;\n    &lt;input type="submit" name="submit" value="Submit"&gt;\n&lt;/form&gt;</pre><br><br>Say the table name is <b>info</b>.<br><pre>$name = $_POST["name"];\n$roll = $_POST["roll"];\n$age = $_POST["age"];\n$comments = $_POST["comments"];\na) insert into table_name values("$name","$roll","$age","$comments");\nb) select * from info;\nc) select * from info order by roll asc;\nd) update info set comments = NULL where roll = 1;</pre>'
		},
		{

			index:3,
			que:'a) Name different selectors that are used in CSS. Explain the appropiate use of these selectors.<br>b) Describe diffrent values of position property that are used in CSS.<br>c) Write the following CSS rules: <ol tyle="i"><li>A rule that makes all text 1.5 time larger than the base font of the system and colors the text red.</li><li>A rule that changes the color of all elements containing attribute class="greenMove" to green and shifts them down 25 pixels and right 15 pixels.</li></ol>',
			ans:'a) See answer 10 at mid-01. <br>b) See answer 8 at mid-01<br>c) <pre>&lt;style&gt;\n// i)\n\n    *{\n        font-size : 1.5em;\n        color: red;\n    }\n    \n//ii)\n\n    .greenMove * {\n        color: green;\n        position: absolute;\n        top: 25px;\n        left: 15px;\n    }\n&lt;/style&gt;</pre>'
		},
		{
			index:4,
			que:'a) Write down the proceure to invoke a function with function constructor in JavaScript.<br> b) What is the difference between the prompt and confirm dialog box?<br>c) Write a Javascript that inputs integers (one at a time) and passes them one at a time to function isEven, which uses the modulus operator to determine whether an integer is even. The function should take an integer argument and return true if the integer is even and false otherwise. Use sentinel-controlled looping and a prompt dialog.',
			ans:'a) Try yourself. <br> b) <table border=1><tr><th>Prompt</th><th>Confirm</th></tr><tr><td>Prompt ask to some user input from the users. </td><td>Confirm ask user to ensure that he want to perform the action or not.</td></tr><tr><td>Prompt returns string.</td><td>Confirm returns true or false. </td></tr></table><br>c) See question 12 mid-01'
		},
		{
			index:5,
			que:'a) Explain $_SERVER[\'DOCUMENT_ROOT\'] and $_SERVER[\'PHP_SELF\'] whit examples.<br>b) Write and applet that inputs three floating point numbers from the user and displays the sum, average, product, smallest and largest of these numbers as strings on the applet. The Name of the applet class should be <b>ArithmaticOperation</b> which extends <b>JApplet</b> class. Every input should be taken through calling <b>JOptionPane.showInputDialog("Enter First/Second/Third Number")</b> three times for three floating-point numbers. The task of taking input and perfom the said arithmatic operation in <b>public void init()</b> method and outputs have to be shown in <b>public void paint(Graphics g)</b> method by calling <b>g.drawString()</b> method.',
			ans:'a) The $_SERVER["DOCUMENT_ROOT"] returns the document root directory under which the current script is executing, as defined in the server\'s configuration file.<br><pre><?php\n echo $_SERVER["DOCUMENT_ROOT"];\n?></pre><br>$_SERVER["PHP_SELF"] is used to find out the name of file in which the current php script is executing.<br> <pre>&lt;?php\n echo $_SERVER["PHP_SELF"];\n?></pre><br>b) <pre>package sample;\n\nimport java.awt.Graphics;\nimport javax.swing.JApplet;\nimport javax.swing.JOptionPane;\n\npublic class ArithmaticOperation extends JApplet{\n\n	private double n1,n2,n3;\n	private double sum, average, product, large, small;\n\n		public void init(){\n		n1 = Double.parseDouble(JOptionPane.showInputDialog("Insert first Number"));\n		n2 = Double.parseDouble(JOptionPane.showInputDialog("Insert second Number"));\n		n3 = Double.parseDouble(JOptionPane.showInputDialog("Insert third Number"));\n		this.setSize(400,400);\n\n	    		sum = n1 + n2 + n3;\n		average = sum / 3;\n		product = n1 * n2 * n3;\n		large = 0;\n		if(n1 > n2 && n1 > n3){\n			large = n1;\n		}else if(n2 > n1 && n2 > n3){\n			large = n2;\n		}else{\n			large = n3;\n		}\n\n						if(n1 < n2 && n1 < n3){\n			small = n1;\n		}else if(n2 < n1 && n2 < n3){\n			small = n2;\n		}else{\n			small = n3;\n		}\n\n\n			}\n\n	public void paint(Graphics g){\n		g.drawString("Numbers are: "+n1+", "+n2+", "+n3,10,10);\n		g.drawString("The Summations is: "+sum,10 , 20);\n		g.drawString("The Average is: "+average,10 ,30);\n		g.drawString("The Product is: "+product,10 , 40);\n		g.drawString("The large number is: "+large,10 , 50);\n		g.drawString("The small number is: "+small,10 , 60);\n	}\n\n\n		public static void main(String[] args) {\n		new ArithmaticOperation();\n\n	}\n\n}</pre>',
		},
		{
			index:6,
			que:'a) What is the purpose of useing Array in PHP? Give example of different types of Array that are used in PHP.<br>b) Mention the Super Global variable of PHP. What is the purpose of $_REQUEST variable in PHP?<br>c) Explain the difference require and include, include_once and require_once.',
			ans:'a) See question 13 at mid-1 part.<br>b) See question 8 at mid-02 part.<br>c) See question 15 at mid-01 part.'
		}



	];



	ans3.getAnswersOf2014 = function(){
		return ansOf2014;

		

	};

	return ans3;
})




;
