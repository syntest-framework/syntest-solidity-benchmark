const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringNHrre7J = "cyb3tvGj4iqLNi7s6z9tmUCZfANYAJKVk6IWWGmkvp8y5pd"
		const stringzYh8476 = "BxvMPtfNgUV8KXKnQ5zZbxzn8uF13t9YVpFCxYYJ7yFqiLCbcqDjwVTxFlNUumk2jHi31zpcwN81BvVAw8UqyMr"
		const uintJq2dXu7 = BigInt("91")
		const BACMARSLPTOKENPoolTemVx6g = await BACMARSLPTOKENPool.new(stringNHrre7J, stringzYh8476, uintJq2dXu7, {from: accounts[3]});
		const uintUKPw2m5 = BigInt("1553")
		const uint256uWPWuDa = await BACMARSLPTOKENPoolTemVx6g.stake.call(uintUKPw2m5, {from: accounts[2]});
		await BACMARSLPTOKENPoolTemVx6g.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtMDeydb = "oskxi1rlLetlHPArMhmKMSizifMnPHVEsfc7tgfeAEjzCQ7TpHYxciokEO"
		const stringKiPpyLT = "vSia1AlnBgIPNwtTQeK1HyqWI2eR3jcj89jdzuIJNFvDKdJPLxoS"
		const uintSf5U6jp = BigInt("196")
		const BACMARSLPTOKENPoolkOs4Av2 = await BACMARSLPTOKENPool.new(stringtMDeydb, stringKiPpyLT, uintSf5U6jp, {from: accounts[3]});
		const addressEPO4f4 = accounts[3]
		const uint8yqEzqlM = await BACMARSLPTOKENPoolkOs4Av2.decimals.call({from: accounts[0]});
		const uint256hkGmqk = await BACMARSLPTOKENPoolkOs4Av2.balanceOf.call(addressEPO4f4, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstEz0Jiu = accounts[1]
		const addressIR94Yul = accounts[1]
		const addressBiXGPk9 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolm7pkJSE = await BACMARSLPTOKENPool.new(addresstEz0Jiu, addressIR94Yul, addressBiXGPk9, {from: accounts[2]});
		const uint9tDWZc = BigInt("114")
		const uintyhSj6Vw = BigInt("352")
		const uint256Ffd0UI6 = await BACMARSLPTOKENPoolm7pkJSE.rewardPerToken.call({from: accounts[1]});
		const uint256t3VkY9P = await BACMARSLPTOKENPoolm7pkJSE.lastTimeRewardApplicable.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolm7pkJSE.exit.call({from: accounts[2]});
//		const uint256eab6pHn = await BACMARSLPTOKENPoolm7pkJSE.stake.call(uint9tDWZc, {from: accounts[0]});
//		const uint256a7LeCGs = await BACMARSLPTOKENPoolm7pkJSE.withdraw.call(uintyhSj6Vw, {from: accounts[0]});

		assert.equal(uint256Ffd0UI6, BigInt("0"))
		assert.equal(uint256t3VkY9P, BigInt("0"))
		await expect(BACMARSLPTOKENPoolm7pkJSE.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtwDkCgo = "ncEW"
		const stringoIzjD70 = "m4LnXO7CnVnpYI5uXdb3z1B1y5em3kIuyR8HPjalBPuwzgX1IuKxf5inkttLStcpwk9IW2JuNKSiUCqVilRE2alYgDV6I2"
		const uintDlrASfk = BigInt("254")
		const BACMARSLPTOKENPoolYlWIBi = await BACMARSLPTOKENPool.new(stringtwDkCgo, stringoIzjD70, uintDlrASfk, {from: accounts[2]});
		const addressuJp2vYc = accounts[3]
		const addressxxPEIwo = accounts[4]
		const addressodEjn9m = accounts[5]
		const uint256ICTRW4N = await BACMARSLPTOKENPoolYlWIBi.earned.call(addressuJp2vYc, {from: accounts[2]});
		const addressOlDG5Kc = await BACMARSLPTOKENPoolYlWIBi.updateReward.call(addressxxPEIwo, {from: accounts[3]});
		const uint256KnwakNa = await BACMARSLPTOKENPoolYlWIBi.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256DrCNvtC = await BACMARSLPTOKENPoolYlWIBi.earned.call(addressodEjn9m, {from: accounts[2]});
		const uint256k5gWBkd = await BACMARSLPTOKENPoolYlWIBi.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolYlWIBi.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressrmDkMNe = accounts[4]
		const addressAQePbjl = accounts[2]
		const addressxsPModV = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressrmDkMNe, addressAQePbjl, addressxsPModV, {from: accounts[1]});
		const addressPud0M5I = accounts[3]
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256MYQmjE = await BACMARSLPTOKENPoolUnQ8jk.balanceOf.call(addressPud0M5I, {from: accounts[3]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		assert.equal(uint256MYQmjE, BigInt("0"))
		assert.equal(uint256VP4LccP, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqq5ZfQx = "JQO8y78"
		const stringyIh68Xr = "5eDhaibXdbj0lbjSVrdCYTYm9W76Jlom2WynS"
		const uintJDeW4nT = BigInt("106")
		const BACMARSLPTOKENPoolGZLtWfi = await BACMARSLPTOKENPool.new(stringqq5ZfQx, stringyIh68Xr, uintJDeW4nT, {from: accounts[3]});
		const uints3B3y2C = BigInt("95")
		const addressdKbjW6x = "0x0000000000000000000000000000000000000001"
		const uintoVXuR9 = BigInt("1475")
		const uint256GgCh7pH = await BACMARSLPTOKENPoolGZLtWfi.withdraw.call(uints3B3y2C, {from: accounts[1]});
		const uint256hu3dh2 = await BACMARSLPTOKENPoolGZLtWfi.earned.call(addressdKbjW6x, {from: accounts[0]});
		const uint256AY8Vrkf = await BACMARSLPTOKENPoolGZLtWfi.withdraw.call(uintoVXuR9, {from: accounts[2]});
		const uint2565tYG0G = await BACMARSLPTOKENPoolGZLtWfi.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTJgLf9R = "6yqJ6hNRyvP6EQ98v5Q"
		const stringnHDeDjf = "RvBdb7glbOVAhvCc"
		const uintyebcnxU = BigInt("185")
		const BACMARSLPTOKENPoolbmeEkKt = await BACMARSLPTOKENPool.new(stringTJgLf9R, stringnHDeDjf, uintyebcnxU, {from: accounts[4]});
		const addressJ0oe9PD = accounts[2]
		const address1s0kJo = accounts[4]
		const addressdbMpUMb = await BACMARSLPTOKENPoolbmeEkKt.updateReward.call(addressJ0oe9PD, {from: accounts[5]});
		const stringqMOvJQB = await BACMARSLPTOKENPoolbmeEkKt.symbol.call({from: accounts[2]});
		const addressqsEBlKg = await BACMARSLPTOKENPoolbmeEkKt.updateReward.call(address1s0kJo, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQUAYwVj = "Ip5YgWk3s82q72TpzjKmlvueKVRKmEwj7XI"
		const stringXWk2mhP = "Vu0HYGdqL5h"
		const uintECeRfWz = BigInt("234")
		const BACMARSLPTOKENPoolIpEUF0 = await BACMARSLPTOKENPool.new(stringQUAYwVj, stringXWk2mhP, uintECeRfWz, {from: accounts[1]});
		const bytei7KT4Vc = "0x040f1b1d19000a1208060b101f030c17171302171101180817020f160b120019"
		const byteckwlRMz = "0x100b121f0f04120a07190c1b01200d1b160f20071e0c161d1c1f101914190b17"
		const uintN7KPYWM = BigInt("141")
		const uintGWHYyK3 = BigInt("1133")
		const uintbSLXKw6 = BigInt("868")
		const uintqUdcmIo = BigInt("1018")
		const uint2564uV8C6 = await BACMARSLPTOKENPoolIpEUF0.stakeWithPermit.call(uintbSLXKw6, uintGWHYyK3, uintN7KPYWM, byteckwlRMz, bytei7KT4Vc, {from: accounts[0]});
		const uint256y9JEIyX = await BACMARSLPTOKENPoolIpEUF0.notifyRewardAmount.call(uintqUdcmIo, {from: accounts[3]});
		await BACMARSLPTOKENPoolIpEUF0.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeFOliZ0 = "nX8e7T6UPy22EVOHUNCBORrqqI7oOs9QiUWAMkFhUj7NljdlZIfXf1yCkuO7uk9LXTBEVXvBFrTJ3t3f78FYO"
		const stringqjgsTTE = "QjhATzHAo0sjU0oKPyxblhLTkdxnbwBkeOHzdiKIU7yq9MUTDxTPYYNBSSZrxxqnzRYYf6Q9mymo5os5lnnuHskr3"
		const uintIcBXPU = BigInt("48")
		const BACMARSLPTOKENPoolFQsZ8g2 = await BACMARSLPTOKENPool.new(stringeFOliZ0, stringqjgsTTE, uintIcBXPU, {from: accounts[4]});
		const addressi7OOGP8 = accounts[1]
		const uintb9edrW = BigInt("1399")
		const uint256bWs7bvV = await BACMARSLPTOKENPoolFQsZ8g2.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolFQsZ8g2.nonReentrant.call({from: accounts[2]});
		const uint256o0BbSu = await BACMARSLPTOKENPoolFQsZ8g2.balanceOf.call(addressi7OOGP8, {from: accounts[0]});
		const uint256P9fRC6 = await BACMARSLPTOKENPoolFQsZ8g2.notifyRewardAmount.call(uintb9edrW, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresso6qLFWp = accounts[0]
		const addressi5gLKDv = accounts[1]
		const addressTwAFq7R = accounts[2]
		const BACMARSLPTOKENPoolZoHwHV6 = await BACMARSLPTOKENPool.new(addresso6qLFWp, addressi5gLKDv, addressTwAFq7R, {from: accounts[3]});
		const addressiammtbh = accounts[4]
		const addressgzw871Z = accounts[4]
		const addresskrxLgaU = accounts[1]
//		const stringgqrdNOG = await BACMARSLPTOKENPoolZoHwHV6.symbol.call({from: accounts[2]});
//		const uint256FVN6wht = await BACMARSLPTOKENPoolZoHwHV6.balanceOf.call(addressiammtbh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256bOKmTKa = await BACMARSLPTOKENPoolZoHwHV6.earned.call(addressgzw871Z, {from: accounts[3]});
//		const uint256DpjKQg8 = await BACMARSLPTOKENPoolZoHwHV6.earned.call(addresskrxLgaU, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolZoHwHV6.symbol.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszawYyg = accounts[4]
		const addressmMieKuw = accounts[2]
		const addressTWBuN60 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addresszawYyg, addressmMieKuw, addressTWBuN60, {from: accounts[1]});
		const uintpX4kUIA = BigInt("1221")
//		const uint256NsocvO7 = await BACMARSLPTOKENPoolUnQ8jk.notifyRewardAmount.call(uintpX4kUIA, {from: accounts[4]});
//		const stringwSa9TVa = await BACMARSLPTOKENPoolUnQ8jk.name.call({from: accounts[2]});
//		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolUnQ8jk.notifyRewardAmount.call(uintpX4kUIA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressymQYp52 = accounts[1]
		const addressRYb3JSv = accounts[1]
		const addressgSRXIp3 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolm7pkJSE = await BACMARSLPTOKENPool.new(addressymQYp52, addressRYb3JSv, addressgSRXIp3, {from: accounts[2]});
		const uintLTEiRvr = BigInt("114")
		const uintHGhzgwt = BigInt("352")
		const uint256Ffd0UI6 = await BACMARSLPTOKENPoolm7pkJSE.rewardPerToken.call({from: accounts[1]});
		const uint256t3VkY9P = await BACMARSLPTOKENPoolm7pkJSE.lastTimeRewardApplicable.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolm7pkJSE.exit.call({from: accounts[2]});
//		const uint256eab6pHn = await BACMARSLPTOKENPoolm7pkJSE.stake.call(uintLTEiRvr, {from: accounts[0]});
//		const uint256a7LeCGs = await BACMARSLPTOKENPoolm7pkJSE.withdraw.call(uintHGhzgwt, {from: accounts[0]});

		assert.equal(uint256Ffd0UI6, BigInt("0"))
		assert.equal(uint256t3VkY9P, BigInt("0"))
		await expect(BACMARSLPTOKENPoolm7pkJSE.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKLFKBbo = accounts[0]
		const addressLQllbpZ = accounts[3]
		const addressFq6zBzi = accounts[1]
		const BACMARSLPTOKENPoolRSMhjh4 = await BACMARSLPTOKENPool.new(addressKLFKBbo, addressLQllbpZ, addressFq6zBzi, {from: accounts[1]});
		const uintJmBhAg7 = BigInt("1293")
		const uint256NqLIrtj = await BACMARSLPTOKENPoolRSMhjh4.rewardPerToken.call({from: accounts[1]});
//		const uint256kIRy6zC = await BACMARSLPTOKENPoolRSMhjh4.withdraw.call(uintJmBhAg7, {from: accounts[2]});
//		await BACMARSLPTOKENPoolRSMhjh4.onlyRewardsDistribution.call({from: accounts[3]});
//		const uint256gNW9RV = await BACMARSLPTOKENPoolRSMhjh4.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256NqLIrtj, BigInt("0"))
		await expect(BACMARSLPTOKENPoolRSMhjh4.withdraw.call(uintJmBhAg7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgKyrcl = accounts[4]
		const addressAKCdq3q = accounts[2]
		const addresscETHC5d = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressgKyrcl, addressAKCdq3q, addresscETHC5d, {from: accounts[1]});
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256zb6Qjbb = await BACMARSLPTOKENPoolUnQ8jk.getRewardForDuration.call({from: accounts[1]});
//		const stringVr4CHTr = await BACMARSLPTOKENPoolUnQ8jk.symbol.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		assert.equal(uint256VP4LccP, BigInt("0"))
		assert.equal(uint256zb6Qjbb, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.symbol.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcE50Rrp = "ZqQM1s44Bkdmx3E51mgeJyLG"
		const stringnPFnMCt = "RgGp7FXN6mhfxp9txKRfgvK0Td"
		const uintJibHwfk = BigInt("48")
		const BACMARSLPTOKENPoolIC99LqI = await BACMARSLPTOKENPool.new(stringcE50Rrp, stringnPFnMCt, uintJibHwfk, {from: accounts[4]});
		const byteNEZcF0P = "0x181f081f0d021100161a161c0e111d0f0615140c0a050d0c10100c0a120c0a14"
		const bytezc3zKL5 = "0x040004101806140c1910110d05100f06120508171a1e120f0b121b150e0c140e"
		const uintMRWrpI = BigInt("138")
		const uintTnMuGx9 = BigInt("289")
		const uintUyisfOS = BigInt("294")
		const byteHDXbBV = "0x1c010b11181316080915051b1d0d10120719151e0f0112140a0e010f0215140b"
		const bytev916WeB = "0x0c1306081c0a08090c04110c07021e1a1a0d051102121e1516171e1f09120f08"
		const uintEv3hqFn = BigInt("217")
		const uintDJH9GT = BigInt("595")
		const uinttr98nZ6 = BigInt("413")
		const addressl5fdd1n = accounts[2]
		const uint256iagMplY = await BACMARSLPTOKENPoolIC99LqI.totalSupply.call({from: accounts[0]});
		const uint256Waj5csG = await BACMARSLPTOKENPoolIC99LqI.stakeWithPermit.call(uintUyisfOS, uintTnMuGx9, uintMRWrpI, bytezc3zKL5, byteNEZcF0P, {from: accounts[3]});
		await BACMARSLPTOKENPoolIC99LqI.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256LE0nBqb = await BACMARSLPTOKENPoolIC99LqI.stakeWithPermit.call(uinttr98nZ6, uintDJH9GT, uintEv3hqFn, bytev916WeB, byteHDXbBV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dcPxAG1 = await BACMARSLPTOKENPoolIC99LqI.earned.call(addressl5fdd1n, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXgMOkb = accounts[4]
		const addressszXXdkj = accounts[2]
		const addressUZEQve4 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressXgMOkb, addressszXXdkj, addressUZEQve4, {from: accounts[1]});
		const uintyt3lU2X = BigInt("559")
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});
//		const uint256WZAqp1G = await BACMARSLPTOKENPoolUnQ8jk.stake.call(uintyt3lU2X, {from: accounts[2]});

		assert.equal(uint256VP4LccP, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqNE42fb = "p4Ti5ANxG3VPKz09CXyulvPazo42HCZOpJHo4pDYY6ljW4M"
		const stringxJiMN9 = "HOGOOXYUlwEqJ96h8BaPsHtbn8Fd8JtBZPRWFllBdUXX2obItBiLSfKqquifiwtN2"
		const uintZBf1S9r = BigInt("3")
		const BACMARSLPTOKENPoolXL1ZPUS = await BACMARSLPTOKENPool.new(stringqNE42fb, stringxJiMN9, uintZBf1S9r, {from: accounts[5]});
		const addresssWjNx5O = accounts[4]
		const uintbt6BI4 = BigInt("66")
		await BACMARSLPTOKENPoolXL1ZPUS.nonReentrant.call({from: accounts[0]});
		const uint256iR7Uwre = await BACMARSLPTOKENPoolXL1ZPUS.earned.call(addresssWjNx5O, {from: accounts[4]});
		const uint256hMNaXcn = await BACMARSLPTOKENPoolXL1ZPUS.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eBpnKQ6 = await BACMARSLPTOKENPoolXL1ZPUS.stake.call(uintbt6BI4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswKVuKQb = accounts[4]
		const address6pxswM = accounts[2]
		const addressAUo15Nt = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addresswKVuKQb, address6pxswM, addressAUo15Nt, {from: accounts[1]});
		const byteumVz1WN = "0x120f1d08000b1517140003130219180e0804190f180d090a17021d140915110e"
		const byteaIKoMy = "0x0c151218141503120e03101e1d04080513061517141717011b001101050d0109"
		const uintHJazl2a = BigInt("59")
		const uintQFhHiHT = BigInt("398")
		const uintIScnBgm = BigInt("393")
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256l8zA6nP = await BACMARSLPTOKENPoolUnQ8jk.stakeWithPermit.call(uintIScnBgm, uintQFhHiHT, uintHJazl2a, byteaIKoMy, byteumVz1WN, {from: accounts[5]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		assert.equal(uint256VP4LccP, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.stakeWithPermit.call(uintIScnBgm, uintQFhHiHT, uintHJazl2a, byteaIKoMy, byteumVz1WN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressglUlTC = accounts[4]
		const addressL48WRM = accounts[2]
		const addressYcfXbOw = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressglUlTC, addressL48WRM, addressYcfXbOw, {from: accounts[1]});
		const uint256sAer0KE = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		assert.equal(uint256VP4LccP, BigInt("0"))
		assert.equal(uint256sAer0KE, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPujd5hE = accounts[4]
		const addressvpElryN = accounts[2]
		const addresss13J7Y = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressPujd5hE, addressvpElryN, addresss13J7Y, {from: accounts[1]});
		const uint256VP4LccP = await BACMARSLPTOKENPoolUnQ8jk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256y67samQ = await BACMARSLPTOKENPoolUnQ8jk.totalSupply.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolUnQ8jk.nonReentrant.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		assert.equal(uint256VP4LccP, BigInt("0"))
		assert.equal(uint256y67samQ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolUnQ8jk.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGEow6oq = "q65DTDcEmyTBRbkDb7zWJzfuWrYyRPKnjbVGGuUzz7tkqMYpfw7AGzu1X6FVr4"
		const stringp1sNLV7 = "UXaM1wefbAy5t8hvMQESNOev6zQo"
		const uint9OeYzk = BigInt("2")
		const BACMARSLPTOKENPoolebapTWa = await BACMARSLPTOKENPool.new(stringGEow6oq, stringp1sNLV7, uint9OeYzk, {from: accounts[5]});
		const uint256JjACf2M = await BACMARSLPTOKENPoolebapTWa.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolebapTWa.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolebapTWa.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGDPE9fm = accounts[4]
		const addressDLXbtGy = accounts[2]
		const addressTNZusCu = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addressGDPE9fm, addressDLXbtGy, addressTNZusCu, {from: accounts[1]});
		const bytevqlBD5s = "0x0e100320190e0a14031c1a15120a0117141b18001114121a1e1311031f15030e"
		const byteahADysB = "0x171900171c190c090e1801080b0111171c14190b16030a1c01111e03130d1a06"
		const uintU4rhBQO = BigInt("19")
		const uintjKDCmNM = BigInt("1232")
		const uintJfpNoOr = BigInt("1416")
//		const uint256kQUHXJd = await BACMARSLPTOKENPoolUnQ8jk.stakeWithPermit.call(uintJfpNoOr, uintjKDCmNM, uintU4rhBQO, byteahADysB, bytevqlBD5s, {from: accounts[4]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolUnQ8jk.stakeWithPermit.call(uintJfpNoOr, uintjKDCmNM, uintU4rhBQO, byteahADysB, bytevqlBD5s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFtRBFtu = "EEXpTp1lwIwOAldHlCfp4TAmTVkDKOomTmVWc1xLICmCz"
		const stringZuCw8kK = "3GWH6DBMmMtXs6ODckO6RlQ91zz8msFLOl6F48wUJlEcGr3fJ3tNamULwPWPSo6xMdpZegOkhrE8oyf1bLNOEg7sLQlNjTQ2N"
		const uinto9DX2aX = BigInt("227")
		const BACMARSLPTOKENPoolLEzans = await BACMARSLPTOKENPool.new(stringFtRBFtu, stringZuCw8kK, uinto9DX2aX, {from: "0x0000000000000000000000000000000000000001"});
		const addressLhfdaA4 = accounts[4]
		await BACMARSLPTOKENPoolLEzans.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256PmCk8wI = await BACMARSLPTOKENPoolLEzans.earned.call(addressLhfdaA4, {from: accounts[1]});
		const uint8LqkWuik = await BACMARSLPTOKENPoolLEzans.decimals.call({from: accounts[1]});
		const uint2562dh8f5 = await BACMARSLPTOKENPoolLEzans.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvmCRPiK = "IKupxyU9n"
		const stringwcJyghK = "WaR1JE2IV3k9tYfiedaUnIUSYPHBpCocp96LfebeblwtTEK3T1JbDa"
		const uintNiTumma = BigInt("173")
		const BACMARSLPTOKENPoollON8Lyk = await BACMARSLPTOKENPool.new(stringvmCRPiK, stringwcJyghK, uintNiTumma, {from: accounts[1]});
		const uintsmxYSrm = BigInt("379")
		const uint256pMJOvET = await BACMARSLPTOKENPoollON8Lyk.stake.call(uintsmxYSrm, {from: accounts[0]});
		const stringGZVF14X = await BACMARSLPTOKENPoollON8Lyk.name.call({from: accounts[1]});
		const uint256LAsJaHK = await BACMARSLPTOKENPoollON8Lyk.totalSupply.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringODuNNEr = "uhhU33JHQTONE0sOj9K080UPu4t4BmKo5pSjvIn1JL21rlAJ3XXsM7f7Lw5LJf9X7u1pv33dqMeSOASnRL51CCOzzXueIPvNDU"
		const stringdAEo1Jd = "pN9WTJFHd4cF4TA0pbXFEbBSFQvwaoaaMNbELbKcf2Ok4gRGVk5qfkfhtrQ6YCVH6LW"
		const uintQb1tpnE = BigInt("178")
		const BACMARSLPTOKENPoollulvMUw = await BACMARSLPTOKENPool.new(stringODuNNEr, stringdAEo1Jd, uintQb1tpnE, {from: accounts[2]});
		const uintxlFalP5 = BigInt("442")
		await BACMARSLPTOKENPoollulvMUw.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256051Ea9 = await BACMARSLPTOKENPoollulvMUw.notifyRewardAmount.call(uintxlFalP5, {from: accounts[3]});
		const uint256SRWKBL9 = await BACMARSLPTOKENPoollulvMUw.rewardPerToken.call({from: accounts[1]});
		const uint8qHAQ71A = await BACMARSLPTOKENPoollulvMUw.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoollulvMUw.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstEiDYkb = accounts[4]
		const addressFpHirlJ = accounts[2]
		const addressSGLtWus = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolUnQ8jk = await BACMARSLPTOKENPool.new(addresstEiDYkb, addressFpHirlJ, addressSGLtWus, {from: accounts[1]});
		const uintxjQBAWy = BigInt("16")
		const byteuzBjOxA = "0x1202160a1b0f12021215190001071808181a1f1d1e1d1f19030106180e18130e"
		const byteoC1IXui = "0x190f20150b14161a1d0b04020d0619171e0e020206191c030a04140f0718031f"
		const uintjUSOWmP = BigInt("38")
		const uintGQl4oCG = BigInt("571")
		const uintbFY1ahO = BigInt("1548")
//		const uint256PDHZM5K = await BACMARSLPTOKENPoolUnQ8jk.notifyRewardAmount.call(uintxjQBAWy, {from: accounts[2]});
//		const uint256TmRJu5T = await BACMARSLPTOKENPoolUnQ8jk.stakeWithPermit.call(uintbFY1ahO, uintGQl4oCG, uintjUSOWmP, byteoC1IXui, byteuzBjOxA, {from: accounts[3]});
//		await BACMARSLPTOKENPoolUnQ8jk.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolUnQ8jk.notifyRewardAmount.call(uintxjQBAWy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdSohiHy = accounts[4]
		const address03U6UA = accounts[3]
		const address8IMBTv = accounts[0]
		const BACMARSLPTOKENPoolLX3ndZk = await BACMARSLPTOKENPool.new(addressdSohiHy, address03U6UA, address8IMBTv, {from: "0x0000000000000000000000000000000000000001"});
		const uintSrNKrQ = BigInt("671")
		const uintqE4gjvk = BigInt("1704")
		const uint8BKVaB5f = await BACMARSLPTOKENPoolLX3ndZk.decimals.call({from: accounts[4]});
		const uint256kz2jyJ1 = await BACMARSLPTOKENPoolLX3ndZk.stake.call(uintSrNKrQ, {from: accounts[5]});
		const uint256bkZk2Jb = await BACMARSLPTOKENPoolLX3ndZk.notifyRewardAmount.call(uintqE4gjvk, {from: accounts[4]});
		await BACMARSLPTOKENPoolLX3ndZk.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRQ4Ft9Z = "knu5CUHYadbk7sETn24JjYmWifr56U2iGDAhtkQdyAuxbkpM6iUrH7XRS4WXfgiTBYAawdzYs96NWq85gqgP"
		const stringWYx8XZX = "Mxq8V11nnprNIBTOgeFV9kmMshKmbAEWp1hiGY8zOIPsHF44zbtzY"
		const uintzH1vxe6 = BigInt("172")
		const BACMARSLPTOKENPoolyYMv9Dp = await BACMARSLPTOKENPool.new(stringRQ4Ft9Z, stringWYx8XZX, uintzH1vxe6, {from: accounts[0]});
		await BACMARSLPTOKENPoolyYMv9Dp.getReward.call({from: accounts[0]});
		const uint8I1cKgee = await BACMARSLPTOKENPoolyYMv9Dp.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCugFeJs = "z7QSkGC9wH1CaNcM"
		const stringt8Q4WTa = "75"
		const uintK7lGlTv = BigInt("74")
		const BACMARSLPTOKENPoolXlAR6HP = await BACMARSLPTOKENPool.new(stringCugFeJs, stringt8Q4WTa, uintK7lGlTv, {from: accounts[3]});
		const addressNdNnnJl = accounts[5]
		const addressDscc026 = accounts[2]
		const addressevbyvU = accounts[3]
		const uintPkqhona = BigInt("543")
		const uint256NTavKFs = await BACMARSLPTOKENPoolXlAR6HP.balanceOf.call(addressNdNnnJl, {from: accounts[3]});
		const uint256JhVFCxL = await BACMARSLPTOKENPoolXlAR6HP.earned.call(addressDscc026, {from: accounts[5]});
		const uint256Cf6pkAk = await BACMARSLPTOKENPoolXlAR6HP.earned.call(addressevbyvU, {from: accounts[2]});
		await BACMARSLPTOKENPoolXlAR6HP.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256bew5Gf = await BACMARSLPTOKENPoolXlAR6HP.stake.call(uintPkqhona, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkMMIhl = "kChF6"
		const stringkgL4V3 = "R3FF4jsmIhoM6RNraG2u8c2NBUznbMnaU8"
		const uintzZy1bX = BigInt("138")
		const BACMARSLPTOKENPoolrW6tMru = await BACMARSLPTOKENPool.new(stringkMMIhl, stringkgL4V3, uintzZy1bX, {from: accounts[4]});
		const uintqCxnmXc = BigInt("1289")
		const uint256IiTRM3G = await BACMARSLPTOKENPoolrW6tMru.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F2QU3mf = await BACMARSLPTOKENPoolrW6tMru.rewardPerToken.call({from: accounts[1]});
		const uint256lQIhnpW = await BACMARSLPTOKENPoolrW6tMru.withdraw.call(uintqCxnmXc, {from: accounts[5]});
		await BACMARSLPTOKENPoolrW6tMru.nonReentrant.call({from: accounts[5]});
		const uint256WsyIVeW = await BACMARSLPTOKENPoolrW6tMru.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJYwlVgj = "Pm"
		const string6G6rrM = "ck5ITQ7gOWVnd75R"
		const uinteSDfA7m = BigInt("127")
		const BACMARSLPTOKENPoolnsgNuFa = await BACMARSLPTOKENPool.new(stringJYwlVgj, string6G6rrM, uinteSDfA7m, {from: accounts[5]});
		const addressuGQjeP5 = accounts[1]
		const byteEardXbT = "0x1404140d0f181c1b01051d1d141b15061b0e16031f181a021f1f050d1e180d0a"
		const bytepRzQAYK = "0x200f1016110e1e03031106111a1e1f0f1412180c1118031a1c16061d15031218"
		const uintSnOWdC = BigInt("242")
		const uintVCzKEhK = BigInt("675")
		const uintZwVgMvO = BigInt("736")
		const uintAouFKW = BigInt("247")
		const uintDiDW41I = BigInt("19")
		const addressBJsOC0n = await BACMARSLPTOKENPoolnsgNuFa.updateReward.call(addressuGQjeP5, {from: accounts[0]});
		const uint256Fm8udYL = await BACMARSLPTOKENPoolnsgNuFa.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256BhKHvsn = await BACMARSLPTOKENPoolnsgNuFa.stakeWithPermit.call(uintZwVgMvO, uintVCzKEhK, uintSnOWdC, bytepRzQAYK, byteEardXbT, {from: accounts[2]});
		const uint256AFaNUW = await BACMARSLPTOKENPoolnsgNuFa.withdraw.call(uintAouFKW, {from: accounts[4]});
		const uint256V5qm2UM = await BACMARSLPTOKENPoolnsgNuFa.notifyRewardAmount.call(uintDiDW41I, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIrTTqh = "4goTF42uGdtFR78nImjbxGNIjEBNO3yAmbewVnQ1BC7OUEuO8vvNv5XanTiYvNth1bTGIAGodFPFzkPsIRXcyiD3"
		const stringPsVSFUN = "xTmFuhtH8vZHTDqkQmP3Q08OuXGNlaYDDJnMOqOxPYI2OjRWXrC0NspTzrOdghtLsfpxmEHWe6C"
		const uintH3R4GDu = BigInt("30")
		const BACMARSLPTOKENPoolqTUoq0a = await BACMARSLPTOKENPool.new(stringIrTTqh, stringPsVSFUN, uintH3R4GDu, {from: accounts[3]});
		const uintGsodwx0 = BigInt("845")
		const uint256zuAr1wI = await BACMARSLPTOKENPoolqTUoq0a.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolqTUoq0a.exit.call({from: accounts[1]});
		const uint256sgEJaJ = await BACMARSLPTOKENPoolqTUoq0a.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vm7P5n3 = await BACMARSLPTOKENPoolqTUoq0a.stake.call(uintGsodwx0, {from: accounts[4]});
		const uint256KqAsg46 = await BACMARSLPTOKENPoolqTUoq0a.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhNWZMhJ = "sDXOcVbbCRaKFGFt8PTycQGowB4LhIizNByx973bLwzPB6KmaJTXQ3G0Tr3oPqj7LuEEk928r"
		const stringao7mxqf = "AI5Bcg15qRps4LzJgNjVz6dlekCtPEkuz"
		const uintHbNQXIZ = BigInt("38")
		const BACMARSLPTOKENPoolvPOapO = await BACMARSLPTOKENPool.new(stringhNWZMhJ, stringao7mxqf, uintHbNQXIZ, {from: accounts[5]});
		const uintvgoSqg7 = BigInt("1645")
		const stringypDtgNK = await BACMARSLPTOKENPoolvPOapO.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringlg1Jkbi = await BACMARSLPTOKENPoolvPOapO.symbol.call({from: accounts[4]});
		const uint256uSECgBJ = await BACMARSLPTOKENPoolvPOapO.stake.call(uintvgoSqg7, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnHCAVr7 = "ONFSzhex5TitiTB1I9UlDcTFvBHK7YbHMm4WI18kUSsPAqHJ9sfQRnyP"
		const stringLyRJXYA = "PmH2DqIAZ2wvQ"
		const uintVa8wRQV = BigInt("63")
		const BACMARSLPTOKENPoolK0BX0j3 = await BACMARSLPTOKENPool.new(stringnHCAVr7, stringLyRJXYA, uintVa8wRQV, {from: accounts[2]});
		const uintbTaXqYW = BigInt("1888")
		const uintYFRIomB = BigInt("862")
		const bytes07ux6z = "0x20161e011d0e191c0c1d0d0e180d16050d11190402030a141603071f1d080015"
		const byteMZV4lKD = "0x1806141e07180f0b18050f041d1b14130d0c1a14041d100c151d07171d131708"
		const uintPqQOvtF = BigInt("27")
		const uintgHgY7Zm = BigInt("1895")
		const uintnHwZ7NB = BigInt("1268")
		const uintavgzHJV = BigInt("919")
		const uint256ODzAvss = await BACMARSLPTOKENPoolK0BX0j3.stake.call(uintbTaXqYW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iJP0rT = await BACMARSLPTOKENPoolK0BX0j3.withdraw.call(uintYFRIomB, {from: accounts[4]});
		const uint256Ls6IKPh = await BACMARSLPTOKENPoolK0BX0j3.stakeWithPermit.call(uintnHwZ7NB, uintgHgY7Zm, uintPqQOvtF, byteMZV4lKD, bytes07ux6z, {from: accounts[0]});
		const uint256aRj7fj = await BACMARSLPTOKENPoolK0BX0j3.withdraw.call(uintavgzHJV, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNoOVM6b = "F4mRIGayWThn6THmhlnnBbrXt0JQwplBE0Mhmp6"
		const stringriNFDS2 = "NoLRukJu38q4IUhdshvoXwRNrPppinT8Ybt8ye93XAcv"
		const uintcsQUoxX = BigInt("55")
		const BACMARSLPTOKENPool6Qq5xG = await BACMARSLPTOKENPool.new(stringNoOVM6b, stringriNFDS2, uintcsQUoxX, {from: accounts[1]});
		const addresstm3TRdc = accounts[0]
		const byte0HAuyC = "0x0e180f1a0b011d121c1c1b08140d1d1a0d02060c081a1805051a11191c191814"
		const byteMaOCvRx = "0x090c080a0e190c020c1b0d030b041c0a172016021a200f0b0f110e180e160416"
		const uintT0qhBcL = BigInt("214")
		const uintgWceRhm = BigInt("1151")
		const uinttBnwYLp = BigInt("1489")
		await BACMARSLPTOKENPool6Qq5xG.exit.call({from: accounts[2]});
		const addressU4ms1F = await BACMARSLPTOKENPool6Qq5xG.updateReward.call(addresstm3TRdc, {from: accounts[1]});
		await BACMARSLPTOKENPool6Qq5xG.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPool6Qq5xG.getReward.call({from: accounts[1]});
		const uint256l1QloJr = await BACMARSLPTOKENPool6Qq5xG.stakeWithPermit.call(uinttBnwYLp, uintgWceRhm, uintT0qhBcL, byteMaOCvRx, byte0HAuyC, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbAEg6dA = "QHyqCoFeVGpfHwBwucAsOwZQebafM9hDv7haaod3sFBF6oCglruYW0"
		const stringZGXAsp0 = "YGwituk"
		const uintkQ0QP0o = BigInt("93")
		const BACMARSLPTOKENPoolUKXYdD = await BACMARSLPTOKENPool.new(stringbAEg6dA, stringZGXAsp0, uintkQ0QP0o, {from: accounts[4]});
		const uintU8wWrb8 = BigInt("1493")
		const uintMu4TSvZ = BigInt("1557")
		const stringLQGwk2I = await BACMARSLPTOKENPoolUKXYdD.symbol.call({from: accounts[0]});
		const uint8l4SkEUV = await BACMARSLPTOKENPoolUKXYdD.decimals.call({from: accounts[1]});
		const uint256X2UjAw3 = await BACMARSLPTOKENPoolUKXYdD.getRewardForDuration.call({from: accounts[1]});
		const uint256dkQluXy = await BACMARSLPTOKENPoolUKXYdD.stake.call(uintU8wWrb8, {from: accounts[0]});
		await BACMARSLPTOKENPoolUKXYdD.getReward.call({from: accounts[1]});
		const uint256uUAKfTF = await BACMARSLPTOKENPoolUKXYdD.withdraw.call(uintMu4TSvZ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKsPKpnz = "HFyYVXc2KsMCuxi8znEyhqGhWLIoccrwwi5eRZQrOOn1caP"
		const stringoVPCbJ4 = "K6bUATtHIY6JvnpVmkl9QGPtUPPeAgiDSMtbOCaIXv1e0SN1xaNk6Jrz1J4L8ezniVGT9X17"
		const uintrqhSaEJ = BigInt("99")
		const BACMARSLPTOKENPoolRrHnGN6 = await BACMARSLPTOKENPool.new(stringKsPKpnz, stringoVPCbJ4, uintrqhSaEJ, {from: accounts[5]});
		const uintxZcNUFR = BigInt("1570")
		const uint256GC3xRlD = await BACMARSLPTOKENPoolRrHnGN6.getRewardForDuration.call({from: accounts[2]});
		const uint256QTzsoT7 = await BACMARSLPTOKENPoolRrHnGN6.notifyRewardAmount.call(uintxZcNUFR, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringELzHJlT = "cRGPe4EIg9JWPgBt1dZnTlfR9cthSmpSq3jUp"
		const stringScF2XkV = "BYIM8QLLks2YG7lNVOaDr"
		const uinthXanF67 = BigInt("219")
		const BACMARSLPTOKENPoolrBu1Aid = await BACMARSLPTOKENPool.new(stringELzHJlT, stringScF2XkV, uinthXanF67, {from: accounts[2]});
		const addressXwgln89 = accounts[0]
		const stringjCULSy4 = await BACMARSLPTOKENPoolrBu1Aid.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolrBu1Aid.exit.call({from: accounts[1]});
		const uint256vsVYAO = await BACMARSLPTOKENPoolrBu1Aid.balanceOf.call(addressXwgln89, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuedjDV9 = "8iknWlmriuU"
		const stringayfTia = "00gBay4RyMnSR5qW1vP0cUdbNKN4Yk8gshrbN0pe52mFVjbTsib2MnnPGsLx5fGF9kG8yTVeDWpCJC6krJjalkt5urJ"
		const uintb6VUImE = BigInt("136")
		const BACMARSLPTOKENPoolmQ8R0MH = await BACMARSLPTOKENPool.new(stringuedjDV9, stringayfTia, uintb6VUImE, {from: "0x0000000000000000000000000000000000000001"});
		const uintevB4TY = BigInt("727")
		const uintDzGyE5y = BigInt("899")
		const uintcknCkFI = BigInt("1353")
		const uint8qIGSd5m = await BACMARSLPTOKENPoolmQ8R0MH.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolmQ8R0MH.exit.call({from: accounts[3]});
		const uint256yv6iclc = await BACMARSLPTOKENPoolmQ8R0MH.notifyRewardAmount.call(uintevB4TY, {from: accounts[4]});
		const uint256rHnIIt1 = await BACMARSLPTOKENPoolmQ8R0MH.stake.call(uintDzGyE5y, {from: accounts[3]});
		const uint256A2LABBp = await BACMARSLPTOKENPoolmQ8R0MH.notifyRewardAmount.call(uintcknCkFI, {from: accounts[2]});
		const uint256ZbZcTj = await BACMARSLPTOKENPoolmQ8R0MH.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsABmkJR = "BVvPRMxWzVwPIKepapopbetDylk0XmLrvqv6qmu"
		const stringAX9JHOB = "biDjhTYShyo5bbuiIYr2C27KD0ZUrr2hBhPMtY2uMFIsSQrzO1hIk6Mizezuqlr8mfMNzjqM3tWw"
		const uintmTxhM0y = BigInt("119")
		const BACMARSLPTOKENPoolTdELYpb = await BACMARSLPTOKENPool.new(stringsABmkJR, stringAX9JHOB, uintmTxhM0y, {from: accounts[3]});
		const addressoaoqxoj = accounts[0]
		await BACMARSLPTOKENPoolTdELYpb.exit.call({from: accounts[0]});
		const uint256BMRZVvh = await BACMARSLPTOKENPoolTdELYpb.earned.call(addressoaoqxoj, {from: accounts[2]});
		await BACMARSLPTOKENPoolTdELYpb.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEepH4yl = "SzdBzFkSg56FVyBkXV3zDHbbyGE3O5M2"
		const stringZscnHRQ = "uHqses8l3T4GXBFSASkSKC8T4pNGsCRgA8uGB4nczB0fW3aXGxnO4Ei27WijvzYo0ACs5"
		const uintv8ulVNc = BigInt("219")
		const BACMARSLPTOKENPoolAxt63Fz = await BACMARSLPTOKENPool.new(stringEepH4yl, stringZscnHRQ, uintv8ulVNc, {from: accounts[2]});
		const addressf80F0ii = accounts[3]
		const uint256T5XWcdW = await BACMARSLPTOKENPoolAxt63Fz.earned.call(addressf80F0ii, {from: accounts[0]});
		const stringwqEAHxv = await BACMARSLPTOKENPoolAxt63Fz.symbol.call({from: accounts[5]});
		const stringye2AM2l = await BACMARSLPTOKENPoolAxt63Fz.symbol.call({from: accounts[3]});
		const uint8TYLAty7 = await BACMARSLPTOKENPoolAxt63Fz.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcSlqZ77 = "e4DIsansUSpYkOeMFeYIk5N2wl4nYytn3vwhlCY0IfYsB7l3uoJjxKkZ6tR"
		const stringA6LInJK = "mfFfC9zPwOMFZnDphXfNHAaSCqiBifTgX5hSdXSoEHmd9d4CPVvzD4"
		const uintf8wGQdK = BigInt("250")
		const BACMARSLPTOKENPoolwv985M7 = await BACMARSLPTOKENPool.new(stringcSlqZ77, stringA6LInJK, uintf8wGQdK, {from: accounts[2]});
		const addressUQ3fnGB = accounts[3]
		const byteSYqrjSp = "0x0f0d1c041a160505190809030d111f00161a1a151c1b070d121a0e1c0e151410"
		const byteKgbEBiB = "0x0302040f10121d16191c1c0e040e140d131d18170817050e1c1c131e0a1d1e02"
		const uintXOLavuM = BigInt("96")
		const uintKe5s8Qy = BigInt("1235")
		const uintAtzKq52 = BigInt("1891")
		const uintbs4E6wz = BigInt("1291")
		const uintnHfy0v6 = BigInt("2039")
		const uint256sp1m2IZ = await BACMARSLPTOKENPoolwv985M7.balanceOf.call(addressUQ3fnGB, {from: accounts[2]});
		const uint256tPFPqZl = await BACMARSLPTOKENPoolwv985M7.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256oHHIcmk = await BACMARSLPTOKENPoolwv985M7.stakeWithPermit.call(uintAtzKq52, uintKe5s8Qy, uintXOLavuM, byteKgbEBiB, byteSYqrjSp, {from: accounts[1]});
		const uint256pdpAbUo = await BACMARSLPTOKENPoolwv985M7.withdraw.call(uintbs4E6wz, {from: accounts[0]});
		const uint256L2XGheS = await BACMARSLPTOKENPoolwv985M7.withdraw.call(uintnHfy0v6, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringf7dFXcy = "NKLxDxj3JuS7ezyu9xcbBx48rrAMDJEAY6PG6JD0JHkKk5gmIeVXOcm2qyhYVscijspgRjgw56NxDfeJf39RXPUsOGMtnCC"
		const stringqHLXT4T = "eXf3614lbzEDnCDX2BwBgVwt7XFsX3Z8ozpyJbHm66xtrWLd5"
		const uinthO6mv9U = BigInt("71")
		const BACMARSLPTOKENPoolCFiE5d = await BACMARSLPTOKENPool.new(stringf7dFXcy, stringqHLXT4T, uinthO6mv9U, {from: accounts[2]});
		const addressB1vk9sJ = accounts[4]
		const uint1wW1oD = BigInt("1037")
		const addressMrR9mT2 = accounts[2]
		const addressYy1j5wE = accounts[1]
		const uint256OABD5Op = await BACMARSLPTOKENPoolCFiE5d.balanceOf.call(addressB1vk9sJ, {from: accounts[4]});
		const uint8tnL4r5T = await BACMARSLPTOKENPoolCFiE5d.decimals.call({from: accounts[5]});
		const uint256YjHMxbm = await BACMARSLPTOKENPoolCFiE5d.stake.call(uint1wW1oD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256F8VzD2H = await BACMARSLPTOKENPoolCFiE5d.balanceOf.call(addressMrR9mT2, {from: accounts[3]});
		const uint256wRHxgLz = await BACMARSLPTOKENPoolCFiE5d.earned.call(addressYy1j5wE, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbTSbXAo = "c14H1UlDYKhNTMS"
		const stringHfG8U5d = "OfYbulbVTK7pJHAYybsmCnrcot6Q4"
		const uintwvcd00e = BigInt("249")
		const BACMARSLPTOKENPooldA2rZlP = await BACMARSLPTOKENPool.new(stringbTSbXAo, stringHfG8U5d, uintwvcd00e, {from: accounts[3]});
		const addressS4CMPl1 = accounts[2]
		const uintwe80apm = BigInt("1217")
		const uint256rR0y5bb = await BACMARSLPTOKENPooldA2rZlP.balanceOf.call(addressS4CMPl1, {from: accounts[4]});
		const uint256g1kVrh = await BACMARSLPTOKENPooldA2rZlP.stake.call(uintwe80apm, {from: accounts[1]});
		await BACMARSLPTOKENPooldA2rZlP.exit.call({from: accounts[2]});
		const stringUAHjVAR = await BACMARSLPTOKENPooldA2rZlP.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringst1FVro = "L9AhauAB3fVjDJVUwD1LgnD4kWUvEQz"
		const stringwNAEAcd = "wNIRQjFRnJgn3AlaYgS8v0PwUxy1vxxNVkwDcDJW8NOmVjtwXWNsTqhua1C9icWmAhAfBicPfrypllTk"
		const uintDyhNi7I = BigInt("148")
		const BACMARSLPTOKENPoolgwxtrn7 = await BACMARSLPTOKENPool.new(stringst1FVro, stringwNAEAcd, uintDyhNi7I, {from: accounts[4]});
		const addressvhCp6y = accounts[0]
		const uint256JxhCqwj = await BACMARSLPTOKENPoolgwxtrn7.balanceOf.call(addressvhCp6y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lhZScp = await BACMARSLPTOKENPoolgwxtrn7.lastTimeRewardApplicable.call({from: accounts[1]});
		const stringFKwXj6d = await BACMARSLPTOKENPoolgwxtrn7.name.call({from: accounts[3]});
		const uint256LNB0UzV = await BACMARSLPTOKENPoolgwxtrn7.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIdAH2s2 = "FPJ7Rraibf5QBn1469dSwKLsMhMTfc55KjknLrVnC1ct8lWICbwJITiiR"
		const string0flyA8 = "fWn4Ws3yy9LPk2Oos1EWQfgnHpK64fF7p8hAVjQV8jFUa68GUzN6"
		const uintkQ9fFLC = BigInt("46")
		const BACMARSLPTOKENPoolwJUhE1A = await BACMARSLPTOKENPool.new(stringIdAH2s2, string0flyA8, uintkQ9fFLC, {from: accounts[4]});
		const uintXFCCLq = BigInt("23")
		const uintgfKz30r = BigInt("1416")
		const uint256LpqTeFq = await BACMARSLPTOKENPoolwJUhE1A.stake.call(uintXFCCLq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xBLwArP = await BACMARSLPTOKENPoolwJUhE1A.totalSupply.call({from: accounts[5]});
		const uint256Ye7Werw = await BACMARSLPTOKENPoolwJUhE1A.notifyRewardAmount.call(uintgfKz30r, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtlT96H9 = "MPTGzVJ94tYGUNxXKG33P8uixXN1OEObRI26pTX9itkUgEPqMK7cXZKIxjwh2YvcBh29MFLP"
		const stringuKCQyGk = "KC4DCm5ZHiVCnyJuKdD09cd471c7pEdvDJyNcIQfgvPpUO223fNgctptsOk8eDQLe9unEFlvq4YFQqjGGMoD1V9HyVy"
		const uintJpxnIAP = BigInt("207")
		const BACMARSLPTOKENPoolxgq7QWY = await BACMARSLPTOKENPool.new(stringtlT96H9, stringuKCQyGk, uintJpxnIAP, {from: accounts[2]});
		const uinthM0u37o = BigInt("37")
		const uintLoiXisu = BigInt("274")
		const uint256Ant3T1C = await BACMARSLPTOKENPoolxgq7QWY.withdraw.call(uinthM0u37o, {from: accounts[4]});
		const uint256qZhfvC6 = await BACMARSLPTOKENPoolxgq7QWY.withdraw.call(uintLoiXisu, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringD0ijdrz = "8LmxpOUwqEp2MbfB2O4DVzmDY2q9ryFMok3OyHuf3PLYgBqr35YpSA3cohlx"
		const stringLP5yiE4 = "8MEYt1zxPrK2jof3ixeINAUC6UOGj4kN8CYYKb77T1zEl"
		const uintQtSc3GY = BigInt("65")
		const BACMARSLPTOKENPoolYdEUpuO = await BACMARSLPTOKENPool.new(stringD0ijdrz, stringLP5yiE4, uintQtSc3GY, {from: accounts[3]});
		const uintxGD5gKC = BigInt("1827")
		const uint256ZBwGR2f = await BACMARSLPTOKENPoolYdEUpuO.totalSupply.call({from: accounts[2]});
		const uint256JOrf9w2 = await BACMARSLPTOKENPoolYdEUpuO.stake.call(uintxGD5gKC, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoFLahvp = "Rz"
		const stringJ4QaX3d = "4SXirbnaXEIAbOrtZXuodvyx9bbRKjLj3cnai2zeH5CiSezfUPcyUMmM4Yf226Y8ab"
		const uinthbUbA79 = BigInt("194")
		const BACMARSLPTOKENPooldsRYJ2H = await BACMARSLPTOKENPool.new(stringoFLahvp, stringJ4QaX3d, uinthbUbA79, {from: accounts[1]});
		const bytecxI2vKL = "0x0c110402090f180a020c0b1f0d13001e071a15061117201c0f011f0707071918"
		const byteVkUXUhY = "0x05181405030c03160a0607041c1a1a171a03161210031f081e101c001f0a1d0c"
		const uintfgnT3rJ = BigInt("252")
		const uintTnRq5a2 = BigInt("1845")
		const uintoUhYEit = BigInt("84")
		await BACMARSLPTOKENPooldsRYJ2H.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256Vu4Bmqc = await BACMARSLPTOKENPooldsRYJ2H.stakeWithPermit.call(uintoUhYEit, uintTnRq5a2, uintfgnT3rJ, byteVkUXUhY, bytecxI2vKL, {from: accounts[3]});
		const uint256kLuHODR = await BACMARSLPTOKENPooldsRYJ2H.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPooldsRYJ2H.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlKan2M4 = "sJhDUrwLuKrajJ2KIniciUWpQ3fz7qYE6Ukl0yjqpmV4Itxwm9CgL"
		const stringoJCZj66 = "oxhwkuVS3xnHgBblzZVNQU22eIJjOKABwaPcTSXdVQno8PPvSLmp981KItYPl36XKvKchnKj49Khz3g7ci"
		const uintOMNFCdd = BigInt("1")
		const BACMARSLPTOKENPooldprLTsm = await BACMARSLPTOKENPool.new(stringlKan2M4, stringoJCZj66, uintOMNFCdd, {from: accounts[5]});
		const uintC7TLjI = BigInt("1202")
		const uintnNcN6EN = BigInt("1207")
		const uint256KEo2lAQ = await BACMARSLPTOKENPooldprLTsm.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256UJjEIhy = await BACMARSLPTOKENPooldprLTsm.stake.call(uintC7TLjI, {from: accounts[2]});
		const uint256A5RVHFf = await BACMARSLPTOKENPooldprLTsm.notifyRewardAmount.call(uintnNcN6EN, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEM9IH2G = "14VxusTN1oPcxKDjrxQN546OA5kBhXCb7169tOopRBPbTk7eW8PaaUjgLKsx3xexAwt4HoF5pUtN8WRb03GuAY2YpCzX"
		const stringxQayn8P = "aqdRLOaTyAKukww55nPpnhUxQcP7wcITvjMMgjs1PR6tseGcMVG7KQS2DMkYDzBHkIDo3FqAVhRc"
		const uintiVbJlk = BigInt("21")
		const BACMARSLPTOKENPoolOUm6zrS = await BACMARSLPTOKENPool.new(stringEM9IH2G, stringxQayn8P, uintiVbJlk, {from: accounts[2]});
		const uinttvy255t = BigInt("981")
		await BACMARSLPTOKENPoolOUm6zrS.nonReentrant.call({from: accounts[4]});
		const uint256HoHoQwT = await BACMARSLPTOKENPoolOUm6zrS.withdraw.call(uinttvy255t, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm3Rjpha = "ZXTKqmOQ9h109HfXTM3bIm71sssK4MQaVK2vRXDPol21eongo5eIIGu2cRdC481nYpjulw1nkECqxUxjVHNq94w7j"
		const stringoJMVezZ = "OEe2XOD5bqPU5QLbaszHzu5o27lIxumUFOcpy"
		const uintDew5Dd = BigInt("31")
		const BACMARSLPTOKENPoolrnGcj13 = await BACMARSLPTOKENPool.new(stringm3Rjpha, stringoJMVezZ, uintDew5Dd, {from: accounts[3]});
		const uintPuHokpz = BigInt("1468")
		const uintUuUkZs4 = BigInt("127")
		const uint256HJCed71 = await BACMARSLPTOKENPoolrnGcj13.stake.call(uintPuHokpz, {from: accounts[2]});
		const stringCimKtuX = await BACMARSLPTOKENPoolrnGcj13.symbol.call({from: accounts[5]});
		const uint256KnX2It = await BACMARSLPTOKENPoolrnGcj13.withdraw.call(uintUuUkZs4, {from: accounts[4]});
		const uint256ZzVO5Po = await BACMARSLPTOKENPoolrnGcj13.lastTimeRewardApplicable.call({from: accounts[3]});
		const stringDcGHjDy = await BACMARSLPTOKENPoolrnGcj13.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolrnGcj13.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ3sfEAM = "UC8PqzQtpb2dCiXiTWaOJi0"
		const stringJhM6lml = "tY7gFKu1m6ORsCi3SiW0KKzaPfmGX5dpk7OGUY9XVObUFYlj21xgMNDBitOFl8mZ5MkvOWza"
		const uintRWO183E = BigInt("33")
		const BACMARSLPTOKENPooltyRVlvH = await BACMARSLPTOKENPool.new(stringZ3sfEAM, stringJhM6lml, uintRWO183E, {from: accounts[1]});
		const addressbX7LZ9 = accounts[3]
		const uint8jl4xRnn = await BACMARSLPTOKENPooltyRVlvH.decimals.call({from: accounts[5]});
		const uint256v2XDjjE = await BACMARSLPTOKENPooltyRVlvH.balanceOf.call(addressbX7LZ9, {from: accounts[0]});
		const uint256PQYEEHU = await BACMARSLPTOKENPooltyRVlvH.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCdva7mK = "ThqF3S8DmQB8dLkvIsDYJPXfQDwy2SXePs7NpRXxzeL5nNScu7B3Eudk1ggE6D96TdNxz0EMs6vX4MEtBQA"
		const stringMZyZpA9 = "U6kVqNxC4GoDlCGzlMcD4WmPCO81oYuD4jiV4JqpoU1T1SjeAKWoMGjOpI1mUtLqH"
		const uint35SyY5 = BigInt("187")
		const BACMARSLPTOKENPoolUxDzlIR = await BACMARSLPTOKENPool.new(stringCdva7mK, stringMZyZpA9, uint35SyY5, {from: accounts[0]});
		const uintTw7IG2 = BigInt("840")
		const uint256mmag7r8 = await BACMARSLPTOKENPoolUxDzlIR.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolUxDzlIR.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPoolUxDzlIR.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256itb5qxc = await BACMARSLPTOKENPoolUxDzlIR.stake.call(uintTw7IG2, {from: accounts[1]});
		const uint8umzu0ym = await BACMARSLPTOKENPoolUxDzlIR.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJFj77OJ = "TXPsskTfcrY91Lzri73XE5aOJfRTxGeOtCDUMC"
		const stringSdhW0kk = "k5fTTMfQVD0qKoJUbxhng"
		const uintc0XGmda = BigInt("134")
		const BACMARSLPTOKENPooljkyOSMs = await BACMARSLPTOKENPool.new(stringJFj77OJ, stringSdhW0kk, uintc0XGmda, {from: accounts[4]});
		const uintS8m7MiO = BigInt("1253")
		const uint5X5z8R = BigInt("57")
		const uint256mg8q9Cc = await BACMARSLPTOKENPooljkyOSMs.stake.call(uintS8m7MiO, {from: accounts[0]});
		const uint256A4ICpcO = await BACMARSLPTOKENPooljkyOSMs.stake.call(uint5X5z8R, {from: accounts[3]});
		const uint256KOOXoN0 = await BACMARSLPTOKENPooljkyOSMs.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLRYaTHU = "BKdsVaLDuyIMJ2xpmiPn0JFuMnHaRpIkWyOFsoiviPwEWhcZKWDHEcyr2laHw5TkY1DwdEE"
		const stringhCUtbPS = "bp7Rkqlr3BfYifoNLwy7JWPXS2XdyY79G3GhEtkmMoWbHTUprGplDENKZuMRaYYpIepA"
		const uintRKcn9HQ = BigInt("26")
		const BACMARSLPTOKENPoolih246E2 = await BACMARSLPTOKENPool.new(stringLRYaTHU, stringhCUtbPS, uintRKcn9HQ, {from: accounts[2]});
		const addressskslPgG = accounts[3]
		await BACMARSLPTOKENPoolih246E2.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolih246E2.nonReentrant.call({from: accounts[2]});
		const uint256xRDwxX = await BACMARSLPTOKENPoolih246E2.earned.call(addressskslPgG, {from: accounts[0]});
		const stringuLyDRer = await BACMARSLPTOKENPoolih246E2.name.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZK9ghO = "qwDs3X4"
		const stringBRf5uuP = "bzfCPRcfppJyzejJ1Lm5mmeKxk3mvGX"
		const uintkscT4x = BigInt("43")
		const BACMARSLPTOKENPoolK2s7J6U = await BACMARSLPTOKENPool.new(stringZK9ghO, stringBRf5uuP, uintkscT4x, {from: accounts[1]});
		const uint256t8VWyKH = await BACMARSLPTOKENPoolK2s7J6U.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringwFQ0K8w = await BACMARSLPTOKENPoolK2s7J6U.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIHNnhh0 = "bAvRn"
		const stringdMkXD7h = "IDzlFNBo54uEYWo7i9SDCJW4OLIqqsg1dJ"
		const uintyPfCFMg = BigInt("158")
		const BACMARSLPTOKENPoolH8cn1l = await BACMARSLPTOKENPool.new(stringIHNnhh0, stringdMkXD7h, uintyPfCFMg, {from: accounts[4]});
		const byteK7Cgw3x = "0x19031c030e07191b13011b14091f0a0d1109191b04050f0c170417040b0a1209"
		const bytekKwa3Gt = "0x1d0c160f0b081d01191d0b0e1b0c160a0b14180b0d1618200c080a1918171d17"
		const uintyasHa0W = BigInt("155")
		const uintHsgLnm = BigInt("1750")
		const uintqWHutLq = BigInt("1503")
		const addressHprKNjh = accounts[0]
		const uint256FqXXxs = await BACMARSLPTOKENPoolH8cn1l.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolH8cn1l.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256xRv1JBR = await BACMARSLPTOKENPoolH8cn1l.stakeWithPermit.call(uintqWHutLq, uintHsgLnm, uintyasHa0W, bytekKwa3Gt, byteK7Cgw3x, {from: accounts[5]});
		const addressbigeBqQ = await BACMARSLPTOKENPoolH8cn1l.updateReward.call(addressHprKNjh, {from: accounts[5]});
		const uint256MqsA3vb = await BACMARSLPTOKENPoolH8cn1l.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolH8cn1l.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsjyM9e = "jRG1YgNnSBI2EaTnO4VoMlHcaRgRyS4uQPCXIUBHtRtSksqjNIDMWCIhw9sOlw4Cu"
		const stringCChBhUv = "sR2H8Irz5z4BMAR0BoGhPHdQsbUj6KM3LBHbjhTtUX3ViWyV1DFhU4nuRTrqxgYZjbkqdM2VgY5hGJBt8ugLTH57MNQubC4"
		const uintydPIkPZ = BigInt("189")
		const BACMARSLPTOKENPoolxdbs0AO = await BACMARSLPTOKENPool.new(stringsjyM9e, stringCChBhUv, uintydPIkPZ, {from: accounts[0]});
		const uintipzskux = BigInt("108")
		const uint256hfFgojm = await BACMARSLPTOKENPoolxdbs0AO.totalSupply.call({from: accounts[1]});
		const stringUgcaPec = await BACMARSLPTOKENPoolxdbs0AO.symbol.call({from: accounts[3]});
		const string7B6En0 = await BACMARSLPTOKENPoolxdbs0AO.symbol.call({from: accounts[0]});
		const uint256a564gGM = await BACMARSLPTOKENPoolxdbs0AO.totalSupply.call({from: accounts[1]});
		const uint256TZMdpme = await BACMARSLPTOKENPoolxdbs0AO.withdraw.call(uintipzskux, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDTp7K7e = "JPHWhMSEH433NSXS7JnW8C8K9xGzun8oqrKEzEGo5u6L7dD1DnHPi1joFPilnyxihG"
		const stringc8r7gZY = "WiKgszYags54wszIsuttxtkxChC7MHEKtMYiXq8LEOH6kZLsDfy7"
		const uintLW29awl = BigInt("116")
		const BACMARSLPTOKENPoolP87hYbE = await BACMARSLPTOKENPool.new(stringDTp7K7e, stringc8r7gZY, uintLW29awl, {from: accounts[1]});
		const uintRdPdeLS = BigInt("255")
		const uintKPNsPAI = BigInt("1720")
		const uint8DIyMSEg = await BACMARSLPTOKENPoolP87hYbE.decimals.call({from: accounts[1]});
		const uint256Txkbuo6 = await BACMARSLPTOKENPoolP87hYbE.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256xCmOWMp = await BACMARSLPTOKENPoolP87hYbE.notifyRewardAmount.call(uintRdPdeLS, {from: accounts[2]});
		const uint256kp7A0nv = await BACMARSLPTOKENPoolP87hYbE.stake.call(uintKPNsPAI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyxOgtgM = "YSeNeW1XNFCgv32VAG7hZBODWB2NzeIAF9ERwZzzcKQYwmSdwbNuiVPoNvjA7FlHm2JddBpeR"
		const stringEeNmu3C = "qVAWOSOBLN7Nf66EQMMuce4CINzipTPz0DuyMFwCvigdj4QQkRidlHwWnhlCjdKjFitKzMoyoXBmBKddo"
		const uintXXPIjav = BigInt("101")
		const BACMARSLPTOKENPoolJaeiO3A = await BACMARSLPTOKENPool.new(stringyxOgtgM, stringEeNmu3C, uintXXPIjav, {from: accounts[5]});
		const byteN9RYHyF = "0x18010e091919082017040c000c0f011a0a03091704041a0303060420160f0811"
		const bytewl4DVev = "0x0f071a0f1f10021b0f100a011c0817100c0f0b1e1411070a13070f0b16080105"
		const uinteFl6fKA = BigInt("9")
		const uinteJ4rCZc = BigInt("202")
		const uintA1YvOc = BigInt("585")
		const uintjzFHDNT = BigInt("2033")
		const uintoPceS3d = BigInt("1548")
		const uint256ppz5zaQ = await BACMARSLPTOKENPoolJaeiO3A.stakeWithPermit.call(uintA1YvOc, uinteJ4rCZc, uinteFl6fKA, bytewl4DVev, byteN9RYHyF, {from: accounts[1]});
		await BACMARSLPTOKENPoolJaeiO3A.getReward.call({from: accounts[4]});
		const uint256yTseqvi = await BACMARSLPTOKENPoolJaeiO3A.notifyRewardAmount.call(uintjzFHDNT, {from: accounts[2]});
		const uint256Nx6sO3g = await BACMARSLPTOKENPoolJaeiO3A.stake.call(uintoPceS3d, {from: "0x0000000000000000000000000000000000000001"});
		const uint8N1ZWZS1 = await BACMARSLPTOKENPoolJaeiO3A.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu0x7J5S = "Dr1YXFdwdnGFyvVXEmWAWKPXB1H9Kbvq1FNOWXXfgPFP8FsWtiIQK0LlqBFp84kTM"
		const stringh11AnGL = "rUGfaQaVg9cePakt4Mtj8DYUctQDSsf9UeFaMgkl3rJrxbwZMb1aUtk7oinOWYobLK"
		const uintMYNa9y = BigInt("132")
		const BACMARSLPTOKENPooldDG7Gzl = await BACMARSLPTOKENPool.new(stringu0x7J5S, stringh11AnGL, uintMYNa9y, {from: accounts[4]});
		await BACMARSLPTOKENPooldDG7Gzl.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPooldDG7Gzl.nonReentrant.call({from: accounts[1]});
		const uint256VUDW30L = await BACMARSLPTOKENPooldDG7Gzl.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzW9isez = "f52PbH6Qeg14H3aUe14yg4FAum8z8wu8eXpM5g3bKgM39EC6q2sNONJj9LkfQdIsUoyT7kPUsbB7AB"
		const stringoOJnkns = "Jimmxgg1YE04iOmEEM3UxALT8Iy8OnGB1sxqYVSEsKcaw69H32TfvsMiQOJYo7juw20QNEJW2hmbvX"
		const uintjToJRXv = BigInt("134")
		const BACMARSLPTOKENPoolQUWhI8 = await BACMARSLPTOKENPool.new(stringzW9isez, stringoOJnkns, uintjToJRXv, {from: accounts[0]});
		const uintMC5XRfI = BigInt("1374")
		const uintT4h2FcT = BigInt("1790")
		await BACMARSLPTOKENPoolQUWhI8.exit.call({from: accounts[1]});
		const uint256pGbtra = await BACMARSLPTOKENPoolQUWhI8.stake.call(uintMC5XRfI, {from: accounts[4]});
		await BACMARSLPTOKENPoolQUWhI8.nonReentrant.call({from: accounts[4]});
		const uint256b6E7gSN = await BACMARSLPTOKENPoolQUWhI8.stake.call(uintT4h2FcT, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcVQTNMb = "XYTMuAIx5bvK6vtBsz0jB6BGkuOVOdovAeTdwcmJkxzGMcOLVYsqPSI1PED5FKwdLGNCzTjpbHwzXfze"
		const stringpxNJxUX = "sVZvFWLBYF"
		const uintuHQcgSn = BigInt("149")
		const BACMARSLPTOKENPooln99Cviu = await BACMARSLPTOKENPool.new(stringcVQTNMb, stringpxNJxUX, uintuHQcgSn, {from: accounts[2]});
		const uint256H60qVW8 = await BACMARSLPTOKENPooln99Cviu.rewardPerToken.call({from: accounts[5]});
		const uint8ruJoaud = await BACMARSLPTOKENPooln99Cviu.decimals.call({from: accounts[2]});
		const stringYTwOHGU = await BACMARSLPTOKENPooln99Cviu.name.call({from: accounts[2]});
		await BACMARSLPTOKENPooln99Cviu.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXrqNLb = "u8ZENd6mQ65WMB"
		const stringByuobVb = "eOjrmT1pCfPrkqztSGkXmftswbBS3Ecae1io4niTBFTLcouzevc"
		const uintOEkZ5fz = BigInt("247")
		const BACMARSLPTOKENPoolnnuE36 = await BACMARSLPTOKENPool.new(stringXrqNLb, stringByuobVb, uintOEkZ5fz, {from: accounts[2]});
		const addressaR1JjT = accounts[3]
		await BACMARSLPTOKENPoolnnuE36.exit.call({from: accounts[1]});
		const addressnoaUygz = await BACMARSLPTOKENPoolnnuE36.updateReward.call(addressaR1JjT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNhJo4d6 = "mP2"
		const stringext876 = "oMoyLpRy5tn8X37eHSRSa2BY22u18bnwRfznxSn0BlmWm1kwdvHECiNDVcVj2zy3gwYkNoSf3JLTki2TxvSJmd8YHI1JR1XS63"
		const uintJ1jbv03 = BigInt("222")
		const BACMARSLPTOKENPoolvR6xIbH = await BACMARSLPTOKENPool.new(stringNhJo4d6, stringext876, uintJ1jbv03, {from: accounts[0]});
		const uintzlT8Jav = BigInt("1866")
		const uintieocvGs = BigInt("509")
		const addressBwqEIjq = "0x0000000000000000000000000000000000000001"
		const uint256lGgnoVL = await BACMARSLPTOKENPoolvR6xIbH.stake.call(uintzlT8Jav, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y459qj = await BACMARSLPTOKENPoolvR6xIbH.notifyRewardAmount.call(uintieocvGs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RATG6Rn = await BACMARSLPTOKENPoolvR6xIbH.earned.call(addressBwqEIjq, {from: accounts[2]});
		await BACMARSLPTOKENPoolvR6xIbH.getReward.call({from: accounts[5]});
		const uint256vgo0hU = await BACMARSLPTOKENPoolvR6xIbH.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJLgNB8R = "Or3EO90gGRsD9uhCBKWvH4nFqM8nuaOzNDecNdeyMLf8XkhsBtdfC1A33ZaAbhwFI5sT6xoqigE8pwk9lq"
		const stringu5lr00I = "mwyCEE2VJdQ1VzjrVWduja7wa0qoQa4AxAxnMDfVext"
		const uintFqDD345 = BigInt("105")
		const BACMARSLPTOKENPoolIgeBDc0 = await BACMARSLPTOKENPool.new(stringJLgNB8R, stringu5lr00I, uintFqDD345, {from: accounts[1]});
		const uinteNiLCJG = BigInt("1850")
		const byter31xbhD = "0x161a170b1f06071c061a1a18091c0d16091e120a1e1204191209160c12181a1f"
		const byteLjAr9Gf = "0x16021f1904161507191c081c05191e1a01031704171b08011606131f10020215"
		const uintYocVt8 = BigInt("184")
		const uintvbACO6 = BigInt("1829")
		const uintgfQY3zP = BigInt("93")
		const addressmS66iSo = accounts[0]
		const uint256LFxGiBX = await BACMARSLPTOKENPoolIgeBDc0.getRewardForDuration.call({from: accounts[4]});
		const uint256C9GBRtm = await BACMARSLPTOKENPoolIgeBDc0.getRewardForDuration.call({from: accounts[1]});
		const uint256p1ufco9 = await BACMARSLPTOKENPoolIgeBDc0.notifyRewardAmount.call(uinteNiLCJG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xiq481z = await BACMARSLPTOKENPoolIgeBDc0.stakeWithPermit.call(uintgfQY3zP, uintvbACO6, uintYocVt8, byteLjAr9Gf, byter31xbhD, {from: accounts[3]});
		const uint256Z6Gma67 = await BACMARSLPTOKENPoolIgeBDc0.earned.call(addressmS66iSo, {from: accounts[0]});
	});
})