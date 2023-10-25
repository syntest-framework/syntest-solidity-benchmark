const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCointW4vblc = await DJCoin.new({from: accounts[3]});
		const uintJye89bM = BigInt("967")
		const addressQuxR3nO = accounts[3]
		const uintfaV8cK = BigInt("138")
		const addressa4bi9SM = accounts[0]
		const addressJ64hOfL = accounts[1]
		const uintSbQ1DJ = BigInt("1381")
		const addressCwIIosb = accounts[3]
		const addressnqV99GR = accounts[2]
		const addressJnWUeSY = accounts[3]
		const boolyiRoB4c = await DJCointW4vblc.approve.call(addressQuxR3nO, uintJye89bM, {from: accounts[5]});
		const boolyFCv4w2 = await DJCointW4vblc.increaseAllowance.call(addressa4bi9SM, uintfaV8cK, {from: accounts[2]});
//		const addressAfgFiVr = await DJCointW4vblc.validRecipient.call(addressJ64hOfL, {from: accounts[2]});
//		const boolck0xrn = await DJCointW4vblc.transferFrom.call(addressnqV99GR, addressCwIIosb, uintSbQ1DJ, {from: accounts[0]});
//		const addressYXO3sn3 = await DJCointW4vblc.transferOwnership.call(addressJnWUeSY, {from: accounts[5]});

		assert.equal(boolyFCv4w2, true)
		assert.equal(boolyiRoB4c, true)
		await expect(DJCointW4vblc.validRecipient.call(addressJ64hOfL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRDMFreE = await DJCoin.new({from: accounts[3]});
		const address9zXpMa = accounts[1]
		const addressaABtJr6 = accounts[5]
		const addressD2BwkJU = accounts[2]
		const addressMmudFF1 = accounts[4]
		const addressjy8WjLT = accounts[5]
		const uintPgxWICy = BigInt("1704")
		const addresssMKe3gy = accounts[2]
		const uint256uwIQuC = await DJCoinRDMFreE.allowance.call(addressaABtJr6, address9zXpMa, {from: accounts[2]});
		const uint256aAxka3G = await DJCoinRDMFreE.allowance.call(addressMmudFF1, addressD2BwkJU, {from: accounts[0]});
//		const addressG5boFPT = await DJCoinRDMFreE.validRecipient.call(addressjy8WjLT, {from: accounts[0]});
//		await DJCoinRDMFreE.onlyOwner.call({from: accounts[0]});
//		const boolaizHtSQ = await DJCoinRDMFreE.decreaseAllowance.call(addresssMKe3gy, uintPgxWICy, {from: accounts[1]});

		assert.equal(uint256aAxka3G, BigInt("0"))
		assert.equal(uint256uwIQuC, BigInt("0"))
		await expect(DJCoinRDMFreE.validRecipient.call(addressjy8WjLT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinenOZYeD = await DJCoin.new({from: accounts[2]});
		const uintfoy3UU = BigInt("1148")
		const addressjk1OIXs = accounts[2]
		const uintnmSfJC9 = BigInt("583")
		const uintjqc72g0 = BigInt("214")
		const addressUCEY5lV = accounts[3]
		const addressAIHmkll = accounts[1]
		const uint256MTiTvQ = await DJCoinenOZYeD.totalSupply.call({from: accounts[1]});
		const addressmQaZET4 = await DJCoinenOZYeD.owner.call({from: accounts[4]});
//		const boolCqXNBmP = await DJCoinenOZYeD.transfer.call(addressjk1OIXs, uintfoy3UU, {from: accounts[3]});
//		const uint256U6gW4gI = await DJCoinenOZYeD.burn.call(uintjqc72g0, uintnmSfJC9, {from: accounts[1]});
//		const uint256Wml55g = await DJCoinenOZYeD.allowance.call(addressAIHmkll, addressUCEY5lV, {from: accounts[5]});

		assert.equal(addressmQaZET4, 0xb93B034155987A1A01AD65b60bf3EEA8bBb1E77F)
		assert.equal(uint256MTiTvQ, BigInt("2100000000000"))
		await expect(DJCoinenOZYeD.transfer.call(addressjk1OIXs, uintfoy3UU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinIXEZkY4 = await DJCoin.new({from: accounts[2]});
		const uintw6U2LS5 = BigInt("536")
		const addressftipBpZ = accounts[5]
		const addressgu94RqT = accounts[1]
		const uintoDoRSIO = BigInt("474")
		const uintURuSbKK = BigInt("26")
		const uintiY8Eo2L = BigInt("580")
		const uintZ8pngis = BigInt("1792")
		const addressfpcsDnx = accounts[0]
//		const boolp02S6bf = await DJCoinIXEZkY4.transferFrom.call(addressgu94RqT, addressftipBpZ, uintw6U2LS5, {from: accounts[0]});
//		const booluahApfB = await DJCoinIXEZkY4.changetokensPerBlock.call(uintoDoRSIO, {from: accounts[1]});
//		const uint256sSxHExL = await DJCoinIXEZkY4.burn.call(uintiY8Eo2L, uintURuSbKK, {from: accounts[4]});
//		const uint256CwoHDp = await DJCoinIXEZkY4.totalSupply.call({from: accounts[4]});
//		const boolzNFZVLC = await DJCoinIXEZkY4.approve.call(addressfpcsDnx, uintZ8pngis, {from: accounts[0]});

		await expect(DJCoinIXEZkY4.transferFrom.call(addressgu94RqT, addressftipBpZ, uintw6U2LS5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinzdgJ8Ki = await DJCoin.new({from: accounts[1]});
		const uintQlRjXnf = BigInt("1432")
		const uintsDc1HoQ = BigInt("955")
		const uinth1UQwT = BigInt("540")
		const addressQOAlJYT = accounts[3]
		const uintTnwdKnN = BigInt("1908")
		const addressJMeq9qD = accounts[1]
		const uintBboDrDT = BigInt("132")
		const addresssDmmBT = accounts[3]
		const boolQ4UC7c4 = await DJCoinzdgJ8Ki.changetokensPerBlock.call(uintQlRjXnf, {from: accounts[3]});
//		const uint256T9WOXC4 = await DJCoinzdgJ8Ki.burn.call(uinth1UQwT, uintsDc1HoQ, {from: accounts[3]});
//		const addressY6AfYmA = await DJCoinzdgJ8Ki.transferOwnership.call(addressQOAlJYT, {from: accounts[3]});
//		const boolyxeHT7Y = await DJCoinzdgJ8Ki.transfer.call(addressJMeq9qD, uintTnwdKnN, {from: accounts[0]});
//		const boolseVhKht = await DJCoinzdgJ8Ki.increaseAllowance.call(addresssDmmBT, uintBboDrDT, {from: accounts[1]});
//		await DJCoinzdgJ8Ki.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolQ4UC7c4, true)
		await expect(DJCoinzdgJ8Ki.burn.call(uinth1UQwT, uintsDc1HoQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoiniWwAlWA = await DJCoin.new({from: accounts[4]});
		const uintLsjdLUE = BigInt("1935")
		const uintq9sjkur = BigInt("207")
		const uintWIDxHPq = BigInt("1151")
		const addressOxq6UHC = accounts[3]
		const uintEEbLI4i = BigInt("863")
		const uintInZiuY = BigInt("744")
		const uint256c7kif7n = await DJCoiniWwAlWA.burn.call(uintq9sjkur, uintLsjdLUE, {from: accounts[4]});
		const boolGkq1vJb = await DJCoiniWwAlWA.increaseAllowance.call(addressOxq6UHC, uintWIDxHPq, {from: accounts[2]});
		const uint256h2RAob7 = await DJCoiniWwAlWA.burn.call(uintInZiuY, uintEEbLI4i, {from: accounts[4]});

		assert.equal(boolGkq1vJb, true)
		assert.equal(uint256c7kif7n, BigInt("1693650000000"))
		assert.equal(uint256h2RAob7, BigInt("1918770000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinJI0Qca = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxwoqEEp = "0x0000000000000000000000000000000000000001"
		const addressbOYB3MU = accounts[2]
		const uintzllejpC = BigInt("507")
		const addresssdDIb8Q = accounts[1]
		const uint256YxE5xYl = await DJCoinJI0Qca.allowance.call(addressbOYB3MU, addressxwoqEEp, {from: accounts[2]});
		const boolfbwPNtm = await DJCoinJI0Qca.decreaseAllowance.call(addresssdDIb8Q, uintzllejpC, {from: accounts[1]});
		const uint256fsd6hHS = await DJCoinJI0Qca.totalSupply.call({from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinJiPozvv = await DJCoin.new({from: accounts[1]});
		const uint7C39Vw = BigInt("753")
		const addressSeo5HX = accounts[2]
		const uintxJe5QC8 = BigInt("737")
		const addressWII2Db = accounts[1]
		const uint8w57Pm = BigInt("1073")
		const addressNio3err = "0x0000000000000000000000000000000000000001"
		const uintleuWkM = BigInt("1088")
		const uintB8hwtPi = BigInt("796")
		const address11qyPO = accounts[3]
		const uintZsYWeJ = BigInt("1587")
		const addressveADg2X = accounts[0]
		const boolEiCmhAO = await DJCoinJiPozvv.decreaseAllowance.call(addressSeo5HX, uint7C39Vw, {from: accounts[0]});
		const boolTXN6UTb = await DJCoinJiPozvv.increaseAllowance.call(addressWII2Db, uintxJe5QC8, {from: "0x0000000000000000000000000000000000000001"});
		const boolvQ4pSeC = await DJCoinJiPozvv.increaseAllowance.call(addressNio3err, uint8w57Pm, {from: accounts[4]});
//		const uint256OfJIN1h = await DJCoinJiPozvv.burn.call(uintB8hwtPi, uintleuWkM, {from: accounts[0]});
//		const addressZAdG9nZ = await DJCoinJiPozvv.transferOwnership.call(address11qyPO, {from: accounts[3]});
//		const boolVpzSrwq = await DJCoinJiPozvv.transfer.call(addressveADg2X, uintZsYWeJ, {from: accounts[2]});

		assert.equal(boolEiCmhAO, true)
		assert.equal(boolTXN6UTb, true)
		assert.equal(boolvQ4pSeC, true)
		await expect(DJCoinJiPozvv.burn.call(uintB8hwtPi, uintleuWkM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinenOZYeD = await DJCoin.new({from: accounts[2]});
		const uintEofJ30 = BigInt("1148")
		const addressdpG1m2D = accounts[2]
		const uintCRmIEes = BigInt("583")
		const uints8ZJWlh = BigInt("214")
		const addressqokd18x = accounts[3]
		const addresszYFnmTV = accounts[1]
		const uint256MTiTvQ = await DJCoinenOZYeD.totalSupply.call({from: accounts[1]});
		const addressmQaZET4 = await DJCoinenOZYeD.owner.call({from: accounts[4]});
//		await DJCoinenOZYeD.renounceOwnership.call({from: accounts[2]});
//		await DJCoinenOZYeD.onlyOwner.call({from: accounts[3]});
//		const boolCqXNBmP = await DJCoinenOZYeD.transfer.call(addressdpG1m2D, uintEofJ30, {from: accounts[3]});
//		const uint256U6gW4gI = await DJCoinenOZYeD.burn.call(uints8ZJWlh, uintCRmIEes, {from: accounts[1]});
//		const uint256Wml55g = await DJCoinenOZYeD.allowance.call(addresszYFnmTV, addressqokd18x, {from: accounts[5]});

		assert.equal(addressmQaZET4, 0xb93B034155987A1A01AD65b60bf3EEA8bBb1E77F)
		assert.equal(uint256MTiTvQ, BigInt("2100000000000"))
		await expect(DJCoinenOZYeD.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZf4CH0W = await DJCoin.new({from: accounts[3]});
		const addresss2F1hQd = accounts[4]
		const addressxIp4MtV = accounts[1]
		const addressIXgXOM6 = "0x0000000000000000000000000000000000000001"
		const uint1J0bYW = BigInt("1912")
		const addressL3v6DLy = "0x0000000000000000000000000000000000000001"
		const uintuyNeic8 = BigInt("1481")
		const addressJ8r8Uz = accounts[2]
		const uint256gxB1Xoi = await DJCoinZf4CH0W.totalSupply.call({from: accounts[0]});
		const uint256VyzC15w = await DJCoinZf4CH0W.balanceOf.call(addresss2F1hQd, {from: accounts[1]});
		const uint256iEjiEI2 = await DJCoinZf4CH0W.allowance.call(addressIXgXOM6, addressxIp4MtV, {from: accounts[1]});
		const booloCLGy4W = await DJCoinZf4CH0W.increaseAllowance.call(addressL3v6DLy, uint1J0bYW, {from: accounts[1]});
//		const boold7VKTcU = await DJCoinZf4CH0W.transfer.call(addressJ8r8Uz, uintuyNeic8, {from: accounts[4]});

		assert.equal(booloCLGy4W, true)
		assert.equal(uint256VyzC15w, BigInt("0"))
		assert.equal(uint256gxB1Xoi, BigInt("2100000000000"))
		assert.equal(uint256iEjiEI2, BigInt("0"))
		await expect(DJCoinZf4CH0W.transfer.call(addressJ8r8Uz, uintuyNeic8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZf4CH0W = await DJCoin.new({from: accounts[3]});
		const addressxAwC1wH = accounts[1]
		const uintzNNpHxT = BigInt("1495")
		const addressBuZvfyZ = accounts[4]
		const addressYYBiK3F = await DJCoinZf4CH0W.transferOwnership.call(addressxAwC1wH, {from: accounts[3]});
//		const boold7VKTcU = await DJCoinZf4CH0W.transfer.call(addressBuZvfyZ, uintzNNpHxT, {from: accounts[4]});

		await expect(DJCoinZf4CH0W.transfer.call(addressBuZvfyZ, uintzNNpHxT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZf4CH0W = await DJCoin.new({from: accounts[3]});
		const uintNYDhOe3 = BigInt("0")
		const addressSZ9LPXE = accounts[4]
		const boold7VKTcU = await DJCoinZf4CH0W.transfer.call(addressSZ9LPXE, uintNYDhOe3, {from: accounts[4]});

		assert.equal(boold7VKTcU, true)
	});
})