const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnDd5R6DD = await Weedburn.new({from: accounts[1]});
		const addresswGWy0d = accounts[3]
//		await WeedburnDd5R6DD.disableDevMode.call({from: accounts[2]});
//		const uint256vZ3EynH = await WeedburnDd5R6DD.balanceOf.call(addresswGWy0d, {from: accounts[0]});

		await expect(WeedburnDd5R6DD.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnCYAIwl = await Weedburn.new({from: accounts[3]});
		const uintRY2fLdv = BigInt("1923")
		const addressmp3i3wX = accounts[1]
		const uint256ftOIsGG = await WeedburnCYAIwl.burn.call(uintRY2fLdv, {from: accounts[3]});
		const uint256DNLnC7T = await WeedburnCYAIwl.balanceOf.call(addressmp3i3wX, {from: accounts[3]});
		const uint256occY1Al = await WeedburnCYAIwl.totalSupply.call({from: accounts[2]});

		assert.equal(uint256DNLnC7T, BigInt("0"))
		assert.equal(uint256occY1Al, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnksCMiif = await Weedburn.new({from: accounts[1]});
		const uint8UR6P3UI = await WeedburnksCMiif.decimals.call({from: accounts[0]});
		const uint256GQQ2ig7 = await WeedburnksCMiif.totalSupply.call({from: accounts[0]});

		assert.equal(uint256GQQ2ig7, BigInt("100000000000000000000000"))
		assert.equal(uint8UR6P3UI, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const stringYdrl2N9 = "RzzCAoJnyFZ855"
		const stringfDBvHXb = "OVIb6FpJG4OuhpyPMvGhmPDEOoRyeVjLG17SQgMQ5S4Mll3u6TTuNHPCOEnmGIvOYIsBvG3vuqJkoD9StATjgyUuAwTMXG4"
		const uintagbbVDl = BigInt("239")
		const WeedburnuTPHSBR = await Weedburn.new(stringYdrl2N9, stringfDBvHXb, uintagbbVDl, {from: accounts[1]});
		const addressIfU7K7 = accounts[4]
		const uint256Z8WWFMR = await WeedburnuTPHSBR.balanceOf.call(addressIfU7K7, {from: accounts[1]});
		const uint256TJlfabL = await WeedburnuTPHSBR.totalSupply.call({from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnWsYZc2 = await Weedburn.new({from: accounts[2]});
		const uintWbqOHW3 = BigInt("444")
		const addressFgCiPr = accounts[4]
		const addressR5N5Wet = accounts[2]
		const uintxCqR4ZK = BigInt("639")
		const addressHovW3Bs = accounts[3]
//		const boolliW47Wk = await WeedburnWsYZc2.transferFrom.call(addressR5N5Wet, addressFgCiPr, uintWbqOHW3, {from: accounts[0]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringHLTt5Vc = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringfyjyACl = await WeedburnWsYZc2.name.call({from: accounts[4]});
//		const addressDaThH1 = await WeedburnWsYZc2.burnFrom.call(addressHovW3Bs, uintxCqR4ZK, {from: accounts[3]});

		await expect(WeedburnWsYZc2.transferFrom.call(addressR5N5Wet, addressFgCiPr, uintWbqOHW3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncM4mFX2 = await Weedburn.new({from: accounts[0]});
		const uintL4Pglpy = BigInt("1461")
		const addressS7d4xCb = accounts[0]
		const stringazwdAFe = await WeedburncM4mFX2.symbol.call({from: accounts[1]});
		const boolUmsodRf = await WeedburncM4mFX2.transfer.call(addressS7d4xCb, uintL4Pglpy, {from: accounts[0]});
		const stringNbKVNNt = await WeedburncM4mFX2.symbol.call({from: accounts[2]});
//		await WeedburncM4mFX2.enableLimitMode.call({from: accounts[4]});

		assert.equal(boolUmsodRf, true)
		assert.equal(stringNbKVNNt, "Weedburn")
		assert.equal(stringazwdAFe, "Weedburn")
		await expect(WeedburncM4mFX2.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxM8BWvR = await Weedburn.new({from: accounts[0]});
		const uintn25DXZ = BigInt("1570")
		const addresspVeGge = accounts[2]
		const addressiUnM4yk = accounts[0]
//		await WeedburnxM8BWvR.enableDevMode.call({from: accounts[0]});
//		await WeedburnxM8BWvR.disableDevMode.call({from: accounts[1]});
//		const booli2z9s8Y = await WeedburnxM8BWvR.transfer.call(addresspVeGge, uintn25DXZ, {from: accounts[2]});
//		const uint256oPRgGpu = await WeedburnxM8BWvR.balanceOf.call(addressiUnM4yk, {from: accounts[0]});
//		await WeedburnxM8BWvR.enableLimitMode.call({from: accounts[0]});

		await expect(WeedburnxM8BWvR.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhIpYvMz = await Weedburn.new({from: accounts[1]});
		const uint9s8Sm6 = BigInt("2018")
		const addressBEBmNMX = accounts[1]
		const uintmogYhdA = BigInt("354")
		const addresscedRNYN = accounts[2]
		const addressDjqBOjV = accounts[4]
		const addressT09bI2 = accounts[3]
		const addresshV2UQl = accounts[1]
		const uintiUE0qOa = BigInt("950")
		const addressd4GVzRC = accounts[1]
		const boolumgsSfF = await WeedburnhIpYvMz.approve.call(addressBEBmNMX, uint9s8Sm6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQKNu68 = await WeedburnhIpYvMz.transferFrom.call(addressDjqBOjV, addresscedRNYN, uintmogYhdA, {from: accounts[0]});
//		const uint256czXSs6Z = await WeedburnhIpYvMz.allowance.call(addresshV2UQl, addressT09bI2, {from: accounts[5]});
//		const boolS1wcBun = await WeedburnhIpYvMz.transfer.call(addressd4GVzRC, uintiUE0qOa, {from: accounts[3]});

		assert.equal(boolumgsSfF, true)
		await expect(WeedburnhIpYvMz.transferFrom.call(addressDjqBOjV, addresscedRNYN, uintmogYhdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWsYZc2 = await Weedburn.new({from: accounts[2]});
		const uintxU5cYkw = BigInt("956")
		const addressA3A15Ig = accounts[1]
		const uintGByPFy = BigInt("444")
		const addressnEXM7A8 = accounts[4]
		const addressxhzTmRZ = accounts[2]
		const uinty9amXlO = BigInt("815")
		const addressdfnLqLC = accounts[4]
		const uintqTKcBTF = BigInt("639")
		const addressdy1bZxU = accounts[3]
//		const addressNagO3oH = await WeedburnWsYZc2.burnFrom.call(addressA3A15Ig, uintxU5cYkw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolliW47Wk = await WeedburnWsYZc2.transferFrom.call(addressxhzTmRZ, addressnEXM7A8, uintGByPFy, {from: accounts[0]});
//		const boolVAfsmG = await WeedburnWsYZc2.decreaseAllowance.call(addressdfnLqLC, uinty9amXlO, {from: accounts[0]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringHLTt5Vc = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		await WeedburnWsYZc2.enableLimitMode.call({from: accounts[4]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringfyjyACl = await WeedburnWsYZc2.name.call({from: accounts[4]});
//		const addressDaThH1 = await WeedburnWsYZc2.burnFrom.call(addressdy1bZxU, uintqTKcBTF, {from: accounts[3]});

		await expect(WeedburnWsYZc2.burnFrom.call(addressA3A15Ig, uintxU5cYkw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDd5R6DD = await Weedburn.new({from: accounts[1]});
		const addressSRtcFXg = accounts[4]
//		await WeedburnDd5R6DD.disableLimitMode.call({from: accounts[4]});
//		await WeedburnDd5R6DD.disableDevMode.call({from: accounts[2]});
//		const uint256vZ3EynH = await WeedburnDd5R6DD.balanceOf.call(addressSRtcFXg, {from: accounts[0]});

		await expect(WeedburnDd5R6DD.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWsYZc2 = await Weedburn.new({from: accounts[2]});
		const addresso0qdk6Y = accounts[3]
		const addressKBPVuy = accounts[1]
		const uintJkQiyF = BigInt("444")
		const addressfT4DlxE = accounts[4]
		const addressTvTQGWY = accounts[2]
		const uintwmFU4Q = BigInt("1473")
		const addressdc3ZvvB = accounts[3]
		const addresssVfS1DI = accounts[0]
		const uintbe7K59d = BigInt("784")
		const addressuafGO1A = accounts[3]
		const uintUzn5rc0 = BigInt("639")
		const address2b3LYA = accounts[3]
		const uint256oTZWaKl = await WeedburnWsYZc2.allowance.call(addressKBPVuy, addresso0qdk6Y, {from: accounts[2]});
//		const boolliW47Wk = await WeedburnWsYZc2.transferFrom.call(addressTvTQGWY, addressfT4DlxE, uintJkQiyF, {from: accounts[0]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringHLTt5Vc = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringfyjyACl = await WeedburnWsYZc2.name.call({from: accounts[4]});
//		const boolxTpNUo = await WeedburnWsYZc2.transferFrom.call(addresssVfS1DI, addressdc3ZvvB, uintwmFU4Q, {from: accounts[1]});
//		const stringo0MQeD = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[0]});
//		const boolgDzOe5y = await WeedburnWsYZc2.transfer.call(addressuafGO1A, uintbe7K59d, {from: accounts[4]});
//		const addressDaThH1 = await WeedburnWsYZc2.burnFrom.call(address2b3LYA, uintUzn5rc0, {from: accounts[3]});

		assert.equal(uint256oTZWaKl, BigInt("0"))
		await expect(WeedburnWsYZc2.transferFrom.call(addressTvTQGWY, addressfT4DlxE, uintJkQiyF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBWPHUyu = await Weedburn.new({from: accounts[1]});
		const uintttDT4Fu = BigInt("1197")
		const addressVqUAuz = accounts[1]
		const addressMWV1mn = accounts[1]
		const addressdjCLnjv = accounts[4]
		const uintGRdbxZM = BigInt("852")
		const addressXa6rSY1 = accounts[3]
		const boolCuM9Lo1 = await WeedburnBWPHUyu.increaseAllowance.call(addressVqUAuz, uintttDT4Fu, {from: accounts[1]});
//		await WeedburnBWPHUyu.enableDevMode.call({from: accounts[3]});
//		const uint8DRIKVyX = await WeedburnBWPHUyu.decimals.call({from: accounts[1]});
//		const uint256qMatF8m = await WeedburnBWPHUyu.allowance.call(addressdjCLnjv, addressMWV1mn, {from: accounts[2]});
//		await WeedburnBWPHUyu.disableLimitMode.call({from: accounts[0]});
//		const boolOI3f5gk = await WeedburnBWPHUyu.increaseAllowance.call(addressXa6rSY1, uintGRdbxZM, {from: accounts[0]});

		assert.equal(boolCuM9Lo1, true)
		await expect(WeedburnBWPHUyu.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWsYZc2 = await Weedburn.new({from: accounts[2]});
		const uintoaIWpgm = BigInt("639")
		const addressV2UtyrW = accounts[4]
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringHLTt5Vc = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		const stringfyjyACl = await WeedburnWsYZc2.name.call({from: accounts[4]});
//		const addressDaThH1 = await WeedburnWsYZc2.burnFrom.call(addressV2UtyrW, uintoaIWpgm, {from: accounts[3]});

		await expect(WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWsYZc2 = await Weedburn.new({from: accounts[2]});
		const uintW7nTlcg = BigInt("0")
		const addressL6Kf8QL = accounts[4]
		const addressTxWEOS = accounts[2]
		const uintRsMuWKo = BigInt("738")
		const addressFhdnYSl = accounts[3]
		const uintwSv43ry = BigInt("639")
		const addressd1vO7X9 = accounts[4]
//		const boolliW47Wk = await WeedburnWsYZc2.transferFrom.call(addressTxWEOS, addressL6Kf8QL, uintW7nTlcg, {from: accounts[0]});
//		await WeedburnWsYZc2.disableLimitMode.call({from: accounts[2]});
//		const stringHLTt5Vc = await WeedburnWsYZc2.symbol.call({from: accounts[4]});
//		const uint256CRUawb4 = await WeedburnWsYZc2.totalSupply.call({from: accounts[3]});
//		const stringfyjyACl = await WeedburnWsYZc2.name.call({from: accounts[4]});
//		const boolQEuWw5r = await WeedburnWsYZc2.decreaseAllowance.call(addressFhdnYSl, uintRsMuWKo, {from: accounts[4]});
//		const addressDaThH1 = await WeedburnWsYZc2.burnFrom.call(addressd1vO7X9, uintwSv43ry, {from: accounts[3]});

		await expect(WeedburnWsYZc2.transferFrom.call(addressTxWEOS, addressL6Kf8QL, uintW7nTlcg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDd5R6DD = await Weedburn.new({from: accounts[1]});
		const uintY2jkiU5 = BigInt("201")
		const addresso4HtHwb = accounts[0]
		const addressH5eO1QU = accounts[4]
//		const boolKitm3UA = await WeedburnDd5R6DD.decreaseAllowance.call(addresso4HtHwb, uintY2jkiU5, {from: accounts[3]});
//		const uint256vZ3EynH = await WeedburnDd5R6DD.balanceOf.call(addressH5eO1QU, {from: accounts[0]});

		await expect(WeedburnDd5R6DD.decreaseAllowance.call(addresso4HtHwb, uintY2jkiU5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTzNMBTv = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr81Mu9b = BigInt("332")
		const addresssb3DBQ2 = accounts[4]
		const uintl92jTPs = BigInt("1022")
		const addressw2RmXyZ = accounts[2]
		await WeedburnTzNMBTv.enableDevMode.call({from: accounts[5]});
		await WeedburnTzNMBTv.enableDevMode.call({from: accounts[0]});
		const boolEZluXP7 = await WeedburnTzNMBTv.transfer.call(addresssb3DBQ2, uintr81Mu9b, {from: accounts[4]});
		const boolzmbumwe = await WeedburnTzNMBTv.transfer.call(addressw2RmXyZ, uintl92jTPs, {from: accounts[3]});
	});
})