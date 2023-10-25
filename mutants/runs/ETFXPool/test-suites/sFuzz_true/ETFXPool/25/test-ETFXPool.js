const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPool7h7cQ1 = await ETFXPool.new({from: accounts[2]});
		const addressoCmGDvX = accounts[1]
		const uint256VQRRZA3 = await ETFXPool7h7cQ1.earned.call(addressoCmGDvX, {from: accounts[0]});
		await ETFXPool7h7cQ1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPool7h7cQ1.earned.call(addressoCmGDvX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUDlllny = await ETFXPool.new({from: accounts[1]});
		const uintggTWr3u = BigInt("2044")
		const uintaTDw3JG = BigInt("551")
		const addressCEIOGRa = accounts[0]
		const addressewqlcI = accounts[4]
		const addressGNfWWG5 = accounts[2]
		const addressSJiPBzi = accounts[0]
		const addressGVYXAQZ = accounts[0]
		const uint256z6mXwrc = await ETFXPoolUDlllny.rewardPerToken.call({from: accounts[0]});
		const uint256wGrkpRa = await ETFXPoolUDlllny.stake.call(uintggTWr3u, {from: accounts[2]});
		const boollmZgBay = await ETFXPoolUDlllny.decreaseAllowance.call(addressCEIOGRa, uintaTDw3JG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oIGiEtp = await ETFXPoolUDlllny.allowance.call(addressGNfWWG5, addressewqlcI, {from: accounts[3]});
		const uint256KZFE17F = await ETFXPoolUDlllny.earned.call(addressSJiPBzi, {from: accounts[2]});
		const uint256mcHGAha = await ETFXPoolUDlllny.earned.call(addressGVYXAQZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256z6mXwrc, BigInt("0"))
		await expect(ETFXPoolUDlllny.stake.call(uintggTWr3u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringedUHS1p = "P2QTy8dTzYUZsjG0CoFetKi9h5T8vdR0sgKI9rEc"
		const stringFnvbIu2 = "w80wAPjX2WQKPleGxnf3pEKxvMjNVQg4wEx9ln87tGhO3wSOUraurGmY"
		const uintrmIEvaG = BigInt("129")
		const ETFXPoolscTWPtf = await ETFXPool.new(stringedUHS1p, stringFnvbIu2, uintrmIEvaG, {from: accounts[5]});
		const addressrduqUlQ = accounts[4]
		const addressUrygK02 = accounts[2]
		const addressHVB7cSt = "0x0000000000000000000000000000000000000001"
		const addressU3w4jCm = accounts[5]
		const addressejrJ4c9 = accounts[1]
		const addresskgzNk7S = accounts[1]
		const uint256vIqoDfH = await ETFXPoolscTWPtf.allowance.call(addressUrygK02, addressrduqUlQ, {from: accounts[5]});
		const addressEWNy6U = await ETFXPoolscTWPtf.transferOwnership.call(addressHVB7cSt, {from: accounts[4]});
		const uint256Ao2pELk = await ETFXPoolscTWPtf.earned.call(addressU3w4jCm, {from: accounts[4]});
		const uint256JGZpEXQ = await ETFXPoolscTWPtf.allowance.call(addresskgzNk7S, addressejrJ4c9, {from: accounts[4]});
		await ETFXPoolscTWPtf.exit.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooldWGDMkj = await ETFXPool.new({from: accounts[3]});
		const uintgsWWiuZ = BigInt("1773")
		const addressW5DnVgL = accounts[0]
		const uint8VfWRE4 = await ETFXPooldWGDMkj.decimals.call({from: accounts[5]});
		const stringdneLEcr = await ETFXPooldWGDMkj.symbol.call({from: accounts[2]});
		await ETFXPooldWGDMkj.getReward.call({from: accounts[1]});
		await ETFXPooldWGDMkj.exit.call({from: accounts[3]});
		const booluj2m3Y9 = await ETFXPooldWGDMkj.decreaseAllowance.call(addressW5DnVgL, uintgsWWiuZ, {from: accounts[1]});

		assert.equal(stringdneLEcr, "FETFX")
		assert.equal(uint8VfWRE4, BigInt("8"))
		await expect(ETFXPooldWGDMkj.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooluxT6fzI = await ETFXPool.new({from: accounts[2]});
		const uintS1NFI8Y = BigInt("1973")
		const addressjI7l5M2 = accounts[4]
		const uintHRYeKGL = BigInt("967")
		const addressMQQtBvd = accounts[4]
		const addressWSbcMTG = "0x0000000000000000000000000000000000000001"
		const boolRukuRnT = await ETFXPooluxT6fzI.increaseAllowance.call(addressjI7l5M2, uintS1NFI8Y, {from: accounts[1]});
		const boolcZxAt97 = await ETFXPooluxT6fzI.transfer.call(addressMQQtBvd, uintHRYeKGL, {from: accounts[2]});
		const uint256NqkoqNi = await ETFXPooluxT6fzI.earned.call(addressWSbcMTG, {from: accounts[1]});

		assert.equal(boolRukuRnT, true)
		await expect(ETFXPooluxT6fzI.transfer.call(addressMQQtBvd, uintHRYeKGL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZsXS7HQ = await ETFXPool.new({from: accounts[3]});
		const uintM4VRvjb = BigInt("1847")
		const addressPCcNz2d = accounts[4]
		const addressuxydPm = "0x0000000000000000000000000000000000000001"
		const stringlmTYxmg = await ETFXPoolZsXS7HQ.name.call({from: accounts[0]});
		const stringek8wUsq = await ETFXPoolZsXS7HQ.symbol.call({from: accounts[3]});
		const boolnS9WNXB = await ETFXPoolZsXS7HQ.transferFrom.call(addressuxydPm, addressPCcNz2d, uintM4VRvjb, {from: accounts[1]});
		const uint8FclFtNW = await ETFXPoolZsXS7HQ.decimals.call({from: accounts[2]});
		const uint8CmX5qh = await ETFXPoolZsXS7HQ.decimals.call({from: accounts[2]});

		assert.equal(stringek8wUsq, "FETFX")
		assert.equal(stringlmTYxmg, "ETFX-FARM")
		await expect(ETFXPoolZsXS7HQ.transferFrom.call(addressuxydPm, addressPCcNz2d, uintM4VRvjb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolCvuNzf8 = await ETFXPool.new({from: accounts[3]});
		await ETFXPoolCvuNzf8.renounceOwnership.call({from: accounts[5]});
		const uint256JdtzALJ = await ETFXPoolCvuNzf8.totalSupply.call({from: accounts[0]});
		const stringMSnejZ = await ETFXPoolCvuNzf8.symbol.call({from: accounts[5]});

		await expect(ETFXPoolCvuNzf8.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool7h7cQ1 = await ETFXPool.new({from: accounts[2]});
		await ETFXPool7h7cQ1.exit.call({from: accounts[1]});

		await expect(ETFXPool7h7cQ1.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooluxT6fzI = await ETFXPool.new({from: accounts[2]});
		const uintAmGG9BH = BigInt("1973")
		const addressACOPFm = accounts[4]
		const uinto6ud6g = BigInt("109")
		const uinty6uH7zD = BigInt("964")
		const addressetO9Ksy = accounts[4]
		const addressnyR4Tjc = "0x0000000000000000000000000000000000000001"
		const boolRukuRnT = await ETFXPooluxT6fzI.increaseAllowance.call(addressACOPFm, uintAmGG9BH, {from: accounts[1]});
		await ETFXPooluxT6fzI.nonReentrant.call({from: accounts[4]});
		const uint256aMXDkjS = await ETFXPooluxT6fzI.withdraw.call(uinto6ud6g, {from: "0x0000000000000000000000000000000000000001"});
		const boolcZxAt97 = await ETFXPooluxT6fzI.transfer.call(addressetO9Ksy, uinty6uH7zD, {from: accounts[2]});
		const uint256NqkoqNi = await ETFXPooluxT6fzI.earned.call(addressnyR4Tjc, {from: accounts[1]});

		assert.equal(boolRukuRnT, true)
		await expect(ETFXPooluxT6fzI.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool7h7cQ1 = await ETFXPool.new({from: accounts[2]});
		const uintB3Efr5a = BigInt("1544")
		const addresscXeEh1 = accounts[2]
		const uint256DansnbY = await ETFXPool7h7cQ1.withdraw.call(uintB3Efr5a, {from: accounts[4]});
		const uint256VQRRZA3 = await ETFXPool7h7cQ1.earned.call(addresscXeEh1, {from: accounts[0]});
		await ETFXPool7h7cQ1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPool7h7cQ1.withdraw.call(uintB3Efr5a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUDlllny = await ETFXPool.new({from: accounts[1]});
		const addressKTJGfc7 = accounts[4]
		const addressX0kbnD = accounts[2]
		const addressL8MMwBd = accounts[1]
		const addressRdnPiKj = accounts[0]
		const uint256z6mXwrc = await ETFXPoolUDlllny.rewardPerToken.call({from: accounts[0]});
		const uint256oIGiEtp = await ETFXPoolUDlllny.allowance.call(addressX0kbnD, addressKTJGfc7, {from: accounts[3]});
		const uint256KZFE17F = await ETFXPoolUDlllny.earned.call(addressL8MMwBd, {from: accounts[2]});
		const uint256mcHGAha = await ETFXPoolUDlllny.earned.call(addressRdnPiKj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256oIGiEtp, BigInt("0"))
		assert.equal(uint256z6mXwrc, BigInt("0"))
		await expect(ETFXPoolUDlllny.earned.call(addressL8MMwBd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool7h7cQ1 = await ETFXPool.new({from: accounts[2]});
		const addressfkgNGWC = await ETFXPool7h7cQ1.owner.call({from: accounts[0]});
		await ETFXPool7h7cQ1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressfkgNGWC, 0xF8A87F10eaf1dEf573B9609bd97AaD93CA098722)
		await expect(ETFXPool7h7cQ1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEg7P3n9 = await ETFXPool.new({from: accounts[0]});
		const uintERGqfoE = BigInt("1135")
		const addresscqffV9 = accounts[4]
		const uintfahdMJ = BigInt("96")
		const uint256nZGSVMp = await ETFXPoolEg7P3n9.totalSupply.call({from: accounts[4]});
		const boolJfw7TZo = await ETFXPoolEg7P3n9.approve.call(addresscqffV9, uintERGqfoE, {from: accounts[0]});
		const uint256B1tVTnL = await ETFXPoolEg7P3n9.stake.call(uintfahdMJ, {from: accounts[0]});
		const uint256EqvSAU = await ETFXPoolEg7P3n9.totalSupply.call({from: accounts[3]});

		assert.equal(boolJfw7TZo, true)
		assert.equal(uint256nZGSVMp, BigInt("0"))
		await expect(ETFXPoolEg7P3n9.stake.call(uintfahdMJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUDlllny = await ETFXPool.new({from: accounts[1]});
		const uintIACHMWV = BigInt("1204")
		const addressYGliQNd = accounts[3]
		const addressC709EPo = accounts[4]
		const addressiGVC34G = accounts[2]
		const addressnigaLCu = accounts[1]
		const uint256z6mXwrc = await ETFXPoolUDlllny.rewardPerToken.call({from: accounts[0]});
		const bool8iajur = await ETFXPoolUDlllny.decreaseAllowance.call(addressYGliQNd, uintIACHMWV, {from: accounts[4]});
		const uint256oIGiEtp = await ETFXPoolUDlllny.allowance.call(addressiGVC34G, addressC709EPo, {from: accounts[3]});
		const uint256KZFE17F = await ETFXPoolUDlllny.earned.call(addressnigaLCu, {from: accounts[2]});

		assert.equal(uint256z6mXwrc, BigInt("0"))
		await expect(ETFXPoolUDlllny.decreaseAllowance.call(addressYGliQNd, uintIACHMWV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolmuSxwkM = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKtGyDKc = accounts[2]
		const uintiylxDas = BigInt("289")
		const addressWWMuMQo = accounts[1]
		const addressV7Sr9ah = accounts[3]
		const uint256Wpnrv5o = await ETFXPoolmuSxwkM.balanceOf.call(addressKtGyDKc, {from: accounts[2]});
		const boolqrRcVw = await ETFXPoolmuSxwkM.increaseAllowance.call(addressWWMuMQo, uintiylxDas, {from: accounts[3]});
		const uint256SgpeqrZ = await ETFXPoolmuSxwkM.earned.call(addressV7Sr9ah, {from: accounts[1]});
		await ETFXPoolmuSxwkM.renounceOwnership.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPool7h7cQ1 = await ETFXPool.new({from: accounts[2]});
		const addressLQFTm4 = accounts[1]
		const uintUlw9JqM = BigInt("1203")
		const addressRTJIFO4 = await ETFXPool7h7cQ1.transferOwnership.call(addressLQFTm4, {from: accounts[2]});
		const uint256sP9WXTk = await ETFXPool7h7cQ1.rewardPerToken.call({from: accounts[2]});
		const uint256Ox767H = await ETFXPool7h7cQ1.withdraw.call(uintUlw9JqM, {from: accounts[3]});

		assert.equal(uint256sP9WXTk, BigInt("0"))
		await expect(ETFXPool7h7cQ1.withdraw.call(uintUlw9JqM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKaVTM6 = await ETFXPool.new({from: accounts[2]});
		const uint8Ud6X1el = await ETFXPoolKaVTM6.decimals.call({from: accounts[2]});
		await ETFXPoolKaVTM6.renounceOwnership.call({from: accounts[2]});
		const stringSeTW4j = await ETFXPoolKaVTM6.symbol.call({from: accounts[4]});

		assert.equal(uint8Ud6X1el, BigInt("8"))
		await expect(ETFXPoolKaVTM6.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})