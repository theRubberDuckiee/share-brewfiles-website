export enum Developer {
    Security,
    Frontend,
    Backend,
    Devops,
    Data,
    General
}

interface PersonalityDictionary {
    [key: string]: {
        rank: number;
        developer: Developer;
        old: boolean;
        customization: boolean;
        ai: boolean;
        cli: boolean;
        organization: boolean;
    };
}

export const packagePersonalityDictionary: PersonalityDictionary = {
    "openssl@3": {
        "rank": 1,
        "developer":Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "ca-certificates": {
        "rank": 2,
        "developer":Developer.Security,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "xz": {
        "rank": 3,
        "developer":Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "python@3.11": {
        "rank": 4,
        "developer":Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "sqlite": {
        "rank": 5,
        "developer":Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "glib": {
        "rank": 6,
        "developer": Developer.Backend,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "node": {
        "rank": 7,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "harfbuzz": {
        "rank": 8,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "gettext": {
        "rank": 9,
        "developer": Developer.Backend,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "icu4c": {
        "rank": 10,
        "developer": Developer.Backend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "libnghttp2": {
        "rank": 11,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "readline": {
        "rank": 12,
        "developer": Developer.General,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libx11": {
        "rank": 13,
        "developer": Developer.Backend,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "zstd": {
        "rank": 14,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "cmake": {
        "rank": 15,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "gnutls": {
        "rank": 16,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "awscli": {
        "rank": 17,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "jpeg-xl": {
        "rank": 18,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "git": {
        "rank": 19,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "openssl@1.1": {
        "rank": 20,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "libtiff": {
        "rank": 21,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "gmp": {
        "rank": 22,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "little-cms2": {
        "rank": 23,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "unbound": {
        "rank": 24,
        "developer": Developer.Security,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "pcre2": {
        "rank": 25,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libpng": {
        "rank": 26,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "python@3.12": {
        "rank": 27,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "aom": {
        "rank": 28,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "c-ares": {
        "rank": 29,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "gcc": {
        "rank": 30,
        "developer": Developer.Backend,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libxcb": {
        "rank": 31,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "openexr": {
        "rank": 32,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "mpdecimal": {
        "rank": 33,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "python@3.10": {
        "rank": 34,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "webp": {
        "rank": 35,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "ffmpeg": {
        "rank": 36,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "pyenv": {
        "rank": 37,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "freetype": {
        "rank": 38,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "fontconfig": {
        "rank": 39,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "libidn2": {
        "rank": 40,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "lz4": {
        "rank": 41,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "xorgproto": {
        "rank": 42,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "curl": {
        "rank": 43,
        "developer": Developer.Backend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "go": {
        "rank": 44,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "wget": {
        "rank": 45,
        "developer": Developer.Backend,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "brotli": {
        "rank": 46,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "krb5": {
        "rank": 47,
        "developer": Developer.Security,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true 
    },
    "openjdk": {
        "rank": 48,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "libevent": {
        "rank": 49,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "zlib": {
        "rank": 50,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "libuv": {
        "rank": 51,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "p11-kit": {
        "rank": 52,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "libunistring": {
        "rank": 53,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "cairo": {
        "rank": 54,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "python@3.9": {
        "rank": 55,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": true,
        "cli": true,
        "organization": false 
    },
    "gh": {
        "rank": 56,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true 
    },
    "imagemagick": {
        "rank": 57,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "tesseract": {
        "rank": 58,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": true,
        "cli": true,
        "organization": false 
    },
    "highway": {
        "rank": 59,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "mpfr": {
        "rank": 60,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "libxext": {
        "rank": 61,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "libpq": {
        "rank": 62,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "ncurses": {
        "rank": 63,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false 
    },
    "openldap": {
        "rank": 64,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "libxdmcp": {
        "rank": 65,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false 
    },
    "nettle": {
        "rank": 66,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "imath": {
        "rank": 67,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "php": {
        "rank": 68,
        "developer": Developer.Backend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "protobuf": {
        "rank": 69,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "pango": {
        "rank": 70,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "gnupg": {
        "rank": 71,
        "developer": Developer.Security,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "openjpeg": {
        "rank": 72,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libssh2": {
        "rank": 73,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "giflib": {
        "rank": 74,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "autoconf": {
        "rank": 75,
        "developer": Developer.Devops,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "coreutils": {
        "rank": 76,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "ruby": {
        "rank": 77,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "sdl2": {
        "rank": 78,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "jq": {
        "rank": 79,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "postgresql@14": {
        "rank": 80,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "isl": {
        "rank": 81,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "librsvg": {
        "rank": 82,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "pkg-config": {
        "rank": 83,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "boost": {
        "rank": 84,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libvmaf": {
        "rank": 85,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": false,
        "organization": false
    },
    "python-setuptools": {
        "rank": 86,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libxau": {
        "rank": 87,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "kubernetes-cli": {
        "rank": 88,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "leptonica": {
        "rank": 89,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "ruby-build": {
        "rank": 90,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libheif": {
        "rank": 91,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libavif": {
        "rank": 92,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "mysql": {
        "rank": 93,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "pixman": {
        "rank": 94,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libxml2": {
        "rank": 95,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "jasper": {
        "rank": 96,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "watchman": {
        "rank": 97,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "libarchive": {
        "rank": 98,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "ghostscript": {
        "rank": 99,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libxrender": {
        "rank": 100,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "fribidi": {
        "rank": 101,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "tcl-tk": {
        "rank": 102,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "freetds": {
        "rank": 103,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "qemu": {
        "rank": 104,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "llvm": {
        "rank": 105,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "mbedtls": {
        "rank": 106,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "libomp": {
        "rank": 107,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libyaml": {
        "rank": 108,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "glibc": {
        "rank": 109,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "graphite2": {
        "rank": 110,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libsodium": {
        "rank": 111,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "mpg123": {
        "rank": 112,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "gd": {
        "rank": 113,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "oniguruma": {
        "rank": 114,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libmpc": {
        "rank": 115,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "binutils": {
        "rank": 116,
        "developer": Developer.Devops,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "rtmpdump": {
        "rank": 117,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "nvm": {
        "rank": 118,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "bzip2": {
        "rank": 119,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "numpy": {
        "rank": 120,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "openblas": {
        "rank": 121,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libtool": {
        "rank": 122,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "svt-av1": {
        "rank": 123,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "linux-headers@5.15": {
        "rank": 124,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "docker": {
        "rank": 125,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "pycparser": {
        "rank": 126,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "helm": {
        "rank": 127,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "lzo": {
        "rank": 128,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "m4": {
        "rank": 129,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "cocoapods": {
        "rank": 130,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": true
    },
    "dav1d": {
        "rank": 131,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "abseil": {
        "rank": 132,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libgpg-error": {
        "rank": 133,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "six": {
        "rank": 134,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "folly": {
        "rank": 135,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "rust": {
        "rank": 136,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "librist": {
        "rank": 137,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "netpbm": {
        "rank": 138,
        "developer": Developer.General,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "gobject-introspection": {
        "rank": 139,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "gdk-pixbuf": {
        "rank": 140,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "rav1e": {
        "rank": 141,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "snappy": {
        "rank": 142,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libffi": {
        "rank": 143,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "cffi": {
        "rank": 144,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "fb303": {
        "rank": 145,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "graphviz": {
        "rank": 146,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "frei0r": {
        "rank": 147,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "fizz": {
        "rank": 148,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "berkeley-db@5": {
        "rank": 149,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libtasn1": {
        "rank": 150,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libfido2": {
        "rank": 151,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "docutils": {
        "rank": 152,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libksba": {
        "rank": 153,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "maven": {
        "rank": 154,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "openjdk@11": {
        "rank": 155,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "wangle": {
        "rank": 156,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "nghttp2": {
        "rank": 157,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "srt": {
        "rank": 158,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "redis": {
        "rank": 159,
        "developer": Developer.Data,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "z3": {
        "rank": 160,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "opus": {
        "rank": 161,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "edencommon": {
        "rank": 162,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "shared-mime-info": {
        "rank": 163,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "fbthrift": {
        "rank": 164,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libusb": {
        "rank": 165,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "python@3.8": {
        "rank": 166,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "neovim": {
        "rank": 167,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "mongosh": {
        "rank": 168,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libssh": {
        "rank": 169,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "dbus": {
        "rank": 170,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "vim": {
        "rank": 171,
        "developer": Developer.General,
        "old": true,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "swiftlint": {
        "rank": 172,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "qt": {
        "rank": 173,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "gnu-tar": {
        "rank": 174,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "unzip": {
        "rank": 175,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "cjson": {
        "rank": 176,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libass": {
        "rank": 177,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libgcrypt": {
        "rank": 178,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "gdbm": {
        "rank": 179,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "zeromq": {
        "rank": 180,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "openjdk@17": {
        "rank": 181,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "azure-cli": {
        "rank": 182,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libsndfile": {
        "rank": 183,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "fzf": {
        "rank": 184,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "git-lfs": {
        "rank": 185,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "unixodbc": {
        "rank": 186,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "poppler": {
        "rank": 187,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "ansible": {
        "rank": 188,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "x265": {
        "rank": 189,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "flac": {
        "rank": 190,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "pygments": {
        "rank": 191,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "perl": {
        "rank": 192,
        "developer": Developer.General,
        "old": true,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "luajit": {
        "rank": 193,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "zimg": {
        "rank": 194,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libde265": {
        "rank": 195,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": false,
        "organization": false
    },
    "xcbeautify": {
        "rank": 196,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "rubberband": {
        "rank": 197,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "pandoc": {
        "rank": 198,
        "developer": Developer.General,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "tmux": {
        "rank": 199,
        "developer": Developer.Devops,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "nss": {
        "rank": 200,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": true
    },
    "expat": {
        "rank": 201,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libzip": {
        "rank": 202,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "yarn": {
        "rank": 203,
        "developer": Developer.Frontend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libunibreak": {
        "rank": 204,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": false,
        "organization": false
    },
    "libedit": {
        "rank": 205,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "virtualenv": {
        "rank": 206,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "node@16": {
        "rank": 207,
        "developer": Developer.Backend,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "python-packaging": {
        "rank": 208,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "docker-compose": {
        "rank": 209,
        "developer": Developer.Devops,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "libvpx": {
        "rank": 210,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "yq": {
        "rank": 211,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "openvino": {
        "rank": 212,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": true,
        "cli": true,
        "organization": false
    },
    "libassuan": {
        "rank": 213,
        "developer": Developer.Security,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "qt@5": {
        "rank": 214,
        "developer": Developer.Frontend,
        "old": false,
        "customization": true,
        "ai": false,
        "cli": true,
        "organization": false
    },
    "apr-util": {
        "rank": 215,
        "developer": Developer.General,
        "old": false,
        "customization": false,
        "ai": false,
        "cli": true,
        "organization": false
    },
};