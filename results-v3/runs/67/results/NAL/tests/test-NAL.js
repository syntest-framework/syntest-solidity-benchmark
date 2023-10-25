const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringWjgvrEY = "Km99viZ2xVACSHnnOjbjmKwAOznG7bgyfMur3mXxuC2voeuLJS5TvGIOumCOPFBaNm2rqxSLCqF0UUcUmF"
		const stringeb5NpVv = "rUHg2a9dLDdhBkYAJzaYrUdki61njThps1GH5Hh14ECgjG0zaAO1JHnefKj99Aw"
		const uintqugaiJp = BigInt("201")
		const NALEO5jocv = await NAL.new(stringWjgvrEY, stringeb5NpVv, uintqugaiJp, {from: accounts[1]});
		const uintRHpZLcI = BigInt("457")
		const addressSJvXeWb = accounts[4]
		const addressg3WsJcF = accounts[2]
		const uintHAlPruC = BigInt("1896")
		const addressYU2ErCj = accounts[1]
		const addressw1lEjpj = accounts[3]
		const boolKItQPYN = await NALEO5jocv.approve.call(addressSJvXeWb, uintRHpZLcI, {from: accounts[0]});
		await NALEO5jocv.pause.call({from: accounts[4]});
		const addressR0BJGLC = await NALEO5jocv.transferOwnership.call(addressg3WsJcF, {from: "0x0000000000000000000000000000000000000001"});
		const boolhemyNkV = await NALEO5jocv.transferFrom.call(addressw1lEjpj, addressYU2ErCj, uintHAlPruC, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALz629Cin = await NAL.new({from: accounts[1]});
		const uintgxeYChw = BigInt("213")
		const addressK6b5XT8 = accounts[2]
		const uintyMWTEa = BigInt("102")
		const addressg8hEIxO = accounts[4]
		const uintHkqPla = BigInt("1616")
		const addressK76Ta16 = accounts[0]
		const uintp69AHB = BigInt("2047")
		const addresssYgI8qn = accounts[0]
		const addressqnwQpvN = accounts[1]
		const addressT0ad2JW = accounts[2]
		const boolrK4uzv = await NALz629Cin.approve.call(addressK6b5XT8, uintgxeYChw, {from: accounts[1]});
		const boolNG9Safv = await NALz629Cin.transfer.call(addressg8hEIxO, uintyMWTEa, {from: accounts[1]});
		const boolkLT9i5P = await NALz629Cin.increaseAllowance.call(addressK76Ta16, uintHkqPla, {from: "0x0000000000000000000000000000000000000001"});
		const boolsCOR5RL = await NALz629Cin.transfer.call(addresssYgI8qn, uintp69AHB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KpSTSAR = await NALz629Cin.balanceOf.call(addressqnwQpvN, {from: accounts[5]});
		const addressS7yNQkE = await NALz629Cin.notFrozen.call(addressT0ad2JW, {from: accounts[4]});

		assert.equal(boolNG9Safv, true)
		assert.equal(boolkLT9i5P, true)
		assert.equal(boolrK4uzv, true)
		await expect(NALz629Cin.transfer.call(addresssYgI8qn, uintp69AHB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdQaYp9D = await NAL.new({from: accounts[1]});
		const uintwPq5E8 = BigInt("1152")
		const addressdcC3UMH = accounts[3]
		const booliQWuGT5 = await NALdQaYp9D.approve.call(addressdcC3UMH, uintwPq5E8, {from: accounts[1]});
		await NALdQaYp9D.onlyAdmin.call({from: accounts[0]});

		assert.equal(booliQWuGT5, true)
		await expect(NALdQaYp9D.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALHki6eex = await NAL.new({from: accounts[2]});
		const addressIIcs9Bc = accounts[3]
		const uintCzdSSTz = BigInt("187")
		const addressFJRU3lX = accounts[2]
		const uintG2Yrc9d = BigInt("206")
		const addressGasd6oR = accounts[0]
		const boolFFaXOFQ = await NALHki6eex.isOwner.call(addressIIcs9Bc, {from: accounts[4]});
		const uint256GfSh8g = await NALHki6eex.totalSupply.call({from: accounts[0]});
		const boolsxztmdh = await NALHki6eex.transfer.call(addressFJRU3lX, uintCzdSSTz, {from: accounts[1]});
		const boolfLCkcBD = await NALHki6eex.paused.call({from: accounts[4]});
		const boolTO3p6hw = await NALHki6eex.increaseAllowance.call(addressGasd6oR, uintG2Yrc9d, {from: accounts[4]});

		assert.equal(boolFFaXOFQ, false)
		assert.equal(uint256GfSh8g, BigInt("2000000000000000000000000000"))
		await expect(NALHki6eex.transfer.call(addressFJRU3lX, uintCzdSSTz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALqO1YIQP = await NAL.new({from: accounts[2]});
		const uintwWbMREp = BigInt("393")
		const addresso9xjutf = accounts[2]
		const uintwAgbdAf = BigInt("603")
		const addressNe6F5Nw = accounts[3]
		const uintWp6kS8x = BigInt("791")
		const addressSn9eNr = accounts[1]
		const boolGRXHsRM = await NALqO1YIQP.increaseAllowance.call(addresso9xjutf, uintwWbMREp, {from: accounts[5]});
		const boolv7kdj5o = await NALqO1YIQP.decreaseAllowance.call(addressNe6F5Nw, uintwAgbdAf, {from: "0x0000000000000000000000000000000000000001"});
		const boolGRU3b6J = await NALqO1YIQP.unlock.call(addressSn9eNr, uintWp6kS8x, {from: accounts[3]});

		assert.equal(boolGRXHsRM, true)
		await expect(NALqO1YIQP.decreaseAllowance.call(addressNe6F5Nw, uintwAgbdAf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTThsz4 = await NAL.new({from: accounts[5]});
		const addressYaaDy22 = accounts[4]
		const addressQSz7UNR = accounts[4]
		const addressHvYNkqE = accounts[5]
		await NALTThsz4.unpause.call({from: accounts[4]});
		const uint256HYbVhKW = await NALTThsz4.balanceOf.call(addressYaaDy22, {from: accounts[0]});
		const uint256CrsEhzo = await NALTThsz4.balanceOf.call(addressQSz7UNR, {from: accounts[4]});
		const boolCeMK0m7 = await NALTThsz4.freezeAccount.call(addressHvYNkqE, {from: accounts[0]});

		await expect(NALTThsz4.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALG3d92LN = await NAL.new({from: accounts[0]});
		const addressXW4IMCC = accounts[0]
		const addressg9xzkQN = accounts[4]
		const uintj0m2Hdz = BigInt("1705")
		const uintN0s2u9R = BigInt("953")
		const addressdwiRxW = accounts[0]
		const addressBOlZeHg = "0x0000000000000000000000000000000000000001"
		const uint8riOJN1 = await NALG3d92LN.decimals.call({from: accounts[5]});
		const uint256O6QspRQ = await NALG3d92LN.allowance.call(addressg9xzkQN, addressXW4IMCC, {from: accounts[3]});
		const uint256N0RJGWV = await NALG3d92LN.burn.call(uintj0m2Hdz, {from: accounts[3]});
		const boolPjlM2DV = await NALG3d92LN.transferFrom.call(addressBOlZeHg, addressdwiRxW, uintN0s2u9R, {from: accounts[4]});

		assert.equal(uint256O6QspRQ, BigInt("0"))
		assert.equal(uint8riOJN1, BigInt("18"))
		await expect(NALG3d92LN.burn.call(uintj0m2Hdz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXTJWhzr = await NAL.new({from: accounts[0]});
		const addressyJvL6Gc = accounts[2]
		const uintR8lgwu7 = BigInt("1830")
		const addressj7JIwfb = accounts[1]
		const uint256PZqCoGY = await NALXTJWhzr.balanceOf.call(addressyJvL6Gc, {from: "0x0000000000000000000000000000000000000001"});
		const boolXnrLUTi = await NALXTJWhzr.transfer.call(addressj7JIwfb, uintR8lgwu7, {from: accounts[1]});

		assert.equal(uint256PZqCoGY, BigInt("0"))
		await expect(NALXTJWhzr.transfer.call(addressj7JIwfb, uintR8lgwu7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdQaYp9D = await NAL.new({from: accounts[1]});
		const uintRXZl6J3 = BigInt("509")
		const addressOe3SxFB = accounts[1]
		const addressmV2F1GK = accounts[0]
		const uintKIqk9a = BigInt("551")
		const addresskrHDLaa = accounts[0]
		const boolWlkKKOH = await NALdQaYp9D.transferFrom.call(addressmV2F1GK, addressOe3SxFB, uintRXZl6J3, {from: accounts[0]});
		const boollz1Lpfq = await NALdQaYp9D.approve.call(addresskrHDLaa, uintKIqk9a, {from: accounts[3]});
		await NALdQaYp9D.onlyAdmin.call({from: accounts[0]});

		await expect(NALdQaYp9D.transferFrom.call(addressmV2F1GK, addressOe3SxFB, uintRXZl6J3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdQaYp9D = await NAL.new({from: accounts[1]});
		const uintuPXHazQ = BigInt("551")
		const addressbv8urPB = accounts[0]
		await NALdQaYp9D.renounceAdmin.call({from: accounts[0]});
		const boollz1Lpfq = await NALdQaYp9D.approve.call(addressbv8urPB, uintuPXHazQ, {from: accounts[3]});
		await NALdQaYp9D.onlyAdmin.call({from: accounts[0]});

		await expect(NALdQaYp9D.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALAc2f2zm = await NAL.new({from: accounts[0]});
		const uintm85qwU = BigInt("703")
		const addressfdr9u7O = accounts[0]
		const bool36AumR = await NALAc2f2zm.approve.call(addressfdr9u7O, uintm85qwU, {from: accounts[4]});
		const stringVps4qMK = await NALAc2f2zm.name.call({from: accounts[1]});
		await NALAc2f2zm.unpause.call({from: accounts[2]});

		assert.equal(bool36AumR, true)
		assert.equal(stringVps4qMK, "Personal Token")
		await expect(NALAc2f2zm.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBI4WCIA = await NAL.new({from: accounts[2]});
		const addressw9kGJuR = accounts[2]
		const uintHnsxFui = BigInt("1581")
		const addressVTZzODa = accounts[4]
		const addressqOW7lvZ = accounts[1]
		const addressQCC6iX5 = await NALBI4WCIA.transferOwnership.call(addressw9kGJuR, {from: accounts[2]});
		const boolID2p9J8 = await NALBI4WCIA.increaseAllowance.call(addressVTZzODa, uintHnsxFui, {from: accounts[5]});
		const addressy7N4tty = await NALBI4WCIA.transferOwnership.call(addressqOW7lvZ, {from: accounts[2]});
		const stringMRGCFlZ = await NALBI4WCIA.name.call({from: accounts[4]});
		await NALBI4WCIA.whenPaused.call({from: accounts[0]});
		const boolhxWBLMD = await NALBI4WCIA.paused.call({from: accounts[3]});

		assert.equal(boolID2p9J8, true)
		assert.equal(stringMRGCFlZ, "Personal Token")
		await expect(NALBI4WCIA.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALIV1HxnC = await NAL.new({from: accounts[1]});
		const addressBDn89Te = accounts[2]
		const string0AFsEq = await NALIV1HxnC.symbol.call({from: accounts[4]});
		const uint8tWiZU0q = await NALIV1HxnC.decimals.call({from: accounts[3]});
		const uint256sKN9o8 = await NALIV1HxnC.totalSupply.call({from: accounts[3]});
		const boolqUHlRMS = await NALIV1HxnC.isOwner.call(addressBDn89Te, {from: accounts[4]});

		assert.equal(boolqUHlRMS, false)
		assert.equal(string0AFsEq, "NAL")
		assert.equal(uint256sKN9o8, BigInt("2000000000000000000000000000"))
		assert.equal(uint8tWiZU0q, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALXTJWhzr = await NAL.new({from: accounts[0]});
		const addressbiNW2r = accounts[3]
		const uintBiJEr6 = BigInt("20")
		const addresspJNvP8C = accounts[1]
		const uint256PZqCoGY = await NALXTJWhzr.balanceOf.call(addressbiNW2r, {from: "0x0000000000000000000000000000000000000001"});
		const addressHXPR3A = await NALXTJWhzr.burnFrom.call(addresspJNvP8C, uintBiJEr6, {from: accounts[3]});

		assert.equal(uint256PZqCoGY, BigInt("0"))
		await expect(NALXTJWhzr.burnFrom.call(addresspJNvP8C, uintBiJEr6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQaeA4kp = await NAL.new({from: accounts[1]});
		const addressinupTQ = accounts[0]
		const addressRR2NNLp = accounts[5]
		const uintLyLM6E2 = BigInt("1140")
		const addressxoSGlhz = accounts[2]
		const uinttOFC1Q9 = BigInt("1892")
		const addressezswQqy = accounts[1]
		const uintDXUFO1g = BigInt("970")
		const addresskmLifyZ = accounts[3]
		const addressojghG17 = accounts[1]
		const uintdkjb3bd = BigInt("1213")
		const uintScl8TzU = BigInt("271")
		const addressuU8TVt = accounts[3]
		const uint256LHWtoCR = await NALQaeA4kp.balanceOf.call(addressinupTQ, {from: accounts[4]});
		const stringtnzZ1Z = await NALQaeA4kp.symbol.call({from: accounts[2]});
		const addressVhUQwNw = await NALQaeA4kp.removeAdmin.call(addressRR2NNLp, {from: accounts[1]});
		const boolwdeHY57 = await NALQaeA4kp.unlock.call(addressxoSGlhz, uintLyLM6E2, {from: accounts[0]});
		const addressUrAVGb4 = await NALQaeA4kp.burnFrom.call(addressezswQqy, uinttOFC1Q9, {from: accounts[0]});
		const boolLAteYnP = await NALQaeA4kp.transferFrom.call(addressojghG17, addresskmLifyZ, uintDXUFO1g, {from: accounts[1]});
		const uint256VP9oPq2 = await NALQaeA4kp.burn.call(uintdkjb3bd, {from: accounts[0]});
		const boolEh3wlrA = await NALQaeA4kp.transfer.call(addressuU8TVt, uintScl8TzU, {from: accounts[2]});
		await NALQaeA4kp.onlyAdmin.call({from: accounts[4]});

		assert.equal(stringtnzZ1Z, "NAL")
		assert.equal(uint256LHWtoCR, BigInt("0"))
		await expect(NALQaeA4kp.removeAdmin.call(addressRR2NNLp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALHki6eex = await NAL.new({from: accounts[2]});
		const addressN7p3TXM = accounts[3]
		const addressVehIVDO = accounts[3]
		const uintcAMB2On = BigInt("1989")
		const uintcfeHpT2 = BigInt("336")
		const addressErUuE7B = accounts[1]
		const uintleVSByo = BigInt("187")
		const addresslEZhiw = accounts[2]
		const uintS4P7FIV = BigInt("1246")
		const addressjCJ0YIh = accounts[6]
		const uinthARGutK = BigInt("859")
		const addressSfYIXp = accounts[4]
		const uintNk4GN7U = BigInt("653")
		const addressUekUTbi = accounts[1]
		const uinttZ2hGE = BigInt("1686")
		const addressoVc3glZ = accounts[3]
		const uintslYGwmk = BigInt("371")
		const uintgBmgDU = BigInt("1740")
		const addressaU7Uwaf = accounts[0]
		const uintCQkTuX = BigInt("541")
		const addressvFo48LN = accounts[1]
		const boolFFaXOFQ = await NALHki6eex.isOwner.call(addressN7p3TXM, {from: accounts[4]});
		const uint256yF6tWWS = await NALHki6eex.balanceOf.call(addressVehIVDO, {from: accounts[1]});
		const boolkbUbSDz = await NALHki6eex.transferWithLock.call(addressErUuE7B, uintcfeHpT2, uintcAMB2On, {from: accounts[2]});
		const boolsxztmdh = await NALHki6eex.transfer.call(addresslEZhiw, uintleVSByo, {from: accounts[1]});
		const boolEd3be86 = await NALHki6eex.transfer.call(addressjCJ0YIh, uintS4P7FIV, {from: accounts[2]});
		const boolubdOYH6 = await NALHki6eex.unlock.call(addressSfYIXp, uinthARGutK, {from: accounts[4]});
		const boolfLCkcBD = await NALHki6eex.paused.call({from: accounts[4]});
		const boolD2IRoiu = await NALHki6eex.transfer.call(addressUekUTbi, uintNk4GN7U, {from: accounts[1]});
		const boolC3lzxvg = await NALHki6eex.decreaseAllowance.call(addressoVc3glZ, uinttZ2hGE, {from: "0x0000000000000000000000000000000000000001"});
		await NALHki6eex.renounceAdmin.call({from: accounts[1]});
		const boolABKBFag = await NALHki6eex.transferWithLock.call(addressaU7Uwaf, uintgBmgDU, uintslYGwmk, {from: "0x0000000000000000000000000000000000000001"});
		const boolzqEblC8 = await NALHki6eex.increaseAllowance.call(addressvFo48LN, uintCQkTuX, {from: accounts[0]});

		assert.equal(boolFFaXOFQ, false)
		assert.equal(boolkbUbSDz, true)
		assert.equal(uint256yF6tWWS, BigInt("0"))
		await expect(NALHki6eex.transfer.call(addresslEZhiw, uintleVSByo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTThsz4 = await NAL.new({from: accounts[5]});
		const addressCMu6NMG = accounts[3]
		const addressMAelSWU = "0x0000000000000000000000000000000000000001"
		const boolGXEgj6 = await NALTThsz4.paused.call({from: accounts[4]});
		const addressl22JIE9 = await NALTThsz4.addAdmin.call(addressCMu6NMG, {from: accounts[3]});
		const uint256sRpLvf6 = await NALTThsz4.balanceOf.call(addressMAelSWU, {from: accounts[2]});
		await NALTThsz4.unpause.call({from: accounts[4]});

		assert.equal(boolGXEgj6, false)
		await expect(NALTThsz4.addAdmin.call(addressCMu6NMG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUk7NJXx = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHrSXNpK = BigInt("1491")
		const addressjf2C5ga = accounts[3]
		const addressqhIT4JZ = accounts[1]
		const boolf4drAAb = await NALUk7NJXx.transfer.call(addressjf2C5ga, uintHrSXNpK, {from: accounts[2]});
		const addressqJSFj5f = await NALUk7NJXx.upgradeTo.call(addressqhIT4JZ, {from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NALTThsz4 = await NAL.new({from: accounts[5]});
		const addressjq3GQTt = accounts[5]
		const boolv1nGzHq = await NALTThsz4.isOwner.call(addressjq3GQTt, {from: accounts[3]});
		await NALTThsz4.unpause.call({from: accounts[4]});

		assert.equal(boolv1nGzHq, true)
		await expect(NALTThsz4.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})