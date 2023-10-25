const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinPxDNpPI = await FreakCoin.new({from: accounts[3]});
		const addressPxQSCo = "0x0000000000000000000000000000000000000001"
		const addressSZeMtXE = accounts[0]
		const uint256YoAfR3d = await FreakCoinPxDNpPI.totalSupply.call({from: accounts[3]});
//		const uint256uOuynB = await FreakCoinPxDNpPI.allUserBalances.call(addressPxQSCo, {from: accounts[3]});
//		const uint256ShrNgta = await FreakCoinPxDNpPI.allUserBalances.call(addressSZeMtXE, {from: accounts[0]});

		assert.equal(uint256YoAfR3d, BigInt("1000000"))
		await expect(FreakCoinPxDNpPI.allUserBalances.call(addressPxQSCo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinbijDkr = await FreakCoin.new({from: accounts[4]});
		const addresso8O1bN = accounts[0]
		const uintmSXqgOM = BigInt("833")
		const addressHtpoKIf = accounts[2]
		const uintPz8Dmwj = BigInt("887")
		const addressLEDkWp = accounts[2]
		const addressfs78gPT = accounts[3]
		const addressTL69MTb = accounts[1]
		const addressUONluoW = accounts[1]
		const uint256C4j38q = await FreakCoinbijDkr.balanceOf.call(addresso8O1bN, {from: accounts[0]});
		const boolbSNnh3o = await FreakCoinbijDkr.approve.call(addressHtpoKIf, uintmSXqgOM, {from: accounts[4]});
		const boolhPK1TQ3 = await FreakCoinbijDkr.approve.call(addressLEDkWp, uintPz8Dmwj, {from: accounts[3]});
//		const uint256qFyAQBz = await FreakCoinbijDkr.allUserBalances.call(addressfs78gPT, {from: accounts[1]});
//		const uint256caL6kQN = await FreakCoinbijDkr.allowance.call(addressUONluoW, addressTL69MTb, {from: accounts[3]});

		assert.equal(boolbSNnh3o, true)
		assert.equal(boolhPK1TQ3, true)
		assert.equal(uint256C4j38q, BigInt("0"))
		await expect(FreakCoinbijDkr.allUserBalances.call(addressfs78gPT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoiniw48GQb = await FreakCoin.new({from: accounts[1]});
		const uinthFojpOT = BigInt("1881")
		const addressgx7KQF = accounts[1]
		const addressUAOa9Xo = "0x0000000000000000000000000000000000000001"
		const addressVKjtmP4 = "0x0000000000000000000000000000000000000001"
		const uintww33qPs = BigInt("778")
		const addressCNHUctZ = "0x0000000000000000000000000000000000000001"
		const uinteMACwpD = BigInt("1460")
		const addressWEVH4J = accounts[4]
		const boolVaB1wF = await FreakCoiniw48GQb.transfer.call(addressgx7KQF, uinthFojpOT, {from: accounts[1]});
		const uint256EecZqru = await FreakCoiniw48GQb.totalSupply.call({from: accounts[1]});
		const uint256VrxnQTF = await FreakCoiniw48GQb.allowance.call(addressVKjtmP4, addressUAOa9Xo, {from: accounts[1]});
		const boolyQG80b = await FreakCoiniw48GQb.approve.call(addressCNHUctZ, uintww33qPs, {from: accounts[2]});
		const boolUPEOR2 = await FreakCoiniw48GQb.transfer.call(addressWEVH4J, uinteMACwpD, {from: accounts[1]});

		assert.equal(boolUPEOR2, true)
		assert.equal(boolVaB1wF, true)
		assert.equal(boolyQG80b, true)
		assert.equal(uint256EecZqru, BigInt("1000000"))
		assert.equal(uint256VrxnQTF, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoincOLarb = await FreakCoin.new({from: accounts[1]});
		const uintpzoQe7O = BigInt("1614")
		const addresse63XHSV = accounts[1]
		const addresscZOi02a = accounts[1]
		const addressqT0Yy8l = accounts[4]
		const uint256IVjkz1W = await FreakCoincOLarb.totalSupply.call({from: accounts[5]});
//		const boolojzaEjj = await FreakCoincOLarb.transferFrom.call(addresscZOi02a, addresse63XHSV, uintpzoQe7O, {from: accounts[0]});
//		const uint256fleVrdU = await FreakCoincOLarb.allUserBalances.call(addressqT0Yy8l, {from: accounts[5]});

		assert.equal(uint256IVjkz1W, BigInt("1000000"))
		await expect(FreakCoincOLarb.transferFrom.call(addresscZOi02a, addresse63XHSV, uintpzoQe7O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinlQDsfSH = await FreakCoin.new({from: accounts[3]});
		const uintaS6bNAz = BigInt("495")
		const addresswpZqery = accounts[4]
		const addressM7ZQmgm = accounts[3]
		const addresseBaDf2 = accounts[1]
		const address88Q7eQ = accounts[1]
		const addresshwNBKQv = accounts[0]
		const addressOGhKVfk = accounts[3]
		const addressF1enWsk = accounts[2]
		const addressDLgiSFc = await FreakCoinlQDsfSH.uniswapAddress.call({from: accounts[1]});
//		const boolkdm6tfA = await FreakCoinlQDsfSH.transferFrom.call(addressM7ZQmgm, addresswpZqery, uintaS6bNAz, {from: accounts[0]});
//		const uint256wy9Ss10 = await FreakCoinlQDsfSH.allowance.call(address88Q7eQ, addresseBaDf2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XSD5SnG = await FreakCoinlQDsfSH.allowance.call(addressOGhKVfk, addresshwNBKQv, {from: accounts[5]});
//		const addressmRCMljD = await FreakCoinlQDsfSH.uniswapAddress.call({from: accounts[2]});
//		const uint256AXZzbx = await FreakCoinlQDsfSH.balanceOf.call(addressF1enWsk, {from: accounts[1]});

		assert.equal(addressDLgiSFc, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinlQDsfSH.transferFrom.call(addressM7ZQmgm, addresswpZqery, uintaS6bNAz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinKMDKGg = await FreakCoin.new({from: accounts[0]});
		const addressyuVmF6 = accounts[0]
		const uintFc0N4qp = BigInt("432")
		const addressEzNaILX = accounts[5]
		const uintaNqazPZ = BigInt("667")
		const addressHxfo90k = accounts[4]
		const addressRtH0s4P = accounts[0]
		const addressBeq5lox = accounts[1]
		const uintXJ2JhEk = BigInt("1514")
		const addressge30l1X = accounts[1]
//		const addressr6itGy0 = await FreakCoinKMDKGg.setUniswapAddress.call(addressyuVmF6, {from: accounts[3]});
//		const addresszcjIYwS = await FreakCoinKMDKGg.uniswapAddress.call({from: accounts[3]});
//		const boolPPnlZJ = await FreakCoinKMDKGg.transfer.call(addressEzNaILX, uintFc0N4qp, {from: accounts[3]});
//		const boolk93VIgU = await FreakCoinKMDKGg.transfer.call(addressHxfo90k, uintaNqazPZ, {from: accounts[4]});
//		const uint256KWVFwx = await FreakCoinKMDKGg.allowance.call(addressBeq5lox, addressRtH0s4P, {from: accounts[4]});
//		const boolDsWtZOf = await FreakCoinKMDKGg.transfer.call(addressge30l1X, uintXJ2JhEk, {from: accounts[2]});

		await expect(FreakCoinKMDKGg.setUniswapAddress.call(addressyuVmF6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinMk1O6CI = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrSvIUma = accounts[1]
		const uintR2vnH0O = BigInt("1874")
		const addressrOCx2MN = accounts[0]
		const addressMSUMPmx = accounts[0]
		const uint256Ca4ZWNL = await FreakCoinMk1O6CI.totalSupply.call({from: accounts[3]});
		const uint256xLeDNuf = await FreakCoinMk1O6CI.allUserBalances.call(addressrSvIUma, {from: accounts[3]});
		const boolYONAuLi = await FreakCoinMk1O6CI.transferFrom.call(addressMSUMPmx, addressrOCx2MN, uintR2vnH0O, {from: accounts[1]});
	});
})