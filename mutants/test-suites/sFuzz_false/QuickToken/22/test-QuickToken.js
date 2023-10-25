const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressFHKqBP7 = accounts[3]
		const addressoZKiaZT = accounts[3]
		const QuickTokenWKFGPA0 = await QuickToken.new(addressFHKqBP7, addressoZKiaZT, {from: accounts[4]});
		const uinteWilfy = BigInt("1247")
		const addressVEOEYI = accounts[4]
		const addressFWWHLIi = accounts[3]
		const uintkYvcd8t = BigInt("917")
		const addresswYXQgJg = accounts[1]
		const uintDs1tiPT = BigInt("1222")
		const addressuHGiqJG = accounts[1]
		const uintQiuDLTn = BigInt("471")
		const addressZFTqlYY = accounts[0]
//		const boolcd4K5qo = await QuickTokenWKFGPA0.transferFrom.call(addressFWWHLIi, addressVEOEYI, uinteWilfy, {from: accounts[2]});
//		const boolDYh1Ihn = await QuickTokenWKFGPA0.approve.call(addresswYXQgJg, uintkYvcd8t, {from: accounts[5]});
//		const addresseuS8051 = await QuickTokenWKFGPA0.mint.call(addressuHGiqJG, uintDs1tiPT, {from: accounts[5]});
//		const boolNFu1uYZ = await QuickTokenWKFGPA0.transfer.call(addressZFTqlYY, uintQiuDLTn, {from: accounts[5]});

		await expect(QuickTokenWKFGPA0.transferFrom.call(addressFWWHLIi, addressVEOEYI, uinteWilfy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressz0CKNgA = accounts[1]
		const addresstJVWig7 = accounts[3]
		const QuickTokenoRESuFw = await QuickToken.new(addressz0CKNgA, addresstJVWig7, {from: "0x0000000000000000000000000000000000000001"});
		const addressLCsGls5 = accounts[0]
		const addressQyO8tmE = accounts[3]
		const addressxuBWCRu = accounts[4]
		const uintHumC1yY = BigInt("910")
		const addressx6dS5ob = accounts[2]
		const uintOkzEjZ = BigInt("604")
		const addressfx33XUz = accounts[4]
		const uintXekN9f = BigInt("1620")
		const addressgVWlrk = accounts[4]
		const uintmppMfiV = await QuickTokenoRESuFw.allowance.call(addressQyO8tmE, addressLCsGls5, {from: accounts[3]});
		const addressz0ayyR6 = await QuickTokenoRESuFw.setMinter.call(addressxuBWCRu, {from: "0x0000000000000000000000000000000000000001"});
		const boolt6I7eRq = await QuickTokenoRESuFw.transfer.call(addressx6dS5ob, uintHumC1yY, {from: accounts[0]});
		const boolTLayScO = await QuickTokenoRESuFw.approve.call(addressfx33XUz, uintOkzEjZ, {from: accounts[1]});
		const boolAl1guH = await QuickTokenoRESuFw.approve.call(addressgVWlrk, uintXekN9f, {from: accounts[1]});
	});

	it('test for QuickToken', async () => {
		const addressZHWiAF = accounts[2]
		const addressMfxFm3g = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addressZHWiAF, addressMfxFm3g, {from: accounts[1]});
		const uintss76lZ1 = BigInt("94")
		const addressOM26HX2 = accounts[1]
		const uint3Nk2c1 = BigInt("941")
		const addressNzxlCmI = accounts[4]
		const addresse81UMJx = accounts[5]
		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(addressOM26HX2, uintss76lZ1, {from: "0x0000000000000000000000000000000000000001"});
//		const booldAdMYC = await QuickTokenkb1DnTO.transferFrom.call(addresse81UMJx, addressNzxlCmI, uint3Nk2c1, {from: accounts[3]});

		assert.equal(boolUBQYT7K, true)
		await expect(QuickTokenkb1DnTO.transferFrom.call(addresse81UMJx, addressNzxlCmI, uint3Nk2c1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAbE2dil = accounts[3]
		const addressdIR3nia = accounts[2]
		const QuickTokenDZHNzCx = await QuickToken.new(addressAbE2dil, addressdIR3nia, {from: accounts[2]});
		const addressrDS2pD = accounts[3]
		const uintTKNDHmz = BigInt("1434")
		const addressKai0vOG = accounts[3]
		const uintLQtXXfT = BigInt("1532")
		const addresshiRTSmp = accounts[0]
		const uintDUv8rIB = BigInt("1354")
		const addressMLDXNU = "0x0000000000000000000000000000000000000001"
		const addressIFofRgS = accounts[1]
		const addresseQcrNA = accounts[3]
		const uintu2bAXT3 = BigInt("1617")
		const addressji4u7Y = accounts[3]
		const uintwdtoRh = await QuickTokenDZHNzCx.balanceOf.call(addressrDS2pD, {from: accounts[3]});
		const boolUHpQ9f = await QuickTokenDZHNzCx.approve.call(addressKai0vOG, uintTKNDHmz, {from: accounts[2]});
		const boolpexxFXA = await QuickTokenDZHNzCx.approve.call(addresshiRTSmp, uintLQtXXfT, {from: "0x0000000000000000000000000000000000000001"});
//		const addressJjGKqYb = await QuickTokenDZHNzCx.mint.call(addressMLDXNU, uintDUv8rIB, {from: accounts[5]});
//		const uintnXqbQFy = await QuickTokenDZHNzCx.allowance.call(addresseQcrNA, addressIFofRgS, {from: accounts[3]});
//		const boolQHCbHcm = await QuickTokenDZHNzCx.transfer.call(addressji4u7Y, uintu2bAXT3, {from: accounts[0]});

		assert.equal(boolUHpQ9f, true)
		assert.equal(boolpexxFXA, true)
		assert.equal(uintwdtoRh, BigInt("2000000000000"))
		await expect(QuickTokenDZHNzCx.mint.call(addressMLDXNU, uintDUv8rIB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressPXfPj7R = accounts[2]
		const address59hIyp = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addressPXfPj7R, address59hIyp, {from: accounts[1]});
		const addressgep5B4w = accounts[3]
		const addressxeNbzPM = accounts[2]
		const uintkUPBIAU = BigInt("94")
		const addressp0ebb2E = accounts[1]
		const uintHAT68hA = BigInt("1272")
		const addressfvW1jQJ = accounts[4]
		const addressvkascH6 = accounts[1]
		const addressqQOjUpc = accounts[4]
		const uintIHdwCsr = BigInt("941")
		const addressi6R106 = accounts[2]
		const addresshWtHs6c = accounts[5]
		const uintARmpHdP = await QuickTokenkb1DnTO.allowance.call(addressxeNbzPM, addressgep5B4w, {from: accounts[0]});
		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(addressp0ebb2E, uintkUPBIAU, {from: "0x0000000000000000000000000000000000000001"});
		const boolsaJMVhh = await QuickTokenkb1DnTO.approve.call(addressfvW1jQJ, uintHAT68hA, {from: "0x0000000000000000000000000000000000000001"});
		const uintd9yilgB = await QuickTokenkb1DnTO.allowance.call(addressqQOjUpc, addressvkascH6, {from: accounts[4]});
//		const booldAdMYC = await QuickTokenkb1DnTO.transferFrom.call(addresshWtHs6c, addressi6R106, uintIHdwCsr, {from: accounts[3]});

		assert.equal(boolUBQYT7K, true)
		assert.equal(boolsaJMVhh, true)
		assert.equal(uintARmpHdP, BigInt("0"))
		assert.equal(uintd9yilgB, BigInt("0"))
		await expect(QuickTokenkb1DnTO.transferFrom.call(addresshWtHs6c, addressi6R106, uintIHdwCsr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressFmANEaf = accounts[2]
		const addressYjj6pQn = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addressFmANEaf, addressYjj6pQn, {from: accounts[1]});
		const uintuTQhJ2y = BigInt("387")
		const addressG2pakXi = accounts[4]
		const uintXXLFv2J = BigInt("138")
		const addressMM0oj8 = accounts[1]
		const uintfmMAIR = BigInt("83")
		const address7GZXLx = accounts[1]
		const uintGTuD0a0 = BigInt("941")
		const addressSEz0en0 = accounts[4]
		const addressam8Jbv2 = accounts[5]
//		const booluo1pDqW = await QuickTokenkb1DnTO.transfer.call(addressG2pakXi, uintuTQhJ2y, {from: accounts[0]});
//		const boolTjnNygo = await QuickTokenkb1DnTO.transfer.call(addressMM0oj8, uintXXLFv2J, {from: accounts[4]});
//		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(address7GZXLx, uintfmMAIR, {from: "0x0000000000000000000000000000000000000001"});
//		const booldAdMYC = await QuickTokenkb1DnTO.transferFrom.call(addressam8Jbv2, addressSEz0en0, uintGTuD0a0, {from: accounts[3]});

		await expect(QuickTokenkb1DnTO.transfer.call(addressG2pakXi, uintuTQhJ2y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxq2YOvh = accounts[1]
		const addressjzhZY5x = accounts[0]
		const QuickTokenabUCQBS = await QuickToken.new(addressxq2YOvh, addressjzhZY5x, {from: accounts[1]});
		const addressf4YGrx = accounts[1]
		const addressQRy6IcO = accounts[2]
		const addressdhDnq8I = accounts[1]
		const addressvApoYHm = accounts[3]
		const uintg63KaR9 = await QuickTokenabUCQBS.balanceOf.call(addressf4YGrx, {from: "0x0000000000000000000000000000000000000001"});
		const uint9OERdO = await QuickTokenabUCQBS.allowance.call(addressdhDnq8I, addressQRy6IcO, {from: accounts[2]});
//		const addressuBJJXsP = await QuickTokenabUCQBS.setMinter.call(addressvApoYHm, {from: accounts[1]});

		assert.equal(uint9OERdO, BigInt("0"))
		assert.equal(uintg63KaR9, BigInt("2000000000000"))
		await expect(QuickTokenabUCQBS.setMinter.call(addressvApoYHm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresslUgvjso = accounts[2]
		const addressbZ92JUK = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addresslUgvjso, addressbZ92JUK, {from: accounts[1]});
		const uintzfCnyK = BigInt("92")
		const addressGoKDQ3W = accounts[2]
		const addressp1E52s8 = accounts[0]
		const uintceRhNz = BigInt("1905")
		const addressAoQ3WqC = accounts[2]
		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(addressGoKDQ3W, uintzfCnyK, {from: "0x0000000000000000000000000000000000000001"});
		const uintMvNcqvz = await QuickTokenkb1DnTO.balanceOf.call(addressp1E52s8, {from: accounts[3]});
		const boollKrm8XA = await QuickTokenkb1DnTO.transfer.call(addressAoQ3WqC, uintceRhNz, {from: accounts[2]});

		assert.equal(boolUBQYT7K, true)
		assert.equal(boollKrm8XA, true)
		assert.equal(uintMvNcqvz, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressaoIQNtI = accounts[2]
		const addressKs0TGdn = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addressaoIQNtI, addressKs0TGdn, {from: accounts[1]});
		const uintxttheV6 = BigInt("71")
		const addressgmOmX7J = accounts[1]
		const addressYdBqGc = accounts[0]
		const uintaEr9SW = BigInt("502")
		const addressY3GWOse = "0x0000000000000000000000000000000000000001"
		const uintLgYMmju = BigInt("1342")
		const addressNaPgWqj = accounts[0]
		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(addressgmOmX7J, uintxttheV6, {from: "0x0000000000000000000000000000000000000001"});
		const uintMvNcqvz = await QuickTokenkb1DnTO.balanceOf.call(addressYdBqGc, {from: accounts[3]});
		const addressiejb364 = await QuickTokenkb1DnTO.mint.call(addressY3GWOse, uintaEr9SW, {from: accounts[1]});
//		const addressvmDsSbw = await QuickTokenkb1DnTO.mint.call(addressNaPgWqj, uintLgYMmju, {from: accounts[3]});

		assert.equal(boolUBQYT7K, true)
		assert.equal(uintMvNcqvz, BigInt("0"))
		await expect(QuickTokenkb1DnTO.mint.call(addressNaPgWqj, uintLgYMmju, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressZ0q8fQv = accounts[2]
		const addressGbfyYJD = accounts[1]
		const QuickTokenkb1DnTO = await QuickToken.new(addressZ0q8fQv, addressGbfyYJD, {from: accounts[1]});
		const uintAmTdfnj = BigInt("71")
		const addressYAtSmG = accounts[1]
		const uintqcyVk3o = BigInt("502")
		const addressKDoScil = "0x0000000000000000000000000000000000000000"
		const boolUBQYT7K = await QuickTokenkb1DnTO.approve.call(addressYAtSmG, uintAmTdfnj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressiejb364 = await QuickTokenkb1DnTO.mint.call(addressKDoScil, uintqcyVk3o, {from: accounts[1]});

		assert.equal(boolUBQYT7K, true)
		await expect(QuickTokenkb1DnTO.mint.call(addressKDoScil, uintqcyVk3o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})