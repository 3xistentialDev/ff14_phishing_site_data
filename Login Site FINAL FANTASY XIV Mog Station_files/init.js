
(function($) {
	// プルダウンアニメーションの初期化
	$(function() {
		// ポップアップ初期化 20130809追加・修正
		$("a.mogpop").mogpop();
		// ポップアップ初期化 20141219追加・修正
		$("a.mogpop_inline").mogpop_inline();
		// メインメニュープルダウン
		$(".dropdown_box").dropdown();
		// 言語切り替えプルダウン
		$('.dropdown_trigger_box').dropdown({mouse_click:true});
		// ツールチップ
		$('.tooltip').tooltip();
	});
})(jQuery);