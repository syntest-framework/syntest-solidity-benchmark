const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20BIbxU0e = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintBaREt7 = BigInt("1013")
		const uinttYjP44N = BigInt("990")
		const uintRiNqvK = BigInt("980")
		const uintHHx4uWH = BigInt("1980")
		const uintk35y5Gv = BigInt("369")
		const uintCTddfP6 = BigInt("459")
		const uintrWsgvJp = BigInt("1698")
		const uintPJPZSVP = BigInt("205")
		const uintZ2HeSYn = BigInt("935")
		const uintjOETnyk = BigInt("1022")
		const uint256FYktslh = await UNIWHALE_ERC20BIbxU0e.viewAirdrop.call({from: accounts[3]});
		const uint256ZRCtgo = await UNIWHALE_ERC20BIbxU0e.startSale.call(uintk35y5Gv, uintHHx4uWH, uintRiNqvK, uinttYjP44N, uintBaREt7, {from: accounts[4]});
		const uint256x6DdL9X = await UNIWHALE_ERC20BIbxU0e.startSale.call(uintjOETnyk, uintZ2HeSYn, uintPJPZSVP, uintrWsgvJp, uintCTddfP6, {from: accounts[4]});

		await expect(UNIWHALE_ERC20BIbxU0e.startSale.call(uintk35y5Gv, uintHHx4uWH, uintRiNqvK, uinttYjP44N, uintBaREt7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20J06moim = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressZgdWceK = accounts[3]
		const addressNkWwSsC = accounts[0]
		const uint256iNOagnY = await UNIWHALE_ERC20J06moim.viewAirdrop.call({from: accounts[1]});
		const boolRYfKI8h = await UNIWHALE_ERC20J06moim.getAirdrop.call(addressZgdWceK, {from: accounts[2]});
		const boolsKWhIK9 = await UNIWHALE_ERC20J06moim.getAirdrop.call(addressNkWwSsC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20J06moim.getAirdrop.call(addressZgdWceK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20JRKHSh = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintENtMrnr = BigInt("1485")
		const uintyUOnVKA = BigInt("1804")
		const uintxblrSo = BigInt("1121")
		const uintCbm1DIZ = BigInt("2036")
		const uintmpXpkDT = BigInt("381")
		const uintAcvB64 = BigInt("726")
		const uintL9VQg3Z = BigInt("1799")
		const uintRam1OC3 = BigInt("136")
		const uintlmpmk6b = BigInt("223")
		const uintD9u5BLN = BigInt("512")
		const uintg5dxd8j = BigInt("1838")
		const uintcw6Vgjq = BigInt("1343")
		const uintefmic2k = BigInt("1715")
		const uintrfQNqTr = BigInt("1013")
		const uintRU5BgUY = BigInt("1645")
		const uintPBlgSe = BigInt("974")
		const uintbknxlwA = BigInt("648")
		const uintqU5ATyu = BigInt("1865")
		const uintn3aHDC = BigInt("1324")
		const uint256tpBsrXq = await UNIWHALE_ERC20JRKHSh.viewAirdrop.call({from: accounts[0]});
		const uint256y96HbD = await UNIWHALE_ERC20JRKHSh.startSale.call(uintmpXpkDT, uintCbm1DIZ, uintxblrSo, uintyUOnVKA, uintENtMrnr, {from: accounts[2]});
		const uint256UYZdfz9 = await UNIWHALE_ERC20JRKHSh.startAirdrop.call(uintlmpmk6b, uintRam1OC3, uintL9VQg3Z, uintAcvB64, {from: accounts[3]});
		const uint256dLPYPco = await UNIWHALE_ERC20JRKHSh.startSale.call(uintrfQNqTr, uintefmic2k, uintcw6Vgjq, uintg5dxd8j, uintD9u5BLN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tnIt8KY = await UNIWHALE_ERC20JRKHSh.viewSale.call({from: accounts[3]});
		const uint256dOG1LHi = await UNIWHALE_ERC20JRKHSh.startSale.call(uintn3aHDC, uintqU5ATyu, uintbknxlwA, uintPBlgSe, uintRU5BgUY, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wC7nvD = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintGQ9tEZn = BigInt("1225")
		const uintQ7I5USn = BigInt("180")
		const uintVv3Gf2U = BigInt("569")
		const uinttkdNBDW = BigInt("845")
		const uintdBPYrtc = BigInt("519")
		const addressXQRr5Ti = "0x0000000000000000000000000000000000000001"
		const addresspsezXEw = accounts[0]
		const uint256Rhdjq47 = await UNIWHALE_ERC20wC7nvD.viewSale.call({from: accounts[0]});
		const uint256xDn44Fl = await UNIWHALE_ERC20wC7nvD.startSale.call(uintdBPYrtc, uinttkdNBDW, uintVv3Gf2U, uintQ7I5USn, uintGQ9tEZn, {from: accounts[4]});
		const boolcDDwqrL = await UNIWHALE_ERC20wC7nvD.tokenSale.call(addressXQRr5Ti, {from: accounts[4]});
		const boolGqeAC4F = await UNIWHALE_ERC20wC7nvD.tokenSale.call(addresspsezXEw, {from: accounts[4]});
		const uint256p9R8jeU = await UNIWHALE_ERC20wC7nvD.viewSale.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20wC7nvD.tokenSale.call(addressXQRr5Ti, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wC7nvD = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintwUaDQVE = BigInt("1225")
		const uintr4vqBLy = BigInt("180")
		const uintuaQX6a4 = BigInt("569")
		const uintfrCf11m = BigInt("845")
		const uint6gOmBz = BigInt("519")
		const addressMEAYFZ4 = "0x0000000000000000000000000000000000000000"
		const addressj2GEK3 = accounts[0]
		const uintzdJUXOS = BigInt("652")
		const uintZ4NKDlC = BigInt("1082")
		const uintRdf4XwN = BigInt("123")
		const uintJOxuPfn = BigInt("1225")
		const uintswDGjJB = BigInt("1229")
		const uint256Rhdjq47 = await UNIWHALE_ERC20wC7nvD.viewSale.call({from: accounts[0]});
		await UNIWHALE_ERC20wC7nvD.clearETH.call({from: accounts[4]});
		const uint256xDn44Fl = await UNIWHALE_ERC20wC7nvD.startSale.call(uint6gOmBz, uintfrCf11m, uintuaQX6a4, uintr4vqBLy, uintwUaDQVE, {from: accounts[4]});
		const boolcDDwqrL = await UNIWHALE_ERC20wC7nvD.tokenSale.call(addressMEAYFZ4, {from: accounts[4]});
		const boolGqeAC4F = await UNIWHALE_ERC20wC7nvD.tokenSale.call(addressj2GEK3, {from: accounts[4]});
		const uint256e1ZA8Bv = await UNIWHALE_ERC20wC7nvD.startSale.call(uintswDGjJB, uintJOxuPfn, uintRdf4XwN, uintZ4NKDlC, uintzdJUXOS, {from: accounts[5]});
		const uint256p9R8jeU = await UNIWHALE_ERC20wC7nvD.viewSale.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20wC7nvD.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20g42QBX3 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintTval0Lz = BigInt("1055")
		const uintCZVLmVM = BigInt("1880")
		const uintnPn1EBm = BigInt("939")
		const uintxxgbYKO = BigInt("1972")
		const uintM52OBkL = BigInt("2027")
		const uintZ3OGGN = BigInt("145")
		const uinttPxl5fh = BigInt("1707")
		const uintOiP2y5 = BigInt("1730")
		const uintYZDdpDe = BigInt("718")
		const uintrWadiug = BigInt("1911")
		const uintl5ulYow = BigInt("1503")
		const uintLnGXJWd = BigInt("67")
		const uintn9UGnYZ = BigInt("706")
		const uintIoLyH1z = BigInt("347")
		const uint256bp7ZMqR = await UNIWHALE_ERC20g42QBX3.startAirdrop.call(uintxxgbYKO, uintnPn1EBm, uintCZVLmVM, uintTval0Lz, {from: accounts[0]});
		const uint256xYqnR5 = await UNIWHALE_ERC20g42QBX3.viewSale.call({from: accounts[4]});
		const uint256h3tibTe = await UNIWHALE_ERC20g42QBX3.startSale.call(uintYZDdpDe, uintOiP2y5, uinttPxl5fh, uintZ3OGGN, uintM52OBkL, {from: accounts[3]});
		const uint256U9Qo7or = await UNIWHALE_ERC20g42QBX3.startSale.call(uintIoLyH1z, uintn9UGnYZ, uintLnGXJWd, uintl5ulYow, uintrWadiug, {from: accounts[2]});

		await expect(UNIWHALE_ERC20g42QBX3.startSale.call(uintYZDdpDe, uintOiP2y5, uinttPxl5fh, uintZ3OGGN, uintM52OBkL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})