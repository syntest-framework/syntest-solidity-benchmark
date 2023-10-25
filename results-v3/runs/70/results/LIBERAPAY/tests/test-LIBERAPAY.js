const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwXABJQ = await LIBERAPAY.new({from: accounts[0]});
		const addressJme0MT4 = accounts[0]
		const uintwEXmu2a = BigInt("654")
		const addressAsYbhk6 = accounts[0]
		const uintky52m0j = BigInt("1046")
		const uintikybZ5e = BigInt("327")
		const addressBWcyuBp = accounts[5]
		await LIBERAPAYcwXABJQ.whenNotPaused.call({from: accounts[2]});
		const booltRYfrfo = await LIBERAPAYcwXABJQ.freezeAccount.call(addressJme0MT4, {from: accounts[0]});
		await LIBERAPAYcwXABJQ.showLockState.call(addressAsYbhk6, uintwEXmu2a, {from: "0x0000000000000000000000000000000000000001"});
		const boolOWPCan = await LIBERAPAYcwXABJQ.lock.call(addressBWcyuBp, uintikybZ5e, uintky52m0j, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFm2dTc5 = await LIBERAPAY.new({from: accounts[0]});
		const uintuP8rSH0 = BigInt("841")
		const addressl7CHgzc = accounts[4]
		const uintim7EYof = BigInt("1870")
		const addressp4vVDhP = accounts[0]
		const addressovgOmMx = accounts[3]
		const boolEcSCVjx = await LIBERAPAYFm2dTc5.unlock.call(addressl7CHgzc, uintuP8rSH0, {from: accounts[0]});
		const booliaEvQ76 = await LIBERAPAYFm2dTc5.decreaseAllowance.call(addressp4vVDhP, uintim7EYof, {from: accounts[0]});
		const uint256BmG7FYM = await LIBERAPAYFm2dTc5.totalSupply.call({from: accounts[4]});
		const addressc7AcgYj = await LIBERAPAYFm2dTc5.transferOwnership.call(addressovgOmMx, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY0wajxJ = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmYQtSj9 = BigInt("1672")
		const addressLcJojSu = accounts[3]
		const uintG9FOSxe = BigInt("788")
		const addressIPVer4p = accounts[1]
		const boolPP2noUU = await LIBERAPAYY0wajxJ.decreaseAllowance.call(addressLcJojSu, uintmYQtSj9, {from: accounts[2]});
		const boolf4y91K9 = await LIBERAPAYY0wajxJ.burnFrom.call(addressIPVer4p, uintG9FOSxe, {from: accounts[2]});
		await LIBERAPAYY0wajxJ.onlyNewOwner.call({from: accounts[0]});
		const boolehcRlfH = await LIBERAPAYY0wajxJ.acceptOwnership.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNezCtpc = await LIBERAPAY.new({from: accounts[0]});
		const uintzJDZ2wm = BigInt("1574")
		const addressG5oi6Es = accounts[1]
		const uinttb0CeNM = BigInt("1188")
		const boolcNpPuAR = await LIBERAPAYNezCtpc.burnFrom.call(addressG5oi6Es, uintzJDZ2wm, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYNezCtpc.whenNotPaused.call({from: accounts[1]});
		const boolfYEn629 = await LIBERAPAYNezCtpc.acceptOwnership.call({from: accounts[0]});
		const uint256wFHwgMB = await LIBERAPAYNezCtpc.getNowTime.call({from: accounts[3]});
		const boolBjhkVX = await LIBERAPAYNezCtpc.burn.call(uinttb0CeNM, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHeTRgBJ = await LIBERAPAY.new({from: accounts[1]});
		const addresswuSVFlq = accounts[2]
		const uinttJpDfPJ = BigInt("1953")
		const addressalAhLc = accounts[1]
		const uint256mwZtlbW = await LIBERAPAYHeTRgBJ.getNowTime.call({from: accounts[0]});
		const boolrrNaCwg = await LIBERAPAYHeTRgBJ.unfreezeAccount.call(addresswuSVFlq, {from: accounts[0]});
		const boolA2Tj2RT = await LIBERAPAYHeTRgBJ.transfer.call(addressalAhLc, uinttJpDfPJ, {from: accounts[3]});
		const uint256pZTdghO = await LIBERAPAYHeTRgBJ.totalSupply.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintLE79QaN = BigInt("1388")
		const addressREwpkvv = accounts[2]
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressREwpkvv, uintLE79QaN, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintDzsl3TZ = BigInt("701")
		const addressFWWGeSl = accounts[3]
		const uintpRc0LIl = BigInt("1388")
		const addressytIhQw = accounts[3]
		await LIBERAPAYbCfNLNU.showLockState.call(addressFWWGeSl, uintDzsl3TZ, {from: accounts[4]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressytIhQw, uintpRc0LIl, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const addressjlFPa1 = "0x0000000000000000000000000000000000000001"
		const uintHXAXMx0 = BigInt("1388")
		const addressTHWDO1I = accounts[2]
		const uint256zHgwyFV = await LIBERAPAYbCfNLNU.currentBalanceOf.call(addressjlFPa1, {from: accounts[4]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressTHWDO1I, uintHXAXMx0, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvyDQ6tf = await LIBERAPAY.new({from: accounts[0]});
		const addressUx0mE90 = accounts[2]
		const addressvmCTvO = accounts[3]
		const uint256FHhPH5O = await LIBERAPAYvyDQ6tf.balanceOf.call(addressUx0mE90, {from: accounts[2]});
		const addressmE8nAHz = await LIBERAPAYvyDQ6tf.upgradeTo.call(addressvmCTvO, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintBvy8yvB = BigInt("783")
		const addressfWWQIb = accounts[4]
		const uintiKvc6YJ = BigInt("812")
		const addresswelNm8N = accounts[4]
		const addressLZG1yw = accounts[1]
		const uintI4LACQu = BigInt("1386")
		const addressKrKa2rG = accounts[3]
		const boolluNgZf9 = await LIBERAPAYbCfNLNU.approve.call(addressfWWQIb, uintBvy8yvB, {from: accounts[0]});
		const boolGlV4sP = await LIBERAPAYbCfNLNU.unlock.call(addresswelNm8N, uintiKvc6YJ, {from: accounts[1]});
		const boolT1gPIw6 = await LIBERAPAYbCfNLNU.freezeAccount.call(addressLZG1yw, {from: accounts[4]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressKrKa2rG, uintI4LACQu, {from: accounts[1]});
		await LIBERAPAYbCfNLNU.f.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintv4vhuww = BigInt("1065")
		const addressIpC3NOz = accounts[3]
		const uintf5uFQuN = BigInt("1392")
		const addressj4AfMr3 = accounts[3]
		const boolHOTKetp = await LIBERAPAYbCfNLNU.decreaseAllowance.call(addressIpC3NOz, uintv4vhuww, {from: accounts[4]});
		await LIBERAPAYbCfNLNU.onlyNewOwner.call({from: accounts[2]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressj4AfMr3, uintf5uFQuN, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintQ56AOp4 = BigInt("231")
		const uintxQRg9Ad = BigInt("1382")
		const addressf1BOlEW = accounts[2]
		await LIBERAPAYbCfNLNU.f.call({from: accounts[3]});
		const boolTuxo5vr = await LIBERAPAYbCfNLNU.burn.call(uintQ56AOp4, {from: accounts[2]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressf1BOlEW, uintxQRg9Ad, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uinthDZpx87 = BigInt("628")
		const addressI2F1Kvp = accounts[4]
		const addressvL9b0qV = accounts[4]
		const uintEvjT81x = BigInt("1384")
		const addressjh7fxxL = accounts[2]
		const boolDECnJk = await LIBERAPAYbCfNLNU.transferFrom.call(addressvL9b0qV, addressI2F1Kvp, uinthDZpx87, {from: accounts[4]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressjh7fxxL, uintEvjT81x, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintAAPZwLa = BigInt("1003")
		const address5ClK9W = accounts[0]
		const uintG5NvWnV = BigInt("701")
		const addressRm3IqLv = accounts[3]
		const uint3Bg4Ym = BigInt("1373")
		const addresszIEufy = accounts[3]
		const uintcx3Igxs = BigInt("1894")
		const addresslzSvaGN = accounts[1]
		await LIBERAPAYbCfNLNU.showLockState.call(address5ClK9W, uintAAPZwLa, {from: accounts[5]});
		const uint256iZUGXZw = await LIBERAPAYbCfNLNU.totalSupply.call({from: accounts[3]});
		await LIBERAPAYbCfNLNU.showLockState.call(addressRm3IqLv, uintG5NvWnV, {from: accounts[4]});
		const uint256D1nmeBV = await LIBERAPAYbCfNLNU.getNowTime.call({from: accounts[0]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addresszIEufy, uint3Bg4Ym, {from: accounts[1]});
		const boolyib0DkU = await LIBERAPAYbCfNLNU.increaseAllowance.call(addresslzSvaGN, uintcx3Igxs, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const addressVat3c8H = "0x0000000000000000000000000000000000000002"
		const uintxpHFLi8 = BigInt("1388")
		const addressfpUvrCW = accounts[2]
		const uint256zHgwyFV = await LIBERAPAYbCfNLNU.currentBalanceOf.call(addressVat3c8H, {from: accounts[4]});
		await LIBERAPAYbCfNLNU.pause.call({from: accounts[0]});
		const boolSlPCoi3 = await LIBERAPAYbCfNLNU.transfer.call(addressfpUvrCW, uintxpHFLi8, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJ4vsrZ = await LIBERAPAY.new({from: accounts[1]});
		const addressab7Qx7x = accounts[1]
		const uintKuhu8j = BigInt("639")
		const addressdjYYyFd = accounts[0]
		const uintDBnGtOL = BigInt("1")
		const addressXlRcITm = accounts[0]
		const addressBVQiTKv = await LIBERAPAYJ4vsrZ.transferOwnership.call(addressab7Qx7x, {from: accounts[1]});
		const boolPbVqETX = await LIBERAPAYJ4vsrZ.approve.call(addressdjYYyFd, uintKuhu8j, {from: accounts[3]});
		const boolFg33lg = await LIBERAPAYJ4vsrZ.burnFrom.call(addressXlRcITm, uintDBnGtOL, {from: accounts[4]});
		await LIBERAPAYJ4vsrZ.onlyOwner.call({from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvyDQ6tf = await LIBERAPAY.new({from: accounts[0]});
		const uintkcfCeJ = BigInt("1243")
		const addressJoaDDzU = accounts[0]
		const addressGHMT1nM = accounts[3]
		const booloyjyBh1 = await LIBERAPAYvyDQ6tf.increaseAllowance.call(addressJoaDDzU, uintkcfCeJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FHhPH5O = await LIBERAPAYvyDQ6tf.balanceOf.call(addressGHMT1nM, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYELnykAb = await LIBERAPAY.new({from: accounts[4]});
		const addressXWPOO4J = accounts[2]
		const uintjlDvTP = BigInt("184")
		const uintM7HtleA = BigInt("1273")
		const addressXyckL5V = accounts[0]
		const uinti45Z84 = BigInt("872")
		const addresslL52oyX = accounts[2]
		const addressjSyuFZ3 = accounts[0]
		const boolL3fW51U = await LIBERAPAYELnykAb.unfreezeAccount.call(addressXWPOO4J, {from: accounts[4]});
		const boolmEj1HID = await LIBERAPAYELnykAb.lock.call(addressXyckL5V, uintM7HtleA, uintjlDvTP, {from: accounts[2]});
		const boolUfyEVpw = await LIBERAPAYELnykAb.transferFrom.call(addressjSyuFZ3, addresslL52oyX, uinti45Z84, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uinteMDHU0n = BigInt("1775")
		const uintJEkXhgH = BigInt("628")
		const addressTQyebxc = accounts[5]
		const addressxUVhk0w = accounts[4]
		const boolDb1Ti07 = await LIBERAPAYbCfNLNU.burn.call(uinteMDHU0n, {from: accounts[0]});
		const boolDECnJk = await LIBERAPAYbCfNLNU.transferFrom.call(addressxUVhk0w, addressTQyebxc, uintJEkXhgH, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintYCqtrHJ = BigInt("701")
		const addressiQugANI = accounts[4]
		const uintjE2G4H = BigInt("257")
		const uinttF5GoYL = BigInt("211")
		const addressRciQUNG = accounts[3]
		await LIBERAPAYbCfNLNU.showLockState.call(addressiQugANI, uintYCqtrHJ, {from: accounts[4]});
		const boolxreNHJF = await LIBERAPAYbCfNLNU.lock.call(addressRciQUNG, uinttF5GoYL, uintjE2G4H, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const address1TbZ2j = accounts[2]
		const uintzv39ZTJ = BigInt("990")
		const addressCH60263 = "0x0000000000000000000000000000000000000001"
		const uinttzOCr4u = BigInt("701")
		const addressIZgWpZS = accounts[5]
		const boolxST32MW = await LIBERAPAYbCfNLNU.freezeAccount.call(address1TbZ2j, {from: accounts[0]});
		const boolHbD3JEQ = await LIBERAPAYbCfNLNU.distribute.call(addressCH60263, uintzv39ZTJ, {from: accounts[3]});
		await LIBERAPAYbCfNLNU.showLockState.call(addressIZgWpZS, uinttzOCr4u, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uinteC5WejL = BigInt("1885")
		const addressazriyVL = accounts[1]
		const uint318WHS = BigInt("249")
		const addressoL90kLm = accounts[4]
		const addresslmabO2v = accounts[4]
		const boolb0C32qS = await LIBERAPAYbCfNLNU.distribute.call(addressazriyVL, uinteC5WejL, {from: accounts[0]});
		const boolDECnJk = await LIBERAPAYbCfNLNU.transferFrom.call(addresslmabO2v, addressoL90kLm, uint318WHS, {from: accounts[4]});
		await LIBERAPAYbCfNLNU.whenPaused.call({from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbCfNLNU = await LIBERAPAY.new({from: accounts[0]});
		const uintemIHXoD = BigInt("275")
		const addressGMSojpj = "0x0000000000000000000000000000000000000001"
		const uintw8E2hbk = BigInt("701")
		const addresstanIUpB = accounts[4]
		const boolCYUd15W = await LIBERAPAYbCfNLNU.mint.call(addressGMSojpj, uintemIHXoD, {from: accounts[0]});
		await LIBERAPAYbCfNLNU.whenPaused.call({from: accounts[1]});
		await LIBERAPAYbCfNLNU.showLockState.call(addresstanIUpB, uintw8E2hbk, {from: accounts[4]});
	});
})