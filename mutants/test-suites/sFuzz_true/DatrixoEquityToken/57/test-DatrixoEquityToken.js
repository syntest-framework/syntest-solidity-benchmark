const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressCj2Y2sM = accounts[3]
		const uintciSDnFA = BigInt("586")
		const DatrixoEquityTokenmk3fG2 = await DatrixoEquityToken.new(addressCj2Y2sM, uintciSDnFA, {from: accounts[2]});
		const uintzLL9gk = BigInt("784")
		const addressoKb7li5 = accounts[5]
		const uintWrdHTtM = BigInt("1417")
		const addressulJ8zTg = accounts[0]
		const addressfq2MveN = accounts[2]
//		const boolK9EoJKA = await DatrixoEquityTokenmk3fG2.transfer.call(addressoKb7li5, uintzLL9gk, {from: "0x0000000000000000000000000000000000000001"});
//		const booli0p90Rt = await DatrixoEquityTokenmk3fG2.transfer.call(addressulJ8zTg, uintWrdHTtM, {from: accounts[5]});
//		const addressarrayW38tJTm = await DatrixoEquityTokenmk3fG2.getShareholdersArray.call({from: accounts[2]});
//		const boolryEJ4Z1 = await DatrixoEquityTokenmk3fG2.removeShareholder.call(addressfq2MveN, {from: accounts[1]});

		await expect(DatrixoEquityTokenmk3fG2.transfer.call(addressoKb7li5, uintzLL9gk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswE62TPQ = accounts[4]
		const uintPsaKlNw = BigInt("13")
		const DatrixoEquityToken5eibLt = await DatrixoEquityToken.new(addresswE62TPQ, uintPsaKlNw, {from: accounts[1]});
		const uintXDxq6q = BigInt("1363")
		const addressX3HtOXO = "0x0000000000000000000000000000000000000001"
//		await DatrixoEquityToken5eibLt.afterStartTime.call({from: accounts[2]});
//		const boolSNADJat = await DatrixoEquityToken5eibLt.transfer.call(addressX3HtOXO, uintXDxq6q, {from: accounts[4]});
//		const addressarrayXTlJT99 = await DatrixoEquityToken5eibLt.getShareholdersArray.call({from: accounts[5]});

		await expect(DatrixoEquityToken5eibLt.afterStartTime.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnlT4bC8 = "0x0000000000000000000000000000000000000001"
		const uintTyvBQH2 = BigInt("383")
		const DatrixoEquityTokenAXsXXT = await DatrixoEquityToken.new(addressnlT4bC8, uintTyvBQH2, {from: accounts[0]});
		const addressN75oCjk = accounts[0]
		const addressarraySdJrpqh = await DatrixoEquityTokenAXsXXT.getShareholdersArray.call({from: accounts[3]});
//		const booljwZRSaH = await DatrixoEquityTokenAXsXXT.removeShareholder.call(addressN75oCjk, {from: accounts[1]});
//		const addressarrayHqH1ro = await DatrixoEquityTokenAXsXXT.getShareholdersArray.call({from: accounts[1]});

		assert.equal(addressarraySdJrpqh, )
		await expect(DatrixoEquityTokenAXsXXT.removeShareholder.call(addressN75oCjk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQFyM0tk = accounts[0]
		const uintByCtojn = BigInt("438")
		const DatrixoEquityTokena98j3Km = await DatrixoEquityToken.new(addressQFyM0tk, uintByCtojn, {from: accounts[0]});
		const addresslc2TsKg = accounts[4]
		const uintVncUf7k = BigInt("1345")
		const uintnsfKS0 = BigInt("928")
		const addressjR95qnl = "0x0000000000000000000000000000000000000001"
		const addressBnMFyvX = accounts[4]
//		const bool5j95vG = await DatrixoEquityTokena98j3Km.removeShareholder.call(addresslc2TsKg, {from: accounts[0]});
//		const uintiWd1pgM = await DatrixoEquityTokena98j3Km.setStart.call(uintVncUf7k, {from: accounts[2]});
//		const boolva63nce = await DatrixoEquityTokena98j3Km.transferFrom.call(addressBnMFyvX, addressjR95qnl, uintnsfKS0, {from: accounts[0]});
//		await DatrixoEquityTokena98j3Km.afterStartTime.call({from: accounts[0]});
//		await DatrixoEquityTokena98j3Km.onlyOwner.call({from: accounts[0]});

		await expect(DatrixoEquityTokena98j3Km.removeShareholder.call(addresslc2TsKg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressthkJzNB = accounts[1]
		const uintVahgO0O = BigInt("1152")
		const DatrixoEquityTokenmtqI0Aq = await DatrixoEquityToken.new(addressthkJzNB, uintVahgO0O, {from: "0x0000000000000000000000000000000000000001"});
		const addressCm7LQn5 = accounts[4]
		const addressjsVC4nu = accounts[2]
		await DatrixoEquityTokenmtqI0Aq.onlyOwner.call({from: accounts[0]});
		const boolw5lOEqV = await DatrixoEquityTokenmtqI0Aq.removeShareholder.call(addressCm7LQn5, {from: accounts[3]});
		await DatrixoEquityTokenmtqI0Aq.afterStartTime.call({from: accounts[1]});
		const addressarrayiT3QQP6 = await DatrixoEquityTokenmtqI0Aq.getShareholdersArray.call({from: accounts[2]});
		await DatrixoEquityTokenmtqI0Aq.afterStartTime.call({from: accounts[2]});
		const boolVJujjKl = await DatrixoEquityTokenmtqI0Aq.removeShareholder.call(addressjsVC4nu, {from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDNAIOPS = accounts[4]
		const uintADutxe9 = BigInt("13")
		const DatrixoEquityToken5eibLt = await DatrixoEquityToken.new(addressDNAIOPS, uintADutxe9, {from: accounts[1]});
		const uintjoURNx5 = BigInt("677")
//		const uintPxl58b = await DatrixoEquityToken5eibLt.setStart.call(uintjoURNx5, {from: accounts[4]});
//		const addressarrayXTlJT99 = await DatrixoEquityToken5eibLt.getShareholdersArray.call({from: accounts[5]});

		await expect(DatrixoEquityToken5eibLt.setStart.call(uintjoURNx5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswXAVTq4 = accounts[0]
		const uintASOp2AK = BigInt("438")
		const DatrixoEquityTokena98j3Km = await DatrixoEquityToken.new(addresswXAVTq4, uintASOp2AK, {from: accounts[0]});
		const uintAyq09xX = BigInt("1359")
		const addressQVksIxV = accounts[2]
		const addressjUx8j9L = accounts[6]
		const boolLi6Xe0 = await DatrixoEquityTokena98j3Km.transfer.call(addressQVksIxV, uintAyq09xX, {from: accounts[0]});
		const addressarrayqL6iT01 = await DatrixoEquityTokena98j3Km.getShareholdersArray.call({from: accounts[3]});
//		const bool5j95vG = await DatrixoEquityTokena98j3Km.removeShareholder.call(addressjUx8j9L, {from: accounts[0]});

		assert.equal(addressarrayqL6iT01, )
		assert.equal(boolLi6Xe0, true)
		await expect(DatrixoEquityTokena98j3Km.removeShareholder.call(addressjUx8j9L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshazndl1 = accounts[4]
		const uintcT1AXxN = BigInt("13")
		const DatrixoEquityToken5eibLt = await DatrixoEquityToken.new(addresshazndl1, uintcT1AXxN, {from: accounts[1]});
		const uintpk5xxAu = BigInt("423")
		const addressdgnwr5 = accounts[1]
		const addressxvpWxLl = accounts[5]
		const uintARRBlIr = BigInt("729")
		const addressed0vDDY = accounts[3]
		const addressOwZeCrS = accounts[2]
//		const boolPmCRfal = await DatrixoEquityToken5eibLt.transferFrom.call(addressxvpWxLl, addressdgnwr5, uintpk5xxAu, {from: accounts[4]});
//		const boolEOYXhFZ = await DatrixoEquityToken5eibLt.transfer.call(addressed0vDDY, uintARRBlIr, {from: accounts[5]});
//		const addressarrayXTlJT99 = await DatrixoEquityToken5eibLt.getShareholdersArray.call({from: accounts[5]});
//		const boolrbwSryQ = await DatrixoEquityToken5eibLt.removeShareholder.call(addressOwZeCrS, {from: accounts[4]});

		await expect(DatrixoEquityToken5eibLt.transferFrom.call(addressxvpWxLl, addressdgnwr5, uintpk5xxAu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUrQNt5Y = accounts[4]
		const uintXm06Ti8 = BigInt("13")
		const DatrixoEquityToken5eibLt = await DatrixoEquityToken.new(addressUrQNt5Y, uintXm06Ti8, {from: accounts[1]});
		const uintXWwo4ai = BigInt("1714")
		const addresslxDJln4 = accounts[4]
//		const boolPtBMAbw = await DatrixoEquityToken5eibLt.transfer.call(addresslxDJln4, uintXWwo4ai, {from: accounts[4]});

		await expect(DatrixoEquityToken5eibLt.transfer.call(addresslxDJln4, uintXWwo4ai, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressvmpYzml = accounts[0]
		const uintYVMpKvN = BigInt("438")
		const DatrixoEquityTokena98j3Km = await DatrixoEquityToken.new(addressvmpYzml, uintYVMpKvN, {from: accounts[0]});
		const uintvTQTHga = BigInt("611")
		const addressTcxHWhX = accounts[2]
		const addresszirETnV = accounts[0]
		const address2Q4D6g = accounts[5]
		const booloaZmP17 = await DatrixoEquityTokena98j3Km.transferFrom.call(addresszirETnV, addressTcxHWhX, uintvTQTHga, {from: accounts[0]});
//		const bool5j95vG = await DatrixoEquityTokena98j3Km.removeShareholder.call(address2Q4D6g, {from: accounts[0]});

		assert.equal(booloaZmP17, true)
		await expect(DatrixoEquityTokena98j3Km.removeShareholder.call(address2Q4D6g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})