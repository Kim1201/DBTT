
function getMapInfo(province){
    tempMapInfo = ""
	switch (province) {
	case "bv":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013477.3230151867!2d105.73726910266026!3d9.717445107324528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756c9c282e8e43%3A0xcce3539941eaed52!2zQsOgIFLhu4thIC0gVsWpbmcgVMOgdSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036227167!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
	    break;
    case "bg":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59479.79792778326!2d106.14884955624593!3d21.291750191570653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356dadb70fbfe5%3A0xd6dbe565b8b15e5c!2zVHAuIELhuq9jIEdpYW5nLCBC4bqvYyBHaWFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036272101!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bk":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59479.79792778326!2d106.14884955624593!3d21.291750191570653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356dadb70fbfe5%3A0xd6dbe565b8b15e5c!2zVHAuIELhuq9jIEdpYW5nLCBC4bqvYyBHaWFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036272101!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bl":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126007.30962094327!2d105.67055675232942!3d9.26854252051459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a10a2351f087b3%3A0x4949992f9e65b750!2zVHAuIELhuqFjIExpw6p1LCBC4bqhYyBMacOqdSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036365196!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bn":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119054.53574404765!2d105.92191312582536!3d21.17410682235044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350c5b3464ae51%3A0x1a3035b9749102f9!2zVHAuIELhuq9jIE5pbmgsIELhuq9jIE5pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683036430770!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62820.77908641769!2d106.33426581282512!3d10.237476314793662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa8f5e2e8bd09%3A0x9d5fd18ce4fa56bb!2zVHAuIELhur9uIFRyZSwgQuG6v24gVHJlLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683036479519!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bd":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990604.6774731488!2d108.31883665129868!3d14.103749374446107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f2def6e711bbf%3A0x45bf4c043ae5fd37!2zQsOsbmggxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036510518!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bd2":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501000.5752309573!2d106.32064754352957!3d11.182675617480122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174b66a8ef92879%3A0x339fda891c8d1473!2zQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042062335!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bp":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499903.9761150114!2d106.58916416621281!3d11.800226643147857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173682fdb7d221f%3A0x94c01b0e72f84211!2zQsOsbmggUGjGsOG7m2MsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042122475!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "bth":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002577.014763477!2d107.5436094391823!3d11.014865916320987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3176c3f2d68f59a1%3A0x2737428edf34c28e!2zQsOsbmggVGh14bqtbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042157208!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "cm":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126040.52766466294!2d105.10459840161168!3d9.17552465681725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a1499e262d02a9%3A0xefe0b01bb69d636d!2zVHAuIEPDoCBNYXUsIEPDoCBNYXUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042200939!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "cb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58911.13319513401!2d106.21490941421686!3d22.65580842201825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36ca643b852c0327%3A0xf7278f9b5a7c6921!2zVHAuIENhbyBC4bqxbmcsIENhbyBC4bqxbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042233057!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "dl":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937332.9363019909!2d107.09223317192972!3d12.780283671895543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7daf7307157%3A0x8ef97694d9883315!2zxJDhuq9rIEzhuq9rLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683042288145!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "dn":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499010.8549735912!2d107.330398217691!3d12.280572552962672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173b5ece644a927%3A0x7530e130f4a387ad!2zxJDhuq9rIE7DtG5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683042330456!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "db":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59430.20483463481!2d102.99988450693732!3d21.413996901567227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312d085cec10365d%3A0x37a7fddbe27cbe64!2zVHAuIMSQaeG7h24gQmnDqm4gUGjhu6csIMSQaeG7h24gQmnDqm4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042365644!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "dn2":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501224.56426439655!2d106.83404851875937!3d11.052349923822284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0xe04ae6f14b6e1655!2zxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042415146!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "dt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502055.60016139067!2d105.23414437781634!3d10.554945677923351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a65b3d50c121f%3A0xdca0c95ead346e40!2zxJDhu5NuZyBUaMOhcCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042445015!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "gl":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991910.0597056238!2d107.50127378681829!3d13.800040382599189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1f82022f81a3%3A0x8c52b5f68143b50d!2zR2lhIExhaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042482090!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hg":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117721.53718095996!2d104.91646862397292!3d22.77287520114848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc79b180b4239d%3A0xb7a373a73bc23544!2zVHAuIEjDoCBHaWFuZywgSMOgIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683042529655!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hn3":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239124.54411936962!2d105.81103835640509!3d20.534042904250228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c511181964e1%3A0x74a9b90d3b326852!2zSMOgIE5hbSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042581667!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "ht":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60589.531597300454!2d105.86054474100398!3d18.35432137063408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31384e25a01235b9%3A0xbcd7270a51316e31!2zVHAuIEjDoCBUxKluaCwgSMOgIFTEqW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683042640964!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hd":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476907.1719909674!2d106.03748849778901!3d20.959048742435158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7af448e05235%3A0x82e957d1041d9053!2zSOG6o2kgRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042713861!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hg3":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503261.15569280344!2d105.28175779894993!3d9.789085634463563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0f291eda269b3%3A0x79a372e92efed9e5!2zSOG6rXUgR2lhbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683042749834!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477698.52071652695!2d105.01602389597045!3d20.70942490594253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313414189ce0d86f%3A0xa825842a6614fe17!2zSMOyYSBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683042784514!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hy":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59729.55353745742!2d106.02220335277593!3d20.665628398262534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c12ae1ec71a3%3A0x4d32999e6a9bb398!2zVHAuIEjGsG5nIFnDqm4sIEjGsG5nIFnDqm4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043269006!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "kh":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997882.5172962085!2d107.8217910480321!3d12.317228338659401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31701b8ca8dcd395%3A0x69c20827322308ce!2zS2jDoW5oIEjDsmEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043303994!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "kg":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006191.0175044341!2d103.83789210424261!3d9.897792581938345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109da1c921a75cd%3A0x87e74126335ff37a!2zS2nDqm4gR2lhbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043332236!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "kt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123694.58226887023!2d107.88689675843378!3d14.343019588410453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bff3ec83864ed%3A0x38ea5406b5d91f3f!2sTp.%20Kon%20Tum%2C%20Kon%20Tum%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1683043376417!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "lc":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118051.36555623291!2d103.3570966644749!3d22.387392226920458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36d2a1867bf6f19d%3A0x34cc461c8d0001b8!2zVHAuIExhaSBDaMOidSwgTGFpIENow6J1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043404151!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "ld":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999929.7860877602!2d105.49901307739397!3d11.757099030054865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132659f3db7d%3A0xbb5ad2df5f54f56c!2zTMOibSDEkOG7k25nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043457993!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "ls":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118497.51951920705!2d106.66443195167308!3d21.855704022382707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36b54e779f3306a9%3A0x4d0e88116ffb61b9!2zVHAuIEzhuqFuZyBTxqFuLCBM4bqhbmcgU8ahbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043483226!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "lc2":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236049.94679402738!2d103.66798916110199!3d22.418468961800077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd15b54212a913%3A0xfe709c58b76a9605!2zVHAuIEzDoG8gQ2FpLCBMw6BvIENhaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043508647!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "la":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003588.3442641324!2d105.46441857439558!3d10.713879874477172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab63c952a4879%3A0xdbeaed99cfc54123!2zTG9uZyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043535325!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "nd":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59826.42913501412!2d106.12561130143563!3d20.41783262700877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e0adb8d5f1cd%3A0xb5f4baba00e67462!2zVHAuIE5hbSDEkOG7i25oLCBOYW0gxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043558022!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "na":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964141.1380339115!2d104.17986139239126!3d19.274697066132543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce640b5a1dad%3A0x5c61bf7cd719a519!2zTmdo4buHIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043581184!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "nb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59893.26037553638!2d105.93416600051287!3d20.245195150866095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313670ab6f10c8c1%3A0x888a79884edbe5cc!2zVHAuIE5pbmggQsOsbmgsIE5pbmggQsOsbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043604613!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "nt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500016.1188815345!2d108.56177310356524!3d11.73854468389059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170956e17fa09af%3A0xf8f5929e768e9e45!2zTmluaCBUaHXhuq1uLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043636466!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "pt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475751.66369660303!2d104.80488269678581!3d21.31852771775934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31348379dd903cfb%3A0x30ec8de0c8c8646e!2zUGjDuiBUaOG7jSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043666853!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "qb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974091.4835132451!2d105.6398497257053!3d17.50537198922983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3138b0f638296f2d%3A0x901f872e6223598f!2zUXXhuqNuZyBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043693169!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "qn":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974091.4835132451!2d105.6398497257053!3d17.50537198922983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316852cd89603939%3A0x2e554f035a6642c3!2zVHAuIFF14bqjbmcgTmfDo2ksIFF14bqjbmcgTmfDo2ksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043732396!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "qn2":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952585.83462286!2d106.61257677131319!3d21.150869400169274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b01d79a78852f%3A0xed0779f4f0a5866a!2zUXXhuqNuZyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043759095!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "qt":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489066.72362902656!2d106.6222842588179!3d16.735143597349673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e4abaa1df129%3A0xe471fae020d54d28!2zUXXhuqNuZyBUcuG7iywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043786243!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "st":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62941.301158934046!2d105.93652621151148!3d9.609788380117317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a04dfdccbd1d57%3A0xfa68286965e71218!2zVHAuIFPDs2MgVHLEg25nLCBTw7NjIFRyxINuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043811734!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "sl":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951611.419397184!2d103.45783911208147!3d21.301843031006907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31325990dc3d1dd5%3A0x582d645a6a0f387b!2zU8ahbiBMYSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043835849!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tb2":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125170.2689577068!2d106.04708037149176!3d11.366019856975415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6aeab90d3fc5%3A0xa059d1214008df15!2zVHAuIFTDonkgTmluaCwgVMOieSBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683043882356!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239174.22277788355!2d106.20504740346801!3d20.502240020712403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e4d3f5397033%3A0x6ae405f8381d5bc7!2zVGjDoWkgQsOsbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043904022!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tn":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118726.89009364476!2d105.72091664511333!3d21.5775168905896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313526e41a2f48ff%3A0x9af085049fb0466f!2zVHAuIFRow6FpIE5ndXnDqm4sIFRow6FpIE5ndXnDqm4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683043925012!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "th":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120119.50123845402!2d105.70848190564281!3d19.808854890970633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7fe237e2277%3A0xa13832367bfc213a!2zVGhhbmggSG_DoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043947501!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tth":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960109.0818992914!2d105.1053063392695!3d16.356733008843857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31419c87726490f7%3A0xab1c0fcaf7cb84b5!2zVGjhu6thIFRoacOqbiBIdeG6vywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683043978721!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tg":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502324.9030014592!2d105.98020984869439!3d10.388711120591488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aafebb5a82681%3A0x3ce3a707c1376375!2zVGnhu4FuIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044010091!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tv":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62876.61886496826!2d106.30357041221116!3d9.951532709547443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017515cc705df%3A0xade5b5649cd70f79!2zVHAuIFRyw6AgVmluaCwgVHLDoCBWaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044041157!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "tq":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118557.54617633847!2d105.15127969995493!3d21.78322860756606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134adfba5491ee1%3A0x747dc14b37c6b7e9!2zVHAuIFR1ecOqbiBRdWFuZywgVHV5w6puIFF1YW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044071184!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "vl":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62817.90676865442!2d105.89780781285693!3d10.251971407406588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a82cd5bf1a7a5%3A0x5b1bc07ba40ecd86!2zVHAuIFbEqW5oIExvbmcsIFbEqW5oIExvbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683044112863!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "vp":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237803.30873616118!2d105.39310298480643!3d21.363243913525526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e54d82ea2dbb%3A0xc0d08e3fe11b105f!2zVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683044142709!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "yb":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237803.30873616118!2d105.39310298480643!3d21.363243913525526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313339f512702b19%3A0x500ff9f460ae2b5!2zWcOqbiBCw6FpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044173973!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "py":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497200.0841987349!2d108.73480887706397!3d13.201715797164216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f70bf634caeff%3A0xfe6ebe1c1c171a80!2zUGjDuiBZw6puLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044196823!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
	    break;
    case "ct":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.62287993249!2d105.71628476238611!3d10.034268917853908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683044224959!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
	    break;
    case "dn3":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245367.8758906272!2d107.9129719453793!3d16.072075665233978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683044254925!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hp":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59658.01269474682!2d106.65746115376781!3d20.846812116848042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7af39e3f1ad3%3A0xa5ffc85ff87a07e8!2zSOG6o2kgUGjDsm5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1683044284469!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hn":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.94638954329!2d105.79567815474088!3d21.022814738612873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683044307952!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    case "hcm":
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41966165556!2d106.36488411376105!3d10.755292131539115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683044336253!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        break;
    default:
		tempMapInfo = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990604.6774731488!2d108.31883665129868!3d14.103749374446107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f2def6e711bbf%3A0x45bf4c043ae5fd37!2zQsOsbmggxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683036510518!5m2!1svi!2s" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
	}
    return tempMapInfo;
}
