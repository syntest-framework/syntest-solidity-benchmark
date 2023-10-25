const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringSJsGzQo = "beqOQ6W4fpYJF5r"
		const stringXEBCaXF = "7lCiNR7jE1vamE5UHsbaNrXBEg1jlcNZTeI6N3D"
		const uintxGD8ouw = BigInt("125")
		const WeedburnGaLBSZ = await Weedburn.new(stringSJsGzQo, stringXEBCaXF, uintxGD8ouw, {from: accounts[3]});
		const uintKSJ7nS6 = BigInt("498")
		const uint84ZhEX = BigInt("162")
		const addressdOfyW7 = accounts[2]
		const uintut2RvLS = BigInt("1736")
		const addressMBXrruB = accounts[3]
		const addressoZKT0Tq = accounts[2]
		await WeedburnGaLBSZ.enableDevMode.call({from: accounts[1]});
		await WeedburnGaLBSZ.enableDevMode.call({from: accounts[3]});
		const uint256acoDOs = await WeedburnGaLBSZ.burn.call(uintKSJ7nS6, {from: accounts[0]});
		const uint256ydmxRkZ = await WeedburnGaLBSZ.totalSupply.call({from: accounts[5]});
		const boolj6TyfgS = await WeedburnGaLBSZ.increaseAllowance.call(addressdOfyW7, uint84ZhEX, {from: accounts[3]});
		const boolYm1T149 = await WeedburnGaLBSZ.transferFrom.call(addressoZKT0Tq, addressMBXrruB, uintut2RvLS, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnM77iWY = await Weedburn.new({from: accounts[1]});
		const uintJ6AfO8r = BigInt("169")
		const addressO11w8b4 = "0x0000000000000000000000000000000000000001"
		const uintUZhsEkt = BigInt("1069")
		const addressrXzOfX = accounts[4]
		const uintVF8iN7p = BigInt("1172")
		const addressdfDhvAR = accounts[5]
		const addressMlCfy4 = accounts[3]
		const boolA4fLmXE = await WeedburnM77iWY.increaseAllowance.call(addressO11w8b4, uintJ6AfO8r, {from: accounts[4]});
		const boolGTefAk1 = await WeedburnM77iWY.increaseAllowance.call(addressrXzOfX, uintUZhsEkt, {from: accounts[1]});
		const boolFpyeNZY = await WeedburnM77iWY.transferFrom.call(addressMlCfy4, addressdfDhvAR, uintVF8iN7p, {from: accounts[2]});

		assert.equal(boolA4fLmXE, true)
		assert.equal(boolGTefAk1, true)
		await expect(WeedburnM77iWY.transferFrom.call(addressMlCfy4, addressdfDhvAR, uintVF8iN7p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnY2KVF5z = await Weedburn.new({from: accounts[0]});
		const uintTsXn48a = BigInt("1489")
		const addressaMjbqWc = "0x0000000000000000000000000000000000000001"
		const boolyE55re = await WeedburnY2KVF5z.increaseAllowance.call(addressaMjbqWc, uintTsXn48a, {from: accounts[4]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[1]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[0]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[0]});

		assert.equal(boolyE55re, true)
		await expect(WeedburnY2KVF5z.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnY2KVF5z = await Weedburn.new({from: accounts[0]});
		const uintDYGzfYQ = BigInt("1489")
		const addressJPbmwZL = "0x0000000000000000000000000000000000000001"
		const uintgc3iuMc = BigInt("146")
		const addressaM6t1nT = accounts[5]
		const uintqGsSLo4 = BigInt("193")
		const addresswIhEv4E = accounts[5]
		const boolyE55re = await WeedburnY2KVF5z.increaseAllowance.call(addressJPbmwZL, uintDYGzfYQ, {from: accounts[4]});
		const boolVtkgQC7 = await WeedburnY2KVF5z.decreaseAllowance.call(addressaM6t1nT, uintgc3iuMc, {from: accounts[2]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[1]});
		const boolMXFDqKw = await WeedburnY2KVF5z.approve.call(addresswIhEv4E, uintqGsSLo4, {from: accounts[3]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[0]});

		assert.equal(boolyE55re, true)
		await expect(WeedburnY2KVF5z.decreaseAllowance.call(addressaM6t1nT, uintgc3iuMc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnY2KVF5z = await Weedburn.new({from: accounts[0]});
		const uintNjINC3a = BigInt("604")
		const addresse21RzvJ = "0x0000000000000000000000000000000000000001"
		const uintuXIMARd = BigInt("369")
		const addressDsYQ5eq = accounts[0]
		const boolyE55re = await WeedburnY2KVF5z.increaseAllowance.call(addresse21RzvJ, uintNjINC3a, {from: accounts[4]});
		const boolclBviy = await WeedburnY2KVF5z.approve.call(addressDsYQ5eq, uintuXIMARd, {from: accounts[3]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[1]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[0]});
		await WeedburnY2KVF5z.disableLimitMode.call({from: accounts[0]});

		assert.equal(boolclBviy, true)
		assert.equal(boolyE55re, true)
		await expect(WeedburnY2KVF5z.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndxTPwZz = await Weedburn.new({from: accounts[0]});
		const uintcnmJBgM = BigInt("933")
		const addressuSj3NB7 = accounts[0]
		const uint8DcATS7b = await WeedburndxTPwZz.decimals.call({from: accounts[0]});
		await WeedburndxTPwZz.disableLimitMode.call({from: accounts[2]});
		const stringIVCV4s = await WeedburndxTPwZz.symbol.call({from: accounts[1]});
		await WeedburndxTPwZz.disableDevMode.call({from: accounts[5]});
		const addressKCU0oNm = await WeedburndxTPwZz.burnFrom.call(addressuSj3NB7, uintcnmJBgM, {from: accounts[1]});

		assert.equal(uint8DcATS7b, BigInt("18"))
		await expect(WeedburndxTPwZz.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const uintEgywMoC = BigInt("651")
		const addressOmcHFWb = accounts[1]
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});
		const addressHkl7yK = await Weedburnqg8waQG.burnFrom.call(addressOmcHFWb, uintEgywMoC, {from: accounts[0]});
		const uint8Vi402a9 = await Weedburnqg8waQG.decimals.call({from: accounts[5]});

		await expect(Weedburnqg8waQG.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const addressvfe9L4x = accounts[0]
		const uintLmTcN51 = BigInt("1652")
		const addressaydFV5L = accounts[4]
		const addressz3WJnv = "0x0000000000000000000000000000000000000001"
		const uintSrRNMyN = BigInt("651")
		const addressNL1GXYV = accounts[1]
		const uint256SP1pUp = await Weedburnqg8waQG.balanceOf.call(addressvfe9L4x, {from: accounts[3]});
		const uint8B3y5di1 = await Weedburnqg8waQG.decimals.call({from: accounts[4]});
		const boole9hUxa = await Weedburnqg8waQG.transferFrom.call(addressz3WJnv, addressaydFV5L, uintLmTcN51, {from: accounts[3]});
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});
		const addressHkl7yK = await Weedburnqg8waQG.burnFrom.call(addressNL1GXYV, uintSrRNMyN, {from: accounts[0]});

		assert.equal(uint256SP1pUp, BigInt("0"))
		assert.equal(uint8B3y5di1, BigInt("18"))
		await expect(Weedburnqg8waQG.transferFrom.call(addressz3WJnv, addressaydFV5L, uintLmTcN51, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const uintWUkJ0vO = BigInt("737")
		const addressvgY8aIQ = accounts[2]
		const uintBEH10vy = BigInt("1652")
		const addressuoDmewT = accounts[4]
		const addressVeDsxt = "0x0000000000000000000000000000000000000001"
		const uint2BUes4 = BigInt("651")
		const addressDVmxO1k = accounts[1]
		const boolYiuLKYM = await Weedburnqg8waQG.approve.call(addressvgY8aIQ, uintWUkJ0vO, {from: accounts[0]});
		const stringw2L1DY = await Weedburnqg8waQG.name.call({from: accounts[0]});
		const boole9hUxa = await Weedburnqg8waQG.transferFrom.call(addressVeDsxt, addressuoDmewT, uintBEH10vy, {from: accounts[3]});
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});
		const addressHkl7yK = await Weedburnqg8waQG.burnFrom.call(addressDVmxO1k, uint2BUes4, {from: accounts[0]});

		assert.equal(boolYiuLKYM, true)
		assert.equal(stringw2L1DY, "t.me/burnweed1")
		await expect(Weedburnqg8waQG.transferFrom.call(addressVeDsxt, addressuoDmewT, uintBEH10vy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnqW92JdB = await Weedburn.new({from: accounts[3]});
		const addressyHlixhs = accounts[1]
		const addressCi79xjW = accounts[0]
		const uint256lThjhAF = await WeedburnqW92JdB.totalSupply.call({from: accounts[2]});
		await WeedburnqW92JdB.disableDevMode.call({from: accounts[1]});
		const uint8VduzI8w = await WeedburnqW92JdB.decimals.call({from: accounts[3]});
		const uint256mhvSpDJ = await WeedburnqW92JdB.allowance.call(addressCi79xjW, addressyHlixhs, {from: accounts[0]});

		assert.equal(uint256lThjhAF, BigInt("100000000000000000000000"))
		await expect(WeedburnqW92JdB.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const uintY1vapoC = BigInt("1363")
		const addressdS8FlbK = accounts[3]
		const uintBAD8E6 = BigInt("433")
		const addressItT7bMV = await Weedburnqg8waQG.burnFrom.call(addressdS8FlbK, uintY1vapoC, {from: accounts[3]});
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});
		const uint256OA6m3mD = await Weedburnqg8waQG.burn.call(uintBAD8E6, {from: accounts[3]});
		const uint8Vi402a9 = await Weedburnqg8waQG.decimals.call({from: accounts[5]});

		await expect(Weedburnqg8waQG.burnFrom.call(addressdS8FlbK, uintY1vapoC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const uintSqyPIrD = BigInt("1652")
		const addressVQ7sQal = accounts[4]
		const addresszaFKNY2 = "0x0000000000000000000000000000000000000001"
		await Weedburnqg8waQG.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		const boole9hUxa = await Weedburnqg8waQG.transferFrom.call(addresszaFKNY2, addressVQ7sQal, uintSqyPIrD, {from: accounts[3]});
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});
		const uint8Vi402a9 = await Weedburnqg8waQG.decimals.call({from: accounts[5]});

		await expect(Weedburnqg8waQG.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzedWGb5 = await Weedburn.new({from: accounts[4]});
		const uintif3TPhU = BigInt("1021")
		const addressMWWoSb6 = accounts[3]
		const addressbJ4yZwV = accounts[0]
		const addresszgLgxD3 = accounts[0]
		const uintrKXEB9j = BigInt("1848")
		const addressSWonObY = "0x0000000000000000000000000000000000000001"
		const addressaCEJjpq = accounts[5]
		const boolRJiQad5 = await WeedburnzedWGb5.transfer.call(addressMWWoSb6, uintif3TPhU, {from: accounts[5]});
		const uint256pHhWVoB = await WeedburnzedWGb5.allowance.call(addresszgLgxD3, addressbJ4yZwV, {from: accounts[5]});
		const uint256Fj0gwfg = await WeedburnzedWGb5.totalSupply.call({from: accounts[4]});
		await WeedburnzedWGb5.enableDevMode.call({from: accounts[3]});
		const uint256YP0JqB = await WeedburnzedWGb5.totalSupply.call({from: accounts[2]});
		const boolMN1yGZd = await WeedburnzedWGb5.transferFrom.call(addressaCEJjpq, addressSWonObY, uintrKXEB9j, {from: accounts[4]});

		await expect(WeedburnzedWGb5.transfer.call(addressMWWoSb6, uintif3TPhU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnqg8waQG = await Weedburn.new({from: accounts[3]});
		const uintcD5rJ8S = BigInt("1111")
		const addressnC04a9c = accounts[4]
		const uint256biHQwL6 = await Weedburnqg8waQG.burn.call(uintcD5rJ8S, {from: accounts[1]});
		const uint256rBVKH7e = await Weedburnqg8waQG.balanceOf.call(addressnC04a9c, {from: accounts[2]});
		await Weedburnqg8waQG.disableDevMode.call({from: accounts[4]});

		await expect(Weedburnqg8waQG.burn.call(uintcD5rJ8S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnM77iWY = await Weedburn.new({from: accounts[1]});
		const uintGEq0z5v = BigInt("169")
		const addressdJzS3mC = "0x0000000000000000000000000000000000000001"
		const uintJLcWF8Z = BigInt("51")
		const addressasxKLIP = accounts[5]
		const uintNGiShPH = BigInt("1172")
		const addressOIB1rVX = accounts[5]
		const addressBwOuxqn = accounts[3]
		const boolA4fLmXE = await WeedburnM77iWY.increaseAllowance.call(addressdJzS3mC, uintGEq0z5v, {from: accounts[4]});
		const boolGTefAk1 = await WeedburnM77iWY.increaseAllowance.call(addressasxKLIP, uintJLcWF8Z, {from: accounts[1]});
		await WeedburnM77iWY.enableDevMode.call({from: accounts[1]});
		const boolFpyeNZY = await WeedburnM77iWY.transferFrom.call(addressBwOuxqn, addressOIB1rVX, uintNGiShPH, {from: accounts[2]});
		const uint8F30guaU = await WeedburnM77iWY.decimals.call({from: accounts[0]});

		assert.equal(boolA4fLmXE, true)
		assert.equal(boolGTefAk1, true)
		await expect(WeedburnM77iWY.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncRzv0YV = await Weedburn.new({from: accounts[2]});
		const uintzvmK0wP = BigInt("1743")
		const addressk0BPjDU = accounts[2]
		const uintjGQovq0 = BigInt("97")
		const boolIWUy1b8 = await WeedburncRzv0YV.transfer.call(addressk0BPjDU, uintzvmK0wP, {from: accounts[2]});
		const uint256BG7dsR = await WeedburncRzv0YV.burn.call(uintjGQovq0, {from: accounts[0]});
		const stringRK1op3 = await WeedburncRzv0YV.symbol.call({from: accounts[4]});
		await WeedburncRzv0YV.disableLimitMode.call({from: accounts[3]});

		assert.equal(boolIWUy1b8, true)
		await expect(WeedburncRzv0YV.burn.call(uintjGQovq0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnAD1SPl8 = await Weedburn.new({from: accounts[5]});
		const uinteIrgtHm = BigInt("701")
		const addressEZOk4yW = accounts[0]
		const addressf3AJbWN = accounts[3]
		const addressGyRkPDe = accounts[0]
		const boolpKvXoZ6 = await WeedburnAD1SPl8.increaseAllowance.call(addressEZOk4yW, uinteIrgtHm, {from: "0x0000000000000000000000000000000000000001"});
		const string07daDV = await WeedburnAD1SPl8.symbol.call({from: accounts[1]});
		const uint256wacyB6Z = await WeedburnAD1SPl8.allowance.call(addressGyRkPDe, addressf3AJbWN, {from: accounts[1]});
		await WeedburnAD1SPl8.enableDevMode.call({from: accounts[1]});
		await WeedburnAD1SPl8.disableLimitMode.call({from: accounts[0]});

		assert.equal(boolpKvXoZ6, true)
		assert.equal(string07daDV, "Weedburn")
		assert.equal(uint256wacyB6Z, BigInt("0"))
		await expect(WeedburnAD1SPl8.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpiXGVdz = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdC0iBgP = accounts[1]
		const addressi3YuMJB = accounts[0]
		const addressUZs4OhI = accounts[4]
		const uint256ijZ1CSG = await WeedburnpiXGVdz.balanceOf.call(addressdC0iBgP, {from: accounts[2]});
		const uint256l9MGpjh = await WeedburnpiXGVdz.allowance.call(addressUZs4OhI, addressi3YuMJB, {from: accounts[4]});
		await WeedburnpiXGVdz.enableDevMode.call({from: accounts[5]});
	});
})