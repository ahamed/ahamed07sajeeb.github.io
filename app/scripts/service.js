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
				example:"<?php\n$sql = \"INSERT INTO tableName (first_field, second_field, third_field,......)\nVALUES ('first_field_value', 'second_field_value', 'third_field_value',......)\";\n\nif ($conn->query($sql) === TRUE) {\n    echo 'New record created successfully';\n} else {\n    echo 'Error: ' . $sql . '<br>' . $conn->error;\n}\n?>",
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
			ans: "Insert an image on a webpage can be done by this - <pre>&lt;img src=\"myimage.png\" alt=\"This is an image\"&gt;</pre>"
+"The 'alt' attribute means if the source image file not found on the location where it search for then the alt value is shown on the webpage. i.e. if the myimage.png not found then it is shown This is an image on the webpage."
		},
		{
			index: 3,
			que: "How would you hyperlink a page to an external website and a page within the same site? Answer your question in context of absolute path and relative path.",
			ans: "An absolute link defines the location of the document in total including the protocol required to get the document, the server to get it from, the directory it is located in and then the name of the document itself. We use absolute path to hyperlink a page to an external webpage.<br> A relative link on the other hand takes advantage of the fact that the server knows where the current document is. Thus, if we want to link to another document in the same directory, we don't need to write out the full URL. All we need to use is the name of the file. We use relative path to hyperlink a page to another page within the same site."
		},
		{
			index:4,
			que: "Define a text field using the &lt;input&gt; tag that allows us to enter the name of a person. The size of the field is 20 characters.",
			ans: "<pre>&lt;input type=\"text\" name=\"person\" maxlength=\"20\"&gt;</pre>"
		},
		{
			index: 5,
			que: "Define a button using the &lt;input&gt; tag that allows us to call a function named \"validate()\" when the button is clicked on.",
			ans: "<pre>&lt;input type=\"button\" id=\"btn\" value=\"Click\" onclick=\"validate()\"&gt;</pre><br>This validate() function is a javascript function."
		},
		{
			index: 6,
			que: "What is the purpose of the \"action\" attribute in the &lt;form&gt; tag?",
			ans: "The purpose of the 'action' attribute is to redirect a page to another page when the form is submitted. "
		},
		{
			index: 7,
			que: "What is CSS? Explain different parts of a CSS rule.",
			ans: "CSS stands for cascading style sheet. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.<br><br>There are three types of CSS rules.<br><b>i) HTML selector:</b> With CSS we can define any HTML tag to change this style.<br><b>ii) Class selector:</b> A class is a rule that can be used in any HTML tag. We can give a class any name excepts some reserved words. By class rule we can change styles.<br><b>iii) Id selector:</b> A Id is another CSS rule that also be used in any HTML tag. We also give any tag an ID attribute and a value which can change the style."
		},
		{
			index: 8,
			que: "Describe different values of Position property that are used CSS.",
			ans: "There are four type of position property that are used in CSS. They are-<br><b>i) absolute:</b> An element with <i>position: absolute;</i> is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).<br><br><b>ii) relative:</b> An element with <i>position: relative;</i> is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.<br><br><b>iii) fixed:</b> An element with <i>position: fixed;</i>  is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.<br><br><b>iv) static:</b> HTML elements set static by default. It don't affect on any top, left, right, bottom."
		},
		{
			index: 9,
			que: "Explain the BOX model of CSS.",
			ans: "Every HTML elements can be considered as a box. This is called box-model. The CSS box model is essentially a box that wraps around every HTML element. It consists of margin, border, padding, and the actual content.<br><b>Content:</b> The content of the box, where text and images appear.<br><b>Padding:</b> Clears an area around the content. The padding is transparent.<br><b>Border:</b> A border that goes around the padding and content.<br><b>Margin:</b> Clear an area outside the border. The margin is transparent."
		},
		{
			index: 10,
			que: "Name different selectors that are used in CSS. Explain the appropriate use of these selectors.  ",
			ans: "There are many selectors in CSS. The name and brief description of selectors are written bellow-<br><b>.class: </b> Select all elements with a class name.<br><b>#id: </b> Select the element with an id name.<br><b>* :</b> Select all elements.<br><b>element: </b> Selects all elements. i.e. if we use 'p' element then it selects all 'p' elements.<br><b>element, element, … : </b> Apply same style in every selector which we write at the left side with comma. <br><b>element element : </b> Selects all 2nd elements inside first element.<br><b>element &gt; element:</b> selects all 2nd elements where the parent is 1st element.<br>For more: <a href=\"http://www.w3schools.com/cssref/css_selectors.asp\" target='_blank'>http://www.w3schools.com/cssref/css_selectors.asp</a>"
		},
		{
			index: 11,
			que: "Write a script that asks the user to enter two numbers, obtains the two numbers from the user and outputs text that displays the sum, product, difference and quotient of the two numbers in a alert dialog.",
			ans: "<pre>   &lt;script&gt;<br>	var num1 = parseInt(prompt(\"Enter a number : \"));<br>	var num2 = parseInt(prompt(\"Enete another Number:\"));<br>	var sum,div,mul,sub;<br>	sum = num1+num2;<br>	sub = num1-num2;<br>	mul = num1 * num2;<br>	div = num1 / num2;<br>	alert(\"The Summation is: \"+sum);<br>	alert(\"The Subtraction is: \"+sub);<br>	alert(\"The Multiplication is: \"+mul);<br>	alert(\"The Divition is: \"+div);<br>   &lt;/script&gt;<br></pre>"
		},
		{
			index: 12,
			que: "Write a script that inputs integers (one at a time) and passes them one at a time to function isEven, which uses the modulus operator to determine whether an integer is even. The function should take an integer argument and return true if the integer is even and false otherwise. Use sentinel-controlled looping and a prompt dialog.",
			ans: "<pre>   &lt;script&gt;<br>	while(true){<br><br>		var number = parseInt(prompt(\"Enter an integer number\"));<br>		if(number &lt; 0){<br>			break;<br>		}else{<br>			if(isEven(number)){<br>				alert(number+ \" is an even number\");<br>			}else{<br>				alert(number+ \" is an odd number\");<br>			}<br>		}<br>	}<br><br>	function isEven(number){<br>		if(number %2)<br>			return true;<br>		else<br>			return false;<br>	}<br>   &lt;/script&gt;<pre>"
		},
		{
			index: 13,
			que: "What is the purpose of using Array in PHP? Give example of different types of Array that are used in PHP.",
			ans: "An array can hold more than one value at a time. A array can hold many values under a single name and one can access the values by referring to an index number. For this purpose the arrays are used in PHP. <br>Different types of arrays: <br>A PHP array can be declared by several ways. It can be declared by <br><pre>$nums = array(3,5,2,6,4);<br>or it can be declared by <br>$nums[0] = 3;<br>$nums[1] = 5;<br>$nums[2] = 2;</pre> and so on... <br><br>We can use PHP array by a key value and a respective value of the key.<br>For example <br><pre>$age = array(\"sohag\" =&gt; \"45\", \"sabbir\" =&gt; \"53\", \"sajeeb\"=&gt; \"22\");   /\*  :P :D ;)  \*/</pre><br>This array must be associated with<br><pre>$age['sohag'] = \"45\";<br>$age['sabbir'] = \"53\";<br>$age['sajeeb'] = \"22\";</pre><br>And the value can be retrieve by echo <pre>$age['sabbir'];</pre><br>"
		},
		{
			index: 14,
			que: "You have an array that stores numeric values. Write a function in PHP to find the largest number in the array. The array will be passed as a parameter to the function.",
			ans: "<pre>&lt;?php<br><br>/\*  Here I am using bubbol sort to sort the numbers. \*/<br><br>	$num = array(4,5,2,1,6,7);<br><br>function sortThis($numbers){<br><br>		$n = sizeof($numbers);<br>		$temp = 0;<br>	for( $i = 0; $i &lt; $n-1; $i++){<br>		for($j = 0; $j &lt; $n-1 ; $j++){<br>			if($numbers[$j] &gt; $numbers[$j+1]){<br>				$temp = $numbers[$j];<br>				$numbers[$j] = $numbers[$j+1];<br>				$numbers[$j+1] = $temp;<br>			}<br><br>		}<br>	}<br>		for($i = 0; $i &lt; $n; $i++)<br>		echo $numbers[$i]. \"  \";<br>	}<br><br>sortThis($num);<br><br>?&gt;</pre>"
		},
		{
			index: 15,
			que: "What are the differences between require and include, include_once and require_once?",
			ans: "In PHP it is possible to insert the content of one PHP file to another PHP file. There is used 'include' and 'require' keyword to do this task. They are almost same excepts two things-<br>*The 'require' will produce a fatal error and stop script when it's occur any error.<br>* The 'include' only will produce a warning and continue the script at the same situation."
		},
		{
			index: 16,
			que: "What are the differences between inline element and block-level element?",
			ans: "There are two types of elements. They are inline and block level elements. The inline elements renders on the webpage in the same line where the last line is finished. <br>But the block level element is starting rendering after the next line of the last line and it hold a block of a page. <b>&lt;a&gt;, &lt;span&gt;, &lt;i&gt;</b> are some example of inline elements and <b>&lt;p&gt;, &lt;div&gt;, &lt;h2&gt;</b> is some example of block level elements."
		},
		{
			index: 17,
			que: "What is an attribute of a Tag? Give example of commonly used attributes of a Tag.",
			ans: "HTML tags contains attributes which provides extra bit of informations. The attributes appear inside the opening tag. An attribute has an attribute name and an attribute value."
		},
		{
			index: 18,
			que: "Describe the difference among HTML element,tags and attribute.",
		        ans: "<b>HTML elements: </b><br> An element in HTML represents some kind of structure or semantics and generally consists of a start tag, content, and an end tag. The following is a paragraph element: <pre>&lt;p&gt;</pre> This is the content of the paragraph element.<pre>&lt;p\/&gt;</pre> <b>HTML TAG:</b><br> Tags are used to mark up the start and end of an HTML element.A start tag consists of an opening angle bracket (&lt;) followed by the element name, zero or more space separated attribute\/value pairs, and a closing angle bracket (&gt;).A start tag with no attributes: <pre>&lt;h1&gt;</pre> A start tag with an attribute:<pre>&lt;p class=\"info\"&gt;</pre> A end tag <pre>&lt;h2\/&gt;</pre> There are some void tags also . <pre>&lt;br&gt;</pre> <b>HTML ATTRIBUTES:</b> <br> An attribute defines a property for an element, consists of an attribute\/value pair, and appears within the element's start tag. An element's start tag may contain any number of space separated attribute\/value pairs. The most popular misuse of the term <b>tag</b> is referring to alt attributes as <b>alt</b> tags. There is no such thing in HTML. Alt is an attribute, not a tag. Suppose <br> <pre>&lt;img src=\"foobar.gif\" alt=\"A\" foo can be balanced on a bar by placing its fubar on the bar's foobar.&gt;</pre> here <b>alt</b> is an attribute. <pre>&copy;shibbir</pre>"
		}


	];


	ansFact.getAnsOfQues = function(){
		return queAndAns;
	};

	return ansFact;


})
;
