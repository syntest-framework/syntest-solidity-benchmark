const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintn0URITn = BigInt("1597")
		const addressNMDjrku = accounts[2]
		const uintNLlVDK7 = BigInt("484")
		const addressuDRPFrG = accounts[2]
		const addressVyqFgu5 = accounts[2]
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressNMDjrku, uintn0URITn, {from: accounts[5]});
//		const boolnar5VyL = await WeedburnqewRcJf.transferFrom.call(addressVyqFgu5, addressuDRPFrG, uintNLlVDK7, {from: accounts[4]});
//		await WeedburnqewRcJf.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnqewRcJf.burnFrom.call(addressNMDjrku, uintn0URITn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringIjCAmIa = "j4GGOpURKvlp2RwDkxZPZezX8MpxX7KCbuorufFX1AS2YnVfDZiK5VOuFmD14KbNRdasBgfPStHzjOnLGRg"
		const string6tTV2v = "DZzSyb6ni5V9CEAC4QSYsYzmqnpO48mVFvX4eynr7G9nylBOIpEiJC"
		const uintrUaH6Af = BigInt("193")
		const WeedburngeB4k7 = await Weedburn.new(stringIjCAmIa, string6tTV2v, uintrUaH6Af, {from: accounts[1]});
		const uintVzIW0n7 = BigInt("1530")
		const addressmSyWbbA = accounts[3]
		const addressb0eaZg4 = accounts[2]
		const uintA2EcKOg = BigInt("1831")
		const addresshIbNUZN = accounts[2]
		const uintA3ngRW7 = BigInt("1342")
		const addressJW7ECxY = accounts[1]
		const uinthOaMYsf = BigInt("1256")
		const addressb6LYSMb = accounts[2]
		const boolQCPH7mo = await WeedburngeB4k7.transferFrom.call(addressb0eaZg4, addressmSyWbbA, uintVzIW0n7, {from: accounts[1]});
		await WeedburngeB4k7.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburngeB4k7.enableDevMode.call({from: accounts[3]});
		const bool2Sz4iO = await WeedburngeB4k7.decreaseAllowance.call(addresshIbNUZN, uintA2EcKOg, {from: accounts[4]});
		const booldc1zblk = await WeedburngeB4k7.decreaseAllowance.call(addressJW7ECxY, uintA3ngRW7, {from: accounts[0]});
		const booljxJFTB3 = await WeedburngeB4k7.decreaseAllowance.call(addressb6LYSMb, uinthOaMYsf, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const Weedburnek7Dkbm = await Weedburn.new({from: accounts[1]});
		const uintAs4qYdT = BigInt("2026")
		const uintn69Vmw1 = BigInt("259")
		const addressi8Mxt50 = "0x0000000000000000000000000000000000000001"
		const addressUiIHOx = accounts[3]
		const uintkfyGPyD = BigInt("1277")
		const addressEfavzc0 = accounts[1]
		const uintcKp2j3 = BigInt("281")
		const addressixDQw4Q = accounts[1]
		const uint256zDk5Ya3 = await Weedburnek7Dkbm.burn.call(uintAs4qYdT, {from: accounts[1]});
		const booljBGj3sg = await Weedburnek7Dkbm.increaseAllowance.call(addressi8Mxt50, uintn69Vmw1, {from: accounts[1]});
		const uint256GdM91Tt = await Weedburnek7Dkbm.balanceOf.call(addressUiIHOx, {from: accounts[2]});
		const boolfcEDpCB = await Weedburnek7Dkbm.increaseAllowance.call(addressEfavzc0, uintkfyGPyD, {from: accounts[1]});
//		await Weedburnek7Dkbm.disableLimitMode.call({from: accounts[0]});
//		const boolR7tibZ8 = await Weedburnek7Dkbm.approve.call(addressixDQw4Q, uintcKp2j3, {from: accounts[3]});

		assert.equal(boolfcEDpCB, true)
		assert.equal(booljBGj3sg, true)
		assert.equal(uint256GdM91Tt, BigInt("0"))
		await expect(Weedburnek7Dkbm.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDTGr0WV = await Weedburn.new({from: accounts[4]});
		const stringvrL8UlY = await WeedburnDTGr0WV.symbol.call({from: accounts[4]});
//		await WeedburnDTGr0WV.enableDevMode.call({from: accounts[1]});
//		await WeedburnDTGr0WV.disableLimitMode.call({from: accounts[2]});

		assert.equal(stringvrL8UlY, "Weedburn")
		await expect(WeedburnDTGr0WV.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnWSUFlmX = await Weedburn.new({from: accounts[3]});
		const uintXnbMDAD = BigInt("1448")
		const addressc2klVb = accounts[3]
		const addressBQ1Wu5W = accounts[4]
		const addressAyVcrC = accounts[3]
		const stringwYudWAg = await WeedburnWSUFlmX.symbol.call({from: accounts[0]});
		const boole1KX60M = await WeedburnWSUFlmX.increaseAllowance.call(addressc2klVb, uintXnbMDAD, {from: accounts[2]});
		const uint256tnBZWcf = await WeedburnWSUFlmX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnWSUFlmX.enableLimitMode.call({from: accounts[4]});
//		const uint256fxHwsfP = await WeedburnWSUFlmX.allowance.call(addressAyVcrC, addressBQ1Wu5W, {from: accounts[3]});

		assert.equal(boole1KX60M, true)
		assert.equal(stringwYudWAg, "Weedburn")
		assert.equal(uint256tnBZWcf, BigInt("100000000000000000000000"))
		await expect(WeedburnWSUFlmX.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRmt6naq = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLRJ2Yx = accounts[0]
		const addresshh9z4hk = "0x0000000000000000000000000000000000000001"
		const addressQuegmb = accounts[2]
		const uint256dSk8Uaj = await WeedburnRmt6naq.balanceOf.call(addressLRJ2Yx, {from: accounts[5]});
		const uint256wEBbn5l = await WeedburnRmt6naq.balanceOf.call(addresshh9z4hk, {from: accounts[3]});
		await WeedburnRmt6naq.disableLimitMode.call({from: accounts[3]});
		const uint256yzj1eCs = await WeedburnRmt6naq.balanceOf.call(addressQuegmb, {from: accounts[4]});
		const uint256lh28fT4 = await WeedburnRmt6naq.totalSupply.call({from: accounts[3]});
		const stringMTMCUAZ = await WeedburnRmt6naq.symbol.call({from: accounts[5]});
	});

	it('test for Weedburn', async () => {
		const WeedburnAOaQ1y2 = await Weedburn.new({from: accounts[2]});
		const uintDcjdlI = BigInt("585")
		const addressvFiHpdu = "0x0000000000000000000000000000000000000001"
		const uintNuj4w97 = BigInt("390")
		const addressD7QTbRv = accounts[0]
		const addressFFXebrZ = accounts[3]
		const uintoGJY2ZV = BigInt("95")
		const addressLBo67sy = "0x0000000000000000000000000000000000000001"
		const addresszsJ5aZQ = accounts[1]
		const boolIlvYH1B = await WeedburnAOaQ1y2.increaseAllowance.call(addressvFiHpdu, uintDcjdlI, {from: accounts[2]});
//		const boolz4QYwAP = await WeedburnAOaQ1y2.transferFrom.call(addressFFXebrZ, addressD7QTbRv, uintNuj4w97, {from: accounts[3]});
//		await WeedburnAOaQ1y2.disableDevMode.call({from: accounts[0]});
//		const uint256FgsB6qn = await WeedburnAOaQ1y2.burn.call(uintoGJY2ZV, {from: accounts[0]});
//		const uint256bljajcA = await WeedburnAOaQ1y2.allowance.call(addresszsJ5aZQ, addressLBo67sy, {from: accounts[4]});
//		const uint8Y2NvSq = await WeedburnAOaQ1y2.decimals.call({from: accounts[4]});

		assert.equal(boolIlvYH1B, true)
		await expect(WeedburnAOaQ1y2.transferFrom.call(addressFFXebrZ, addressD7QTbRv, uintNuj4w97, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const addressHvWcQHu = accounts[1]
		const addressV9LluqX = accounts[0]
		const uintbUK9C7T = BigInt("1597")
		const addressFTczJl8 = accounts[2]
		const uintWzZ4i22 = BigInt("484")
		const addresscLfvBVZ = accounts[3]
		const addresshhTajED = accounts[2]
		const uint2564HoGal = await WeedburnqewRcJf.allowance.call(addressV9LluqX, addressHvWcQHu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressFTczJl8, uintbUK9C7T, {from: accounts[5]});
//		const boolnar5VyL = await WeedburnqewRcJf.transferFrom.call(addresshhTajED, addresscLfvBVZ, uintWzZ4i22, {from: accounts[4]});
//		await WeedburnqewRcJf.disableDevMode.call({from: accounts[4]});

		assert.equal(uint2564HoGal, BigInt("0"))
		await expect(WeedburnqewRcJf.burnFrom.call(addressFTczJl8, uintbUK9C7T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintj9Xl7lg = BigInt("484")
		const addressg1ADDzy = accounts[2]
		const addressx1FbHwv = accounts[2]
//		const boolnar5VyL = await WeedburnqewRcJf.transferFrom.call(addressx1FbHwv, addressg1ADDzy, uintj9Xl7lg, {from: accounts[4]});
//		await WeedburnqewRcJf.disableLimitMode.call({from: accounts[3]});
//		await WeedburnqewRcJf.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnqewRcJf.transferFrom.call(addressx1FbHwv, addressg1ADDzy, uintj9Xl7lg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintEgUa8nO = BigInt("1597")
		const addresstqOPVtW = accounts[2]
		const uintImQVgx = BigInt("484")
		const addressB3T0yd7 = accounts[2]
		const addressvloN8TY = accounts[2]
		const stringy0Iord = await WeedburnqewRcJf.name.call({from: accounts[1]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addresstqOPVtW, uintEgUa8nO, {from: accounts[5]});
//		const boolnar5VyL = await WeedburnqewRcJf.transferFrom.call(addressvloN8TY, addressB3T0yd7, uintImQVgx, {from: accounts[4]});
//		await WeedburnqewRcJf.enableDevMode.call({from: accounts[3]});
//		await WeedburnqewRcJf.disableDevMode.call({from: accounts[4]});

		assert.equal(stringy0Iord, "t.me/burnweed1")
		await expect(WeedburnqewRcJf.burnFrom.call(addresstqOPVtW, uintEgUa8nO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
//		await WeedburnqewRcJf.disableDevMode.call({from: accounts[4]});

		await expect(WeedburnqewRcJf.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintKAlnwZw = BigInt("709")
		const addressPOstDcN = accounts[0]
		const uintI3f8zVD = BigInt("1597")
		const addressJgNO9An = accounts[3]
//		const boolz7nTKbt = await WeedburnqewRcJf.decreaseAllowance.call(addressPOstDcN, uintKAlnwZw, {from: accounts[2]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressJgNO9An, uintI3f8zVD, {from: accounts[5]});
//		await WeedburnqewRcJf.disableLimitMode.call({from: accounts[3]});

		await expect(WeedburnqewRcJf.decreaseAllowance.call(addressPOstDcN, uintKAlnwZw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintqvINsZ = BigInt("1597")
		const addressEd4twbl = accounts[2]
		const uint8skotSac = await WeedburnqewRcJf.decimals.call({from: accounts[4]});
		const stringGWza3B = await WeedburnqewRcJf.symbol.call({from: accounts[3]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressEd4twbl, uintqvINsZ, {from: accounts[5]});

		assert.equal(stringGWza3B, "Weedburn")
		assert.equal(uint8skotSac, BigInt("18"))
		await expect(WeedburnqewRcJf.burnFrom.call(addressEd4twbl, uintqvINsZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintWObDVVP = BigInt("1396")
		const addressj0fdUQr = accounts[1]
		const uintXjNQQzW = BigInt("1597")
		const addressAeACMi0 = accounts[2]
		const boolYh3RCoX = await WeedburnqewRcJf.approve.call(addressj0fdUQr, uintWObDVVP, {from: accounts[3]});
//		await WeedburnqewRcJf.enableLimitMode.call({from: accounts[3]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressAeACMi0, uintXjNQQzW, {from: accounts[5]});

		assert.equal(boolYh3RCoX, true)
		await expect(WeedburnqewRcJf.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const addressxa6EuJO = accounts[2]
		const uintrbw9i4b = BigInt("1171")
		const addresscdtaJYR = accounts[4]
		const uintFbNQiL6 = BigInt("1597")
		const addresso6lYlwJ = accounts[3]
		const uint256fr26HcU = await WeedburnqewRcJf.balanceOf.call(addressxa6EuJO, {from: accounts[2]});
//		const booloWF5Ceu = await WeedburnqewRcJf.transfer.call(addresscdtaJYR, uintrbw9i4b, {from: accounts[0]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addresso6lYlwJ, uintFbNQiL6, {from: accounts[5]});

		assert.equal(uint256fr26HcU, BigInt("100000000000000000000000"))
		await expect(WeedburnqewRcJf.transfer.call(addresscdtaJYR, uintrbw9i4b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqewRcJf = await Weedburn.new({from: accounts[2]});
		const uintNqPQ0Xy = BigInt("1261")
		const addressJXUzJi5 = accounts[4]
		const uintNPbXMX3 = BigInt("1610")
		const addressRrToaNa = accounts[2]
		const uintDcaNW3W = BigInt("1257")
		const addressT3KPMl = accounts[0]
		const boolPhk2jPs = await WeedburnqewRcJf.transfer.call(addressJXUzJi5, uintNqPQ0Xy, {from: accounts[2]});
		const uint8fKSehR9 = await WeedburnqewRcJf.decimals.call({from: accounts[4]});
//		const addressD2LBYmb = await WeedburnqewRcJf.burnFrom.call(addressRrToaNa, uintNPbXMX3, {from: accounts[5]});
//		const boolsSxoAdI = await WeedburnqewRcJf.decreaseAllowance.call(addressT3KPMl, uintDcaNW3W, {from: accounts[2]});

		assert.equal(boolPhk2jPs, true)
		assert.equal(uint8fKSehR9, BigInt("18"))
		await expect(WeedburnqewRcJf.burnFrom.call(addressRrToaNa, uintNPbXMX3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})