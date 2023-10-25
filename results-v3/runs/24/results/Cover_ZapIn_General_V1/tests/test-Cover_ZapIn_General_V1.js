const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintOeaPH7I = BigInt("1777")
		const Cover_ZapIn_General_V1zO8Wjk = await Cover_ZapIn_General_V1.new(uintOeaPH7I, {from: accounts[4]});
		const addresspyjWZTZ = accounts[1]
		const 
AGKyTwE = await Cover_ZapIn_General_V1zO8Wjk._getCoverDetails.call(addresspyjWZTZ, {from: accounts[4]});
		const addressRpfWdO2 = await Cover_ZapIn_General_V1zO8Wjk.owner.call({from: accounts[5]});
		const addressTfkpPFn = await Cover_ZapIn_General_V1zO8Wjk.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpiXCGj5 = BigInt("1267")
		const Cover_ZapIn_General_V1UvCDEvF = await Cover_ZapIn_General_V1.new(uintpiXCGj5, {from: accounts[5]});
		const byteN7dBEYE = "0x130b0a0e0d070e1b1d1d1f20"
		const addresskkjzXQK = accounts[1]
		const addressAc9h2vS = accounts[4]
		const uintTAuhME3 = BigInt("938")
		const addresswwqJV0P = "0x0000000000000000000000000000000000000001"
		const addressLPa8Thu = "0x0000000000000000000000000000000000000001"
		const addresszSgOEPU = accounts[0]
		const addresszMha9Qk = accounts[0]
		const uintXCSSe6S = BigInt("1643")
		const addressi4xneVF = accounts[0]
		const addressOTVpSia = accounts[0]
		const addressCsWgZ1H = accounts[2]
		const uintsIWiWiw = BigInt("1653")
		const addressSb8eREx = accounts[0]
		const 
W0ZE6xn = await Cover_ZapIn_General_V1UvCDEvF.ZapIn.call(addresszMha9Qk, addresszSgOEPU, addressLPa8Thu, addresswwqJV0P, uintTAuhME3, addressAc9h2vS, addresskkjzXQK, byteN7dBEYE, {from: accounts[3]});
		await Cover_ZapIn_General_V1UvCDEvF.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1UvCDEvF.stopInEmergency.call({from: accounts[2]});
		const boolryDZFsr = await Cover_ZapIn_General_V1UvCDEvF.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1UvCDEvF._enterCover.call(addressi4xneVF, uintXCSSe6S, {from: accounts[3]});
		const 
Iu4TVHb = await Cover_ZapIn_General_V1UvCDEvF._enterPosition.call(addressSb8eREx, uintsIWiWiw, addressCsWgZ1H, addressOTVpSia, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintG1DfPwN = BigInt("1757")
		const Cover_ZapIn_General_V1DZLHdn0 = await Cover_ZapIn_General_V1.new(uintG1DfPwN, {from: accounts[5]});
		const uintJ0ZPs4m = BigInt("1482")
		const addressRrA0pFZ = accounts[4]
		const addressjv2tqUn = accounts[4]
		const uintI0i0tJk = BigInt("1228")
		const addressPaYfCZm = accounts[4]
		const boolGa5Bp9p = await Cover_ZapIn_General_V1DZLHdn0.isOwner.call({from: accounts[2]});
		const uint16PicjEk4 = await Cover_ZapIn_General_V1DZLHdn0.set_new_goodwill.call(uintJ0ZPs4m, {from: accounts[3]});
		await Cover_ZapIn_General_V1DZLHdn0.onlyOwner.call({from: accounts[2]});
		const 
mxx5Gur = await Cover_ZapIn_General_V1DZLHdn0._enterPosition.call(addressPaYfCZm, uintI0i0tJk, addressjv2tqUn, addressRrA0pFZ, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttb2gFW0 = BigInt("1297")
		const Cover_ZapIn_General_V1CHu5Xvc = await Cover_ZapIn_General_V1.new(uinttb2gFW0, {from: accounts[1]});
		const addressxSI2mXO = accounts[0]
		const uintW9qOfvG = BigInt("932")
		const addressKuZSWxg = accounts[2]
		const addressVKJUpWd = accounts[3]
		const addressGDgpAg = await Cover_ZapIn_General_V1CHu5Xvc.inCaseTokengetsStuck.call(addressxSI2mXO, {from: accounts[1]});
		await Cover_ZapIn_General_V1CHu5Xvc.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1CHu5Xvc._enterCover.call(addressKuZSWxg, uintW9qOfvG, {from: accounts[2]});
		await Cover_ZapIn_General_V1CHu5Xvc.toggleContractActive.call({from: accounts[0]});
		const 
YnkWGVa = await Cover_ZapIn_General_V1CHu5Xvc._getCoverDetails.call(addressVKJUpWd, {from: accounts[3]});
		await Cover_ZapIn_General_V1CHu5Xvc.stopInEmergency.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uint4d02FA = BigInt("1267")
		const Cover_ZapIn_General_V1UvCDEvF = await Cover_ZapIn_General_V1.new(uint4d02FA, {from: accounts[5]});
		const byteateKklo = "0x130b0a0e0d070e1b1d1d1f20"
		const addresshfmFxVR = accounts[1]
		const addressNpOKpVZ = accounts[4]
		const uintE2OmGT = BigInt("938")
		const addressdTI6f1y = "0x0000000000000000000000000000000000000001"
		const addresst3cXOxX = "0x0000000000000000000000000000000000000002"
		const addressJzbZyV4 = accounts[0]
		const addressyWB2pG2 = accounts[0]
		const uintcpCoigR = BigInt("1643")
		const addressCvGMc5e = accounts[0]
		const addresscUL7Vvy = accounts[0]
		const addressd8iPxS0 = accounts[2]
		const uintcGlmdrZ = BigInt("1653")
		const addressDTTa8aj = accounts[0]
		const addressclVXtbN = await Cover_ZapIn_General_V1UvCDEvF.owner.call({from: accounts[1]});
		const 
W0ZE6xn = await Cover_ZapIn_General_V1UvCDEvF.ZapIn.call(addressyWB2pG2, addressJzbZyV4, addresst3cXOxX, addressdTI6f1y, uintE2OmGT, addressNpOKpVZ, addresshfmFxVR, byteateKklo, {from: accounts[3]});
		await Cover_ZapIn_General_V1UvCDEvF.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1UvCDEvF.stopInEmergency.call({from: accounts[2]});
		const boolryDZFsr = await Cover_ZapIn_General_V1UvCDEvF.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1UvCDEvF._enterCover.call(addressCvGMc5e, uintcpCoigR, {from: accounts[3]});
		const 
Iu4TVHb = await Cover_ZapIn_General_V1UvCDEvF._enterPosition.call(addressDTTa8aj, uintcGlmdrZ, addressd8iPxS0, addresscUL7Vvy, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwMK8GHb = BigInt("758")
		const Cover_ZapIn_General_V1tjuYygN = await Cover_ZapIn_General_V1.new(uintwMK8GHb, {from: accounts[2]});
		const addressLYOl62m = accounts[0]
		const addressvuCBdSs = accounts[4]
		await Cover_ZapIn_General_V1tjuYygN.toggleContractActive.call({from: accounts[2]});
		const addressAKPnK3A = await Cover_ZapIn_General_V1tjuYygN.transferOwnership.call(addressLYOl62m, {from: accounts[3]});
		const 
QbzzbYx = await Cover_ZapIn_General_V1tjuYygN._getCoverDetails.call(addressvuCBdSs, {from: accounts[0]});
		const boolA2Dlza9 = await Cover_ZapIn_General_V1tjuYygN.isOwner.call({from: accounts[0]});
		const addressifUSXvS = await Cover_ZapIn_General_V1tjuYygN.owner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvBR5fLx = BigInt("1761")
		const Cover_ZapIn_General_V1TsPRp6Y = await Cover_ZapIn_General_V1.new(uintvBR5fLx, {from: accounts[0]});
		const byteTq7AztP = "0x1a201f1101201c140c121b06190c1014201e16040b10180f050712"
		const addressA5XfG0F = accounts[3]
		const addressOv5N6rh = accounts[3]
		const uintcM4ywh7 = BigInt("1097")
		const addressLIgqIAf = accounts[0]
		const addresskr0M0R3 = accounts[4]
		const addressBZMCZiR = "0x0000000000000000000000000000000000000001"
		const addressfdmARZD = accounts[3]
		const address2BcQtg = accounts[4]
		const addressIPuv5qp = accounts[0]
		await Cover_ZapIn_General_V1TsPRp6Y.renounceOwnership.call({from: accounts[0]});
		const 
zGgjJU6 = await Cover_ZapIn_General_V1TsPRp6Y.ZapIn.call(addressfdmARZD, addressBZMCZiR, addresskr0M0R3, addressLIgqIAf, uintcM4ywh7, addressOv5N6rh, addressA5XfG0F, byteTq7AztP, {from: accounts[1]});
		const 
NYGFAoH = await Cover_ZapIn_General_V1TsPRp6Y._getCoverDetails.call(address2BcQtg, {from: accounts[1]});
		const addressdVJis2W = await Cover_ZapIn_General_V1TsPRp6Y.transferOwnership.call(addressIPuv5qp, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintltcmYmz = BigInt("1530")
		const Cover_ZapIn_General_V1vnOorE = await Cover_ZapIn_General_V1.new(uintltcmYmz, {from: "0x0000000000000000000000000000000000000001"});
		const bytezmw7ugf = "0x121c0f0b0a1d03"
		const addressfHXL5Y = accounts[1]
		const addressPfD40AI = accounts[1]
		const uintqgUyBCC = BigInt("887")
		const addressVlq3NNW = accounts[1]
		const addressz1XY5F0 = accounts[0]
		const addressnh1RD2 = accounts[1]
		const addressAvLFrK = accounts[1]
		const boolhOn23zv = await Cover_ZapIn_General_V1vnOorE.isOwner.call({from: accounts[2]});
		const 
PM7LcEA = await Cover_ZapIn_General_V1vnOorE.ZapIn.call(addressAvLFrK, addressnh1RD2, addressz1XY5F0, addressVlq3NNW, uintqgUyBCC, addressPfD40AI, addressfHXL5Y, bytezmw7ugf, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintsk6Uz2D = BigInt("1866")
		const Cover_ZapIn_General_V1zhp2fus = await Cover_ZapIn_General_V1.new(uintsk6Uz2D, {from: accounts[4]});
		const addressQzp9wmh = accounts[3]
		const bytePjzkUz = "0x0a03171e141c091416060804111a1b0d0705170f051e0b1b07"
		const addressknCWEPc = "0x0000000000000000000000000000000000000001"
		const addressa8hpcSl = accounts[5]
		const uintfMSMDe1 = BigInt("465")
		const addressPgsxMYL = accounts[2]
		const addressx81ID1M = accounts[6]
		const addressdWSVEaT = accounts[1]
		const addressHm00A1a = accounts[2]
		const uintK7432YB = BigInt("1138")
		const uintDla8T0I = BigInt("203")
		const addresskA9FTrO = accounts[5]
		const addressJAr9tN = await Cover_ZapIn_General_V1zhp2fus.transferOwnership.call(addressQzp9wmh, {from: accounts[4]});
		const 
IREMh26 = await Cover_ZapIn_General_V1zhp2fus.ZapIn.call(addressHm00A1a, addressdWSVEaT, addressx81ID1M, addressPgsxMYL, uintfMSMDe1, addressa8hpcSl, addressknCWEPc, bytePjzkUz, {from: accounts[2]});
		const uint16YFivX1y = await Cover_ZapIn_General_V1zhp2fus.set_new_goodwill.call(uintK7432YB, {from: accounts[2]});
		await Cover_ZapIn_General_V1zhp2fus._enterCover.call(addresskA9FTrO, uintDla8T0I, {from: accounts[2]});
	});
})