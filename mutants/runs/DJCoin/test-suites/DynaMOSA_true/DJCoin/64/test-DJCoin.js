const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinN32bWDt = await DJCoin.new({from: accounts[0]});
		const uintqdv4KUC = BigInt("1564")
		const addressjZ4IhZw = accounts[0]
		const addressUOx1K82 = accounts[3]
		const uint55bOQi = BigInt("1250")
		const addressOcXsw7d = accounts[2]
		const uintrwSMPMT = BigInt("1026")
		const addressxvIvozO = accounts[0]
		const boolur2OaTy = await DJCoinN32bWDt.increaseAllowance.call(addressjZ4IhZw, uintqdv4KUC, {from: accounts[0]});
		const addressmRy9S5S = await DJCoinN32bWDt.validRecipient.call(addressUOx1K82, {from: accounts[1]});
		const boolFv9QU0q = await DJCoinN32bWDt.transfer.call(addressOcXsw7d, uint55bOQi, {from: accounts[0]});
		const addressPk5jsWd = await DJCoinN32bWDt.owner.call({from: accounts[0]});
		const boolljyQZKv = await DJCoinN32bWDt.increaseAllowance.call(addressxvIvozO, uintrwSMPMT, {from: accounts[0]});

		assert.equal(boolur2OaTy, true)
		await expect(DJCoinN32bWDt.validRecipient.call(addressUOx1K82, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinNcrnUgx = await DJCoin.new({from: accounts[2]});
		const addressrQXTJa = accounts[2]
		const uintPTKmDJ = BigInt("1491")
		const addresshC6w5fP = accounts[2]
		const uintr9cgHpH = BigInt("474")
		const addressgcNUX8E = accounts[4]
		const addressdk0fZAz = await DJCoinNcrnUgx.transferOwnership.call(addressrQXTJa, {from: accounts[2]});
		const boolQx6TtZ6 = await DJCoinNcrnUgx.decreaseAllowance.call(addresshC6w5fP, uintPTKmDJ, {from: accounts[5]});
		const bool36cGTp = await DJCoinNcrnUgx.decreaseAllowance.call(addressgcNUX8E, uintr9cgHpH, {from: accounts[3]});
		await DJCoinNcrnUgx.renounceOwnership.call({from: accounts[3]});
		const uint256lIgdsh = await DJCoinNcrnUgx.totalSupply.call({from: accounts[2]});
		const uint256kdHOUh = await DJCoinNcrnUgx.totalSupply.call({from: accounts[2]});

		assert.equal(bool36cGTp, true)
		assert.equal(boolQx6TtZ6, true)
		await expect(DJCoinNcrnUgx.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkp00ue8 = await DJCoin.new({from: accounts[1]});
		const uintsC2qYSZ = BigInt("1503")
		const addressfYGX1Ba = accounts[2]
		const addressK2Mc4js = accounts[3]
		const addresszSO7H9 = accounts[0]
		const addressAS63je = accounts[0]
		const boolpaJR8BL = await DJCoinkp00ue8.decreaseAllowance.call(addressfYGX1Ba, uintsC2qYSZ, {from: accounts[5]});
		const uint256H3aALnL = await DJCoinkp00ue8.allowance.call(addresszSO7H9, addressK2Mc4js, {from: accounts[4]});
		const addressGfcvwbw = await DJCoinkp00ue8.transferOwnership.call(addressAS63je, {from: accounts[0]});

		assert.equal(boolpaJR8BL, true)
		assert.equal(uint256H3aALnL, BigInt("0"))
		await expect(DJCoinkp00ue8.transferOwnership.call(addressAS63je, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoint96rpnQ = await DJCoin.new({from: accounts[1]});
		const uintNRyOxHj = BigInt("1498")
		const addressrEpRkxr = accounts[1]
		const uintJA0pUk9 = BigInt("36")
		const uintFR9ad1J = BigInt("1526")
		const addressR3tRfL6 = "0x0000000000000000000000000000000000000001"
		const addressYXFc5vJ = accounts[1]
		const addressMj5MoL3 = accounts[0]
		const boolcWfzivd = await DJCoint96rpnQ.increaseAllowance.call(addressrEpRkxr, uintNRyOxHj, {from: accounts[2]});
		const uint256y1GiNzz = await DJCoint96rpnQ.totalSupply.call({from: accounts[2]});
		const uint256In2Konn = await DJCoint96rpnQ.burn.call(uintFR9ad1J, uintJA0pUk9, {from: accounts[0]});
		const uint256AUGyXbw = await DJCoint96rpnQ.allowance.call(addressYXFc5vJ, addressR3tRfL6, {from: accounts[2]});
		const uint256ZKqzQqe = await DJCoint96rpnQ.balanceOf.call(addressMj5MoL3, {from: accounts[4]});

		assert.equal(boolcWfzivd, true)
		assert.equal(uint256y1GiNzz, BigInt("2100000000000"))
		await expect(DJCoint96rpnQ.burn.call(uintFR9ad1J, uintJA0pUk9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinlT9rCug = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfPEOOEL = BigInt("987")
		const addressurq4zy = accounts[0]
		const addressMRHgzRF = accounts[0]
		await DJCoinlT9rCug.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boollQC6dPR = await DJCoinlT9rCug.approve.call(addressurq4zy, uintfPEOOEL, {from: accounts[5]});
		const uint256E0kMrsC = await DJCoinlT9rCug.totalSupply.call({from: accounts[2]});
		const addressM5w03Oo = await DJCoinlT9rCug.transferOwnership.call(addressMRHgzRF, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCointVA8RRp = await DJCoin.new({from: accounts[5]});
		const uintdbaB1iZ = BigInt("1870")
		const addressMXlYq1F = accounts[5]
		const uintBnlxXE9 = BigInt("5")
		const addresszzUNo6j = accounts[2]
		const uintRkVJUX6 = BigInt("1543")
		const uintiLHBFCn = BigInt("1801")
		const uintWGdUf6L = BigInt("308")
		const uintKrtgAci = BigInt("567")
		const uintQVAqUGe = BigInt("477")
		const addressUE1mGS = accounts[0]
		const booloYXvPQU = await DJCointVA8RRp.decreaseAllowance.call(addressMXlYq1F, uintdbaB1iZ, {from: accounts[2]});
		const boolt73anFS = await DJCointVA8RRp.changetokensPerBlock.call(uintBnlxXE9, {from: "0x0000000000000000000000000000000000000001"});
		const addresshfDnHov = await DJCointVA8RRp.validRecipient.call(addresszzUNo6j, {from: accounts[1]});
		const uint256H1gqji = await DJCointVA8RRp.burn.call(uintiLHBFCn, uintRkVJUX6, {from: accounts[5]});
		const uint256gtdCHUn = await DJCointVA8RRp.burn.call(uintKrtgAci, uintWGdUf6L, {from: accounts[4]});
		const boolB7ffgx1 = await DJCointVA8RRp.increaseAllowance.call(addressUE1mGS, uintQVAqUGe, {from: accounts[5]});

		assert.equal(booloYXvPQU, true)
		assert.equal(boolt73anFS, true)
		await expect(DJCointVA8RRp.validRecipient.call(addresszzUNo6j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAcYpfyK = await DJCoin.new({from: accounts[3]});
		const uintopVb8Cp = BigInt("540")
		const addressu8BxKzt = accounts[1]
		const uintckIKbRC = BigInt("21")
		const addressauAj24T = accounts[0]
		const uintudS1Jbt = BigInt("744")
		const addressYC3R4Uj = accounts[5]
		const uintB0a1wTq = BigInt("267")
		const uintSQuI8so = BigInt("1893")
		const addressxN8mwZ = accounts[1]
		const boolQ7U91sO = await DJCoinAcYpfyK.transfer.call(addressu8BxKzt, uintopVb8Cp, {from: accounts[2]});
		const boolk8FUlru = await DJCoinAcYpfyK.increaseAllowance.call(addressauAj24T, uintckIKbRC, {from: accounts[3]});
		const boolyHC6guE = await DJCoinAcYpfyK.approve.call(addressYC3R4Uj, uintudS1Jbt, {from: accounts[4]});
		const uint256vmRHi5X = await DJCoinAcYpfyK.burn.call(uintSQuI8so, uintB0a1wTq, {from: accounts[1]});
		const uint256I6027lh = await DJCoinAcYpfyK.balanceOf.call(addressxN8mwZ, {from: accounts[5]});

		await expect(DJCoinAcYpfyK.transfer.call(addressu8BxKzt, uintopVb8Cp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkp00ue8 = await DJCoin.new({from: accounts[1]});
		const uintlpUHTy = BigInt("1503")
		const addressPrPXwqi = accounts[2]
		const addresspWIGhS3 = accounts[1]
		const addresswnATFm7 = accounts[0]
		const boolpaJR8BL = await DJCoinkp00ue8.decreaseAllowance.call(addressPrPXwqi, uintlpUHTy, {from: accounts[5]});
		const address0iGpYq = await DJCoinkp00ue8.owner.call({from: accounts[1]});
		await DJCoinkp00ue8.onlyOwner.call({from: accounts[2]});
		const uint256oLsoAzN = await DJCoinkp00ue8.totalSupply.call({from: accounts[4]});
		const uint256HGkbbJL = await DJCoinkp00ue8.balanceOf.call(addresspWIGhS3, {from: accounts[3]});
		const addressGfcvwbw = await DJCoinkp00ue8.transferOwnership.call(addresswnATFm7, {from: accounts[0]});

		assert.equal(address0iGpYq, 0x8EE5e559E355f02ead2C32F605F341a5167bfCB3)
		assert.equal(boolpaJR8BL, true)
		await expect(DJCoinkp00ue8.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAcYpfyK = await DJCoin.new({from: accounts[3]});
		const addressAnCMDLW = accounts[3]
		const uintOWgmJGc = BigInt("540")
		const addressBePtwA = accounts[1]
		const uintmd37yi3 = BigInt("21")
		const addressYO9aTFE = accounts[0]
		const uintS9Beqjd = BigInt("744")
		const addresscyflnvd = accounts[5]
		const uintszDRxoR = BigInt("267")
		const uintvI715MJ = BigInt("1893")
		const uintPuN9ez = BigInt("497")
		const addresshsCcNrQ = accounts[1]
		const addressKj0GuFp = accounts[1]
		await DJCoinAcYpfyK.renounceOwnership.call({from: accounts[3]});
		await DJCoinAcYpfyK.onlyOwner.call({from: accounts[3]});
		const addresstSdSRnx = await DJCoinAcYpfyK.transferOwnership.call(addressAnCMDLW, {from: accounts[4]});
		const boolQ7U91sO = await DJCoinAcYpfyK.transfer.call(addressBePtwA, uintOWgmJGc, {from: accounts[2]});
		const boolk8FUlru = await DJCoinAcYpfyK.increaseAllowance.call(addressYO9aTFE, uintmd37yi3, {from: accounts[3]});
		const boolyHC6guE = await DJCoinAcYpfyK.approve.call(addresscyflnvd, uintS9Beqjd, {from: accounts[4]});
		const uint256vmRHi5X = await DJCoinAcYpfyK.burn.call(uintvI715MJ, uintszDRxoR, {from: accounts[1]});
		const boolGQ9bm5a = await DJCoinAcYpfyK.approve.call(addresshsCcNrQ, uintPuN9ez, {from: accounts[4]});
		const uint256I6027lh = await DJCoinAcYpfyK.balanceOf.call(addressKj0GuFp, {from: accounts[5]});

		await expect(DJCoinAcYpfyK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCointVA8RRp = await DJCoin.new({from: accounts[5]});
		const uintSQepXF = BigInt("1870")
		const addressCr85SW = accounts[5]
		const uintKn2NJ0R = BigInt("44")
		const uintLFG56Bo = BigInt("5")
		const addresssooD2HD = accounts[3]
		const addresseYyopwW = accounts[2]
		const uintPRxVkW = BigInt("1543")
		const uintRt7qJLK = BigInt("1801")
		const uintC92ycHm = BigInt("307")
		const uintFOZuCmA = BigInt("567")
		const uinttoctBya = BigInt("477")
		const addresspXBAjDi = accounts[0]
		const booloYXvPQU = await DJCointVA8RRp.decreaseAllowance.call(addressCr85SW, uintSQepXF, {from: accounts[2]});
		const boolQwcnyz = await DJCointVA8RRp.changetokensPerBlock.call(uintKn2NJ0R, {from: accounts[1]});
		const boolt73anFS = await DJCointVA8RRp.changetokensPerBlock.call(uintLFG56Bo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TowbUZL = await DJCointVA8RRp.balanceOf.call(addresssooD2HD, {from: "0x0000000000000000000000000000000000000001"});
		const addresshfDnHov = await DJCointVA8RRp.validRecipient.call(addresseYyopwW, {from: accounts[1]});
		const uint256H1gqji = await DJCointVA8RRp.burn.call(uintRt7qJLK, uintPRxVkW, {from: accounts[5]});
		const uint256gtdCHUn = await DJCointVA8RRp.burn.call(uintFOZuCmA, uintC92ycHm, {from: accounts[4]});
		const boolB7ffgx1 = await DJCointVA8RRp.increaseAllowance.call(addresspXBAjDi, uinttoctBya, {from: accounts[5]});

		assert.equal(boolQwcnyz, true)
		assert.equal(booloYXvPQU, true)
		assert.equal(boolt73anFS, true)
		assert.equal(uint256TowbUZL, BigInt("0"))
		await expect(DJCointVA8RRp.validRecipient.call(addresseYyopwW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAcYpfyK = await DJCoin.new({from: accounts[3]});
		const uintiD95Xx = BigInt("1312")
		const addresstKK39Qh = accounts[4]
		const addressrkYkud = accounts[3]
		const addressF7mRZAy = accounts[4]
		const uintnvh4X1y = BigInt("21")
		const addresswCI0Xh9 = accounts[0]
		const uintCGYNo0E = BigInt("744")
		const addressEHDX2ls = accounts[5]
		const uintLlEea4v = BigInt("267")
		const uintfqvazb = BigInt("1878")
		const addressmAXVmUn = accounts[1]
		const boollxGsYZr = await DJCoinAcYpfyK.transferFrom.call(addressrkYkud, addresstKK39Qh, uintiD95Xx, {from: accounts[4]});
		const uint256YMVGhf = await DJCoinAcYpfyK.balanceOf.call(addressF7mRZAy, {from: accounts[1]});
		const boolk8FUlru = await DJCoinAcYpfyK.increaseAllowance.call(addresswCI0Xh9, uintnvh4X1y, {from: accounts[3]});
		const boolyHC6guE = await DJCoinAcYpfyK.approve.call(addressEHDX2ls, uintCGYNo0E, {from: accounts[4]});
		const uint256vmRHi5X = await DJCoinAcYpfyK.burn.call(uintfqvazb, uintLlEea4v, {from: accounts[1]});
		const uint256I6027lh = await DJCoinAcYpfyK.balanceOf.call(addressmAXVmUn, {from: accounts[5]});

		await expect(DJCoinAcYpfyK.transferFrom.call(addressrkYkud, addresstKK39Qh, uintiD95Xx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkm17cwu = await DJCoin.new({from: accounts[2]});
		const uintteZLaY = BigInt("990")
		const addresssmxZcEd = accounts[0]
		const uintQSgmKvf = BigInt("79")
		const addressbsTJ6tA = "0x0000000000000000000000000000000000000001"
		const uintcMyHuAC = BigInt("1928")
		const addresslDiSKms = accounts[3]
		const uint256U26Rmxp = await DJCoinkm17cwu.totalSupply.call({from: accounts[3]});
		const uint256JecM5v = await DJCoinkm17cwu.totalSupply.call({from: accounts[1]});
		const boolfiHA2a = await DJCoinkm17cwu.decreaseAllowance.call(addresssmxZcEd, uintteZLaY, {from: accounts[0]});
		const boolqdMK1my = await DJCoinkm17cwu.approve.call(addressbsTJ6tA, uintQSgmKvf, {from: accounts[2]});
		await DJCoinkm17cwu.onlyOwner.call({from: accounts[5]});
		const booln6VHmT4 = await DJCoinkm17cwu.decreaseAllowance.call(addresslDiSKms, uintcMyHuAC, {from: accounts[5]});

		assert.equal(boolfiHA2a, true)
		assert.equal(boolqdMK1my, true)
		assert.equal(uint256JecM5v, BigInt("2100000000000"))
		assert.equal(uint256U26Rmxp, BigInt("2100000000000"))
		await expect(DJCoinkm17cwu.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRAkCml7 = await DJCoin.new({from: accounts[0]});
		const uintOSHxC9P = BigInt("1788")
		const addresszB9xhzk = accounts[3]
		const uintzXpVQ0Y = BigInt("2020")
		const uintIAx17Go = BigInt("535")
		const uintgpYjsOp = BigInt("1823")
		const booli5dbXrz = await DJCoinRAkCml7.transfer.call(addresszB9xhzk, uintOSHxC9P, {from: accounts[0]});
		const uint256XvJkAWF = await DJCoinRAkCml7.burn.call(uintIAx17Go, uintzXpVQ0Y, {from: accounts[0]});
		const boolCrV0WOt = await DJCoinRAkCml7.changetokensPerBlock.call(uintgpYjsOp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCrV0WOt, true)
		assert.equal(booli5dbXrz, true)
		assert.equal(uint256XvJkAWF, BigInt("1675800000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinAcYpfyK = await DJCoin.new({from: accounts[3]});
		const uintSIv79Yn = BigInt("1034")
		const uintSP8NWZy = BigInt("0")
		const addressTnEMVE = accounts[0]
		const addresszrbTvnW = accounts[3]
		const uintDjWxSNr = BigInt("922")
		const addressfBgKcU = accounts[4]
		const uintlbs59TW = BigInt("1443")
		const addressi9Y59Cx = accounts[4]
		const addressWgTb3aU = accounts[4]
		const booluV3ONjF = await DJCoinAcYpfyK.changetokensPerBlock.call(uintSIv79Yn, {from: accounts[1]});
		const boolQkNAeIB = await DJCoinAcYpfyK.transfer.call(addressTnEMVE, uintSP8NWZy, {from: "0x0000000000000000000000000000000000000001"});
		const addressGkN1KRn = await DJCoinAcYpfyK.validRecipient.call(addresszrbTvnW, {from: accounts[4]});
		const booltcxPXN9 = await DJCoinAcYpfyK.approve.call(addressfBgKcU, uintDjWxSNr, {from: accounts[4]});
		const boolEguvejm = await DJCoinAcYpfyK.transfer.call(addressi9Y59Cx, uintlbs59TW, {from: accounts[5]});
		const addressonrGIiJ = await DJCoinAcYpfyK.validRecipient.call(addressWgTb3aU, {from: accounts[3]});

		assert.equal(boolQkNAeIB, true)
		assert.equal(booluV3ONjF, true)
		await expect(DJCoinAcYpfyK.validRecipient.call(addresszrbTvnW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})