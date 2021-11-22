/**
 * ロードストーンで使用されているプラグインを一部コピー
 */
(function($) {
	/*-------------------------------------------------------------------------
	 * dropdown
	 * ------------------------------------------------------------------------ */
	$.fn.dropdown=function(options){
		var options=$.extend({mouse_click:false},options);
		return this.each(function(){
			var elem=$(this),option=options,target=elem.find('.dropdown'),_trigger,originalPos,onFlg=true,tooltipInit=true;
			target.css({opacity:0});
			originalPos=target.css('top').replace('px','');
			target.css({display:"none"});
			/* Animation
			 ---------------------------------------- */
			function animateTo(onFlg){
				if(onFlg){
					elem.find('a').addClass('press');
					target.css({display:'block',top:originalPos-5+'px'});
					target.stop().animate({'top':originalPos+'px','opacity':1},200,'linear');
				}else{
					elem.find('a').removeClass('press');
					target.stop().animate({'top':originalPos-5+'px','opacity':0},200,'linear',function(){
						target.css({display:'none'});
					});
				}
			}
			/*ie10 Handler
			 ---------------------------------------- */
			 if( navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1 && f_pass){
				 if(option.mouse_click){
					_trigger=elem.find('.dropdown_trigger');
					_trigger.bind("MSPointerDown", function(){PointerDown()});
				 }else{
					 this.addEventListener("MSPointerDown", PointerDown, false);
				 }
				function PointerDown(){
					if(onFlg){
						animateTo(onFlg);
						onFlg=false;
					}else{
						animateTo(onFlg);
						onFlg=true;
					}
				};
			}
			/* Hover Handler 
			 ---------------------------------------- */
			else if(!option.mouse_click){
				elem.hover(function(){
					animateTo(onFlg);
					onFlg=false;
				},function(){
					animateTo(onFlg);
					onFlg=true;
				});
			/* Click Handler
			 ---------------------------------------- */
			}else{
				_trigger=elem.find('.dropdown_trigger');
				_trigger.unbind("MSPointerDown");
				_trigger.click(function(){
					if(onFlg){
						animateTo(onFlg);
						onFlg=false;
					}else{
						animateTo(onFlg);
						onFlg=true;
					}
				});
			}
		});
	};
	/*-------------------------------------------------------------------------
	 * tooltip
	 * ------------------------------------------------------------------------ */
	$.fn.tooltip=function(){
		return this.each(function(){
			var $this=$(this),$tooltipContent,_title,source='';
			source+='<div class="tooltip_content">'+
							'<div class="tooltip_grid_header_left"><div class="tooltip_grid_header_right"></div></div>'+
							'<div class="tooltip_grid_body_left"><div class="tooltip_grid_body_right clearfix">'+
							'</div></div>'+
							'<div class="tooltip_grid_footer_left"><div class="tooltip_grid_footer_right"></div></div>'+
							'</div>';
			$('body').append(source);
			$tooltipContent=$('.tooltip_content');
			if($tooltipContent.length!=1){
				$tooltipContent.eq(1).remove();
			}
			
			$tooltipContent.css({position:'fixed',display:'none'});
			
			$this.hover(function(){
				_title=$(this).attr('title');
				$tooltipContent.stop().css({display:'block',opacity:1}).find('.tooltip_grid_body_right').html(_title);
				$(this).attr('title','');
				if($(this).find('a').length!=0){
					$(this).find('a').attr('title','');
				}
			},function(){
				$(this).attr('title',_title);
				if($(this).find('a').length!=0){
					$(this).find('a').attr('title',_title);
				}
				$tooltipContent.fadeOut(500);
			});
			$this.mousemove(function(e){
				var posTop=e.clientY+($tooltipContent.height()-5),
						posLeft=e.clientX;
				if(posLeft+$tooltipContent.outerWidth()>$(window).width()){
					posTop=e.clientY+($tooltipContent.height());
					posLeft=posLeft-((posLeft+$tooltipContent.outerWidth()-$(window).width())+10);
				}
				$tooltipContent.css({top:posTop+'px',left:posLeft+'px'});
			});
			
		});
	};
})(jQuery);
