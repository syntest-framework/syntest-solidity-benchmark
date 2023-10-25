const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPrhgrai = await LUP.new({from: accounts[3]});
		const uinti0XjBLF = BigInt("543")
		const addressDv4q1pe = accounts[0]
		const uintJgDNkX = BigInt("1837")
		const uintYdNBBTx = BigInt("915")
		const addressiLDTLAp = accounts[1]
		const addressitUABml = accounts[4]
		const boolvG6L78f = await LUPrhgrai.transfer.call(addressDv4q1pe, uinti0XjBLF, {from: accounts[4]});
		const boolHhejN0 = await LUPrhgrai.lock.call(addressiLDTLAp, uintYdNBBTx, uintJgDNkX, {from: accounts[1]});
		const uint8PFXKg3v = await LUPrhgrai.decimals.call({from: accounts[1]});
		const uint256A6jGh7 = await LUPrhgrai.balanceOf.call(addressitUABml, {from: accounts[5]});
		const stringOMhoCwe = await LUPrhgrai.symbol.call({from: accounts[0]});

		await expect(LUPrhgrai.transfer.call(addressDv4q1pe, uinti0XjBLF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSNFfxsZ = await LUP.new({from: accounts[0]});
		const uintjr9BgXi = BigInt("1608")
		const uintudL4N6D = BigInt("744")
		const addresshGjWNe7 = "0x0000000000000000000000000000000000000001"
		const uintDumIzDK = BigInt("979")
		const addressOQN5mQ = accounts[3]
		const uintg0msEXq = BigInt("955")
		const addressWvLOmv = accounts[0]
		const boolpgdzTRT = await LUPSNFfxsZ.transferWithLock.call(addresshGjWNe7, uintudL4N6D, uintjr9BgXi, {from: accounts[4]});
		const boolv2ji89q = await LUPSNFfxsZ.transfer.call(addressOQN5mQ, uintDumIzDK, {from: accounts[4]});
		const boolbuynFwa = await LUPSNFfxsZ.unlock.call(addressWvLOmv, uintg0msEXq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPSNFfxsZ.transferWithLock.call(addresshGjWNe7, uintudL4N6D, uintjr9BgXi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringwHjrgad = "KlQcYNQvM6Dn48t5KpFU9OzcI7OkP6OWXFJjCW1WJgJDRxv9212HTtSlgv5Zl4XdwFFz0us"
		const stringCKPwpSe = "rew6yaK9out2LYmwRH8qLCKAtokW4c6eKKbt"
		const uintVlzVdyH = BigInt("215")
		const LUPmvAyBXq = await LUP.new(stringwHjrgad, stringCKPwpSe, uintVlzVdyH, {from: accounts[2]});
		const bool90K1CR = true
		const addressamuBdFh = accounts[4]
		const uintc7Bgorr = BigInt("1822")
		const address0OgQ4q = accounts[3]
		const addressP1bOmvz = "0x0000000000000000000000000000000000000001"
		const boolFvWNlyd = await LUPmvAyBXq.freezeAccount.call(addressamuBdFh, bool90K1CR, {from: accounts[5]});
		const boolgcxrcAX = await LUPmvAyBXq.transfer.call(address0OgQ4q, uintc7Bgorr, {from: "0x0000000000000000000000000000000000000001"});
		const addressFovdSf = await LUPmvAyBXq.upgradeTo.call(addressP1bOmvz, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPNz4Gy2d = await LUP.new({from: accounts[3]});
		const addressquf3w0 = "0x0000000000000000000000000000000000000001"
		const uintiBUElRE = BigInt("1874")
		const uintXdrbwwh = BigInt("1856")
		const addressPWMr7TM = accounts[5]
		const address3XcuPe = accounts[0]
		const addressWgnCKB5 = await LUPNz4Gy2d.upgradeTo.call(addressquf3w0, {from: accounts[5]});
		const boolwqptYeU = await LUPNz4Gy2d.lock.call(addressPWMr7TM, uintXdrbwwh, uintiBUElRE, {from: accounts[0]});
		const addressQuTlmLR = await LUPNz4Gy2d.notFrozen.call(address3XcuPe, {from: accounts[1]});

		await expect(LUPNz4Gy2d.upgradeTo.call(addressquf3w0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPjjx3el0 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstXN4Xk = accounts[0]
		const addressOWwRkR9 = accounts[1]
		const boolMoHU4pK = false
		const addressDl7nIN7 = accounts[4]
		const stringKK7eZU = await LUPjjx3el0.symbol.call({from: accounts[2]});
		const addressjWiU20 = await LUPjjx3el0.upgradeTo.call(addresstXN4Xk, {from: accounts[2]});
		const addressuvaTBgn = await LUPjjx3el0.upgradeTo.call(addressOWwRkR9, {from: accounts[3]});
		const uint8h3IpomG = await LUPjjx3el0.decimals.call({from: accounts[0]});
		const boolARRUJV7 = await LUPjjx3el0.freezeAccount.call(addressDl7nIN7, boolMoHU4pK, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const addressUtTnUjp = accounts[0]
		const stringsJh01U1 = await LUP8gj9YR.symbol.call({from: accounts[2]});
		const addressZTv99pb = await LUP8gj9YR.notFrozen.call(addressUtTnUjp, {from: accounts[3]});

		assert.equal(stringsJh01U1, "LUP")
		await expect(LUP8gj9YR.notFrozen.call(addressUtTnUjp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIjpvtSW = await LUP.new({from: accounts[4]});
		const uintCt2SGzE = BigInt("1520")
		const addressl0DcYQX = accounts[0]
		const stringOyQ2lL0 = await LUPIjpvtSW.name.call({from: accounts[3]});
		const boolsqzpDS = await LUPIjpvtSW.unlock.call(addressl0DcYQX, uintCt2SGzE, {from: accounts[4]});
		const stringROcRTMf = await LUPIjpvtSW.symbol.call({from: accounts[3]});

		assert.equal(stringOyQ2lL0, "LINKUP Token")
		await expect(LUPIjpvtSW.unlock.call(addressl0DcYQX, uintCt2SGzE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPrhgrai = await LUP.new({from: accounts[3]});
		const uintcNWqp6Z = BigInt("1989")
		const uintoO9MUr = BigInt("1706")
		const address0XJHzs = accounts[5]
		const uintHVcnzIT = BigInt("543")
		const addressCUvQjZ = accounts[0]
		const uintDDG5PCO = BigInt("1831")
		const uintmoWfmi0 = BigInt("915")
		const addressW4HSI66 = accounts[1]
		const address3qtre3 = accounts[4]
		const addressyuKCiER = accounts[3]
		const boolEgI3vI = await LUPrhgrai.lock.call(address0XJHzs, uintoO9MUr, uintcNWqp6Z, {from: accounts[3]});
		const boolvG6L78f = await LUPrhgrai.transfer.call(addressCUvQjZ, uintHVcnzIT, {from: accounts[4]});
		const boolHhejN0 = await LUPrhgrai.lock.call(addressW4HSI66, uintmoWfmi0, uintDDG5PCO, {from: accounts[1]});
		const uint8PFXKg3v = await LUPrhgrai.decimals.call({from: accounts[1]});
		const uint256A6jGh7 = await LUPrhgrai.balanceOf.call(address3qtre3, {from: accounts[5]});
		const stringOMhoCwe = await LUPrhgrai.symbol.call({from: accounts[0]});
		const uint256DbCKpsX = await LUPrhgrai.balanceOf.call(addressyuKCiER, {from: accounts[1]});

		await expect(LUPrhgrai.lock.call(address0XJHzs, uintoO9MUr, uintcNWqp6Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const uintLs99tnk = BigInt("1030")
		const addressCkuWPOi = accounts[5]
		const addresslDUfX97 = accounts[1]
		const uint8FXWulrC = await LUP8gj9YR.decimals.call({from: accounts[3]});
		const boolI2rtTkb = await LUP8gj9YR.transfer.call(addressCkuWPOi, uintLs99tnk, {from: accounts[1]});
		const addressZTv99pb = await LUP8gj9YR.notFrozen.call(addresslDUfX97, {from: accounts[3]});

		assert.equal(uint8FXWulrC, BigInt("18"))
		await expect(LUP8gj9YR.transfer.call(addressCkuWPOi, uintLs99tnk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const addressKenja5N = accounts[1]
		const uintCLJkqP7 = BigInt("1030")
		const addressmO9B80 = accounts[6]
		const uint256qLLLrSS = await LUP8gj9YR.balanceOf.call(addressKenja5N, {from: accounts[3]});
		const boolI2rtTkb = await LUP8gj9YR.transfer.call(addressmO9B80, uintCLJkqP7, {from: accounts[1]});

		assert.equal(uint256qLLLrSS, BigInt("0"))
		await expect(LUP8gj9YR.transfer.call(addressmO9B80, uintCLJkqP7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const addresskXO2b5v = accounts[2]
		const addresslsmr8Bl = accounts[0]
		const uint256qLLLrSS = await LUP8gj9YR.balanceOf.call(addresskXO2b5v, {from: accounts[3]});
		const addressRlCmiA = await LUP8gj9YR.upgradeTo.call(addresslsmr8Bl, {from: accounts[3]});
		const stringF7gtcIu = await LUP8gj9YR.symbol.call({from: accounts[4]});

		assert.equal(stringF7gtcIu, "LUP")
		assert.equal(uint256qLLLrSS, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const uintesfw0iE = BigInt("1394")
		const uintI3Dpsnk = BigInt("927")
		const addressPQLDmie = accounts[2]
		const uintZqXYSGg = BigInt("1030")
		const addresssLCcKdQ = accounts[7]
		const booldwQssp = await LUP8gj9YR.transferWithLock.call(addressPQLDmie, uintI3Dpsnk, uintesfw0iE, {from: accounts[3]});
		const boolI2rtTkb = await LUP8gj9YR.transfer.call(addresssLCcKdQ, uintZqXYSGg, {from: accounts[1]});

		assert.equal(booldwQssp, true)
		await expect(LUP8gj9YR.transfer.call(addresssLCcKdQ, uintZqXYSGg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const boolgfIkQX4 = true
		const addressPba4Kan = accounts[2]
		const uintS3bN3Un = BigInt("1030")
		const addressCCTj70 = accounts[6]
		const booljcqaUbn = await LUP8gj9YR.freezeAccount.call(addressPba4Kan, boolgfIkQX4, {from: accounts[3]});
		const boolI2rtTkb = await LUP8gj9YR.transfer.call(addressCCTj70, uintS3bN3Un, {from: accounts[1]});

		assert.equal(booljcqaUbn, true)
		await expect(LUP8gj9YR.transfer.call(addressCCTj70, uintS3bN3Un, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP8gj9YR = await LUP.new({from: accounts[3]});
		const uintt31JnD = BigInt("1532")
		const uint7hCGQV = BigInt("1934")
		const addressQz2iYkf = accounts[3]
		const uinto3eAWe = BigInt("1038")
		const addressZx9tGVp = accounts[6]
		const boolCl8wk9E = await LUP8gj9YR.lock.call(addressQz2iYkf, uint7hCGQV, uintt31JnD, {from: accounts[3]});
		const boolI2rtTkb = await LUP8gj9YR.transfer.call(addressZx9tGVp, uinto3eAWe, {from: accounts[1]});

		assert.equal(boolCl8wk9E, true)
		await expect(LUP8gj9YR.transfer.call(addressZx9tGVp, uinto3eAWe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})