const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeneCfiVue = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressezyszvo = accounts[0]
		const uintTPbUX70 = BigInt("1578")
		const addressmd3pjfB = accounts[1]
		const addressxEZvLqx = await CryptoSecureBankTokeneCfiVue.addBlackList.call(addressezyszvo, {from: accounts[4]});
		const boolWIdbhJQ = await CryptoSecureBankTokeneCfiVue.transfer.call(addressmd3pjfB, uintTPbUX70, {from: accounts[4]});
		await CryptoSecureBankTokeneCfiVue.whenNotPaused.call({from: accounts[1]});

		assert.equal(boolWIdbhJQ, true)
		await expect(CryptoSecureBankTokeneCfiVue.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZTSGKWu = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintFoSrr21 = BigInt("149")
		const uintP3nqXQZ = BigInt("1082")
		const addressjPpo9vB = accounts[3]
		const uintp97XGMe = await CryptoSecureBankTokenZTSGKWu.setParams.call(uintP3nqXQZ, uintFoSrr21, {from: accounts[4]});
		const addresssruLOf = await CryptoSecureBankTokenZTSGKWu.destroyBlackFunds.call(addressjPpo9vB, {from: accounts[1]});

		await expect(CryptoSecureBankTokenZTSGKWu.setParams.call(uintP3nqXQZ, uintFoSrr21, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintRh62nge = BigInt("394")
		const addressD7pBuko = accounts[2]
		const addressMx8gGYT = accounts[0]
		const address47R4Q9 = accounts[5]
		const addressGc1e8jJ = accounts[0]
		const addressarZxhoA = accounts[4]
		const boolFF7fxG = await CryptoSecureBankTokenzyzUddp.transferFrom.call(addressMx8gGYT, addressD7pBuko, uintRh62nge, {from: accounts[0]});
		const uintXT222zw = await CryptoSecureBankTokenzyzUddp.allowance.call(addressGc1e8jJ, address47R4Q9, {from: accounts[5]});
		const addresskqUw3M0 = await CryptoSecureBankTokenzyzUddp.destroyBlackFunds.call(addressarZxhoA, {from: accounts[0]});

		await expect(CryptoSecureBankTokenzyzUddp.transferFrom.call(addressMx8gGYT, addressD7pBuko, uintRh62nge, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressYtPgzWi = accounts[1]
		const addressbWPHUdq = "0x0000000000000000000000000000000000000001"
		const uintWKPESc = await CryptoSecureBankTokenCsT9T32.allowance.call(addressbWPHUdq, addressYtPgzWi, {from: accounts[1]});
		await CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]});

		assert.equal(uintWKPESc, BigInt("0"))
		await expect(CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennAJZEH7 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXabeLn = BigInt("876")
		const addressGO95SUb = accounts[1]
		const addressMoUXl2 = accounts[5]
		const uintYyU3PmZ = BigInt("1622")
		const addresslBakf2M = accounts[1]
		const addressYq3ysNj = accounts[4]
		const boolAzDk44M = await CryptoSecureBankTokennAJZEH7.transferFrom.call(addressMoUXl2, addressGO95SUb, uintXabeLn, {from: accounts[1]});
		await CryptoSecureBankTokennAJZEH7.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const booljmhLDQ = await CryptoSecureBankTokennAJZEH7.approve.call(addresslBakf2M, uintYyU3PmZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressPNMQzmj = await CryptoSecureBankTokennAJZEH7.destroyBlackFunds.call(addressYq3ysNj, {from: accounts[3]});
		const uintsYbZKd8 = await CryptoSecureBankTokennAJZEH7.totalSupply.call({from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHsuzhym = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintlUJGGO7 = BigInt("709")
		const addressn0H3L3 = accounts[4]
		const addressq0sFkaM = accounts[3]
		const uintkXt8Q6h = BigInt("1547")
		const addressJlAmAPG = accounts[1]
		const addressliES5p = accounts[3]
		const addressTwf8Do2 = accounts[3]
		const uintvXfQly = BigInt("1672")
		const uintVY4ojD = BigInt("1965")
		const addresssLZQTau = accounts[0]
		const boolvb5OXNa = await CryptoSecureBankTokenHsuzhym.approve.call(addressn0H3L3, uintlUJGGO7, {from: accounts[4]});
		const addresssmfJtNM = await CryptoSecureBankTokenHsuzhym.addBlackList.call(addressq0sFkaM, {from: accounts[0]});
		const boolCQKvnL = await CryptoSecureBankTokenHsuzhym.approve.call(addressJlAmAPG, uintkXt8Q6h, {from: "0x0000000000000000000000000000000000000001"});
		const uintcUI3f8C = await CryptoSecureBankTokenHsuzhym.allowance.call(addressTwf8Do2, addressliES5p, {from: accounts[1]});
		const uintLu8ZpfB = await CryptoSecureBankTokenHsuzhym.onlyPayloadSize.call(uintvXfQly, {from: accounts[3]});
		const boolIzE3C52 = await CryptoSecureBankTokenHsuzhym.transfer.call(addresssLZQTau, uintVY4ojD, {from: accounts[4]});

		assert.equal(boolvb5OXNa, true)
		await expect(CryptoSecureBankTokenHsuzhym.addBlackList.call(addressq0sFkaM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressKPMSVOk = accounts[1]
		const addressB7N7baj = accounts[1]
		const addressOIiHuwF = "0x0000000000000000000000000000000000000000"
		const uintF6JMd0y = await CryptoSecureBankTokenCsT9T32.balanceOf.call(addressKPMSVOk, {from: accounts[2]});
		const uintWKPESc = await CryptoSecureBankTokenCsT9T32.allowance.call(addressOIiHuwF, addressB7N7baj, {from: accounts[1]});

		assert.equal(uintF6JMd0y, BigInt("0"))
		assert.equal(uintWKPESc, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDwYxIaN = await CryptoSecureBankToken.new({from: accounts[0]});
		const address5xeP8U = accounts[0]
		const addressmmk5QD5 = accounts[1]
		const addressELDE60h = accounts[4]
		const uintL3OVssK = BigInt("946")
		const addressBac0qVM = await CryptoSecureBankTokenDwYxIaN.transferOwnership.call(address5xeP8U, {from: "0x0000000000000000000000000000000000000001"});
		const uintJ8M2WK6 = await CryptoSecureBankTokenDwYxIaN.balanceOf.call(addressmmk5QD5, {from: accounts[1]});
		const addressuwT8aZJ = await CryptoSecureBankTokenDwYxIaN.transferOwnership.call(addressELDE60h, {from: accounts[4]});
		await CryptoSecureBankTokenDwYxIaN.pause.call({from: accounts[0]});
		const boolu5sguvD = await CryptoSecureBankTokenDwYxIaN.redeem.call(uintL3OVssK, {from: accounts[3]});

		await expect(CryptoSecureBankTokenDwYxIaN.transferOwnership.call(address5xeP8U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressZmkILUR = accounts[1]
		const addresslUzfZyf = accounts[1]
		const addressf3PhKze = "0x00000000000000000000000000000000000000-1"
		const uintF6JMd0y = await CryptoSecureBankTokenCsT9T32.balanceOf.call(addressZmkILUR, {from: accounts[2]});
		const uintWKPESc = await CryptoSecureBankTokenCsT9T32.allowance.call(addressf3PhKze, addresslUzfZyf, {from: accounts[1]});

		assert.equal(uintF6JMd0y, BigInt("0"))
		await expect(CryptoSecureBankTokenCsT9T32.allowance.call(addressf3PhKze, addresslUzfZyf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressTLvXchp = "0x0000000000000000000000000000000000000001"
		const address3Ep1qr = accounts[5]
		const addresslDbmSYf = accounts[0]
		const uintnMClbx = await CryptoSecureBankTokenzyzUddp.totalSupply.call({from: accounts[2]});
		const uintKZ5Yf3f = await CryptoSecureBankTokenzyzUddp.balanceOf.call(addressTLvXchp, {from: accounts[0]});
		const uintXT222zw = await CryptoSecureBankTokenzyzUddp.allowance.call(addresslDbmSYf, address3Ep1qr, {from: accounts[5]});

		assert.equal(uintKZ5Yf3f, BigInt("0"))
		assert.equal(uintXT222zw, BigInt("0"))
		assert.equal(uintnMClbx, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressUMSHve = accounts[5]
		const addressCbYUhZD = accounts[2]
		const uintrRoYhUY = BigInt("521")
		const addresswl0d38S = "0x0000000000000000000000000000000000000001"
		const uintjgqhvYM = BigInt("181")
		const addressQBsz8HR = accounts[5]
		const uintXT222zw = await CryptoSecureBankTokenzyzUddp.allowance.call(addressCbYUhZD, addressUMSHve, {from: accounts[5]});
		const boolhBeCDw3 = await CryptoSecureBankTokenzyzUddp.approve.call(addresswl0d38S, uintrRoYhUY, {from: accounts[5]});
		const addressgw4nops = await CryptoSecureBankTokenzyzUddp.getOwner.call({from: accounts[2]});
		const booltjuEnF = await CryptoSecureBankTokenzyzUddp.transfer.call(addressQBsz8HR, uintjgqhvYM, {from: accounts[4]});

		assert.equal(addressgw4nops, 0xE06bABaAf640c6670508031EADcA0e2B6719aE18)
		assert.equal(boolhBeCDw3, true)
		assert.equal(uintXT222zw, BigInt("0"))
		await expect(CryptoSecureBankTokenzyzUddp.transfer.call(addressQBsz8HR, uintjgqhvYM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressrk0AZY4 = accounts[1]
		const addressq5bcgJ = accounts[6]
		const addressQK1qny8 = accounts[0]
		const boolRsdjFjd = await CryptoSecureBankTokenzyzUddp.getBlackListStatus.call(addressrk0AZY4, {from: accounts[5]});
		const uintS6Dag0R = await CryptoSecureBankTokenzyzUddp.totalSupply.call({from: accounts[0]});
		const uintXT222zw = await CryptoSecureBankTokenzyzUddp.allowance.call(addressQK1qny8, addressq5bcgJ, {from: accounts[5]});
		const uintSArEEDA = await CryptoSecureBankTokenzyzUddp.totalSupply.call({from: accounts[2]});

		assert.equal(boolRsdjFjd, false)
		assert.equal(uintS6Dag0R, BigInt("100000000000000000000000000"))
		assert.equal(uintSArEEDA, BigInt("100000000000000000000000000"))
		assert.equal(uintXT222zw, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressz1MwsNR = "0x0000000000000000000000000000000000000001"
		const addressvQgnJtO = accounts[1]
		const addressdAzNQ0V = await CryptoSecureBankTokenCsT9T32.transferOwnership.call(addressz1MwsNR, {from: accounts[3]});
		const addressTxTLO16 = await CryptoSecureBankTokenCsT9T32.destroyBlackFunds.call(addressvQgnJtO, {from: accounts[2]});
		await CryptoSecureBankTokenCsT9T32.whenNotPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenCsT9T32.destroyBlackFunds.call(addressvQgnJtO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTUlLzud = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintasNKufd = BigInt("379")
		const addressOnj5jvT = accounts[4]
		const addressyLbe6f = "0x0000000000000000000000000000000000000001"
		const addressAkfvuPv = await CryptoSecureBankTokenTUlLzud.getOwner.call({from: accounts[1]});
		const booloLlMGfx = await CryptoSecureBankTokenTUlLzud.approve.call(addressOnj5jvT, uintasNKufd, {from: "0x0000000000000000000000000000000000000001"});
		const addressOVr1fD4 = await CryptoSecureBankTokenTUlLzud.setOwner2.call(addressyLbe6f, {from: accounts[0]});
		const addressdMNWhg = await CryptoSecureBankTokenTUlLzud.getOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressAkfvuPv, 0x5F3A17ddc889610178F7742731910476AE4f8D51)
		assert.equal(addressdMNWhg, 0x5F3A17ddc889610178F7742731910476AE4f8D51)
		assert.equal(booloLlMGfx, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintf1d3wdG = BigInt("396")
		const addressI90YK4H = accounts[1]
		await CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]});
		const addressfofMjoP = await CryptoSecureBankTokenCsT9T32.getOwner.call({from: accounts[3]});
		const boolfFCiW9g = await CryptoSecureBankTokenCsT9T32.redeem.call(uintf1d3wdG, {from: accounts[3]});
		const addressvVRtZQR = await CryptoSecureBankTokenCsT9T32.removeBlackList.call(addressI90YK4H, {from: accounts[1]});

		await expect(CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresslc8qnBY = accounts[1]
		const uintfvWqDx = BigInt("394")
		const addressIPWj7s6 = accounts[3]
		const addressE3jy0TZ = accounts[0]
		const uintXoV6G2e = BigInt("502")
		const addressJ60eDZo = accounts[1]
		const addressn6Y89GD = await CryptoSecureBankTokenzyzUddp.removeBlackList.call(addresslc8qnBY, {from: accounts[1]});
		const boolFF7fxG = await CryptoSecureBankTokenzyzUddp.transferFrom.call(addressE3jy0TZ, addressIPWj7s6, uintfvWqDx, {from: accounts[0]});
		const bool1vukVA = await CryptoSecureBankTokenzyzUddp.approve.call(addressJ60eDZo, uintXoV6G2e, {from: accounts[1]});

		await expect(CryptoSecureBankTokenzyzUddp.transferFrom.call(addressE3jy0TZ, addressIPWj7s6, uintfvWqDx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressU0PpT4 = accounts[3]
		const uint1MsVgJ = BigInt("3")
		const addressFM9RKfq = accounts[0]
		const address5tJE3Z = accounts[1]
		const uintpquG6p5 = BigInt("604")
		const addressNURTKsT = accounts[2]
		const boolEQMaoU1 = await CryptoSecureBankTokenzyzUddp.deprecate.call(addressU0PpT4, {from: accounts[1]});
		const boolqvTPdS9 = await CryptoSecureBankTokenzyzUddp.transferFrom.call(address5tJE3Z, addressFM9RKfq, uint1MsVgJ, {from: accounts[4]});
		const boolXGBqg3N = await CryptoSecureBankTokenzyzUddp.approve.call(addressNURTKsT, uintpquG6p5, {from: accounts[2]});

		assert.equal(boolEQMaoU1, true)
		await expect(CryptoSecureBankTokenzyzUddp.transferFrom.call(address5tJE3Z, addressFM9RKfq, uint1MsVgJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresswRouRR = accounts[6]
		const addressgzfiuXC = accounts[0]
		const addressU95bKSG = accounts[0]
		const uintXT222zw = await CryptoSecureBankTokenzyzUddp.allowance.call(addressgzfiuXC, addresswRouRR, {from: accounts[5]});
		const addressVOfunpl = await CryptoSecureBankTokenzyzUddp.destroyBlackFunds.call(addressU95bKSG, {from: accounts[1]});

		assert.equal(uintXT222zw, BigInt("0"))
		await expect(CryptoSecureBankTokenzyzUddp.destroyBlackFunds.call(addressU95bKSG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCsT9T32 = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintxPGmK2H = BigInt("1505")
		const uintEZqTQ7S = BigInt("1885")
		const uintrhECV5l = await CryptoSecureBankTokenCsT9T32.setParams.call(uintEZqTQ7S, uintxPGmK2H, {from: accounts[3]});
		await CryptoSecureBankTokenCsT9T32.pause.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenCsT9T32.setParams.call(uintEZqTQ7S, uintxPGmK2H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzyzUddp = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintcUGZNFo = BigInt("0")
		const addressKmE8aY5 = accounts[0]
		const addresszl8pAOE = accounts[0]
		const uint063ILB = BigInt("458")
		const boolqvTPdS9 = await CryptoSecureBankTokenzyzUddp.transferFrom.call(addresszl8pAOE, addressKmE8aY5, uintcUGZNFo, {from: accounts[4]});
		const boolXInanwH = await CryptoSecureBankTokenzyzUddp.redeem.call(uint063ILB, {from: accounts[0]});

		assert.equal(boolqvTPdS9, true)
		await expect(CryptoSecureBankTokenzyzUddp.redeem.call(uint063ILB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})