const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBkqDiK5 = await SALESCONTRACT.new({from: accounts[2]});
		const uintYuQD5fv = BigInt("990")
		const addressAS5X1OI = accounts[1]
		const addressIf5Z4OC = accounts[1]
		const addressItmJkt8 = accounts[0]
		await SALESCONTRACTBkqDiK5.ff.call({from: accounts[2]});
		const addressSEe3oqv = await SALESCONTRACTBkqDiK5._setSalesPool.call(addressAS5X1OI, uintYuQD5fv, {from: "0x0000000000000000000000000000000000000001"});
		const addressjpowwn = await SALESCONTRACTBkqDiK5.setToken.call(addressIf5Z4OC, {from: accounts[4]});
		const boolEM3Oaxw = await SALESCONTRACTBkqDiK5.tokenSale.call(addressItmJkt8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTBkqDiK5.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOtLDpnX = await SALESCONTRACT.new({from: accounts[2]});
		await SALESCONTRACTOtLDpnX.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTOtLDpnX.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTOtLDpnX.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbOMz3J = await SALESCONTRACT.new({from: accounts[5]});
		const addresssbIloV = accounts[4]
		const addresstHIRq0y = "0x0000000000000000000000000000000000000001"
		const uintzAjDDUz = BigInt("1645")
		const addressP5UwLhO = accounts[2]
		const uintcye0ouD = BigInt("1515")
		const addressEBuCtJl = accounts[0]
		const boolzSkKUS9 = await SALESCONTRACTbOMz3J.tokenSale.call(addresssbIloV, {from: accounts[2]});
		const addressAC5GZ7q = await SALESCONTRACTbOMz3J.setToken.call(addresstHIRq0y, {from: accounts[2]});
		const addressYgT0vRz = await SALESCONTRACTbOMz3J._setSalesPool.call(addressP5UwLhO, uintzAjDDUz, {from: accounts[4]});
		await SALESCONTRACTbOMz3J.clearTokens.call({from: accounts[3]});
		const addressFYtAVW9 = await SALESCONTRACTbOMz3J._setSalesPool.call(addressEBuCtJl, uintcye0ouD, {from: accounts[4]});

		await expect(SALESCONTRACTbOMz3J.tokenSale.call(addresssbIloV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTPpKFTh0 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthcm6M8m = BigInt("234")
		const addressSLp87Ah = accounts[2]
		const uintitqfe5e = BigInt("1228")
		const addressGg8pYZZ = accounts[0]
		const uinthFrlBrE = BigInt("1440")
		await SALESCONTRACTPpKFTh0.ff.call({from: accounts[0]});
		await SALESCONTRACTPpKFTh0.ff.call({from: accounts[2]});
		await SALESCONTRACTPpKFTh0.clearTokens.call({from: accounts[1]});
		const addresshlKMI8 = await SALESCONTRACTPpKFTh0._setSalesPool.call(addressSLp87Ah, uinthcm6M8m, {from: accounts[1]});
		const addressScGI0Ds = await SALESCONTRACTPpKFTh0._setSalesPool.call(addressGg8pYZZ, uintitqfe5e, {from: accounts[3]});
		const uintGLXuJz = await SALESCONTRACTPpKFTh0._setStage.call(uinthFrlBrE, {from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT9ZdGbu = await SALESCONTRACT.new({from: accounts[5]});
		await SALESCONTRACT9ZdGbu.clearTokens.call({from: accounts[5]});
		await SALESCONTRACT9ZdGbu.ff.call({from: accounts[5]});

		await expect(SALESCONTRACT9ZdGbu.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT9ZdGbu = await SALESCONTRACT.new({from: accounts[5]});
		await SALESCONTRACT9ZdGbu.clearETH.call({from: accounts[5]});
		await SALESCONTRACT9ZdGbu.ff.call({from: accounts[5]});

		await expect(SALESCONTRACT9ZdGbu.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTct8Hk6S = await SALESCONTRACT.new({from: accounts[2]});
		const uintQhFtOjb = BigInt("601")
		const addressbkcXQom = accounts[4]
		const addressAPrdWYl = accounts[0]
		const addressETftZ35 = accounts[2]
		const addressO8eaJy3 = accounts[4]
		const uintwWw7Gh0 = BigInt("541")
		const addressmNiic45 = accounts[3]
		const addressfDmTum1 = await SALESCONTRACTct8Hk6S._setSalesPool.call(addressbkcXQom, uintQhFtOjb, {from: accounts[2]});
		const boolWdwhu07 = await SALESCONTRACTct8Hk6S.tokenSale.call(addressAPrdWYl, {from: accounts[1]});
		await SALESCONTRACTct8Hk6S.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addressBHSVrkm = await SALESCONTRACTct8Hk6S.setToken.call(addressETftZ35, {from: accounts[4]});
		const boolP0yFoBg = await SALESCONTRACTct8Hk6S.tokenSale.call(addressO8eaJy3, {from: accounts[4]});
		const addressZAhfWLt = await SALESCONTRACTct8Hk6S._setSalesPool.call(addressmNiic45, uintwWw7Gh0, {from: accounts[1]});

		await expect(SALESCONTRACTct8Hk6S.tokenSale.call(addressAPrdWYl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTWrERKMQ = await SALESCONTRACT.new({from: accounts[1]});
		const addressiPCIhvx = accounts[3]
		const address79ogdJ = accounts[1]
		const uintgQe6V3R = BigInt("485")
		const addresswD0YOhF = accounts[4]
		const addressZslw5Qk = await SALESCONTRACTWrERKMQ.setToken.call(addressiPCIhvx, {from: accounts[1]});
		const boolk1ia2Z7 = await SALESCONTRACTWrERKMQ.tokenSale.call(address79ogdJ, {from: accounts[2]});
		await SALESCONTRACTWrERKMQ.ff.call({from: accounts[2]});
		const addressgFrrvbq = await SALESCONTRACTWrERKMQ._setSalesPool.call(addresswD0YOhF, uintgQe6V3R, {from: accounts[3]});

		await expect(SALESCONTRACTWrERKMQ.tokenSale.call(address79ogdJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT9ZdGbu = await SALESCONTRACT.new({from: accounts[5]});
		const uintY6mNoyH = BigInt("1061")
		const addressoi1AJaf = accounts[1]
		const uintOdd5By8 = await SALESCONTRACT9ZdGbu._setStage.call(uintY6mNoyH, {from: accounts[5]});
		const addressMBUpD83 = await SALESCONTRACT9ZdGbu.setToken.call(addressoi1AJaf, {from: accounts[2]});
		await SALESCONTRACT9ZdGbu.ff.call({from: accounts[5]});

		await expect(SALESCONTRACT9ZdGbu.setToken.call(addressoi1AJaf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})