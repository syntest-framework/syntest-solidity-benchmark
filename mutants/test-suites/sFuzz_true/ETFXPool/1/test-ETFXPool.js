const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringeGQRinX = "7uxUV0"
		const stringVFAzXMK = "G6e5"
		const uinttVyN2Az = BigInt("123")
		const ETFXPoolROSspo3 = await ETFXPool.new(stringeGQRinX, stringVFAzXMK, uinttVyN2Az, {from: accounts[3]});
		const addressKcuOqCn = accounts[2]
		const addressmg7gZt = accounts[3]
		const addressYjWVwOz = accounts[5]
		const uint256Xz9G4yq = await ETFXPoolROSspo3.balanceOf.call(addressKcuOqCn, {from: accounts[4]});
		const uint256x38zHyi = await ETFXPoolROSspo3.allowance.call(addressYjWVwOz, addressmg7gZt, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltI06OGy = await ETFXPool.new({from: accounts[1]});
		const uintbtJK5n = BigInt("351")
//		await ETFXPooltI06OGy.onlyOwner.call({from: accounts[3]});
//		const uint256DxGbcFW = await ETFXPooltI06OGy.stake.call(uintbtJK5n, {from: accounts[4]});
//		await ETFXPooltI06OGy.renounceOwnership.call({from: accounts[0]});

		await expect(ETFXPooltI06OGy.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintopn8Ypx = BigInt("1408")
		const addressSSTpSvo = "0x0000000000000000000000000000000000000001"
		const addressmzqiJNI = accounts[1]
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressSSTpSvo, uintopn8Ypx, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256g8cb4xX = await ETFXPoolUzpA1RD.balanceOf.call(addressmzqiJNI, {from: accounts[2]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		await expect(ETFXPoolUzpA1RD.transfer.call(addressSSTpSvo, uintopn8Ypx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEkWKR1K = await ETFXPool.new({from: accounts[4]});
		const addressVib8WHS = accounts[2]
//		const addressAX1hXKW = await ETFXPoolEkWKR1K.transferOwnership.call(addressVib8WHS, {from: accounts[5]});
//		await ETFXPoolEkWKR1K.onlyOwner.call({from: accounts[0]});

		await expect(ETFXPoolEkWKR1K.transferOwnership.call(addressVib8WHS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooliei5FOc = await ETFXPool.new({from: accounts[5]});
		const uintuufWA9x = BigInt("530")
		const addressc4HOFmd = accounts[1]
//		await ETFXPooliei5FOc.exit.call({from: accounts[0]});
//		await ETFXPooliei5FOc.onlyOwner.call({from: accounts[4]});
//		const boolSE70S4p = await ETFXPooliei5FOc.decreaseAllowance.call(addressc4HOFmd, uintuufWA9x, {from: accounts[1]});

		await expect(ETFXPooliei5FOc.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloLjDGS0 = await ETFXPool.new({from: accounts[3]});
		const uintHWD8SHY = BigInt("1219")
		const addressHmwWr0k = accounts[3]
		const addressBunU4Kv = accounts[2]
		const addressBE7NeI9 = accounts[3]
//		await ETFXPooloLjDGS0.getReward.call({from: accounts[0]});
//		const uint256DCAYiAC = await ETFXPooloLjDGS0.stake.call(uintHWD8SHY, {from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPooloLjDGS0.getReward.call({from: accounts[2]});
//		const uint256e6qa07 = await ETFXPooloLjDGS0.earned.call(addressHmwWr0k, {from: accounts[2]});
//		const uint256Jaa3WyR = await ETFXPooloLjDGS0.allowance.call(addressBE7NeI9, addressBunU4Kv, {from: accounts[0]});

		await expect(ETFXPooloLjDGS0.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintF8ATuwE = BigInt("1323")
		const addressx6RwWV = accounts[3]
		const uintc5vtsFn = BigInt("1408")
		const addresstW8JuBz = "0x0000000000000000000000000000000000000001"
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
		const boolJv7aca7 = await ETFXPoolUzpA1RD.increaseAllowance.call(addressx6RwWV, uintF8ATuwE, {from: accounts[4]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addresstW8JuBz, uintc5vtsFn, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		assert.equal(boolJv7aca7, true)
		await expect(ETFXPoolUzpA1RD.transfer.call(addresstW8JuBz, uintc5vtsFn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolHx90Uqm = await ETFXPool.new({from: accounts[3]});
		const uintGFYVyAA = BigInt("629")
		const addressN9w7oPq = accounts[4]
		const uintZ1jp7th = BigInt("446")
		const uintjNXYu4C = BigInt("1536")
//		const boolykHbAqY = await ETFXPoolHx90Uqm.decreaseAllowance.call(addressN9w7oPq, uintGFYVyAA, {from: accounts[0]});
//		await ETFXPoolHx90Uqm.getReward.call({from: accounts[0]});
//		const uint256gMlJROK = await ETFXPoolHx90Uqm.stake.call(uintZ1jp7th, {from: accounts[0]});
//		const uint256UyDDshC = await ETFXPoolHx90Uqm.withdraw.call(uintjNXYu4C, {from: accounts[3]});

		await expect(ETFXPoolHx90Uqm.decreaseAllowance.call(addressN9w7oPq, uintGFYVyAA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintXvyoeI9 = BigInt("554")
		const uintAP5Dv6u = BigInt("1408")
		const addresstAIJfoC = "0x0000000000000000000000000000000000000001"
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const uint256fEctY1 = await ETFXPoolUzpA1RD.withdraw.call(uintXvyoeI9, {from: accounts[4]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addresstAIJfoC, uintAP5Dv6u, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.exit.call({from: accounts[5]});
//		await ETFXPoolUzpA1RD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		await expect(ETFXPoolUzpA1RD.withdraw.call(uintXvyoeI9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintSXgJr1G = BigInt("1408")
		const addressD0f6pq = "0x0000000000000000000000000000000000000001"
		const uint8EpMQMfK = await ETFXPoolUzpA1RD.decimals.call({from: accounts[2]});
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressD0f6pq, uintSXgJr1G, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		assert.equal(uint8EpMQMfK, BigInt("8"))
		await expect(ETFXPoolUzpA1RD.transfer.call(addressD0f6pq, uintSXgJr1G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintKG7fZUl = BigInt("43")
		const addressC89xcst = accounts[3]
		const addressVZ7iykb = accounts[1]
		const uintsLUqWqL = BigInt("1408")
		const addressxPZivAx = "0x0000000000000000000000000000000000000002"
		const uinteTgnxiI = BigInt("338")
		const addressksNQiyD = accounts[1]
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const boolce0cgFC = await ETFXPoolUzpA1RD.transferFrom.call(addressVZ7iykb, addressC89xcst, uintKG7fZUl, {from: accounts[1]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressxPZivAx, uintsLUqWqL, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHwzFxoQ = await ETFXPoolUzpA1RD.approve.call(addressksNQiyD, uinteTgnxiI, {from: accounts[4]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		await expect(ETFXPoolUzpA1RD.transferFrom.call(addressVZ7iykb, addressC89xcst, uintKG7fZUl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintmNEzeRk = BigInt("1055")
		const addressCZiLl2 = accounts[4]
		const uintNbOTtvf = BigInt("1408")
		const addressjuVSqu = "0x0000000000000000000000000000000000000001"
		const addressjBm7L6K = accounts[0]
		const addressbp5ddp8 = accounts[2]
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
		const booldNm6oHA = await ETFXPoolUzpA1RD.approve.call(addressCZiLl2, uintmNEzeRk, {from: accounts[3]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressjuVSqu, uintNbOTtvf, {from: accounts[3]});
//		const uint256Oi2Jwgh = await ETFXPoolUzpA1RD.allowance.call(addressbp5ddp8, addressjBm7L6K, {from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUzpA1RD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		assert.equal(booldNm6oHA, true)
		await expect(ETFXPoolUzpA1RD.transfer.call(addressjuVSqu, uintNbOTtvf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintsc9WlFa = BigInt("1603")
		const uintBzK9tUg = BigInt("1426")
		const addressDk52Etl = "0x0000000000000000000000000000000000000001"
//		const uint2566TOv3O = await ETFXPoolUzpA1RD.stake.call(uintsc9WlFa, {from: accounts[2]});
//		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressDk52Etl, uintBzK9tUg, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		await expect(ETFXPoolUzpA1RD.stake.call(uintsc9WlFa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uintByhiNkG = BigInt("1408")
		const addressXmL2Lnr = "0x0000000000000000000000000000000000000000"
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressXmL2Lnr, uintByhiNkG, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});
//		const uint256XcqzT0I = await ETFXPoolUzpA1RD.totalSupply.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		await expect(ETFXPoolUzpA1RD.transfer.call(addressXmL2Lnr, uintByhiNkG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const addressMCXy9VV = accounts[4]
		const addressFuDuC6K = accounts[5]
		const uintmCmOa19 = BigInt("1408")
		const addressGwDq3nK = "0x0000000000000000000000000000000000000001"
		const addressGJ0IPsE = await ETFXPoolUzpA1RD.owner.call({from: accounts[2]});
		const stringxzBpAuM = await ETFXPoolUzpA1RD.name.call({from: accounts[3]});
		const uint256k5Kxdxq = await ETFXPoolUzpA1RD.allowance.call(addressFuDuC6K, addressMCXy9VV, {from: accounts[2]});
//		await ETFXPoolUzpA1RD.exit.call({from: accounts[5]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressGwDq3nK, uintmCmOa19, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressGJ0IPsE, 0x8e7fC0F54d17BA5c13e5Ec11baF2EBE00A59730e)
		assert.equal(stringxzBpAuM, "ETFX-FARM")
		assert.equal(uint256k5Kxdxq, BigInt("0"))
		await expect(ETFXPoolUzpA1RD.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const uint7UOeNH = BigInt("863")
		const addressIQe53vz = accounts[2]
		const uintbFa5jNl = BigInt("1408")
		const addresseV9hcmb = "0x0000000000000000000000000000000000000001"
		const boolqzjpCcl = await ETFXPoolUzpA1RD.approve.call(addressIQe53vz, uint7UOeNH, {from: accounts[3]});
		const stringAcq2OGB = await ETFXPoolUzpA1RD.symbol.call({from: accounts[0]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addresseV9hcmb, uintbFa5jNl, {from: accounts[3]});
//		await ETFXPoolUzpA1RD.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolqzjpCcl, true)
		assert.equal(stringAcq2OGB, "FETFX")
		await expect(ETFXPoolUzpA1RD.transfer.call(addresseV9hcmb, uintbFa5jNl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVEaHcVe = await ETFXPool.new({from: accounts[5]});
		const uint256SXddgXD = await ETFXPoolVEaHcVe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressFqDeEJ8 = await ETFXPoolVEaHcVe.owner.call({from: accounts[2]});

		assert.equal(addressFqDeEJ8, 0x217Db8EE1e0E3428C6379E20a97B408eA842786C)
		assert.equal(uint256SXddgXD, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVEaHcVe = await ETFXPool.new({from: accounts[5]});
		const uint256SXddgXD = await ETFXPoolVEaHcVe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolVEaHcVe.renounceOwnership.call({from: accounts[5]});
//		const addressFqDeEJ8 = await ETFXPoolVEaHcVe.owner.call({from: accounts[2]});
//		const addressSr3ugZY = await ETFXPoolVEaHcVe.owner.call({from: accounts[2]});

		assert.equal(uint256SXddgXD, BigInt("0"))
		await expect(ETFXPoolVEaHcVe.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrujGZM8 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCkS4JZw = BigInt("968")
		const addressQcUWhG = accounts[3]
		const uintXSEkkBr = BigInt("1571")
		const addressUrAeAVk = accounts[0]
		const addressE7NawyD = accounts[0]
		const addressbe7GTuc = accounts[1]
		const uintTeB2oGV = BigInt("1251")
		const addressTQf2aIs = accounts[3]
		const boolZQfU01n = await ETFXPoolrujGZM8.increaseAllowance.call(addressQcUWhG, uintCkS4JZw, {from: accounts[1]});
		const booliBlUFfZ = await ETFXPoolrujGZM8.decreaseAllowance.call(addressUrAeAVk, uintXSEkkBr, {from: accounts[1]});
		const uint256FbmHx5b = await ETFXPoolrujGZM8.allowance.call(addressbe7GTuc, addressE7NawyD, {from: accounts[3]});
		const boolznTVYLe = await ETFXPoolrujGZM8.increaseAllowance.call(addressTQf2aIs, uintTeB2oGV, {from: accounts[3]});
		const uint8F57iGOj = await ETFXPoolrujGZM8.decimals.call({from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUzpA1RD = await ETFXPool.new({from: accounts[2]});
		const addressgdwmEkV = accounts[2]
		const uintVTnEkfu = BigInt("1407")
		const addressofG06yK = "0x0000000000000000000000000000000000000001"
		const addressHmuuhFv = await ETFXPoolUzpA1RD.transferOwnership.call(addressgdwmEkV, {from: accounts[2]});
//		const boolEzmgYZy = await ETFXPoolUzpA1RD.transfer.call(addressofG06yK, uintVTnEkfu, {from: accounts[3]});

		await expect(ETFXPoolUzpA1RD.transfer.call(addressofG06yK, uintVTnEkfu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})