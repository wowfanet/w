function ma_Init() {
    ma_AddOptions($WH.ge('maps-ek'), [1, 3, 4, 8, 10, 11, 12, 28, 33, 36, 38, 40, 41, 44, 45, 46, 47, 51, 85, 130, 139, 267, 1497, 1519, 1537]);
    ma_AddOptions($WH.ge('maps-kalimdor'), [14, 15, 16, 17, 141, 148, 215, 331, 357, 361, 400, 405, 406, 440, 490, 493, 618, 1377, 1637, 1638, 1657]);
    ma_AddOptions($WH.ge('maps-battlegrounds'), [2597, 3277, 3358]);
    ma_AddOptions($WH.ge('maps-raids'), [
        1977, 2677, 2717, 3428, 3429, // Classic: Zul'Gurub, Blackwing Lair, Molten Core, Ahn'Qiraj, Ruins of Ahn'Qiraj
         // BC:      Karazhan, Hyjal Summit, Serpentshrine Cavern, Zul'Aman, Magtheridon's Lair
               // BC:      Tempest Keep, Gruul's Lair, Black Temple, Sunwell Plateau
        2159, 3456 // WotLK:   Onyxia's Lair, Naxxramas, Ulduar, The Obsidian Sanctum, The Eye of Eternity
     
    ]);
    ma_AddOptions($WH.ge('maps-dungeons'), [
         209,  491,  717,  718,  719, // Classic: Shadowfang Keep, Razorfen Kraul, The Stockade, Wailing Caverns, Blackfathom Deeps
         721,  722,  796, 1176, 1337, // Classic: Gnomeregan, Razorfen Downs, Scarlet Monastery, Zul'Farrak, Uldaman
        1417, 207, 1583, 1584, 2017, // Classic: The Temple of Atal'Hakkar, The Deadmines, Blackrock Spire, Blackrock Depths, Stratholme
        2057, 2100, 2437, 2557,       // Classic: Scholomance, Maraudon, Ragefire Chasm, Dire Maul
    ]);

    myMapper = new Mapper({
        parent: 'mapper-generic',
        editable: true,
        zoom: 1,
        onPinUpdate: ma_UpdateLink,
        onMapUpdate: ma_UpdateLink
    });

    var _ = location.href.indexOf('maps=');
    if (_ != -1) {
        _ = location.href.substr(_ + 5);
        if (myMapper.setLink(_)) {
            $WH.ge('mapper').style.display = '';
        }
    }
}

function ma_AddOptions(s, a) {
    a.sort(ma_Sort);

    $WH.array_apply(a, function (x) {
        var o = $WH.ce('option');
        o.value = x
        $WH.ae(o, $WH.ct(g_zones[typeof x == 'string' ? parseInt(x) : x]));
        $WH.ae(s, o);
    });
}

function ma_Sort(a, b) {
    if (typeof a == 'string') {
        a = parseInt(a);
    }

    if (typeof b == 'string') {
        b = parseInt(b);
    }

    return $WH.strcmp(g_zones[a], g_zones[b]);
}

function ma_ChooseZone(s) {
    if (s.value && s.value != '0') {
        if (myMapper.getZone() == 0) {
            $WH.ge('mapper').style.display = '';
        }

        myMapper.setZone(s.value);
    }

    s.selectedIndex = 0;
}

function ma_UpdateLink(_) {
    var
        b = '?maps',
        l = _.getLink();

    if (l) {
        b += '=' + l;
    }

    $WH.ge('link-to-this-map').href = b;
};
