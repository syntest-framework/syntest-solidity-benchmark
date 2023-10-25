const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressOnEdX5H = accounts[2]
		const LayerxllvnjgV = await Layerx.new(addressOnEdX5H, {from: accounts[1]});
		const uintojIsx02 = BigInt("1413")
		const addressg7AW21 = accounts[4]
		const uintiQHGZfx = BigInt("238")
		const uintK7tL3OJ = BigInt("536")
		const addressj07lqrM = accounts[2]
//		const uintUrHgAsS = await LayerxllvnjgV.lock.call(uintojIsx02, {from: accounts[0]});
//		const addressZu7XQL = await LayerxllvnjgV.transferOwnership.call(addressg7AW21, {from: accounts[4]});
//		const uintZAAmG6d = await LayerxllvnjgV.lock.call(uintiQHGZfx, {from: accounts[3]});
//		const boolQDtDB1S = await LayerxllvnjgV.approve.call(addressj07lqrM, uintK7tL3OJ, {from: accounts[0]});

		await expect(LayerxllvnjgV.lock.call(uintojIsx02, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressR6ReqOc = accounts[3]
		const Layerxji4d3rp = await Layerx.new(addressR6ReqOc, {from: accounts[2]});
		const uintYY2yhDA = BigInt("1177")
//		await Layerxji4d3rp.addStakePayment.call({from: accounts[2]});
//		const uintvLeAl3d = await Layerxji4d3rp.getStakesNum.call({from: accounts[3]});
//		const uint256yaJpasq = await Layerxji4d3rp.burn.call(uintYY2yhDA, {from: accounts[4]});
//		await Layerxji4d3rp.addStakePayment.call({from: accounts[3]});

		await expect(Layerxji4d3rp.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAHzfyUb = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressAHzfyUb, {from: accounts[1]});
		const uintpiIwb0Y = BigInt("1650")
		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintpiIwb0Y, {from: accounts[2]});
		const uintY8gQC7S = await LayerxWM8vTF.totalSupply.call({from: accounts[1]});
//		await LayerxWM8vTF.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintY8gQC7S, BigInt("40000000000000000000000"))
		await expect(LayerxWM8vTF.paused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLMWYbhn = accounts[1]
		const LayerxheukBcs = await Layerx.new(addressLMWYbhn, {from: accounts[4]});
		const uintLFH3iQ1 = BigInt("989")
		const addressn4uYlLN = accounts[3]
		const uintHb9xstd = BigInt("1421")
		const addressCQd760h = accounts[3]
		const addressSYuCmt2 = accounts[0]
		const addressqWCAGAh = accounts[1]
		const boolNpINj1 = await LayerxheukBcs.approve.call(addressn4uYlLN, uintLFH3iQ1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsuFXrud = await LayerxheukBcs.transferFrom.call(addressSYuCmt2, addressCQd760h, uintHb9xstd, {from: accounts[2]});
//		const addresss4dHmOi = await LayerxheukBcs.transferOwnership.call(addressqWCAGAh, {from: accounts[5]});
//		await LayerxheukBcs.paused.call({from: accounts[3]});

		assert.equal(boolNpINj1, true)
		await expect(LayerxheukBcs.transferFrom.call(addressSYuCmt2, addressCQd760h, uintHb9xstd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxy454dd = accounts[1]
		const LayerxJKDi72X = await Layerx.new(addressxy454dd, {from: accounts[4]});
		const boolOrLn7os = true
		const uintKJ9rCz9 = BigInt("320")
		const uintPnK5qpC = await LayerxJKDi72X.getStakesNum.call({from: accounts[1]});
		const boolv5zHpj = await LayerxJKDi72X.setIsPaused.call(boolOrLn7os, {from: accounts[1]});
//		const uintzqTlUPP = await LayerxJKDi72X.lock.call(uintKJ9rCz9, {from: accounts[1]});

		assert.equal(uintPnK5qpC, BigInt("1"))
		await expect(LayerxJKDi72X.lock.call(uintKJ9rCz9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspxMRJKQ = accounts[1]
		const LayerxUiETVT2 = await Layerx.new(addresspxMRJKQ, {from: accounts[2]});
		const uintXpsJQRX = BigInt("2040")
		const addressd02vYoI = accounts[1]
		const addressudQ52t = "0x0000000000000000000000000000000000000001"
		const uintNYX69K = BigInt("1807")
		const addressnhMyE45 = accounts[2]
		const uintg2lRv9B = await LayerxUiETVT2.totalSupply.call({from: accounts[4]});
//		await LayerxUiETVT2.unlock.call({from: accounts[3]});
//		const boolE05z70o = await LayerxUiETVT2.transferFrom.call(addressudQ52t, addressd02vYoI, uintXpsJQRX, {from: accounts[0]});
//		const boolBCVwEaO = await LayerxUiETVT2.approve.call(addressnhMyE45, uintNYX69K, {from: accounts[2]});

		assert.equal(uintg2lRv9B, BigInt("40000000000000000000000"))
		await expect(LayerxUiETVT2.unlock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressT2et1Oh = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressT2et1Oh, {from: accounts[1]});
		const uintbqOgkjW = BigInt("1650")
//		await LayerxWM8vTF.f.call({from: accounts[4]});
//		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintbqOgkjW, {from: accounts[2]});
//		const uintY8gQC7S = await LayerxWM8vTF.totalSupply.call({from: accounts[1]});
//		await LayerxWM8vTF.f.call({from: accounts[3]});
//		await LayerxWM8vTF.paused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxWM8vTF.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSfeXrYt = accounts[4]
		const LayerxSAKd5yu = await Layerx.new(addressSfeXrYt, {from: "0x0000000000000000000000000000000000000001"});
		const addressb90xDME = accounts[0]
		const uintQWA2aK = BigInt("677")
		const uintnaBE4sE = BigInt("320")
		const addressJjsR8F0 = await LayerxSAKd5yu.setNewStakeCreator.call(addressb90xDME, {from: accounts[4]});
		const uint256hg1Cdq7 = await LayerxSAKd5yu.burn.call(uintQWA2aK, {from: "0x0000000000000000000000000000000000000001"});
		const uintJFnyjKB = await LayerxSAKd5yu.exist.call(uintnaBE4sE, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressZ8HYK74 = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressZ8HYK74, {from: accounts[1]});
		const uintUvhwta = BigInt("1151")
		const addressjwL4COP = accounts[2]
//		const boolwhfeCGa = await LayerxWM8vTF.transfer.call(addressjwL4COP, uintUvhwta, {from: accounts[0]});
//		const uintY8gQC7S = await LayerxWM8vTF.totalSupply.call({from: accounts[1]});

		await expect(LayerxWM8vTF.transfer.call(addressjwL4COP, uintUvhwta, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressdxbNkFw = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressdxbNkFw, {from: accounts[1]});
		const addressadkV1F2 = accounts[0]
		const addressCDQs7jA = accounts[3]
		const uintNIQhgwp = BigInt("1659")
		const uintoMvfOI = BigInt("1202")
		const addresstsG2rE = accounts[3]
		const uinto3kamko = await LayerxWM8vTF.allowance.call(addressCDQs7jA, addressadkV1F2, {from: accounts[2]});
		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintNIQhgwp, {from: accounts[2]});
		const uintY8gQC7S = await LayerxWM8vTF.totalSupply.call({from: accounts[1]});
		const booloPdOajh = await LayerxWM8vTF.approve.call(addresstsG2rE, uintoMvfOI, {from: accounts[2]});

		assert.equal(booloPdOajh, true)
		assert.equal(uintY8gQC7S, BigInt("40000000000000000000000"))
		assert.equal(uinto3kamko, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const address02avgr = accounts[2]
		const LayerxIyEf5pN = await Layerx.new(address02avgr, {from: accounts[1]});
		const uintaQ8dhGS = BigInt("708")
		const uintT8WJmwJ = BigInt("1667")
		const addressfuJJ5tt = accounts[0]
//		await LayerxIyEf5pN.addStakePayment.call({from: accounts[2]});
//		const uintDbD44km = await LayerxIyEf5pN.lock.call(uintaQ8dhGS, {from: accounts[2]});
//		const uint256gD4RY7 = await LayerxIyEf5pN.burn.call(uintT8WJmwJ, {from: accounts[1]});
//		const addressUNS0iTr = await LayerxIyEf5pN.setNewStakeCreator.call(addressfuJJ5tt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxIyEf5pN.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfVSp4iN = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressfVSp4iN, {from: accounts[1]});
		const uintniDicRJ = BigInt("1659")
		const addressFRsDg7I = accounts[3]
		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintniDicRJ, {from: accounts[2]});
		const uintJ5Pq4hE = await LayerxWM8vTF.balanceOf.call(addressFRsDg7I, {from: accounts[5]});

		assert.equal(uintJ5Pq4hE, BigInt("0"))
	});

	it('test for Layerx', async () => {
		const addressYMYZXJ = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressYMYZXJ, {from: accounts[1]});
		const uinttio5IlH = BigInt("727")
		const boolawSc0HR = false
		const uintKWVL9xU = BigInt("824")
		const addresssn065UL = accounts[1]
		const uintuYekNNm = BigInt("1666")
//		const uintzyBPZOP = await LayerxWM8vTF.withdraw.call(uinttio5IlH, {from: accounts[1]});
//		const boolgvoh6Oo = await LayerxWM8vTF.setIsPaused.call(boolawSc0HR, {from: accounts[3]});
//		const boolLTJZa9 = await LayerxWM8vTF.approve.call(addresssn065UL, uintKWVL9xU, {from: accounts[0]});
//		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintuYekNNm, {from: accounts[2]});

		await expect(LayerxWM8vTF.withdraw.call(uinttio5IlH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressitA9DoM = accounts[2]
		const LayerxIyEf5pN = await Layerx.new(addressitA9DoM, {from: accounts[1]});
		const byteEUdChAa = "0x081e"
		const uintjzV3ID = BigInt("1421")
		const addressvMnfWcd = accounts[3]
		const addressy68Oxz5 = accounts[2]
//		const boolOlmIUEg = await LayerxIyEf5pN.approveAndCall.call(addressvMnfWcd, uintjzV3ID, byteEUdChAa, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxIyEf5pN.addStakePayment.call({from: accounts[2]});
//		const addressUNS0iTr = await LayerxIyEf5pN.setNewStakeCreator.call(addressy68Oxz5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxIyEf5pN.approveAndCall.call(addressvMnfWcd, uintjzV3ID, byteEUdChAa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNnrSWg0 = accounts[2]
		const LayerxWM8vTF = await Layerx.new(addressNnrSWg0, {from: accounts[1]});
		const uintmftIu8o = BigInt("1647")
		const addressn22n2n = accounts[3]
		const uint256GzGzNeQ = await LayerxWM8vTF.burn.call(uintmftIu8o, {from: accounts[2]});
		const addresshfsvic = await LayerxWM8vTF.setNewStakeCreator.call(addressn22n2n, {from: accounts[2]});
	});

	it('test for Layerx', async () => {
		const addressemjViF = accounts[3]
		const LayerxxaW06On = await Layerx.new(addressemjViF, {from: accounts[2]});
		const uintxc1skCT = BigInt("160")
		const addressqNMhiDx = accounts[1]
		const uintAyQDBQS = BigInt("1950")
		const addressExUg9Hv = accounts[2]
		const addressqGHbLAE = accounts[1]
		const addressFUqC6vv = accounts[0]
		const boolD5xEu28 = await LayerxxaW06On.approve.call(addressqNMhiDx, uintxc1skCT, {from: accounts[1]});
		const boollalaONx = await LayerxxaW06On.approve.call(addressExUg9Hv, uintAyQDBQS, {from: accounts[0]});
		const uintE0Bwdw = await LayerxxaW06On.balanceOf.call(addressqGHbLAE, {from: accounts[2]});
		const addressbi5Jqm5 = await LayerxxaW06On.transferOwnership.call(addressFUqC6vv, {from: accounts[3]});

		assert.equal(boolD5xEu28, true)
		assert.equal(boollalaONx, true)
		assert.equal(uintE0Bwdw, BigInt("0"))
	});
})