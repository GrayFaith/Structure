#


##目录结构:

	WebApp/
		|_WEB-INF/
			|_lib/
			|_web.xml
		|_Resources/
			|_Import/
				|_CustomCSS/
				|_CustomImages/
				|_CustomJavaScript/
				|_Commons/
					|_CSS/
					|_Fonts/
					|_Images/
					|_JavaScript/
			|_ReadMe.md

##Resources:

###Import

####Custom*/

`Custom*/`目录都为用户自定义的文件

自定义的目录都只存放用来被其他页面

引用的资源文件.

比如

`CustomCSS`用来存放用户自定义的CSS文件

`CustomImages`用来存放用户自定义的图片文件

`CustomJavaScript`用来存放用户自定义的JS脚本文件

####Commons/*

`Commons/*`目录都为用户从开源项目处获取到的文件

存放例如

`Jquery`

`JqueryUI`

`JqGrid`

`BoopStrap`

等的引用文件

存在多个版本的情况下请采用例如

	Jquery/
		|_Jquery3.3.1/
		|_Jquery1.12.1/
		|_Jquery2.x.x/
		|_......

的方式,以便更好的维护

###ReadMe.md

	Read this page.