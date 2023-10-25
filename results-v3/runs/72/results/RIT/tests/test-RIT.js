const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITSFftL55 = await RIT.new({from: accounts[3]});
		const uintmHcFImP = BigInt("2026")
		const addressPQSADty = accounts[2]
		const addressZOMBVHj = accounts[0]
		const uint256bddAxOJ = await RITSFftL55.totalSupply.call({from: accounts[2]});
		const boolr7qTbhF = await RITSFftL55.transferFrom.call(addressZOMBVHj, addressPQSADty, uintmHcFImP, {from: accounts[0]});

		assert.equal(uint256bddAxOJ, BigInt("500000000000000000000000000"))
		await expect(RITSFftL55.transferFrom.call(addressZOMBVHj, addressPQSADty, uintmHcFImP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITRIvpUjw = await RIT.new({from: accounts[2]});
		const uintfOKYkCz = BigInt("1201")
		const addressLZ5hyIL = accounts[3]
		const addresstgLCiRK = accounts[2]
		const address8aBza5 = accounts[5]
		const stringeTSJRvD = await RITRIvpUjw.symbol.call({from: accounts[0]});
		const bools6iNDAj = await RITRIvpUjw.increaseAllowance.call(addressLZ5hyIL, uintfOKYkCz, {from: accounts[4]});
		const uint256e4H5rEq = await RITRIvpUjw.allowance.call(address8aBza5, addresstgLCiRK, {from: accounts[4]});
		const stringBxjdd7D = await RITRIvpUjw.symbol.call({from: accounts[2]});
		const stringwKyJtNr = await RITRIvpUjw.symbol.call({from: accounts[2]});

		assert.equal(bools6iNDAj, true)
		assert.equal(stringBxjdd7D, "RIT 2.0")
		assert.equal(stringeTSJRvD, "RIT 2.0")
		assert.equal(stringwKyJtNr, "RIT 2.0")
		assert.equal(uint256e4H5rEq, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RIT3ZVgKZ = await RIT.new({from: accounts[3]});
		const uintuTBCMvq = BigInt("614")
		const addressAiP0Fjn = "0x0000000000000000000000000000000000000001"
		const addressAWm2Kf2 = "0x0000000000000000000000000000000000000001"
		const addressMaqG1Ja = accounts[4]
		const boolnCZ9HhM = await RIT3ZVgKZ.approve.call(addressAiP0Fjn, uintuTBCMvq, {from: accounts[1]});
		const uint256ddHOF5o = await RIT3ZVgKZ.allowance.call(addressMaqG1Ja, addressAWm2Kf2, {from: accounts[2]});
		const stringJpHH71g = await RIT3ZVgKZ.name.call({from: accounts[4]});

		assert.equal(boolnCZ9HhM, true)
		assert.equal(stringJpHH71g, "Real Estate Investment Token")
		assert.equal(uint256ddHOF5o, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITHknF3k1 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswCRzAko = accounts[1]
		const addressLMyTSVF = accounts[3]
		const uint8i9NxM = BigInt("1017")
		const addressSJkOyWN = accounts[0]
		const uintPxBaFjE = BigInt("32")
		const addressyoinORM = accounts[5]
		const addressJM30jWe = accounts[0]
		const addressQD685Q7 = accounts[0]
		const addressIERYnQd = accounts[2]
		const uint256ktdxDC9 = await RITHknF3k1.allowance.call(addressLMyTSVF, addresswCRzAko, {from: accounts[4]});
		const boolJiUhN8a = await RITHknF3k1.approve.call(addressSJkOyWN, uint8i9NxM, {from: accounts[4]});
		const boolZHzP7Oj = await RITHknF3k1.transferFrom.call(addressJM30jWe, addressyoinORM, uintPxBaFjE, {from: accounts[0]});
		const uint256fFCRfQ = await RITHknF3k1.allowance.call(addressIERYnQd, addressQD685Q7, {from: accounts[4]});
	});

	it('test for RIT', async () => {
		const RITIHah561 = await RIT.new({from: accounts[1]});
		const uintsllUTb = BigInt("1054")
		const addressR2HbxVo = accounts[1]
		const uintSKfGsyn = BigInt("177")
		const addressYN6PaXw = accounts[4]
		const uintDB62IvB = BigInt("344")
		const addressHiOMTV = accounts[5]
		const addresslni6qtM = accounts[2]
		const boolUrCBQ3u = await RITIHah561.decreaseAllowance.call(addressR2HbxVo, uintsllUTb, {from: accounts[1]});
		const boolzuTx5ZM = await RITIHah561.transfer.call(addressYN6PaXw, uintSKfGsyn, {from: accounts[3]});
		const boolJ5sz0Uj = await RITIHah561.transferFrom.call(addresslni6qtM, addressHiOMTV, uintDB62IvB, {from: accounts[1]});
		const uint256U0lUcKE = await RITIHah561.totalSupply.call({from: accounts[1]});

		await expect(RITIHah561.decreaseAllowance.call(addressR2HbxVo, uintsllUTb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITwqWsni8 = await RIT.new({from: accounts[4]});
		const uintUinkDYC = BigInt("77")
		const addressppRqlIX = accounts[3]
		const addressFuOmuA = accounts[4]
		const uintiZosJ3o = BigInt("486")
		const addressL4hntrw = accounts[2]
		const uintchvPCLz = BigInt("1703")
		const addresseXZOS1C = accounts[3]
		const addressiuRSNgi = accounts[1]
		const addresseWdE7JR = accounts[5]
		const boolp3xFxe3 = await RITwqWsni8.transfer.call(addressppRqlIX, uintUinkDYC, {from: accounts[4]});
		const uint256W2315fl = await RITwqWsni8.balanceOf.call(addressFuOmuA, {from: accounts[4]});
		const boolrA9fKzS = await RITwqWsni8.transfer.call(addressL4hntrw, uintiZosJ3o, {from: accounts[4]});
		const boolEaPrZzQ = await RITwqWsni8.approve.call(addresseXZOS1C, uintchvPCLz, {from: accounts[0]});
		const uint256Os7tfp4 = await RITwqWsni8.allowance.call(addresseWdE7JR, addressiuRSNgi, {from: accounts[4]});

		await expect(RITwqWsni8.transfer.call(addressppRqlIX, uintUinkDYC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITb7o40j = await RIT.new({from: accounts[4]});
		const addressTHK2cD1 = accounts[3]
		const uintxX4oafe = BigInt("1290")
		const addressmwshEZZ = accounts[1]
		const addressIOmqwKP = accounts[0]
		const uintIZJZ397 = BigInt("630")
		const uint8qXqwlC7 = await RITb7o40j.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256d4Ricc4 = await RITb7o40j.balanceOf.call(addressTHK2cD1, {from: accounts[5]});
		const stringcHo5WsL = await RITb7o40j.name.call({from: accounts[4]});
		const boolbfpLq2c = await RITb7o40j.transferFrom.call(addressIOmqwKP, addressmwshEZZ, uintxX4oafe, {from: accounts[1]});
		const uint256kCVtl6N = await RITb7o40j._burn.call(uintIZJZ397, {from: accounts[0]});
		const uint256QEPY6gr = await RITb7o40j.totalSupply.call({from: accounts[1]});

		assert.equal(stringcHo5WsL, "Real Estate Investment Token")
		assert.equal(uint256d4Ricc4, BigInt("0"))
		assert.equal(uint8qXqwlC7, BigInt("18"))
		await expect(RITb7o40j.transferFrom.call(addressIOmqwKP, addressmwshEZZ, uintxX4oafe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITscBkXk = await RIT.new({from: accounts[4]});
		const uinttAnSO3X = BigInt("1310")
		const uint0VRaIM = BigInt("1962")
		const addressoW5SCEz = accounts[6]
		const addressfMigPWq = accounts[1]
		const addressG0EC2B2 = accounts[5]
		const uintBLMdjj = BigInt("1132")
		const uintXQWyOs = BigInt("963")
		const addressLguB1ne = accounts[3]
		const stringr7P5gRD = await RITscBkXk.symbol.call({from: accounts[5]});
		const uint256PvdP768 = await RITscBkXk._burn.call(uinttAnSO3X, {from: accounts[2]});
		const boolih8qHHj = await RITscBkXk.decreaseAllowance.call(addressoW5SCEz, uint0VRaIM, {from: accounts[2]});
		const uint256GS2kxAk = await RITscBkXk.totalSupply.call({from: accounts[0]});
		const uint256XPvJmrN = await RITscBkXk.allowance.call(addressG0EC2B2, addressfMigPWq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Qg1VjZT = await RITscBkXk._burn.call(uintBLMdjj, {from: accounts[4]});
		const booljBJfCYJ = await RITscBkXk.decreaseAllowance.call(addressLguB1ne, uintXQWyOs, {from: accounts[2]});

		assert.equal(stringr7P5gRD, "RIT 2.0")
		await expect(RITscBkXk._burn.call(uinttAnSO3X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})