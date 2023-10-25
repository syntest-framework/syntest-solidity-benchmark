const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITN8MZad = await RIT.new({from: accounts[1]});
		const uintxIY5nAI = BigInt("142")
		const addressotNADTA = accounts[2]
		const addressaq7x6d7 = accounts[3]
		const addressl6SlbZG = "0x0000000000000000000000000000000000000001"
		const uintUP8NCR4 = BigInt("1380")
		const addressQ1Lj95L = accounts[2]
//		const booltjQD8ba = await RITN8MZad.transfer.call(addressotNADTA, uintxIY5nAI, {from: accounts[0]});
//		const stringHb1lkVl = await RITN8MZad.name.call({from: accounts[5]});
//		const uint256j9vsTAN = await RITN8MZad.allowance.call(addressl6SlbZG, addressaq7x6d7, {from: accounts[2]});
//		const boolIH7WOlj = await RITN8MZad.decreaseAllowance.call(addressQ1Lj95L, uintUP8NCR4, {from: accounts[0]});

		await expect(RITN8MZad.transfer.call(addressotNADTA, uintxIY5nAI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITReX5GdM = await RIT.new({from: accounts[0]});
		const uintjdq5prf = BigInt("1877")
		const addressBpWmnAt = accounts[3]
		const uintABsjGF = BigInt("606")
		const addressrxVe98 = accounts[3]
		const addressenqHXl = accounts[1]
		const uintKCBKVip = BigInt("893")
		const boolD7cnsOQ = await RITReX5GdM.increaseAllowance.call(addressBpWmnAt, uintjdq5prf, {from: accounts[1]});
		const stringQdAx4v = await RITReX5GdM.symbol.call({from: accounts[1]});
//		const boolaDWcbK = await RITReX5GdM.transferFrom.call(addressenqHXl, addressrxVe98, uintABsjGF, {from: accounts[0]});
//		const uint2565YPFTm = await RITReX5GdM._burn.call(uintKCBKVip, {from: accounts[0]});

		assert.equal(boolD7cnsOQ, true)
		assert.equal(stringQdAx4v, "RIT 2.0")
		await expect(RITReX5GdM.transferFrom.call(addressenqHXl, addressrxVe98, uintABsjGF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITeRA0xiz = await RIT.new({from: accounts[5]});
		const uintxg0gM0e = BigInt("162")
		const addressw21lP6 = accounts[3]
		const uintinJ1qTg = BigInt("1773")
		const addressqrLDfV5 = accounts[4]
		const booloRRXYmH = await RITeRA0xiz.increaseAllowance.call(addressw21lP6, uintxg0gM0e, {from: accounts[5]});
		const uint8qTDedZJ = await RITeRA0xiz.decimals.call({from: accounts[4]});
		const boolK5FP7Z6 = await RITeRA0xiz.increaseAllowance.call(addressqrLDfV5, uintinJ1qTg, {from: accounts[1]});

		assert.equal(boolK5FP7Z6, true)
		assert.equal(booloRRXYmH, true)
		assert.equal(uint8qTDedZJ, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RIThG6ASqS = await RIT.new({from: accounts[4]});
		const uintzvyRNs1 = BigInt("554")
		const addresstO4c1JV = accounts[0]
		const uintwm6Z21M = BigInt("1461")
		const uint8gqZISW = await RIThG6ASqS.decimals.call({from: accounts[5]});
		const boolbjhQRMa = await RIThG6ASqS.increaseAllowance.call(addresstO4c1JV, uintzvyRNs1, {from: accounts[3]});
//		const uint256hZMjVr = await RIThG6ASqS._burn.call(uintwm6Z21M, {from: accounts[1]});

		assert.equal(boolbjhQRMa, true)
		assert.equal(uint8gqZISW, BigInt("18"))
		await expect(RIThG6ASqS._burn.call(uintwm6Z21M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITJnB5MQj = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGGTFoZ4 = accounts[0]
		const addressFQ1zzci = accounts[4]
		const uintOFtySy4 = BigInt("1619")
		const address3gzjnD = accounts[2]
		const addressvUORtko = accounts[5]
		const uintk0dpdLB = BigInt("438")
		const addressSIp1qmR = accounts[0]
		const addressMdodFxX = accounts[4]
		const uint256PY5nzio = await RITJnB5MQj.allowance.call(addressFQ1zzci, addressGGTFoZ4, {from: accounts[4]});
		const boolGmtbP0H = await RITJnB5MQj.transferFrom.call(addressvUORtko, address3gzjnD, uintOFtySy4, {from: accounts[2]});
		const booleZHV9b9 = await RITJnB5MQj.transferFrom.call(addressMdodFxX, addressSIp1qmR, uintk0dpdLB, {from: accounts[3]});
		const string2CNOUp = await RITJnB5MQj.name.call({from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RITHdgfewR = await RIT.new({from: accounts[0]});
		const uintAgESX2 = BigInt("1491")
		const addressng0Idi = accounts[4]
		const uintBIVZk5M = BigInt("1438")
		const addressevlAwga = accounts[5]
		const uintkqOAaoE = BigInt("288")
		const addressWttDciD = accounts[0]
		const uintDvopVr4 = BigInt("1757")
		const addressN7wCFBr = accounts[1]
		const boolykCnU8y = await RITHdgfewR.approve.call(addressng0Idi, uintAgESX2, {from: "0x0000000000000000000000000000000000000001"});
		const uint8GCLMtAV = await RITHdgfewR.decimals.call({from: accounts[1]});
		const boolPR99IVM = await RITHdgfewR.approve.call(addressevlAwga, uintBIVZk5M, {from: accounts[3]});
//		const booluiDDLkF = await RITHdgfewR.decreaseAllowance.call(addressWttDciD, uintkqOAaoE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIvNEdVm = await RITHdgfewR.approve.call(addressN7wCFBr, uintDvopVr4, {from: accounts[4]});

		assert.equal(boolPR99IVM, true)
		assert.equal(boolykCnU8y, true)
		assert.equal(uint8GCLMtAV, BigInt("18"))
		await expect(RITHdgfewR.decreaseAllowance.call(addressWttDciD, uintkqOAaoE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITbFxrCjJ = await RIT.new({from: accounts[5]});
		const uint43xklt = BigInt("25")
		const addressvWJte8U = accounts[0]
		const uint256zm5WIoo = await RITbFxrCjJ.totalSupply.call({from: accounts[3]});
		const booltaObaoS = await RITbFxrCjJ.approve.call(addressvWJte8U, uint43xklt, {from: accounts[4]});
		const uint8lBykHqX = await RITbFxrCjJ.decimals.call({from: accounts[2]});
		const stringtzJInrv = await RITbFxrCjJ.name.call({from: accounts[2]});

		assert.equal(booltaObaoS, true)
		assert.equal(stringtzJInrv, "Real Estate Investment Token")
		assert.equal(uint256zm5WIoo, BigInt("500000000000000000000000000"))
		assert.equal(uint8lBykHqX, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITeRA0xiz = await RIT.new({from: accounts[5]});
		const addresswhkrQiz = accounts[1]
		const uintiAk30WE = BigInt("1773")
		const addressczPCsXU = accounts[4]
		const uint256WyfqhX1 = await RITeRA0xiz.balanceOf.call(addresswhkrQiz, {from: accounts[5]});
		const uint8qTDedZJ = await RITeRA0xiz.decimals.call({from: accounts[4]});
		const boolK5FP7Z6 = await RITeRA0xiz.increaseAllowance.call(addressczPCsXU, uintiAk30WE, {from: accounts[1]});

		assert.equal(boolK5FP7Z6, true)
		assert.equal(uint256WyfqhX1, BigInt("0"))
		assert.equal(uint8qTDedZJ, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITeRA0xiz = await RIT.new({from: accounts[5]});
		const addressS2VnBvv = accounts[2]
		const uintKRt4qXP = BigInt("1773")
		const addresscyLcUb1 = accounts[4]
		const addressbLRdCug = accounts[2]
		const addressUbwMU6G = accounts[1]
		const uint256Xld4Lu4 = await RITeRA0xiz.balanceOf.call(addressS2VnBvv, {from: accounts[2]});
		const boolK5FP7Z6 = await RITeRA0xiz.increaseAllowance.call(addresscyLcUb1, uintKRt4qXP, {from: accounts[1]});
		const uint256CIbVS1 = await RITeRA0xiz.allowance.call(addressUbwMU6G, addressbLRdCug, {from: accounts[4]});

		assert.equal(boolK5FP7Z6, true)
		assert.equal(uint256CIbVS1, BigInt("0"))
		assert.equal(uint256Xld4Lu4, BigInt("0"))
	});
})