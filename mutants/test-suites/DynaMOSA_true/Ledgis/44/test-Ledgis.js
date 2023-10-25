const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisNp2fHmq = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn1L3w0y = BigInt("855")
		const addressItQDJ6z = "0x0000000000000000000000000000000000000001"
		const uintkUESrVO = BigInt("1238")
		const addresscQ8fLCu = accounts[2]
		const uintJypuu0R = BigInt("1214")
		const addressDdnUdnt = "0x0000000000000000000000000000000000000001"
		const uintUVWwGvW = BigInt("814")
		const uintpQTv98W = BigInt("877")
		const addresscj0t7W1 = accounts[0]
		const addressEMhgfs5 = await LedgisNp2fHmq.unlock.call(addressItQDJ6z, uintn1L3w0y, {from: accounts[5]});
		await LedgisNp2fHmq.onlyOwner.call({from: accounts[0]});
		const address8kjPSm = await LedgisNp2fHmq.unlock.call(addresscQ8fLCu, uintkUESrVO, {from: accounts[1]});
		const boolmmQfKHP = await LedgisNp2fHmq.transfer.call(addressDdnUdnt, uintJypuu0R, {from: accounts[4]});
		const boolRpJFUQH = await LedgisNp2fHmq.transferWithLockAfter.call(addresscj0t7W1, uintpQTv98W, uintUVWwGvW, {from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const uintLNYBGBm = BigInt("367")
		const addressGrG8pA = accounts[5]
		const uintHs9Wtlu = BigInt("500")
		const uintjU99nIG = BigInt("1620")
		const address7ARiMw = accounts[0]
		const uintPfrD9ZV = BigInt("1235")
		const addressfvfNiUP = accounts[4]
		const uintCBlZv74 = BigInt("1064")
		const addresscv4QzPv = accounts[2]
		const addressntgnPnm = accounts[0]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressGrG8pA, uintLNYBGBm, {from: accounts[2]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(address7ARiMw, uintjU99nIG, uintHs9Wtlu, {from: accounts[1]});
//		const addressQqB0Hjg = await LedgisEowD5E.unlock.call(addressfvfNiUP, uintPfrD9ZV, {from: accounts[0]});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressntgnPnm, addresscv4QzPv, uintCBlZv74, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WAC14Jl, BigInt("1630233265"))
		await expect(LedgisEowD5E.decreaseAllowance.call(addressGrG8pA, uintLNYBGBm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiseOJluS3 = await Ledgis.new({from: accounts[1]});
		const uintvCRAZCo = BigInt("1012")
		const addressMxz4d6d = accounts[4]
		const uintVRuBJe = BigInt("30")
		const addressiQ3mtVI = accounts[1]
		const addressIebw3y = accounts[1]
		const addressn9ardSK = accounts[3]
		const addressVlhx1D6 = accounts[1]
//		const addressbzQMpYJ = await LedgiseOJluS3.unlock.call(addressMxz4d6d, uintvCRAZCo, {from: accounts[4]});
//		const booltjxaR7T = await LedgiseOJluS3.transfer.call(addressiQ3mtVI, uintVRuBJe, {from: accounts[4]});
//		const uint256cpswvcW = await LedgiseOJluS3.balanceOf.call(addressIebw3y, {from: accounts[4]});
//		const uint256Jbp4viV = await LedgiseOJluS3.allowance.call(addressVlhx1D6, addressn9ardSK, {from: accounts[1]});
//		await LedgiseOJluS3.whenNotPaused.call({from: accounts[3]});

		await expect(LedgiseOJluS3.unlock.call(addressMxz4d6d, uintvCRAZCo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisCWUcyRz = await Ledgis.new({from: accounts[0]});
		const uintv9oneTn = BigInt("92")
		const addressA5JUwxn = accounts[0]
		const uintgq1reRj = BigInt("489")
		const uintnUawGyI = BigInt("623")
		const addresseQfV3Nx = accounts[1]
		const addresspf0xJZK = accounts[0]
//		await LedgisCWUcyRz.lockState.call(addressA5JUwxn, uintv9oneTn, {from: accounts[3]});
//		const addressz81ZIg2 = await LedgisCWUcyRz.lock.call(addresseQfV3Nx, uintnUawGyI, uintgq1reRj, {from: accounts[1]});
//		const addressr4pA4QI = await LedgisCWUcyRz.unfreeze.call(addresspf0xJZK, {from: accounts[5]});

		await expect(LedgisCWUcyRz.lockState.call(addressA5JUwxn, uintv9oneTn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXYqLKe6 = await Ledgis.new({from: accounts[3]});
		const uintHjzkbEh = BigInt("491")
		const uintnJxXEzC = BigInt("2017")
		const addressihpY19 = accounts[3]
		const uintQrENpJ1 = BigInt("237")
		const addressh22P2OH = accounts[0]
		const addressorCoKFS = accounts[0]
		const uintJLLnq2u = BigInt("1791")
		const addresslYrZdql = accounts[3]
		const addressjOfkKrg = accounts[1]
//		await LedgisXYqLKe6.whenNotFrozen.call({from: accounts[2]});
//		const boolx5xvwoP = await LedgisXYqLKe6.transferWithLockAfter.call(addressihpY19, uintnJxXEzC, uintHjzkbEh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolL27t5sR = await LedgisXYqLKe6.transferFrom.call(addressorCoKFS, addressh22P2OH, uintQrENpJ1, {from: accounts[1]});
//		const boolZb0K2GL = await LedgisXYqLKe6.mint.call(addresslYrZdql, uintJLLnq2u, {from: accounts[0]});
//		const uint256wTd5poi = await LedgisXYqLKe6.balanceOf.call(addressjOfkKrg, {from: accounts[0]});
//		await LedgisXYqLKe6.whenNotFrozen.call({from: accounts[1]});

		await expect(LedgisXYqLKe6.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLnSa83r = await Ledgis.new({from: accounts[1]});
		const uintrqa7MbI = BigInt("1826")
		const addressiwc8j1q = accounts[0]
		const addresslpntUO4 = accounts[4]
		const uint256BxAgYGS = await LedgisLnSa83r.afterTime.call(uintrqa7MbI, {from: accounts[0]});
//		const addressYwWNbuy = await LedgisLnSa83r.freeze.call(addressiwc8j1q, {from: accounts[2]});
//		await LedgisLnSa83r.onlyOwner.call({from: accounts[0]});
//		const address9h7VlX = await LedgisLnSa83r.freeze.call(addresslpntUO4, {from: accounts[3]});

		assert.equal(uint256BxAgYGS, BigInt("1630235100"))
		await expect(LedgisLnSa83r.freeze.call(addressiwc8j1q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisdpWTcYw = await Ledgis.new({from: accounts[1]});
		const uintuzv3682 = BigInt("1281")
		const address1CrHYL = accounts[1]
		const uintYF3Ut3m = BigInt("479")
		const addressxbd5hJy = accounts[0]
		const booluH202L6 = await LedgisdpWTcYw.increaseAllowance.call(address1CrHYL, uintuzv3682, {from: accounts[3]});
//		await LedgisdpWTcYw.whenNotPaused.call({from: accounts[0]});
//		const addressA2hjVO9 = await LedgisdpWTcYw.unlock.call(addressxbd5hJy, uintYF3Ut3m, {from: accounts[5]});

		assert.equal(booluH202L6, true)
		await expect(LedgisdpWTcYw.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRQodMz = await Ledgis.new({from: accounts[5]});
		const addressagkNwk = accounts[2]
		const uint256aI4IdR9 = await LedgisRQodMz.balanceOf.call(addressagkNwk, {from: accounts[4]});
//		await LedgisRQodMz.pause.call({from: accounts[5]});

		assert.equal(uint256aI4IdR9, BigInt("0"))
		await expect(LedgisRQodMz.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLnSa83r = await Ledgis.new({from: accounts[1]});
		const uintZehadf = BigInt("1826")
		const addressF2GBLk3 = accounts[2]
		const addressm1n1sW4 = accounts[1]
		const addresshMTZWjk = accounts[4]
		const uint256BxAgYGS = await LedgisLnSa83r.afterTime.call(uintZehadf, {from: accounts[0]});
		const uint256elhWGSz = await LedgisLnSa83r.lockCount.call(addressF2GBLk3, {from: accounts[1]});
//		const addressYwWNbuy = await LedgisLnSa83r.freeze.call(addressm1n1sW4, {from: accounts[2]});
//		await LedgisLnSa83r.onlyOwner.call({from: accounts[0]});
//		const address9h7VlX = await LedgisLnSa83r.freeze.call(addresshMTZWjk, {from: accounts[3]});
//		await LedgisLnSa83r.pause.call({from: accounts[1]});

		assert.equal(uint256BxAgYGS, BigInt("1630235098"))
		assert.equal(uint256elhWGSz, BigInt("0"))
		await expect(LedgisLnSa83r.freeze.call(addressm1n1sW4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const uintYl4wjnw = BigInt("500")
		const uintojwzQpI = BigInt("1620")
		const addresskoXcJJZ = accounts[0]
		const uintK6PNqjg = BigInt("1659")
		const addressdeqOIUV = accounts[4]
		const uintcoqzHd = BigInt("1064")
		const addressG0hT9Ps = accounts[2]
		const addressdjPyv2Q = accounts[0]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addresskoXcJJZ, uintojwzQpI, uintYl4wjnw, {from: accounts[1]});
//		const addressQqB0Hjg = await LedgisEowD5E.unlock.call(addressdeqOIUV, uintK6PNqjg, {from: accounts[0]});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressdjPyv2Q, addressG0hT9Ps, uintcoqzHd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WAC14Jl, BigInt("1630233264"))
		await expect(LedgisEowD5E.lockAfter.call(addresskoXcJJZ, uintojwzQpI, uintYl4wjnw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const addressWTAB1z = accounts[1]
		const addressRIldnQS = accounts[0]
		const uintnQPGD9L = BigInt("500")
		const uintkAD3zaD = BigInt("1620")
		const addressr6T5pLs = accounts[0]
		const uintXMxjtCq = BigInt("1235")
		const addressJBcQKGv = accounts[4]
		const uintMrl3bT8 = BigInt("1064")
		const addressUS5fQ9 = accounts[2]
		const addresswlL1sCa = accounts[0]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
		const uint256wQfxhi9 = await LedgisEowD5E.allowance.call(addressRIldnQS, addressWTAB1z, {from: accounts[1]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addressr6T5pLs, uintkAD3zaD, uintnQPGD9L, {from: accounts[1]});
//		const addressQqB0Hjg = await LedgisEowD5E.unlock.call(addressJBcQKGv, uintXMxjtCq, {from: accounts[0]});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addresswlL1sCa, addressUS5fQ9, uintMrl3bT8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WAC14Jl, BigInt("1630233275"))
		assert.equal(uint256wQfxhi9, BigInt("0"))
		await expect(LedgisEowD5E.lockAfter.call(addressr6T5pLs, uintkAD3zaD, uintnQPGD9L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const uintC7xRLXE = BigInt("584")
		const addressEVYXokf = accounts[2]
		const addressOiifwu = accounts[1]
		const addresstJhPFt5 = accounts[1]
		const uintabklRw = BigInt("367")
		const address2tHMEH = accounts[5]
		const uintxbfAKBL = BigInt("500")
		const uintpJbIPa3 = BigInt("1620")
		const addresselA0p46 = accounts[1]
		const uintXGD11KE = BigInt("1235")
		const addressTGQN8sA = accounts[4]
		const addressVbRJvcM = accounts[4]
		const uintLvLGOuQ = BigInt("1990")
		const addressbTh3DIU = accounts[2]
		const uintoLl9vMq = BigInt("1064")
		const addressaMb5NZo = accounts[2]
		const addressYymeO0S = accounts[0]
		const addressn95Y8OE = accounts[1]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const boolzXBjMx6 = await LedgisEowD5E.transferFrom.call(addressOiifwu, addressEVYXokf, uintC7xRLXE, {from: accounts[4]});
//		const uint256KIqrbG1 = await LedgisEowD5E.balanceOf.call(addresstJhPFt5, {from: accounts[0]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(address2tHMEH, uintabklRw, {from: accounts[2]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addresselA0p46, uintpJbIPa3, uintxbfAKBL, {from: accounts[1]});
//		const addressQqB0Hjg = await LedgisEowD5E.unlock.call(addressTGQN8sA, uintXGD11KE, {from: accounts[0]});
//		const addressyOpmThi = await LedgisEowD5E.unfreeze.call(addressVbRJvcM, {from: accounts[4]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressbTh3DIU, uintLvLGOuQ, {from: "0x0000000000000000000000000000000000000001"});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressYymeO0S, addressaMb5NZo, uintoLl9vMq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xm5J3R = await LedgisEowD5E.balanceOf.call(addressn95Y8OE, {from: accounts[4]});

		assert.equal(uint256WAC14Jl, BigInt("1630233271"))
		await expect(LedgisEowD5E.transferFrom.call(addressOiifwu, addressEVYXokf, uintC7xRLXE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRQodMz = await Ledgis.new({from: accounts[5]});
		const addressQdGoGV2 = accounts[2]
		const addressI5KrSXi = accounts[0]
		const uintigD1rgI = BigInt("1439")
		const addressgc8gPCP = accounts[3]
		const uint256aI4IdR9 = await LedgisRQodMz.balanceOf.call(addressQdGoGV2, {from: accounts[4]});
		const addressO2OIVG6 = await LedgisRQodMz.freeze.call(addressI5KrSXi, {from: accounts[5]});
		const boolK3Y4AIN = await LedgisRQodMz.approve.call(addressgc8gPCP, uintigD1rgI, {from: accounts[3]});
//		await LedgisRQodMz.pause.call({from: accounts[5]});

		assert.equal(boolK3Y4AIN, true)
		assert.equal(uint256aI4IdR9, BigInt("0"))
		await expect(LedgisRQodMz.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const addressDRoYh9p = accounts[2]
		const uintALs0JpZ = BigInt("584")
		const addressVwEyWLR = accounts[2]
		const addressgYtMdTX = accounts[1]
		const addressxpJ39yb = accounts[1]
		const uintuGGg81X = BigInt("367")
		const addressZu3DZum = accounts[5]
		const uinteYQiVdl = BigInt("500")
		const uintnnEOwJl = BigInt("1654")
		const addressP4QgGL = accounts[1]
		const uintz6bEcM = BigInt("1235")
		const addressBR1mtLQ = accounts[4]
		const uintjxBpVyg = BigInt("256")
		const addressPoxP3kH = accounts[1]
		const addressmcVkzr = accounts[3]
		const uintk7DO9S7 = BigInt("690")
		const addressQdDlBKQ = accounts[1]
		const addressJNjK1jz = accounts[4]
		const uintL6CgjyI = BigInt("1539")
		const addressfF7C3M1 = accounts[2]
		const uintFjB6mME = BigInt("1968")
		const addressYVKJDd4 = accounts[2]
		const uintEBpt6aZ = BigInt("1064")
		const addresstYKla3x = accounts[2]
		const addressqG0f581 = accounts[0]
		const addressYvPy53L = accounts[1]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
		const addressxcjtqD9 = await LedgisEowD5E.unfreeze.call(addressDRoYh9p, {from: accounts[1]});
//		const boolzXBjMx6 = await LedgisEowD5E.transferFrom.call(addressgYtMdTX, addressVwEyWLR, uintALs0JpZ, {from: accounts[4]});
//		const uint256KIqrbG1 = await LedgisEowD5E.balanceOf.call(addressxpJ39yb, {from: accounts[0]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressZu3DZum, uintuGGg81X, {from: accounts[2]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addressP4QgGL, uintnnEOwJl, uinteYQiVdl, {from: accounts[1]});
//		const addressQqB0Hjg = await LedgisEowD5E.unlock.call(addressBR1mtLQ, uintz6bEcM, {from: accounts[0]});
//		const boolhsmJhdZ = await LedgisEowD5E.transferFrom.call(addressmcVkzr, addressPoxP3kH, uintjxBpVyg, {from: accounts[2]});
//		const boolF0tI1df = await LedgisEowD5E.transfer.call(addressQdDlBKQ, uintk7DO9S7, {from: accounts[2]});
//		const addressyOpmThi = await LedgisEowD5E.unfreeze.call(addressJNjK1jz, {from: accounts[4]});
//		const boolvY2FwiS = await LedgisEowD5E.transfer.call(addressfF7C3M1, uintL6CgjyI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressYVKJDd4, uintFjB6mME, {from: "0x0000000000000000000000000000000000000001"});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressqG0f581, addresstYKla3x, uintEBpt6aZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xm5J3R = await LedgisEowD5E.balanceOf.call(addressYvPy53L, {from: accounts[4]});

		assert.equal(uint256WAC14Jl, BigInt("1630233268"))
		await expect(LedgisEowD5E.transferFrom.call(addressgYtMdTX, addressVwEyWLR, uintALs0JpZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const addressmwjSyI = "0x0000000000000000000000000000000000000001"
		const addressl5BXCks = accounts[0]
		const uintxM4fPzq = BigInt("940")
		const addressr5SkfKS = accounts[4]
		const uintSXdn4i = BigInt("584")
		const addresstriX0CY = accounts[2]
		const addressjWszfy3 = accounts[1]
		const uintRRiRBqy = BigInt("367")
		const addressBl17DN9 = accounts[5]
		const addressQBXeq4n = accounts[5]
		const uintannu7di = BigInt("2030")
		const addressz0O5kk1 = accounts[2]
		const uintIjsYpZ = BigInt("430")
		const addressrjc4fdd = accounts[4]
		const addresspkXYfNn = accounts[1]
		const uint256QQ7Epm = await LedgisEowD5E.allowance.call(addressl5BXCks, addressmwjSyI, {from: accounts[4]});
//		const booli5iye4 = await LedgisEowD5E.transfer.call(addressr5SkfKS, uintxM4fPzq, {from: accounts[2]});
//		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const boolzXBjMx6 = await LedgisEowD5E.transferFrom.call(addressjWszfy3, addresstriX0CY, uintSXdn4i, {from: accounts[4]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressBl17DN9, uintRRiRBqy, {from: accounts[2]});
//		const addressyOpmThi = await LedgisEowD5E.unfreeze.call(addressQBXeq4n, {from: accounts[4]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressz0O5kk1, uintannu7di, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNmzAzl = await LedgisEowD5E.decreaseAllowance.call(addressrjc4fdd, uintIjsYpZ, {from: accounts[1]});
//		const uint256Xm5J3R = await LedgisEowD5E.balanceOf.call(addresspkXYfNn, {from: accounts[4]});

		assert.equal(uint256QQ7Epm, BigInt("0"))
		await expect(LedgisEowD5E.transfer.call(addressr5SkfKS, uintxM4fPzq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const addressLoSykA3 = accounts[3]
		const uintAcKjbiP = BigInt("584")
		const address4gBvOx = accounts[2]
		const addresskAxDs9M = accounts[1]
		const uintDTu8hzR = BigInt("367")
		const addressg5r7G9K = accounts[5]
		const addressgjz3qcR = accounts[5]
		const uintAvut6y8 = BigInt("1990")
		const addressvTUmdr3 = accounts[2]
		const addressd952xgG = accounts[1]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
		const boolzaDDrW = await LedgisEowD5E.isFrozen.call(addressLoSykA3, {from: accounts[1]});
//		const boolzXBjMx6 = await LedgisEowD5E.transferFrom.call(addresskAxDs9M, address4gBvOx, uintAcKjbiP, {from: accounts[4]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressg5r7G9K, uintDTu8hzR, {from: accounts[2]});
//		const uint256GBm5y62 = await LedgisEowD5E.currentTime.call({from: accounts[2]});
//		const addressyOpmThi = await LedgisEowD5E.unfreeze.call(addressgjz3qcR, {from: accounts[4]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressvTUmdr3, uintAvut6y8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xm5J3R = await LedgisEowD5E.balanceOf.call(addressd952xgG, {from: accounts[4]});

		assert.equal(boolzaDDrW, false)
		assert.equal(uint256WAC14Jl, BigInt("1630233270"))
		await expect(LedgisEowD5E.transferFrom.call(addresskAxDs9M, address4gBvOx, uintAcKjbiP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissNdbGYe = await Ledgis.new({from: accounts[2]});
		const uintolIjdt4 = BigInt("637")
		const uintkm45WS = BigInt("171")
		const addressjIVy8Eh = accounts[1]
		const addressPHOsdG = accounts[0]
		const uintzdVQHB = BigInt("1650")
		const addressdnIUlvZ = accounts[1]
		const boolfbi5htM = await LedgissNdbGYe.transferWithLockAfter.call(addressjIVy8Eh, uintkm45WS, uintolIjdt4, {from: accounts[2]});
//		await LedgissNdbGYe.whenPaused.call({from: accounts[0]});
//		const boolcg1dUdp = await LedgissNdbGYe.isFrozen.call(addressPHOsdG, {from: accounts[1]});
//		await LedgissNdbGYe.whenPaused.call({from: accounts[3]});
//		await LedgissNdbGYe.lockState.call(addressdnIUlvZ, uintzdVQHB, {from: accounts[0]});

		assert.equal(boolfbi5htM, true)
		await expect(LedgissNdbGYe.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const address1ml2hq = accounts[1]
		const uintAC6CvLN = BigInt("157")
		const addressXeGhgqq = accounts[3]
		const addressGtmvcFw = accounts[4]
		const uintdFQ0kb = BigInt("367")
		const addressYXVuSy7 = accounts[5]
		const uintMsHToZr = BigInt("500")
		const uintoNuW4YE = BigInt("1610")
		const addressDl4mqg = accounts[2]
		const uintRPTnGL = BigInt("1990")
		const addressBRbfjHQ = accounts[2]
		const addressetsJbo = accounts[4]
		const addressmN7rXYk = accounts[3]
		const uintBHe4hW = BigInt("294")
		const addressrkW98xx = accounts[4]
		const uintV8G3Uec = BigInt("1064")
		const addressMNeQbKU = accounts[2]
		const addressBMKpuEo = accounts[0]
		const uint256pJ7lyt = await LedgisEowD5E.totalSupply.call({from: accounts[0]});
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
		const uint256KIqrbG1 = await LedgisEowD5E.balanceOf.call(address1ml2hq, {from: accounts[0]});
//		const booliv6k3y = await LedgisEowD5E.transferFrom.call(addressGtmvcFw, addressXeGhgqq, uintAC6CvLN, {from: accounts[4]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressYXVuSy7, uintdFQ0kb, {from: accounts[2]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addressDl4mqg, uintoNuW4YE, uintMsHToZr, {from: accounts[1]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressBRbfjHQ, uintRPTnGL, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jC9Jhot = await LedgisEowD5E.lockCount.call(addressetsJbo, {from: accounts[3]});
//		const addressOGLMHDU = await LedgisEowD5E.freeze.call(addressmN7rXYk, {from: accounts[0]});
//		const boolFvOw551 = await LedgisEowD5E.mint.call(addressrkW98xx, uintBHe4hW, {from: accounts[0]});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressBMKpuEo, addressMNeQbKU, uintV8G3Uec, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KIqrbG1, BigInt("10000000000000"))
		assert.equal(uint256WAC14Jl, BigInt("1630233265"))
		assert.equal(uint256pJ7lyt, BigInt("10000000000000"))
		await expect(LedgisEowD5E.transferFrom.call(addressGtmvcFw, addressXeGhgqq, uintAC6CvLN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRQodMz = await Ledgis.new({from: accounts[5]});
		const addresskDfdQG = accounts[2]
//		await LedgisRQodMz.unpause.call({from: accounts[5]});
//		await LedgisRQodMz.pause.call({from: accounts[3]});
//		const uint256aI4IdR9 = await LedgisRQodMz.balanceOf.call(addresskDfdQG, {from: accounts[4]});

		await expect(LedgisRQodMz.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const uintOafWe9j = BigInt("1062")
		const addressK4t9n3h = accounts[3]
		const addressPC5Z2f = accounts[3]
		const addressV2jjpIa = accounts[1]
		const uintAJCnNwJ = BigInt("157")
		const addressTFM6EdZ = accounts[3]
		const addresshY4NQhn = accounts[4]
		const uintknO2B4Y = BigInt("367")
		const addressEtQoOem = accounts[5]
		const uintgVUSzU7 = BigInt("500")
		const uintRCLgP4v = BigInt("1620")
		const addressQ75d345 = accounts[2]
		const uintqhmlBpD = BigInt("1990")
		const addressJSrTJNN = accounts[2]
		const addressPXZfGHk = accounts[4]
		const addressbYCVGGk = accounts[3]
		const uintDqxZSL = BigInt("1540")
		const addressYLPr1cQ = "0x0000000000000000000000000000000000000001"
		const uintdsyJIc = BigInt("305")
		const addresshaXDvA6 = accounts[4]
		const uintanE1mXL = BigInt("1064")
		const addressrLXTXtg = accounts[2]
		const addressCNGgseA = accounts[0]
		const uintpQYgSS = BigInt("278")
		const addressVjdMEHz = accounts[3]
		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const addresswwsFvf = await LedgisEowD5E.burn.call(addressK4t9n3h, uintOafWe9j, {from: accounts[1]});
//		const addressArTSAXk = await LedgisEowD5E.transferOwnership.call(addressPC5Z2f, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KIqrbG1 = await LedgisEowD5E.balanceOf.call(addressV2jjpIa, {from: accounts[0]});
//		const booliv6k3y = await LedgisEowD5E.transferFrom.call(addresshY4NQhn, addressTFM6EdZ, uintAJCnNwJ, {from: accounts[4]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressEtQoOem, uintknO2B4Y, {from: accounts[2]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addressQ75d345, uintRCLgP4v, uintgVUSzU7, {from: accounts[1]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressJSrTJNN, uintqhmlBpD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jC9Jhot = await LedgisEowD5E.lockCount.call(addressPXZfGHk, {from: accounts[3]});
//		const addressOGLMHDU = await LedgisEowD5E.freeze.call(addressbYCVGGk, {from: accounts[0]});
//		const addressffEXmEJ = await LedgisEowD5E.burn.call(addressYLPr1cQ, uintDqxZSL, {from: accounts[3]});
//		const boolFvOw551 = await LedgisEowD5E.mint.call(addresshaXDvA6, uintdsyJIc, {from: accounts[0]});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addressCNGgseA, addressrLXTXtg, uintanE1mXL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIbdNVCA = await LedgisEowD5E.transfer.call(addressVjdMEHz, uintpQYgSS, {from: accounts[2]});

		assert.equal(uint256WAC14Jl, BigInt("1630233269"))
		await expect(LedgisEowD5E.burn.call(addressK4t9n3h, uintOafWe9j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEowD5E = await Ledgis.new({from: accounts[1]});
		const addressvnVsYeN = accounts[1]
		const uinteaaIZQw = BigInt("1798")
		const addressBMP9Moc = accounts[5]
		const uintJ129w19 = BigInt("584")
		const addresss8UhJKD = accounts[2]
		const addressB5Uiufy = accounts[1]
		const addressNpeAmsP = accounts[1]
		const uintJI7HZXJ = BigInt("367")
		const addressNZSz1S8 = accounts[6]
		const uintx2viSGB = BigInt("1248")
		const uintLOoML7I = BigInt("1430")
		const addressNA69Ghg = accounts[4]
		const uintyX5Akb1 = BigInt("500")
		const uintf6nDZ5J = BigInt("1620")
		const addressKGIT1Lx = accounts[1]
		const addresslJC77a3 = accounts[4]
		const uintGQV4nD = BigInt("1990")
		const addressoKsA9G2 = accounts[2]
		const uintkrRFz0 = BigInt("1064")
		const addressn9tK635 = accounts[2]
		const addresscPn1xBV = accounts[0]
		const addressPrYjxYz = accounts[1]
		const uint256jRLSslm = await LedgisEowD5E.balanceOf.call(addressvnVsYeN, {from: accounts[0]});
//		const addressZFNuYkm = await LedgisEowD5E.unlock.call(addressBMP9Moc, uinteaaIZQw, {from: accounts[1]});
//		const uint256WAC14Jl = await LedgisEowD5E.currentTime.call({from: accounts[1]});
//		const boolzXBjMx6 = await LedgisEowD5E.transferFrom.call(addressB5Uiufy, addresss8UhJKD, uintJ129w19, {from: accounts[4]});
//		const uint256KIqrbG1 = await LedgisEowD5E.balanceOf.call(addressNpeAmsP, {from: accounts[0]});
//		await LedgisEowD5E.onlyOwner.call({from: accounts[4]});
//		const boolGXtXdSl = await LedgisEowD5E.decreaseAllowance.call(addressNZSz1S8, uintJI7HZXJ, {from: accounts[2]});
//		const boolPGn1Dd5 = await LedgisEowD5E.transferWithLock.call(addressNA69Ghg, uintLOoML7I, uintx2viSGB, {from: accounts[0]});
//		const addressF2YCTH = await LedgisEowD5E.lockAfter.call(addressKGIT1Lx, uintf6nDZ5J, uintyX5Akb1, {from: accounts[1]});
//		const addressyOpmThi = await LedgisEowD5E.unfreeze.call(addresslJC77a3, {from: accounts[4]});
//		const boolkAbWRN8 = await LedgisEowD5E.approve.call(addressoKsA9G2, uintGQV4nD, {from: "0x0000000000000000000000000000000000000001"});
//		const booltOT882m = await LedgisEowD5E.transferFrom.call(addresscPn1xBV, addressn9tK635, uintkrRFz0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xm5J3R = await LedgisEowD5E.balanceOf.call(addressPrYjxYz, {from: accounts[4]});

		assert.equal(uint256jRLSslm, BigInt("10000000000000"))
		await expect(LedgisEowD5E.unlock.call(addressBMP9Moc, uinteaaIZQw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisoWLRyr2 = await Ledgis.new({from: accounts[2]});
		const addressXAUZdKy = accounts[4]
		const addressAyn7qsa = accounts[1]
		const addressZ3huMHR = accounts[3]
//		await LedgisoWLRyr2.renounceOwnership.call({from: accounts[2]});
//		const uint256zQixfS0 = await LedgisoWLRyr2.allowance.call(addressAyn7qsa, addressXAUZdKy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JVBdCzd = await LedgisoWLRyr2.balanceOf.call(addressZ3huMHR, {from: accounts[2]});

		await expect(LedgisoWLRyr2.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgist0HUMGu = await Ledgis.new({from: accounts[4]});
		const uint1FcyGM = BigInt("707")
		const addressLhMIYsw = accounts[0]
		const addressjWr0YbF = accounts[5]
		const uintBlrbCWs = BigInt("987")
		const addressrVAHivf = accounts[6]
		const addressho8RECP = accounts[4]
		const boolaHs7pFr = await Ledgist0HUMGu.mint.call(addressLhMIYsw, uint1FcyGM, {from: accounts[4]});
		const boolMrpTPr = await Ledgist0HUMGu.isFrozen.call(addressjWr0YbF, {from: accounts[1]});
//		const boolryZY7ef = await Ledgist0HUMGu.transferFrom.call(addressho8RECP, addressrVAHivf, uintBlrbCWs, {from: accounts[0]});

		assert.equal(boolMrpTPr, false)
		assert.equal(boolaHs7pFr, true)
		await expect(Ledgist0HUMGu.transferFrom.call(addressho8RECP, addressrVAHivf, uintBlrbCWs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgist0HUMGu = await Ledgis.new({from: accounts[4]});
		const uintbaqypdg = BigInt("1519")
		const uintagAnTL4 = BigInt("713")
		const addresscdr2KjP = accounts[1]
		const uintTM2l27a = BigInt("987")
		const addressz0RIHMY = accounts[6]
		const addressR1haHSn = accounts[3]
		const boolg18kvtr = await Ledgist0HUMGu.transferWithLock.call(addresscdr2KjP, uintagAnTL4, uintbaqypdg, {from: accounts[4]});
//		const boolryZY7ef = await Ledgist0HUMGu.transferFrom.call(addressR1haHSn, addressz0RIHMY, uintTM2l27a, {from: accounts[0]});

		assert.equal(boolg18kvtr, true)
		await expect(Ledgist0HUMGu.transferFrom.call(addressR1haHSn, addressz0RIHMY, uintTM2l27a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRQodMz = await Ledgis.new({from: accounts[5]});
		const uintYv1xaR8 = BigInt("1144")
		const uintLyPdUNh = BigInt("1960")
		const addressCXopi6u = accounts[1]
		const addresswulrCgF = accounts[2]
//		const addressmd8FaD4 = await LedgisRQodMz.lock.call(addressCXopi6u, uintLyPdUNh, uintYv1xaR8, {from: accounts[5]});
//		await LedgisRQodMz.whenNotFrozen.call({from: accounts[0]});
//		const uint256aI4IdR9 = await LedgisRQodMz.balanceOf.call(addresswulrCgF, {from: accounts[4]});

		await expect(LedgisRQodMz.lock.call(addressCXopi6u, uintLyPdUNh, uintYv1xaR8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})