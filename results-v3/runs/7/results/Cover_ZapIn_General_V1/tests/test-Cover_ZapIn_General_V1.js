const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQYAn9Um = BigInt("1289")
		const Cover_ZapIn_General_V1AhrnuHx = await Cover_ZapIn_General_V1.new(uintQYAn9Um, {from: accounts[5]});
		const addressYcrAoVP = accounts[3]
		const addressEpuJL7l = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1AhrnuHx.stopInEmergency.call({from: accounts[0]});
		const 
IHBh3c5 = await Cover_ZapIn_General_V1AhrnuHx._getCoverDetails.call(addressYcrAoVP, {from: accounts[1]});
		const address25CMst = await Cover_ZapIn_General_V1AhrnuHx.owner.call({from: accounts[2]});
		const addressx9Rtuuf = await Cover_ZapIn_General_V1AhrnuHx.toPayable.call(addressEpuJL7l, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintgSj4FqO = BigInt("753")
		const Cover_ZapIn_General_V1SgV8MNP = await Cover_ZapIn_General_V1.new(uintgSj4FqO, {from: accounts[0]});
		const uintn4jNzEr = BigInt("819")
		const addressMP53lpJ = accounts[0]
		const uintQX3sWu = BigInt("25")
		const addressCj79I09 = accounts[3]
		const boolkaVIGkt = await Cover_ZapIn_General_V1SgV8MNP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUZ0yqXE = await Cover_ZapIn_General_V1SgV8MNP.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1SgV8MNP._enterCover.call(addressMP53lpJ, uintn4jNzEr, {from: accounts[1]});
		await Cover_ZapIn_General_V1SgV8MNP._enterCover.call(addressCj79I09, uintQX3sWu, {from: accounts[4]});
		await Cover_ZapIn_General_V1SgV8MNP.withdraw.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaTBqNAg = BigInt("323")
		const Cover_ZapIn_General_V1gg8AhIf = await Cover_ZapIn_General_V1.new(uintaTBqNAg, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1gg8AhIf.onlyOwner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1gg8AhIf.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintOXNMseW = BigInt("1533")
		const Cover_ZapIn_General_V1Qoj2DW1 = await Cover_ZapIn_General_V1.new(uintOXNMseW, {from: accounts[5]});
		const uintE1yHtgM = BigInt("58")
		const addressDdtqs9G = accounts[2]
		const addresssaRhxXH = accounts[0]
		const uintEk9BIf = BigInt("1494")
		const addressHjLJSxb = accounts[3]
		const addressjZrrMsw = accounts[1]
		const uint16mSxAt2z = await Cover_ZapIn_General_V1Qoj2DW1.set_new_goodwill.call(uintE1yHtgM, {from: accounts[1]});
		const 
siE2oUM = await Cover_ZapIn_General_V1Qoj2DW1._enterPosition.call(addressHjLJSxb, uintEk9BIf, addresssaRhxXH, addressDdtqs9G, {from: accounts[0]});
		const addressFQDB8ve = await Cover_ZapIn_General_V1Qoj2DW1.owner.call({from: accounts[0]});
		const 
Qggf0EG = await Cover_ZapIn_General_V1Qoj2DW1._getCoverDetails.call(addressjZrrMsw, {from: accounts[1]});
		await Cover_ZapIn_General_V1Qoj2DW1.onlyOwner.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintTvvzmt = BigInt("729")
		const Cover_ZapIn_General_V1wTAn30e = await Cover_ZapIn_General_V1.new(uintTvvzmt, {from: accounts[0]});
		const addressJsdYzNl = accounts[3]
		const uintPfylZXB = BigInt("1666")
		const addressDJzDnx = accounts[2]
		const uintt3EdnZi = BigInt("166")
		const addressbzMe72P = accounts[1]
		const addressUiguQsx = accounts[1]
		const addressGT18fPG = await Cover_ZapIn_General_V1wTAn30e.owner.call({from: accounts[4]});
		const 
QsFlVTb = await Cover_ZapIn_General_V1wTAn30e._getCoverDetails.call(addressJsdYzNl, {from: accounts[1]});
		await Cover_ZapIn_General_V1wTAn30e.toggleContractActive.call({from: accounts[3]});
		await Cover_ZapIn_General_V1wTAn30e._enterCover.call(addressDJzDnx, uintPfylZXB, {from: accounts[2]});
		await Cover_ZapIn_General_V1wTAn30e._enterCover.call(addressbzMe72P, uintt3EdnZi, {from: accounts[1]});
		const addressJXhdqme = await Cover_ZapIn_General_V1wTAn30e.inCaseTokengetsStuck.call(addressUiguQsx, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinteJi5tzr = BigInt("1027")
		const Cover_ZapIn_General_V1sosxjYh = await Cover_ZapIn_General_V1.new(uinteJi5tzr, {from: accounts[2]});
		const byteNC24XeY = "0x0b0c171f1f141b17110a05131c0e0b160b040c0205040a111e14190d1315"
		const addressfwptKtl = accounts[3]
		const addressGFVktW6 = accounts[3]
		const uintub3KQwn = BigInt("543")
		const addressvnrGRJ = "0x0000000000000000000000000000000000000001"
		const addressb3JtRs = accounts[4]
		const addressO5COIUm = accounts[0]
		const addressIeAiwh5 = accounts[5]
		const addressd9GlgmS = accounts[3]
		const 
xEzttS = await Cover_ZapIn_General_V1sosxjYh.ZapIn.call(addressIeAiwh5, addressO5COIUm, addressb3JtRs, addressvnrGRJ, uintub3KQwn, addressGFVktW6, addressfwptKtl, byteNC24XeY, {from: accounts[1]});
		const addressKlX2UA = await Cover_ZapIn_General_V1sosxjYh.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1sosxjYh.withdraw.call({from: accounts[1]});
		const 
gPf5Bmw = await Cover_ZapIn_General_V1sosxjYh._getCoverDetails.call(addressd9GlgmS, {from: accounts[1]});
		await Cover_ZapIn_General_V1sosxjYh.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintBdSnlr = BigInt("923")
		const Cover_ZapIn_General_V1ZEYH4K9 = await Cover_ZapIn_General_V1.new(uintBdSnlr, {from: accounts[2]});
		const uintQkTFeM = BigInt("635")
		const boolDfllvH1 = await Cover_ZapIn_General_V1ZEYH4K9.isOwner.call({from: accounts[4]});
		await Cover_ZapIn_General_V1ZEYH4K9.renounceOwnership.call({from: accounts[2]});
		const uint16qraS6pH = await Cover_ZapIn_General_V1ZEYH4K9.set_new_goodwill.call(uintQkTFeM, {from: accounts[1]});
		await Cover_ZapIn_General_V1ZEYH4K9.renounceOwnership.call({from: accounts[4]});
		await Cover_ZapIn_General_V1ZEYH4K9.nonReentrant.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintPyq99mL = BigInt("1027")
		const Cover_ZapIn_General_V1sosxjYh = await Cover_ZapIn_General_V1.new(uintPyq99mL, {from: accounts[2]});
		const uintybajfux = BigInt("1721")
		const addresssoB7mkS = accounts[0]
		const byteARw0qvH = "0x0b0c171f1f141b17110a05131c0e0b160b040c0205040a111e14190d1315"
		const addressH9bvcLt = accounts[3]
		const addressdVgvzRP = accounts[3]
		const uintFTz39P7 = BigInt("543")
		const addressW9esfJ = "0x0000000000000000000000000000000000000001"
		const addresskrSfRiC = accounts[4]
		const addressFLYgNMR = accounts[0]
		const addressWl2jE9k = accounts[5]
		const uint16Tl5Eho3 = await Cover_ZapIn_General_V1sosxjYh.set_new_goodwill.call(uintybajfux, {from: accounts[2]});
		const 
ASVTkT4 = await Cover_ZapIn_General_V1sosxjYh._getCoverDetails.call(addresssoB7mkS, {from: accounts[2]});
		const 
xEzttS = await Cover_ZapIn_General_V1sosxjYh.ZapIn.call(addressWl2jE9k, addressFLYgNMR, addresskrSfRiC, addressW9esfJ, uintFTz39P7, addressdVgvzRP, addressH9bvcLt, byteARw0qvH, {from: accounts[1]});
		await Cover_ZapIn_General_V1sosxjYh.withdraw.call({from: accounts[1]});
		await Cover_ZapIn_General_V1sosxjYh.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwlHZEvg = BigInt("1892")
		const Cover_ZapIn_General_V1qZfqQqJ = await Cover_ZapIn_General_V1.new(uintwlHZEvg, {from: accounts[1]});
		const addressmEzDMmi = accounts[1]
		await Cover_ZapIn_General_V1qZfqQqJ.toggleContractActive.call({from: accounts[1]});
		await Cover_ZapIn_General_V1qZfqQqJ.onlyOwner.call({from: accounts[4]});
		const boolCeUrqUG = await Cover_ZapIn_General_V1qZfqQqJ.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1qZfqQqJ.renounceOwnership.call({from: accounts[4]});
		const addressieJ8HUL = await Cover_ZapIn_General_V1qZfqQqJ.inCaseTokengetsStuck.call(addressmEzDMmi, {from: accounts[4]});
		await Cover_ZapIn_General_V1qZfqQqJ.stopInEmergency.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintIzZHiQJ = BigInt("1027")
		const Cover_ZapIn_General_V1sosxjYh = await Cover_ZapIn_General_V1.new(uintIzZHiQJ, {from: accounts[2]});
		const addressdp791M0 = accounts[1]
		const byteAI07MOr = "0x0a1f1c1f1f0f1a150b1613"
		const addressLRvOoqg = accounts[1]
		const addressymteXWS = accounts[0]
		const uintN3PyJlp = BigInt("637")
		const addresszy43cms = accounts[3]
		const addressTSvuzPC = accounts[1]
		const addressS5S1zW = accounts[5]
		const addresslHuSjQe = accounts[4]
		const bytegzA5zh = "0x0b0c171f1f141b17110a05131c0e0b160b040c0205040a111e14190d1315"
		const addressZiECJhB = accounts[3]
		const addressCIfFpkW = accounts[3]
		const uintnDeQUjq = BigInt("543")
		const addressJjFmqk = "0x0000000000000000000000000000000000000001"
		const addressNACRLvh = accounts[4]
		const addresskfdwdvd = accounts[0]
		const addressHvwMiVe = accounts[5]
		const addressClvAidZ = await Cover_ZapIn_General_V1sosxjYh.inCaseTokengetsStuck.call(addressdp791M0, {from: accounts[2]});
		const 
hstvy9R = await Cover_ZapIn_General_V1sosxjYh.ZapIn.call(addresslHuSjQe, addressS5S1zW, addressTSvuzPC, addresszy43cms, uintN3PyJlp, addressymteXWS, addressLRvOoqg, byteAI07MOr, {from: accounts[3]});
		const 
xEzttS = await Cover_ZapIn_General_V1sosxjYh.ZapIn.call(addressHvwMiVe, addresskfdwdvd, addressNACRLvh, addressJjFmqk, uintnDeQUjq, addressCIfFpkW, addressZiECJhB, bytegzA5zh, {from: accounts[1]});
		const addressKlX2UA = await Cover_ZapIn_General_V1sosxjYh.owner.call({from: accounts[2]});
		const addressd4xgimZ = await Cover_ZapIn_General_V1sosxjYh.owner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1sosxjYh.withdraw.call({from: accounts[1]});
		await Cover_ZapIn_General_V1sosxjYh.renounceOwnership.call({from: accounts[3]});
	});
})