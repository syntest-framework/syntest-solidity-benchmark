const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressvysqBFp = accounts[2]
		const uintfGZOkF = BigInt("36")
		const DatrixoEquityTokenefUHsJU = await DatrixoEquityToken.new(addressvysqBFp, uintfGZOkF, {from: accounts[4]});
//		await DatrixoEquityTokenefUHsJU.afterStartTime.call({from: accounts[5]});
//		const addressarrayAJhANAa = await DatrixoEquityTokenefUHsJU.getShareholdersArray.call({from: accounts[0]});

		await expect(DatrixoEquityTokenefUHsJU.afterStartTime.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbjzo7OJ = accounts[2]
		const uintWHvYGXD = BigInt("327")
		const DatrixoEquityTokenwhz9hfe = await DatrixoEquityToken.new(addressbjzo7OJ, uintWHvYGXD, {from: accounts[1]});
		const uintkRo5ehd = BigInt("1981")
		const addressENXxCCE = accounts[4]
		const addresslCaBZI = accounts[2]
//		const boolQEBbHuZ = await DatrixoEquityTokenwhz9hfe.transferFrom.call(addresslCaBZI, addressENXxCCE, uintkRo5ehd, {from: accounts[0]});
//		await DatrixoEquityTokenwhz9hfe.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenwhz9hfe.onlyOwner.call({from: accounts[4]});

		await expect(DatrixoEquityTokenwhz9hfe.transferFrom.call(addresslCaBZI, addressENXxCCE, uintkRo5ehd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHbdFRu3 = accounts[3]
		const uintXPnk8iJ = BigInt("1414")
		const DatrixoEquityTokenQLLetzM = await DatrixoEquityToken.new(addressHbdFRu3, uintXPnk8iJ, {from: accounts[0]});
		const addressPiw8bB = "0x0000000000000000000000000000000000000001"
		const addressa4rhD3T = accounts[5]
		const addressarrayAwVNTmr = await DatrixoEquityTokenQLLetzM.getShareholdersArray.call({from: accounts[1]});
//		const boolRZU1ozE = await DatrixoEquityTokenQLLetzM.removeShareholder.call(addressPiw8bB, {from: accounts[5]});
//		const boolb7FCTYp = await DatrixoEquityTokenQLLetzM.removeShareholder.call(addressa4rhD3T, {from: accounts[2]});

		assert.equal(addressarrayAwVNTmr, )
		await expect(DatrixoEquityTokenQLLetzM.removeShareholder.call(addressPiw8bB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZzluqVs = accounts[3]
		const uintmBbeATA = BigInt("1")
		const DatrixoEquityTokenv6ILP02 = await DatrixoEquityToken.new(addressZzluqVs, uintmBbeATA, {from: accounts[3]});
		const uintKRkXrr6 = BigInt("313")
		const addresskqf9GaS = accounts[2]
		const addressGFPX2Ok = accounts[2]
//		const uintxlL534z = await DatrixoEquityTokenv6ILP02.setStart.call(uintKRkXrr6, {from: accounts[3]});
//		await DatrixoEquityTokenv6ILP02.onlyOwner.call({from: accounts[3]});
//		const boolbhOkxYV = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addresskqf9GaS, {from: accounts[1]});
//		const addressarrayFx0AEOL = await DatrixoEquityTokenv6ILP02.getShareholdersArray.call({from: accounts[2]});
//		const boolR8FoevL = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addressGFPX2Ok, {from: accounts[3]});

		await expect(DatrixoEquityTokenv6ILP02.setStart.call(uintKRkXrr6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQdwCAcq = accounts[3]
		const uintcCtU1Xl = BigInt("1")
		const DatrixoEquityTokenv6ILP02 = await DatrixoEquityToken.new(addressQdwCAcq, uintcCtU1Xl, {from: accounts[3]});
		const uintlDyS9cZ = BigInt("707")
		const addresspap4VQH = accounts[1]
		const addressuuIMAj = "0x0000000000000000000000000000000000000001"
		const uintcoMjCxb = BigInt("313")
		const uintFNIzwgq = BigInt("431")
		const addressG3p4vHg = "0x0000000000000000000000000000000000000001"
		const addressyk0tJcU = accounts[2]
		const addressgPYabTG = accounts[2]
//		const boolflFJgQ1 = await DatrixoEquityTokenv6ILP02.transferFrom.call(addressuuIMAj, addresspap4VQH, uintlDyS9cZ, {from: accounts[3]});
//		const uintxlL534z = await DatrixoEquityTokenv6ILP02.setStart.call(uintcoMjCxb, {from: accounts[3]});
//		await DatrixoEquityTokenv6ILP02.onlyOwner.call({from: accounts[3]});
//		const boolu8g9bzC = await DatrixoEquityTokenv6ILP02.transfer.call(addressG3p4vHg, uintFNIzwgq, {from: accounts[1]});
//		const boolbhOkxYV = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addressyk0tJcU, {from: accounts[1]});
//		const addressarrayFx0AEOL = await DatrixoEquityTokenv6ILP02.getShareholdersArray.call({from: accounts[2]});
//		const boolR8FoevL = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addressgPYabTG, {from: accounts[3]});

		await expect(DatrixoEquityTokenv6ILP02.transferFrom.call(addressuuIMAj, addresspap4VQH, uintlDyS9cZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressfRGcc7 = "0x0000000000000000000000000000000000000001"
		const uinthGyeTLN = BigInt("210")
		const DatrixoEquityTokendzoDQkp = await DatrixoEquityToken.new(addressfRGcc7, uinthGyeTLN, {from: accounts[4]});
		const addressS3bKKDF = accounts[0]
		const uintzKssAg = BigInt("1773")
		const uintwQRE1Be = BigInt("58")
		const addressZafjL3T = accounts[1]
		const addressj1SoVHs = accounts[3]
		const uintEFmtRf = BigInt("917")
		const uintmOogiKA = BigInt("1060")
		const addressSbaH4x8 = accounts[3]
		const addressNLQq6RE = accounts[2]
//		const boolzQahuP = await DatrixoEquityTokendzoDQkp.removeShareholder.call(addressS3bKKDF, {from: "0x0000000000000000000000000000000000000001"});
//		const uintF9CvDkG = await DatrixoEquityTokendzoDQkp.setStart.call(uintzKssAg, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7MrWA5 = await DatrixoEquityTokendzoDQkp.transferFrom.call(addressj1SoVHs, addressZafjL3T, uintwQRE1Be, {from: accounts[4]});
//		const uinte8vgU6f = await DatrixoEquityTokendzoDQkp.setStart.call(uintEFmtRf, {from: accounts[2]});
//		const boolxWEXaX5 = await DatrixoEquityTokendzoDQkp.transferFrom.call(addressNLQq6RE, addressSbaH4x8, uintmOogiKA, {from: accounts[4]});

		await expect(DatrixoEquityTokendzoDQkp.removeShareholder.call(addressS3bKKDF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressKe7rtNd = accounts[3]
		const uintDuTqDD9 = BigInt("1")
		const DatrixoEquityTokenv6ILP02 = await DatrixoEquityToken.new(addressKe7rtNd, uintDuTqDD9, {from: accounts[3]});
		const uint09w8AB = BigInt("707")
		const addressLIrnKI = accounts[1]
		const addressYJKUQ4c = accounts[3]
		const addressQTGoavX = accounts[1]
		const uintieeV71z = BigInt("313")
		const uintAFSZdYi = BigInt("1419")
		const addresskuT3p66 = "0x0000000000000000000000000000000000000001"
		const addressoZcs4d3 = accounts[2]
		const boolflFJgQ1 = await DatrixoEquityTokenv6ILP02.transferFrom.call(addressYJKUQ4c, addressLIrnKI, uint09w8AB, {from: accounts[3]});
//		const boolBo5vM9E = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addressQTGoavX, {from: accounts[4]});
//		const uintxlL534z = await DatrixoEquityTokenv6ILP02.setStart.call(uintieeV71z, {from: accounts[3]});
//		await DatrixoEquityTokenv6ILP02.onlyOwner.call({from: accounts[3]});
//		const boolu8g9bzC = await DatrixoEquityTokenv6ILP02.transfer.call(addresskuT3p66, uintAFSZdYi, {from: accounts[1]});
//		const addressarrayFx0AEOL = await DatrixoEquityTokenv6ILP02.getShareholdersArray.call({from: accounts[2]});
//		const boolR8FoevL = await DatrixoEquityTokenv6ILP02.removeShareholder.call(addressoZcs4d3, {from: accounts[3]});

		assert.equal(boolflFJgQ1, true)
		await expect(DatrixoEquityTokenv6ILP02.removeShareholder.call(addressQTGoavX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszVWbYvF = accounts[2]
		const uintGIxvGG = BigInt("36")
		const DatrixoEquityTokenefUHsJU = await DatrixoEquityToken.new(addresszVWbYvF, uintGIxvGG, {from: accounts[4]});
		const uintZXlGGMw = BigInt("1991")
		const addressiEuGJr = accounts[2]
		const uintJ4NNbjP = BigInt("1570")
		const addressL7k2r7d = accounts[3]
		const addresseYaXROp = accounts[3]
		const addressmo8RCA2 = accounts[0]
//		const boolJELVGlz = await DatrixoEquityTokenefUHsJU.transfer.call(addressiEuGJr, uintZXlGGMw, {from: accounts[2]});
//		const boolxIPQK2c = await DatrixoEquityTokenefUHsJU.transferFrom.call(addresseYaXROp, addressL7k2r7d, uintJ4NNbjP, {from: accounts[1]});
//		const boolZW9BM52 = await DatrixoEquityTokenefUHsJU.removeShareholder.call(addressmo8RCA2, {from: accounts[2]});
//		const addressarrayAJhANAa = await DatrixoEquityTokenefUHsJU.getShareholdersArray.call({from: accounts[0]});

		await expect(DatrixoEquityTokenefUHsJU.transfer.call(addressiEuGJr, uintZXlGGMw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXTSaayu = accounts[1]
		const uintSidyed = BigInt("150")
		const DatrixoEquityTokenTRwvMbc = await DatrixoEquityToken.new(addressXTSaayu, uintSidyed, {from: accounts[2]});
		const uinthdnceND = BigInt("90")
		const addressgauhDnL = accounts[2]
		const uintG4g5QMp = BigInt("1007")
		const addressKotpFIc = accounts[0]
		const addressaAUq6qI = accounts[5]
		const boolxy1SnV0 = await DatrixoEquityTokenTRwvMbc.transfer.call(addressgauhDnL, uinthdnceND, {from: accounts[1]});
		const addressarrayJuRaXq6 = await DatrixoEquityTokenTRwvMbc.getShareholdersArray.call({from: accounts[1]});
//		const boolHSGTYJJ = await DatrixoEquityTokenTRwvMbc.transferFrom.call(addressaAUq6qI, addressKotpFIc, uintG4g5QMp, {from: accounts[1]});

		assert.equal(addressarrayJuRaXq6, )
		assert.equal(boolxy1SnV0, true)
		await expect(DatrixoEquityTokenTRwvMbc.transferFrom.call(addressaAUq6qI, addressKotpFIc, uintG4g5QMp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswkQUGqS = accounts[1]
		const uintmp2AGgc = BigInt("1666")
		const DatrixoEquityTokenvRmncx = await DatrixoEquityToken.new(addresswkQUGqS, uintmp2AGgc, {from: "0x0000000000000000000000000000000000000001"});
		const addressob0f2tp = "0x0000000000000000000000000000000000000001"
		const addressarrayUxOFH3X = await DatrixoEquityTokenvRmncx.getShareholdersArray.call({from: accounts[1]});
		const boolLWgxI6m = await DatrixoEquityTokenvRmncx.removeShareholder.call(addressob0f2tp, {from: accounts[4]});
		await DatrixoEquityTokenvRmncx.afterStartTime.call({from: accounts[3]});
	});
})