const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringg5x4QYy = "yc963V54CTDf5NoV0rvdqYYspSTnodqp"
		const stringTlkndh1 = "jv86AQkjRheUF1QZDUIMf6aagYLRjQ9X02qVd6O6DZcD2tqyt8cjsUDzd1QSy7GxDd8THBnckdlurdzE7P5PQFceBpbt"
		const uintHqwyuWy = BigInt("148")
		const Weedburnr0gjkht = await Weedburn.new(stringg5x4QYy, stringTlkndh1, uintHqwyuWy, {from: accounts[5]});
		const uintpVkCq5Z = BigInt("1752")
		const addressvj5tXCc = accounts[3]
		const addressnhvVfjv = accounts[5]
		const uintw5p1XCF = BigInt("1338")
		const addressamYU14W = accounts[1]
		const addressrO87PQc = accounts[5]
		const boolm4Zn0nG = await Weedburnr0gjkht.transferFrom.call(addressnhvVfjv, addressvj5tXCc, uintpVkCq5Z, {from: accounts[2]});
		const addressj8ACoNd = await Weedburnr0gjkht.burnFrom.call(addressamYU14W, uintw5p1XCF, {from: accounts[0]});
		const uint256dseV12A = await Weedburnr0gjkht.balanceOf.call(addressrO87PQc, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburntvbE0tQ = await Weedburn.new({from: accounts[3]});
		const addresstP2FkX9 = accounts[0]
		const addressTSy58Nr = accounts[4]
		const addressu1h9YkM = accounts[4]
		const uint256LE5qdh7 = await WeedburntvbE0tQ.allowance.call(addressTSy58Nr, addresstP2FkX9, {from: accounts[1]});
		const uint256D3zwGPj = await WeedburntvbE0tQ.balanceOf.call(addressu1h9YkM, {from: accounts[2]});
		const uint8QIkGYMG = await WeedburntvbE0tQ.decimals.call({from: accounts[3]});

		assert.equal(uint256D3zwGPj, BigInt("0"))
		assert.equal(uint256LE5qdh7, BigInt("0"))
		assert.equal(uint8QIkGYMG, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const WeedburngVkBggF = await Weedburn.new({from: accounts[4]});
		const uintOMZvKzI = BigInt("1204")
		const addresswK1VXZN = accounts[0]
		const uintYJoKCgn = BigInt("1315")
		const addressKF4bEUS = accounts[3]
		const addressQ1VtJfC = accounts[2]
		await WeedburngVkBggF.enableLimitMode.call({from: accounts[4]});
		const addressTxC2ANm = await WeedburngVkBggF.burnFrom.call(addresswK1VXZN, uintOMZvKzI, {from: accounts[4]});
		const boolsbB9reU = await WeedburngVkBggF.approve.call(addressKF4bEUS, uintYJoKCgn, {from: accounts[1]});
		const uint256ruQpRus = await WeedburngVkBggF.balanceOf.call(addressQ1VtJfC, {from: accounts[0]});

		await expect(WeedburngVkBggF.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnchWmWrV = await Weedburn.new({from: accounts[3]});
		const uintA1M24w = BigInt("489")
		const addressnnQXvAS = accounts[3]
		const uintetFNqJ = BigInt("684")
		const addressZ3TOxN = accounts[2]
		const addressLbTe1am = accounts[3]
		const addressZPHfAq = accounts[3]
		const uintS1YIOZJ = BigInt("275")
		const addressDwpIN2 = accounts[0]
		const addressD1r7FOQ = accounts[3]
		await WeedburnchWmWrV.enableDevMode.call({from: accounts[1]});
		const boolFozcFVQ = await WeedburnchWmWrV.increaseAllowance.call(addressnnQXvAS, uintA1M24w, {from: accounts[0]});
		const addressjpcZpYg = await WeedburnchWmWrV.burnFrom.call(addressZ3TOxN, uintetFNqJ, {from: accounts[2]});
		const uint256G7eoUiB = await WeedburnchWmWrV.allowance.call(addressZPHfAq, addressLbTe1am, {from: accounts[0]});
		const boolaaw4BPz = await WeedburnchWmWrV.transferFrom.call(addressD1r7FOQ, addressDwpIN2, uintS1YIOZJ, {from: accounts[2]});

		await expect(WeedburnchWmWrV.enableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzvB47A3 = await Weedburn.new({from: accounts[0]});
		const uintw1hTqDh = BigInt("1774")
		const stringLiJmcIo = await WeedburnzvB47A3.name.call({from: accounts[4]});
		await WeedburnzvB47A3.enableLimitMode.call({from: accounts[1]});
		const uint256A0XLyKq = await WeedburnzvB47A3.burn.call(uintw1hTqDh, {from: accounts[2]});

		assert.equal(stringLiJmcIo, "t.me/burnweed1")
		await expect(WeedburnzvB47A3.enableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnEFDuiIY = await Weedburn.new({from: accounts[3]});
		const addressPHBcw3r = accounts[1]
		const addressNJNsd19 = accounts[3]
		const uintqauu92S = BigInt("2019")
		const addressdVrQws = accounts[1]
		const uint256AN3sO5 = await WeedburnEFDuiIY.allowance.call(addressNJNsd19, addressPHBcw3r, {from: accounts[0]});
		const uint256qxM3OX6 = await WeedburnEFDuiIY.totalSupply.call({from: accounts[3]});
		const stringwDj7fdM = await WeedburnEFDuiIY.symbol.call({from: accounts[0]});
		const addressTps8vEd = await WeedburnEFDuiIY.burnFrom.call(addressdVrQws, uintqauu92S, {from: accounts[4]});
		await WeedburnEFDuiIY.enableLimitMode.call({from: accounts[3]});
		await WeedburnEFDuiIY.disableLimitMode.call({from: accounts[2]});

		assert.equal(stringwDj7fdM, "Weedburn")
		assert.equal(uint256AN3sO5, BigInt("0"))
		assert.equal(uint256qxM3OX6, BigInt("100000000000000000000000"))
		await expect(WeedburnEFDuiIY.burnFrom.call(addressdVrQws, uintqauu92S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnaud9jxo = await Weedburn.new({from: accounts[3]});
		const uintSSI0lT5 = BigInt("1979")
		const addresseRw7Hlm = accounts[1]
		const addressjmcrdvQ = "0x0000000000000000000000000000000000000001"
		const address03zyLK = accounts[5]
		const addressS73UoG = accounts[2]
		const uintEmXyop = BigInt("1933")
		const addressWxi54Kg = accounts[2]
		const boolLTk3nwC = await Weedburnaud9jxo.decreaseAllowance.call(addresseRw7Hlm, uintSSI0lT5, {from: accounts[4]});
		const stringCSTkDtJ = await Weedburnaud9jxo.symbol.call({from: accounts[3]});
		const uint256hR0Sst = await Weedburnaud9jxo.allowance.call(address03zyLK, addressjmcrdvQ, {from: accounts[4]});
		const uint256LmE8dAG = await Weedburnaud9jxo.balanceOf.call(addressS73UoG, {from: accounts[0]});
		const boolgkvpw7Z = await Weedburnaud9jxo.decreaseAllowance.call(addressWxi54Kg, uintEmXyop, {from: accounts[2]});

		await expect(Weedburnaud9jxo.decreaseAllowance.call(addresseRw7Hlm, uintSSI0lT5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnuQn9a2E = await Weedburn.new({from: accounts[2]});
		const addressWpfmns1 = "0x0000000000000000000000000000000000000001"
		const uintsfLifRy = BigInt("769")
		const addressNTTSrNT = "0x0000000000000000000000000000000000000001"
		const addressEvUQ3wD = accounts[0]
		const uint256s4C8OLD = await WeedburnuQn9a2E.balanceOf.call(addressWpfmns1, {from: "0x0000000000000000000000000000000000000001"});
		const boolGwpQdix = await WeedburnuQn9a2E.transferFrom.call(addressEvUQ3wD, addressNTTSrNT, uintsfLifRy, {from: accounts[2]});
		await WeedburnuQn9a2E.enableLimitMode.call({from: accounts[2]});

		assert.equal(uint256s4C8OLD, BigInt("0"))
		await expect(WeedburnuQn9a2E.transferFrom.call(addressEvUQ3wD, addressNTTSrNT, uintsfLifRy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnuQn9a2E = await Weedburn.new({from: accounts[2]});
		const addressjYTD9E = "0x0000000000000000000000000000000000000002"
		const uintddfQbUj = BigInt("747")
		const addressXyjhnC = accounts[4]
		const uintluVCeCW = BigInt("769")
		const addressgczJA3j = "0x0000000000000000000000000000000000000001"
		const addressWF3xdAZ = accounts[0]
		const uint256s4C8OLD = await WeedburnuQn9a2E.balanceOf.call(addressjYTD9E, {from: "0x0000000000000000000000000000000000000001"});
		const boolZMVjrkR = await WeedburnuQn9a2E.transfer.call(addressXyjhnC, uintddfQbUj, {from: "0x0000000000000000000000000000000000000001"});
		const boolGwpQdix = await WeedburnuQn9a2E.transferFrom.call(addressWF3xdAZ, addressgczJA3j, uintluVCeCW, {from: accounts[2]});
		await WeedburnuQn9a2E.enableLimitMode.call({from: accounts[2]});

		assert.equal(uint256s4C8OLD, BigInt("0"))
		await expect(WeedburnuQn9a2E.transfer.call(addressXyjhnC, uintddfQbUj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRnSp3j = await Weedburn.new({from: accounts[0]});
		const uintKYQpLZF = BigInt("1358")
		const addressaKv27xk = accounts[2]
		const uintfdK7G6K = BigInt("754")
		const address5duhpx = "0x0000000000000000000000000000000000000001"
		const uintxiYGP5H = BigInt("102")
		const addressBKh7Rsq = accounts[1]
		const boolFxpoWq = await WeedburnRnSp3j.increaseAllowance.call(addressaKv27xk, uintKYQpLZF, {from: accounts[4]});
		const addressjjRwNK = await WeedburnRnSp3j.burnFrom.call(address5duhpx, uintfdK7G6K, {from: accounts[5]});
		const addressedxeLGn = await WeedburnRnSp3j.burnFrom.call(addressBKh7Rsq, uintxiYGP5H, {from: accounts[2]});
		await WeedburnRnSp3j.enableLimitMode.call({from: accounts[3]});
		await WeedburnRnSp3j.enableDevMode.call({from: accounts[3]});
		const uint256OzGwq3w = await WeedburnRnSp3j.totalSupply.call({from: accounts[2]});

		assert.equal(boolFxpoWq, true)
		await expect(WeedburnRnSp3j.burnFrom.call(address5duhpx, uintfdK7G6K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnF6v9Gbq = await Weedburn.new({from: accounts[3]});
		await WeedburnF6v9Gbq.disableLimitMode.call({from: accounts[0]});
		await WeedburnF6v9Gbq.enableLimitMode.call({from: accounts[3]});
		await WeedburnF6v9Gbq.enableLimitMode.call({from: accounts[0]});

		await expect(WeedburnF6v9Gbq.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDsD97YR = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFHrfDh8 = accounts[1]
		const uintpwoe20 = BigInt("1983")
		const addresszxvtFKl = accounts[0]
		const uintXPZidzd = BigInt("608")
		const addressK3BIQbC = accounts[0]
		const uint256LNnwYNU = await WeedburnDsD97YR.balanceOf.call(addressFHrfDh8, {from: accounts[4]});
		const uint8d0BCaX4 = await WeedburnDsD97YR.decimals.call({from: accounts[2]});
		const uint256lXFcQju = await WeedburnDsD97YR.totalSupply.call({from: accounts[0]});
		await WeedburnDsD97YR.enableLimitMode.call({from: accounts[0]});
		const booloSYF80h = await WeedburnDsD97YR.decreaseAllowance.call(addresszxvtFKl, uintpwoe20, {from: accounts[5]});
		const booltSAVy2m = await WeedburnDsD97YR.approve.call(addressK3BIQbC, uintXPZidzd, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnJ1KChhH = await Weedburn.new({from: accounts[5]});
		const uintIQ7y7ht = BigInt("1979")
		const addresspB5bNes = accounts[4]
		const boolpv93Pck = await WeedburnJ1KChhH.approve.call(addresspB5bNes, uintIQ7y7ht, {from: accounts[4]});
		await WeedburnJ1KChhH.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnJ1KChhH.disableDevMode.call({from: accounts[2]});
		const uint8sWGzl84 = await WeedburnJ1KChhH.decimals.call({from: accounts[3]});

		assert.equal(boolpv93Pck, true)
		await expect(WeedburnJ1KChhH.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnag00Ey6 = await Weedburn.new({from: accounts[4]});
		const uintyhWP4l = BigInt("260")
		const addressCwXxDS0 = accounts[5]
		await Weedburnag00Ey6.disableDevMode.call({from: accounts[0]});
		const boolnOLlxBr = await Weedburnag00Ey6.increaseAllowance.call(addressCwXxDS0, uintyhWP4l, {from: accounts[1]});
		const uint256jdj3ZoA = await Weedburnag00Ey6.totalSupply.call({from: accounts[3]});

		await expect(Weedburnag00Ey6.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburny6BjZqe = await Weedburn.new({from: accounts[3]});
		const uintVElC6i = BigInt("248")
		const uinteHmDkEk = BigInt("140")
		const addressKyFwswX = accounts[0]
		const addressv6PY6hZ = accounts[4]
		const uintVtQOnop = BigInt("1345")
		const addressqRaPT4 = accounts[0]
		const uint8GouQlue = await Weedburny6BjZqe.decimals.call({from: accounts[3]});
		const uint256tKHmNY1 = await Weedburny6BjZqe.burn.call(uintVElC6i, {from: accounts[4]});
		const boolIQ4JAiF = await Weedburny6BjZqe.transferFrom.call(addressv6PY6hZ, addressKyFwswX, uinteHmDkEk, {from: accounts[0]});
		await Weedburny6BjZqe.enableDevMode.call({from: accounts[4]});
		const addressH6dOJv7 = await Weedburny6BjZqe.burnFrom.call(addressqRaPT4, uintVtQOnop, {from: accounts[3]});
		const stringfrisYAk = await Weedburny6BjZqe.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8GouQlue, BigInt("18"))
		await expect(Weedburny6BjZqe.burn.call(uintVElC6i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburniQzhTlc = await Weedburn.new({from: accounts[5]});
		const uintxSMUfND = BigInt("1331")
		const addressYckYXUT = accounts[3]
		const uinthLYy5jw = BigInt("512")
		const addressmno4hUX = accounts[2]
		const addressaTSPzIo = "0x0000000000000000000000000000000000000001"
		const boolxPRXEwh = await WeedburniQzhTlc.transfer.call(addressYckYXUT, uintxSMUfND, {from: accounts[5]});
		const stringwIvEnrs = await WeedburniQzhTlc.symbol.call({from: accounts[1]});
		await WeedburniQzhTlc.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		const stringQVQHsIp = await WeedburniQzhTlc.symbol.call({from: accounts[1]});
		const stringrRLIFoC = await WeedburniQzhTlc.symbol.call({from: accounts[5]});
		const boolgay7aY5 = await WeedburniQzhTlc.transferFrom.call(addressaTSPzIo, addressmno4hUX, uinthLYy5jw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxPRXEwh, true)
		assert.equal(stringwIvEnrs, "Weedburn")
		await expect(WeedburniQzhTlc.disableDevMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})