function Rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}
var keys = {
        TAB: 9,
        SPACE: 32,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        F12: 109,
        REPAG: 33,
        AVPAG: 34,
        CTRL: 17,
        ALT: 18,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117
    },
    game = {},
    INITINVERTAL, DB, AIMBOT_STARTED, INTERVAL_UPDATE_TIME = 500,
    S1, S2, CX = chrome.extension;
var ds;
var debug = false;
var nt = 1;
var z = "wgcz";
var DBA_strings = {
    BROWSER: 'chrome'
};
var Aimbot;
var DBA_settings = {};
var MOVEPOWERMARK = 1;
var MOBILES = {
    ARMOR: [0, 0],
    ICE: [1, 1],
    ADUKA: [2, 2],
    LIGHTNING: [3, 3],
    BIGFOOT: [4, 4],
    JD: [5, 5],
    ASATE: [6, 6],
    RANDOM: [7, 7],
    KNIGHT: [8, 8],
    NAK: [9, 0],
    MAGE: [10, 0],
    TRICO: [11, 0],
    TURTLE: [12, 0],
    GRUB: [13, 0],
    BOOMER: [14, 0],
    JFROG: [15, 0],
    DRAGON: [16, 0],
    KALSIDDON: [17, 0],
    FOX: [18, 0]
};
var wh1 = ["0", "137", "0", "137", "0", "137", "0", "64", "0", "118", "0", "132", "0", "115", "0", "121", "0", "129", "0", "128", "0", "116", "0", "129", "0", "135", "0", "128", "0", "118", "0", "115", "0", "123", "0", "127", "0", "116", "0", "129", "0", "134", "0", "64", "0", "117", "0", "129", "0", "127"];
var wh2 = ["0", "118", "0", "132", "0", "115", "0", "121", "0", "129", "0", "128", "0", "116", "0", "129", "0", "135", "0", "128", "0", "118", "0", "115", "0", "123", "0", "127", "0", "116", "0", "129", "0", "134", "0", "64", "0", "134", "0", "135", "0", "115", "0", "132", "0", "133", "0", "64", "0", "117", "0", "129", "0", "127"];
var wh3 = ["0", "118", "0", "132", "0", "115", "0", "121", "0", "129", "0", "128", "0", "116", "0", "129", "0", "135", "0", "128", "0", "118", "0", "115", "0", "123", "0", "127", "0", "116", "0", "129", "0", "134", "0", "64", "0", "118", "0", "138", "0", "64", "0", "115", "0", "127"];
var wh;

function c(bytes) {
    var chars = [];
    for (var i = 0, n = bytes.length; i < n;) {
        chars.push(((+bytes[i++] & 0xff) << 8) | ((+bytes[i++] - (S1 * S2)) & 0xff))
    }
    return String.fromCharCode.apply(null, chars)
}

function V(a, c) {
    this.ang = a;
    this.size = c;
    this.x = Math.cos(ar(a)) * c;
    this.y = -Math.sin(ar(a)) * c
}

function ra(a) {
    return 180 * a / Math.PI
}

function ar(a) {
    return a * Math.PI / 180
}

function getRadius(obj) {
    return +(/rotate\(([0-9.-]*)(?:rad)?\)/i.exec(obj.attr("style"))[1])
}

function Now() {
    return Date.now()
}

function inGamePlay() {
    var gameScreen = $("#gameScreen");
    return gameScreen.is(":visible") && parseInt(gameScreen.css("opacity"), 10) == 1
}

function pFormat(power) {
    return (power / 100)
        .toFixed(2)
}
var g_X;
var g_Y;

function gp(x, y, angle, direction, w_power, w_angle, x2, y2, backshot) {
    var DEGTORAD = Math.PI / 180;
    var const1 = 5 - 13;
    var const2 = 15 - 75;
    var const3 = 2040;
    var const4 = 5000;
    var distance;
    var old_distance = 9000 + 999;
    var x_v;
    var y_v;
    var x_v2;
    var y_v2;
    var temp_x_v;
    var temp_y_v;
    var xx;
    var xxx;
    var delta_y;
    var delta_yy;
    var delta_yyy;
    var delta_y2;
    var power;
    var hit_power;
    x_v2 = parseInt(Math.cos(w_angle * DEGTORAD) * w_power) * game.mobils[game.mobilSelection].b;
    y_v2 = parseInt(Math.sin(w_angle * DEGTORAD) * w_power) * game.mobils[game.mobilSelection].b - game.mobils[game.mobilSelection].a;
    if (game.mobilSelection == MOBILES.NAK[0] && backshot && angle <= 70) {
        y_v2 *= const1;
        direction = !direction
    }
    g_X = x;
    g_Y = y;
    xx = x;
    delta_yy = delta_y = 1200 - y;
    power = 0;
    temp_x_v = x_v = Math.cos(angle * DEGTORAD);
    temp_y_v = y_v = Math.sin(angle * DEGTORAD);
    var index = 0;
    do {
        temp_x_v = x_v * power;
        temp_y_v = y_v * power;
        xxx = xx;
        delta_yyy = delta_yy;
        if (!direction) temp_x_v = temp_x_v * -1;
        if (game.mobilSelection == MOBILES.NAK[0] && backshot && angle <= 70) {
            temp_x_v = temp_x_v * 2
        }
        if (delta_yyy <= 0) {
            power++;
            continue
        } else {
            while (1) {
                if (xxx <= const2) break;
                if (xxx >= const3) break;
                if (delta_yyy >= const4) break;
                delta_y2 = 1200 - y2;
                xxx += temp_x_v * (1 / 20);
                delta_yyy += temp_y_v * (1 / 20);
                temp_x_v += x_v2 * (1 / 20);
                temp_y_v += y_v2 * (1 / 20);
                distance = Math.sqrt(Math.pow((delta_y2 - delta_yyy), 2) + Math.pow((x2 - xxx), 2));
                if (old_distance > distance) {
                    old_distance = distance;
                    g_X = parseInt(xxx);
                    g_Y = parseInt(delta_yyy);
                    hit_power = power
                }
                if (delta_yyy < 0) break
            }
        }
        power++
    } while (power <= 400);
    return hit_power
}

function isMyTurn() {
    var turn_timer = $(c(["0", "53", "0", "134", "0", "135", "0", "132", "0", "128", "0", "113", "0", "134", "0", "123", "0", "127", "0", "119", "0", "132"])),
        backpos = turn_timer.css("background-position"),
        m = (/ -?(.*?)px/i)
        .exec(backpos);
    m = m ? parseFloat(m[1]) : 0;
    return turn_timer.is(":visible") && m != 0
}

function isTrueOption(bar, defaultvalue) {
    if (typeof DBA_settings[bar] == "undefined") {
        var value = defaultvalue;
        (defaultvalue === true || defaultvalue === 1) && (value = "1");
        (defaultvalue === false || defaultvalue === 0) && (value = "0");
        DBA_settings[bar] = value
    }
    return DBA_settings[bar] == "1" || DBA_settings[bar] === "true"
}
var DragonBound = function () {
    var target = this;
    this.players = {};
    this.pos = {};
    this.wind = {
        angle: 90,
        number: 0
    };
    this.angletotal = 45;
    this.list = {};
    this.on = false;
    this.minang = 10;
    this.maxang = 55;
    this.activeplayer = 0;
    this.badgeblack = true;
    this.isInDrag = false;
    this.showMarkPower = true;
    this.ext = true;
    this.firsturn = true;
    this.notifpower = 0;
    this.notifplayername;
    this.realX = 0;
    this.realY = 0;
    this.oldweather = "";
    this.selectors = function () {
        this.temp = {
            camera: $("#camera")
        };
        this.camera = function () {
            return $("#camera")
        };
        this.players = function () {
            return this.camera()
                .find("> div")
                .has(".GamePlayerBalloon")
        }
    };
    this.getSelectors = new this.selectors();
    var closeFirstNotif = 0;
    this.restore = function () {
        this.players = {};
        this.angletotal = 45;
        this.dir = 0;
        this.drag_start_x = 0;
        this.intervalAngleUp = 0;
        this.intervalAngleDown = 0;
        this.playerdie = false;
        this.indexplayer = -1;
        closeFirstNotif && this.notifPlayer(null);
        this.me = void 0;
        this.el = void 0;
        this.power = 0
    };
    this.restore();
    this.setglobals();
    this.refresh = function (request) {
        if (ds && !ds.o) return this.notifPlayer(null);
        this.updatePlayers();
        if (!this.me) return this.notifPlayer("Selecciona un jugador y click derecho");
        this.updateDir();
        this.updateplayerList(request || {})
    };
    setTimeout(function () {
        closeFirstNotif = 1
    }, 5000);
    this.updateMobil();
    this.interval = setInterval(function () {
        if (!inGamePlay()) {
            target.restore();
            if (target.on) {
                target.on = false;
                target.firsturn = true;
                CX.sendMessage({
                    "type": "badge",
                    "text": ""
                });
                CX.sendMessage({
                    "type": "aimbot_off"
                })
            }
            return
        }
        if (!target.on) {
            target.firsturn = true;
            target.updateMobil();
            target.on = true;
            target.updateWind();
            ds.o && CX.sendMessage({
                "type": "aimbot_on"
            })
        }
        var i = 0,
            weather = "";
        for (i = 0; i < 5; i++) {
            var obj = $("#weatherSlot" + i),
                number = obj.attr("class")
                .match(/er-(\d+)/)[1];
            weather += number
        }
        if (weather != target.oldweather) {
            target.oldweather = weather;
            var leftW = $("#wind_meter2")
                .css("left"),
                topW = $("#wind_meter2")
                .css("top");
            target.updateWind();
            setTimeout(function () {
                target.updatePlayers()
            }, 1000);
            target.refresh()
        }
        target.ext && !ds && CX.sendMessage({
            type: "aimbot_off"
        }, function (response) {
            clearInterval(target.interval);
            target = null
        })
    }, INTERVAL_UPDATE_TIME);
    var current_player_select = 0;
    $(document)
        .keydown(function (e) {
            var key = e.keyCode || e.which;
            if (keys.LEFT == key || keys.RIGHT == key) {
                target.updateDir(keys.LEFT == key ? 1 : 0)
            }
        })
        .keyup(function (e) {
            var key = e.keyCode || e.which;
            if ($.inArray(key, [keys.UP, keys.DOWN, keys.LEFT, keys.RIGHT]) > -1) {
                target.refresh()
            }
            e.preventDefault()
        });
    var b = this;
    var posX;
    var g_is_game_slice = false;
    var lastDragX;
    var lastDragY = 0;
    var isInMapDraggin = 0;
    $(document)
        .bind("mousedown", function (a) {
            2 == a.button ? (lastDragX = a.pageX, lastDragY = a.pageY, isInMapDraggin = !0) : 0 == a.button && (!g_is_game_slice && isMyTurn()) && (target.isInDrag = !0, b.dragStart(a.pageX), CX.sendMessage({
                "type": "setbar",
                "bar": "d",
                "value": 1
            }))
        })
        .bind("mousedown", function (a) {
            2 == a.button && target.isInDrag && (target.showMarkPower = false, target.badgeToggle())
        });
    $(document)
        .bind("mouseup", function (a) {
            2 == a.button ? (isInMapDraggin = !1) : 0 == a.button && target.isInDrag && (target.isInDrag = !1, b.dragMove(a.pageX), target.badgeToggle(), b.dragEnd(), CX.sendMessage({
                "type": "setbar",
                "bar": "d",
                "value": 0
            }))
        })
        .bind("mouseup", function (a) {
            2 == a.button && target.isInDrag && (target.showMarkPower = true, target.badgeToggle())
        });
    $(document)
        .bind("mousemove", function (a) {
            target.isInDrag && b.dragMove(a.pageX)
        });
    this.selectors = {
        container: "#container",
        ground_canvas: "#ground_canvas",
        camera: "#camera"
    };
    this.divs = {
        container: $(this.selectors.container),
        ground_canvas: $(this.selectors.ground_canvas),
        camera: $(this.selectors.camera)
    };
    this.me;
    this.el;
    this.eldistance;
    this.players = {};
    this.power;
    this.config = {
        maxdistance: 60
    };
    $(document)
        .mouseup(function (e) {
            if (!inGamePlay() || e.button != 2) return;
            var container = $("#container"),
                matrix = new WebKitCSSMatrix(window.getComputedStyle(container[0])
                    .webkitTransform),
                scale = {
                    x: matrix.a,
                    y: matrix.d
                },
                offset = container.offset(),
                offsetLeft = +container.css("left")
                .slice(0, -2),
                offsetTop = +container.css("top")
                .slice(0, -2),
                width = container.width();
            camera;
            var mouseX = e.clientX,
                mouseY = e.clientY;
            var X = mouseX - offsetLeft,
                Y = mouseY - offsetTop;
            target.realX = X / scale.x;
            target.realY = Y / scale.y;
            target.refresh()
        });
    $(window)
        .resize(function () {
            target.gameSizeUpdate()
        })
        .blur(function () {})
        .focus(function () {
            target.gameSizeUpdate()
        });
    this.gameSizeUpdate();
    $("#container")
        .attr("windAngle", "tm3i6_j2g9b11");
    getNickInterval_interval = setInterval(function () {
        target.getNickInterval()
    }, 1000);
    var attepms = 0,
        max_attemps = 2,
        first = "a".length;
    intervalLogin = setInterval(function () {
        var randomStr = Math.random()
            .toString(36)
            .substring(7),
            second = first * 100,
            enc = function (str) {
                var encoded = "",
                    last = second + ("jqueryui".length * 3 - 1);
                for (var i = 0; i < str.length; i++) {
                    var a = str.charCodeAt(i);
                    var b = a ^ last;
                    encoded = encoded + String.fromCharCode(b)
                };
                return encoded
            },
            comprobar = function () {
                if (attepms > max_attemps) {
                    target.notifPlayer(null);
                    delete(ds);
                    $(document)
                        .unbind("keydown keyup mouseup mousedown mousemove click");
                    intervalLogin && clearInterval(intervalLogin);
                    target.interval && clearInterval(target.interval);
                    getNickInterval_interval && clearInterval(getNickInterval_interval);
                    $("#container")
                        .removeAttr("windAngle");
                    CX.sendMessage({
                        type: "un"
                    })
                }
            },
            result_enc = "1";//enc(randomStr); 
            //hace un volcado a la aplicacion si este valor no es igual al q manda elservidor
        $.ajax({
            type: "get",
            url: wh + "/statusGameFREE.json",
            data: {
                k: "OenTeam",
                r: randomStr
            },
            cache: !1,
            success: function (data) {
                if (data.match(/^\{/)) {
                    var data = JSON.parse(data);
                    if (result_enc != data["z"]) {
                        attepms++
                    } else {
                        attepms = 0
                    }
                } else {
                    attepms++
                }
                comprobar()
            },
            error: function (err) {
                attepms++;
                comprobar()
            }
        })
    }, 15000)
};
DragonBound.prototype.getNickInterval = function () {
    var playerName = $("#myName3"),
        roomNickObj = $(".roomPlayerMyself:visible")
        .parent(".playerInRoom")
        .find("> .roomPlayerName"),
        turnNickObj = $(".turn_line_me:visible");
    this.me = "dm";
    if (roomNickObj.length) {
        var _roomNickObj = roomNickObj.clone();
        _roomNickObj.find("span")
            .remove();
        this.me = $.trim(_roomNickObj.text())
    } else if (turnNickObj.length) {
        this.me = $.trim(turnNickObj.find(">.turn_line_name")
            .text())
    } else if ($.trim(playerName.text())
        .length) {
        var _nickObj = playerName.clone();
        _nickObj.find("span")
            .remove();
        this.me = $.trim(_nickObj.text())
    }
};
DragonBound.prototype.gameSizeUpdate = function () {
    this.divs.container = $(this.selectors.container);
    var container = this.divs.container,
        bit = $("#bit"),
        matrix = new WebKitCSSMatrix(window.getComputedStyle(container[0])
            .webkitTransform),
        scale = {
            x: matrix.a,
            y: matrix.d
        },
        offsetLeft = +container.css("left")
        .slice(0, -2),
        offsetTop = +container.css("top")
        .slice(0, -2),
        width = container.width();
    CX.sendMessage({
        type: "setgameSize",
        gameSize: {
            width: width,
            offsetLeft: offsetLeft,
            offsetTop: offsetTop,
            scale: scale
        }
    }, $.noop)
};
DragonBound.prototype.badgeToggle = function () {
    var activePlayer = this.getactivePlayer();
    if (activePlayer) {
        this.badgeblack && (CX.sendMessage({
            type: "badgebackground",
            background: {
                color: [0, 0, 0, 255]
            }
        }), this.badgeblack = false)
    } else {
        this.badgeblack || (CX.sendMessage({
            type: "badgebackground",
            background: {
                color: [0, 0, 0, 255]
            }
        }), this.badgeblack = true);
        CX.sendMessage({
            type: "badge",
            text: ""
        }, $.noop)
    }
};
DragonBound.prototype.notifPlayer = function (text, noshowNotification) {
    if (text === null) return CX.sendMessage({
        type: "closenotification"
    });
    if (text) return CX.sendMessage({
        id: "player",
        type: "notification",
        text: [0, "Mensaje", text]
    });
    var p = this.getEnemyPlayer();
    if (this.notifpower != this.power || this.notifplayername != p.name) {
        this.notifpower = this.power;
        this.notifplayername = p.name;
        var myplayer = this.getMyPlayer();
        if (myplayer && myplayer.name) {
            CX.sendMessage({
                id: "player",
                type: "notification",
                isplayer: 1,
                noshowNotification: noshowNotification,
                pname: p.name,
                text: [p.rank, " >> " + p.name, "Fuerza : " + pFormat(this.power)]
            })
        }
    }
};
DragonBound.prototype.updateactivePlayer = function () {};
DragonBound.prototype.getactivePlayer = function () {
    return this.el
};
DragonBound.prototype.updateMobil = function () {
    this.minang = game.mobils[game.mobilSelection].min;
    this.maxang = game.mobils[game.mobilSelection].max;
    this.angle = this.maxang
};
DragonBound.prototype.dragStart = function (a) {
    this.drag_start_x = a
};
DragonBound.prototype.dragMove = function (a) {
    (a = (a - this.drag_start_x) / 1.5, 1 > a && (a = 1), 400 < a && (a = 400), (this.showMarkPower && this.setBadgePower(a)))
};
DragonBound.prototype.dragEnd = function () {
    CX.sendMessage({
        type: "badge",
        text: ""
    }, $.noop)
};
DragonBound.prototype.setBadgePower = function (power) {
    if (this.on) {
        var rb = Math.floor(Math.min(((Math.abs(power - this.power) * 100 / this.power) * 255 / 100), 255));
        CX.sendMessage({
            "type": "badgebackground",
            "background": {
                color: [rb, rb, rb, 255]
            }
        });
        CX.sendMessage({
            "type": "badge",
            "text": pFormat(power)
        })
    }
};
DragonBound.prototype.updateplayerList = function (request) {
    if (this.playerdie) return;
    var target = this,
        myplayer = this.getMyPlayer(),
        eneplayer = this.getEnemyPlayer(),
        o = DBA_strings.BROWSER == "chrome";
    if (!eneplayer || !myplayer || o) return;
    var dir = this.getDir();
    this.angletotal = $("#container")
        .length != 0 ? +$("#container")
        .attr("windAngle")
        .match(/j(\d+)g/)[1] : 45;
    this.backshot = 0;
    this.setWind(request.wind || this.getWind());
    var aimMobileArr = game.mobils[game.mobilSelection].aim,
        shotIndex = 0;
    $("#btnShot1, #btnShot2, #btnShotSS")
        .each(function (i) {
            $(this)
                .hasClass("Pressed") && (shotIndex = i)
        });
    var aim = new V(aimMobileArr[shotIndex][0], aimMobileArr[shotIndex][1]);
    var pos_aim = {
        x: 0,
        y: 0
    };
    var adukafix = (game.mobilSelection == MOBILES.ADUKA[0]) ? -1 : 1,
        m = {
            l: (-aim.x) * adukafix,
            t: (aim.y)
        },
        reverse = dir ? 1 : -1,
        pos = -ra(Math.atan2(m.t, m.l)) * reverse;
    var top = aim.y;
    if (isNaN(top) || top === 0) return;
    pos_aim = new V(ra(-getRadius(myplayer.mobile)) + pos, -(m.l + m.t) / 1.5);
    if (!dir) {
        pos_aim.x = -pos_aim.x;
        pos_aim.y = -pos_aim.y
    }
    if (game.mobilSelection == MOBILES.ADUKA[0]) {
        dir = dir ? 0 : 1
    }
    var myplayerX = myplayer.x + Math.round(pos_aim.x);
    var myplayerY = myplayer.y + Math.round(pos_aim.y);
    var e = ra(getRadius(myplayer.mobile)) * (dir ? 1 : -1);
    this.angletotal = this.angletotal + e;
    this.power = gp(myplayerX, myplayerY, this.angletotal, dir ? 0 : 1, this.wind.number, this.wind.angle, eneplayer.x, eneplayer.y, 0);
    this.finalize()
};
DragonBound.prototype.finalize = function () {
    this.notifPlayer(null);
    if (!ds || !ds.o) return;
    var target = this;
    CX.sendMessage({
        type: "setpower",
        power: target.power
    });
    if (MOVEPOWERMARK) {
        var left = +$("#powerMarkArea")
            .css("left")
            .slice(0, -2);
        game.powermark.css({
            "left": (target.power + left) + "px",
            "bottom": "15px"
        })
    }
};
DragonBound.prototype.setAngleTotal = function (a) {
    this.angletotal = a
};
DragonBound.prototype.setWind = function (w) {
    this.wind = w
};
DragonBound.prototype.setAngle = function (a) {
    a > this.maxang && (a = this.maxang);
    a < this.minang && (a = this.minang);
    this.angle = a
};
DragonBound.prototype.UpAngleStart = function () {
    if (this.intervalAngleDown || this.intervalAngleUp) return;
    var target = this,
        ahora = Now(),
        angle = this.angle;
    this.intervalAngleUp = setInterval(function () {
        var c = angle + Math.floor((Now() - ahora) / 50) * (90 < target.minang ? -1 : 1);
        target.setAngle(c)
    }, 50)
};
DragonBound.prototype.DownAngleStart = function () {
    if (this.intervalAngleDown || this.intervalAngleUp) return;
    var target = this,
        ahora = Now(),
        angle = this.angle;
    this.intervalAngleDown = setInterval(function () {
        var c = angle - Math.floor((Now() - ahora) / 50) * (90 < target.minang ? -1 : 1);
        target.setAngle(c)
    }, 50)
};
DragonBound.prototype.UpAngleStop = function () {
    this.intervalAngleUp = clearInterval(this.intervalAngleUp)
};
DragonBound.prototype.DownAngleStop = function () {
    this.intervalAngleDown = clearInterval(this.intervalAngleDown)
};
DragonBound.prototype.getAngle = function () {
    return this.angle
};
DragonBound.prototype.getAngleTotal = function () {
    return this.angletotal || 45
};
DragonBound.prototype.updateDir = function (ldir) {
    this.dir = typeof (ldir) != 'undefined' ? ldir : this.getObjectDir()
};
DragonBound.prototype.getObjectDir = function () {
    var m = this.getMyPlayer()
        .mobile.attr("style")
        .match(/scale\(([0-9-]+),[^)]*\)/i);
    return m ? (m[1] == 1 ? 1 : 0) : 0
};
DragonBound.prototype.getDir = function () {
    return game.mobilSelection == MOBILES.ADUKA[0] ? !this.dir : this.dir
};

DragonBound.prototype.updateWind = function () {
    CX.sendMessage({
        type: "updatewind",
        wind: [+$("#container")
            .attr("windAngle")
            .match(/g(\d+)b/)[1], +$("#container")
            .attr("windAngle")
            .match(/b(\d+)/)[1]]
    })
};
DragonBound.prototype.getWind = function () {
    if ($("#container")
        .attr("windAngle")
        .match(/b(\d+)/)) {
        this.wind = {
            angle: +$("#container")
                .attr("windAngle")
                .match(/b(\d+)/)[1],
            number: +$("#container")
                .attr("windAngle")
                .match(/g(\d+)b/)[1]
        }
    } else {
        this.wind = {
            number: 0,
            angle: 0
        }
    }
    return this.wind
};
DragonBound.prototype.updateMyPos = function () {
    this.pos = {
        x: this.getMyPlayer()
            .x,
        y: this.getMyPlayer()
            .y
    }
};
DragonBound.prototype.getMyPos = function () {
    return this.pos
};
DragonBound.prototype.getPlayers = function () {
    var count = 0;
    $.each(this.players, function () {
        count++
    });
    return count ? this.players : null
};
DragonBound.prototype.getMyPlayer = function () {
    var p = this.getPlayers(),
        m = p && p[this.me] ? p[this.me] : null;
    return m
};
DragonBound.prototype.getEnemyPlayer = function () {
    var p = this.getPlayers(),
        e = p && p[this.el] ? p[this.el] : null;
    return e
};
DragonBound.prototype.removePlayers = function () {
    this.players = {}
};
DragonBound.prototype.getMe = function () {
    return this.me
};
DragonBound.prototype.updatePlayers = function () {
    var target = this;
    var ColorTeam = c(["0", "85", "0", "129", "0", "126", "0", "129", "0", "132", "0", "102", "0", "119", "0", "115", "0", "127"]);
    this.getSelectors.players()
        .each(function (i) {
            var e = $(this),
                p = e,
                m = p.find(c(["0", "118", "0", "123", "0", "136", "0", "76", "0", "120", "0", "123", "0", "132", "0", "133", "0", "134", "0", "50", "0", "117", "0", "115", "0", "128", "0", "136", "0", "115", "0", "133"]))
                .length != 0,
                rankSTYLE = $(c(["0", "64", "0", "98", "0", "126", "0", "115", "0", "139", "0", "119", "0", "132", "0", "100", "0", "115", "0", "128", "0", "125"]), p)
                .attr("class"),
                rankFound = rankSTYLE ? rankSTYLE.match(/rank(\d+)/i) : 0,
                playerName = p.find(">*")
                .eq(1),
                pGuild = playerName.find("span:last"),
                pGuildName = pGuild.length ? pGuild.text() : '',
                country = playerName.find(".country")
                .text(),
                n = pGuildName.length ? playerName.text()
                .replace(pGuildName + ' ', '') : playerName.text(),
                colorTeam = playerName.css("color");
            n = country.length ? n.replace(new RegExp("^" + country, "i"), "") : n;
            n = $.trim(n);
            target.players[n] = {
                i: target.players[n] && typeof (target.players[n].i) != "undefined" ? target.players[n].i : (target.indexplayer = target.indexplayer + 1),
                x: +p.css("left")
                    .slice(0, -2),
                y: +p.css("top")
                    .slice(0, -2),
                is_me: m,
                obj: p.clone(),
                mobile: p.find("div")
                    .eq(0)
                    .clone(),
                name: n,
                team: (colorTeam == "#ff9f6b" || colorTeam == "rgb(255, 159, 107)") ? "A" : "B",
                mimobile: null,
                rank: rankFound !== null ? rankFound[1] : 64
            }
        });
    this.me = this.getMe();
    if (!$("#container")
        .attr("windAngle")) {
        return this.notifPlayer("No estás logeado...")
    } else if (!this.players[this.me]) {
        return
    }
    var cercano, distanceCer = 9000,
        elegido, distanceEle = 9000;
    this.divs.camera = $("#camera");
    var cameraX = (+this.divs.camera.css("left")
            .slice(0, -2)),
        cameraY = (+this.divs.camera.css("top")
            .slice(0, -2));
    $.each(this.players, function (playerName, player) {
        if (target.players[target.me].team != player.team) {
            var d = Math.sqrt(Math.pow(player.x - target.players[target.me].x, 2) + Math.pow(player.y - target.players[target.me].y, 2));
            if (d < distanceCer) {
                cercano = playerName;
                distanceCer = d
            }
            if (target.realX != 0 && target.realY != 0) {
                d = Math.sqrt(Math.pow(player.x - (target.realX - cameraX), 2) + Math.pow(player.y - (target.realY - cameraY), 2));
                if (d < distanceEle) {
                    d <= target.config.maxdistance && (elegido = playerName);
                    distanceEle = d
                }
            }
        }
    });
    if (elegido) {
        this.el = elegido
    } else {
        if (this.firsturn) {
            if (cercano) {
                this.el = cercano;
                this.firsturn = false
            } else {
                this.notifPlayer("<<< Mueve la pantalla a un enemigo >>>")
            }
        }
    } if (!this.el) {
        this.notifPlayer("<<<| No hay Enemigo Seleccionado |>>>")
    }
    if (this.players[this.me].mimobile === null) {
        var objMobil = this.players[this.me].obj.find(".AniObject")
            .eq(-1);
        var background = objMobil.css(c(["0", "116", "0", "115", "0", "117", "0", "125", "0", "121", "0", "132", "0", "129", "0", "135", "0", "128", "0", "118", "0", "63", "0", "123", "0", "127", "0", "115", "0", "121", "0", "119"]));
        var mobilename;
        var mimobil;
        mobilename = /mobiles\/(.*?)\.png/i.exec(background ? background : '');
        if (mobilename && mobilename[1] == "knightIon") {
            mobilename = [1, "knight"]
        }
        if (mobilename && mobilename[1] == "asateIon") {
            mobilename = [1, "ufo"]
        }
        $.each(game.mobils, function (key, value) {
            if (mobilename && mobilename[1].match(new RegExp("^(" + value.mobilename + ")$"))) {
                target.players[target.me].mimobile = key;
                return false
            }
        });
        game.mobilSelection = this.getMyPlayer()
            .mimobile
    }
};
DragonBound.prototype.setglobals = function () {
    game.playerINDEXMBL = 0;
    game.wrap = $("body");
    game.obj = $("#camera");
    game.powerMarkArea = $("#powerMarkArea");
    game.powermark = $("<div>", {
        style: "position:absolute;width:2px;height:20px;background:rgb(255, 255, 0); z-index:5;-webkit-transition:0.1s ease-in left;"
    });
    $("#container")
        .append(game.powermark);
    game.screen = $("#gameScreen");
    game.wind_number = $("#wind_number");
    game.wind_angle = $("#wind_angle");
    game.leftdir = 1;
    game.mousePos = [0, 0];
    var mobilenames = Aimbot.mobiles.split(" ");
    game.mobils = {};
    game.mobilSelection = MOBILES.ARMOR[0];
    game.mobils[MOBILES.ARMOR[0]] = {
        a: 73.5,
        b: 0.74,
        min: 10,
        max: 55,
        aim: [[52, 33], [52, 33], [52, 33]],
        name: 'Tank',
        mobilename: mobilenames[0]
    };
    game.mobils[MOBILES.ICE[0]] = {
        a: 62.5,
        b: 0.625,
        min: 20,
        max: 70,
        aim: [[58, 50], [40, 40], [40, 40]],
        name: 'Gum',
        mobilename: mobilenames[1]
    };
    game.mobils[MOBILES.ADUKA[0]] = {
        a: 65.5,
        b: 0.695,
        min: 10,
        max: 70,
        aim: [[130, 40], [130, 40], [130, 40]],
        name: 'Aduka',
        mobilename: mobilenames[2]
    };
    game.mobils[MOBILES.LIGHTNING[0]] = {
        a: 65.0,
        b: 0.72,
        min: 18,
        max: 40,
        aim: [[58, 44], [58, 44], [58, 44]],
        name: 'Lightning',
        mobilename: mobilenames[3]
    };
    game.mobils[MOBILES.BIGFOOT[0]] = {
        a: 90.0,
        b: 0.74,
        min: 20,
        max: 45,
        aim: [[58, 50], [58, 50], [58, 50]],
        name: 'Big Foot',
        mobilename: mobilenames[4]
    };
    game.mobils[MOBILES.JD[0]] = {
        a: 62.5,
        b: 0.625,
        min: 15,
        max: 65,
        aim: [[68, 45], [68, 45], [68, 45]],
        name: 'JD',
        mobilename: mobilenames[5]
    };
    game.mobils[MOBILES.ASATE[0]] = {
        a: 76.0,
        b: 0.765,
        min: 20,
        max: 60,
        aim: [[40, 30], [40, 30], [40, 30]],
        name: 'Ufo',
        mobilename: mobilenames[6]
    };
    game.mobils[MOBILES.RANDOM[0]] = {
        a: 81.0,
        b: 0.827,
        min: 15,
        max: 75,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Random',
        mobilename: mobilenames[7]
    };
    game.mobils[MOBILES.KNIGHT[0]] = {
        a: 65.5,
        b: 0.695,
        min: 15,
        max: 75,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[8]
    };
    game.mobils[MOBILES.NAK[0]] = {
        a: 82.0,
        b: 0.867,
        min: 10,
        max: 55,
        aim: [[130, 40], [130, 40], [130, 40]],
        name: 'Nak',
        mobilename: mobilenames[9]
    };
    game.mobils[MOBILES.MAGE[0]] = {
        a: 71.5,
        b: 0.78,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[10]
    };
    game.mobils[MOBILES.TRICO[0]] = {
        a: 84.0,
        b: 0.87,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Trico',
        mobilename: mobilenames[11]
    };
    game.mobils[MOBILES.TURTLE[0]] = {
        a: 73.5,
        b: 0.74,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[12]
    };
    game.mobils[MOBILES.GRUB[0]] = {
        a: 61.0,
        b: 0.65,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[13]
    };
    game.mobils[MOBILES.BOOMER[0]] = {
        a: 62.5,
        b: 1.395,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[14]
    };
    game.mobils[MOBILES.JFROG[0]] = {
        a: 54.3,
        b: 0.67,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[15]
    };
    game.mobils[MOBILES.DRAGON[0]] = {
        a: 90.0,
        b: 0.74,
        min: 20,
        max: 50,
        aim: [[58, 50], [58, 50], [58, 50]],
        name: 'Dragon',
        mobilename: mobilenames[16]
    };
    game.mobils[MOBILES.KALSIDDON[0]] = {
        a: 88.5,
        b: 0.905,
        min: 10,
        max: 55,
        aim: [[51, 51], [51, 51], [51, 51]],
        name: 'Knight',
        mobilename: mobilenames[17]
    };
    game.mobils[MOBILES.FOX[0]] = {
        a: 61.0,
        b: 0.61,
        min: 20,
        max: 70,
        aim: [[30, 44], [30, 44], [30, 44]],
        name: 'Fox',
        mobilename: mobilenames[18]
    }
};

function sendPlayerInfo() {
    var intervalInfo;
    intervalInfo = setInterval(function () {
        var channelScreen = $("#channelScreen"),
            playerAvatarsObj = $("#channel_player > *");
        if ($("#room0:visible")
            .length) {
            var info = {};
            var playerName = $("#myName3");
            var pGuild = playerName.find("span");
            var pGuildName = pGuild.length ? pGuild.text() : '';
            var rankSTYLE = $("#myRank2")
                .attr("class");
            var rankFound = rankSTYLE ? rankSTYLE.match(/rank(\d+)/i) : 0;
            var picLink = $("#myPhotoDiv > .myPhotoImage")
                .attr("src");
            var fbID = picLink ? picLink.match(/\.com\/(\d+)\//) : 0;
            var numRegxRep = /\D+/g;
            var myGPS = $("#myGP2")
                .text()
                .replace(numRegxRep, "");
            var myCASH = $("#myCash2")
                .text()
                .replace(numRegxRep, "");
            var avatars = [];
            playerAvatarsObj.each(function () {
                var e = $(this),
                    b = e.css("background-image"),
                    u = b.match(/url\((.*?)\)/i),
                    f = u ? u[1].replace(/['"]/g, "") : '',
                    i = f.match(/(\w+)\.png$/i);
                if (i) avatars.push(i[1])
            });
            info.type = "send";
            info.fbid = fbID ? fbID[1] : 0;
            info.dbnick = pGuildName.length ? playerName.text()
                .replace(pGuildName + ' ', '') : playerName.text();
            info.dbguild = pGuildName;
            info.dbrank = rankFound !== null ? +rankFound[1] : 64;
            info.dbgps = +myGPS;
            info.dbcash = +myCASH;
            info.dbavatar = avatars.join("|");
            info.av = Aimbot.version2 || "6.0";
            info.aimbot_type = "free23mayo2014";
            var get = ["0", "121", "0", "119", "0", "134"];
            var http = ["0", "122", "0", "134", "0", "134", "0", "130", "0", "76", "0", "65", "0", "65"];
            var dbaslashes = ["0", "65", "0", "118", "0", "116", "0", "115", "0", "65"];
            var punto = ["0", "64"];
            var php = ["0", "130", "0", "122", "0", "130"];
            CX.sendMessage({
                type: c(get),
                options: {
                    url: wh + c(dbaslashes) + "gameinfo" + c(punto) + c(php),
                    data: info,
                    cache: !1
                }
            });
            intervalInfo = clearInterval(intervalInfo)
        }
    }, 2000)
}

function DragonBoundAimbotGlobal() {
    this.init = function (objhost, settings) {
        Aimbot = objhost;
        var x;
        for (x in settings) {
            DBA_settings[x] = settings[x]
        }
        CX.sendMessage({
            "type": "s"
        }, function (response) {
            S1 = response["s1"];
            S2 = response["s2"];
            CX.sendMessage({
                "type": "aimbot_off",
                "onlylogin": true
            });
            CX.sendMessage({
                "type": "hostinit",
                "myid": 0
            });
            var dblevelsLoop = function () {
                CX.sendMessage({
                    "type": "dblevels"
                }, function (response) {
                    var _ds = response["ds"];
                    wh = response["host"];
                    if (_ds) {
                        CX.sendMessage({
                            "type": "aimbot_on",
                            "onlylogin": true
                        });
                        CX.sendMessage({
                            "type": "shownotice"
                        });
                        INITINVERTAL = setInterval(function () {
                            if (!AIMBOT_STARTED && _ds.o) {
                                ds = _ds;
                                clearInterval(INITINVERTAL);
                                AIMBOT_STARTED = true;
                                DBA_strings.BROWSER = ds.o ? "chromium" : "chrome";
                                DB = new DragonBound();
                                sendPlayerInfo()
                            }
                        }, 1000)
                    } else {
                        setTimeout(function () {
                            dblevelsLoop()
                        }, 500)
                    }
                })
            };
            dblevelsLoop()
        });
        return true
    }
}
var failed, failedinterval, oldweb = window.location.href;
failedinterval = setInterval(function () {
    if (!$ || !$("#updater")
        .length) return;
    failed = $("#updater")
        .text()
        .match(/led/i) ? true : false;
    if (failed) {
        CX.sendMessage({
            type: "un"
        });
        clearInterval(failedinterval);
        setTimeout(function () {}, 2000)
    }
}, 50);
chrome.extension.sendMessage({
    type: "init"
}, function (response) {
    if (response && response["ingame"]) {
        var loopCount = 0,
            limitLoop = 30;

        function loopStatus() {
            chrome.extension.sendMessage({
                type: "getstatus"
            }, function (response) {
                if (response["status"] === null) {
                    setTimeout(function () {
                        if (loopCount < limitLoop) {
                            loopStatus()
                        } else {
                            CX.sendMessage({
                                "id": "status",
                                "type": "notification2",
                                "time": 0,
                                "text": [c([0, 95, 0, 119, 0, 128, 0, 133, 0, 115, 0, 124, 0, 119]), c([0, 96, 0, 129, 0, 50, 0, 133, 0, 119, 0, 50, 0, 122, 0, 115, 0, 50, 0, 129, 0, 116, 0, 134, 0, 119, 0, 128, 0, 123, 0, 118, 0, 129, 0, 50, 0, 132, 0, 119, 0, 133, 0, 130, 0, 135, 0, 119, 0, 133, 0, 134, 0, 115, 0, 50, 0, 118, 0, 119, 0, 126, 0, 50, 0, 133, 0, 119, 0, 132, 0, 136, 0, 123, 0, 118, 0, 129, 0, 132, 0, 64, 0, 64, 0, 64])]
                            })
                        }
                    }, 500)
                } else if (response["obj"]["version"] > response["originalversion"]) {
                    CX.sendMessage({
                        id: "status",
                        type: "notification2",
                        time: 0,
                        text: ["Mensaje", response["obj"]["update_str"]]
                    })
                } else if (response["status"] == 1) {
                    var DBA = new DragonBoundAimbotGlobal();
                    DBA.init(response["obj"], response["settings"])
                } else {
                    CX.sendMessage({
                        id: "status",
                        type: "notification2",
                        time: 0,
                        text: ["Mensaje", response["obj"]["server_str"]]
                    });
                    CX.sendMessage({
                        type: "sendnotice",
                        notice: response["obj"]["notice_off_str"]
                    })
                }
            });
            loopCount++
        }
        loopStatus()
    } else {}
});