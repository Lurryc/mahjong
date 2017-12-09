
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"keyboard/bin/keyboard/keyboard.js",
	"promise/promise.js",
	"bin-debug/core/scene/Scene.js",
	"bin-debug/core/socket/packet/Packet.js",
	"bin-debug/core/card/CardBase.js",
	"bin-debug/core/scene/SceneManager.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_BaseActionPacket.js",
	"bin-debug/core/ui/ShowLayer.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_LaunchPaiPacket.js",
	"bin-debug/core/card/HuaCard.js",
	"bin-debug/core/card/JianCard.js",
	"bin-debug/core/card/TiaoCard.js",
	"bin-debug/core/card/TongCard.js",
	"bin-debug/core/card/WanCard.js",
	"bin-debug/core/event/GameHandle.js",
	"bin-debug/core/event/GameMessage.js",
	"bin-debug/core/event/GamePoster.js",
	"bin-debug/core/play/Player.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/core/socket/GameByteArray.js",
	"bin-debug/core/socket/GameProtocol.js",
	"bin-debug/core/socket/GameSocket.js",
	"bin-debug/core/socket/packet/C2s_CreateRoomPacket.js",
	"bin-debug/core/socket/packet/C2s_HeartPacket.js",
	"bin-debug/core/socket/packet/C2s_JionRoomPacket.js",
	"bin-debug/core/socket/packet/C2s_LoginPacket.js",
	"bin-debug/core/socket/packet/C2s_ReadyActivePacket.js",
	"bin-debug/core/socket/packet/C2s_RoomInfoPacket.js",
	"bin-debug/core/socket/packet/C2s_UserInfoPacket.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/core/card/CardGroup.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_EatPaiPacket.js",
	"bin-debug/util/Utils.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_PlayHandPacket.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_ReadyPacket.js",
	"bin-debug/core/socket/packet/actionPacket/C2s_TouchPacket.js",
	"bin-debug/core/ui/Button.js",
	"bin-debug/core/ui/Card.js",
	"bin-debug/core/card/FengCard.js",
	"bin-debug/module/ActionMoudle.js",
	"bin-debug/module/CreateRoomMoudle.js",
	"bin-debug/module/JoinRoomMoudle.js",
	"bin-debug/module/LoginNetMoudle.js",
	"bin-debug/module/RoomMoudle.js",
	"bin-debug/play/CardManager.js",
	"bin-debug/play/GameManager.js",
	"bin-debug/scene/CardGroupLR.js",
	"bin-debug/scene/CardGroupUd.js",
	"bin-debug/scene/CreateRoomLayer.js",
	"bin-debug/scene/GameInitLayer.js",
	"bin-debug/scene/GameSceneManager.js",
	"bin-debug/scene/HallScene.js",
	"bin-debug/scene/HandCardDown.js",
	"bin-debug/scene/JoinRoomLayer.js",
	"bin-debug/scene/LaunchPaiLayer.js",
	"bin-debug/scene/LoadingScene.js",
	"bin-debug/scene/LoginScene.js",
	"bin-debug/scene/MainScene.js",
	"bin-debug/scene/Photo.js",
	"bin-debug/scene/ShowTip.js",
	"bin-debug/scene/MainScene/PhotoScene.js",
	"bin-debug/util/Progress.js",
	"bin-debug/util/ProgressAnimation.js",
	"bin-debug/LoadingUI.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};