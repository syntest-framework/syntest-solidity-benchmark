const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinfYZxrZT = await FreakCoin.new({from: accounts[0]});
		const addressC6NezU = accounts[3]
		const addressSoskZ30 = "0x0000000000000000000000000000000000000001"
		const addressDghDMo2 = await FreakCoinfYZxrZT.uniswapAddress.call({from: accounts[0]});
		const uint256QlTTRjN = await FreakCoinfYZxrZT.allowance.call(addressSoskZ30, addressC6NezU, {from: accounts[1]});

		assert.equal(addressDghDMo2, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256QlTTRjN, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJGsspCx = await FreakCoin.new({from: accounts[2]});
		const addressCbHT2uV = accounts[2]
		const uintJQGOg0 = BigInt("378")
		const addresswdQ3nOY = accounts[4]
		const addressIxS1j48 = await FreakCoinJGsspCx.setUniswapAddress.call(addressCbHT2uV, {from: accounts[4]});
		const addressfzbqH0Y = await FreakCoinJGsspCx.uniswapAddress.call({from: accounts[2]});
		const boolosrSFhO = await FreakCoinJGsspCx.transfer.call(addresswdQ3nOY, uintJQGOg0, {from: accounts[2]});

		await expect(FreakCoinJGsspCx.setUniswapAddress.call(addressCbHT2uV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinK2FbqK = await FreakCoin.new({from: accounts[3]});
		const uintd3m6OJs = BigInt("1629")
		const addresswuAAEmT = accounts[2]
		const addressSNOfCMX = accounts[4]
		const addressUgNfXbw = accounts[1]
		const addressnXGT4r = accounts[0]
		const addressqLpR6HK = accounts[5]
		const boolszYXhGW = await FreakCoinK2FbqK.transferFrom.call(addressSNOfCMX, addresswuAAEmT, uintd3m6OJs, {from: accounts[2]});
		const uint256TAWQuZz = await FreakCoinK2FbqK.allowance.call(addressnXGT4r, addressUgNfXbw, {from: accounts[1]});
		const uint256hkme9eQ = await FreakCoinK2FbqK.balanceOf.call(addressqLpR6HK, {from: accounts[0]});

		await expect(FreakCoinK2FbqK.transferFrom.call(addressSNOfCMX, addresswuAAEmT, uintd3m6OJs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOPyc4Qw = await FreakCoin.new({from: accounts[5]});
		const addresspUUv3ba = accounts[2]
		const addressendfWIH = accounts[3]
		const addressHLrRyGQ = accounts[3]
		const uint256pxyOLvK = await FreakCoinOPyc4Qw.allUserBalances.call(addresspUUv3ba, {from: accounts[1]});
		const uint256Y5jXYTt = await FreakCoinOPyc4Qw.allUserBalances.call(addressendfWIH, {from: accounts[4]});
		const uint256SgT0I0g = await FreakCoinOPyc4Qw.balanceOf.call(addressHLrRyGQ, {from: accounts[0]});

		await expect(FreakCoinOPyc4Qw.allUserBalances.call(addresspUUv3ba, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinPrGwPTU = await FreakCoin.new({from: accounts[2]});
		const uinttAzVvlr = BigInt("1521")
		const addresslv0rWYo = accounts[5]
		const addressvkTVdsC = accounts[5]
		const addressH6VfMdY = accounts[2]
		const addressDASnvUc = accounts[0]
		const boolxCuDLtw = await FreakCoinPrGwPTU.transfer.call(addresslv0rWYo, uinttAzVvlr, {from: accounts[1]});
		const uint2569FGVGu = await FreakCoinPrGwPTU.allUserBalances.call(addressvkTVdsC, {from: accounts[3]});
		const uint256Z2F6cNO = await FreakCoinPrGwPTU.balanceOf.call(addressH6VfMdY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256d0WxOjo = await FreakCoinPrGwPTU.allUserBalances.call(addressDASnvUc, {from: "0x0000000000000000000000000000000000000001"});
		const addressvgwvG6n = await FreakCoinPrGwPTU.uniswapAddress.call({from: accounts[4]});

		await expect(FreakCoinPrGwPTU.transfer.call(addresslv0rWYo, uinttAzVvlr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfYZxrZT = await FreakCoin.new({from: accounts[0]});
		const uintvpK61UF = BigInt("1681")
		const addressxFWmc61 = accounts[2]
		const addresszH4wtVi = accounts[3]
		const addressBfHMPmv = "0x0000000000000000000000000000000000000000"
		const addressC42lvEA = accounts[3]
		const address6JMyqi = accounts[4]
		const addressWNpYhaV = accounts[0]
		const addressDghDMo2 = await FreakCoinfYZxrZT.uniswapAddress.call({from: accounts[0]});
		const boolCrM46HM = await FreakCoinfYZxrZT.approve.call(addressxFWmc61, uintvpK61UF, {from: accounts[1]});
		const uint256QlTTRjN = await FreakCoinfYZxrZT.allowance.call(addressBfHMPmv, addresszH4wtVi, {from: accounts[1]});
		const uint256KY07GSn = await FreakCoinfYZxrZT.allowance.call(address6JMyqi, addressC42lvEA, {from: accounts[1]});
		const uint256ZWLNjan = await FreakCoinfYZxrZT.balanceOf.call(addressWNpYhaV, {from: accounts[4]});

		assert.equal(addressDghDMo2, 0x0000000000000000000000000000000000000000)
		assert.equal(boolCrM46HM, true)
		assert.equal(uint256KY07GSn, BigInt("0"))
		assert.equal(uint256QlTTRjN, BigInt("0"))
		assert.equal(uint256ZWLNjan, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRjVk2vL = await FreakCoin.new({from: accounts[3]});
		const uintdUULVz = BigInt("1451")
		const addressJHfpYa = accounts[1]
		const addressiLGXA0s = accounts[3]
		const uintVtzGocG = BigInt("829")
		const addressOIBwmpR = accounts[3]
		const addresscvjDpii = accounts[1]
		const addressMeDEOKm = accounts[3]
		const boolOxrG9RZ = await FreakCoinRjVk2vL.transfer.call(addressJHfpYa, uintdUULVz, {from: accounts[3]});
		const uint256un7aCTO = await FreakCoinRjVk2vL.balanceOf.call(addressiLGXA0s, {from: accounts[3]});
		const boolsAWfCMC = await FreakCoinRjVk2vL.transfer.call(addressOIBwmpR, uintVtzGocG, {from: accounts[0]});
		const uint256WAz2kas = await FreakCoinRjVk2vL.balanceOf.call(addresscvjDpii, {from: accounts[2]});
		const uint256cFxnFKK = await FreakCoinRjVk2vL.balanceOf.call(addressMeDEOKm, {from: accounts[2]});

		assert.equal(boolOxrG9RZ, true)
		assert.equal(uint256un7aCTO, BigInt("1000000"))
		await expect(FreakCoinRjVk2vL.transfer.call(addressOIBwmpR, uintVtzGocG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinmB6r3Dh = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXh7JOmm = BigInt("286")
		const addressfmAiiCA = accounts[0]
		const addressjB3uYXl = accounts[5]
		const addressddfdUq1 = accounts[4]
		const boolrG9Hfk = await FreakCoinmB6r3Dh.transfer.call(addressfmAiiCA, uintXh7JOmm, {from: accounts[1]});
		const uint256x2oIPJ = await FreakCoinmB6r3Dh.allUserBalances.call(addressjB3uYXl, {from: accounts[0]});
		const uint256UXkTA9 = await FreakCoinmB6r3Dh.balanceOf.call(addressddfdUq1, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRjVk2vL = await FreakCoin.new({from: accounts[3]});
		const uintyFHKuQ6 = BigInt("1451")
		const addressUSj5WM = accounts[1]
		const uintYeVl7aw = BigInt("1660")
		const addresszyohaic = accounts[3]
		const addressov7C6EL = accounts[5]
		const addressBwDSxfJ = accounts[3]
		const uintFp5NiU = BigInt("829")
		const addressmSCZmzE = accounts[3]
		const addressYh2D8bD = accounts[3]
		const boolOxrG9RZ = await FreakCoinRjVk2vL.transfer.call(addressUSj5WM, uintyFHKuQ6, {from: accounts[3]});
		const boolpj8g3Ub = await FreakCoinRjVk2vL.transfer.call(addresszyohaic, uintYeVl7aw, {from: accounts[3]});
		const uint256pD2mOmV = await FreakCoinRjVk2vL.balanceOf.call(addressov7C6EL, {from: accounts[5]});
		const uint256un7aCTO = await FreakCoinRjVk2vL.balanceOf.call(addressBwDSxfJ, {from: accounts[3]});
		const boolsAWfCMC = await FreakCoinRjVk2vL.transfer.call(addressmSCZmzE, uintFp5NiU, {from: accounts[0]});
		const uint256cFxnFKK = await FreakCoinRjVk2vL.balanceOf.call(addressYh2D8bD, {from: accounts[2]});

		assert.equal(boolOxrG9RZ, true)
		assert.equal(boolpj8g3Ub, true)
		assert.equal(uint256pD2mOmV, BigInt("0"))
		assert.equal(uint256un7aCTO, BigInt("1000000"))
		await expect(FreakCoinRjVk2vL.transfer.call(addressmSCZmzE, uintFp5NiU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})