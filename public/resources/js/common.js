$(function(){
	//グローバルナビの<li>にclass="visiting"を追加
	/*thisURL = location.href;
	$('#gnav li a').each(function(){
		var href = $(this).attr('href');
		if(href == thisURL){
			$(this).addClass('visiting');
		}
	});*/
	
	// ページ内スムーススクロール
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
   
   //外部リンクにtarget="_blank"を追加
   $('a[href^=http],a[target=_blank]').each(function(){
   		$(this).attr('target','_blank');
   		if($(this).parents().is('#siteContents') & !$(this).parents().is('#index')){
   			$(this).after('<img src="resources/img/externalLink_icon.gif" alt="(外部リンク)" style="vertical-align:text-top;margin:0 5px;" />');
   		}
	});

	//load SNS LINKS
	$('body').prepend('<!--Twitter--><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'+'<!--facebook--><div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>'+'<!--hatebu--><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>'+'<!--G-plus--><script type="text/javascript">window.___gcfg = {lang: "ja"};(function() {var po = document.createElement("script");po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po, s);})();</script>');
	
})

