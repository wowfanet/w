var mn_profiles = [
    [
        "us",
        "怀旧服",
        null,
        [
            [
                "ppwow",
                "PPWOW"
            ]
        ]
    ]
];

var mn_guilds = $.extend(true,[],mn_profiles);
var mn_arenateams = $.extend(true,[],mn_profiles);
Menu.fixUrls(mn_profiles,"?profiles=",{useSimpleIdsAfter:1});
Menu.fixUrls(mn_guilds,"?guilds=",{useSimpleIdsAfter:1});
Menu.fixUrls(mn_arenateams,"?arena-teams=",{useSimpleIdsAfter:1});
