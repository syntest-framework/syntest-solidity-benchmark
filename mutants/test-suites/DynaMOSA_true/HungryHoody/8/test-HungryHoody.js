const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodynJWBmEs = await HungryHoody.new({from: accounts[3]});
		const uintzpBkbkE = BigInt("274")
		const addressu8LOUKd = accounts[4]
		const uintTmjm5ss = BigInt("554")
		const uints57l1Ko = BigInt("178")
//		const boolr56tuh8 = await HungryHoodynJWBmEs.transfer.call(addressu8LOUKd, uintzpBkbkE, {from: accounts[1]});
//		const uintwK4wM58 = await HungryHoodynJWBmEs.totalSupply.call({from: accounts[4]});
//		const uinthaHTv5M = await HungryHoodynJWBmEs.safeSub.call(uints57l1Ko, uintTmjm5ss, {from: accounts[0]});

		await expect(HungryHoodynJWBmEs.transfer.call(addressu8LOUKd, uintzpBkbkE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyiZy15fw = await HungryHoody.new({from: accounts[0]});
		const uintkZd2FuA = BigInt("1072")
		const uintRlxtAqq = BigInt("693")
		const uintRFLBN2z = BigInt("135")
		const addresseYVkb8u = accounts[3]
		const uintPX5t4lP = BigInt("1728")
		const uintc9Mnvz8 = BigInt("1820")
		const uintTnEJnAo = await HungryHoodyiZy15fw.safeDiv.call(uintRlxtAqq, uintkZd2FuA, {from: accounts[0]});
		const uintJyFR9W2 = await HungryHoodyiZy15fw.totalSupply.call({from: accounts[3]});
		const boolpDhdRlT = await HungryHoodyiZy15fw.approve.call(addresseYVkb8u, uintRFLBN2z, {from: accounts[1]});
		const uintg8ZyKR = await HungryHoodyiZy15fw.safeDiv.call(uintc9Mnvz8, uintPX5t4lP, {from: accounts[0]});

		assert.equal(boolpDhdRlT, true)
		assert.equal(uintJyFR9W2, BigInt("25000000000000000000"))
		assert.equal(uintTnEJnAo, BigInt("0"))
		assert.equal(uintg8ZyKR, BigInt("1"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyH2K8E2Z = await HungryHoody.new({from: accounts[1]});
		const uintTdet76U = BigInt("123")
		const uintnzXLr95 = BigInt("2019")
		const uintHLCZPDF = BigInt("431")
		const uinthfSv8Ww = BigInt("1543")
		const uintTrE41DT = BigInt("1132")
		const uintmN8JCDr = BigInt("539")
		const addresszejo0a = accounts[4]
		const addressrdwzH5j = accounts[1]
		const uintxZgOwNx = await HungryHoodyH2K8E2Z.safeDiv.call(uintnzXLr95, uintTdet76U, {from: accounts[2]});
		const uintnn1hXvn = await HungryHoodyH2K8E2Z.totalSupply.call({from: accounts[2]});
		const uintMOtT7EV = await HungryHoodyH2K8E2Z.safeMul.call(uinthfSv8Ww, uintHLCZPDF, {from: accounts[5]});
		const uintjCeohs = await HungryHoodyH2K8E2Z.safeAdd.call(uintmN8JCDr, uintTrE41DT, {from: accounts[0]});
		const uintJdPwwQ = await HungryHoodyH2K8E2Z.allowance.call(addressrdwzH5j, addresszejo0a, {from: accounts[1]});

		assert.equal(uintJdPwwQ, BigInt("0"))
		assert.equal(uintMOtT7EV, BigInt("665033"))
		assert.equal(uintjCeohs, BigInt("1671"))
		assert.equal(uintnn1hXvn, BigInt("25000000000000000000"))
		assert.equal(uintxZgOwNx, BigInt("16"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodya9Txl6c = await HungryHoody.new({from: accounts[4]});
		const uintvBbPHl = BigInt("1419")
		const addressAe6vSN = accounts[2]
		const addressGOBTlg = accounts[2]
		const boolwCmbrEd = await HungryHoodya9Txl6c.approve.call(addressAe6vSN, uintvBbPHl, {from: "0x0000000000000000000000000000000000000001"});
		const uintPkNOmGt = await HungryHoodya9Txl6c.balanceOf.call(addressGOBTlg, {from: accounts[1]});

		assert.equal(boolwCmbrEd, true)
		assert.equal(uintPkNOmGt, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynTkRZre = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFOjFTe = BigInt("742")
		const addressBRZQOvu = accounts[0]
		const uintjVzSrxf = BigInt("1300")
		const uintECpTwco = BigInt("501")
		const addressngFTZG = accounts[3]
		const addressGGBCumB = accounts[3]
		const addressIQu3SCS = accounts[3]
		const addressAbYozAr = accounts[2]
		const boolZrCYGwu = await HungryHoodynTkRZre.approve.call(addressBRZQOvu, uintFOjFTe, {from: accounts[3]});
		const uintbz1XTkb = await HungryHoodynTkRZre.safeMul.call(uintECpTwco, uintjVzSrxf, {from: accounts[1]});
		const uintA4Wx7h6 = await HungryHoodynTkRZre.allowance.call(addressGGBCumB, addressngFTZG, {from: "0x0000000000000000000000000000000000000001"});
		const uintrGBvsY6 = await HungryHoodynTkRZre.allowance.call(addressAbYozAr, addressIQu3SCS, {from: accounts[3]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyNNzySid = await HungryHoody.new({from: accounts[4]});
		const uintjyOo3XY = BigInt("61")
		const uintFJ34XFD = BigInt("1758")
		const uintrbRRKWf = BigInt("1565")
		const address1II96e = "0x0000000000000000000000000000000000000001"
		const uintcPKV54J = BigInt("794")
		const addressxI7Usjd = accounts[2]
		const addressaiiEdA1 = accounts[3]
		const uints3HZMKE = await HungryHoodyNNzySid.safeDiv.call(uintFJ34XFD, uintjyOo3XY, {from: accounts[0]});
		const boolInkh5I = await HungryHoodyNNzySid.transfer.call(address1II96e, uintrbRRKWf, {from: accounts[4]});
//		const bool4PDp8r = await HungryHoodyNNzySid.transferFrom.call(addressaiiEdA1, addressxI7Usjd, uintcPKV54J, {from: accounts[1]});
//		const uintUKa9WZ0 = await HungryHoodyNNzySid.totalSupply.call({from: accounts[1]});

		assert.equal(boolInkh5I, true)
		assert.equal(uints3HZMKE, BigInt("28"))
		await expect(HungryHoodyNNzySid.transferFrom.call(addressaiiEdA1, addressxI7Usjd, uintcPKV54J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})