const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTnHorAfu = await SALESCONTRACT.new({from: accounts[3]});
		const addressMHVp3Uj = accounts[1]
		const uintHF9OGE = BigInt("1071")
		const addresssetWtHZ = accounts[3]
		const uintjOORKgq = BigInt("842")
		const addressCEaRxP7 = accounts[2]
		const addressTXG1Jhr = "0x0000000000000000000000000000000000000001"
		const addressnUYD0lH = await SALESCONTRACTnHorAfu.setToken.call(addressMHVp3Uj, {from: accounts[1]});
		const addressFuEIWl0 = await SALESCONTRACTnHorAfu._setSalesPool.call(addresssetWtHZ, uintHF9OGE, {from: accounts[0]});
		const addressBuJB5cM = await SALESCONTRACTnHorAfu._setSalesPool.call(addressCEaRxP7, uintjOORKgq, {from: accounts[2]});
		const boolAgvfEBk = await SALESCONTRACTnHorAfu.tokenSale.call(addressTXG1Jhr, {from: accounts[5]});

		await expect(SALESCONTRACTnHorAfu.setToken.call(addressMHVp3Uj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAwVvxY9 = await SALESCONTRACT.new({from: accounts[5]});
		const addressYunaG4Q = accounts[4]
		const booltCOeqo3 = await SALESCONTRACTAwVvxY9.tokenSale.call(addressYunaG4Q, {from: accounts[5]});
		await SALESCONTRACTAwVvxY9.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTAwVvxY9.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTAwVvxY9.tokenSale.call(addressYunaG4Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTFyyoaeB = await SALESCONTRACT.new({from: accounts[1]});
		const addressX1Ij7G9 = accounts[4]
		const addressF7quR4m = accounts[2]
		const uintMchDn2V = BigInt("378")
		const addressrDSwJE = accounts[2]
		const addressRagG6Z3 = accounts[1]
		const addressMIS0PAE = accounts[1]
		await SALESCONTRACTFyyoaeB.ff.call({from: accounts[5]});
		const boolmEPri8W = await SALESCONTRACTFyyoaeB.tokenSale.call(addressX1Ij7G9, {from: accounts[0]});
		const addressME4Bra3 = await SALESCONTRACTFyyoaeB.setToken.call(addressF7quR4m, {from: accounts[4]});
		const addressg314H43 = await SALESCONTRACTFyyoaeB._setSalesPool.call(addressrDSwJE, uintMchDn2V, {from: accounts[0]});
		const addressbhkpll0 = await SALESCONTRACTFyyoaeB.setToken.call(addressRagG6Z3, {from: accounts[1]});
		const boolzkmzyRp = await SALESCONTRACTFyyoaeB.tokenSale.call(addressMIS0PAE, {from: accounts[3]});

		await expect(SALESCONTRACTFyyoaeB.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpR9papv = await SALESCONTRACT.new({from: accounts[0]});
		const addressRVbTxmF = accounts[4]
		const addressiwH040c = await SALESCONTRACTpR9papv.setToken.call(addressRVbTxmF, {from: accounts[0]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTpR9papv.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpR9papv = await SALESCONTRACT.new({from: accounts[0]});
		const uintANAvenL = BigInt("1803")
		const uintLuF0hMD = await SALESCONTRACTpR9papv._setStage.call(uintANAvenL, {from: accounts[0]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[1]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[0]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTpR9papv.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpR9papv = await SALESCONTRACT.new({from: accounts[0]});
		const uintlUj0NHx = BigInt("463")
		const addressw27qhF2 = accounts[0]
		await SALESCONTRACTpR9papv.clearTokens.call({from: accounts[0]});
		const uinttlUM4yW = await SALESCONTRACTpR9papv._setStage.call(uintlUj0NHx, {from: accounts[3]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[0]});
		const addressi9yUhVF = await SALESCONTRACTpR9papv.setToken.call(addressw27qhF2, {from: accounts[2]});

		await expect(SALESCONTRACTpR9papv.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpR9papv = await SALESCONTRACT.new({from: accounts[0]});
		const uintzAHmlkD = BigInt("1786")
		const addressHUo0oYq = "0x0000000000000000000000000000000000000001"
		const address52oIfZ = await SALESCONTRACTpR9papv._setSalesPool.call(addressHUo0oYq, uintzAHmlkD, {from: accounts[0]});
		await SALESCONTRACTpR9papv.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTpR9papv.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAwVvxY9 = await SALESCONTRACT.new({from: accounts[5]});
		const addressOBEG7T8 = accounts[5]
		await SALESCONTRACTAwVvxY9.clearETH.call({from: accounts[5]});
		await SALESCONTRACTAwVvxY9.clearTokens.call({from: accounts[2]});
		const booltCOeqo3 = await SALESCONTRACTAwVvxY9.tokenSale.call(addressOBEG7T8, {from: accounts[5]});

		await expect(SALESCONTRACTAwVvxY9.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNtXPpZ9 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwQy8Bx = BigInt("10")
		const addressCOYpfla = accounts[1]
		const addressqkfHrbf = accounts[0]
		const uintbUEL8eH = BigInt("1179")
		await SALESCONTRACTNtXPpZ9.clearETH.call({from: accounts[0]});
		await SALESCONTRACTNtXPpZ9.clearTokens.call({from: accounts[2]});
		const addressOt3RAD = await SALESCONTRACTNtXPpZ9._setSalesPool.call(addressCOYpfla, uintwQy8Bx, {from: accounts[0]});
		await SALESCONTRACTNtXPpZ9.clearTokens.call({from: accounts[1]});
		const addressWsXbet = await SALESCONTRACTNtXPpZ9.setToken.call(addressqkfHrbf, {from: accounts[0]});
		const uintFqWfFbN = await SALESCONTRACTNtXPpZ9._setStage.call(uintbUEL8eH, {from: "0x0000000000000000000000000000000000000001"});
	});
})