const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolapZG2Ps = await ETFXPool.new({from: accounts[2]});
		const uintoyNdOkh = BigInt("1409")
		const addressRQ6daB = accounts[0]
		const uintd1c42Oc = BigInt("1514")
		const addressHVo4q9x = await ETFXPoolapZG2Ps.owner.call({from: accounts[0]});
		const boolJ7Acyeq = await ETFXPoolapZG2Ps.decreaseAllowance.call(addressRQ6daB, uintoyNdOkh, {from: accounts[2]});
		const uint256Z5AQiTx = await ETFXPoolapZG2Ps.stake.call(uintd1c42Oc, {from: accounts[4]});

		assert.equal(addressHVo4q9x, 0x452C64f4d40d4D71d46d7eA257EA4a6A4F395b69)
		await expect(ETFXPoolapZG2Ps.decreaseAllowance.call(addressRQ6daB, uintoyNdOkh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLLwBde8 = await ETFXPool.new({from: accounts[5]});
		const uintikumm8U = BigInt("75")
		const addressnSqg6u = accounts[0]
		const uinteyD1ixg = BigInt("1149")
		const uintNPKpDVs = BigInt("1602")
		const boolMarqFu2 = await ETFXPoolLLwBde8.approve.call(addressnSqg6u, uintikumm8U, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolLLwBde8.getReward.call({from: accounts[3]});
		const uint256GrSBsZ = await ETFXPoolLLwBde8.stake.call(uinteyD1ixg, {from: accounts[0]});
		const uint256GFca6Qq = await ETFXPoolLLwBde8.withdraw.call(uintNPKpDVs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMarqFu2, true)
		await expect(ETFXPoolLLwBde8.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltJY1WD = await ETFXPool.new({from: accounts[1]});
		const uinttNwjWe3 = BigInt("576")
		const addressJT8yQBB = accounts[2]
		const addressY93rcMF = accounts[4]
		const uint256ITlohPj = await ETFXPooltJY1WD.stake.call(uinttNwjWe3, {from: accounts[4]});
		const uint256MvlNYR2 = await ETFXPooltJY1WD.balanceOf.call(addressJT8yQBB, {from: accounts[1]});
		const addresssivwsgN = await ETFXPooltJY1WD.transferOwnership.call(addressY93rcMF, {from: accounts[2]});

		await expect(ETFXPooltJY1WD.stake.call(uinttNwjWe3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqYA3stg = await ETFXPool.new({from: accounts[2]});
		const addressg89IaMK = accounts[0]
		const addressKxcPJU = accounts[2]
		const addressciNSUmU = accounts[2]
		const uint256YJGcW9b = await ETFXPoolqYA3stg.balanceOf.call(addressg89IaMK, {from: accounts[4]});
		const stringfTVIxZ = await ETFXPoolqYA3stg.symbol.call({from: accounts[2]});
		await ETFXPoolqYA3stg.getReward.call({from: accounts[2]});
		const uint256X9TIguU = await ETFXPoolqYA3stg.rewardPerToken.call({from: accounts[3]});
		const uint256wQbbSY0 = await ETFXPoolqYA3stg.allowance.call(addressciNSUmU, addressKxcPJU, {from: accounts[3]});
		await ETFXPoolqYA3stg.getReward.call({from: accounts[2]});

		assert.equal(stringfTVIxZ, "FETFX")
		assert.equal(uint256YJGcW9b, BigInt("0"))
		await expect(ETFXPoolqYA3stg.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqlx8RhO = await ETFXPool.new({from: accounts[4]});
		const uintkGgKQo4 = BigInt("1394")
		const addresshM349O4 = accounts[3]
		const uintuwSInvH = BigInt("1792")
		const addressNrwXVdO = accounts[3]
		const addressYFs8FNa = accounts[0]
		const boolwf33Ys = await ETFXPoolqlx8RhO.increaseAllowance.call(addresshM349O4, uintkGgKQo4, {from: accounts[1]});
		const boolBJemqKD = await ETFXPoolqlx8RhO.transferFrom.call(addressYFs8FNa, addressNrwXVdO, uintuwSInvH, {from: accounts[1]});
		const stringuBDD6JQ = await ETFXPoolqlx8RhO.symbol.call({from: accounts[1]});

		assert.equal(boolwf33Ys, true)
		await expect(ETFXPoolqlx8RhO.transferFrom.call(addressYFs8FNa, addressNrwXVdO, uintuwSInvH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKzGtqRC = await ETFXPool.new({from: accounts[3]});
		const addressHLkAgpe = accounts[3]
		const addresshpzss6 = accounts[4]
		const uintVj7PkqG = BigInt("801")
		const addresselaSLDE = accounts[1]
		const addresshBeWZF8 = accounts[1]
		const addressOyjUK1t = accounts[0]
		const uint256iP0sO0h = await ETFXPoolKzGtqRC.balanceOf.call(addressHLkAgpe, {from: accounts[3]});
		const addressGrYCAPJ = await ETFXPoolKzGtqRC.transferOwnership.call(addresshpzss6, {from: accounts[1]});
		const uint256PPeEWxJ = await ETFXPoolKzGtqRC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolkVgKCu5 = await ETFXPoolKzGtqRC.increaseAllowance.call(addresselaSLDE, uintVj7PkqG, {from: accounts[1]});
		const uint256ZpVTD8 = await ETFXPoolKzGtqRC.allowance.call(addressOyjUK1t, addresshBeWZF8, {from: accounts[0]});

		assert.equal(uint256iP0sO0h, BigInt("0"))
		await expect(ETFXPoolKzGtqRC.transferOwnership.call(addresshpzss6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleiSpai7 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvxd8fN = accounts[0]
		const uintRMIj8Q7 = BigInt("2038")
		const addresseyqxKVx = accounts[5]
		await ETFXPooleiSpai7.renounceOwnership.call({from: accounts[1]});
		const uint256DELkBm = await ETFXPooleiSpai7.balanceOf.call(addressvxd8fN, {from: "0x0000000000000000000000000000000000000001"});
		const boolwFZ7dc = await ETFXPooleiSpai7.approve.call(addresseyqxKVx, uintRMIj8Q7, {from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvLaAHKL = await ETFXPool.new({from: accounts[2]});
		const addressQZGoxYq = await ETFXPoolvLaAHKL.owner.call({from: accounts[0]});
		const uint256CgbM0ff = await ETFXPoolvLaAHKL.totalSupply.call({from: accounts[3]});
		const uint2561cuZif = await ETFXPoolvLaAHKL.rewardPerToken.call({from: accounts[2]});
		const stringriMhqOJ = await ETFXPoolvLaAHKL.symbol.call({from: accounts[4]});
		await ETFXPoolvLaAHKL.nonReentrant.call({from: accounts[2]});

		assert.equal(addressQZGoxYq, 0x452C64f4d40d4D71d46d7eA257EA4a6A4F395b69)
		assert.equal(stringriMhqOJ, "FETFX")
		assert.equal(uint2561cuZif, BigInt("0"))
		assert.equal(uint256CgbM0ff, BigInt("0"))
		await expect(ETFXPoolvLaAHKL.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPniUXfh = await ETFXPool.new({from: accounts[2]});
		const uintfmTq5pe = BigInt("384")
		const address2jt7BJ = accounts[0]
		const uintc8QQG6s = BigInt("779")
		const addressU6pmnuP = "0x0000000000000000000000000000000000000001"
		const uintixSI280 = BigInt("795")
		const boolEF2o3at = await ETFXPoolPniUXfh.approve.call(address2jt7BJ, uintfmTq5pe, {from: "0x0000000000000000000000000000000000000001"});
		const booln2tw8N = await ETFXPoolPniUXfh.transfer.call(addressU6pmnuP, uintc8QQG6s, {from: accounts[1]});
		const uint256s41rZHN = await ETFXPoolPniUXfh.withdraw.call(uintixSI280, {from: accounts[2]});
		const stringuDxSIps = await ETFXPoolPniUXfh.symbol.call({from: accounts[2]});

		assert.equal(boolEF2o3at, true)
		await expect(ETFXPoolPniUXfh.transfer.call(addressU6pmnuP, uintc8QQG6s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBndScl1 = await ETFXPool.new({from: accounts[3]});
		const addressitWvuX = accounts[1]
		const uintjkCu3zC = BigInt("2041")
		const addressiXSqHfB = accounts[3]
		const addressOtoOYzV = accounts[1]
		const addressd7PnZoa = accounts[4]
		const addresstz0mA77 = await ETFXPoolBndScl1.transferOwnership.call(addressitWvuX, {from: accounts[3]});
		await ETFXPoolBndScl1.onlyOwner.call({from: accounts[2]});
		const uint256sM7grSd = await ETFXPoolBndScl1.stake.call(uintjkCu3zC, {from: accounts[3]});
		const uint256Ury9hb8 = await ETFXPoolBndScl1.balanceOf.call(addressiXSqHfB, {from: accounts[0]});
		const uint256BuxVgMg = await ETFXPoolBndScl1.earned.call(addressOtoOYzV, {from: accounts[1]});
		const uint256wmWjoJu = await ETFXPoolBndScl1.earned.call(addressd7PnZoa, {from: accounts[2]});

		await expect(ETFXPoolBndScl1.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLLwBde8 = await ETFXPool.new({from: accounts[5]});
		const uintRPAUK9 = BigInt("75")
		const addresstoIvZGc = accounts[0]
		const uintaYTWba8 = BigInt("1602")
		const boolMarqFu2 = await ETFXPoolLLwBde8.approve.call(addresstoIvZGc, uintRPAUK9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GFca6Qq = await ETFXPoolLLwBde8.withdraw.call(uintaYTWba8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMarqFu2, true)
		await expect(ETFXPoolLLwBde8.withdraw.call(uintaYTWba8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIfyu0gG = await ETFXPool.new({from: accounts[1]});
		const uintOhx1D4D = BigInt("117")
		const addressmJHE4tu = accounts[3]
		const addressGf03BGZ = accounts[4]
		const addressOYEvRdJ = accounts[5]
		const uintktp8eYp = BigInt("368")
		const addressL7RNvEi = accounts[2]
		const addressHXNYAOa = accounts[2]
		const boolfXfYFg4 = await ETFXPoolIfyu0gG.approve.call(addressmJHE4tu, uintOhx1D4D, {from: accounts[0]});
		const uint256mmimkHD = await ETFXPoolIfyu0gG.allowance.call(addressOYEvRdJ, addressGf03BGZ, {from: accounts[0]});
		await ETFXPoolIfyu0gG.onlyOwner.call({from: accounts[1]});
		const stringiSh179 = await ETFXPoolIfyu0gG.symbol.call({from: accounts[2]});
		const boolCajuux4 = await ETFXPoolIfyu0gG.transferFrom.call(addressHXNYAOa, addressL7RNvEi, uintktp8eYp, {from: accounts[2]});
		await ETFXPoolIfyu0gG.nonReentrant.call({from: accounts[2]});

		assert.equal(boolfXfYFg4, true)
		assert.equal(uint256mmimkHD, BigInt("0"))
		await expect(ETFXPoolIfyu0gG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLLwBde8 = await ETFXPool.new({from: accounts[5]});
		const uintBVrXYZ = BigInt("82")
		const addressn6nttt3 = accounts[0]
		const addressMPIjtyG = accounts[0]
		const uintZ818IRP = BigInt("1149")
		const boolMarqFu2 = await ETFXPoolLLwBde8.approve.call(addressn6nttt3, uintBVrXYZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint83Nx9j6 = await ETFXPoolLLwBde8.decimals.call({from: accounts[1]});
		const uint256hpr3hz = await ETFXPoolLLwBde8.rewardPerToken.call({from: accounts[3]});
		const addressfk4ycN = await ETFXPoolLLwBde8.transferOwnership.call(addressMPIjtyG, {from: accounts[1]});
		await ETFXPoolLLwBde8.getReward.call({from: accounts[3]});
		const uint256GrSBsZ = await ETFXPoolLLwBde8.stake.call(uintZ818IRP, {from: accounts[0]});
		await ETFXPoolLLwBde8.onlyOwner.call({from: accounts[1]});

		assert.equal(boolMarqFu2, true)
		assert.equal(uint256hpr3hz, BigInt("0"))
		assert.equal(uint83Nx9j6, BigInt("8"))
		await expect(ETFXPoolLLwBde8.transferOwnership.call(addressMPIjtyG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLLwBde8 = await ETFXPool.new({from: accounts[5]});
		const uintiwpiAIf = BigInt("75")
		const addressNhJQVVt = accounts[1]
		const uintW7wVd4 = BigInt("1602")
		const boolMarqFu2 = await ETFXPoolLLwBde8.approve.call(addressNhJQVVt, uintiwpiAIf, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolLLwBde8.exit.call({from: accounts[1]});
		const uint256GFca6Qq = await ETFXPoolLLwBde8.withdraw.call(uintW7wVd4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMarqFu2, true)
		await expect(ETFXPoolLLwBde8.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringL2XueM = "hzbDxMBPhIKABQ9zGHD78qYftEhNTwqB34Qddpb7TtSOIFGdWdbj5387RJgjJqqgOLHma5QEo3vQjr25yFDyk5DzRYKdGLcLl"
		const stringQOQqcMb = "sk7kUatiQ57HqyjgQ0rufrGrRgkYSl2e3LWChHonKEKP9xFpBGcjOMLzTP82QyWUIzudn3bnBYNle74Owgkn1H9gQIAGKbb"
		const uintkJFEwoF = BigInt("115")
		const ETFXPoolVEzG6up = await ETFXPool.new(stringL2XueM, stringQOQqcMb, uintkJFEwoF, {from: accounts[3]});
		const addresszGFHBQ8 = accounts[4]
		const uint9gNDyl = BigInt("1593")
		const addressrZTi6KL = accounts[3]
		const uint256kpQIo6 = await ETFXPoolVEzG6up.balanceOf.call(addresszGFHBQ8, {from: accounts[1]});
		const boolObKtIcV = await ETFXPoolVEzG6up.increaseAllowance.call(addressrZTi6KL, uint9gNDyl, {from: accounts[1]});
		const stringyCeau6v = await ETFXPoolVEzG6up.name.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQTW6Rtk = await ETFXPool.new({from: accounts[3]});
		const addressD9Ew9S7 = accounts[4]
		const uint256Ml7Znio = await ETFXPoolQTW6Rtk.balanceOf.call(addressD9Ew9S7, {from: accounts[5]});
		const stringIUUYQhb = await ETFXPoolQTW6Rtk.name.call({from: accounts[3]});

		assert.equal(stringIUUYQhb, "ETFX-FARM")
		assert.equal(uint256Ml7Znio, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQTW6Rtk = await ETFXPool.new({from: accounts[3]});
		const uintcV4Fl0 = BigInt("1978")
		const addressI7iotaG = accounts[3]
		const uint256lrDynBi = await ETFXPoolQTW6Rtk.rewardPerToken.call({from: accounts[0]});
		await ETFXPoolQTW6Rtk.renounceOwnership.call({from: accounts[3]});
		const booltjcd3F = await ETFXPoolQTW6Rtk.approve.call(addressI7iotaG, uintcV4Fl0, {from: accounts[1]});

		assert.equal(uint256lrDynBi, BigInt("0"))
		await expect(ETFXPoolQTW6Rtk.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})