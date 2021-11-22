(function($) {
	// エラー
	var Errors = {
		UNDEFINED_URL: "URLが指定されていません",
		UNDEFINED_ID: "IDが指定されていません",
		AJAX_ERROR: "通信に失敗しました"
	}

	// もぐポップ
	var MogPop = function(elm, opts) {
		var obj = $(elm);

		// リンクのクリック
		obj.click(function() {
			var url = $(this).attr("data-url");
			if (url === "" || url === undefined) {
				return obj.trigger("urlError");
			}
			// オーバーレイの表示
			obj.trigger("showOverlay", {url:url});
		});

		// URL未指定エラー
		obj.bind("urlError", function() {
			$.error(Errors.UNDEFINED_URL);
		});

		// オーバーレイの表示
		obj.bind("showOverlay", function(e, data) {
			// 表示
			showOverlay(200, function() {
				// 指定のURLにアクセスする
				obj.trigger("ajaxRequest", {url:data.url});
			});
		});

		// 指定のURLにアクセスする
		obj.bind("ajaxRequest", function(e, data) {
			// 指定されたURLに問い合わせ
			$.ajax({
				url: data.url,
				success: function(data) {
					// 通信成功
					obj.trigger("ajaxSuccess", {data:data});
				},
				error: function() {
					// 通信失敗
					obj.trigger("ajaxError");
				}
			});
		});

		// 通信成功
		obj.bind("ajaxSuccess", function(e, data) {
			updateContainer(data);
			showContainer();
		});

		// 通信失敗
		obj.bind("ajaxError", function(e) {
			$.error(Errors.AJAX_ERROR);
		});
	}
	// もぐポップ(inline)
	var MogPop_inline = function(elm, opts) {
		var obj = $(elm);

		// リンクのクリック
		obj.click(function() {
			var dataid = $(this).attr("data-id");
			if (dataid === "" || dataid === undefined) {
				return obj.trigger("idError");
			}
			// オーバーレイの表示
			obj.trigger("showOverlay", {dataid:dataid});
		});

		// URL未指定エラー
		obj.bind("idError", function() {
			$.error(Errors.UNDEFINED_ID);
		});

		// オーバーレイの表示
		obj.bind("showOverlay", function(e, data) {
			// 表示
			showOverlay(200, function() {
				// 指定のURLにアクセスする
				obj.trigger("getHtml", {dataid:data.dataid});
			});
		});

		// 指定のURLにアクセスする
		obj.bind("getHtml", function(e, data) {
			//HTML取得
			var htmldata = $('#'+data.dataid).html();
			obj.trigger("getSuccess", {data:htmldata});
		});

		// 通信成功
		obj.bind("getSuccess", function(e, data) {
			updateContainer(data);
			showContainer();
		});
	}

	/**
	 * オーバーレイ
	 */
	overlay = null;

	// オーバーレイの生成
	createOverlay = function() {
		// オーバーレイの初期化
		overlay = $("<div/>")
		.addClass("mog_overlay")
		.hide()
		.css({
			"position": "absolute",
			"backgroundColor": "#000",
			"zIndex": "99"
		})
		.click(hideMogPop);

		$(window).resize(updateOverlay);
		$(window).scroll(updateOverlay);
		return overlay;
	}

	// オーバーレイをウィンドウサイズに追従させる
	updateOverlay = function() {
		var win = $(window);
		overlay.width(win.width() + win.scrollLeft());
		overlay.height(win.height() + win.scrollTop());
	}

	// オーバーレイの表示
	showOverlay = function(duration, complete) {
		updateOverlay();
		overlay.css({
			"top": 0,
			"left": 0,
			"opacity": 0,
			"display":"block"});
		overlay.animate(
			{"opacity":0.6},
			{
				"duration": duration,
				"easing": "linear",
				complete: complete
			});
	}

	// オーバーレイの非表示
	hideOverlay = function() {
		overlay.hide();
	}

	/**
	 * コンテナ
	 */
	container = null;

	// コンテナの生成
	createContainer = function() {
		container = $("<div/>")
		.addClass("mog_container")
		.hide()
		.css({
			"position": "absolute",
			"zIndex": "100"
		});
		return container;
	}

	// コンテナのアップデート
	updateContainer = function(data) {
		var win = $(window);
		// HTML要素を入れ替え
		container.html(data.data);
		// コンテナの透明度を一時０に
		container.css({
			"opacity": 0,
			"top": 0,
			"left": 0
		});
		// 表示
		container.show();
		// 要素の最初の子を取得
		var child = container.children(":first");
		// トップ、レフトにスクロール位置を代入
		var top = win.scrollTop();
		var left = win.scrollLeft();

		setTimeout(function() {
			// ウィンドウサイズ
			var ww = win.width();
			var wh = win.height();
			// 子要素サイズ
			var cw = child.width();
			var ch = child.height();

			// ウィンドウサイズが子要素の幅より狭ければ
			if (ww < cw) {
				// スクロール位置を代入
				container.css("left", left);
			}
			else {
				container.css("left", left + (ww - cw) / 2);
			}
			// ウィンドウサイズが子要素の高さより低ければ
			if (wh < ch) {
				container.css("top", top);
			}
			else {
				container.css("top", (top + (wh - ch)/ 2) );
			}
		}, 100);
	}

	showContainer = function() {
		setTimeout(function(){
			container.css("opacity", 1);
			updateOverlay();
		}, 100);
	}

	// コンテナの非表示
	hideContainer = function() {
		container.hide();
	}

	// ポップアップの非表示
	hideMogPop = function() {
		hideOverlay();
		hideContainer();
	}

	$.fn.mogpop = function(opts) {
		// .mogpopがヒットした場合のみ処理を続ける
		if (this.length > 0) {

			// オーバーレイとコンテナをアペンド
			$(document.body).append(createOverlay());
			$(document.body).append(createContainer());

			// a.mogpopの処理へ
			return this.each(function(key, val) {
				var obj = $(this);
				if (obj.data("MogPop")) {
					return obj.data("MogPop");
				}
				obj.data("MogPop", new MogPop(this, opts));
			});
		}
	}

	$.fn.mogpop_inline = function(opts) {
		// .mogpop_inlineがヒットした場合のみ処理を続ける
		if (this.length > 0) {

			// オーバーレイとコンテナをアペンド
			$(document.body).append(createOverlay());
			$(document.body).append(createContainer());

			// a.mogpop_inlineの処理へ
			return this.each(function(key, val) {
				var obj = $(this);
				if (obj.data("MogPop_inline")) {
					return obj.data("MogPop_inline");
				}
				obj.data("MogPop_inline", new MogPop_inline(this, opts));
			});
		}
	}
	// もぐポップの非表示
	$.hideMogPop = function() {
		hideMogPop();
	}
})(jQuery);

var hidePop = $.hideMogPop;